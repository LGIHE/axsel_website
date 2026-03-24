import { lazy, Suspense } from 'react';
import Navbar from './Navbar';

const Footer = lazy(() => import('./Footer'));
const ACSSPortal = lazy(() => import('./ACSSPortal'));

export default function ACIPProgramPage() {
  return (
    <div className="min-h-screen bg-academic-white">
      <Navbar />

      <main className="pt-30 pb-16">
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl border border-warm-gray-dark bg-white px-6 py-12 shadow-sm sm:px-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
                ACIP Program
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-bold text-charcoal sm:text-5xl">
                Africa Center for Inclusive Pedagogy
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-charcoal-light sm:text-lg">
                Explore the Africa Center for Inclusive Pedagogy (ACIP) program,
                a platform dedicated to advancing inclusive teaching practices
                across African educational institutions.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <Suspense fallback={<div aria-hidden="true" style={{ minHeight: 560 }} />}>
            <ACSSPortal />
          </Suspense>
        </section>
      </main>

      <Suspense fallback={<div aria-hidden="true" style={{ minHeight: 320 }} />}>
        <Footer />
      </Suspense>
    </div>
  );
}
