"use client";

import Image from "next/image";
import { Quote, Sparkles, Trophy, ChefHat } from "lucide-react";

export default function AboutHome() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Background Accent */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-orange-50 rounded-full blur-3xl opacity-60 -translate-x-1/2 -translate-y-1/2" />

      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center relative z-10">
        
        {/* LEFT CONTENT AREA */}
        <div className="order-2 lg:order-1">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-red-50 text-red-600 text-xs font-black uppercase tracking-widest mb-6">
            <Sparkles size={14} />
            <span>Gurukrupa Samrat Caterers</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-black text-[#0b1d39] leading-[1.1] mb-8">
            The Gold Standard of <br />
            <span className="text-orange-500">Traditional Catering</span>
          </h2>
  
          <div className="space-y-5 text-gray-600 text-base lg:text-lg leading-relaxed mb-10">
            <p>
              With decades of vast experience in the hospitality industry, we blend 
              <span className="text-[#0b1d39] font-bold"> unique practical innovation</span> with traditional values to create unforgettable culinary journeys.
            </p>
            <p>
              Whether it's an intimate Anniversary or a grand Wedding, our expert team guides you through bespoke food concepts that respect both your <span className="underline decoration-orange-300 decoration-2 underline-offset-4">vision and budget.</span>
            </p>
          </div>

          {/* HIGHLIGHT BOXES */}
          <div className="grid grid-cols-2 gap-4 mb-10">
            <div className="flex items-center gap-3 p-4 rounded-2xl border border-orange-100 bg-[#fffcf9]">
              <ChefHat className="text-orange-500" size={24} />
              <span className="font-bold text-sm text-[#0b1d39]">Master Chefs</span>
            </div>
            <div className="flex items-center gap-3 p-4 rounded-2xl border border-orange-100 bg-[#fffcf9]">
              <Trophy className="text-orange-500" size={24} />
              <span className="font-bold text-sm text-[#0b1d39]">Vast Experience</span>
            </div>
          </div>

          {/* FOUNDER QUOTE */}
          <div className="relative p-8 rounded-[2rem] bg-slate-50 border-l-8 border-red-600 shadow-sm group hover:shadow-md transition-shadow">
            <Quote className="absolute top-4 right-6 text-slate-200 group-hover:text-red-100 transition-colors" size={60} />
            <p className="relative z-10 italic text-gray-700 leading-relaxed text-lg">
              “We understand that every facility is unique. That’s why we
              tailor our programs to address the specific needs of each client.”
            </p>
            <div className="mt-6 flex items-center gap-4">
              <div className="h-px w-8 bg-red-600" />
              <div>
                <p className="font-black text-[#0b1d39]">Nilesh Shahu</p>
                <p className="text-xs font-bold text-gray-400 uppercase tracking-tighter">Founder</p>
              </div>
            </div>
          </div>

          <a href="/about" className="inline-block mt-10">
            <button className="bg-red-600 hover:bg-[#0b1d39] text-white px-10 py-4 rounded-2xl font-black text-sm uppercase tracking-widest transition-all transform hover:-translate-y-1 shadow-lg shadow-red-100">
              Discover Our Story
            </button>
          </a>
        </div>

        {/* RIGHT IMAGE AREA WITH OVERLAY */}
        <div className="order-1 lg:order-2 relative">
          <div className="relative z-10 rounded-[3rem] overflow-hidden border-[12px] border-white shadow-2xl">
            <Image
              src="/images/herooo.jpg"
              alt="Luxury Food Setup"
              width={800}
              height={900}
              className="object-cover h-[650px] w-full hover:scale-105 transition-transform duration-700"
            />
          </div>
          
          {/* Floating Experience Badge */}
          <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-[2rem] shadow-xl border border-orange-100 animate-bounce-slow">
            <p className="text-4xl font-black text-orange-500 leading-none">33+</p>
            <p className="text-[10px] font-black text-[#0b1d39] uppercase tracking-widest mt-1">Years of<br/>Excellence</p>
          </div>
        </div>

      </div>
    </section>
  );
}