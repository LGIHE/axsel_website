import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, FileText, BookOpen, ClipboardList, Download, ArrowUpRight } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const categories = ['All', 'Problem Solving', 'Collaboration', 'Self-Awareness', 'Resilience'];

const resources = [
  {
    id: 1,
    type: 'Research Paper',
    icon: FileText,
    title: 'Integrating SEL Competencies in East African Curricula: A Comparative Analysis',
    authors: 'Wambua, K., Nakamya, R., & Odhiambo, J.',
    year: 2023,
    category: 'Collaboration',
    abstract:
      'This paper examines the systemic approaches taken by Kenya, Uganda, Rwanda, and Tanzania to embed social emotional learning within national curriculum frameworks.',
  },
  {
    id: 2,
    type: 'Policy Brief',
    icon: ClipboardList,
    title: 'Context-Rooted Resilience: Building Adaptive Capacity in African School Systems',
    authors: 'AXSEL Policy Unit',
    year: 2024,
    category: 'Resilience',
    abstract:
      'A policy brief for Ministries of Education outlining evidence-informed strategies for embedding resilience-building practices within teacher training and school management protocols.',
  },
  {
    id: 3,
    type: 'Technical Note',
    icon: BookOpen,
    title: 'Measuring Self-Awareness in Adolescent Learners: An African Validation Study',
    authors: 'Mwangi, A., & Ssemujju, D.',
    year: 2023,
    category: 'Self-Awareness',
    abstract:
      'This technical note presents the validation of a culturally adapted self-awareness measurement tool across four East African countries.',
  },
  {
    id: 4,
    type: 'Research Paper',
    icon: FileText,
    title: 'Problem-Solving Pedagogy: Learning-by-Doing Approaches in SEL Implementation',
    authors: 'Kagame, P., & Nzimande, T.',
    year: 2024,
    category: 'Problem Solving',
    abstract:
      'Exploring how learning-by-doing pedagogies enhance problem-solving competencies in social emotional learning programmes across sub-Saharan Africa.',
  },
  {
    id: 5,
    type: 'Policy Brief',
    icon: ClipboardList,
    title: 'Collaborative Learning Networks: Scaling SEL Practice Across Borders',
    authors: 'AXSEL Research Team',
    year: 2024,
    category: 'Collaboration',
    abstract:
      'Strategic recommendations for establishing cross-national professional learning communities to accelerate SEL adoption and evidence generation.',
  },
  {
    id: 6,
    type: 'Technical Note',
    icon: BookOpen,
    title: 'Resilience Indicators for Education Systems: A Continental Framework',
    authors: 'Ochieng, L., & Uwimana, G.',
    year: 2023,
    category: 'Resilience',
    abstract:
      'Proposes a comprehensive set of resilience indicators specifically designed for monitoring and evaluating SEL integration within African education systems.',
  },
];

const typeColors = {
  'Research Paper': 'bg-sage/10 text-sage-dark',
  'Policy Brief': 'bg-terracotta/10 text-terracotta',
  'Technical Note': 'bg-accent-red/10 text-accent-red',
};

export default function EvidenceHub() {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filtered = resources.filter((r) => {
    const matchesCategory = activeCategory === 'All' || r.category === activeCategory;
    const matchesSearch =
      searchQuery === '' ||
      r.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      r.abstract.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.span
            variants={fadeInUp}
            className="inline-block text-xs font-semibold uppercase tracking-widest text-terracotta"
          >
            Resource Library
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
          >
            The Evidence Hub <span className="text-terracotta">(Preview)</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-lg text-charcoal-light">
            A preview of the curated research papers, policy briefs, and technical notes that will
            drive evidence-informed SEL practice across the continent. Full library launching soon.
          </motion.p>
        </motion.div>

        {/* Search + Filters */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between"
        >
          {/* Search */}
          <div className="relative max-w-md flex-1">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-charcoal-light" />
            <input
              type="text"
              placeholder="Search resources..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full rounded-lg border border-warm-gray-dark bg-academic-white py-2.5 pl-10 pr-4 text-sm text-charcoal placeholder:text-charcoal-light/60 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
            />
          </div>

          {/* Category Filters */}
          <div className="flex flex-wrap gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`rounded-full px-4 py-1.5 text-xs font-semibold transition-all ${
                  activeCategory === cat
                    ? 'bg-charcoal text-white shadow-sm'
                    : 'bg-warm-gray text-charcoal-light hover:bg-warm-gray-dark'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        {/* Resource Grid */}
        <div className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {filtered.map((resource) => (
              <motion.article
                key={resource.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group flex flex-col rounded-2xl border border-warm-gray-dark bg-academic-white p-6 transition-all hover:border-terracotta/20 hover:shadow-lg"
              >
                {/* Type + Category */}
                <div className="flex items-center justify-between">
                  <span className={`rounded-full px-3 py-1 text-xs font-semibold ${typeColors[resource.type]}`}>
                    {resource.type}
                  </span>
                  <span className="text-xs text-charcoal-light">{resource.year}</span>
                </div>

                {/* Title */}
                <h3 className="mt-4 text-base font-bold leading-snug text-charcoal group-hover:text-terracotta">
                  {resource.title}
                </h3>
                <p className="mt-1 text-xs text-charcoal-light">{resource.authors}</p>

                {/* Abstract */}
                <p className="mt-3 flex-1 text-sm leading-relaxed text-charcoal-light">
                  {resource.abstract}
                </p>

                {/* Category + Action */}
                <div className="mt-5 flex items-center justify-between border-t border-warm-gray-dark pt-4">
                  <span className="rounded-full bg-warm-gray px-3 py-1 text-xs font-medium text-charcoal-light">
                    {resource.category}
                  </span>
                  <div className="flex gap-2">
                    <button
                      className="rounded-lg p-1.5 text-charcoal-light transition-colors hover:bg-warm-gray hover:text-terracotta"
                      aria-label="Download"
                    >
                      <Download className="h-4 w-4" />
                    </button>
                    <button
                      className="rounded-lg p-1.5 text-charcoal-light transition-colors hover:bg-warm-gray hover:text-terracotta"
                      aria-label="Open"
                    >
                      <ArrowUpRight className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <div className="mt-12 text-center text-charcoal-light">
            <p className="text-lg font-medium">No resources found</p>
            <p className="mt-1 text-sm">Try adjusting your search or filter criteria.</p>
          </div>
        )}
      </div>
    </section>
  );
}
