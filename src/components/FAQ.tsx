'use client';

import { useState } from 'react';
import ScrollReveal from './ScrollReveal';

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: 'Do I need technical skills?',
      answer: 'No. We set everything up and manage the tech. You just use your dashboard and receive leads via email.',
    },
    {
      question: 'Who owns my data?',
      answer: 'You do. Each client is on their own VPS and database. We never share data between clients.',
    },
    {
      question: 'Is this compliant?',
      answer: 'Yes. Every outreach script includes compliance notes. All outreach goes through a human approval gate. Fully TCPA and Fair Housing safe.',
    },
    {
      question: 'How do I get started?',
      answer: 'Book a demo call. We\'ll walk you through the system and generate a free listing report from one of your active listings.',
    },
    {
      question: 'Can I cancel anytime?',
      answer: 'Yes. Month-to-month after your setup period. No long-term contracts.',
    },
  ];

  return (
    <section id="faq" className="bg-[#123763] py-24">
      <div className="mx-auto max-w-3xl px-6">
        {/* Header */}
        <ScrollReveal className="mb-16 text-center">
          <span className="section-label text-xs font-semibold text-[#d8a547]">
            FAQ
          </span>
          <h2 className="mt-4 font-editorial text-4xl md:text-5xl font-bold text-white">
            Questions?
          </h2>
        </ScrollReveal>

        {/* FAQ Accordion */}
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <ScrollReveal key={index} delay={index * 100}>
              <div className="bg-white/10 backdrop-blur rounded-xl overflow-hidden border border-white/20">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors"
                >
                  <span className="font-semibold text-white pr-4">{faq.question}</span>
                  <svg
                    className={`w-5 h-5 text-[#d8a547] flex-shrink-0 transition-transform ${openIndex === index ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-6">
                    <p className="text-blue-100 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* CTA */}
        <ScrollReveal delay={300} className="mt-12 text-center">
          <p className="text-blue-100 mb-6">
            Still have questions?
          </p>
          <a
            href="https://calendly.com/clawops-studio/30min"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-[#d8a547] hover:bg-[#c49537] text-[#191816] px-8 py-4 rounded-xl font-semibold transition-all hover-lift"
          >
            Book a Demo
          </a>
        </ScrollReveal>
      </div>
    </section>
  );
}
