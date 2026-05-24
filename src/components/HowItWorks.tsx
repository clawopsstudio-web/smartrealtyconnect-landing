'use client';

import ScrollReveal, { StaggerReveal } from './ScrollReveal';

export default function HowItWorks() {
  const steps = [
    {
      number: '01',
      icon: '📨',
      title: 'Send us a listing',
      description: 'Drop a listing address or link through your dashboard. Takes 30 seconds.',
    },
    {
      number: '02',
      icon: '🤖',
      title: 'AI finds the opportunities',
      description: 'We analyze the listing, run searches across buyer databases, Reddit, and agent networks to surface buyer and seller leads.',
    },
    {
      number: '03',
      icon: '📬',
      title: 'Get leads in your inbox',
      description: 'You receive qualified buyer and seller leads with outreach scripts and compliance notes. Human approval before anything goes out.',
    },
  ];

  return (
    <section id="how" className="cream-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label text-xs font-semibold text-[#7b5b1d]">
            How It Works
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-[#191816]">
            Three steps to more leads
          </h2>
          <p className="mt-6 text-xl text-[#5a5044] max-w-2xl mx-auto">
            We handle the research. You handle the closing.
          </p>
        </ScrollReveal>

        {/* Steps */}
        <StaggerReveal className="grid md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-16 left-[60%] w-[80%] h-0.5 bg-gradient-to-r from-[#d8a547]/50 to-transparent z-0" />
              )}
              
              <div className="hover-lift bg-white rounded-2xl p-8 border border-[#e4d7c1] relative z-10 h-full text-center">
                <div className="text-5xl mb-4">{step.icon}</div>
                <div className="text-[#d8a547] font-bold text-sm mb-2">STEP {step.number}</div>
                <h3 className="text-xl font-bold text-[#191816] mb-3">{step.title}</h3>
                <p className="text-[#5a5044] leading-relaxed">{step.description}</p>
              </div>
            </div>
          ))}
        </StaggerReveal>

        {/* Free Report Note */}
        <ScrollReveal delay={400} className="mt-12 text-center">
          <div className="inline-block bg-[#123763] text-white px-8 py-4 rounded-2xl">
            <p className="text-lg font-medium">
              Free listing report included with every new client.
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
