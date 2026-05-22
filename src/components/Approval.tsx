'use client';

const approvalItems = [
  'Sending outreach to a new contact',
  'Starting a calling sequence',
  'Posting listing content to social',
  'Changing campaign budget or targeting',
  'Replying to a sensitive lead question',
];

export default function Approval() {
  return (
    <section className="cream-surface py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[1fr_0.9fr] lg:px-8 lg:items-center">
        <div>
          <p className="section-label text-xs font-semibold text-[#123763]">You stay in control</p>
          <h2 className="font-editorial mt-4 text-4xl leading-tight text-[#191816] sm:text-6xl">
            Nothing important goes out without your approval.
          </h2>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-[#5a5044]">
            Day-to-day research, drafts, summaries, and tracking can run in the background. Anything that touches your reputation asks first in plain English.
          </p>
        </div>

        <div className="rounded-[2rem] border border-[#ded2bd] bg-[#fffaf0] p-6 shadow-xl shadow-[#8f7f61]/10">
          <div className="rounded-2xl bg-[#191816] p-5 text-white">
            <p className="text-sm text-[#f7efe0]/70">Needs approval</p>
            <h3 className="mt-2 text-2xl font-bold">Send 8 buyer-agent intros?</h3>
            <p className="mt-4 leading-7 text-[#f7efe0]/80">
              These agents recently worked buyers in this price range. The message mentions your listing, open house window, and buyer fit.
            </p>
          </div>

          <div className="mt-5 space-y-3">
            {approvalItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-[#e8dac3] bg-[#f7efe0] p-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#3d7f58] text-sm font-bold text-white">✓</span>
                <span className="font-medium text-[#191816]">{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-5 flex gap-3">
            <button className="flex-1 rounded-full border border-[#d8a547] px-4 py-3 font-semibold text-[#5a5044]">Edit first</button>
            <button className="flex-1 rounded-full bg-[#191816] px-4 py-3 font-semibold text-white">Approve</button>
          </div>
        </div>
      </div>
    </section>
  );
}
