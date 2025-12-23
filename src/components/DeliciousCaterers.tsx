"use client";

import Image from "next/image";
import { useEffect, useState, useRef } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { Utensils, Award, Users, Smile, ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion, useInView, useSpring, useTransform } from "framer-motion";

// Improved Counter Component using Framer Motion
function Counter({ end }: { end: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true }); // Only animate once when scrolled into view

  const springValue = useSpring(0, {
    duration: 3000,
    bounce: 0,
  });

  const displayValue = useTransform(springValue, (latest) => 
    Math.floor(latest).toLocaleString()
  );

  useEffect(() => {
    if (isInView) {
      springValue.set(end);
    }
  }, [isInView, end, springValue]);

  return <span ref={ref}><motion.span>{displayValue}</motion.span>+</span>;
}

export default function DeliciousCaterers() {
  return (
    <section className="py-32 bg-[#fff7f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT IMAGE WITH CREATIVE ELEMENTS */}
        <div className="relative group">
          <div className="absolute -top-6 -left-6 w-full h-full border-2 border-orange-400 rounded-[2.5rem] -z-10 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
          
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl">
            <Image
              src="/images/deliciouscaters.jpg"
              alt="Delicious Caterers"
              width={600}
              height={600}
              className="object-cover w-full h-[550px] transition-transform duration-700 group-hover:scale-110"
              priority
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0b1d39]/40 to-transparent" />
          </div>

          {/* Floating Experience Badge */}
          <div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-3xl shadow-xl border-2 border-orange-400">
             <div className="text-center">
                <p className="text-4xl font-black text-orange-600 leading-none">
                  {/* Using real company data: Excelling since 1992 (33+ years) */}
                  <Counter end={33} />
                </p>
                <p className="text-[10px] font-bold text-[#0b1d39] uppercase tracking-widest mt-1">Years of Magic</p>
             </div>
          </div>
        </div>

        {/* RIGHT CONTENT */}
        <div className="space-y-8">
          <div>
            <p className="text-red-600 font-bold mb-3 uppercase tracking-[0.2em] text-sm">
              Gurukrupa Caterers
            </p>
            <h2 className="text-5xl lg:text-6xl font-extrabold text-[#0b1d39] leading-tight">
              Crafting <span className="text-orange-500">Delicious</span> <br /> 
              Moments for You
            </h2>
            <p className="mt-6 text-gray-600 text-lg leading-relaxed italic">
              "We don't just serve food; we serve memories. From traditional thalis to modern snacks, our chefs bring decades of excellence to your table."
            </p>
          </div>

          {/* COUNTERS GRID - Updated with real business stats */}
          <div className="grid grid-cols-2 gap-8">
            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border-b-4 border-orange-400 shadow-sm hover:shadow-md transition-all">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600"><Award size={24} /></div>
              <div>
                <p className="text-3xl font-black text-[#0b1d39]"><Counter end={42} /></p>
                <p className="text-xs font-bold text-gray-500 uppercase">Events Organised</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border-b-4 border-orange-400 shadow-sm hover:shadow-md transition-all">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600"><Users size={24} /></div>
              <div>
                <p className="text-3xl font-black text-[#0b1d39]"><Counter end={80} /></p>
                <p className="text-xs font-bold text-gray-500 uppercase">Experienced Chefs</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border-b-4 border-orange-400 shadow-sm hover:shadow-md transition-all">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600"><Smile size={24} /></div>
              <div>
                <p className="text-3xl font-black text-[#0b1d39]"><Counter end={90} /></p>
                <p className="text-xs font-bold text-gray-500 uppercase">Consumers Served</p>
              </div>
            </div>

            <div className="flex items-start gap-4 p-4 rounded-2xl bg-white border-b-4 border-orange-400 shadow-sm hover:shadow-md transition-all">
              <div className="bg-orange-100 p-3 rounded-xl text-orange-600"><Utensils size={24} /></div>
              <div>
                <p className="text-3xl font-black text-[#0b1d39]">100%</p>
                <p className="text-xs font-bold text-gray-500 uppercase">Hygiene</p>
              </div>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="flex flex-wrap gap-6 pt-4">
            <Link href="/contact" className="group relative overflow-hidden bg-red-600 text-white px-10 py-5 rounded-2xl font-bold shadow-xl hover:bg-orange-600 transition-all flex items-center gap-2">
              Get In Touch 
              <ArrowRight size={20} className="group-hover:translate-x-2 transition-transform" />
            </Link>

            <a
              href="tel:+919975555571"
              className="flex items-center gap-4 bg-white border-2 border-orange-400 text-[#0b1d39] px-8 py-5 rounded-2xl font-bold shadow-lg hover:bg-orange-50 transition-all"
            >
              <div className="bg-orange-500 p-2 rounded-full text-white">
                <FaPhoneAlt size={16} />
              </div>
              <span>+91 99755 55571</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}