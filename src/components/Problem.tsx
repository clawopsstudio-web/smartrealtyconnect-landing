'use client';

export default function Problem() {
  const problems = [
    {
      icon: '💸',
      title: 'Buying Leads That Don\'t Convert',
      description: 'Expensive leads from platforms everyone else uses. No competitive edge, low conversion rates.',
    },
    {
      icon: '⏰',
      title: 'Hours Wasted on Unqualified Prospects',
      description: 'Time spent chasing people who aren\'t ready to buy or sell. Time you could spend closing.',
    },
    {
      icon: '😤',
      title: 'Missing Motivated Buyers Hiding in Plain Sight',
      description: 'Real opportunities in Reddit, forums, and public data you don\'t have time to find.',
    },
    {
      icon: '📉',
      title: 'No Time for Actual Closing',
      description: 'All your time on prospecting, none on what you do best: negotiating and closing deals.',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-red-500 font-semibold text-sm uppercase tracking-wider">The Problem</span>
          <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mt-4 mb-6">
            Stop Wasting Time on Leads That Go Nowhere
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto">
            Every hour you spend chasing cold leads is an hour you&apos;re not closing deals. There&apos;s a better way.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div 
              key={index}
              className="bg-red-50 border border-red-100 rounded-2xl p-8 hover:shadow-lg transition-all hover:-translate-y-1"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{problem.title}</h3>
              <p className="text-slate-600 leading-relaxed">{problem.description}</p>
            </div>
          ))}
        </div>

        {/* Transition to Solution */}
        <div className="mt-16 text-center">
          <div className="inline-block bg-gradient-to-r from-slate-900 to-slate-700 text-white px-8 py-4 rounded-2xl">
            <p className="text-lg font-medium">
              <span className="text-amber-400">What if instead:</span> Motivated buyers and sellers found YOU?
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
