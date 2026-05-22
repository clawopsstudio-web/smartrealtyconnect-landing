'use client';

const services = [
  {
    title: 'Buyer opportunity reports',
    description: 'Maps who the listing is likely to attract: buyer agents, investors, relocation angles, renters moving up, and local discussion signals.',
    proof: 'Best for every new listing',
  },
  {
    title: 'Seller opportunity reports',
    description: 'Finds nearby homeowners and property signals that may create listing conversations: high equity, absentee ownership, vacant homes, and stale listings.',
    proof: 'Built for listing pipeline',
  },
  {
    title: 'Approved outreach drafts',
    description: 'Creates agent-to-agent intros, investor messages, open house follow-ups, email replies, and comment drafts without sending anything sensitive blindly.',
    proof: 'You approve first',
  },
  {
    title: 'Calling and call summaries',
    description: 'For approved contacts, calls can be placed, summarized, scored, and pushed back into your tracker with recommended next steps.',
    proof: 'Start with B2B contacts',
  },
  {
    title: 'Listing promo content',
    description: 'Turns property photos and listing details into captions, short video concepts, open house posts, ad angles, and social-ready creative plans.',
    proof: 'Great for open houses',
  },
  {
    title: 'Inbox and calendar support',
    description: 'Tracks replies, prepares responses, suggests meeting times, sends reminders, and keeps interested people from slipping through.',
    proof: 'No lost follow-up',
  },
];

export default function Features() {
  return (
    <section id="features" className="bg-[#fffaf0] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-16 grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
          <div>
            <p className="section-label text-xs font-semibold text-[#123763]">What your team handles</p>
            <h2 className="font-editorial mt-4 text-4xl leading-tight text-[#191816] sm:text-6xl">
              Every listing gets a small operating team.
            </h2>
          </div>
          <p className="max-w-2xl text-lg leading-8 text-[#5a5044]">
            The goal is not to bury you in data. The goal is to turn each listing into useful conversations, useful content, and a clear next-action list.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <div key={service.title} className="group rounded-2xl border border-[#ded2bd] bg-[#f7efe0] p-6 transition duration-300 hover:-translate-y-1 hover:bg-[#191816] hover:shadow-2xl hover:shadow-[#8f7f61]/20">
              <div className="mb-8 inline-flex rounded-full border border-[#d8a547] px-3 py-1 text-sm font-semibold text-[#7b5b1d] group-hover:border-white/20 group-hover:text-[#f7efe0]">
                {service.proof}
              </div>
              <h3 className="text-2xl font-bold text-[#191816] group-hover:text-white">{service.title}</h3>
              <p className="mt-4 leading-7 text-[#5a5044] group-hover:text-[#f7efe0]/80">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
