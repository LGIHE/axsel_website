import { ArrowRight, ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-academic-white via-warm-gray to-academic-white"
    >
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-24 -right-24 h-96 w-96 rounded-full bg-terracotta/5 blur-3xl" />
        <div className="absolute -bottom-32 -left-32 h-[500px] w-[500px] rounded-full bg-ochre/5 blur-3xl" />
        <div className="absolute top-1/2 left-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sage/5 blur-3xl" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 pt-24 pb-20 sm:px-6 sm:pt-32 sm:pb-28 lg:px-8 lg:pt-36">
        <div className="max-w-4xl">
          {/* Badge */}
          {/* <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-terracotta/20 bg-terracotta/5 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-terracotta">
              <span className="h-1.5 w-1.5 rounded-full bg-terracotta" />
              Coming Soon — Continental Social Enterprise
            </span>
          </div> */}

          {/* Headline */}
          <h1 className="mt-8 text-3xl font-extrabold leading-tight tracking-tight text-charcoal sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl">
            Empowering Africa's Future through{' '}
            <span className="bg-gradient-to-r from-terracotta to-ochre bg-clip-text text-transparent">
              Social Emotional Excellence
            </span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-charcoal-light sm:text-xl">
            Building the continental hub for SEL accreditation, curriculum integration, and
            evidence-informed practice — a bold vision for systemic capacity across Africa's education systems.
          </p>

          {/* CTA Buttons */}
          <div className="mt-8 flex flex-col gap-3 sm:mt-10 sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
            <a
              href="#acsss"
              className="inline-flex items-center justify-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-terracotta/25 transition-all hover:bg-terracotta-dark hover:shadow-xl hover:shadow-terracotta/30 sm:px-7 sm:py-3.5"
            >
              Discover the ACSSS Vision
              <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="#evidence"
              className="inline-flex items-center justify-center gap-2 rounded-full border border-charcoal/15 bg-white px-6 py-3 text-sm font-semibold text-charcoal shadow-sm transition-all hover:border-charcoal/30 hover:shadow-md sm:px-7 sm:py-3.5"
            >
              Our Strategic Roadmap
            </a>
          </div>

          {/* Trust markers */}
          <div className="mt-10 flex items-center gap-4 text-xs text-charcoal-light sm:mt-16 sm:gap-6 sm:text-sm">
            <div className="flex -space-x-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-warm-gray text-xs font-bold text-charcoal-light"
                >
                  {['KE', 'UG', 'RW', 'TZ'][i]}
                </div>
              ))}
            </div>
            <span>Launching across 4 East African nations</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="h-6 w-6 text-charcoal-light/50" />
      </div>
    </section>
  );
}
