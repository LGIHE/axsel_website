import { Resend } from 'resend';
import { contactFormTemplate, partnerInquiryTemplate } from '../src/utils/emailTemplates.js';

const resend = new Resend(process.env.RESEND_API_KEY);

/**
 * Email sending endpoint using Resend API
 * Handles both contact form and partnership inquiry emails
 */
export default async function handler(req, res) {
  // Only accept POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, to, subject, replyTo, data } = req.body;
    
    // Use environment variable as fallback for recipient email
    const recipientEmail = to || process.env.RESEND_EMAIL_TO || 'info@axsel.africa';

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
        error: 'Failed to send email',
        details: result.error 
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
      error: 'Failed to send email',
      details: error.message 
    });
  }
}
