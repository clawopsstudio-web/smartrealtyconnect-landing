'use client';

import { useState } from 'react';

export default function CTA() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    market: '',
    listing: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Got it. We will review your listing and send next steps.');
  };

  return (
    <section id="book" className="cream-surface py-24">
      <div className="mx-auto grid max-w-7xl gap-12 px-5 sm:px-6 lg:grid-cols-[0.95fr_1.05fr] lg:px-8 lg:items-center">
        <div>
          <p className="section-label text-xs font-semibold text-[#123763]">Start with one listing</p>
          <h2 className="font-editorial mt-4 text-4xl leading-tight text-[#191816] sm:text-6xl">
            Send a listing. We will show you what your AI team would do with it.
          </h2>
          <p className="mt-6 text-lg leading-8 text-[#5a5044]">
            You will see buyer channels, seller angles, outreach ideas, and the exact next actions we would prepare before you pay for the full setup.
          </p>
          <div className="mt-8 rounded-2xl border border-[#d8a547] bg-[#fff4d8] p-5">
            <p className="font-bold text-[#191816]">Good fit if:</p>
            <ul className="mt-4 space-y-3 text-[#5a5044]">
              <li>✓ You post listings or open houses and want more conversations.</li>
              <li>✓ You want follow-up handled without giving up control.</li>
              <li>✓ You want content and outreach prepared for every property.</li>
            </ul>
          </div>
        </div>

        <div className="rounded-[2rem] border border-[#ded2bd] bg-[#fffaf0] p-6 shadow-2xl shadow-[#8f7f61]/15">
          <h3 className="text-2xl font-bold text-[#191816]">Request a free listing report</h3>
          <p className="mt-2 text-[#5a5044]">Paste a listing or describe your market. We will reply with the next step.</p>

          <form onSubmit={handleSubmit} className="mt-6 space-y-5">
            <div>
              <label className="block text-sm font-semibold text-[#3d352c]">Name</label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                className="mt-2 w-full rounded-xl border border-[#ded2bd] bg-[#f7efe0] px-4 py-3 text-[#191816] outline-none transition focus:border-[#123763]"
                placeholder="Your name"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3d352c]">Email</label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="mt-2 w-full rounded-xl border border-[#ded2bd] bg-[#f7efe0] px-4 py-3 text-[#191816] outline-none transition focus:border-[#123763]"
                placeholder="you@email.com"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3d352c]">Market</label>
              <input
                type="text"
                required
                value={formData.market}
                onChange={(e) => setFormData({ ...formData, market: e.target.value })}
                className="mt-2 w-full rounded-xl border border-[#ded2bd] bg-[#f7efe0] px-4 py-3 text-[#191816] outline-none transition focus:border-[#123763]"
                placeholder="City, state, or ZIP"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#3d352c]">Listing link or description</label>
              <textarea
                required
                value={formData.listing}
                onChange={(e) => setFormData({ ...formData, listing: e.target.value })}
                className="mt-2 min-h-28 w-full rounded-xl border border-[#ded2bd] bg-[#f7efe0] px-4 py-3 text-[#191816] outline-none transition focus:border-[#123763]"
                placeholder="Paste a listing, open house post, or property details"
              />
            </div>

            <button
              type="submit"
              className="w-full rounded-full bg-[#191816] px-6 py-4 font-semibold text-white shadow-xl shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#123763]"
            >
              Request my report →
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
