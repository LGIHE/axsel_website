import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, BarChart3, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const levers = [
  {
    icon: ShieldCheck,
    title: 'Accreditation (ACSSS)',
    subtitle: 'Professional Standards for SEL',
    description:
      'The AXSEL Certified SEL Systems Specialist programme will set the continental benchmark for professional practice. From micro-credentials to postgraduate diplomas, we are designing rigorous, context-rooted accreditation pathways to build systemic competence.',
    features: ['Micro-credential Pathways', 'Quality Assurance Framework', 'Continental Recognition'],
    color: 'terracotta',
  },
  {
    icon: BookOpen,
    title: 'Curriculum Integration',
    subtitle: 'Embedding SEL in Education Systems',
    description:
      'We will partner with Ministries of Education to embed social emotional learning within national curricula. Our planned approach is systemic, not supplementary — weaving SEL competencies into the fabric of teaching and learning frameworks.',
    features: ['National Curriculum Alignment', 'Teacher Capacity Building', 'Learning-by-Doing Pedagogy'],
    color: 'sage',
  },
  {
    icon: BarChart3,
    title: 'Evidence-Based Practice',
    subtitle: 'Data-Driven Decision Making',
    description:
      'Our planned Evidence Hub will aggregate research, policy briefs, and technical notes to inform SEL implementation across Africa. We aim to bridge the gap between academic research and practitioner action through context-sensitive, evidence-informed guidance.',
    features: ['Research Repository', 'Policy Briefs', 'Impact Measurement Tools'],
    color: 'ochre',
  },
];

const colorMap = {
  terracotta: {
    bg: 'bg-terracotta/10',
    text: 'text-terracotta',
    hoverBorder: 'hover:border-terracotta/30',
    badge: 'bg-terracotta/5 text-terracotta',
    iconHover: 'group-hover:bg-terracotta',
  },
  sage: {
    bg: 'bg-sage/10',
    text: 'text-sage-dark',
    hoverBorder: 'hover:border-sage/30',
    badge: 'bg-sage/5 text-sage-dark',
    iconHover: 'group-hover:bg-sage',
  },
  ochre: {
    bg: 'bg-ochre/10',
    text: 'text-ochre',
    hoverBorder: 'hover:border-ochre/30',
    badge: 'bg-ochre/5 text-ochre',
    iconHover: 'group-hover:bg-ochre',
  },
};

export default function ThreeLevers() {
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
            Three Levers for Systemic Change
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light"
          >
            AXSEL will drive continental maturity in social emotional learning through three
            interconnected pillars of action.
          </motion.p>
        </motion.div>

        {/* Cards */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-16 grid gap-8 lg:grid-cols-3"
        >
          {levers.map((lever) => {
            const colors = colorMap[lever.color];
            return (
              <motion.div
                key={lever.title}
                variants={fadeInUp}
                className={`group relative overflow-hidden rounded-2xl border border-warm-gray-dark bg-white p-8 transition-all ${colors.hoverBorder} hover:shadow-xl`}
              >
                {/* Icon */}
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl ${colors.bg} ${colors.text} transition-colors ${colors.iconHover} group-hover:text-white`}
                >
                  <lever.icon className="h-7 w-7" />
                </div>

                {/* Content */}
                <h3 className="mt-6 text-xl font-bold text-charcoal">{lever.title}</h3>
                <p className={`mt-1 text-sm font-medium ${colors.text}`}>{lever.subtitle}</p>
                <p className="mt-4 text-sm leading-relaxed text-charcoal-light">
                  {lever.description}
                </p>

                {/* Feature Tags */}
                <div className="mt-6 flex flex-wrap gap-2">
                  {lever.features.map((feature) => (
                    <span
                      key={feature}
                      className={`rounded-full px-3 py-1 text-xs font-medium ${colors.badge}`}
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                {/* Learn More */}
                <div className="mt-8">
                  <a
                    href="#acsss"
                    className={`inline-flex items-center gap-1 text-sm font-semibold ${colors.text} transition-all hover:gap-2`}
                  >
                    Learn More
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
