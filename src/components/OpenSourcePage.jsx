import { lazy, Suspense } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, Database, ClipboardList, Wrench, FileText, RefreshCw } from 'lucide-react';
import Navbar from './Navbar';

const Footer = lazy(() => import('./Footer'));

const platformFeatures = [
  {
    icon: ClipboardList,
    text: 'Assessment tools for problem-solving, collaboration, self-awareness and respect for adolescents aged 13-17 years.',
  },
  {
    icon: Wrench,
    text: 'Scenario-based and performance task items for the East African context, developed with more than 50 local experts.',
  },
  {
    icon: Database,
    text: 'Social and emotional learning (SEL) outcomes from the large-scale assessment, datapoints from 45,000+ adolescents, and indicators from 37,000+ households.',
  },
  {
    icon: FileText,
    text: 'Our survey toolkit, which includes: a technical manual, an administration guide, our assessment survey toolkit and scoring rubric.',
  },
  {
    icon: FileText,
    text: 'Assorted training manuals and data reports that might be of use to you.',
  },
  {
    icon: RefreshCw,
    text: 'This will be updated periodically to provide a rich experience for users, stretching it to primary-age (6-12 years) and school-based assessments to meet a variety of learning objectives.',
  },
];

export default function OpenSourcePage() {
  return (
    <div className="min-h-screen bg-academic-white">
      <Navbar />

      <main className="pt-40 pb-16">
        <section className="relative mt-16 overflow-hidden px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <div className="relative overflow-hidden rounded-3xl border border-warm-gray-dark bg-white p-6 sm:p-10">
              <div className="pointer-events-none absolute -right-8 -top-12 h-48 w-48 rounded-full bg-terracotta/10 blur-3xl" />
              <div className="pointer-events-none absolute -bottom-8 -left-6 h-40 w-40 rounded-full bg-sage/10 blur-3xl" />

              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.45 }}
                className="relative text-sm font-semibold uppercase tracking-[0.2em] text-terracotta"
              >
                Open-Source Platform
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.08 }}
                className="relative mt-3 max-w-4xl text-3xl font-bold text-charcoal sm:text-5xl"
              >
                Open Source
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.14 }}
                className="relative mt-4 max-w-4xl text-base leading-7 text-charcoal-light sm:text-lg"
              >
                Established to be a comprehensive data and tools bank for assessing a broad spectrum
                of life skills and values prioritised by the education systems in East Africa.
              </motion.p>

              <motion.a
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.55, delay: 0.2 }}
                href="https://learning.alive-reli.org/tools/61f86161-53f3-4729-9b14-5d52613636f5"
                target="_blank"
                rel="noopener noreferrer"
                className="relative mt-7 inline-flex items-center gap-2 rounded-full bg-terracotta px-6 py-3 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-terracotta-dark"
              >
                Launch Open Source Tool
                <ArrowUpRight className="h-4 w-4" />
              </motion.a>
            </div>
          </div>
        </section>

        <section className="mt-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-7xl">
            <motion.h2
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.6 }}
              transition={{ duration: 0.45 }}
              className="text-2xl font-bold text-charcoal sm:text-3xl"
            >
              Currently it houses the following information:
            </motion.h2>

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {platformFeatures.map((item, index) => (
                <motion.article
                  key={item.text}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.4 }}
                  transition={{ duration: 0.45, delay: index * 0.05 }}
                  className="rounded-2xl border border-warm-gray-dark bg-white p-5"
                >
                  <div className="inline-flex rounded-lg bg-terracotta/10 p-2 text-terracotta">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <p className="mt-3 text-sm leading-6 text-charcoal-light">{item.text}</p>
                </motion.article>
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
