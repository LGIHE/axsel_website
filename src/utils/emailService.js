/**
 * Email Service for AXSEL Forms
 * Handles sending emails to info@axsel.africa
 *
 * Configuration:
 * 1. Option A: Using a backend API endpoint
 * 2. Option B: Using EmailJS service
 *
 * Replace API_ENDPOINT with your actual endpoint or configure EmailJS
 */

const API_ENDPOINT = process.env.REACT_APP_EMAIL_ENDPOINT || '/api/send-email';

/**
 * Send a contact form email
 * @param {Object} formData - Contact form data
 * @returns {Promise<Object>} Response from server
 */
export const sendContactEmail = async (formData) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'contact',
        to: 'info@axsel.africa',
        subject: `Contact Form: ${formData.subject}`,
        replyTo: formData.email,
        data: formData,
      }),
    });

    if (!response.ok) {
      throw new Error(`Email sending failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending contact email:', error);
    throw error;
  }
};

/**
 * Send a partnership inquiry email
 * @param {Object} formData - Partnership inquiry form data
 * @returns {Promise<Object>} Response from server
 */
export const sendPartnershipEmail = async (formData) => {
  try {
    const response = await fetch(API_ENDPOINT, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        type: 'partnership',
        to: 'info@axsel.africa',
        subject: `Partnership Inquiry: ${formData.organisation}`,
        replyTo: formData.email,
        data: formData,
      }),
    });

    if (!response.ok) {
      throw new Error(`Email sending failed: ${response.statusText}`);
    }

    return await response.json();
  } catch (error) {
    console.error('Error sending partnership email:', error);
    throw error;
  }
};

/**
 * Validate email format
 * @param {string} email - Email address to validate
 * @returns {boolean} True if valid email format
 */
export const isValidEmail = (email) => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
};
