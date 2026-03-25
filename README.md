# AXSEL Website

The official website for **AXSEL** — the African Centre for Social Emotional Learning (SEL). AXSEL is the continental hub for SEL accreditation, curriculum integration, and evidence-informed practice across Africa.

## About AXSEL

AXSEL is dedicated to:
- **Accreditation**: Establishing SEL standards across Africa
- **Evidence-Informed Practice**: Promoting research-backed SEL methodologies
- **Continental Collaboration**: Building systemic change through partnerships across African nations
- **Curriculum Integration**: Supporting institutions in integrating SEL into their programs

The center is housed within the Luigi Giussani Institute of Higher Education (LGIHE) in Kampala, Uganda.

## Project Overview

This is a modern, responsive website built with React and Vite that showcases AXSEL's programs, resources, and impact. The site includes:

- **Hero Section**: Compelling introduction to AXSEL's mission
- **Evidence Hub**: Research papers, policy briefs, and technical notes
- **ACIP Portal**: Information on the AXSEL Certified Integration Practitioner accreditation
- **SEL Dashboard**: Interactive state of SEL data visualization
- **ALiVE Legacy**: Information about the historical ALiVE Initiative
- **Contact & Partner Inquiry Forms**: Engagement opportunities
- **Impact Counter**: Tracking AXSEL's reach and influence

## Tech Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **Deployment**: Ready for production deployment
- **Icons**: Lucide React

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The development server will start at `http://localhost:5173`

### Building

```bash
npm run build
```

### Preview

```bash
npm run preview
```

## Environment Variables

Set these variables in your deployment platform before enabling contact and partnership forms.

### Server-side required

- `RESEND_API_KEY`: Resend API key used by API handlers.
- `RESEND_FROM_EMAIL`: Verified sender address used for outgoing mail.
- `RESEND_EMAIL_TO`: Internal recipient inbox for form submissions.
- `ALLOWED_ORIGINS`: Comma-separated list of trusted site origins allowed to call the email API.

Example:

```env
RESEND_API_KEY=re_xxxxxxxxx
RESEND_FROM_EMAIL=noreply@axsel.africa
RESEND_EMAIL_TO=info@axsel.africa
ALLOWED_ORIGINS=https://axsel.africa,https://www.axsel.africa
```

### Optional

- `BACKEND_PORT`: Local Express backend port (default: `3001`).
- `VITE_EMAIL_ENDPOINT`: Frontend endpoint for submissions (default: `/api/send-email`).

### Privacy and security notes

- Keep `RESEND_API_KEY` server-only. Never expose it in client variables.
- Do not use a client-side recipient variable; recipient routing is enforced on the server.
- Keep `ALLOWED_ORIGINS` up to date for every production/staging domain.

## Project Structure

```
src/
├── components/        # React components
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── EvidenceHub.jsx
│   ├── ACSSPortal.jsx
│   ├── SELDashboard.jsx
│   ├── ALiVELegacy.jsx
│   ├── Footer.jsx
│   └── ...other components
├── utils/
│   └── animations.js  # Animation utilities
├── App.jsx            # Main app component
└── main.jsx          # Entry point
```

## Contact

- **Location**: Luzira, Kampala, Uganda
- **Phone**: +256 771 234567
- **Social Media**: 
  - [Twitter/X](https://x.com/axselafrica)
  - [LinkedIn](https://www.linkedin.com/company/axselafrica/)
  - [Facebook](https://www.facebook.com/axselafrica)
  - [Instagram](https://www.instagram.com/axselafrica/)
  - [YouTube](https://www.youtube.com/@axselafrica)

## License

This project is maintained by the Luigi Giussani Institute of Higher Education.
