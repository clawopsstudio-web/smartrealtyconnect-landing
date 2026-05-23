'use client';

import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import { useRef } from 'react';
import ScrollReveal from './ScrollReveal';

const summaryItems = [
  { time: '8:42 AM', task: 'Listing reviewed', status: 'done' },
  { time: '8:49 AM', task: 'Buyer personas built', status: 'done' },
  { time: '9:06 AM', task: 'Agent and investor channels found', status: 'ready' },
  { time: '9:18 AM', task: 'Follow-up drafts waiting for approval', status: 'review' },
  { time: '9:31 AM', task: 'Open house promo queued', status: 'ready' },
];

const proofCards = [
  { value: '34', label: 'Buyer channels', detail: 'mapped for one listing', accent: 'border-l-[#191816]' },
  { value: '12', label: 'Investor matches', detail: 'near the property', accent: 'border-l-[#3d7f58]' },
  { value: '5', label: 'Drafts ready', detail: 'for your approval', accent: 'border-l-[#123763]' },
];

// Animated background particles
function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-3 h-3 rounded-full bg-[#d8a547]/20"
          initial={{ 
            x: `${20 + i * 15}%`, 
            y: `${30 + (i % 3) * 20}%`,
            scale: 0
          }}
          animate={{ 
            y: [`${30 + (i % 3) * 20}%`, `${20 + (i % 2) * 30}%`, `${35 + (i % 3) * 15}%`],
            scale: [0, 1, 0.8, 1, 0],
            opacity: [0, 0.6, 0.4, 0.6, 0]
          }}
          transition={{ 
            duration: 8 + i * 2, 
            repeat: Infinity, 
            ease: "easeInOut",
            delay: i * 1.2
          }}
        />
      ))}
    </div>
  );
}

// Animated listing card
function AnimatedListingCard() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.8, delay: 0.5 }}
      className="motion-card mx-auto max-w-md rounded-[2rem] border border-[#e4d7c1] bg-[#fffaf0] p-6 shadow-2xl shadow-[#8f7f61]/20"
    >
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm text-[#5a5044]">Daily listing summary</p>
          <h2 className="mt-1 text-xl font-bold text-[#191816]">Somerset open house</h2>
        </div>
        <span className="motion-pulse rounded-full bg-[#d8a547]/20 px-3 py-1 text-sm font-semibold text-[#7b5b1d]">
          Today
        </span>
      </div>

      <div className="mt-5 overflow-hidden rounded-2xl border border-[#e8dac3] bg-[#123763] p-5 text-white">
        <p className="text-sm text-blue-100">Listing command center</p>
        <div className="mt-5 grid grid-cols-3 gap-3">
          <div>
            <p className="text-3xl font-bold">42</p>
            <p className="mt-1 text-xs text-blue-100">signals checked</p>
          </div>
          <div>
            <p className="text-3xl font-bold">17</p>
            <p className="mt-1 text-xs text-blue-100">good fits</p>
          </div>
          <div>
            <p className="text-3xl font-bold">6</p>
            <p className="mt-1 text-xs text-blue-100">next actions</p>
          </div>
        </div>
      </div>

      <div className="mt-5 space-y-3">
        {summaryItems.map((item, i) => (
          <motion.div
            key={item.task}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 + i * 0.1 }}
            className="flex items-center justify-between gap-4 rounded-xl border border-[#e8dac3] bg-[#f7efe0] p-4"
          >
            <div>
              <p className="text-xs font-semibold text-[#6b5d4a]">{item.time}</p>
              <p className="mt-1 font-semibold text-[#191816]">{item.task}</p>
            </div>
            <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#123763]">
              {item.status}
            </span>
          </motion.div>
        ))}
      </div>

      <div className="mt-5 rounded-2xl border border-[#d8a547] bg-[#fff4d8] p-4">
        <p className="font-semibold text-[#191816]">Needs your say-so</p>
        <p className="mt-2 text-sm leading-6 text-[#5a5044]">
          Send the first buyer-agent intro for this listing?
        </p>
        <div className="mt-4 flex gap-2">
          <button className="rounded-full border border-[#d8a547] px-4 py-2 text-sm font-semibold text-[#5a5044]">
            Not yet
          </button>
          <button className="rounded-full bg-[#191816] px-4 py-2 text-sm font-semibold text-white">
            Approve
          </button>
        </div>
      </div>
    </motion.div>
  );
}

export default function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

  return (
    <section ref={ref} className="cream-surface relative overflow-hidden pt-24">
      <FloatingParticles />
      
      <motion.div style={{ y, opacity }} className="relative z-10">
        {/* Centered Header - Full Width */}
        <div className="mx-auto max-w-4xl px-5 text-center pt-8 pb-12">
          {/* Badge */}
          <ScrollReveal>
            <div className="mb-9 flex items-center justify-center gap-3">
              <span className="h-px w-9 bg-[#191816]" />
              <span className="section-label text-xs font-semibold text-[#3d352c]">
                Built for listing agents
              </span>
              <span className="h-px w-9 bg-[#191816]" />
            </div>
          </ScrollReveal>

          {/* Main Headline */}
          <ScrollReveal delay={100}>
            <h1 className="font-editorial text-5xl leading-[0.96] tracking-normal text-[#191816] sm:text-6xl lg:text-[72px]">
              Your AI listing team finds buyers, follows up, and books conversations.
            </h1>
          </ScrollReveal>

          {/* Subheadline */}
          <ScrollReveal delay={200}>
            <p className="mt-8 text-lg leading-8 text-[#3d352c] sm:text-xl max-w-2xl mx-auto">
              Upload a listing. Your team maps likely buyers and sellers, prepares outreach, creates promo angles, and sends you the next actions worth taking.
            </p>
          </ScrollReveal>

          {/* CENTERED CTA BUTTONS */}
          <ScrollReveal delay={300}>
            <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
              <motion.a
                href="#book"
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="group inline-flex min-h-14 items-center justify-center rounded-full bg-[#191816] px-10 py-4 text-base font-semibold text-white shadow-xl shadow-black/15"
              >
                Get a free listing report
                <motion.span 
                  className="ml-3"
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity }}
                >
                  →
                </motion.span>
              </motion.a>
              <motion.a
                href="#how"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.98 }}
                className="inline-flex min-h-12 items-center border-b-2 border-[#191816] px-1 text-base font-semibold text-[#191816]"
              >
                See how it works →
              </motion.a>
            </div>
          </ScrollReveal>

          {/* Proof Cards - Centered Grid */}
          <ScrollReveal delay={400}>
            <div className="mt-12 grid max-w-xl mx-auto gap-4 sm:grid-cols-3">
              {proofCards.map((card) => (
                <div
                  key={card.label}
                  className={`hover-lift border-l-4 ${card.accent} rounded-r-xl border-y border-r border-[#ded2bd] bg-[#fffaf0] p-4 text-center sm:text-left`}
                >
                  <p className="font-editorial text-2xl italic text-[#123763]">{card.value}</p>
                  <p className="mt-1 font-semibold text-[#191816]">{card.label}</p>
                  <p className="mt-1 text-sm leading-5 text-[#5a5044]">{card.detail}</p>
                </div>
              ))}
            </div>
          </ScrollReveal>
        </div>

        {/* Animated Listing Card - Centered Below */}
        <ScrollReveal delay={200}>
          <div className="pb-20">
            <AnimatedListingCard />
          </div>
        </ScrollReveal>
      </motion.div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#f7efe0] to-transparent" />
    </section>
  );
}
