import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ContactForm from './ContactForm';

const Footer = lazy(() => import('./Footer'));

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-academic-white">
      <Navbar />

      <main className="pt-18">
        <ContactForm />
      </main>

      <Suspense fallback={<div aria-hidden="true" style={{ minHeight: 320 }} />}>
        <Footer />
      </Suspense>
    </div>
  );
}
