"use client";

import { useEffect, useState } from "react";
import { ChevronRight, Home, Sparkles } from "lucide-react";
import Image from "next/image";

export default function PackagesHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section className="relative h-[75vh] min-h-[600px] w-full bg-[#fff7f0] overflow-hidden flex items-center">
      
      {/* VERTICAL BRAND TEXT (Left Side) */}
      <div className="absolute left-4 top-1/2 -translate-y-1/2 -rotate-90 hidden lg:block">
        <span className="text-[10px] font-black tracking-[1em] text-orange-500/40 uppercase whitespace-nowrap">
          Gurukrupa Samrat Catering Services
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-6 w-full grid lg:grid-cols-12 gap-12 items-center">
        
        {/* LEFT CONTENT AREA (6 Columns) */}
        <div className={`lg:col-span-7 z-10 transition-all duration-1000 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}>
          <div className="flex items-center gap-3 mb-6">
            <Sparkles className="text-orange-500 animate-pulse" size={20} />
            <span className="text-red-600 font-bold tracking-widest text-xs uppercase">Since 1997</span>
          </div>

          <h1 className="text-6xl md:text-8xl font-black text-[#0b1d39] leading-[0.9] tracking-tighter mb-8">
            Taste The <br />
            <span className="relative inline-block">
              Tradition
              <svg className="absolute -bottom-2 left-0 w-full" viewBox="0 0 300 12" fill="none">
                <path d="M1 9.5C50 1.5 150 1.5 299 9.5" stroke="#f97316" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </span>
          </h1>

          <p className="text-lg text-slate-600 max-w-xl mb-10 leading-relaxed font-medium">
            We don’t just serve food; we serve memories. Discover the 28-year journey of Amravati’s most iconic vegetarian flavors.
          </p>

          {/* BREADCRUMB - Minimalist Style */}
          <nav className="flex items-center gap-4 text-[#0b1d39]">
            <a href="/" className="group flex items-center gap-2 font-bold text-sm uppercase tracking-wider hover:text-orange-500 transition-colors">
              <Home size={16} />
              Home
            </a>
            <ChevronRight size={16} className="text-orange-500" />
            <span className="font-black text-sm uppercase tracking-wider border-b-2 border-red-600 pb-1">About Us</span>
          </nav>
        </div>

        {/* RIGHT IMAGE FRAME (5 Columns) */}
        <div className={`lg:col-span-5 relative transition-all duration-1000 delay-300 ${mounted ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}>
          {/* Decorative Frames */}
          <div className="absolute -top-6 -right-6 w-full h-full border-2 border-orange-500 rounded-[2rem] z-0" />
          
          <div className="relative z-10 rounded-[2rem] overflow-hidden shadow-[20px_20px_60px_rgba(0,0,0,0.1)]">
            <Image
              src="/images/aboutus.jpg"
              alt="Our Story"
              width={600}
              height={800}
              className="object-cover h-[500px] w-full hover:scale-105 transition-transform duration-700"
            />
            {/* Overlay Gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d39]/60 to-transparent" />
            
            {/* Experience Counter Overlay */}
            <div className="absolute bottom-8 left-8 text-white">
                <p className="text-5xl font-black italic tracking-tighter">33+</p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">Years of Magic</p>
            </div>
          </div>

          {/* Abstract Shape */}
          <div className="absolute -bottom-10 -left-10 w-32 h-32 bg-red-600/10 rounded-full blur-3xl" />
        </div>
      </div>

      {/* BACKGROUND DECOR */}
      <div className="absolute right-0 top-0 w-1/3 h-full bg-white/40 -skew-x-12 translate-x-1/2 z-0" />
    </section>
  );
}