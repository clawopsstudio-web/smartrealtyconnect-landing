'use client';

import ScrollReveal, { StaggerReveal } from './ScrollReveal';

export default function Problem() {
  const problems = [
    {
      icon: '💸',
      title: "You're buying leads everyone else buys",
      description: 'Generic leads from platforms your competitors use. No competitive edge, terrible conversion rates.',
    },
    {
      icon: '⏰',
      title: 'Hours wasted on unqualified prospects',
      description: "Chasing people who aren't ready to buy or sell. Time you could spend closing actual deals.",
    },
    {
      icon: '😤',
      title: 'Missing motivated buyers in plain sight',
      description: 'Real opportunities hiding in Reddit, forums, and public data you never have time to find.',
    },
    {
      icon: '📉',
      title: 'No time left for what you do best',
      description: 'All your energy goes to prospecting. None left for negotiating and closing.',
    },
  ];

  return (
    <section className="cream-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header with scroll animation */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label text-xs font-semibold text-[#7b5b1d]">
            The Problem
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-[#191816]">
            Stop wasting time on leads<br />that go nowhere
          </h2>
          <p className="mt-6 text-xl text-[#5a5044] max-w-2xl mx-auto">
            Every hour chasing cold leads is an hour you're not closing. There's a better way.
          </p>
        </ScrollReveal>

        {/* Problem cards with stagger animation */}
        <StaggerReveal className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="hover-lift bg-red-50 border border-red-100 rounded-2xl p-8"
            >
              <div className="text-4xl mb-4 animate-float">{problem.icon}</div>
              <h3 className="text-xl font-bold text-[#191816] mb-3">{problem.title}</h3>
              <p className="text-[#5a5044] leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </StaggerReveal>

        {/* Transition to Solution */}
        <ScrollReveal delay={300} className="mt-16 text-center">
          <div className="inline-block bg-[#191816] text-white px-8 py-4 rounded-2xl">
            <p className="text-lg font-medium">
              <span className="text-[#d8a547]">What if instead:</span> Motivated buyers and sellers found YOU?
            </p>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
