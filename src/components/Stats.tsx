'use client';

import ScrollReveal, { StaggerReveal } from './ScrollReveal';

export default function Stats() {
  const stats = [
    { value: '10+', label: 'Hours saved weekly', color: 'text-[#d8a547]' },
    { value: '30%', label: 'More qualified leads', color: 'text-[#d8a547]' },
    { value: '50+', label: 'Agents using the platform', color: 'text-[#d8a547]' },
    { value: '$50K+', label: 'Extra revenue generated', color: 'text-[#d8a547]' },
  ];

  return (
    <section className="relative overflow-hidden bg-[#191816] py-20">
      {/* Animated Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative mx-auto max-w-6xl px-6">
        {/* Header with scroll animation */}
        <ScrollReveal className="mb-12 text-center">
          <h2 className="font-editorial text-4xl md:text-5xl font-bold text-white mb-4">
            The math that matters
          </h2>
          <p className="text-lg text-[#a39885]">
            Real results from real agents using our AI listing team
          </p>
        </ScrollReveal>

        {/* Stats grid with stagger animation */}
        <StaggerReveal className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-[#a39885]">{stat.label}</div>
            </div>
          ))}
        </StaggerReveal>

        {/* Equation Style - Animated */}
        <ScrollReveal delay={500} className="mt-16 text-center">
          <div className="inline-block bg-[#f7efe0]/10 backdrop-blur rounded-2xl p-6 border border-[#3d352c]">
            <div className="grid grid-cols-3 gap-4 text-center">
              <div>
                <p className="text-xl md:text-2xl font-bold text-white">10+ hrs</p>
                <p className="text-sm text-[#a39885]">saved weekly</p>
              </div>
              <div className="flex items-center justify-center text-[#d8a547] text-2xl">+</div>
              <div>
                <p className="text-xl md:text-2xl font-bold text-white">30% leads</p>
                <p className="text-sm text-[#a39885]">more clients</p>
              </div>
            </div>
            <div className="mt-4 text-[#d8a547] text-2xl font-bold">= More commissions</div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
