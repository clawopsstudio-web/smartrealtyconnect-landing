'use client';

import ScrollReveal, { StaggerReveal } from './ScrollReveal';

export default function WhoIsThisFor() {
  const personas = [
    {
      icon: '🏠',
      title: 'US Real Estate Agents',
      description: 'Working in any US market, residential or commercial.',
    },
    {
      icon: '📞',
      title: 'Hate Cold Calling',
      description: 'Want buyer and seller leads without the awkward outreach.',
    },
    {
      icon: '📋',
      title: 'Running 5+ Listings',
      description: 'Need a team working your leads in the background.',
    },
    {
      icon: '🚀',
      title: 'Ready to Scale',
      description: 'Want predictable leads without buying expensive platform subscriptions.',
    },
  ];

  return (
    <section className="cream-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label text-xs font-semibold text-[#7b5b1d]">
            Who This Is For
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-[#191816]">
            Built for agents who want<br />to close more, not work more
          </h2>
        </ScrollReveal>

        {/* Personas Grid */}
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {personas.map((persona, index) => (
            <div
              key={index}
              className="hover-lift bg-white rounded-2xl p-6 border border-[#e4d7c1] text-center"
            >
              <div className="text-5xl mb-4">{persona.icon}</div>
              <h3 className="text-lg font-bold text-[#191816] mb-2">{persona.title}</h3>
              <p className="text-[#5a5044] text-sm">{persona.description}</p>
            </div>
          ))}
        </StaggerReveal>
      </div>
    </section>
  );
}
