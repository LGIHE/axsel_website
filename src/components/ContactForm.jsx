import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, User, Mail, Phone, MessageSquare, MapPin, Building2 } from 'lucide-react';
import { fadeInUp, staggerContainer } from '../utils/animations';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
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
    <section className="bg-warm-gray py-16 sm:py-20 md:py-24">
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
              Get In Touch
            </motion.span>
            <motion.h2
              variants={fadeInUp}
              className="mt-4 text-3xl font-bold tracking-tight text-charcoal sm:text-4xl"
            >
              Contact AXSEL
            </motion.h2>
            <motion.p
              variants={fadeInUp}
              className="mt-4 text-lg leading-relaxed text-charcoal-light"
            >
              Have a question, media request, or general enquiry? Send us a message and we will
              respond as soon as possible.
            </motion.p>

            <motion.div variants={fadeInUp} className="mt-10 space-y-6">
              <div className="rounded-xl border border-warm-gray-dark bg-white p-5">
                <h4 className="text-sm font-semibold text-charcoal">Institution</h4>
                <p className="mt-2 flex items-center gap-2 text-sm text-charcoal-light">
                  <Building2 className="h-4 w-4 text-terracotta" />
                  Luigi Giussani Institute of Higher Education
                </p>
              </div>
              <div className="rounded-xl border border-warm-gray-dark bg-white p-5">
                <h4 className="text-sm font-semibold text-charcoal">Phone</h4>
                <p className="mt-2 flex items-center gap-2 text-sm text-charcoal-light">
                  <Phone className="h-4 w-4 text-terracotta" />
                  +256 771 234567
                </p>
              </div>
              <div className="rounded-xl border border-warm-gray-dark bg-white p-5">
                <h4 className="text-sm font-semibold text-charcoal">Address</h4>
                <p className="mt-2 flex items-start gap-2 text-sm text-charcoal-light">
                  <MapPin className="h-4 w-4 text-terracotta" />
                  <span>
                    Luzira, Kampala, Uganda<br />
                    P.O Box 40390
                  </span>
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
                    Thank you for your message. Our team will respond within 3 business days.
                  </p>
                </div>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="rounded-2xl border border-warm-gray-dark bg-white p-5 sm:p-8"
              >
                <h3 className="text-lg font-bold text-charcoal">Contact Form</h3>
                <p className="mt-1 text-sm text-charcoal-light">
                  Complete the form below and our team will be in touch.
                </p>

                <div className="mt-8 space-y-5">
                  <div>
                    <label htmlFor="contactName" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-charcoal">
                      <User className="h-3.5 w-3.5 text-charcoal-light" />
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="contactName"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full rounded-lg border border-warm-gray-dark bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
                    />
                  </div>

                  {/* Email + Phone */}
                  <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                      <label htmlFor="contactEmail" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-charcoal">
                        <Mail className="h-3.5 w-3.5 text-charcoal-light" />
                        Email
                      </label>
                      <input
                        type="email"
                        id="contactEmail"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-warm-gray-dark bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
                      />
                    </div>
                    <div>
                      <label htmlFor="contactPhone" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-charcoal">
                        <Phone className="h-3.5 w-3.5 text-charcoal-light" />
                        Phone
                      </label>
                      <input
                        type="tel"
                        id="contactPhone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full rounded-lg border border-warm-gray-dark bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
                      />
                    </div>
                  </div>

                  <div>
                    <label htmlFor="contactSubject" className="mb-1.5 text-sm font-medium text-charcoal">
                      Subject
                    </label>
                    <input
                      type="text"
                      id="contactSubject"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="What is this about?"
                      className="w-full rounded-lg border border-warm-gray-dark bg-white px-4 py-2.5 text-sm text-charcoal focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
                    />
                  </div>

                  <div>
                    <label htmlFor="contactMessage" className="mb-1.5 flex items-center gap-1.5 text-sm font-medium text-charcoal">
                      <MessageSquare className="h-3.5 w-3.5 text-charcoal-light" />
                      Message
                    </label>
                    <textarea
                      id="contactMessage"
                      name="message"
                      rows={4}
                      required
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Share your question or request..."
                      className="w-full resize-none rounded-lg border border-warm-gray-dark bg-white px-4 py-2.5 text-sm text-charcoal placeholder:text-charcoal-light/50 focus:border-terracotta focus:outline-none focus:ring-1 focus:ring-terracotta/30"
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-full bg-terracotta px-7 py-3 text-sm font-semibold text-white shadow-sm transition-all hover:bg-terracotta-dark hover:shadow-md"
                >
                  Send Message
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
