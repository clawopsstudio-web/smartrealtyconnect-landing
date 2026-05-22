'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function CTA() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [formStep, setFormStep] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    market: '',
    experience: '',
    goal: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Build Calendly URL with prefill
    const params = new URLSearchParams({
      name: formData.name,
      email: formData.email,
      customAnswers: JSON.stringify({
        a1: formData.phone,
        a2: formData.market,
        a3: formData.experience,
        a4: formData.goal,
      }),
    });
    // Redirect to Calendly (replace with actual Calendly link)
    window.open(`https://calendly.com/your-link?${params.toString()}`, '_blank');
  };

  const steps = [
    { label: 'Your info', fields: ['name', 'email'] },
    { label: 'Your market', fields: ['phone', 'market', 'experience'] },
    { label: 'Your goal', fields: ['goal'] },
  ];

  return (
    <section ref={ref} id="book" className="relative overflow-hidden bg-[#191816] py-24">
      {/* Background Elements */}
      <motion.div 
        className="absolute inset-0"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
      >
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#d8a547]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#123763]/30 rounded-full blur-3xl" />
      </motion.div>

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Copy */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-white"
          >
            <span className="inline-block bg-white/10 text-white px-4 py-1 rounded-full text-sm font-medium mb-6">
              Free Strategy Call
            </span>
            <h2 className="font-editorial text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Ready to fill your calendar<br />
              <span className="text-[#d8a547]">with qualified leads?</span>
            </h2>
            <p className="text-xl text-[#a39885] mb-8 leading-relaxed">
              Book a 30-minute strategy call and we'll show you exactly how AI can find buyers and sellers in your market — before your competitors do.
            </p>

            <ul className="space-y-4 mb-8">
              {[
                'See actual leads in your target market',
                'Get a custom strategy for your area',
                'No pressure, no obligation',
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <svg className="w-6 h-6 text-[#d8a547]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>{item}</span>
                </motion.li>
              ))}
            </ul>

            {/* Trust Badges */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ delay: 0.6 }}
              className="flex items-center gap-6 text-sm text-[#a39885]"
            >
              <div className="flex items-center gap-2">
                <span className="text-[#d8a547]">★</span>
                <span>5.0 Rating</span>
              </div>
              <div>50+ Agents Trust Us</div>
              <div>30-Day Guarantee</div>
            </motion.div>
          </motion.div>

          {/* Right - Multi-Step Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-[#f7efe0] rounded-2xl p-8 shadow-2xl"
          >
            {/* Progress Indicator */}
            <div className="flex items-center justify-center gap-2 mb-8">
              {steps.map((_, i) => (
                <div
                  key={i}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i <= formStep ? 'w-8 bg-[#123763]' : 'w-2 bg-[#ded2bd]'
                  }`}
                />
              ))}
            </div>

            <h3 className="text-2xl font-bold text-[#191816] mb-2 text-center">
              {formStep === 0 && "Let's get started"}
              {formStep === 1 && "Tell us about your market"}
              {formStep === 2 && "What are your goals?"}
            </h3>
            <p className="text-center text-[#5a5044] mb-6">
              Step {formStep + 1} of {steps.length}
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">
              {formStep === 0 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[#3d352c] mb-2">Full Name</label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className="w-full px-4 py-3 border border-[#ded2bd] rounded-lg bg-white focus:ring-2 focus:ring-[#123763] focus:border-transparent transition"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3d352c] mb-2">Email</label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      className="w-full px-4 py-3 border border-[#ded2bd] rounded-lg bg-white focus:ring-2 focus:ring-[#123763] focus:border-transparent transition"
                      placeholder="you@email.com"
                    />
                  </div>
                </>
              )}

              {formStep === 1 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[#3d352c] mb-2">Phone</label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      className="w-full px-4 py-3 border border-[#ded2bd] rounded-lg bg-white focus:ring-2 focus:ring-[#123763] focus:border-transparent transition"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3d352c] mb-2">Target Market</label>
                    <input
                      type="text"
                      required
                      value={formData.market}
                      onChange={(e) => setFormData({...formData, market: e.target.value})}
                      className="w-full px-4 py-3 border border-[#ded2bd] rounded-lg bg-white focus:ring-2 focus:ring-[#123763] focus:border-transparent transition"
                      placeholder="City, State or Zip Codes"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#3d352c] mb-2">Years in Real Estate</label>
                    <select
                      value={formData.experience}
                      onChange={(e) => setFormData({...formData, experience: e.target.value})}
                      className="w-full px-4 py-3 border border-[#ded2bd] rounded-lg bg-white focus:ring-2 focus:ring-[#123763] focus:border-transparent transition"
                    >
                      <option value="">Select...</option>
                      <option value="0-1">Less than 1 year</option>
                      <option value="1-3">1-3 years</option>
                      <option value="3-5">3-5 years</option>
                      <option value="5-10">5-10 years</option>
                      <option value="10+">10+ years</option>
                    </select>
                  </div>
                </>
              )}

              {formStep === 2 && (
                <>
                  <div>
                    <label className="block text-sm font-medium text-[#3d352c] mb-2">What's your main goal?</label>
                    <select
                      required
                      value={formData.goal}
                      onChange={(e) => setFormData({...formData, goal: e.target.value})}
                      className="w-full px-4 py-3 border border-[#ded2bd] rounded-lg bg-white focus:ring-2 focus:ring-[#123763] focus:border-transparent transition"
                    >
                      <option value="">Select your goal...</option>
                      <option value="buyer-leads">Find more buyer leads</option>
                      <option value="seller-leads">Find more seller leads</option>
                      <option value="both">Both buyer and seller leads</option>
                      <option value="automation">Automate my follow-up process</option>
                    </select>
                  </div>
                </>
              )}

              <div className="flex gap-3 pt-2">
                {formStep > 0 && (
                  <motion.button
                    type="button"
                    onClick={() => setFormStep(formStep - 1)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 border border-[#ded2bd] py-4 rounded-xl font-semibold text-[#3d352c] hover:bg-[#f7efe0]/50 transition"
                  >
                    Back
                  </motion.button>
                )}
                {formStep < 2 ? (
                  <motion.button
                    type="button"
                    onClick={() => setFormStep(formStep + 1)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-[#123763] py-4 rounded-xl font-semibold text-white"
                  >
                    Continue →
                  </motion.button>
                ) : (
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02, backgroundColor: "#d8a547" }}
                    whileTap={{ scale: 0.98 }}
                    className="flex-1 bg-[#191816] py-4 rounded-xl font-semibold text-white"
                  >
                    Schedule Strategy Call →
                  </motion.button>
                )}
              </div>
            </form>

            <p className="text-center text-sm text-[#5a5044] mt-4">
              We'll send you a calendar link within 24 hours.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
