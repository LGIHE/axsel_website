import fs from 'fs';
import path from 'path';

/**
 * Strategy PDF download endpoint (Vercel Serverless)
 * Handles both Vercel and local environments
 */
export default async function handler(req, res) {
  // Only accept GET requests
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Construct the path to the PDF file
    // In Vercel: /var/task/public/AXSEL_Strategy.pdf
    // Locally: ./public/AXSEL_Strategy.pdf
    let pdfPath;
    
    if (process.env.VERCEL) {
      // Vercel environment
      pdfPath = path.join(process.cwd(), 'public', 'AXSEL_Strategy.pdf');
    } else {
      // Local environment
      pdfPath = path.join(process.cwd(), 'public', 'AXSEL_Strategy.pdf');
    }

    // Check if file exists
    if (!fs.existsSync(pdfPath)) {
      return res.status(404).json({ error: 'PDF file not found' });
    }

    // Read the file
    const fileBuffer = fs.readFileSync(pdfPath);

    // Set response headers for PDF download
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', 'attachment; filename="AXSEL_Strategy.pdf"');
    res.setHeader('Content-Length', fileBuffer.length);

    // Send the file
    return res.status(200).send(fileBuffer);
  } catch (error) {
    console.error('Strategy download error:', error);
    return res.status(500).json({ 
      error: 'Failed to download file',
      details: process.env.NODE_ENV === 'development' ? error.message : undefined
    });
  }
}
