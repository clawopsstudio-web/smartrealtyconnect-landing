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
      <div className="mx-auto max-w-7xl px-5 py-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex min-w-0 items-center gap-2">
            <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-[#191816] bg-[#f7efe0] shadow-sm">
              <span className="text-[11px] font-black leading-none text-[#191816]">SRC</span>
            </div>
            <span className="truncate text-lg font-bold text-[#191816] sm:text-xl">SmartRealtyConnect</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-8">
            <a href="#how" className="text-[#3d352c] hover:text-[#123763] transition font-medium">How it works</a>
            <a href="#features" className="text-[#3d352c] hover:text-[#123763] transition font-medium">What it handles</a>
            <a href="#blog" className="text-[#3d352c] hover:text-[#123763] transition font-medium">Blog</a>
            <a href="#pricing" className="text-[#3d352c] hover:text-[#123763] transition font-medium">Pricing</a>
            <a href="#book" className="rounded-full bg-[#191816] px-6 py-3 font-semibold text-white shadow-xl shadow-black/15 transition hover:-translate-y-0.5 hover:bg-[#123763]">
              Book strategy call
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
              <a href="#how" onClick={() => setMobileOpen(false)} className="text-[#3d352c] hover:text-[#123763] transition font-medium">How it works</a>
              <a href="#features" onClick={() => setMobileOpen(false)} className="text-[#3d352c] hover:text-[#123763] transition font-medium">What it handles</a>
              <a href="#blog" onClick={() => setMobileOpen(false)} className="text-[#3d352c] hover:text-[#123763] transition font-medium">Blog</a>
              <a href="#pricing" onClick={() => setMobileOpen(false)} className="text-[#3d352c] hover:text-[#123763] transition font-medium">Pricing</a>
              <a href="#book" onClick={() => setMobileOpen(false)} className="rounded-full bg-[#191816] px-6 py-3 text-center font-semibold text-white">Book strategy call</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
