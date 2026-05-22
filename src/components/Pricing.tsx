'use client';

const plans = [
  {
    name: 'Core',
    price: '699',
    description: 'For solo agents who want every listing worked properly.',
    features: [
      'Buyer and seller opportunity reports',
      'Approved outreach drafts',
      'Weekly listing summary',
      'Lead tracker and follow-up queue',
      'Inbox and calendar support',
    ],
  },
  {
    name: 'Growth',
    price: '1,200+',
    description: 'For agents who want calls, content, and follow-up handled deeper.',
    features: [
      'Everything in Core',
      'Approved calling workflows',
      'Call summaries and lead scoring',
      'Listing promo content',
      'Social post drafts and open house campaigns',
      'Priority optimization',
    ],
    featured: true,
  },
  {
    name: 'Team',
    price: 'Custom',
    description: 'For brokerages and teams that want repeatable listing operations.',
    features: [
      'Multiple agents and markets',
      'Shared reporting workspace',
      'Team lead routing',
      'Custom approval rules',
      'Dedicated onboarding',
    ],
  },
];

export default function Pricing() {
  return (
    <section id="pricing" className="bg-[#191816] py-24 text-white">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-14 max-w-3xl">
          <p className="section-label text-xs font-semibold text-[#d8a547]">Plans</p>
          <h2 className="font-editorial mt-4 text-4xl leading-tight sm:text-6xl">
            Start with one listing. Keep it if it creates conversations.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#f7efe0]/70">
            Every plan includes setup, tracking, and the operating system behind your listing team. No tool accounts to manage.
          </p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {plans.map((plan) => (
            <div key={plan.name} className={`rounded-2xl border p-6 ${plan.featured ? 'border-[#d8a547] bg-[#fffaf0] text-[#191816]' : 'border-white/15 bg-white/5'}`}>
              {plan.featured && (
                <div className="mb-5 inline-flex rounded-full bg-[#d8a547] px-3 py-1 text-sm font-bold text-[#191816]">
                  Most complete
                </div>
              )}
              <h3 className="text-2xl font-bold">{plan.name}</h3>
              <p className={`mt-3 leading-7 ${plan.featured ? 'text-[#5a5044]' : 'text-[#f7efe0]/70'}`}>{plan.description}</p>
              <div className="mt-8 flex items-end gap-1">
                {plan.price !== 'Custom' && <span className="mb-2 text-xl">$</span>}
                <span className="font-editorial text-5xl italic">{plan.price}</span>
                {plan.price !== 'Custom' && <span className={`mb-2 ${plan.featured ? 'text-[#5a5044]' : 'text-[#f7efe0]/70'}`}>/mo</span>}
              </div>
              <p className={`mt-3 text-sm ${plan.featured ? 'text-[#5a5044]' : 'text-[#f7efe0]/60'}`}>One-time setup starts at $1,500.</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex gap-3">
                    <span className={plan.featured ? 'text-[#3d7f58]' : 'text-[#d8a547]'}>✓</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#book"
                className={`mt-8 inline-flex w-full items-center justify-center rounded-full px-5 py-4 font-semibold transition hover:-translate-y-0.5 ${
                  plan.featured ? 'bg-[#191816] text-white hover:bg-[#123763]' : 'bg-white text-[#191816] hover:bg-[#f7efe0]'
                }`}
              >
                Talk through this plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
