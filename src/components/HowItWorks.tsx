'use client';

import ScrollReveal, { StaggerReveal } from './ScrollReveal';

export default function HowItWorks() {
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
    <section id="how" className="bg-[#123763] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header with scroll animation */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label text-xs font-semibold text-[#d8a547]">
            How It Works
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-white">
            From listing to booked conversations
          </h2>
          <p className="mt-6 text-xl text-blue-100 max-w-2xl mx-auto">
            A simple process that replaces hours of cold calling with AI-powered discovery.
          </p>
        </ScrollReveal>

        {/* Steps with stagger animation */}
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-20 left-full w-full h-0.5 bg-gradient-to-r from-[#d8a547]/50 to-transparent z-0" />
              )}
              
              <div className="hover-lift bg-white/10 backdrop-blur rounded-2xl p-8 border border-white/20 relative z-10 h-full">
                <div className="text-5xl mb-4 animate-float">{step.icon}</div>
                <div className="text-[#d8a547] font-bold text-sm mb-2">STEP {step.number}</div>
                <h3 className="text-xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-blue-100 leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* CTA */}
        <ScrollReveal delay={400} className="mt-16 text-center">
          <a
            href="#book"
            className="inline-flex items-center gap-2 rounded-full bg-[#d8a547] px-8 py-4 font-semibold text-[#191816] shadow-lg hover-lift transition-all"
          >
            Get your free listing report
            <span>→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
