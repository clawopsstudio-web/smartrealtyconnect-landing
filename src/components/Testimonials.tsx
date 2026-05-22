'use client';

const reportItems = [
  {
    label: 'Buyer-side map',
    text: 'Which buyer agents, investor profiles, renter segments, and relocation angles fit the listing.',
  },
  {
    label: 'Seller-side map',
    text: 'Nearby owner and property signals that can create future listing conversations.',
  },
  {
    label: 'Action queue',
    text: 'Drafts, calls, posts, and follow-ups organized by what needs your approval next.',
  },
];

export default function Testimonials() {
  return (
    <section className="bg-[#fffaf0] py-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        <div className="rounded-[2rem] border border-[#ded2bd] bg-[#f7efe0] p-6 sm:p-10">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="section-label text-xs font-semibold text-[#123763]">What you receive</p>
              <h2 className="font-editorial mt-4 text-4xl leading-tight text-[#191816] sm:text-6xl">
                A report agents can actually act on.
              </h2>
              <p className="mt-6 text-lg leading-8 text-[#5a5044]">
                Not a spreadsheet of random names. Every opportunity is tied back to the listing, scored for fit, and turned into a next action.
              </p>
            </div>

            <div className="space-y-4">
              {reportItems.map((item, index) => (
                <div key={item.label} className="rounded-2xl border border-[#ded2bd] bg-[#fffaf0] p-5">
                  <div className="flex items-center gap-4">
                    <span className="font-editorial text-3xl italic text-[#123763]">0{index + 1}</span>
                    <h3 className="text-xl font-bold text-[#191816]">{item.label}</h3>
                  </div>
                  <p className="mt-4 leading-7 text-[#5a5044]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
