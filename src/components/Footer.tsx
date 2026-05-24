'use client';

import ScrollReveal from './ScrollReveal';

export default function Footer() {
  return (
    <footer className="bg-[#191816] text-white py-16">
      <div className="mx-auto max-w-6xl px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <ScrollReveal direction="left" className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-[#123763] to-[#1a4a7a] rounded-xl flex items-center justify-center">
                <span className="text-white font-bold text-lg">SRC</span>
              </div>
              <span className="font-bold text-xl">Smart Realty Connect</span>
            </div>
            <p className="text-slate-400 mb-4">
              A ClawOps Studio Product
            </p>
            <p className="text-slate-400 mb-6 max-w-md">
              AI-powered lead generation for real estate agents. We find the leads, you close the deals.
            </p>
            <p className="text-[#d8a547]">
              Contact: <a href="mailto:hello@clawops.studio" className="hover:underline">hello@clawops.studio</a>
            </p>
          </ScrollReveal>

          {/* Links */}
          <ScrollReveal direction="right" delay={100}>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="#how" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </ScrollReveal>

          <ScrollReveal direction="right" delay={200}>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-3 text-slate-400">
              <li><a href="https://clawops.studio" target="_blank" rel="noopener noreferrer" className="hover:text-white transition">ClawOps Studio</a></li>
              <li><a href="mailto:hello@clawops.studio" className="hover:text-white transition">Contact</a></li>
              <li><a href="#" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-white transition">Terms of Service</a></li>
            </ul>
          </ScrollReveal>
        </div>

        <ScrollReveal className="border-t border-slate-800 pt-8 text-center">
          <p className="text-slate-400 text-sm">
            © 2024 Smart Realty Connect — A ClawOps Studio Product. All rights reserved.
          </p>
        </ScrollReveal>
      </div>
    </footer>
  );
}
