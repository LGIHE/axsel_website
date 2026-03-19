import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Users, Globe, Target, BookOpen, GraduationCap } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

function AnimatedCounter({ end, duration = 2000, suffix = '' }) {
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
            setCount(Math.floor(eased * end));
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
      {count.toLocaleString()}{suffix}
    </span>
  );
}

const stats = [
  {
    icon: Users,
    value: 5000,
    suffix: '+',
    label: 'Educators Targeted',
    description: 'First-phase training goal across primary and secondary systems',
  },
  {
    icon: Globe,
    value: 4,
    suffix: '',
    label: 'Countries in Scope',
    description: 'Kenya, Uganda, Rwanda, Tanzania',
  },
  {
    icon: BookOpen,
    value: 5,
    suffix: '',
    label: 'SEL Competency Domains',
    description: 'Self-awareness, collaboration, resilience, problem solving, and more',
  },
  {
    icon: GraduationCap,
    value: 4,
    suffix: '',
    label: 'Accreditation Levels',
    description: 'From micro-credentials to postgraduate diplomas',
  },
  {
    icon: Target,
    value: 10000,
    suffix: '+',
    label: 'Practitioners by 2040',
    description: 'Long-term continental scaling vision',
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
                <AnimatedCounter end={stat.value} suffix={stat.suffix} />
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
