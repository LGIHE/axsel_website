import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, ChevronDown } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/about-axsel' },
  // { label: 'Evidence Hub', href: '#evidence' },
  { label: 'ACIP Program', href: '/acip-program' },
  { label: 'Resources', href: '/resources' },
  { label: 'Open Source', href: '/open-source' },
  {
    label: 'News & Events',
    children: [
      { label: 'Newsroom', href: '/newsroom' },
      { label: 'ALiVE TV Stories', href: '/alive-tv-stories' },
    ],
  },
  { label: 'Contact Us', href: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-18 items-center justify-between">
          {/* Logo */}
          <a href="/" className="flex items-center gap-2">
            <img
              src="/axsel_logo.svg"
              alt="AXSEL Logo"
              className="h-20 w-auto"
            />
          </a>

          {/* Desktop Nav */}
          <nav className="hidden items-center gap-8 lg:flex">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.label} className="group relative">
                  <button
                    type="button"
                    className="inline-flex items-center gap-1 text-sm font-medium text-charcoal-light transition-colors hover:text-terracotta"
                  >
                    {link.label}
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  <div className="pointer-events-none absolute left-0 top-full z-20 mt-2 w-52 rounded-xl border border-warm-gray-dark bg-white p-2 opacity-0 shadow-md transition-all duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
                    {link.children.map((subLink) => (
                      <a
                        key={subLink.href}
                        href={subLink.href}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-charcoal-light transition-colors hover:bg-warm-gray hover:text-terracotta"
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium text-charcoal-light transition-colors hover:text-terracotta"
                >
                  {link.label}
                </a>
              )
            ))}
          </nav>

          {/* CTA */}
          <div className="hidden lg:block">
            <a
              href="/#partner"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:bg-terracotta-dark hover:shadow-md"
            >
              Partner With Us
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-md p-2 text-charcoal lg:hidden"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="border-t border-warm-gray-dark bg-white lg:hidden">
          <div className="space-y-1 px-4 py-4">
            {navLinks.map((link) => (
              link.children ? (
                <div key={link.label} className="rounded-md px-3 py-2">
                  <p className="text-base font-semibold text-charcoal">{link.label}</p>
                  <div className="mt-1 space-y-1">
                    {link.children.map((subLink) => (
                      <a
                        key={subLink.href}
                        href={subLink.href}
                        onClick={() => setIsOpen(false)}
                        className="block rounded-md px-3 py-2 text-sm font-medium text-charcoal-light transition-colors hover:bg-warm-gray hover:text-terracotta"
                      >
                        {subLink.label}
                      </a>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block rounded-md px-3 py-2 text-base font-medium text-charcoal-light transition-colors hover:bg-warm-gray hover:text-terracotta"
                >
                  {link.label}
                </a>
              )
            ))}
            <a
              href="/#partner"
              onClick={() => setIsOpen(false)}
              className="mt-3 block rounded-full bg-terracotta px-5 py-2.5 text-center text-sm font-semibold text-white"
            >
              Partner With Us
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
