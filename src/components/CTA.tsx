'use client';

import { useMemo, useRef, useState } from 'react';

const scheduleUrl = 'https://calendly.com/clawopsstudio/strategy-call';

const listingTypes = ['Active listing', 'Open house', 'Coming soon', 'Expired listing', 'Farm area'];
const goals = ['Find buyers', 'Find sellers', 'Improve follow-up', 'Create listing content', 'Book more calls'];

export default function CTA() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(0);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    brokerage: '',
    market: '',
    listingsPerMonth: '',
    listingType: '',
    goal: '',
    bottleneck: '',
    listing: '',
  });

  const progress = useMemo(() => `${Math.min(step + 1, 3)} / 3`, [step]);
  const scheduleHref = useMemo(() => {
    const params = new URLSearchParams();
    if (formData.name) params.set('name', formData.name);
    if (formData.email) params.set('email', formData.email);
    if (formData.phone) params.set('a1', formData.phone);
    if (formData.market || formData.listingType) {
      params.set('a2', [formData.market, formData.listingType].filter(Boolean).join(' · '));
    }
    if (formData.goal || formData.bottleneck) {
      params.set('a3', [formData.goal, formData.bottleneck].filter(Boolean).join(' · '));
    }
    if (formData.listing) params.set('a4', formData.listing);

    const query = params.toString();
    return query ? `${scheduleUrl}?${query}` : scheduleUrl;
  }, [formData]);

  const update = (key: keyof typeof formData, value: string) => {
    setFormData((current) => ({ ...current, [key]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  const handlePrimaryAction = () => {
    if (!formRef.current?.reportValidity()) {
      return;
    }

    if (step < 2) {
      setStep((current) => current + 1);
      return;
    }

    setSubmitted(true);
  };

  return (
    <section id="book" className="reveal cream-surface py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-center">
        <div>
          <p className="section-label text-xs font-semibold text-[#123763]">Start with one listing</p>
          <h2 className="font-editorial mt-4 text-4xl leading-tight text-[#191816] sm:text-6xl">
            Answer a few questions. Then schedule the strategy call.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5a5044]">
            The onboarding flow tells us your market, listing volume, and biggest bottleneck so the call starts with a real plan instead of generic questions.
          </p>

          <div className="mt-8 grid gap-3">
            {[
              'Your market and listing type',
              'What you want more of: buyers, sellers, follow-up, or content',
              'A listing link or short property description',
            ].map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-xl border border-[#ded2bd] bg-[#fffaf0] p-4">
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#191816] text-sm font-bold text-white">✓</span>
                <span className="font-medium text-[#191816]">{item}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#ded2bd] bg-[#fffaf0] p-6 shadow-2xl shadow-[#8f7f61]/15">
          {submitted ? (
            <div className="py-4">
              <div className="mb-6 inline-flex rounded-full bg-[#3d7f58]/15 px-4 py-2 text-sm font-bold text-[#2d6543]">
                Onboarding received
              </div>
              <h3 className="text-3xl font-bold text-[#191816]">Now book the call.</h3>
              <p className="mt-4 leading-7 text-[#5a5044]">
                We have enough context to review your market and prepare the first listing growth plan before the call.
              </p>
              <div className="mt-6 rounded-2xl border border-[#ded2bd] bg-[#f7efe0] p-5">
                <p className="text-sm font-semibold text-[#5a5044]">Summary</p>
                <p className="mt-2 font-bold text-[#191816]">{formData.market || 'Your market'}</p>
                <p className="mt-1 text-[#5a5044]">{formData.goal || 'Primary goal'} · {formData.listingType || 'Listing focus'}</p>
              </div>
              <a
                href={scheduleHref}
                target="_blank"
                rel="noreferrer"
                className="mt-6 inline-flex w-full items-center justify-center rounded-full bg-[#191816] px-6 py-4 font-semibold text-white shadow-xl shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#123763]"
              >
                Schedule strategy call →
              </a>
              <button
                type="button"
                onClick={() => {
                  setSubmitted(false);
                  setStep(0);
                }}
                className="mt-4 w-full rounded-full border border-[#ded2bd] px-6 py-3 font-semibold text-[#5a5044]"
              >
                Edit answers
              </button>
            </div>
          ) : (
            <>
              <div className="flex items-center justify-between gap-4">
                <div>
                  <h3 className="text-2xl font-bold text-[#191816]">Listing growth onboarding</h3>
                  <p className="mt-2 text-[#5a5044]">Step {progress}</p>
                </div>
                <div className="h-2 w-24 overflow-hidden rounded-full bg-[#eadcc5]">
                  <div className="h-full rounded-full bg-[#123763] transition-all" style={{ width: `${((step + 1) / 3) * 100}%` }} />
                </div>
              </div>

              <form ref={formRef} onSubmit={handleSubmit} className="mt-6 space-y-5">
                {step === 0 && (
                  <div className="space-y-5">
                    <Input label="Full name" value={formData.name} onChange={(value) => update('name', value)} placeholder="Your name" required />
                    <Input label="Email" type="email" value={formData.email} onChange={(value) => update('email', value)} placeholder="you@email.com" required />
                    <Input label="Phone" type="tel" value={formData.phone} onChange={(value) => update('phone', value)} placeholder="(555) 123-4567" required />
                    <Input label="Brokerage or team" value={formData.brokerage} onChange={(value) => update('brokerage', value)} placeholder="Optional" />
                  </div>
                )}

                {step === 1 && (
                  <div className="space-y-5">
                    <Input label="Primary market" value={formData.market} onChange={(value) => update('market', value)} placeholder="City, state, or ZIP" required />
                    <Input label="How many listings do you handle per month?" value={formData.listingsPerMonth} onChange={(value) => update('listingsPerMonth', value)} placeholder="Example: 2-4" required />
                    <ChoiceGroup label="What are we working on first?" options={listingTypes} value={formData.listingType} onChange={(value) => update('listingType', value)} />
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-5">
                    <ChoiceGroup label="Biggest goal right now" options={goals} value={formData.goal} onChange={(value) => update('goal', value)} />
                    <Input label="Biggest bottleneck" value={formData.bottleneck} onChange={(value) => update('bottleneck', value)} placeholder="Example: follow-up, buyer leads, content, calls" required />
                    <div>
                      <label className="block text-sm font-semibold text-[#3d352c]">Listing link or property details</label>
                      <textarea
                        value={formData.listing}
                        onChange={(e) => update('listing', e.target.value)}
                        className="mt-2 min-h-28 w-full rounded-xl border border-[#ded2bd] bg-[#f7efe0] px-4 py-3 text-[#191816] outline-none transition focus:border-[#123763]"
                        placeholder="Paste a listing, open house post, or describe the property"
                      />
                    </div>
                  </div>
                )}

                <div className="flex gap-3 pt-2">
                  {step > 0 && (
                    <button
                      type="button"
                      onClick={() => setStep((current) => current - 1)}
                      className="rounded-full border border-[#ded2bd] px-6 py-4 font-semibold text-[#5a5044]"
                    >
                      Back
                    </button>
                  )}
                  <button
                    type="button"
                    onClick={handlePrimaryAction}
                    className="flex-1 rounded-full bg-[#191816] px-6 py-4 font-semibold text-white shadow-xl shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#123763]"
                  >
                    {step === 2 ? 'Finish onboarding' : 'Continue'} →
                  </button>
                </div>
              </form>
            </>
          )}
        </div>
      </div>
    </section>
  );
}

function Input({
  label,
  value,
  onChange,
  placeholder,
  type = 'text',
  required = false,
}: {
  label: string;
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="block text-sm font-semibold text-[#3d352c]">{label}</label>
      <input
        type={type}
        required={required}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="mt-2 w-full rounded-xl border border-[#ded2bd] bg-[#f7efe0] px-4 py-3 text-[#191816] outline-none transition focus:border-[#123763]"
        placeholder={placeholder}
      />
    </div>
  );
}

function ChoiceGroup({
  label,
  options,
  value,
  onChange,
}: {
  label: string;
  options: string[];
  value: string;
  onChange: (value: string) => void;
}) {
  return (
    <div>
      <p className="block text-sm font-semibold text-[#3d352c]">{label}</p>
      <div className="mt-3 flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option}
            type="button"
            onClick={() => onChange(option)}
            className={`rounded-full border px-4 py-2 text-sm font-semibold transition ${
              value === option
                ? 'border-[#191816] bg-[#191816] text-white'
                : 'border-[#ded2bd] bg-[#f7efe0] text-[#5a5044] hover:border-[#123763]'
            }`}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}
