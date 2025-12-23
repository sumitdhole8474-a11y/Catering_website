"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Home, ReceiptText, Star } from "lucide-react";

export default function GetQuoteHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-[65vh] min-h-[500px] w-full bg-[#0b1d39] overflow-hidden">
      
      {/* 1. LEFT CONTENT AREA */}
      <div className="relative z-20 h-full max-w-7xl mx-auto px-6 flex items-center">
        <div
          className={`
            max-w-xl transition-all duration-1000 delay-300
            ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-12"}
          `}
        >
          {/* FLOATING STATUS */}
          <div className="flex items-center gap-3 mb-6">
            <div className="h-2 w-2 rounded-full bg-orange-500 animate-pulse" />
            <span className="text-orange-500 font-black text-[10px] uppercase tracking-[0.3em]">
              Now Booking for 2025
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white leading-tight tracking-tighter mb-6">
            Plan Your <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Celebration
            </span>
          </h1>

          <p className="text-gray-400 text-base md:text-lg mb-10 max-w-sm leading-relaxed border-l-2 border-red-600 pl-4">
            Request a personalized quote and let Amravati's finest catering team handle the details.
          </p>

          {/* BREADCRUMB NAV */}
          <nav className="flex items-center gap-3 text-white/60 text-xs font-bold uppercase tracking-widest bg-white/5 w-fit px-4 py-2 rounded-lg backdrop-blur-sm">
            <a href="/" className="hover:text-white transition-colors flex items-center gap-1">
              <Home size={14} /> Home
            </a>
            <ChevronRight size={12} className="text-orange-500" />
            <span className="text-white">Get A Quote</span>
          </nav>
        </div>
      </div>

      {/* 2. RIGHT SIDE IMAGE WITH DIAGONAL CLIP */}
      <div 
        className={`
          absolute right-0 top-0 h-full w-full md:w-[55%] z-10 transition-all duration-[1.5s] ease-out
          ${mounted ? "translate-x-0 opacity-100" : "translate-x-full opacity-0"}
        `}
        style={{
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: "url('/images/getquoteimg.jpg')" }}
        />
        {/* Warm Overlay matching brand */}
        <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#0b1d39]" />
      </div>

      {/* 3. DECORATIVE ELEMENTS */}
      <div className="absolute top-10 right-10 z-20 text-white/5 pointer-events-none">
        <ReceiptText size={300} strokeWidth={1} />
      </div>

      {/* Corner Glow */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-red-600/10 rounded-full blur-[120px] pointer-events-none" />
    </section>
  );
}