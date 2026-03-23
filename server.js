import express from 'express';
import cors from 'cors';
import { Resend } from 'resend';
import { contactFormTemplate, partnerInquiryTemplate } from './src/utils/emailTemplates.js';
import dotenv from 'dotenv';
import path from 'path';
import { fileURLToPath } from 'url';

// Load environment variables
dotenv.config({ path: '.env.local' });

// Get __dirname for ES modules
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const PORT = process.env.BACKEND_PORT || 3001;

// Initialize Resend with API key
const resend = new Resend(process.env.RESEND_API_KEY);

// Middleware
app.use(cors());
app.use(express.json());

// Health check endpoint
app.get('/health', (req, res) => {
  res.json({ status: 'ok' });
});

// Email sending endpoint
app.post('/api/send-email', async (req, res) => {
  try {
    const { type, to, subject, replyTo, data } = req.body;

    // Validate required fields
    if (!to || !subject || !data) {
      return res.status(400).json({
        error: 'Missing required fields: to, subject, or data',
      });
    }

    // Validate type
    if (!['contact', 'partnership'].includes(type)) {
      return res.status(400).json({
        error: 'Invalid type. Must be "contact" or "partnership"',
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
      to: to,
      replyTo: replyTo || data.email,
      subject: subject,
      html: htmlContent,
    });

    // Check for errors in response
    if (result.error) {
      console.error('Resend API error:', result.error);
      return res.status(500).json({
        error: 'Failed to send email',
        details: result.error,
      });
    }

    // Success response
    return res.status(200).json({
      success: true,
      message: 'Email sent successfully',
      emailId: result.data?.id,
    });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({
      error: 'Failed to send email',
      details: error.message,
    });
  }
});

// Strategy PDF download endpoint
app.get('/strategy', (req, res) => {
  try {
    const pdfPath = path.join(__dirname, 'public', 'AXSEL_Strategy.pdf');
    res.download(pdfPath, 'AXSEL_Strategy.pdf', (err) => {
      if (err) {
        console.error('PDF download error:', err);
        res.status(404).json({ error: 'PDF file not found' });
      }
    });
  } catch (error) {
    console.error('Strategy download error:', error);
    res.status(500).json({ error: 'Failed to download file' });
  }
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: 'Not Found' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✓ Backend server running on http://localhost:${PORT}`);
  console.log(`✓ Email endpoint: POST http://localhost:${PORT}/api/send-email`);
  console.log(`✓ Strategy download: GET http://localhost:${PORT}/strategy`);
});
