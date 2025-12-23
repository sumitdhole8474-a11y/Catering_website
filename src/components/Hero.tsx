"use client";

import { motion } from "framer-motion";
import { 
  Heart, 
  Cake, 
  Gem, 
  Users, 
  ArrowRight, 
  Phone 
} from "lucide-react";

export default function Hero() {
  // Updated with specific event services
  const eventServices = [
    { icon: <Heart size={20} />, text: "Wedding Event" },
    { icon: <Cake size={20} />, text: "Birthday Event" },
    { icon: <Gem size={20} />, text: "Engagement" },
    { icon: <Users size={20} />, text: "Get Together" },
  ];

  return (
    <section className="relative h-screen min-h-700px w-full overflow-hidden bg-[#0b1d39]">
      
      {/* 🎥 BACKGROUND VIDEO */}
      <video
        className="absolute inset-0 w-full h-full object-cover pointer-events-none opacity-50"
        src="/videos/hero.mp4"
        autoPlay
        loop
        muted
        playsInline
      />

      {/* 🌑 LINEAR OVERLAY */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0b1d39] via-[#0b1d39]/30 to-transparent z-10" />

      {/* MAIN CONTENT CONTAINER - Added -mt-20 and changed justify-center to items-center with pt to pull content up */}
      <div className="relative z-30 h-full max-w-7xl mx-auto px-6 flex flex-col justify-center -mt-20">
        
        {/* BRAND LABEL - Clean text, no blur box */}
        <motion.div 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="flex items-center gap-3 mb-6"
        >
          <span className="h-px w-8 bg-orange-500" />
          <span className="text-orange-500 text-xs md:text-sm font-black uppercase tracking-[0.3em]">
            Gurukrupa Samrat Caterers Services
          </span>
        </motion.div>

        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl md:text-5xl font-black leading-[1.05] mb-8"
          >
            CHOOSE THE BEST FOOD <br />
            <span className="text-orange-500 drop-shadow-sm">FOR ALL EVENTS</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="text-gray-300 text-lg md:text-xl max-w-xl mb-12 leading-relaxed border-l-4 border-red-600 pl-6 italic"
          >
            "Food is art, and food is love. We show appreciation for those who 
            cook it by eating it with relish."
          </motion.p>

          {/* EVENT SERVICE GRID */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 mb-14">
            {eventServices.map((item, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + idx * 0.1 }}
                className="flex items-center gap-3 group"
              >
                <div className="text-orange-500 bg-orange-500/10 p-3 rounded-xl border border-orange-500/20 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                  {item.icon}
                </div>
                <span className="text-white text-[11px] font-black uppercase tracking-widest leading-tight">
                  {item.text}
                </span>
              </motion.div>
            ))}
          </div>

          {/* 🔘 ACTION BUTTONS */}
          <div className="flex flex-wrap gap-5 items-center">
            <a
              href="/get-quote"
              className="z-50 group flex items-center gap-4 bg-red-600 hover:bg-red-700 text-white font-black px-10 py-5 rounded-2xl transition-all shadow-xl hover:-translate-y-1 active:scale-95"
            >
              <span className="text-base tracking-wider uppercase">Get A Quote</span>
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="tel:+919975555571"
              className="z-50 flex items-center gap-3 bg-white/5 hover:bg-white/10 backdrop-blur-md text-white font-bold px-10 py-5 rounded-2xl border border-white/20 transition-all"
            >
              <Phone size={18} className="text-orange-500" />
              <span>+91 99755 55571</span>
            </a>
          </div>
        </div>
      </div>

      {/* GEOMETRIC SLANT */}
      <div className="absolute bottom-0 left-0 w-full h-16 bg-white z-40" 
           style={{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0% 0%)' }} 
      />
      
    </section>
  );
}