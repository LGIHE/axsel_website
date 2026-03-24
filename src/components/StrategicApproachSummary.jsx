import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, BarChart3, Network, HandCoins } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const levers = [
  {
    icon: ShieldCheck,
    title: 'Accreditation & Certification',
    color: 'terracotta',
  },
  {
    icon: BookOpen,
    title: 'Curriculum & Pedagogy',
    color: 'sage',
  },
  {
    icon: Network,
    title: 'Governance & Partnerships',
    color: 'ochre',
  },
  {
    icon: HandCoins,
    title: 'Sustainability & Financing',
    color: 'terracotta',
  },
  {
    icon: BarChart3,
    title: 'Evidence Sourcing & Application',
    color: 'ochre',
  },
];

const colorMap = {
  terracotta: {
    bg: 'bg-terracotta/10',
    text: 'text-terracotta',
    iconHover: 'group-hover:bg-terracotta',
  },
  sage: {
    bg: 'bg-sage/10',
    text: 'text-sage-dark',
    iconHover: 'group-hover:bg-sage',
  },
  ochre: {
    bg: 'bg-ochre/10',
    text: 'text-ochre',
    iconHover: 'group-hover:bg-ochre',
  },
};

export default function StrategicApproachSummary() {
  return (
    <section className="bg-academic-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center"
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-terracotta"
          >
            Our Strategic Approach
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
          >
            Five Integrated Pathways
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light"
          >
            AXSEL advances systemic change through evidence, certification, pedagogy, partnerships, and sustainable financing.
            <a
              href="/about-axsel"
              className="ml-2 font-semibold text-terracotta transition-colors hover:text-terracotta-dark"
            >
              Learn more
            </a>
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-5"
        >
          {levers.map((lever) => {
            const colors = colorMap[lever.color];
            return (
              <motion.div
                key={lever.title}
                variants={fadeInUp}
                className="group overflow-hidden rounded-xl border border-warm-gray-dark bg-white p-6 transition-all hover:shadow-md"
              >
                {/* Icon */}
                <div
                  className={`flex h-12 w-12 items-center justify-center rounded-lg ${colors.bg} ${colors.text} transition-colors ${colors.iconHover} group-hover:text-white`}
                >
                  <lever.icon className="h-6 w-6" />
                </div>

                {/* Content */}
                <h3 className="mt-4 text-base font-semibold text-charcoal">
                  {lever.title}
                </h3>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Learn More Button */}
        <motion.div
          variants={fadeInUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mt-12 flex justify-center"
        >
          <a
            href="/about-axsel"
            className="inline-flex items-center rounded-full bg-terracotta px-8 py-3 text-base font-semibold text-white transition-colors hover:bg-terracotta-dark"
          >
            Explore Our Full Strategic Approach
          </a>
        </motion.div>
      </div>
    </section>
  );
}
