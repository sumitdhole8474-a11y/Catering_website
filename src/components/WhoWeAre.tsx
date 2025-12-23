"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Coffee, Apple, CheckCircle, FileText } from "lucide-react";

export default function WhoWeAre() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = 150;
    const duration = 1500;
    const stepTime = Math.abs(Math.floor(duration / end));

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start >= end) clearInterval(timer);
    }, stepTime);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT IMAGE AREA WITH LAYERS */}
        <div className="relative group">
          {/* Main Image with decorative border */}
          <div className="relative z-10 p-3 bg-white shadow-2xl rounded-[2.5rem] border border-orange-100 transition-transform duration-500 group-hover:scale-[1.02]">
            <Image
              src="/images/whoweare.jpg"
              alt="Healthy Catering Team"
              width={600}
              height={600}
              className="rounded-2rem object-cover h-500px w-full"
            />
          </div>

          {/* Floating Image Accent */}
          <div className="absolute -bottom-10 -right-10 z-20 hidden md:block animate-bounce-slow">
            <div className="p-2 bg-white rounded-3xl shadow-2xl border border-orange-100">
              <Image
                src="/images/samrat.jpg"
                alt="Signature Dish"
                width={260}
                height={200}
                className="rounded-2xl object-cover h-180px"
              />
            </div>
          </div>

          {/* Abstract Dots Decoration */}
          <div className="absolute -bottom-16 -left-6 grid grid-cols-4 gap-4 opacity-40">
            {[...Array(12)].map((_, i) => (
              <span key={i} className="w-3 h-3 rounded-full bg-orange-400" />
            ))}
          </div>
        </div>

        {/* RIGHT CONTENT AREA */}
        <div className="lg:pl-8">
          {/* Header & Stats Tag */}
          <div className="inline-flex items-center gap-4 px-5 py-2 rounded-full bg-orange-50 border border-orange-100 mb-8">
            <span className="text-3xl font-black text-orange-600 leading-none">{count}+</span>
            <span className="text-xs font-bold text-[#0b1d39] uppercase tracking-wider">Trusted Clients Served</span>
          </div>

          <p className="text-red-600 font-bold mb-3 uppercase tracking-widest text-sm">
            Our Identity
          </p>
          
          <h2 className="text-4xl lg:text-5xl font-black text-[#0b1d39] leading-[1.15] mb-6">
            Healthy <span className="text-orange-500">Catering</span> <br /> 
            Crafted for Excellence
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed mb-8 italic">
            "Quality you can taste, health you can feel. We bring a nutritious revolution to your events with locally sourced ingredients."
          </p>

          {/* FEATURE GRID */}
          <div className="grid sm:grid-cols-2 gap-6 mb-10">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fff7f0] hover:bg-orange-100 transition-colors">
              <div className="bg-white p-2 rounded-lg text-orange-600 shadow-sm">
                <Apple size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0b1d39] text-sm">Vitality Meals</h4>
                <p className="text-xs text-gray-500 mt-1">Grain bowls & loaded pasta</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-[#fff7f0] hover:bg-orange-100 transition-colors">
              <div className="bg-white p-2 rounded-lg text-orange-600 shadow-sm">
                <Coffee size={20} />
              </div>
              <div>
                <h4 className="font-bold text-[#0b1d39] text-sm">Detox Drinks</h4>
                <p className="text-xs text-gray-500 mt-1">Freshly pressed fruit juices</p>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-5">
            <a href="/get-quote" className="group flex items-center gap-3 bg-[#b79a8d] hover:bg-[#a38679] text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg hover:-translate-y-1">
              <FileText size={18} />
              <span>Get A Quote</span>
            </a>

            <a
              href="tel:+919975555571"
              className="group flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-2xl font-bold transition-all shadow-lg shadow-red-100 hover:-translate-y-1"
            >
              <div className="bg-white/20 p-2 rounded-full group-hover:rotate-12 transition-transform">
                <FaPhoneAlt size={16} />
              </div>
              <span>+91 9975555571</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}