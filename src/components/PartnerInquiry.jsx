import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, Building2, User, Mail, Phone, MessageSquare } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

const orgTypes = [
  'Ministry of Education',
  'NGO / INGO',
  'University / Research Institution',
  'Development Partner',
  'School / School Network',
  'Other',
];

export default function PartnerInquiry() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    organisation: '',
    orgType: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section className="bg-white py-16 sm:py-20 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 sm:gap-16 lg:grid-cols-2">
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
              Partnership Inquiry
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Partner With Us
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg leading-relaxed text-charcoal-light"
            >
              We welcome partnerships with organisations committed to advancing social emotional
              learning across Africa. Whether you represent a Ministry of Education, an international
              development partner, or a research institution, we would love to explore collaboration.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 space-y-6">
              <div className="rounded-xl border border-warm-gray-dark bg-academic-white p-5">
                <h4 className="text-sm font-semibold text-charcoal">For Ministries of Education</h4>
                <p className="mt-1 text-sm text-charcoal-light">
                  Co-design national SEL integration strategies, pilot training programmes, and shape
                  continental accreditation standards.
                </p>
              </div>
              <div className="rounded-xl border border-warm-gray-dark bg-academic-white p-5">
                <h4 className="text-sm font-semibold text-charcoal">For NGOs and Development Partners</h4>
                <p className="mt-1 text-sm text-charcoal-light">
                  Collaborate on evidence-informed programme design, monitoring frameworks, and
                  technical assistance models for SEL implementation.
                </p>
              </div>
              <div className="rounded-xl border border-warm-gray-dark bg-academic-white p-5">
                <h4 className="text-sm font-semibold text-charcoal">For Research Institutions</h4>
                <p className="mt-1 text-sm text-charcoal-light">
                  Contribute to the research agenda, Evidence Hub outputs, and co-publication
                  opportunities as AXSEL builds its knowledge base.
                </p>
              </div>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            {submitted ? (
              <div className="flex h-full items-center justify-center rounded-2xl border border-sage/30 bg-sage/5 p-12 text-center">
                <div>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-sage/20">
                    <Send className="h-7 w-7 text-sage-dark" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-charcoal">Inquiry Submitted</h3>
                  <p className="mt-2 text-sm text-charcoal-light">
                    Thank you for your interest in partnering with AXSEL. Our team will respond
                    within 3 business days.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-warm-gray-dark bg-academic-white p-5 sm:p-8"
              >
                <h3 className="text-lg font-bold text-charcoal">Expression of Interest</h3>
                <p className="mt-1 text-sm text-charcoal-light">
                  Complete the form below and our team will be in touch.
                </p>

                <div className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="partnerName" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-charcoal">
                      <User className="h-3.5 w-3.5 text-charcoal-light" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="partnerName"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-warm-gray-dark bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
                    />
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="partnerEmail" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-charcoal">
                        <Mail className="h-3.5 w-3.5 text-charcoal-light" />
                        Email
                      </label>
                      <input
                        type="email"
                        id="partnerEmail"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-warm-gray-dark bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="partnerPhone" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-charcoal">
                        <Phone className="h-3.5 w-3.5 text-charcoal-light" />
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="partnerPhone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-warm-gray-dark bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="partnerOrganisation" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-charcoal">
                      <Building2 className="h-3.5 w-3.5 text-charcoal-light" />
                      Organisation
                    </label>
                    <input
                      type="text"
                      id="partnerOrganisation"
                      name="organisation"
                      required
                      value={formData.organisation}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-warm-gray-dark bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="partnerOrgType" className="mb-1.5 text-sm font-medium text-charcoal">
                      Organisation Type
                    </label>
                    <select
                      id="partnerOrgType"
                      name="orgType"
                      required
                      value={formData.orgType}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-warm-gray-dark bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
                    >
                      <option value="">Select type...</option>
                      {orgTypes.map((type) => (
                        <option key={type} value={type}>
                          {type}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label htmlFor="partnerMessage" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-charcoal">
                      <MessageSquare className="h-3.5 w-3.5 text-charcoal-light" />
                      Message
                    </label>
                    <textarea
                      id="partnerMessage"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your partnership interest..."
                      className="w-full resize-none rounded-lg border border-warm-gray-dark bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal-light/50 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-terracotta-dark hover:shadow-md"
                >
                  Submit Expression of Interest
                  <Send className="h-4 w-4" />
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
