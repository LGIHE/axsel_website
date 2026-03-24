import { lazy, Suspense } from 'react';
import Navbar from './Navbar';

const Footer = lazy(() => import('./Footer'));

const attainmentGoals = [
  {
    title: 'Strengthen SEL Systems',
    text: 'Support ministries, schools, and local partners to embed social-emotional learning across policy, curriculum, pedagogy, and assessment.',
  },
  {
    title: 'Translate Evidence into Action',
    text: 'Turn ALiVE research and assessment insights into practical tools and approaches that improve learning outcomes at scale.',
  },
  {
    title: 'Build Regional Capacity',
    text: 'Grow a strong ecosystem of implementers, researchers, and practitioners who can design, deliver, and sustain SEL programs.',
  },
  {
    title: 'Enable Learner Readiness',
    text: 'Advance life skills and values that help adolescents thrive in school, work, and society through ethical, collaborative, and adaptive behavior.',
  },
];

export default function AboutAxselPage() {
  return (
    <div className="min-h-screen bg-academic-white">
      <Navbar />

      <main className="pt-30 pb-16">
        <section className="relative overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="rounded-3xl border border-warm-gray-dark bg-white px-6 py-12 shadow-sm sm:px-10">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-terracotta">
                About AXSEL
              </p>
              <h1 className="mt-3 max-w-4xl text-3xl font-bold text-charcoal sm:text-5xl">
                Africa Center of Social Emotional Learning
              </h1>
              <p className="mt-4 max-w-4xl text-base leading-7 text-charcoal-light sm:text-lg">
                AXSEL builds on the ALiVE legacy to advance social-emotional learning
                in Africa through evidence, partnerships, and practical implementation.
                It is a regional platform focused on helping systems nurture life
                skills and values that matter for learner success and societal wellbeing.
              </p>
            </div>
          </div>
        </section>

        <section className="mt-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto grid max-w-7xl gap-6 md:grid-cols-2">
            <article className="rounded-2xl border border-warm-gray-dark bg-white p-6">
              <h2 className="text-xl font-bold text-charcoal">What AXSEL Is About</h2>
              <p className="mt-3 text-base leading-7 text-charcoal-light">
                AXSEL serves as a continental bridge between research and implementation
                for social-emotional learning. It convenes governments, educators,
                technical experts, and civil society to co-create context-relevant
                solutions for life skills and values education.
              </p>
            </article>

            <article className="rounded-2xl border border-warm-gray-dark bg-white p-6">
              <h2 className="text-xl font-bold text-charcoal">What AXSEL Seeks to Attain</h2>
              <p className="mt-3 text-base leading-7 text-charcoal-light">
                AXSEL aims to improve learner readiness and long-term wellbeing by
                helping education systems move from fragmented interventions to
                coherent, scalable SEL ecosystems grounded in evidence.
              </p>
            </article>
          </div>
        </section>

        <section className="mt-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <h2 className="text-2xl font-bold text-charcoal sm:text-3xl">
              Strategic Attainment Areas
            </h2>
            <div className="mt-6 grid grid-cols-1 gap-5 md:grid-cols-2">
              {attainmentGoals.map((goal) => (
                <article
                  key={goal.title}
                  className="rounded-2xl border border-warm-gray-dark bg-white p-6"
                >
                  <h3 className="text-lg font-semibold text-charcoal">{goal.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-charcoal-light">{goal.text}</p>
                </article>
              ))}
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
