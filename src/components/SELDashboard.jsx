import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, PieChart, Pie, Cell } from 'recharts';
import { fadeInUp, staggerContainer } from '../utils/animations';

const barData = [
  { country: 'Kenya', educators: 224 },
  { country: 'Uganda', educators: 221 },
  { country: 'Rwanda', educators: 185 },
  { country: 'Tanzania mainland', educators: 220 },
  { country: 'Zanzibar', educators: 189 },
];

const pieData = [
  { name: 'Self-Awareness', value: 20 },
  { name: 'Self-Management', value: 20 },
  { name: 'Social Awareness', value: 20 },
  { name: 'Relationship Skills', value: 20 },
  { name: 'Responsible Decision-Making', value: 20 },
];

const PIE_COLORS = ['#0976B1', '#F7F400', '#00943F', '#EA202E', '#7B2D8D'];

const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="rounded-lg border border-warm-gray-dark bg-white px-4 py-3 shadow-lg">
        <p className="text-sm font-semibold text-charcoal">{label}</p>
        {payload.map((entry) => (
          <p key={entry.name} className="text-xs text-charcoal-light">
            {entry.name}: <span className="font-semibold text-charcoal">{entry.value}</span>
          </p>
        ))}
      </div>
    );
  }
  return null;
};

export default function SELDashboard() {
  return (
    <section className="bg-warm-gray py-16 sm:py-20 md:py-24">
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
            Projected Impact
          </motion.span>
          <motion.h2
            variants={fadeInUp}
            className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
          >
            State of SEL Dashboard <span className="text-terracotta">(Projected)</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="mt-4 max-w-2xl text-lg text-charcoal-light">
            Projected targets for SEL adoption, educator training, and competency development
            across the continent. Live data will populate as AXSEL becomes operational.
          </motion.p>
        </motion.div>

        {/* Dashboard Grid */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="mt-12 grid gap-6 sm:gap-8 md:grid-cols-5"
        >
          {/* Bar Chart */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-warm-gray-dark bg-white p-4 sm:p-6 md:col-span-3"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-light">
              Target: Educators to Train by Country (Phase 1)
            </h3>
            <div className="mt-4 h-56 min-w-0 sm:mt-6 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={barData} barCategoryGap="25%">
                  <CartesianGrid strokeDasharray="3 3" stroke="#E5E2DD" vertical={false} />
                  <XAxis dataKey="country" tick={{ fontSize: 12, fill: '#4A4A4A' }} axisLine={false} tickLine={false} />
                  <YAxis tick={{ fontSize: 12, fill: '#4A4A4A' }} axisLine={false} tickLine={false} />
                  <Tooltip content={<CustomTooltip />} />
                  <Bar dataKey="educators" name="Educators" fill="#0976B1" radius={[6, 6, 0, 0]} />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </motion.div>

          {/* Pie Chart */}
          <motion.div
            variants={fadeInUp}
            className="rounded-2xl border border-warm-gray-dark bg-white p-4 sm:p-6 md:col-span-2"
          >
            <h3 className="text-sm font-semibold uppercase tracking-wider text-charcoal-light">
              Planned SEL Competency Focus Areas
            </h3>
            <div className="mt-4 h-56 min-w-0 sm:mt-6 sm:h-72">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={pieData}
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={90}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {pieData.map((_, index) => (
                      <Cell key={`cell-${index}`} fill={PIE_COLORS[index]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
            {/* Legend */}
            <div className="mt-4 grid grid-cols-2 gap-2">
              {pieData.map((entry, index) => (
                <div key={entry.name} className="flex items-center gap-2">
                  <div
                    className="h-2.5 w-2.5 rounded-full"
                    style={{ backgroundColor: PIE_COLORS[index] }}
                  />
                  <span className="text-xs text-charcoal-light">{entry.name}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Disclaimer */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-6 text-center text-xs text-charcoal-light/60"
        >
          Projected targets based on programme design documents. Live metrics will be available post-launch.
        </motion.p>
      </div>
    </section>
  );
}
