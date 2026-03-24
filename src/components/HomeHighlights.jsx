import { ArrowUpRight } from 'lucide-react';

const resources = [
  {
    title:
      'Can Student Body Diversity Foster Inter-ethnic Trust, Tolerance, and National Identification Prioritization? The Role of Friendship in Kenya',
    category: 'Publication',
    excerpt:
      'This publication examines whether school diversity and friendship networks can strengthen trust, tolerance, and national identification.',
    image: 'https://www.alive-reli.org/wp-content/uploads/2022/05/alive-1.png',
    href: 'https://www.alive-reli.org/can-student-body-diversity-foster-inter-ethnic-trust-tolerance-and-national-identification-prioritization-the-role-of-friendship-in-kenya/',
  },
  {
    title: 'What works in 21st century skills education in sub-Saharan Africa: a systematic review',
    category: 'Publication',
    excerpt:
      'A systematic review of implementation and assessment of 21st century life skills in sub-Saharan Africa.',
    image: 'https://www.alive-reli.org/wp-content/uploads/2022/05/alive-1.png',
    href: 'https://www.alive-reli.org/what-works-in-21st-century-skills-education-in-sub-saharan-africa-a-systematic-review/',
  },
  {
    title: 'Unlocking the power of values and life skills in context: VaLI-A Conference Report',
    category: 'Report',
    excerpt:
      'Key recommendations for contextualized life skills education and collaboration from the VaLI-A conference.',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/04/VaLI-A-1.webp?fit=899%2C817&ssl=1',
    href: 'https://www.alive-reli.org/unlocking-the-power-of-values-and-life-skills-in-context-vali-a-conference-report/',
  },
];

const newsroom = [
  {
    title: 'Dissemination of the pilot Values-Based Education through the Whole School Approach',
    category: 'Events',
    excerpt:
      'Highlights from dissemination and launch activities for the pilot Values-Based Education approach in Kenya.',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/11/Dissemination_launch.png?fit=819%2C1139&ssl=1',
    href: 'https://www.alive-reli.org/dissemination-of-the-pilot-values-based-education-through-the-whole-school-approach/',
  },
  {
    title: 'Beyond Passing Exams: Why teaching children life skills and values matters',
    category: 'ALiVE in the Media',
    excerpt:
      'A perspective on why life skills and values are essential for long-term learner outcomes.',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/11/nurturing-ps.png?fit=1201%2C950&ssl=1',
    href: 'https://www.alive-reli.org/beyond-passing-exams-why-teaching-children-life-skills-and-values-matters/',
  },
  {
    title: 'Reimagining the Future of Learning: From Knowledge to Character',
    category: 'Blogs',
    excerpt:
      'Insights on moving from policy to practical approaches for nurturing character and life skills in schools.',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/11/Picture2.jpg?fit=940%2C626&ssl=1',
    href: 'https://www.alive-reli.org/reimagining-the-future-of-learning-from-knowledge-to-character/',
  },
];

const aliveTvShows = [
  {
    title: 'Assessment Pedagogies',
    category: 'ALiVE TV',
    excerpt: 'A short feature exploring assessment pedagogies in life skills and values learning.',
    image: 'https://i.ytimg.com/vi/pdhCwUnVM08/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=pdhCwUnVM08',
  },
  {
    title: 'The education system is as good as its assessment systems',
    category: 'ALiVE TV',
    excerpt: 'Dr. Samuel Mutweleli reflects on why assessment quality shapes education quality.',
    image: 'https://i.ytimg.com/vi/CpifnyjAyMo/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=CpifnyjAyMo',
  },
  {
    title: 'Integrating Life Skills and Values in East Africa',
    category: 'ALiVE TV',
    excerpt: 'A regional media segment on integrating life skills and values in systems and communities.',
    image: 'https://i.ytimg.com/vi/-Ptpm_jSWs4/hqdefault.jpg',
    href: 'https://www.youtube.com/watch?v=-Ptpm_jSWs4',
  },
];

const spotlightBlocks = [
  {
    id: 'home-resources',
    eyebrow: 'Knowledge Hub',
    title: 'Featured Resources',
    description: 'A quick look at recent publications and reports from the ALiVE knowledge ecosystem.',
    items: resources,
    ctaLabel: 'View More Resources',
    ctaHref: '/resources',
  },
  {
    id: 'home-newsroom',
    eyebrow: 'Updates & Insights',
    title: 'From the Newsroom',
    description: 'Latest stories, events, and perspectives from ALiVE partners and collaborators.',
    items: newsroom,
    ctaLabel: 'View More News',
    ctaHref: '/newsroom',
  },
  {
    id: 'home-alive-tv',
    eyebrow: 'Media Highlights',
    title: 'ALiVE TV Shows',
    description: 'Watch selected ALiVE TV stories covering evidence, policy, and classroom practice.',
    items: aliveTvShows,
    ctaLabel: 'View More Shows',
    ctaHref: '/alive-tv-stories',
  },
];

export default function HomeHighlights() {
  return (
    <section className="bg-academic-white px-4 py-16 sm:px-6 sm:py-20 lg:px-8">
      <div className="mx-auto max-w-7xl space-y-14">
        {spotlightBlocks.map((block) => (
          <section key={block.id} className="rounded-3xl border border-warm-gray-dark bg-white p-6 shadow-sm sm:p-8">
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-terracotta">{block.eyebrow}</p>
              <h2 className="mt-3 text-2xl font-bold text-charcoal sm:text-3xl">{block.title}</h2>
              <p className="mt-3 text-sm leading-7 text-charcoal-light sm:text-base">{block.description}</p>
            </div>

            <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-3">
              {block.items.map((item) => (
                <article
                  key={item.href}
                  className="group overflow-hidden rounded-2xl border border-warm-gray-dark bg-academic-white transition-all hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="h-44 overflow-hidden bg-warm-gray">
                    <img
                      src={item.image}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <span className="inline-flex rounded-full bg-[#e8f3fb] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-terracotta-dark">
                      {item.category}
                    </span>
                    <h3 className="mt-2 text-sm font-semibold leading-6 text-charcoal">{item.title}</h3>
                    <p className="mt-2 text-sm leading-6 text-charcoal-light">{item.excerpt}</p>
                    <a
                      href={item.href}
                      target="_blank"
                      rel="noreferrer"
                      className="mt-3 inline-flex items-center text-sm font-semibold text-terracotta hover:text-terracotta-dark"
                    >
                      Open Item
                    </a>
                  </div>
                </article>
              ))}
            </div>

            <div className="mt-8 flex justify-center">
              <a
                href={block.ctaHref}
                className="inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
              >
                {block.ctaLabel}
                <ArrowUpRight className="h-4 w-4" />
              </a>
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
