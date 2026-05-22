'use client';

const outcomes = [
  { value: '10+', label: 'hours back', detail: 'less digging, drafting, and follow-up' },
  { value: '3x', label: 'more touchpoints', detail: 'without you writing every message' },
  { value: '24/7', label: 'listing watch', detail: 'new signals summarized daily' },
  { value: '1 tap', label: 'approval', detail: 'nothing sensitive goes out blindly' },
];

export default function Stats() {
  return (
    <section className="reveal cream-surface border-y border-[#e4d7c1] py-16">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.78fr_1.22fr] lg:items-end">
          <div>
            <p className="section-label text-xs font-semibold text-[#123763]">The work agents hate</p>
            <h2 className="font-editorial mt-4 max-w-xl text-4xl leading-tight text-[#191816] sm:text-5xl">
              Prospecting gets handled before your next showing.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {outcomes.map((item) => (
              <div key={item.label} className="hover-lift rounded-xl border border-[#ded2bd] bg-[#fffaf0] p-4 shadow-sm hover:shadow-lg">
                <p className="font-editorial text-4xl italic text-[#123763]">{item.value}</p>
                <p className="mt-2 font-bold text-[#191816]">{item.label}</p>
                <p className="mt-2 text-sm leading-5 text-[#5a5044]">{item.detail}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
