'use client';

import ScrollReveal, { StaggerReveal } from './ScrollReveal';

export default function Features() {
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
      description: "Track every lead, their status, and your pipeline. See exactly what's working.",
      highlight: 'Full transparency',
    },
    {
      icon: '🛡️',
      title: 'Exclusive Territory',
      description: "Your service area is protected. We don't sell the same leads to multiple agents.",
      highlight: 'No competition',
    },
  ];

  return (
    <section id="features" className="cream-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header with scroll animation */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label text-xs font-semibold text-[#7b5b1d]">
            Features
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-[#191816]">
            Everything you need to<br />fill your pipeline
          </h2>
          <p className="mt-6 text-xl text-[#5a5044] max-w-2xl mx-auto">
            A complete lead generation system built for agents who want results, not busywork.
          </p>
        </ScrollReveal>

        {/* Features grid with stagger animation */}
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="hover-lift group bg-[#fffaf0] rounded-2xl p-8 border border-[#e4d7c1] cursor-pointer"
            >
              <div className="text-4xl mb-4 animate-float">{feature.icon}</div>
              <h3 className="text-xl font-bold text-[#191816] mb-3 group-hover:text-white transition-colors">
                {feature.title}
              </h3>
              <p className="text-[#5a5044] mb-4 group-hover:text-blue-100 transition-colors leading-relaxed">
                {feature.description}
              </p>
              <div className="inline-block bg-[#f7efe0] text-[#123763] px-3 py-1 rounded-full text-sm font-semibold">
                {feature.highlight}
              </div>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
