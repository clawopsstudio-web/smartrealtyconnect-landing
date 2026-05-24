'use client';

import ScrollReveal, { StaggerReveal } from './ScrollReveal';

export default function Pricing() {
  const setupPlans = [
    {
      name: 'Basic Setup',
      price: '$1,500',
      description: 'One-time fee',
      features: [
        'VPS provisioning',
        'AI agent installation',
        'Dashboard setup',
        'Database setup',
        'End-to-end testing',
      ],
      cta: 'Get Started',
    },
    {
      name: 'Full Setup',
      price: '$3,000',
      description: 'One-time fee',
      features: [
        'Everything in Basic Setup',
        'Full buyer/seller lead strategy',
        'CRM integration',
        'Google Sheets setup',
        'Onboarding call included',
      ],
      cta: 'Get Started',
      popular: true,
    },
  ];

  const managedPlans = [
    {
      name: 'Managed Service',
      price: '$399',
      period: '/month',
      features: [
        'Your own managed VPS',
        'Support Agent — monitors & fixes issues',
        'BDM Agent — strategy check-ins',
        'Claude API access',
        'Buyer + Seller lead discovery',
        'Free listing reports',
        'CRM integration',
        'Dashboard access',
        'Email support',
      ],
      cta: 'Book a Demo',
      popular: true,
    },
  ];

  return (
    <section id="pricing" className="cream-surface py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Setup Plans */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label text-xs font-semibold text-[#7b5b1d]">
            Pricing
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-[#191816]">
            Setup — One-Time Fee
          </h2>
        </ScrollReveal>

        <StaggerReveal className="grid md:grid-cols-2 gap-8 mb-20 max-w-4xl mx-auto">
          {setupPlans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 shadow-lg ${
                plan.popular ? 'ring-2 ring-[#123763] scale-105' : ''
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#123763] text-white px-4 py-1 rounded-full text-sm font-bold">
                  Recommended
                </div>
              )}

              <div className="text-center mb-6">
                <h3 className="text-xl font-bold text-[#191816] mb-1">{plan.name}</h3>
                <p className="text-sm text-[#5a5044] mb-4">{plan.description}</p>
                <div className="text-4xl font-bold text-[#123763]">{plan.price}</div>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-[#3d352c]">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://calendly.com/clawops-studio/30min"
                target="_blank"
                rel="noopener noreferrer"
                className={`block w-full py-4 rounded-xl font-semibold text-center transition-all hover-lift ${
                  plan.popular
                    ? 'bg-[#123763] hover:bg-[#0d2a4d] text-white'
                    : 'bg-[#191816] hover:bg-[#2a2a2a] text-white'
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </StaggerReveal>

        {/* Managed Service */}
        <ScrollReveal className="mb-12 text-center">
          <h2 className="font-editorial text-3xl md:text-4xl font-bold text-[#191816]">
            Managed Service
          </h2>
          <p className="mt-4 text-xl text-[#5a5044]">Everything you need, every month</p>
        </ScrollReveal>

        <ScrollReveal className="max-w-3xl mx-auto">
          <div className="bg-[#123763] rounded-2xl p-8 md:p-12 text-white">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold mb-2">Managed Service</h3>
              <div className="flex items-baseline justify-center gap-1">
                <span className="text-4xl font-bold">$399</span>
                <span className="text-blue-200">/month</span>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-8">
              {managedPlans[0].features.map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-[#d8a547] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-blue-100">{feature}</span>
                </div>
              ))}
            </div>

            <a
              href="https://calendly.com/clawops-studio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="block w-full py-4 rounded-xl font-semibold text-center bg-[#d8a547] hover:bg-[#c49537] text-[#191816] transition-all hover-lift"
            >
              Book a Demo
            </a>
          </div>
        </ScrollReveal>

        {/* Voice AI Add-on */}
        <ScrollReveal delay={200} className="mt-12 text-center">
          <div className="inline-block bg-[#fffaf0] border border-[#d8a547] rounded-2xl px-8 py-6">
            <h3 className="text-xl font-bold text-[#191816] mb-2">Voice AI Add-On</h3>
            <p className="text-[#5a5044] mb-4">Want AI calling? We connect your agents to Vapi. Contact us to get started.</p>
            <a
              href="https://calendly.com/clawops-studio/30min"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#123763] hover:bg-[#0d2a4d] text-white px-6 py-3 rounded-xl font-semibold transition-all"
            >
              Contact Us
            </a>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
