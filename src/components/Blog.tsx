'use client';

const posts = [
  {
    category: 'Listing marketing',
    title: 'How to find buyer channels for a new listing',
    description: 'A practical guide to turning one property into a ranked map of buyer agents, investors, renters, and local demand signals.',
  },
  {
    category: 'Follow-up',
    title: 'Real estate follow-up scripts that do not sound desperate',
    description: 'Message angles for buyer agents, open house visitors, investor contacts, and past clients.',
  },
  {
    category: 'Open houses',
    title: 'What to prepare before your next open house',
    description: 'The buyer personas, promo posts, call scripts, and outreach list every agent should have ready before Saturday.',
  },
];

export default function Blog() {
  return (
    <section id="blog" className="reveal bg-[#fffaf0] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className="section-label text-xs font-semibold text-[#123763]">From the field</p>
            <h2 className="font-editorial mt-4 text-4xl leading-tight text-[#191816] sm:text-6xl">
              Practical growth notes for listing agents.
            </h2>
          </div>
          <p className="max-w-xl text-lg leading-8 text-[#5a5044]">
            Guides for agents who want more listing conversations without buying the same crowded leads as everyone else.
          </p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {posts.map((post) => (
            <article key={post.title} className="hover-lift rounded-2xl border border-[#ded2bd] bg-[#f7efe0] p-6 hover:shadow-xl hover:shadow-[#8f7f61]/10">
              <p className="text-sm font-semibold text-[#123763]">{post.category}</p>
              <h3 className="mt-5 text-2xl font-bold leading-tight text-[#191816]">{post.title}</h3>
              <p className="mt-4 leading-7 text-[#5a5044]">{post.description}</p>
              <a href="#book" className="mt-6 inline-flex border-b border-[#191816] pb-1 font-semibold text-[#191816]">
                Get the report first →
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
