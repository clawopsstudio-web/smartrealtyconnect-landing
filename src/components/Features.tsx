'use client';

export default function Features() {
  const features = [
    {
      icon: '🔍',
      title: 'Buyer Discovery',
      description: 'AI finds people who are actively looking to buy in your target market — before they contact your competitors.',
      highlight: 'Pre-qualified buyers',
    },
    {
      icon: '🏠',
      title: 'Seller Leads',
      description: 'Identify homeowners thinking about selling: divorce situations, job changes, expiring listings, inherited properties.',
      highlight: 'Motivated sellers',
    },
    {
      icon: '📧',
      title: 'Smart Outreach',
      description: 'Personalized email and text campaigns that feel human-written. We warm up leads before they reach you.',
      highlight: '89% open rate',
    },
    {
      icon: '📅',
      title: 'Calendar Integration',
      description: 'Leads book directly on your calendar. No back-and-forth. No lost opportunities.',
      highlight: 'Instant booking',
    },
    {
      icon: '📊',
      title: 'Real-Time Dashboard',
      description: 'Track every lead, their status, and your pipeline. See exactly what\'s working.',
      highlight: 'Full transparency',
    },
    {
      icon: '🛡️',
      title: 'Exclusive Territory',
      description: 'Your service area is protected. We don\'t sell the same leads to multiple agents.',
      highlight: 'No competition',
    },
  ];

  return (
    <section id="features" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-amber-500 font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Everything You Need to<br />
            <span className="text-blue-600">Fill Your Pipeline</span>
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            A complete lead generation system built for real estate agents who want results, not busywork.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className="group bg-slate-50 rounded-2xl p-8 hover:bg-blue-600 transition-all duration-300"
            >
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-white transition-colors">{feature.title}</h3>
              <p className="text-slate-600 mb-4 group-hover:text-blue-100 transition-colors leading-relaxed">{feature.description}</p>
              <div className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium group-hover:bg-white group-hover:text-blue-600 transition-colors">
                {feature.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
