'use client';

import { useEffect, useRef } from 'react';

export default function Hero() {
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      const rect = heroRef.current.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      
      const cards = heroRef.current.querySelectorAll('.float-card');
      cards.forEach((card, i) => {
        const factor = (i + 1) * 0.5;
        (card as HTMLElement).style.transform = `translate(${x * factor * 20}px, ${y * factor * 20}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section ref={heroRef} className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-b from-slate-50 to-white pt-20">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-blue-100 rounded-full blur-3xl opacity-60" />
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-amber-100 rounded-full blur-3xl opacity-60" />
      </div>

      {/* Floating Cards */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="float-card absolute top-32 left-[10%] w-48 h-32 bg-white rounded-2xl shadow-xl p-4 transition-transform duration-300 ease-out opacity-60">
          <div className="text-2xl">🏠</div>
          <div className="text-sm font-semibold text-slate-700">New Listing Alert</div>
          <div className="text-xs text-slate-500">Sellers in your area</div>
        </div>
        <div className="float-card absolute top-40 right-[15%] w-56 h-36 bg-white rounded-2xl shadow-xl p-4 transition-transform duration-300 ease-out opacity-60">
          <div className="text-2xl">👤</div>
          <div className="text-sm font-semibold text-slate-700">Qualified Buyer Found</div>
          <div className="text-xs text-slate-500">Pre-approved, ready to buy</div>
        </div>
        <div className="float-card absolute bottom-40 left-[15%] w-52 h-32 bg-white rounded-2xl shadow-xl p-4 transition-transform duration-300 ease-out opacity-60">
          <div className="text-2xl">📈</div>
          <div className="text-sm font-semibold text-slate-700">Deal Closed</div>
          <div className="text-xs text-green-600">+1 Transaction</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-8 animate-bounce">
          <span className="w-2 h-2 bg-blue-500 rounded-full" />
          AI-Powered Lead Discovery
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
          We Find Buyers & Sellers
          <br />
          <span className="bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
            While You Close Deals
          </span>
        </h1>

        <p className="text-xl md:text-2xl text-slate-600 max-w-2xl mx-auto mb-10 leading-relaxed">
          Stop chasing cold leads. Our AI discovers motivated buyers and sellers in your market — and delivers them to your calendar.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="#book" 
            className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-semibold text-lg transition-all shadow-xl shadow-blue-600/25 hover:shadow-blue-600/40 hover:-translate-y-0.5"
          >
            Book Your Free Strategy Call
            <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform">→</span>
          </a>
          <a 
            href="#how" 
            className="border-2 border-slate-300 hover:border-blue-400 text-slate-700 px-8 py-4 rounded-xl font-semibold text-lg transition-all hover:bg-slate-50"
          >
            See How It Works
          </a>
        </div>

        <p className="mt-8 text-slate-500 text-sm">
          Trusted by 50+ real estate agents across the US
        </p>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </div>
    </section>
  );
}
