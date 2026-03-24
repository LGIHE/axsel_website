import { lazy, Suspense } from 'react';
import Navbar from './Navbar';

const Footer = lazy(() => import('./Footer'));

export default function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-academic-white">
      <Navbar />

      <main className="px-4 pb-16 pt-24 sm:px-6 lg:px-8">
        <section className="mx-auto max-w-4xl rounded-3xl border border-warm-gray-dark bg-white p-6 shadow-sm sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">Privacy</p>
          <h1 className="mt-3 text-3xl font-bold text-charcoal sm:text-4xl">Privacy Policy</h1>
          <p className="mt-3 text-sm text-charcoal-light">Last updated: 24 March 2026</p>

          <div className="mt-8 space-y-8 text-sm leading-7 text-charcoal-light sm:text-base">
            <section>
              <h2 className="text-xl font-semibold text-charcoal">1. Who We Are</h2>
              <p className="mt-2">
                AXSEL (Africa Center of Social Emotional Learning) is an initiative of Luigi Giussani Institute of
                Higher Education. This policy explains how we collect, use, and protect personal data through this
                website.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">2. Data We Collect</h2>
              <p className="mt-2">When you submit a contact or partnership form, we may collect:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Name</li>
                <li>Email address</li>
                <li>Phone number (optional)</li>
                <li>Organisation details (for partnership enquiries)</li>
                <li>Your message content</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">3. Why We Process Data</h2>
              <p className="mt-2">We process this data only to:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Respond to your enquiry</li>
                <li>Evaluate collaboration requests</li>
                <li>Provide requested programme or partnership information</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">4. Legal Basis</h2>
              <p className="mt-2">
                We process personal data based on your consent, which you provide by submitting our web forms after
                confirming the consent checkbox.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">5. Data Processors</h2>
              <p className="mt-2">
                We use third-party processors to operate this website and communicate with you. This includes our email
                delivery provider (Resend) and infrastructure hosting providers.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">6. Retention</h2>
              <p className="mt-2">
                Contact and partnership enquiry data is retained only as long as reasonably necessary to handle your
                request and operational follow-up, and typically no longer than 12 months unless a longer period is
                required by law or for an active engagement.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">7. Your Rights</h2>
              <p className="mt-2">Subject to applicable law, you may request:</p>
              <ul className="mt-2 list-disc pl-6">
                <li>Access to your personal data</li>
                <li>Correction of inaccurate personal data</li>
                <li>Deletion of your personal data</li>
                <li>Withdrawal of consent for future processing</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">8. Security Measures</h2>
              <p className="mt-2">
                We apply technical and organizational safeguards including request validation, origin restrictions,
                traffic throttling, and access controls to reduce risk of unauthorized access or misuse.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold text-charcoal">9. Contact</h2>
              <p className="mt-2">
                For privacy requests or questions, contact us at{' '}
                <a href="mailto:info@axsel.africa" className="font-semibold text-terracotta hover:text-terracotta-dark">
                  info@axsel.africa
                </a>
                .
              </p>
            </section>
          </div>
        </section>
      </main>

      <Suspense fallback={<div aria-hidden="true" style={{ minHeight: 320 }} />}>
        <Footer />
      </Suspense>
    </div>
  );
}
