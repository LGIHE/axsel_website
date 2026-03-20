# Resend Email Integration Setup

## Overview

This project uses **Resend** as the email service provider to send contact form and partnership inquiry emails to `info@axsel.africa`.

## What is Resend?

Resend is a modern email service designed for developers. It provides:
- Simple API for sending transactional emails
- Built-in email templates support
- Real-time delivery tracking
- Excellent free tier (100 emails/day)
- Professional email infrastructure

Learn more: [https://resend.com](https://resend.com)

## Setup Instructions

### 1. Get Your Resend API Key

1. Visit [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Go to **API Keys** section
4. Copy your API key (starts with `re_`)

### 2. Configure Environment Variables

Your `.env.local` file is already configured with:

```env
VITE_EMAIL_ENDPOINT=/api/send-email
VITE_EMAIL_TO="info@axsel.africa"
RESEND_API_KEY="re_hBZrddPu_FiZL9yoUQdF9xJgN4YdxEgMQ"
RESEND_FROM_EMAIL="axsel-noreply@lgihe.org"
RESEND_EMAIL_TO="info@axsel.africa"
```

**Important**: 
- Keep your `RESEND_API_KEY` secret (never commit it to public repositories)
- Frontend variables must use `VITE_` prefix (Vite requirement) - do NOT use `REACT_APP_`
- Backend variables (RESEND_*) can use any name but won't be exposed to frontend

### 3. Verify Your Email Domain (Production)

For production deployment:

1. In Resend dashboard, go to **Domains**
2. Add your domain `axsel.africa`
3. Add the DNS records provided by Resend
4. Wait for verification (can take a few minutes)
5. Update `RESEND_FROM_EMAIL` to use your domain email (e.g., `noreply@axsel.africa`)

For development/testing, you can use Resend's default `onboarding@resend.dev`.

## How It Works

### Architecture

```
User fills form
    ↓
Frontend validates & sends POST to /api/send-email
    ↓
Backend (api/send-email.js) receives request
    ↓
Creates HTML email using templates
    ↓
Sends via Resend API
    ↓
Email arrives at info@axsel.africa
```

### API Endpoint (`api/send-email.js`)

The backend endpoint handles:
1. **Contact Form** — General inquiries
2. **Partnership Inquiry** — Partnership expressions of interest

**Request Format:**
```json
{
  "type": "contact" | "partnership",
  "to": "info@axsel.africa",
  "subject": "Subject line",
  "replyTo": "sender@example.com",
  "data": {
    "name": "Full Name",
    "email": "email@example.com",
    "phone": "phone number (optional)",
    "subject": "subject (contact only)",
    "message": "message content",
    "organisation": "org name (partnership only)",
    "orgType": "org type (partnership only)"
  }
}
```

**Response:**
```json
{
  "success": true,
  "message": "Email sent successfully",
  "emailId": "000000000000000000000000"
}
```

## Email Templates

Two HTML email templates are used (in `src/utils/emailTemplates.js`):

1. **Contact Form Template** — Displays contact inquiry details
2. **Partnership Inquiry Template** — Displays partnership inquiry details

Both templates include:
- Professional HTML styling
- All form field data
- Reply-to capability
- Footer with website link

## Deployment

### Vercel Deployment

Resend works perfectly with Vercel:

1. Push your code to your repository
2. Import project in Vercel
3. **Add environment variables in Vercel Settings → Environment Variables:**
   - `VITE_EMAIL_ENDPOINT` = `/api/send-email` (frontend)
   - `VITE_EMAIL_TO` = `info@axsel.africa` (frontend)
   - `RESEND_API_KEY` = your API key from Resend (backend)
   - `RESEND_FROM_EMAIL` = your sender email (backend)
   - `RESEND_EMAIL_TO` = `info@axsel.africa` (backend)
4. Deploy

**Important:** Frontend variables MUST start with `VITE_` (Vite requirement), not `REACT_APP_`. This is why emails weren't sending - the frontend couldn't access the environment variables!

The `/api/send-email.js` file will automatically become a serverless function on Vercel.

### Netlify Deployment

For Netlify, convert the API route:

```javascript
// netlify/functions/send-email.js
import { Resend } from 'resend';
import { contactFormTemplate, partnerInquiryTemplate } from '../../src/utils/emailTemplates.js';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async (req, context) => {
  if (req.method !== 'POST') {
    return new Response('Method not allowed', { status: 405 });
  }

  try {
    const { type, to, subject, replyTo, data } = await req.json();

    // ... rest of the logic from api/send-email.js
    
    const result = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || 'onboarding@resend.dev',
      to: to,
      replyTo: replyTo || data.email,
      subject: subject,
      html: type === 'contact' ? contactFormTemplate(data) : partnerInquiryTemplate(data),
    });

    if (result.error) {
      return new Response(JSON.stringify({ error: 'Failed to send email' }), { 
        status: 500,
        headers: { 'Content-Type': 'application/json' }
      });
    }

    return new Response(JSON.stringify({ success: true, emailId: result.data?.id }), { 
      status: 200,
      headers: { 'Content-Type': 'application/json' }
    });
  } catch (error) {
    console.error('Email error:', error);
    return new Response(JSON.stringify({ error: 'Failed to send email' }), { 
      status: 500,
      headers: { 'Content-Type': 'application/json' }
    });
  }
};
```

## Testing

To test the email functionality:

### Local Testing

1. Start development server:
   ```bash
   npm run dev
   ```

2. Fill out the contact or partnership form

3. For Vercel Functions locally, npm install and use:
   ```bash
   npm run build
   npm run preview
   ```

4. Check Resend dashboard for delivered emails

### Resend Dashboard

Monitor email activity in your Resend dashboard:
- View sent emails
- Check delivery status
- See bounce/complaint rates
- Track opens and clicks

## Troubleshooting

### Email Not Sending

**Check the following:**

1. **API Key**
   - Verify `RESEND_API_KEY` is correct and not expired
   - Check it's set as environment variable on hosting platform

2. **Email Format**
   - Ensure form data is valid
   - Check email address format is correct

3. **Resend Account**
   - Verify account isn't rate-limited
   - Check free tier limit (100/day)
   - Verify domain verification for production

4. **Check Logs**
   ```bash
   # Check Vercel logs
   vercel logs --follow
   
   # Check Netlify logs
   netlify log tail
   ```

### Missing Emails

1. Check **Resend Dashboard** for delivery status
2. Check **spam/junk folder** in email client
3. Verify sender domain is verified
4. Check email domain reputation

### CORS Errors

The API endpoint is same-origin, so CORS shouldn't be an issue. If you get CORS errors:

1. Verify endpoint URL in `REACT_APP_EMAIL_ENDPOINT`
2. Check that request headers are correct
3. Ensure POST method is used

## Best Practices

1. **Never commit API keys** to version control
   - Use `.env.local` (already in `.gitignore`)
   - Use platform-specific secret management

2. **Rate limiting** — Consider adding:
   ```javascript
   // Simple rate limiting
   const sendCount = {};
   if (sendCount[ip] > 10) return 429; // Too many requests
   ```

3. **Input validation** — Always validate on backend:
   ```javascript
   if (!isValidEmail(data.email)) throw new Error('Invalid email');
   ```

4. **Error handling** — Always catch and log errors properly

5. **Monitoring** — Set up alerts for:
   - Failed email sends
   - High bounce rates
   - Rate limit hits

## Support

- **Resend Documentation**: [https://resend.com/docs](https://resend.com/docs)
- **Resend Status Page**: [https://status.resend.com](https://status.resend.com)
- **Resend Discord**: Community support available

## Files Involved

- **api/send-email.js** — Main backend endpoint
- **src/utils/emailService.js** — Frontend email service
- **src/utils/emailTemplates.js** — Email HTML templates
- **src/components/ContactForm.jsx** — Contact form component
- **src/components/PartnerInquiry.jsx** — Partnership inquiry component
- **.env.local** — Environment variables
