'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'How is this different from other lead gen services?',
      answer: 'Most lead gen services sell you the same leads they sell to every other agent. We use AI to find motivated buyers and sellers who haven\'t talked to any other agents yet — and we protect your territory so we won\'t sell them to your competitors.',
    },
    {
      question: 'What if I don\'t get any good leads?',
      answer: 'We qualify every lead before sending it to you. If a lead doesn\'t meet our criteria (motivated, timeline, budget), we don\'t send it. Our goal is quality over quantity. If you\'re not satisfied, we\'ll work with you to optimize your targeting.',
    },
    {
      question: 'How quickly will I see results?',
      answer: 'Most agents see their first qualified lead within 7-14 days. By day 30, you should have a clear picture of what\'s working. We provide weekly reports so you can track progress and optimize.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. Month-to-month, no long-term contracts. Cancel before your next billing date and you won\'t be charged again. We don\'t lock you in because we\'re confident in our results.',
    },
    {
      question: 'What areas do you cover?',
      answer: 'We can find leads in any US market. The more specific your target area, the better our AI can focus. We recommend starting with 2-3 zip codes or neighborhoods for best results.',
    },
    {
      question: 'Do you handle the outreach, or do I have to follow up?',
      answer: 'We handle the initial outreach via email and SMS. We warm up the lead so they\'re expecting your call. You handle the consultation and close — the part that actually makes you money.',
    },
  ];

  return (
    <section id="faq" className="cream-surface py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header with scroll animation */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label text-xs font-semibold text-[#7b5b1d]">
            FAQ
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-[#191816]">
            Questions?<br />We've Got Answers.
          </h2>
        </ScrollReveal>

        {/* FAQ Accordion with stagger animation */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="border border-slate-200 rounded-xl overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-slate-50 transition-colors"
                >
                  <span className="font-semibold text-slate-900 pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-slate-400 flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-slate-600 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        <ScrollReveal delay={300} className="mt-12 text-center">
          <p className="text-slate-600">
            Still have questions?{' '}
            <a href="#book" className="text-blue-600 font-semibold hover:underline">
              Book a call and we'll answer them all.
            </a>
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
