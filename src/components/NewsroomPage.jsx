import { lazy, Suspense, useMemo, useState } from 'react';
import Navbar from './Navbar';

const Footer = lazy(() => import('./Footer'));

const fallbackImage =
  'https://www.alive-reli.org/wp-content/uploads/2022/05/alive-1.png';

const newsroomItems = [
  {
    "title": "Dissemination of the pilot Values-Based Education through the Whole School Approach",
    "date": "2025-11-24",
    "category": "Events",
    "excerpt": "Venue: Kenya Institute of Curriculum Development, Desai Rd, Off Muranga Rd, Nairobi, Kenya. Date: 25th -27th November 2025 Download the program",
    "link": "https://www.alive-reli.org/dissemination-of-the-pilot-values-based-education-through-the-whole-school-approach/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/11/Dissemination_launch.png?fit=819%2C1139&ssl=1"
  },
  {
    "title": "Beyond Passing Exams: Why teaching children life skills and values matters",
    "date": "2025-11-19",
    "category": "ALiVE in the Media",
    "excerpt": "In a world where digital technology dominates nearly every aspect of daily life, a silent crisis is unfolding one that isn't about gadgets or internet access, but about character. Across Kenya, educators and parents are ",
    "link": "https://www.alive-reli.org/beyond-passing-exams-why-teaching-children-life-skills-and-values-matters/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/11/nurturing-ps.png?fit=1201%2C950&ssl=1"
  },
  {
    "title": "Reimagining the Future of Learning: From Knowledge to Character",
    "date": "2025-11-14",
    "category": "Blogs",
    "excerpt": "How can schools move from policy to practice when it comes to nurturing life skills and values? From a recent review of literature conducted by Action for Life Skills and Values in East Africa (ALiVE), we identify forwar",
    "link": "https://www.alive-reli.org/reimagining-the-future-of-learning-from-knowledge-to-character/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/11/Picture2.jpg?fit=940%2C626&ssl=1"
  },
  {
    "title": "Why Nurturing Life Skills and Values Matters Now More Than Ever",
    "date": "2025-11-14",
    "category": "Blogs",
    "excerpt": "Across the world, education systems are undergoing a quiet revolution, a shift from rote memorization to the holistic development of learners who can think critically, empathize deeply, and act ethically. In Uganda, this",
    "link": "https://www.alive-reli.org/why-nurturing-life-skills-and-values-matters-now-more-than-ever/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/11/Picture1.png?fit=562%2C530&ssl=1"
  },
  {
    "title": "Unlearning to Relearn: Strengthening Research Methodologies for Competence-Based Curriculum Implementation",
    "date": "2025-09-16",
    "category": "Blogs",
    "excerpt": "When researchers, educators, and partners gathered for the ALiVE research methodology workshop, the atmosphere was marked by both curiosity and resolve. This was not simply a training; rather, it was an invitation to que",
    "link": "https://www.alive-reli.org/unlearning-to-relearn-strengthening-research-methodologies-for-competence-based-curriculum-implementation/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/09/Picture-1.jpg?fit=581%2C315&ssl=1"
  },
  {
    "title": "How Technology is Transforming Education Assessments in Africa.",
    "date": "2025-09-01",
    "category": "Blogs",
    "excerpt": "Reflections from the AEAA 41st Annual Conference, Addis Ababa By Samson Sitta, ALiVE Senior Program Officer, MZF This August, education leaders, researchers, and practitioners from across Africa and beyond gathered for t",
    "link": "https://www.alive-reli.org/how-technology-is-transforming-education-assessments-in-africa/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/09/Pictureb1.jpg?fit=1474%2C639&ssl=1"
  },
  {
    "title": "Building Character, Not Just Curriculum: Insights from Kenya’s Values-Based Education Landscape",
    "date": "2025-08-19",
    "category": "Values-based Education",
    "excerpt": "In a world where education systems are increasingly called upon to cultivate not only academic excellence but also ethical, empathetic, and socially responsible citizens, Values-Based Education (VbE) has emerged as a tra",
    "link": "https://www.alive-reli.org/building-character-not-just-curriculum-insights-from-kenyas-values-based-education-landscape/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/08/VbE_8-Learners-FGD.png?fit=841%2C400&ssl=1"
  },
  {
    "title": "Mainstreaming Values in Special Needs Education: Insights from Kenya’s VbE Baseline",
    "date": "2025-08-19",
    "category": "Values-based Education",
    "excerpt": "As part of Kenya’s national Values-Based Education (VbE) initiative, a targeted effort was made to include 16 Special Needs Education (SNE) institutions in a broader baseline survey and capacity-building program, spannin",
    "link": "https://www.alive-reli.org/mainstreaming-values-in-special-needs-education-insights-from-kenyas-vbe-baseline/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/08/VbE_6.png?fit=841%2C424&ssl=1"
  },
  {
    "title": "Madaraka Learners’ Experience of Values in Everyday Interactions",
    "date": "2025-08-19",
    "category": "Values-based Education",
    "excerpt": "At Madaraka Comprehensive School—aptly named after the Kiswahili word for prestige—a vibrant Grade 5 Mathematics class is in full swing. On this warm afternoon, Teacher Joy facilitates an engaging session on fractions. L",
    "link": "https://www.alive-reli.org/madaraka-learners-experience-of-values-in-everyday-interactions/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/08/VbE_5.png?fit=838%2C491&ssl=1"
  },
  {
    "title": "Beyond the Classroom: Values in Action at Madaraka Comprehensive School, Kenya",
    "date": "2025-08-19",
    "category": "Values-based Education",
    "excerpt": "At Madaraka Comprehensive School in Nairobi County, a Competency-Based Curriculum (CBC) practical lesson unfolds with rich, experiential learning at its core. In this cookery class, the air is filled with the aroma of gr",
    "link": "https://www.alive-reli.org/beyond-the-classroom-values-in-action-at-madaraka-comprehensive-school-kenya/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/08/VbE_4-Madaraka-School.png?fit=681%2C606&ssl=1"
  },
  {
    "title": "ALiVE Joins Hands with KICD to Champion Values-based Education",
    "date": "2025-08-19",
    "category": "Values-based Education",
    "excerpt": "In recognition of the central role that values play in shaping learners' character and enabling them to thrive in diverse contexts, the Government of Kenya is institutionalizing Values-Based Education (VbE) across all le",
    "link": "https://www.alive-reli.org/alive-joins-hands-with-kicd-to-champion-values-based-education/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/08/VbE_KICD.jpg?fit=1385%2C700&ssl=1"
  },
  {
    "title": "ALiVE Breathes Values and Life Skills into Kenya’s Pastoralist Communities",
    "date": "2025-07-25",
    "category": "Blogs",
    "excerpt": "Aridity may plague their surroundings, but their enduring resilience tells their stories beyond the scorched borders. Their cultures still weave in values and life skills albeit the domineering digital disruptions. They ",
    "link": "https://www.alive-reli.org/alive-breathes-values-and-life-skills-into-kenyas-pastoralist-communities/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/07/Picture_AS1.jpg?fit=1373%2C907&ssl=1"
  },
  {
    "title": "My Turbulent yet Triumphant Trip to the ALiVE Summit 2025",
    "date": "2025-07-25",
    "category": "Blogs",
    "excerpt": "I was just two months into my internship when the second ALiVE regional summit came calling. I was eager to meet the regional teams whom I had only known but through emails. I wanted to understand life skills and values ",
    "link": "https://www.alive-reli.org/my-turbulent-yet-triumphant-trip-to-the-alive-summit-2025/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/07/PictureMJ.jpg?fit=1379%2C743&ssl=1"
  },
  {
    "title": "Why we Need to Rethink Collaboration: Lessons from Utrecht",
    "date": "2025-07-24",
    "category": "Blogs",
    "excerpt": "How can people from different parts of the world come together to profoundly change education systems not just on paper, but in real life? That was the big question at the Global Partnerships for Life Skills Education Co",
    "link": "https://www.alive-reli.org/why-we-need-to-rethink-collaboration-lessons-from-utrecht/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/07/Picture1_U.png?fit=723%2C375&ssl=1"
  },
  {
    "title": "First Book, First Time Authors!",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "ALiVE seeks to build a community of experts in many spheres that regard life skills and values. Even in this publication, ALiVE brought together 25 contributors who co-authored different chapters of the book. Notably, mo",
    "link": "https://www.alive-reli.org/first-book-first-time-authors/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/FF-Authors.jpg?fit=814%2C369&ssl=1"
  },
  {
    "title": "The ALiVE Book",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "The Contextualization of 21st Century Skills: Assessment in East Africa Another first from ALiVE is the publication of a book entitled, The Contextualisation of 21st Century Skills: Assessment in East Africa. This book p",
    "link": "https://www.alive-reli.org/the-alive-book/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/ALiVE-Book.jpg?fit=798%2C631&ssl=1"
  },
  {
    "title": "Horine Kinoti, Scholar",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "I am Horine Kinoti. I joined the ALiVE Academy in 2024 to assist in capturing insights from the sessions, for posterity. The idea is to be able to have local experts run the Academy in terms of transferring knowledge gai",
    "link": "https://www.alive-reli.org/horine-kinoti-scholar/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/KH.jpg?fit=223%2C272&ssl=1"
  },
  {
    "title": "Ramadhani Matimbwa, Scholar",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "I joined the Academy in 2024 through appointment as assessment shift member, aiming to support Zanzibar’s efforts to mainstream life skills education across public institutions. The sessions are hands-on but slightly aca",
    "link": "https://www.alive-reli.org/ramadhani-matimbwa-scholar/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/RM.jpg?fit=604%2C403&ssl=1"
  },
  {
    "title": "Elizabeth Owiti, Scholar",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "In 2024, the ALiVE Academy beckoned, and I heeded the call! I joined the Academy with the goal of acquiring knowledge and skills necessary to support the effective implementation of the ALiVE program in Kenya. Since then",
    "link": "https://www.alive-reli.org/elizabeth-owiti-scholar/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/EO.jpg?fit=861%2C692&ssl=1"
  },
  {
    "title": "Martin Ariapa, Scholar",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "I joined the academy in 2023 to strengthen my understanding of how life skills and values can be assessed and nurtured, so I can better support other ALiVE members and stakeholders. The sessions have been highly engaging",
    "link": "https://www.alive-reli.org/martin-ariapa-scholar/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/MA.jpg?fit=937%2C1244&ssl=1"
  },
  {
    "title": "Faridah Nassereka, Scholar",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "Since 2023, I have had the opportunity to be part of this transformative journey as an academy scholar, which has greatly enhanced both my professional and personal growth. I became part of the academy through my involve",
    "link": "https://www.alive-reli.org/faridah-nassereka-scholar/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/FN.jpg?fit=509%2C628&ssl=1"
  },
  {
    "title": "Stella Rose Akongo, Scholar",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "I am Akongo Rose Stella, a scholar in the ALiVE Academy. I joined the ALiVE Academy in August 2023, as part of the ALiVE Core Technical Team from Uganda. At that time, I had newly joined the ALiVE Program team in Uganda.",
    "link": "https://www.alive-reli.org/stella-rose-akongo-scholar/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/SRA.jpg?fit=780%2C497&ssl=1"
  },
  {
    "title": "Daniel Marandu, Scholar",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "My name is Daniel Marandu, a proud scholar of the ALiVE Academy, since 2022. I still remember our first session, which was a three-day workshop at in Nairobi, Kenya. Prior to my admission, I was not aware of the admissio",
    "link": "https://www.alive-reli.org/daniel-marandu-scholar/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/DMA.jpg?fit=545%2C634&ssl=1"
  },
  {
    "title": "Samson John Sitta, Scholar",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "I am part of the pioneer scholars who have been in the academy since 2021. Initially, I was admitted in the ALiVE Academy as one of the national technical team members who were involved in developing frameworks for asses",
    "link": "https://www.alive-reli.org/samson-john-sitta-scholar/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/SJS.jpg?fit=449%2C317&ssl=1"
  },
  {
    "title": "Devotha Mlay, Scholar",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "I have been a scholar at the ALiVE Academy since 2021. I joined the academy to deepen my understanding of life skills and values — how they work, why they matter, and how they can be applied both within and beyond educat",
    "link": "https://www.alive-reli.org/devotha-mlay-scholar/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/DM.jpg?fit=719%2C1396&ssl=1"
  },
  {
    "title": "Scholars’ Corner - David Alelah",
    "date": "2025-06-20",
    "category": "ALiVE Academy",
    "excerpt": "At the heart of the ALiVE Academy is Learning! The sessions combine both theory and practice to provide a holistic understanding of assessment and its context. While the theory aspect deepens participants’ understanding ",
    "link": "https://www.alive-reli.org/scholars-corner-david-alelah/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/DA.jpg?fit=605%2C874&ssl=1"
  },
  {
    "title": "Coordinating the Academy",
    "date": "2025-06-19",
    "category": "ALiVE Academy",
    "excerpt": "I have been a member of the ALiVE Academy since its inception. I have also been behind the scenes helping to coordinate and organize the Academy. I have learned quite a lot through the process, both in terms of the impor",
    "link": "https://www.alive-reli.org/coordinating-the-academy/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/KS.jpg?fit=488%2C728&ssl=1"
  },
  {
    "title": "Facilitating the ALiVE Academy: Prof. Esther Care",
    "date": "2025-06-19",
    "category": "ALiVE Academy",
    "excerpt": "Professor Esther Care, of the University of Melbourne, serves as the lead trainer for the ALiVE Academy, working closely with ALiVE leadership to shape and guide the overall training programme. She began by mentoring a s",
    "link": "https://www.alive-reli.org/facilitating-the-alive-academy-prof-esther-care/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/AA_Prof.jpg?fit=579%2C530&ssl=1"
  },
  {
    "title": "ALiVE Academy: Building Regional Scholars and Experts",
    "date": "2025-06-19",
    "category": "ALiVE Academy",
    "excerpt": "The Action for Life Skills and Values in East Africa (ALiVE) seeks to generate evidence on life skills and values and use this evidence to engage in public policy reforms, and strengthen local capacities in life skills c",
    "link": "https://www.alive-reli.org/alive-academy-building-regional-scholars-and-experts/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/06/SM1.jpg?fit=602%2C534&ssl=1"
  },
  {
    "title": "Discover ALiVE Academy: What You Need to Know.",
    "date": "2025-06-19",
    "category": "ALiVE Academy",
    "excerpt": "ALiVE ACADEMY (AA) is a capacity-building arm of the Action for Life Skills and Values in East Africa (ALiVE) initiative. AA is designed as a growth space for local experts developing assessments of life skills and value",
    "link": "https://www.alive-reli.org/discover-alive-academy-what-you-need-to-know/",
    "image": "https://www.alive-reli.org/wp-content/uploads/2025/06/ALiVE-Academy-Overview.bmp"
  },
  {
    "title": "The Power of Sign Language: We ‘Speak’ the Language of Inclusion",
    "date": "2025-02-07",
    "category": "Stories of Change",
    "excerpt": "At Machakos Teachers Training College, learners from all walks of life are admitted regardless of their physical abilities. The college has embraced Kenyan Sign Language (KSL) in classrooms and other social spaces, the i",
    "link": "https://www.alive-reli.org/the-power-of-sign-language-we-speak-the-language-of-inclusion/",
    "image": "https://i0.wp.com/www.alive-reli.org/wp-content/uploads/2025/02/SOC-1-The-Power-of-Signing.jpg?fit=900%2C600&ssl=1"
  }
];

const categories = ['All', ...new Set(newsroomItems.map((item) => item.category))];

const featuredStory =
  newsroomItems.find((item) =>
    item.title.toLowerCase().includes('power of sign language'),
  ) || newsroomItems[0];

function formatDate(dateString) {
  const date = new Date(dateString);
  if (Number.isNaN(date.getTime())) {
    return dateString;
  }

  return date.toLocaleDateString('en-US', {
    month: 'long',
    day: 'numeric',
    year: 'numeric',
  });
}

export default function NewsroomPage() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchTerm, setSearchTerm] = useState('');

  const filteredItems = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return newsroomItems.filter((item) => {
      const categoryMatch = activeCategory === 'All' || item.category === activeCategory;

      if (!categoryMatch) {
        return false;
      }

      if (!normalizedSearch) {
        return true;
      }

      const combinedText = `${item.title} ${item.excerpt} ${item.category}`.toLowerCase();

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
                Updates & Insights
              </p>
              <h1 className="mt-3 max-w-3xl text-3xl font-bold text-charcoal sm:text-5xl">
                Newsroom
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-charcoal-light sm:text-lg">
                Explore stories, events, media features, academy updates, and blogs from
                ALiVE. Content on this page is sourced from the official ALiVE newsroom.
              </p>
            </div>
          </div>
        </section>

        <section className="px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="mb-8 overflow-hidden rounded-2xl border border-warm-gray-dark bg-white shadow-sm">
              <div className="grid gap-0 md:grid-cols-2">
                <div className="overflow-hidden bg-warm-gray" style={{ height: '320px' }}>
                  <img
                    src={featuredStory.image || fallbackImage}
                    alt={featuredStory.title}
                    className="h-full w-full object-cover object-center"
                  />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-[0.2em] text-terracotta">
                    Featured
                  </p>
                  <h2 className="mt-3 text-2xl font-bold leading-tight text-charcoal sm:text-3xl">
                    {featuredStory.title}
                  </h2>
                  <p className="mt-3 text-sm text-charcoal-light">
                    {formatDate(featuredStory.date)}
                  </p>
                  <p className="mt-4 max-w-xl text-base leading-7 text-charcoal-light">
                    {featuredStory.excerpt}
                  </p>
                  <a
                    href={featuredStory.link}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-6 inline-flex items-center text-sm font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
                  >
                    Continue Reading
                  </a>
                </div>
              </div>
            </div>

            <div className="mb-6 flex flex-col gap-5 rounded-2xl border border-warm-gray-dark bg-white p-4 sm:flex-row sm:items-center sm:justify-between sm:p-5">
              <div className="flex flex-wrap gap-2">
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
                <span className="sr-only">Search newsroom items</span>
                <input
                  type="search"
                  value={searchTerm}
                  onChange={(event) => setSearchTerm(event.target.value)}
                  placeholder="Search title, category, or excerpt"
                  className="w-full rounded-xl border border-warm-gray-dark bg-academic-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal-light focus:border-terracotta focus:outline-none"
                />
              </label>
            </div>

            <div className="mb-6 text-sm text-charcoal-light">
              Showing {filteredItems.length} of {newsroomItems.length} newsroom items
            </div>

            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
              {filteredItems.map((item) => (
                <article
                  key={item.link}
                  className="group overflow-hidden rounded-xl border border-warm-gray-dark bg-white shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:shadow-md"
                >
                  <div className="overflow-hidden bg-warm-gray" style={{ height: "260px" }}>
                    <img
                      src={item.image || fallbackImage}
                      alt={item.title}
                      loading="lazy"
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="p-4">
                    <div className="flex items-center justify-between gap-3">
                      <span className="inline-flex rounded-full bg-[#e8f3fb] px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide text-terracotta-dark">
                        {item.category}
                      </span>
                      <span className="text-xs text-charcoal-light">
                        {formatDate(item.date)}
                      </span>
                    </div>
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
                      Read Story
                    </a>
                  </div>
                </article>
              ))}

              {filteredItems.length === 0 && (
                <div className="col-span-full rounded-2xl border border-warm-gray-dark bg-white px-6 py-10 text-center text-charcoal-light">
                  No newsroom content matches your current filters.
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