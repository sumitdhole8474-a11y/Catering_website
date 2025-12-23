"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function ContactHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <section className="relative h-[70vh] w-full overflow-hidden flex items-center justify-center">
      {/* 🔹 Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-fixed bg-center scale-105 transition-transform duration-[10000ms] ease-linear"
        style={{
          backgroundImage: "url('/images/contct.jpg')",
          transform: mounted ? "scale(1)" : "scale(1.1)",
        }}
      />

      {/* 🔹 Enhanced Overlays */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-orange-600/20" />
      <div className="absolute inset-0 bg-black/30" />

      {/* 🔹 Main Content Wrapper - Centered by removing the second column */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl"
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-orange-500/20 backdrop-blur-md border border-orange-500/30 px-4 py-2 rounded-full mb-6">
            <span className="w-2 h-2 bg-orange-500 rounded-full animate-pulse" />
            <span className="text-orange-400 text-xs font-bold uppercase tracking-widest">Let's Connect</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight">
            Get in <span className="text-orange-500">Touch</span>
          </h1>

          <p className="text-gray-300 text-lg md:text-xl mb-8 leading-relaxed">
            Ready to bring the flavors of <span className="text-white font-semibold">Gurukrupa Samrat Catering Services</span> to your next event? 
            Our team is dedicated to providing exceptional hospitality since 1997.
          </p>

          {/* 🔹 Centered Breadcrumb Navigation */}
          <nav className="flex items-center justify-center gap-3 text-sm font-medium">
            <Link href="/" className="text-white cursor-pointer hover:text-orange-500">Home</Link>
            <ChevronRight className="w-4 h-4 text-orange-500" />
            <span className="text-orange-500 underline underline-offset-4 cursor-default">Contact Us</span>
          </nav>
        </motion.div>
      </div>

      {/* 🔹 Bottom Wave Decorative Element */}
      <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-[0]">
        <svg className="relative block w-full h-[60px]" viewBox="0 0 1200 120" preserveAspectRatio="none">
          <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C58,111.9,141.11,105.15,225.26,86.29,261,78.29,292.83,64.21,321.39,56.44Z" 
                fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}