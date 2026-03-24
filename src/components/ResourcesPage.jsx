import { lazy, Suspense, useMemo, useState } from 'react';
import { ArrowUpRight, Database } from 'lucide-react';
import Navbar from './Navbar';

const Footer = lazy(() => import('./Footer'));

const fallbackImage =
  'https://www.alive-reli.org/wp-content/uploads/2022/05/alive-1.png';

const resources = [
  {
    title:
      'Can Student Body Diversity Foster Inter-ethnic Trust, Tolerance, and National Identification Prioritization? The Role of Friendship in Kenya',
    category: 'Publication',
    excerpt:
      'Education is thought to be an essential tool for building social cohesion in an ethnically diverse society. This publication evaluates whether school diversity and friendship networks can strengthen trust, tolerance, and national identification.',
    link: 'https://www.alive-reli.org/can-student-body-diversity-foster-inter-ethnic-trust-tolerance-and-national-identification-prioritization-the-role-of-friendship-in-kenya/',
    image: fallbackImage,
  },
  {
    title:
      'What works in 21st century skills education in sub-Saharan Africa: a systematic review',
    category: 'Publication',
    excerpt:
      'This systematic review explores the relevance, implementation, and assessment of 21st century life skills education in sub-Saharan Africa, with a focus on socio-emotional and values-based learning outcomes.',
    link: 'https://www.alive-reli.org/what-works-in-21st-century-skills-education-in-sub-saharan-africa-a-systematic-review/',
    image: fallbackImage,
  },
  {
    title:
      'Unlocking the power of values and life skills in context: VaLI-A Conference Report',
    category: 'Report',
    excerpt:
      'The conference report highlights the need for context-specific approaches to life skills education and documents key recommendations for evidence use, collaboration, and scaling impact.',
    link: 'https://www.alive-reli.org/unlocking-the-power-of-values-and-life-skills-in-context-vali-a-conference-report/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/04/VaLI-A-1.webp?fit=899%2C817&ssl=1',
  },
  {
    title: 'Developing and Using ALiVE’s Assessments of 21st Century Skills',
    category: 'Brief',
    excerpt:
      'A practical brief on how RELI members co-developed and used contextualized tools to assess 21st century skills across different East African learning environments.',
    link: 'https://www.alive-reli.org/developing-and-using-alives-assessments-of-21st-century-skills/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/BRF-6-Develop-Use-ALiVE-Assmts-21st-Century.png?fit=432%2C640&ssl=1',
  },
  {
    title: 'Growing Together through ALiVE',
    category: 'Brief',
    excerpt:
      'This brief consolidates key lessons from ALiVE’s organizational growth journey and documents strategies that supported learning, adaptation, and partnership over time.',
    link: 'https://www.alive-reli.org/growing-together-through-alive/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/BRF-5-Growing-Together.png?fit=980%2C1453&ssl=1',
  },
  {
    title: 'The Collaborative Journey of ALiVE',
    category: 'Brief',
    excerpt:
      'A summary of ALiVE’s collaboration experience while developing assessment tools, including what worked, what was challenging, and what partners learned together.',
    link: 'https://www.alive-reli.org/the-collaborative-journey-of-alive/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/BRF-4-Collaborative-Journey.png?fit=432%2C640&ssl=1',
  },
  {
    title: 'Strengthening Systems through ALiVE',
    category: 'Brief',
    excerpt:
      'A focused brief outlining lessons from ALiVE’s work with government structures and system-level actors to support sustained integration of life skills and values.',
    link: 'https://www.alive-reli.org/strengthening-systems-through-alive/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/BRF-3-Strengthening-Systems.png?fit=432%2C640&ssl=1',
  },
  {
    title: 'Dissemination, Awareness Building & Advocacy in ALiVE',
    category: 'Brief',
    excerpt:
      'This brief captures ALiVE’s dissemination and advocacy lessons, with practical insights on translating findings into awareness, engagement, and policy conversations.',
    link: 'https://www.alive-reli.org/dissemination-awareness-building-advocacy-in-alive/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/BRF-2-Dissemination-Awareness-Advocacy.png?fit=432%2C640&ssl=1',
  },
  {
    title: 'Developing Contextualised Tools for Measuring Life Skills and Values',
    category: 'Brief',
    excerpt:
      'An overview of ALiVE’s tool development and contextualization process, including key design principles and implementation learning from multi-country collaboration.',
    link: 'https://www.alive-reli.org/developing-contextualised-tools-for-measuring-life-skills-and-values/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/BRF-1-Tools-Measuring-Life-Skills-Values.png?fit=432%2C640&ssl=1',
  },
  {
    title:
      'Proficiency Levels of Adolescents in Life Skills and Values in Kenya, Tanzania, and Uganda: ALiVE Regional Report',
    category: 'Report',
    excerpt:
      'This regional report presents development, validation, and findings from a large-scale assessment of adolescents’ proficiencies in core life skills and values.',
    link: 'https://www.alive-reli.org/proficiency-levels-of-adolescents-in-life-skills-and-values-in-kenya-tanzania-and-uganda-alive-regional-report/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/RPT-6-Proficiency-Life-Skills-Values-EA_Jun2023.png?fit=432%2C640&ssl=1',
  },
  {
    title: 'Uganda: Do Our Children Have Life Skills and Values?',
    category: 'Report',
    excerpt:
      'A country report highlighting assessment findings from Uganda on adolescents’ problem solving, collaboration, self-awareness, and respect proficiencies.',
    link: 'https://www.alive-reli.org/uganda-do-our-children-have-life-skills-and-values/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/RPT-4-Ug-Life-Skills-Values-HH-Assmt-Smry_Dec2023.png?fit=432%2C640&ssl=1',
  },
  {
    title: 'Tanzania: Do Our Children Have Life Skills and Values?',
    category: 'Report',
    excerpt:
      'Findings from Tanzania’s ALiVE household assessment, including district coverage, sample profile, and key insights on life skills and values proficiency.',
    link: 'https://www.alive-reli.org/tanzania-do-our-children-have-life-skills-and-values/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/RPT-3-Tz-Life-Skills-Values-HH-Assmt-Smry_Jan2023.png?fit=432%2C640&ssl=1',
  },
  {
    title: 'Kenya: Do Our Children Have Life Skills and Values?',
    category: 'Report',
    excerpt:
      'A Kenya-focused report developed through extensive collaboration, presenting results and implications for integrating life skills and values in education systems.',
    link: 'https://www.alive-reli.org/kenya-do-our-children-have-life-skills-and-values/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/RPT-2-Ky-Life-Skills-Values-HH-Assmt-Smry_Nov2022.png?fit=432%2C640&ssl=1',
  },
  {
    title:
      'A Large-Scale Assessment of 21st Century Skills in the East African Community',
    category: 'Report',
    excerpt:
      'This study series provides an in-depth look at 21st century skills in Uganda, Kenya, and Tanzania and offers context for policy and practice conversations.',
    link: 'https://www.alive-reli.org/a-large-scale-assessment-of-21st-century-skills-in-the-east-african-community/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/STUD-2-Large-Scale-Assmt-21st-Century.png?fit=980%2C1453&ssl=1',
  },
  {
    title: 'Baseline Study: January 2024 Findings',
    category: 'Report',
    excerpt:
      'A baseline analysis on how life skills and values are embedded in primary and secondary education systems across Kenya, Uganda, Tanzania Mainland, and Zanzibar.',
    link: 'https://www.alive-reli.org/baseline-study-january-2024-findings/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/STUD-1-Baseline-Study-Jan-2024.png?fit=432%2C640&ssl=1',
  },
  {
    title: 'The Contextualisation of 21st Century Skills in East Africa',
    category: 'Publication',
    excerpt:
      'This publication examines how 21st century skills can be contextualized within East African realities and why that matters for learners, schools, and systems.',
    link: 'https://www.alive-reli.org/the-contextualisation-of-21st-century-skills-in-east-africa/',
    image:
      'https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/PUB-1-The-Contextualisation-21st-Century-Skills.png?fit=540%2C800&ssl=1',
  },
];

const categories = ['All', 'Publication', 'Brief', 'Report'];

export default function ResourcesPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredResources = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return resources.filter((item) => {
      const categoryMatch =
        activeCategory === 'All' || item.category === activeCategory;

      if (!categoryMatch) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      const combinedText =
        `${item.title} ${item.excerpt} ${item.category}`.toLowerCase();

      return combinedText.includes(normalizedSearch);
    });
  }, [activeCategory, searchTerm]);

  return (
    <div className="min-h-screen bg-academic-white">
      <Navbar />

      <main className="pt-30 pb-16">
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="px-6 py-12 sm:px-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
                Knowledge Hub
              </p>
              <h1 className="mt-3 max-w-3xl text-3xl font-bold text-charcoal sm:text-5xl">
                Resources
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-charcoal-light sm:text-lg">
                Browse publications, briefs, reports, and datasets sourced from the ALiVE resources library.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 rounded-2xl border border-warm-gray-dark bg-white p-6 sm:p-7">
              <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
                <div className="max-w-3xl">
                  <span className="inline-flex items-center gap-2 rounded-full bg-[#e8f3fb] px-3 py-1 text-xs font-semibold uppercase tracking-[0.16em] text-terracotta-dark">
                    <Database className="h-3.5 w-3.5" />
                    Open-Source Platform
                  </span>
                  <h2 className="mt-3 text-xl font-bold text-charcoal sm:text-2xl">
                    Explore tools, data, and SEL assessment resources
                  </h2>
                  <p className="mt-2 text-sm leading-6 text-charcoal-light sm:text-base">
                    Access the Open Source platform for life skills and values assessments, survey
                    toolkits, large-scale SEL datapoints, and supporting manuals tailored to the
                    East African context.
                  </p>
                </div>
                <a
                  href="/open-source"
                  className="inline-flex items-center gap-2 self-start rounded-full bg-terracotta px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-terracotta-dark"
                >
                  Go to Open Source
                  <ArrowUpRight className="h-4 w-4" />
                </a>
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-10 rounded-2xl border border-warm-gray-dark bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="flex gap-2">
                {categories.map((category) => {
                  const isActive = activeCategory === category;

                  return (
                    <button
                      key={category}
                      type="button"
                      onClick={() => setActiveCategory(category)}
                      className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                        isActive
                          ? 'bg-terracotta text-white'
                          : 'bg-warm-gray text-charcoal hover:bg-warm-gray-dark'
                      }`}
                    >
                      {category}
                    </button>
                  );
                })}
              </div>

              <label className="w-full sm:max-w-sm">
                {/* <span className="sr-only mr-4">Search resources</span> */}
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search title, category, or excerpt"
                  className="w-full rounded-xl border border-warm-gray-dark bg-academic-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal-light focus:border-terracotta focus:outline-none"
                />
              </label>
            </div>

            {/* <div className="mb-6 text-sm text-charcoal-light">
              Showing {filteredResources.length} of {resources.length} resources
            </div> */}

            <div className="mt-10 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {filteredResources.map((item) => (
              <article
                key={item.link}
                className="group overflow-hidden rounded-xl border border-warm-gray-dark bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
              >
                <div className="overflow-hidden bg-warm-gray" style={{ height: '260px' }}>
                  <img
                    src={item.image || fallbackImage}
                    alt={item.title}
                    loading="lazy"
                    className="block w-full h-auto object-top"
                  />
                </div>
                <div className="p-4">
                  <span className="inline-flex rounded-full bg-[#e8f3fb] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-terracotta-dark">
                    {item.category}
                  </span>
                  <h2 className="mt-2.5 text-base font-semibold leading-snug text-charcoal">
                    {item.title}
                  </h2>
                  <p className="mt-2.5 max-h-24 overflow-hidden text-sm leading-5 text-charcoal-light">
                    {item.excerpt}
                  </p>
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-3 inline-flex items-center text-sm font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
                  >
                    View Resource
                  </a>
                </div>
              </article>
            ))}

            {filteredResources.length === 0 && (
              <div className="col-span-full rounded-2xl border border-warm-gray-dark bg-white px-6 py-10 text-center text-charcoal-light">
                No resources match your current filters.
              </div>
            )}
            </div>
          </div>
        </section>
      </main>

      <Suspense fallback={<div aria-hidden="true" style={{ minHeight: 320 }} />}>
        <Footer />
      </Suspense>
    </div>
  );
}
