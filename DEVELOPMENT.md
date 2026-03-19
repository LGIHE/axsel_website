# Development Setup Guide

## Running the Project Locally

The AXSEL website has both a **frontend** (Vite/React) and a **backend** (Express) for handling emails. 

### Option 1: Run Both Frontend and Backend Together (Recommended)

```bash
npm run dev:all
```

This will start:
- **Backend**: http://localhost:3001 (handles email submissions)
- **Frontend**: http://localhost:5173 (Vite dev server)

The frontend automatically proxies API requests to the backend.

### Option 2: Run Them Separately

**Terminal 1 - Backend:**
```bash
npm run dev:backend
```

**Terminal 2 - Frontend:**
```bash
npm run dev
```

## Project Structure

```
project/
├── server.js                    # Express backend server
├── api/
│   └── send-email.js           # Vercel serverless function
├── src/
│   ├── components/             # React components
│   └── utils/
│       ├── emailService.js     # Frontend email service
│       └── emailTemplates.js   # Email HTML templates
├── vite.config.js              # Vite config with dev proxy
├── package.json                # Dependencies and scripts
└── .env.local                  # Environment variables (not in git)
```

## How Development Works

### Frontend → Backend Flow

1. User fills out contact/partnership form
2. Frontend validates form data
3. Frontend sends POST request to `/api/send-email`
4. Vite dev server **proxies** the request to `http://localhost:3001/api/send-email`
5. Express backend receives request
6. Backend generates HTML email using templates
7. Backend sends email via **Resend API**
8. Response sent back to frontend
9. Frontend shows success/error message

## Environment Variables

Key variables in `.env.local`:

```env
# Frontend - Email API endpoint (relative path)
REACT_APP_EMAIL_ENDPOINT=/api/send-email

# Backend - Resend API configuration
RESEND_API_KEY=your_resend_api_key
RESEND_FROM_EMAIL=noreply@axsel.africa
```

**Important:** Never commit `.env.local` to git!

## Testing Forms

1. Start the dev server: `npm run dev:all`
2. Navigate to http://localhost:5173
3. Fill out Contact Form or Partnership Inquiry
4. Submit the form
5. Check the terminal logs for confirmation
6. Check your email inbox for the test email

### Expected Console Output

**Backend should show:**
```
✓ Backend server running on http://localhost:3001
✓ Email endpoint: POST http://localhost:3001/api/send-email
```

**After form submission:**
```
Email sending successful - Sent to info@axsel.africa
```

## Deployment

### To Vercel

1. Push to GitHub
2. Import project in Vercel
3. Add environment variables: `RESEND_API_KEY`, `RESEND_FROM_EMAIL`
4. Deploy

Vercel will automatically use `/api/send-email.js` as a serverless function.

### To Netlify

Create `netlify/functions/send-email.js` based on `api/send-email.js` format.

## Troubleshooting

### Backend Not Starting

```bash
# Check if port 3001 is in use
lsof -i :3001

# Kill the process using the port
kill -9 <PID>

# Try a different port
BACKEND_PORT=3002 npm run dev:backend
```

### 404 Error on Form Submission

1. Ensure backend is running: `npm run dev:backend`
2. Check that Vite proxy is configured in `vite.config.js`
3. Verify `REACT_APP_EMAIL_ENDPOINT=/api/send-email` in `.env.local`

### Emails Not Sending

1. Check `RESEND_API_KEY` is valid and not empty
2. Check backend logs for Resend API errors
3. Verify recipient email format
4. Check Resend dashboard for bounce/block notifications

### CORS Errors

The Express backend should handle CORS. If you see CORS errors:

1. Verify `cors()` is imported and used in `server.js`
2. Check that proxy is configured in `vite.config.js`
3. Ensure frontend is making requests to relative path `/api/send-email`

## Available npm Scripts

```bash
npm run dev              # Start frontend only (Vite)
npm run dev:backend     # Start backend only (Express)
npm run dev:all         # Start frontend + backend (concurrently)
npm run build           # Build for production
npm run lint            # Run ESLint
npm run preview         # Preview production build
```

## Next Steps

1. **Test locally** with `npm run dev:all`
2. **Deploy to Vercel** when ready
3. **Verify domain** in Resend for production emails
4. **Monitor email delivery** in Resend dashboard

## Support

- **Frontend**: Vite docs - https://vitejs.dev
- **Backend**: Express docs - https://expressjs.com
- **Email**: Resend docs - https://resend.com/docs
