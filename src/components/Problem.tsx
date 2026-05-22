'use client';

const pains = [
  {
    title: 'Your listing post gets likes, not conversations.',
    description: 'A few comments feel good, but they rarely turn into buyer-agent intros, investor interest, or booked calls.',
  },
  {
    title: 'Good buyer channels are scattered everywhere.',
    description: 'Agents, investors, relocation groups, renters, and local forums all matter. Finding the right ones takes hours.',
  },
  {
    title: 'Follow-up dies when your day gets busy.',
    description: 'Showings, sellers, contracts, inspections, and calls push outreach to the bottom of the list.',
  },
  {
    title: 'Content is needed for every listing, but it takes too long.',
    description: 'Photos, captions, open house posts, scripts, and short promos should be ready before the listing loses momentum.',
  },
];

export default function Problem() {
  return (
    <section className="bg-[#fffaf0] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr]">
          <div>
            <p className="section-label text-xs font-semibold text-[#123763]">Why listings stall</p>
            <h2 className="font-editorial mt-4 text-4xl leading-tight text-[#191816] sm:text-6xl">
              The listing is live. The hard part starts after that.
            </h2>
            <p className="mt-6 text-lg leading-8 text-[#5a5044]">
              Most agents do not need another dashboard. They need the repetitive listing work handled: finding the right people, writing the follow-up, and keeping every next step moving.
            </p>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {pains.map((pain, index) => (
              <div key={pain.title} className="rounded-2xl border border-[#e4d7c1] bg-[#f7efe0] p-6 transition hover:-translate-y-1 hover:shadow-xl hover:shadow-[#8f7f61]/10">
                <p className="font-editorial text-3xl italic text-[#123763]">0{index + 1}</p>
                <h3 className="mt-5 text-xl font-bold text-[#191816]">{pain.title}</h3>
                <p className="mt-3 leading-7 text-[#5a5044]">{pain.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
