'use client';

import ScrollReveal, { StaggerReveal } from './ScrollReveal';

export default function Pricing() {
  const plans = [
    {
      name: 'Starter',
      price: '399',
      period: '/month',
      description: 'Perfect for agents getting started with AI lead gen.',
      features: [
        '5 buyer leads/month',
        '3 seller leads/month',
        'Email outreach included',
        'Basic dashboard',
        'Email support',
      ],
      cta: 'Start Free Trial',
      popular: false,
    },
    {
      name: 'Pro',
      price: '799',
      period: '/month',
      description: 'For agents who want a consistent flow of qualified leads.',
      features: [
        '15 buyer leads/month',
        '10 seller leads/month',
        'Email + SMS outreach',
        'Full dashboard + analytics',
        'Calendar integration',
        'Priority support',
        'Exclusive territory',
      ],
      cta: 'Start Free Trial',
      popular: true,
    },
    {
      name: 'Enterprise',
      price: 'Custom',
      period: '',
      description: 'For teams and brokerages who need volume.',
      features: [
        'Unlimited leads',
        'All outreach channels',
        'White-label options',
        'API access',
        'Dedicated account manager',
        'Custom integrations',
      ],
      cta: 'Contact Us',
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="bg-[#191816] py-24">
      <div className="mx-auto max-w-6xl px-6">
        {/* Header with scroll animation */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label text-xs font-semibold text-[#d8a547]">
            Pricing
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-white">
            Simple, Transparent Pricing
          </h2>
          <p className="mt-6 text-xl text-slate-400 max-w-2xl mx-auto">
            No hidden fees. No long-term contracts. Cancel anytime.
          </p>
        </ScrollReveal>

        {/* Pricing cards with stagger animation */}
        <StaggerReveal className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl p-8 ${
                plan.popular
                  ? 'ring-2 ring-amber-400 scale-105 shadow-2xl'
                  : 'shadow-lg'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-amber-400 text-slate-900 px-4 py-1 rounded-full text-sm font-bold">
                  Most Popular
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="text-2xl font-bold text-slate-900 mb-2">{plan.name}</h3>
                <p className="text-slate-600 text-sm mb-4">{plan.description}</p>
                <div className="flex items-baseline justify-center gap-1">
                  {plan.price === 'Custom' ? (
                    <span className="text-4xl font-bold text-slate-900">{plan.price}</span>
                  ) : (
                    <>
                      <span className="text-2xl text-slate-400">$</span>
                      <span className="text-5xl font-bold text-slate-900">{plan.price}</span>
                    </>
                  )}
                  <span className="text-slate-500">{plan.period}</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span className="text-slate-600">{feature}</span>
                  </li>
                ))}
              </ul>

              <button className={`w-full py-4 rounded-xl font-semibold text-lg transition-all hover-lift ${
                plan.popular
                  ? 'bg-amber-500 hover:bg-amber-600 text-white shadow-lg'
                  : 'bg-slate-900 hover:bg-slate-800 text-white'
              }`}>
                {plan.cta}
              </button>
            </div>
          ))}
        </StaggerReveal>

        {/* Setup Fee Note */}
        <ScrollReveal delay={300} className="mt-12 text-center">
          <p className="text-slate-400">
            One-time setup fee: <span className="text-white font-semibold">$1,500</span> (includes onboarding, training, and first 30 days of optimization)
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
