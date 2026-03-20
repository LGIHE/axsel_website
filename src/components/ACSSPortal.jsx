import { motion } from 'framer-motion';
import { Award, BadgeCheck, BookMarked, ArrowRight, Check } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const roadmapSteps = [
  {
    icon: BookMarked,
    level: 'Level 1',
    title: 'SEL Foundations',
    type: 'Micro-credential',
    duration: '6 weeks',
    description:
      'Core competencies in social emotional learning theory, African contextualisation, and foundational practice skills.',
    outcomes: ['SEL theory mastery', 'Context analysis skills', 'Reflective practice'],
  },
  {
    icon: BadgeCheck,
    level: 'Level 2',
    title: 'SEL Practitioner',
    type: 'Certificate',
    duration: '12 weeks',
    description:
      'Applied SEL integration in classroom and community settings, with emphasis on learning-by-doing methodology and evidence collection.',
    outcomes: ['Curriculum integration', 'Evidence collection', 'Community engagement'],
  },
  {
    icon: Award,
    level: 'Level 3',
    title: 'Integration Systems Specialist',
    type: 'Professional Diploma / Postgraduate Option',
    duration: '6-12 months',
    description:
      'Advanced systems-level competencies for driving SEL policy, institutional change, research methodology, and continental collaboration. Pathways for both professional practitioners and postgraduate scholars.',
    outcomes: ['Systems leadership', 'Policy influencing', 'Research methodology', 'Continental strategy'],
  },
];

export default function ACSSPortal() {
  return (
    <section className="bg-academic-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="max-w-3xl"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-terracotta"
          >
            Planned Flagship Programme
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
          >
            AXSEL Certified{' '}
            <span className="text-terracotta">Integration Practitioner</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg leading-relaxed text-charcoal-light">
            Our planned continental standard for professional SEL integration practice. The accreditation pathway
            will take practitioners from foundational competencies to systems-level specialist expertise through
            rigorous, context-rooted, learning-by-doing training.
          </motion.p>
        </motion.div>

        {/* Program Roadmap */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="mt-16"
        >
          {/* Connecting line (desktop) */}
          <div className="relative">
            <div className="absolute top-12 left-0 right-0 hidden h-0.5 bg-gradient-to-r from-terracotta/20 via-terracotta to-terracotta/20 lg:block" />

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {roadmapSteps.map((step, index) => (
                <motion.div key={step.level} variants={fadeInUp} className="relative">
                  {/* Step number circle */}
                  <div className="relative z-10 mx-auto mb-4 flex h-18 w-18 flex-col items-center justify-center rounded-full border-4 border-academic-white bg-gradient-to-br from-terracotta to-terracotta-dark text-white shadow-lg sm:mb-6 sm:h-24 sm:w-24">
                    <step.icon className="h-5 w-5 sm:h-7 sm:w-7" />
                    <span className="mt-0.5 text-[8px] font-bold uppercase tracking-wider sm:mt-1 sm:text-[10px]">
                      {step.level}
                    </span>
                  </div>

                  {/* Arrow between steps (desktop) */}
                  {index < roadmapSteps.length - 1 && (
                    <div className="absolute top-9 -right-3 z-20 hidden lg:top-12 lg:block">
                      <ArrowRight className="h-5 w-5 text-terracotta" />
                    </div>
                  )}

                  {/* Card */}
                  <div className="rounded-2xl border border-warm-gray-dark bg-white p-6 transition-all hover:border-terracotta/20 hover:shadow-lg">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-bold text-charcoal">{step.title}</span>
                    </div>
                    <div className="mt-1 flex items-center gap-2">
                      <span className="rounded-full bg-terracotta/10 px-2.5 py-0.5 text-xs font-semibold text-terracotta">
                        {step.type}
                      </span>
                      <span className="text-xs text-charcoal-light">{step.duration}</span>
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-charcoal-light">
                      {step.description}
                    </p>

                    {/* Outcomes */}
                    <ul className="mt-4 space-y-1.5">
                      {step.outcomes.map((outcome) => (
                        <li key={outcome} className="flex items-center gap-2 text-xs text-charcoal-light">
                          <Check className="h-3.5 w-3.5 flex-shrink-0 text-sage" />
                          {outcome}
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-12 rounded-2xl bg-gradient-to-r from-charcoal to-charcoal-light p-6 sm:mt-16 sm:p-8 md:p-12"
        >
          <div className="flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
            <div>
              <h3 className="text-xl font-bold text-white sm:text-2xl">Interested in the ACIP programme?</h3>
              <p className="mt-2 max-w-xl text-sm leading-relaxed text-gray-300">
                Register your interest to be among the first cohort of certified integration practitioners
                when AXSEL launches. Early partners will help shape the programme.
              </p>
            </div>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-terracotta px-7 py-3.5 text-sm font-semibold text-white shadow-lg transition-all hover:bg-terracotta-dark hover:shadow-xl"
            >
              Register Interest
              <ArrowRight className="h-4 w-4" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
