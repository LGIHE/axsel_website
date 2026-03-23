import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Target, BookOpen, GraduationCap } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

function AnimatedCounter({ end, duration = 2000, suffix = '', prefix = '', decimals = 0 }) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const startTime = performance.now();
          const animate = (now) => {
            const elapsed = now - startTime;
            const progress = Math.min(elapsed / duration, 1);
            const eased = 1 - Math.pow(1 - progress, 3);
            setCount(eased * end);
            if (progress < 1) requestAnimationFrame(animate);
          };
          requestAnimationFrame(animate);
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [end, duration]);

  return (
    <span ref={ref}>
      {prefix}{count.toLocaleString(undefined, {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: Users,
    value: 1000,
    suffix: '+',
    label: 'Educators Trained by 2025',
    description: 'ALiVE legacy across educators, practitioners, and government actors',
  },
  {
    icon: BookOpen,
    value: 10,
    suffix: '%',
    prefix: '<',
    label: 'SEL Proficiency Baseline',
    description: 'Less than 10% of adolescents currently show key SEL proficiency',
  },
  {
    icon: GraduationCap,
    value: 2.7,
    suffix: '%',
    decimals: 1,
    label: 'Problem-Solving Proficiency',
    description: 'Current observed proficiency level in East Africa',
  },
  {
    icon: Globe,
    value: 55,
    suffix: '',
    label: 'Countries for SEL Embedding',
    description: 'Continental systems reach target by 2040',
  },
  {
    icon: Target,
    value: 10000,
    suffix: '+',
    label: 'Practitioners to Certify',
    description: 'AXSEL long-term certification ambition across Africa',
  },
];

export default function ImpactCounter() {
  return (
    <section className="bg-white py-12 sm:py-16 md:py-20">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 gap-4 sm:gap-6 md:grid-cols-3 lg:grid-cols-5">
          {stats.map((stat) => (
            <motion.div
              key={stat.label}
              variants={fadeInUp}
              className="group relative overflow-hidden rounded-xl border border-warm-gray-dark bg-academic-white p-4 text-center transition-all hover:border-terracotta/20 hover:shadow-lg sm:rounded-2xl sm:p-6 md:p-8"
            >
              <div className="mx-auto flex h-10 w-10 items-center justify-center rounded-lg bg-terracotta/10 text-terracotta transition-colors group-hover:bg-terracotta group-hover:text-white sm:h-12 sm:w-12 sm:rounded-xl">
                <stat.icon className="h-5 w-5 sm:h-6 sm:w-6" />
              </div>
              <div className="mt-3 text-2xl font-extrabold tracking-tight text-charcoal sm:mt-6 sm:text-3xl md:text-4xl">
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix || ''}
                  decimals={stat.decimals || 0}
                />
              </div>
              <div className="mt-2 text-sm font-semibold uppercase tracking-wider text-terracotta">
                {stat.label}
              </div>
              <p className="mt-1 hidden text-sm text-charcoal-light sm:mt-2 sm:block">{stat.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
