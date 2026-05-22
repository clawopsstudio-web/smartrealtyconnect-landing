'use client';

const pipelineItems = [
  { label: 'Buyer intent detected', detail: 'Moving in 60-90 days' },
  { label: 'Seller signal matched', detail: 'High-equity homeowner' },
  { label: 'Call booked', detail: 'Thursday, 3:30 PM' },
];

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#f7f9fc] pt-20 md:pt-20">
      <div className="mx-auto grid max-w-7xl items-center gap-12 px-5 pb-12 pt-6 sm:px-6 md:pb-16 lg:grid-cols-[1.04fr_0.96fr] lg:px-8 lg:pb-18">
        <div className="mx-auto max-w-3xl text-center lg:mx-0 lg:text-left">
          <div className="mb-6 inline-flex items-center gap-2 rounded-lg border border-blue-200 bg-white px-3 py-2 text-sm font-semibold text-blue-700 shadow-sm">
            <span className="h-2 w-2 rounded-full bg-emerald-500" />
            AI-powered lead discovery for real estate agents
          </div>

          <h1 className="text-balance text-4xl font-bold leading-[1.04] tracking-normal text-slate-950 sm:text-5xl md:text-6xl lg:text-7xl">
            We find buyers and sellers while you close deals.
          </h1>

          <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-600 sm:text-xl lg:mx-0">
            Stop chasing cold leads. SmartRealtyConnect identifies motivated prospects in your market, qualifies them, and turns interest into booked calls.
          </p>

          <div className="mt-9 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:justify-center lg:justify-start">
            <a
              href="#book"
              className="inline-flex min-h-12 items-center justify-center rounded-lg bg-blue-700 px-6 py-3 text-base font-semibold text-white shadow-lg shadow-blue-700/20 transition hover:bg-blue-800"
            >
              Book free strategy call
            </a>
            <a
              href="#how"
              className="inline-flex min-h-12 items-center justify-center rounded-lg border border-slate-300 bg-white px-6 py-3 text-base font-semibold text-slate-800 transition hover:border-blue-300 hover:text-blue-700"
            >
              See how it works
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center gap-3 text-sm text-slate-500 sm:flex-row sm:justify-center lg:justify-start">
            <div className="flex -space-x-2">
              <span className="h-8 w-8 rounded-full border-2 border-white bg-slate-300" />
              <span className="h-8 w-8 rounded-full border-2 border-white bg-blue-200" />
              <span className="h-8 w-8 rounded-full border-2 border-white bg-amber-200" />
            </div>
            <span>Trusted by 50+ real estate agents across the US</span>
          </div>
        </div>

        <div className="relative mx-auto hidden w-full max-w-xl lg:block lg:max-w-none">
          <div className="rounded-lg border border-slate-200 bg-white p-4 shadow-2xl shadow-slate-900/10 sm:p-5">
            <div className="rounded-lg border border-slate-200 bg-slate-950 p-4 text-white">
              <div className="flex items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Lead engine</p>
                  <p className="mt-1 text-xl font-semibold">Today&apos;s pipeline</p>
                </div>
                <div className="rounded-lg bg-emerald-500/15 px-3 py-2 text-sm font-semibold text-emerald-300">
                  Live
                </div>
              </div>

              <div className="mt-6 grid grid-cols-3 gap-3">
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-2xl font-bold">18</p>
                  <p className="mt-1 text-xs text-slate-300">New prospects</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-2xl font-bold">7</p>
                  <p className="mt-1 text-xs text-slate-300">Qualified</p>
                </div>
                <div className="rounded-lg bg-white/10 p-3">
                  <p className="text-2xl font-bold">3</p>
                  <p className="mt-1 text-xs text-slate-300">Calls booked</p>
                </div>
              </div>
            </div>

            <div className="mt-4 space-y-3">
              {pipelineItems.map((item) => (
                <div key={item.label} className="flex items-center justify-between gap-4 rounded-lg border border-slate-200 bg-slate-50 p-4">
                  <div>
                    <p className="font-semibold text-slate-950">{item.label}</p>
                    <p className="mt-1 text-sm text-slate-500">{item.detail}</p>
                  </div>
                  <span className="rounded-lg bg-blue-100 px-3 py-1 text-sm font-semibold text-blue-700">
                    Ready
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-lg border border-amber-200 bg-amber-50 p-4">
              <p className="text-sm font-semibold text-amber-900">Next best action</p>
              <p className="mt-1 text-sm leading-6 text-amber-800">
                Call Sarah M. about the Oak Ridge listing. Budget verified, wants a showing this weekend.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
