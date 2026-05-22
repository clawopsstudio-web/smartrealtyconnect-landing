'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const features = [
    {
      icon: '🔍',
      title: 'Buyer Discovery',
      description: 'AI finds people actively looking to buy in your target market — before they contact competitors.',
      highlight: 'Pre-qualified buyers',
    },
    {
      icon: '🏠',
      title: 'Seller Leads',
      description: 'Identify homeowners thinking about selling: divorce, job changes, expiring listings, inherited properties.',
      highlight: 'Motivated sellers',
    },
    {
      icon: '📧',
      title: 'Smart Outreach',
      description: 'Personalized email and text campaigns that feel human-written. We warm up leads before you call.',
      highlight: '89% open rate',
    },
    {
      icon: '📅',
      title: 'Calendar Booking',
      description: 'Leads book directly on your calendar. No back-and-forth. No lost opportunities.',
      highlight: 'Instant booking',
    },
    {
      icon: '📊',
      title: 'Real-Time Dashboard',
      description: 'Track every lead, their status, and your pipeline. See exactly what\'s working.',
      highlight: 'Full transparency',
    },
    {
      icon: '🛡️',
      title: 'Exclusive Territory',
      description: 'Your service area is protected. We don\'t sell the same leads to multiple agents.',
      highlight: 'No competition',
    },
  ];

  return (
    <section ref={ref} id="features" className="cream-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label text-xs font-semibold text-[#7b5b1d]">
            Features
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-[#191816]">
            Everything you need to<br />fill your pipeline
          </h2>
          <p className="mt-6 text-xl text-[#5a5044] max-w-2xl mx-auto">
            A complete lead generation system built for agents who want results, not busywork.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -6, backgroundColor: "#123763" }}
              className="group bg-[#fffaf0] rounded-2xl p-8 border border-[#e4d7c1] cursor-pointer"
            >
              <motion.div 
                className="text-4xl mb-4"
                whileHover={{ scale: 1.1 }}
                transition={{ type: "spring" }}
              >
                {feature.icon}
              </motion.div>
              <h3 className="text-xl font-bold text-[#191816] mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#5a5044] mb-4 group-hover:text-blue-100 transition-colors leading-relaxed">
                {feature.description}
              </p>
              <div className="inline-block bg-[#f7efe0] text-[#123763] px-3 py-1 rounded-full text-sm font-semibold group-hover:bg-white group-hover:text-[#123763] transition-colors">
                {feature.highlight}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
