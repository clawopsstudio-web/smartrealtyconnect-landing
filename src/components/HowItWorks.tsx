'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';

export default function HowItWorks() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const steps = [
    {
      number: '01',
      icon: '🎯',
      title: 'You upload a listing',
      description: 'Drop a listing URL, paste property details, or share what you need buyers for. Takes 30 seconds.',
    },
    {
      number: '02',
      icon: '🤖',
      title: 'AI maps buyer channels',
      description: 'Your AI team scans Reddit, investor communities, REIA groups, and public data for people likely to want this property.',
    },
    {
      number: '03',
      icon: '✍️',
      title: 'Outreach drafted for you',
      description: 'Personalized messages are written and ready. You review and approve before anything goes out.',
    },
    {
      number: '04',
      icon: '📅',
      title: 'Conversations booked',
      description: 'Qualified leads book directly on your calendar. You show up, build rapport, close deals.',
    },
  ];

  return (
    <section ref={ref} id="how" className="bg-[#123763] py-24">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div 
          className="mb-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="section-label text-xs font-semibold text-[#d8a547]">
            How It Works
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-white">
            From listing to booked conversations
          </h2>
          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            A simple process that replaces hours of cold calling with AI-powered discovery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#d8a547]/50 to-transparent z-0" />
              )}
              
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                className="bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 relative z-10 h-full"
              >
                <motion.div 
                  className="text-5xl mb-4"
                  animate={{ rotate: [0, 5, -5, 0] }}
                  transition={{ duration: 3, repeat: Infinity, repeatDelay: 2 }}
                >
                  {step.icon}
                </motion.div>
                <div className="text-[#d8a547] font-bold text-sm mb-2">STEP {step.number}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed">{step.description}</p>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div 
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.a
            href="#book"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#d8a547] px-8 py-4 font-semibold text-[#191816] shadow-lg"
          >
            Get your free listing report
            <span>→</span>
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}
