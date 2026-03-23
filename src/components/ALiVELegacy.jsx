import { motion } from 'framer-motion';
import { Milestone, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const timelineItems = [
  {
    year: '2016',
    title: 'ALiVE Project Inception',
    description:
      'Action for Life Skills and Values in East Africa launched as a collaborative research and practice initiative across Kenya, Uganda, Rwanda, and Tanzania.',
    tag: 'Foundation',
  },
  {
    year: '2018–23',
    title: 'Research & Groundwork',
    description:
      'The ALiVE project generated the first reliable, large-scale evidence on adolescents\' life skills across East Africa, showing why SEL competencies are essential alongside literacy and numeracy.',
    tag: 'Research',
  },
  {
    year: '2024',
    title: 'AXSEL Concept Formalised',
    description:
      'The vision for AXSEL — the Africa Center of Social Emotional Learning — is formalised, transitioning from a project-based approach to a pan-African institutional model.',
    tag: 'Milestone',
  },
  {
    year: '2025–26',
    title: 'Institutional Design, Capacity & Partnerships',
    description:
      'Building governance, accreditation, and partnership frameworks while extending ALiVE impact, including more than 1,000 educators, practitioners, and government actors trained by 2025.',
    tag: 'Planning',
  },
  {
    year: '2027',
    title: 'Planned: AXSEL Pathways Activation',
    description:
      'Targeted launch of integrated pathways in accreditation, curriculum and pedagogy, governance and partnerships, sustainability and financing, and evidence application.',
    tag: 'Target',
  },
  {
    year: '2040',
    title: 'Continental Vision',
    description:
      'AXSEL will be Africa\'s leading centre for SEL assessment, credentialing, and innovation: certifying about 10,000 practitioners and embedding SEL approaches across 55 countries.',
    tag: 'Vision',
  },
];

export default function ALiVELegacy() {
  return (
    <section className="bg-warm-gray py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
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
            Our Journey
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
          >
            From ALiVE to AXSEL:{' '}
            <span className="text-terracotta">Building on a Legacy</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 text-lg leading-relaxed text-charcoal-light">
            What began as the ALiVE project — Action for Life Skills and Values in East Africa — is
            evolving into a continental institution. AXSEL will carry forward the DNA of learning-by-doing,
            evidence-informed practice, and deep partnership with education and workforce systems.
          </motion.p>
        </motion.div>

        {/* Timeline */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative mt-16"
        >
          {/* Vertical Line */}
          <div className="absolute left-4 top-0 bottom-0 w-px bg-terracotta/20 md:left-1/2 md:-translate-x-px" />

          <div className="space-y-8 sm:space-y-12">
            {timelineItems.map((item, index) => (
              <motion.div
                key={item.year}
                variants={fadeInUp}
                className={`relative flex flex-col md:flex-row ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
              >
                {/* Dot */}
                <div className="absolute left-4 z-10 flex h-8 w-8 -translate-x-1/2 items-center justify-center rounded-full border-4 border-academic-white bg-terracotta md:left-1/2">
                  <Milestone className="h-3.5 w-3.5 text-white" />
                </div>

                {/* Card */}
                <div
                  className={`ml-12 w-full md:ml-0 md:w-[calc(50%-2rem)] ${
                    index % 2 === 0 ? 'md:mr-auto md:pr-12' : 'md:ml-auto md:pl-12'
                  }`}
                >
                  <div className="rounded-xl border border-warm-gray-dark bg-white p-4 shadow-sm transition-shadow hover:shadow-md sm:p-6">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <span className="text-xl font-extrabold text-terracotta sm:text-2xl">{item.year}</span>
                      <span className="rounded-full bg-terracotta/10 px-2.5 py-0.5 text-xs font-semibold text-terracotta">
                        {item.tag}
                      </span>
                    </div>
                    <h3 className="mt-3 text-lg font-bold text-charcoal">{item.title}</h3>
                    <p className="mt-2 text-sm leading-relaxed text-charcoal-light">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-16 text-center"
        >
          <a
            href="#acip"
            className="inline-flex items-center gap-2 rounded-full bg-charcoal px-7 py-3.5 text-sm font-semibold text-white transition-all hover:bg-charcoal-light hover:shadow-lg"
          >
            Join the Next Chapter
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
