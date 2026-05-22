'use client';

const stats = [
  { value: '10+', label: 'hours saved every week' },
  { value: '30%', label: 'more qualified conversations' },
  { value: '50+', label: 'agents already using the platform' },
  { value: '$50K+', label: 'pipeline influenced for customers' },
];

export default function Stats() {
  return (
    <section className="border-y border-slate-200 bg-white py-14">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.12em] text-blue-700">The math that matters</p>
            <h2 className="mt-3 max-w-xl text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">
              More booked conversations, less manual prospecting.
            </h2>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
            {stats.map((stat) => (
              <div key={stat.label} className="rounded-lg border border-slate-200 bg-slate-50 p-4">
                <div className="text-3xl font-bold tracking-normal text-slate-950 sm:text-4xl">{stat.value}</div>
                <div className="mt-2 text-sm leading-5 text-slate-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
