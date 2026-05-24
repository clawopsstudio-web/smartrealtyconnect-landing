'use client';

import { useState, useEffect } from 'react';

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      scrolled ? 'bg-[#f7efe0]/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
    }`}>
      <div className="max-w-6xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <div className="w-10 h-10 bg-gradient-to-br from-[#123763] to-[#1a4a7a] rounded-xl flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-lg">SRC</span>
            </div>
            <span className="font-bold text-xl text-[#191816]">Smart Realty Connect</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-[#5a5044] hover:text-[#123763] transition font-medium">How It Works</a>
            <a href="#features" className="text-[#5a5044] hover:text-[#123763] transition font-medium">Features</a>
            <a href="#pricing" className="text-[#5a5044] hover:text-[#123763] transition font-medium">Pricing</a>
            <a href="#faq" className="text-[#5a5044] hover:text-[#123763] transition font-medium">FAQ</a>
            <a 
              href="https://calendly.com/clawops-studio/30min" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#d8a547] hover:bg-[#c49537] text-[#191816] px-6 py-2.5 rounded-lg font-semibold transition shadow-lg"
            >
              Book a Demo
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-slate-700"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              {mobileOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-slate-200 pt-4">
            <div className="flex flex-col gap-4">
              <a href="#how" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-blue-600 transition font-medium">How It Works</a>
              <a href="#features" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-blue-600 transition font-medium">Features</a>
              <a href="#pricing" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-blue-600 transition font-medium">Pricing</a>
              <a href="#faq" onClick={() => setMobileOpen(false)} className="text-slate-600 hover:text-blue-600 transition font-medium">FAQ</a>
              <a 
                href="https://calendly.com/clawops-studio/30min" 
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileOpen(false)}
                className="bg-[#d8a547] text-[#191816] px-6 py-2.5 rounded-lg font-semibold text-center"
              >
                Book a Demo
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
