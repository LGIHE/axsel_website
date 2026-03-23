import { ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-academic-white via-warm-gray to-academic-white px-6 py-16">
      <div className="absolute -top-20 -right-16 h-72 w-72 rounded-full bg-terracotta/10 blur-3xl" />
      <div className="absolute -bottom-24 -left-12 h-80 w-80 rounded-full bg-ochre/10 blur-3xl" />

      <section className="relative z-10 w-full max-w-2xl rounded-3xl border border-warm-gray-dark bg-white/90 p-8 text-center shadow-xl backdrop-blur sm:p-12">
        <img
          src="/axsel_logo.svg"
          alt="AXSEL logo"
          className="mx-auto h-20 w-auto"
        />
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">Error 404</p>
        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-charcoal sm:text-5xl">Page not found</h1>
        <p className="mx-auto mt-5 max-w-xl text-base leading-relaxed text-charcoal-light sm:text-lg">
          The page you requested does not exist or may have been moved. Return to the AXSEL home
          page to continue browsing.
        </p>

        <div className="mt-8">
          <a
            href="/"
            className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-terracotta/25 transition-all hover:bg-terracotta-dark hover:shadow-xl hover:shadow-terracotta/30"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to home
          </a>
        </div>
      </section>
    </main>
  );
}
