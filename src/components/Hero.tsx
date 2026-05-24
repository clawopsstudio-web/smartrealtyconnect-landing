'use client';

import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="cream-surface relative overflow-hidden pt-32 pb-20">
      {/* Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#d8a547]/10 to-transparent" />
      </div>
      
      <motion.div style={{ y, opacity }} className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Badge */}
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 bg-[#123763] text-white px-4 py-2 rounded-full text-sm font-medium mb-8">
            <span className="w-2 h-2 bg-[#d8a547] rounded-full" />
            AI Employee Team for Real Estate
          </div>
        </ScrollReveal>

        {/* Headline */}
        <ScrollReveal delay={100}>
          <h1 className="font-editorial text-4xl md:text-6xl lg:text-7xl font-bold text-[#191816] leading-tight mb-6">
            Your AI Employee Team for<br />
            <span className="text-[#123763]">Real Estate Lead Generation</span>
          </h1>
        </ScrollReveal>

        {/* Subheadline */}
        <ScrollReveal delay={200}>
          <p className="text-lg md:text-xl text-[#3d352c] max-w-3xl mx-auto mb-10 leading-relaxed">
            We install a team of AI agents on your own VPS. They find buyer leads, seller leads, and deliver outreach-ready reports — every week, automatically.
          </p>
        </ScrollReveal>

        {/* CTAs */}
        <ScrollReveal delay={300}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://calendly.com/clawops-studio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center rounded-full bg-[#123763] hover:bg-[#0d2a4d] px-10 py-4 text-base font-semibold text-white shadow-xl shadow-[#123763]/25 transition-all hover-lift"
            >
              Book a Demo
              <motion.span
                className="ml-2"
                animate={{ x: [0, 4, 0] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              >
                →
              </motion.span>
            </a>
            <a
              href="#how"
              className="inline-flex items-center justify-center rounded-full border-2 border-[#191816] hover:border-[#123763] px-10 py-4 text-base font-semibold text-[#191816] transition-all hover:bg-white/50"
            >
              Get a free listing report →
            </a>
          </div>
        </ScrollReveal>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#f7efe0] to-transparent" />
    </section>
  );
}
