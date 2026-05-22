'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'Are you selling me leads?',
    answer: 'No. We build opportunity reports and workflows around your listings. Some opportunities are direct leads, but many are channels: buyer agents, investors, renters moving up, seller signals, and follow-up tasks worth acting on.',
  },
  {
    question: 'Will anything be sent without my approval?',
    answer: 'No. Research, drafts, summaries, and tracking can run in the background. Outreach, calls, public comments, and social posts ask for approval first.',
  },
  {
    question: 'What do I send you to get started?',
    answer: 'A listing link, open house post, or property details. If you have photos, we can also prepare content ideas and promo drafts for that property.',
  },
  {
    question: 'Is this for buyers or sellers?',
    answer: 'Both. For each listing, we map buyer-side channels and seller-side opportunities so the property can create current conversations and future listing pipeline.',
  },
  {
    question: 'How soon can I see something useful?',
    answer: 'A first listing report can be prepared quickly. The ongoing value comes from repeating the workflow across every listing and following up consistently.',
  },
  {
    question: 'Do I need to manage any software?',
    answer: 'No. The service is packaged for agents. You get the reports, approvals, summaries, and booked next steps without managing the underlying tools.',
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="faq" className="cream-surface py-24">
      <div className="mx-auto max-w-4xl px-5 sm:px-6 lg:px-8">
        <div className="mb-12 text-center">
          <p className="section-label text-xs font-semibold text-[#123763]">Questions</p>
          <h2 className="font-editorial mt-4 text-4xl leading-tight text-[#191816] sm:text-6xl">
            What agents usually ask first.
          </h2>
        </div>

        <div className="space-y-3">
          {faqs.map((faq, index) => (
            <div key={faq.question} className="overflow-hidden rounded-2xl border border-[#ded2bd] bg-[#fffaf0]">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex w-full items-center justify-between gap-4 p-6 text-left"
              >
                <span className="text-lg font-bold text-[#191816]">{faq.question}</span>
                <span className="text-2xl text-[#123763]">{openIndex === index ? '−' : '+'}</span>
              </button>
              {openIndex === index && (
                <div className="px-6 pb-6">
                  <p className="leading-7 text-[#5a5044]">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
