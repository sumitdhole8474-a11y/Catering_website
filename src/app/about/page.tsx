"use client";

import Image from "next/image";
import AboutStats from "@/components/AboutStats";
import AboutHero from "@/components/AboutHero";
import { motion } from "framer-motion";

export default function AboutPage() {
  return (
    <>
      <AboutHero />

      {/* ABOUT CONTENT - Premium Cream Background */}
      <section className="bg-[#fffcf7] py-20 lg:py-32 overflow-hidden relative">
        
        {/* Subtle Decorative Grid Pattern */}
        <div className="absolute left-10 bottom-20 opacity-20 hidden lg:block">
          <div className="grid grid-cols-5 gap-3">
            {[...Array(25)].map((_, i) => (
              <div key={i} className="w-2 h-2 rounded-full bg-red-600" />
            ))}
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

          {/* LEFT CONTENT — Typography focused */}
          <div className="relative z-10">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-10 bg-red-600" />
              <span className="text-red-600 text-xs font-black uppercase tracking-[0.3em]">
                About Us
              </span>
            </motion.div>

            <h2 className="text-2xl md:text-3xl lg:text-4xl font-black text-[#0b1d39] leading-tight mb-8">
              We are the best quality <br />
              <span className="text-orange-500 underline decoration-red-600/20 underline-offset-8">
                and traditional
              </span> caterers
            </h2>

            <div className="space-y-6 text-slate-600 text-lg leading-relaxed font-medium">
              <p>
                Gurukrupa Samrat Catering Service, Amravati – Since 1997 – your trusted partner 
                for delicious vegetarian food and exceptional hospitality. 
                With decades of experience, we specialize in weddings, receptions, and all special occasions.
              </p>
              
              <p className="border-l-4 border-red-600 pl-6 italic bg-orange-50/50 py-4 rounded-r-2xl">
                “To gain leadership through Quality, service cleanliness & Value.”
              </p>

              <p>
                Our expert team serves a wide variety of authentic vegetarian menus, from traditional 
                Maharashtrian delicacies to multi-cuisine spreads.
              </p>
            </div>

            {/* QUOTE BOX - Styled like image_ef4de3.jpg */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mt-12 rounded-3xl bg-white shadow-2xl shadow-orange-100/50 p-8 border border-orange-50"
            >
              <p className="text-xl italic text-[#0b1d39] font-bold leading-relaxed">
                “We understand that every facility is unique. That’s why we tailor our
                programs to address the specific needs of each client.”
              </p>
              <div className="mt-6 flex items-center gap-4">
                <div className="w-12 h-px bg-slate-300" />
                <p className="text-slate-500 font-black uppercase tracking-widest text-sm">
                  Nilesh Shahu <span className="text-orange-500 ml-2">— Founder</span>
                </p>
              </div>
            </motion.div>
          </div>

          {/* RIGHT IMAGES — Staggered Layered Layout */}
          <div className="relative pt-12 lg:pt-0">
            {/* Main Image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative z-20 w-full h-[400px] lg:h-[550px] rounded-[40px] overflow-hidden shadow-2xl border-8 border-white"
            >
              <Image
                src="/images/smratabout.jpg"
                alt="Main Catering"
                fill
                className="object-cover"
                priority
              />
            </motion.div>

            {/* Floating Secondary Image */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="absolute -bottom-10 -left-10 lg:-left-20 z-30 w-64 h-48 lg:w-80 lg:h-60 rounded-3xl overflow-hidden shadow-2xl border-4 border-white hidden sm:block"
            >
              <Image
                src="/images/aboutimg.jpg" 
                alt="Setup Detail"
                fill
                className="object-cover"
              />
            </motion.div>

            {/* Branded "150+ Clients" Badge */}
            <div className="absolute -top-6 -right-6 z-40 bg-white p-6 rounded-3xl shadow-xl flex flex-col items-center border border-orange-50">
              <span className="text-4xl font-black text-red-600">150+</span>
              <span className="text-[10px] font-black uppercase tracking-tighter text-slate-400">Trusted Clients</span>
            </div>
          </div>

        </div>

        <div className="mt-24 lg:mt-32">
          <AboutStats />
        </div>
      </section>
    </>
  );
}