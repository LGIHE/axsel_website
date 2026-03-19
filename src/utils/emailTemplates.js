/**
 * Email Templates for AXSEL Forms
 * These templates are used to generate HTML emails for contact forms and partnership inquiries
 */

export const contactFormTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Contact Form Submission</title>
        <style>
            body {
                font-family: 'Poppins', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f5f5f5;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            .header {
                border-bottom: 3px solid #E85D3A;
                padding-bottom: 20px;
                margin-bottom: 30px;
            }
            .header h1 {
                margin: 0;
                color: #1a1a1a;
                font-size: 24px;
            }
            .header p {
                margin: 5px 0 0 0;
                color: #666;
                font-size: 14px;
            }
            .section {
                margin-bottom: 25px;
            }
            .label {
                font-weight: 600;
                color: #E85D3A;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
            }
            .value {
                color: #333;
                font-size: 14px;
                line-height: 1.8;
                word-break: break-word;
            }
            .divider {
                border-top: 1px solid #e0e0e0;
                margin: 20px 0;
            }
            .footer {
                text-align: center;
                color: #999;
                font-size: 12px;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
            }
            .footer a {
                color: #E85D3A;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>New Contact Form Submission</h1>
                <p>Received from the AXSEL website</p>
            </div>

            <div class="section">
                <div class="label">Full Name</div>
                <div class="value">${escapeHtml(formData.name)}</div>
            </div>

            <div class="section">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${escapeHtml(formData.email)}">${escapeHtml(formData.email)}</a></div>
            </div>

            ${formData.phone ? `
            <div class="section">
                <div class="label">Phone</div>
                <div class="value">${escapeHtml(formData.phone)}</div>
            </div>
            ` : ''}

            <div class="section">
                <div class="label">Subject</div>
                <div class="value">${escapeHtml(formData.subject)}</div>
            </div>

            <div class="divider"></div>

            <div class="section">
                <div class="label">Message</div>
                <div class="value">${escapeHtml(formData.message).replace(/\n/g, '<br>')}</div>
            </div>

            <div class="footer">
                <p>This is an automated message from the AXSEL Website. Please reply to the sender's email address above to respond to this inquiry.</p>
                <p><a href="https://axsel.africa">Visit AXSEL Website</a></p>
            </div>
        </div>
    </body>
    </html>
  `;
};

export const partnerInquiryTemplate = (formData) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Partnership Expression of Interest</title>
        <style>
            body {
                font-family: 'Poppins', Arial, sans-serif;
                line-height: 1.6;
                color: #333;
                background-color: #f5f5f5;
            }
            .container {
                max-width: 600px;
                margin: 0 auto;
                background-color: #ffffff;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 2px 8px rgba(0,0,0,0.1);
            }
            .header {
                border-bottom: 3px solid #E85D3A;
                padding-bottom: 20px;
                margin-bottom: 30px;
            }
            .header h1 {
                margin: 0;
                color: #1a1a1a;
                font-size: 24px;
            }
            .header p {
                margin: 5px 0 0 0;
                color: #666;
                font-size: 14px;
            }
            .section {
                margin-bottom: 25px;
            }
            .label {
                font-weight: 600;
                color: #E85D3A;
                font-size: 12px;
                text-transform: uppercase;
                letter-spacing: 0.5px;
                margin-bottom: 5px;
            }
            .value {
                color: #333;
                font-size: 14px;
                line-height: 1.8;
                word-break: break-word;
            }
            .divider {
                border-top: 1px solid #e0e0e0;
                margin: 20px 0;
            }
            .footer {
                text-align: center;
                color: #999;
                font-size: 12px;
                margin-top: 30px;
                padding-top: 20px;
                border-top: 1px solid #e0e0e0;
            }
            .footer a {
                color: #E85D3A;
                text-decoration: none;
            }
        </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h1>Partnership Expression of Interest</h1>
                <p>New partnership inquiry from the AXSEL website</p>
            </div>

            <div class="section">
                <div class="label">Contact Name</div>
                <div class="value">${escapeHtml(formData.name)}</div>
            </div>

            <div class="section">
                <div class="label">Email</div>
                <div class="value"><a href="mailto:${escapeHtml(formData.email)}">${escapeHtml(formData.email)}</a></div>
            </div>

            ${formData.phone ? `
            <div class="section">
                <div class="label">Phone</div>
                <div class="value">${escapeHtml(formData.phone)}</div>
            </div>
            ` : ''}

            <div class="section">
                <div class="label">Organisation</div>
                <div class="value">${escapeHtml(formData.organisation)}</div>
            </div>

            <div class="section">
                <div class="label">Organisation Type</div>
                <div class="value">${escapeHtml(formData.orgType)}</div>
            </div>

            <div class="divider"></div>

            <div class="section">
                <div class="label">Partnership Interest</div>
                <div class="value">${escapeHtml(formData.message).replace(/\n/g, '<br>')}</div>
            </div>

            <div class="footer">
                <p>This is an automated message from the AXSEL Website. Please reply to the sender's email address above to respond to this inquiry.</p>
                <p><a href="https://axsel.africa">Visit AXSEL Website</a></p>
            </div>
        </div>
    </body>
    </html>
  `;
};

// Utility function to escape HTML characters - works in both browser and Node.js
const escapeHtml = (text) => {
  if (!text) return '';
  const htmlEscapeMap = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#39;',
    '/': '&#x2F;',
  };
  return String(text).replace(/[&<>"'\/]/g, (char) => htmlEscapeMap[char]);
};
