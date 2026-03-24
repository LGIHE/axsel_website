const anchorPartners = [
  {
    name: 'ALiVE',
    logo: '/partners/ALiVE.png',
    href: 'https://alive-reli.org/',
  },
  {
    name: 'Mizizi Elimu Afrika',
    logo: '/partners/MIZIZI%20ELIMU.jpg',
    href: 'https://mizizielimu.org/',
  },
  {
    name: 'Luigi Giussani Institute of Higher Education',
    logo: '/partners/LGIHE.png',
    href: 'https://lgihe.ac.ug/',
  },
  {
    name: 'Milele Zanzibar Foundation',
    logo: '/partners/MILELE.jpg',
    href: 'https://mzfn.org/',
  },
];

export default function AnchorPartnersSection() {
  return (
    <section className="bg-warm-gray px-4 py-16 sm:px-6 lg:px-8" id="anchor-partners">
      <div className="mx-auto max-w-7xl">
        <div className="rounded-3xl border border-warm-gray-dark bg-white px-6 py-10 shadow-sm sm:px-10 sm:py-12">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">Collaboration</p>
          <h2 className="mt-3 text-2xl font-bold text-charcoal sm:text-3xl">AXSEL Anchor Partners</h2>
          <p className="mt-3 max-w-3xl text-sm leading-7 text-charcoal-light sm:text-base">
            AXSEL is built with institutions that have shaped the regional life skills and values agenda through
            research, implementation, and systems partnerships.
          </p>

          <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {anchorPartners.map((partner) => (
              <a
                key={partner.name}
                href={partner.href}
                target="_blank"
                rel="noreferrer"
                className="flex h-40 items-center justify-center rounded-2xl border border-warm-gray-dark bg-academic-white p-4 transition-all hover:-translate-y-0.5 hover:shadow-sm"
                aria-label={partner.name}
              >
                <img
                  src={partner.logo}
                  alt={partner.name}
                  loading="lazy"
                  className="max-h-20 w-auto object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
