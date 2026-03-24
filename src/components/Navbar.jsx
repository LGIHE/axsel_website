import { useState, useEffect } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'About', href: '/#legacy' },
  // { label: 'Evidence Hub', href: '#evidence' },
  { label: 'ACIP', href: '/#acip' },
  { label: 'Dashboard', href: '/#dashboard' },
  { label: 'Resources', href: '/resources' },
  { label: 'Contact', href: '/#contact' },
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
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-charcoal-light transition-colors hover:text-terracotta"
              >
                {link.label}
              </a>
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
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block rounded-md px-3 py-2 text-base font-medium text-charcoal-light transition-colors hover:bg-warm-gray hover:text-terracotta"
              >
                {link.label}
              </a>
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
