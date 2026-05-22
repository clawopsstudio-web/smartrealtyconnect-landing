'use client';

export default function Stats() {
  const stats = [
    { value: '10+', unit: 'hrs', label: 'Saved Weekly', symbol: '+' },
    { value: '30%', unit: '', label: 'More Clients', symbol: '' },
    { value: '50+', unit: '', label: 'Agents Using Platform', symbol: '' },
    { value: '$50K+', unit: '', label: 'Extra Revenue Generated', symbol: '' },
  ];

  return (
    <section className="py-20 bg-gradient-to-r from-blue-900 via-blue-800 to-blue-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.4'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 relative">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">The Math That Matters</h2>
          <p className="text-blue-200 text-lg">Real results from real agents</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {stats.map((stat, index) => (
            <div key={index} className="text-center group">
              <div className="text-4xl md:text-5xl font-bold mb-2 group-hover:scale-110 transition-transform">
                {stat.value}
                <span className="text-2xl text-amber-400">{stat.symbol}</span>
                <span className="text-xl text-blue-200 ml-1">{stat.unit}</span>
              </div>
              <div className="text-blue-200">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Equation Style - Mobile Only */}
        <div className="mt-16 md:hidden text-center">
          <div className="inline-block bg-white/10 backdrop-blur rounded-2xl p-6">
            <div className="text-lg font-mono space-y-2">
              <div>10+ hrs saved = more showings</div>
              <div>30% more leads = more deals</div>
              <div className="text-amber-400 font-bold text-xl">= More commissions</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
