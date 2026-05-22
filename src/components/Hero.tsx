'use client';

const summaryItems = [
  { time: '8:42 AM', task: 'Listing reviewed', status: 'done' },
  { time: '8:49 AM', task: 'Buyer personas built', status: 'done' },
  { time: '9:06 AM', task: 'Agent and investor channels found', status: 'ready' },
  { time: '9:18 AM', task: 'Follow-up drafts waiting for approval', status: 'review' },
  { time: '9:31 AM', task: 'Open house promo queued', status: 'ready' },
];

const proofCards = [
  { value: '34', label: 'Buyer channels', detail: 'mapped for one listing', accent: 'border-l-[#191816]' },
  { value: '12', label: 'Investor matches', detail: 'near the property', accent: 'border-l-[#3d7f58]' },
  { value: '5', label: 'Drafts ready', detail: 'for your approval', accent: 'border-l-[#123763]' },
];

export default function Hero() {
  return (
    <section className="cream-surface relative overflow-hidden pt-24">
      <div className="mx-auto grid max-w-7xl gap-14 px-5 pb-20 pt-8 sm:px-6 lg:grid-cols-[1.06fr_0.94fr] lg:px-8 lg:pb-28 lg:pt-12">
        <div>
          <div className="mb-9 flex items-center gap-3">
            <span className="h-px w-9 bg-[#191816]" />
            <span className="section-label text-xs font-semibold text-[#3d352c]">
              Built for listing agents
            </span>
          </div>

          <h1 className="font-editorial max-w-3xl text-5xl leading-[0.96] tracking-normal text-[#191816] sm:text-6xl lg:text-[86px]">
            Your AI listing team finds buyers, follows up, and books conversations.
          </h1>

          <p className="mt-8 max-w-2xl text-lg leading-8 text-[#3d352c] sm:text-xl">
            Upload a listing. Your team maps likely buyers and sellers, prepares outreach, creates promo angles, and sends you the next actions worth taking.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:hidden">
            <a
              href="#book"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#191816] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-black/15 transition hover:bg-[#123763]"
            >
              Get a free listing report
              <span className="ml-3">→</span>
            </a>
            <a
              href="#how"
              className="inline-flex min-h-12 items-center justify-center border-b border-[#191816] px-1 text-base font-semibold text-[#191816] transition hover:text-[#123763]"
            >
              See how it works →
            </a>
          </div>

          <div className="mt-9 grid max-w-2xl gap-3 sm:grid-cols-3">
            {proofCards.map((card) => (
              <div key={card.label} className={`border-l-4 ${card.accent} rounded-r-lg border-y border-r border-[#ded2bd] bg-[#fffaf0] p-3 shadow-sm sm:p-4`}>
                <div className="flex items-baseline gap-3 sm:block">
                  <p className="font-editorial text-2xl italic text-[#123763]">{card.value}</p>
                  <p className="mt-1 font-semibold text-[#191816]">{card.label}</p>
                </div>
                <p className="mt-1 text-sm leading-5 text-[#5a5044]">{card.detail}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 hidden flex-col gap-4 sm:flex sm:flex-row sm:items-center">
            <a
              href="#book"
              className="inline-flex min-h-14 items-center justify-center rounded-full bg-[#191816] px-8 py-4 text-base font-semibold text-white shadow-xl shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#123763]"
            >
              Get a free listing report
              <span className="ml-3">→</span>
            </a>
            <a
              href="#how"
              className="inline-flex min-h-12 items-center justify-center border-b border-[#191816] px-1 text-base font-semibold text-[#191816] transition hover:text-[#123763]"
            >
              See how it works →
            </a>
          </div>
        </div>

        <div className="relative">
          <div className="mx-auto max-w-md rounded-[2rem] border border-[#e4d7c1] bg-[#fffaf0] p-6 shadow-2xl shadow-[#8f7f61]/20">
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm text-[#5a5044]">Daily listing summary</p>
                <h2 className="mt-1 text-xl font-bold text-[#191816]">Somerset open house</h2>
              </div>
              <span className="rounded-full bg-[#d8a547]/20 px-3 py-1 text-sm font-semibold text-[#7b5b1d]">
                Today
              </span>
            </div>

            <div className="mt-5 overflow-hidden rounded-2xl border border-[#e8dac3] bg-[#123763] p-5 text-white">
              <p className="text-sm text-blue-100">Listing command center</p>
              <div className="mt-5 grid grid-cols-3 gap-3">
                <div>
                  <p className="text-3xl font-bold">42</p>
                  <p className="mt-1 text-xs text-blue-100">signals checked</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">17</p>
                  <p className="mt-1 text-xs text-blue-100">good fits</p>
                </div>
                <div>
                  <p className="text-3xl font-bold">6</p>
                  <p className="mt-1 text-xs text-blue-100">next actions</p>
                </div>
              </div>
            </div>

            <div className="mt-5 space-y-3">
              {summaryItems.map((item) => (
                <div key={item.task} className="flex items-center justify-between gap-4 rounded-xl border border-[#e8dac3] bg-[#f7efe0] p-4">
                  <div>
                    <p className="text-xs font-semibold text-[#6b5d4a]">{item.time}</p>
                    <p className="mt-1 font-semibold text-[#191816]">{item.task}</p>
                  </div>
                  <span className="rounded-full bg-white px-3 py-1 text-xs font-semibold text-[#123763]">
                    {item.status}
                  </span>
                </div>
              ))}
            </div>

            <div className="mt-5 rounded-2xl border border-[#d8a547] bg-[#fff4d8] p-4">
              <p className="font-semibold text-[#191816]">Needs your say-so</p>
              <p className="mt-2 text-sm leading-6 text-[#5a5044]">
                Send the first buyer-agent intro for this listing?
              </p>
              <div className="mt-4 flex gap-2">
                <button className="rounded-full border border-[#d8a547] px-4 py-2 text-sm font-semibold text-[#5a5044]">Not yet</button>
                <button className="rounded-full bg-[#191816] px-4 py-2 text-sm font-semibold text-white">Approve</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
