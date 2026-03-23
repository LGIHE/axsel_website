import { motion } from 'framer-motion';
import { ShieldCheck, BookOpen, BarChart3, Network, HandCoins, ArrowRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const levers = [
  {
    icon: ShieldCheck,
    title: 'Accreditation & Certification',
    subtitle: 'A Pan-African Reference for SEL Credentials',
    description:
      'AXSEL will establish a trusted credentialing architecture, from micro-credentials to co-badged postgraduate pathways, combining formal learning with supervised, system-facing project work.',
    features: ['Micro-Credentials', 'Co-Badged Postgraduate Programs', 'Pan-African Standards'],
    color: 'terracotta',
  },
  {
    icon: BookOpen,
    title: 'Curriculum & Pedagogy',
    subtitle: 'Embedding Evidence-Informed SEL in Practice',
    description:
      'AXSEL co-creates curriculum frameworks and practice-based pedagogies for pre-service and in-service teacher training, ensuring SEL competencies are applied, internalized, and scaled.',
    features: ['Pre-Service and In-Service Integration', 'Practice-Based Pedagogy', 'Teacher Capacity Strengthening'],
    color: 'sage',
  },
  {
    icon: Network,
    title: 'Governance & Partnerships',
    subtitle: 'Credible Institution, Strategic Alliances',
    description:
      'AXSEL builds robust governance and operational leadership while partnering with ministries, universities, teacher training institutions, and regional bodies to accelerate adoption.',
    features: ['Institutional Governance', 'Regional Partnerships', 'System-Level Collaboration'],
    color: 'ochre',
  },
  {
    icon: HandCoins,
    title: 'Sustainability & Financing',
    subtitle: 'Mission-Aligned, Long-Term Resourcing',
    description:
      'AXSEL will secure diversified financing through premium credentials, services, grants, and innovative funding structures to sustain long-term pan-African impact.',
    features: ['Diversified Funding', 'Credential and Service Revenue', 'Long-Term Sustainability'],
    color: 'terracotta',
  },
  {
    icon: BarChart3,
    title: 'Evidence Sourcing & Application',
    subtitle: 'African-Led Research to Actionable Insights',
    description:
      'All programmes are anchored in rigorous African-led research and data, converting evidence into policy influence, practical guidance, and innovative scale pathways.',
    features: ['Research and Data', 'Policy Influence', 'Scale Innovation'],
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
            Five Integrated Pathways for Systemic Change
          </motion.h2>
          <motion.p
            variants={fadeInUp}
            className="mx-auto mt-4 max-w-2xl text-lg text-charcoal-light"
          >
            AXSEL advances its mission through five integrated pathways that move from evidence to
            certification, from pedagogy to partnership, and from financing to sustainable scale.
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
                    href="#acip"
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
