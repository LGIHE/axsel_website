import { Building2, MapPin, Phone, Instagram, Youtube } from 'lucide-react';

const socialLinks = [
  { label: 'Twitter/X', href: 'https://x.com/AXSEL_Center', short: 'X' },
  { label: 'Instagram', href: 'https://www.instagram.com/axsel_center/', icon: Instagram },
  { label: 'YouTube', href: 'https://www.youtube.com/@AXSELCenter', icon: Youtube },
];

const footerLinks = {
  Programs: [
    { label: 'ACSSS Certification', href: '#acsss' },
    { label: 'Micro-credentials', href: '#acsss' },
    { label: 'Curriculum Integration', href: '#home' },
    { label: 'Training Workshops', href: '#contact' },
  ],
  Resources: [
    { label: 'Research Papers', href: '#evidence' },
    { label: 'Policy Briefs', href: '#evidence' },
    { label: 'Technical Notes', href: '#evidence' },
    { label: 'State of SEL Dashboard', href: '#dashboard' },
  ],
  Organisation: [
    { label: 'About AXSEL', href: '#legacy' },
    { label: 'ALiVE Legacy', href: '#legacy' },
    { label: 'Partner With Us', href: '#partner' },
    { label: 'Contact', href: '#contact' },
  ],
};

export default function Footer() {
  return (
    <footer className="bg-charcoal text-white">
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5">
          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-2">
            <img
              src="/logo.png"
              alt="AXSEL Logo"
              className="h-24 w-auto"
            />
            <p className="mt-4 max-w-sm text-sm leading-relaxed text-gray-400">
              The African Center for Social Emotional Learning — building towards systemic change
              through accreditation, evidence-informed practice, and continental collaboration.
            </p>
            <div className="mt-6 space-y-2 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <Building2 className="h-4 w-4 text-terracotta-light" />
                <span>Luigi Giussani Institute of Higher Education</span>
              </div>
              <div className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-terracotta-light" />
                <span>
                  Luzira, Kampala, Uganda<br />
                  P.O Box 40390
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-terracotta-light" />
                <span>+256 771 234567</span>
              </div>
            </div>

            <div className="mt-6">
              <h4 className="text-xs font-semibold uppercase tracking-wider text-terracotta-light">
                Social Media
              </h4>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="inline-flex items-center gap-2 rounded-full border border-gray-700 px-3 py-1.5 text-xs text-gray-300 transition-colors hover:border-terracotta-light hover:text-white"
                  >
                    {social.icon ? (
                      <social.icon className="h-4 w-4" />
                    ) : (
                      <span className="text-[11px] font-semibold">{social.short}</span>
                    )}
                    <span>{social.label}</span>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="mb-4 text-sm font-semibold uppercase tracking-wider text-terracotta-light">
                {title}
              </h4>
              <ul className="space-y-2">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-sm text-gray-400 transition-colors hover:text-white"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between border-t border-gray-700 pt-8 sm:flex-row">
          <p className="text-xs text-gray-500">
            &copy; {new Date().getFullYear()} AXSEL. All rights reserved. Built on the legacy of ALiVE.
          </p>
          <p className="mt-2 text-xs text-gray-500 sm:mt-0">
            An initiative of the African Center for Social Emotional Learning
          </p>
        </div>
      </div>
    </footer>
  );
}
