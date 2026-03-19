# Email Integration Setup Guide

## Overview

The AXSEL website has been configured to send contact form and partnership inquiry emails to `info@axsel.africa`. This guide explains the setup and how to deploy the email backend.

## Email Templates

Two email templates have been created:
- **Contact Form Template** (`src/utils/emailTemplates.js`): For general contact inquiries
- **Partnership Inquiry Template**: For partnership expressions of interest

Both templates include:
- Sender's contact information
- Message content
- Professional HTML formatting
- Reply-to functionality

## Current Architecture

The forms are configured to send emails through a backend API endpoint. The flow is:

```
User fills form → Frontend validation → POST request to backend → Email sent to info@axsel.africa
```

## Setup Options

### Option 1: Vercel Functions (Recommended)

If hosting on Vercel, create `api/send-email.js`:

```javascript
// api/send-email.js
const nodemailer = require('nodemailer');
const { contactFormTemplate, partnerInquiryTemplate } = require('../src/utils/emailTemplates');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, to, subject, replyTo, data } = req.body;

    // Validate required fields
    if (!to || !subject || !data) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Select template based on type
    const htmlContent = type === 'contact' 
      ? contactFormTemplate(data)
      : partnerInquiryTemplate(data);

    // Send email
    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@axsel.africa',
      to: to,
      replyTo: replyTo,
      subject: subject,
      html: htmlContent,
    });

    return res.status(200).json({ success: true, message: 'Email sent successfully' });
  } catch (error) {
    console.error('Email sending error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
```

**Environment Variables** (add to `.env.local`):
```
REACT_APP_EMAIL_ENDPOINT=/api/send-email
EMAIL_SERVICE=gmail
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=your-app-password
EMAIL_FROM=noreply@axsel.africa
```

### Option 2: Netlify Functions

Create `functions/send-email.js`:

```javascript
// functions/send-email.js
const nodemailer = require('nodemailer');
const { contactFormTemplate, partnerInquiryTemplate } = require('../src/utils/emailTemplates');

const transporter = nodemailer.createTransport({
  service: process.env.EMAIL_SERVICE || 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.handler = async (event) => {
  if (event.httpMethod !== 'POST') {
    return {
      statusCode: 405,
      body: JSON.stringify({ error: 'Method not allowed' }),
    };
  }

  try {
    const { type, to, subject, replyTo, data } = JSON.parse(event.body);

    const htmlContent = type === 'contact' 
      ? contactFormTemplate(data)
      : partnerInquiryTemplate(data);

    await transporter.sendMail({
      from: process.env.EMAIL_FROM || 'noreply@axsel.africa',
      to: to,
      replyTo: replyTo,
      subject: subject,
      html: htmlContent,
    });

    return {
      statusCode: 200,
      body: JSON.stringify({ success: true, message: 'Email sent successfully' }),
    };
  } catch (error) {
    console.error('Email sending error:', error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: 'Failed to send email' }),
    };
  }
};
```

### Option 3: External Email Service (SendGrid, Mailgun, etc.)

These services offer free tiers and are very reliable. Examples below:

#### Using SendGrid:

```javascript
// api/send-email.js
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(process.env.SENDGRID_API_KEY);
const { contactFormTemplate, partnerInquiryTemplate } = require('../src/utils/emailTemplates');

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { type, to, subject, replyTo, data } = req.body;

    const htmlContent = type === 'contact' 
      ? contactFormTemplate(data)
      : partnerInquiryTemplate(data);

    await sgMail.send({
      to: to,
      from: process.env.SENDGRID_FROM_EMAIL,
      replyTo: replyTo,
      subject: subject,
      html: htmlContent,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Email error:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
```

## Backend Requirements

Regardless of which service you choose, you need to:

1. **Install dependencies** (for Vercel/Netlify with Nodemailer):
   ```bash
   npm install nodemailer
   ```

2. **Create the API endpoint** that accepts POST requests with this structure:
   ```json
   {
     "type": "contact" | "partnership",
     "to": "info@axsel.africa",
     "subject": "string",
     "replyTo": "user@example.com",
     "data": {
       "name": "string",
       "email": "string",
       "phone": "string",
       "subject": "string",
       "message": "string",
       "organisation": "string (partnership only)",
       "orgType": "string (partnership only)"
     }
   }
   ```

3. **Configure environment variables** for email service credentials

4. **Test the endpoint** before deploying

## Environment Configuration

Update `.env.local` with your email service configuration:

```env
# Email API endpoint
REACT_APP_EMAIL_ENDPOINT=/api/send-email

# Or use external service endpoint:
# REACT_APP_EMAIL_ENDPOINT=https://your-service.com/email/send
```

## Testing

To test the email functionality:

1. Fill out either form on the website
2. Click submit
3. Check that the email is received at `info@axsel.africa`
4. Verify the HTML template renders correctly

## Troubleshooting

### Emails not sending:
- Check that the backend endpoint is accessible
- Verify email service credentials in environment variables
- Check browser console for error messages
- Verify the endpoint URL matches `REACT_APP_EMAIL_ENDPOINT`

### Email formatting issues:
- Check `src/utils/emailTemplates.js` for template syntax
- Test email rendering in email client (sometimes Gmail handles HTML differently)
- Verify all form fields have values

### CORS issues:
- If using external API, ensure it accepts requests from your domain
- Backend API should set appropriate CORS headers

## Security Considerations

1. **Validate all inputs** on the backend (current frontend validation is not sufficient)
2. **Rate limit** email submissions to prevent abuse
3. **Use HTTPS** for all email endpoints
4. **Store credentials** in environment variables (never in code)
5. **Sanitize user input** to prevent injection attacks

## Production Deployment

When deploying to production:

1. Update `REACT_APP_EMAIL_ENDPOINT` to production URL
2. Ensure all environment variables are set on hosting platform
3. Test the complete email flow
4. Set up monitoring/alerts for failed emails
5. Consider auto-responder email for user confirmation

## Files Modified

- `src/utils/emailTemplates.js` - Email HTML templates
- `src/utils/emailService.js` - Frontend email service functions
- `src/components/ContactForm.jsx` - Updated with email integration
- `src/components/PartnerInquiry.jsx` - Updated with email integration
