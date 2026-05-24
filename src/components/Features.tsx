'use client';

import ScrollReveal, { StaggerReveal } from './ScrollReveal';

export default function Features() {
  const features = [
    {
      icon: '🔍',
      title: 'Buyer Lead Discovery',
      description: 'AI finds people actively looking to buy in your target market — before they contact competitors.',
    },
    {
      icon: '🏠',
      title: 'Seller Lead Discovery',
      description: 'AI identifies homeowners thinking about selling: divorce, job changes, expiring listings, inherited properties.',
    },
    {
      icon: '📊',
      title: 'Free Listing Report',
      description: 'Every client starts with a free listing analysis. See the system work first.',
    },
    {
      icon: '✍️',
      title: 'Outreach Scripts',
      description: 'We draft personalized outreach scripts for every lead. You approve before anything goes out.',
    },
    {
      icon: '✅',
      title: 'Human Approval Gate',
      description: 'Every message, every campaign — you see it first. Nothing goes out without your sign-off.',
    },
    {
      icon: '📈',
      title: 'Dashboard',
      description: 'Track every lead, listing report, and outreach status in one place.',
    },
    {
      icon: '🔗',
      title: 'CRM Integration',
      description: 'We connect your agents to your existing CRM if it has an API. If not, we build a custom integration for you.',
    },
    {
      icon: '📅',
      title: 'Daily & Weekly Reports',
      description: 'Automated summaries delivered to your inbox so you never miss an opportunity.',
    },
  ];

  return (
    <section id="features" className="bg-[#191816] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label text-xs font-semibold text-[#d8a547]">
            Features
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-white">
            Everything you need to<br />close more deals
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            A complete lead generation system. No cold calling. No busywork. Just leads.
          </p>
        </ScrollReveal>

        {/* Features Grid */}
        <StaggerReveal className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="hover-lift bg-white/5 backdrop-blur rounded-2xl p-6 border border-white/10 cursor-pointer group"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </StaggerReveal>

        {/* CTA */}
        <ScrollReveal delay={400} className="mt-16 text-center">
          <a
            href="https://calendly.com/clawops-studio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d8a547] hover:bg-[#c49537] text-[#191816] px-8 py-4 rounded-xl font-semibold transition-all hover-lift"
          >
            Book a Demo
            <span>→</span>
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
