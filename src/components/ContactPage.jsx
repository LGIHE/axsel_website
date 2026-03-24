import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import Navbar from './Navbar';
import ContactForm from './ContactForm';

const Footer = lazy(() => import('./Footer'));

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-academic-white">
      <Navbar />

      <main className="pt-40 pb-16">
        <section className="relative mt-16 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl border border-warm-gray-dark bg-white p-6 sm:p-10">
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta"
              >
                Reach AXSEL
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="mt-3 max-w-3xl text-3xl font-bold text-charcoal sm:text-5xl"
              >
                Contact
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.15 }}
                className="mt-4 max-w-3xl text-base leading-7 text-charcoal-light sm:text-lg"
              >
                Connect with the AXSEL team for partnership opportunities, technical questions,
                media requests, or general support.
              </motion.p>
            </div>
          </div>
        </section>

        <ContactForm />
      </main>

      <Suspense fallback={<div aria-hidden="true" style={{ minHeight: 320 }} />}>
        <Footer />
      </Suspense>
    </div>
  );
}
