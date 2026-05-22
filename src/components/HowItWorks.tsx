'use client';

const steps = [
  {
    number: '01',
    title: 'Send the listing',
    description: 'Paste the listing link, open house post, or property details. We pull out the facts, strengths, price angle, and likely buyer types.',
  },
  {
    number: '02',
    title: 'Get the opportunity map',
    description: 'You receive ranked buyer and seller channels: buyer agents, investors, renter angles, relocation sources, and nearby homeowner opportunities.',
  },
  {
    number: '03',
    title: 'Approve the next actions',
    description: 'Outreach drafts, call scripts, comments, and promo content are prepared for review. You decide what goes out.',
  },
  {
    number: '04',
    title: 'Wake up to the summary',
    description: 'Replies, call notes, booked meetings, and content updates land in a simple report so you know what moved forward.',
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="cream-surface py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-16 max-w-3xl">
          <p className="section-label text-xs font-semibold text-[#123763]">How it works</p>
          <h2 className="font-editorial mt-4 text-4xl leading-tight text-[#191816] sm:text-6xl">
            Three minutes from listing upload to a working plan.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5a5044]">
            The system is built for busy agents. You give it the listing; it gives you the plan, drafts, and daily progress.
          </p>
        </div>

        <div className="grid gap-4 lg:grid-cols-4">
          {steps.map((step) => (
            <div key={step.number} className="rounded-2xl border border-[#ded2bd] bg-[#fffaf0] p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8f7f61]/10">
              <p className="font-editorial text-5xl italic text-[#123763]">{step.number}</p>
              <h3 className="mt-8 text-xl font-bold text-[#191816]">{step.title}</h3>
              <p className="mt-4 leading-7 text-[#5a5044]">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
