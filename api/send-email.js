import { Resend } from 'resend';
import { contactFormTemplate, partnerInquiryTemplate } from '../src/utils/emailTemplates.js';

const resend = new Resend(process.env.RESEND_API_KEY);
const RATE_WINDOW_MS = 15 * 60 * 1000;
const RATE_MAX_REQUESTS = 6;
const MAX_SUBJECT_LENGTH = 160;
const MAX_MESSAGE_LENGTH = 2500;
const MAX_NAME_LENGTH = 120;
const MAX_ORG_LENGTH = 180;
const MAX_PHONE_LENGTH = 40;
const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const rateBuckets = new Map();

function safeText(value) {
  if (typeof value !== 'string') return '';
  return value.trim();
}

function isEmail(value) {
  return EMAIL_REGEX.test(value);
}

function getClientIp(req) {
  const forwarded = req.headers['x-forwarded-for'];
  if (typeof forwarded === 'string' && forwarded.length > 0) {
    return forwarded.split(',')[0].trim();
  }
  return req.socket?.remoteAddress || 'unknown';
}

function rateLimitExceeded(ip) {
  const now = Date.now();
  const bucket = rateBuckets.get(ip);

  if (!bucket || now > bucket.resetAt) {
    rateBuckets.set(ip, { count: 1, resetAt: now + RATE_WINDOW_MS });
    return false;
  }

  if (bucket.count >= RATE_MAX_REQUESTS) {
    return true;
  }

  bucket.count += 1;
  return false;
}

function isAllowedOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true;

  const allowedOrigins = (process.env.ALLOWED_ORIGINS || '')
    .split(',')
    .map((item) => item.trim())
    .filter(Boolean);

  if (allowedOrigins.length === 0) return true;
  return allowedOrigins.includes(origin);
}

function validatePayload(type, data, subject, replyTo, consent) {
  const cleanSubject = safeText(subject);
  const cleanReplyTo = safeText(replyTo);
  const cleanName = safeText(data?.name);
  const cleanEmail = safeText(data?.email);
  const cleanPhone = safeText(data?.phone);
  const cleanMessage = safeText(data?.message);
  const cleanOrganisation = safeText(data?.organisation);

  if (!consent) {
    return 'Consent is required.';
  }

  if (!cleanSubject || cleanSubject.length > MAX_SUBJECT_LENGTH) {
    return 'Invalid subject.';
  }

  if (!cleanName || cleanName.length > MAX_NAME_LENGTH) {
    return 'Invalid name.';
  }

  if (!cleanEmail || !isEmail(cleanEmail)) {
    return 'Invalid email address.';
  }

  if (cleanReplyTo && !isEmail(cleanReplyTo)) {
    return 'Invalid reply-to address.';
  }

  if (cleanPhone.length > MAX_PHONE_LENGTH) {
    return 'Invalid phone number.';
  }

  if (!cleanMessage || cleanMessage.length > MAX_MESSAGE_LENGTH) {
    return 'Invalid message.';
  }

  if (type === 'partnership' && (!cleanOrganisation || cleanOrganisation.length > MAX_ORG_LENGTH)) {
    return 'Invalid organisation.';
  }

  return null;
}

/**
 * Email sending endpoint using Resend API
 * Handles both contact form and partnership inquiry emails
 */
export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  if (!isAllowedOrigin(req)) {
    return res.status(403).json({ error: 'Origin not allowed' });
  }

  const ip = getClientIp(req);
  if (rateLimitExceeded(ip)) {
    return res.status(429).json({ error: 'Too many requests. Please try again later.' });
  }

  try {
    const { type, subject, replyTo, consent, data } = req.body || {};
    
    // Always use server-side recipient to prevent client-side abuse.
    const recipientEmail = process.env.RESEND_EMAIL_TO || 'info@axsel.africa';

    // Validate required fields
    if (!subject || !data) {
      return res.status(400).json({ 
        error: 'Missing required fields: subject or data' 
      });
    }

    // Validate type
    if (!['contact', 'partnership'].includes(type)) {
      return res.status(400).json({ 
        error: 'Invalid type. Must be "contact" or "partnership"' 
      });
    }

    const validationError = validatePayload(type, data, subject, replyTo, consent);
    if (validationError) {
      return res.status(400).json({ error: validationError });
    }

    // Select appropriate email template
    let htmlContent;
    if (type === 'contact') {
      htmlContent = contactFormTemplate(data);
    } else if (type === 'partnership') {
      htmlContent = partnerInquiryTemplate(data);
    }

    // Send email using Resend
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: recipientEmail,
      replyTo: replyTo || data.email,
      subject: subject,
      html: htmlContent,
    });

    // Check for errors in response
    if (result.error) {
      console.error('Resend API error:', result.error);
      return res.status(500).json({ 
        error: 'Failed to send email' 
      });
    }

    // Success response
    return res.status(200).json({ 
      success: true, 
      message: 'Email sent successfully',
      emailId: result.data?.id 
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ 
      error: 'Failed to send email' 
    });
  }
}
