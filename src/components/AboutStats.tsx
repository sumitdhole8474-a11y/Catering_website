"use client";

import { useEffect, useState } from "react";
import { Target, Handshake, ChefHat, Users, Award, Utensils } from "lucide-react";
import { motion } from "framer-motion";

const stats = [
  {
    value: 33,
    suffix: "+",
    label: "Years of Culinary Mastery",
    description: "Since 1992, we have been crafting authentic flavors and perfecting the art of traditional catering.",
    Icon: Target,
  },
  {
    value: 42500,
    suffix: "+",
    label: "Events Successfully Organized",
    description: "From intimate gatherings to grand destination weddings, our logistics team ensures perfection every time.",
    Icon: Handshake,
  },
  {
    value: 80,
    suffix: "+",
    label: "Master Chefs & Artisans",
    description: "Our kitchen is led by seasoned culinary experts dedicated to hygiene, taste, and innovative presentation.",
    Icon: ChefHat,
  },
  {
    value: 9000,
    suffix: "+",
    label: "Happy Families Served",
    description: "We don't just serve food; we build relationships. Our community of loyal clients is our greatest pride.",
    Icon: Users,
  },
];

export default function AboutStats() {
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));

  useEffect(() => {
    stats.forEach((stat, index) => {
      let start = 0;
      const end = stat.value;
      const duration = 2000;
      const increment = Math.ceil(end / (duration / 16));

      const counter = setInterval(() => {
        start += increment;
        if (start >= end) {
          start = end;
          clearInterval(counter);
        }
        setCounts((prev) => {
          const updated = [...prev];
          updated[index] = start;
          return updated;
        });
      }, 16);
    });
  }, []);

  return (
    <section className="relative bg-white py-24 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-96 h-96 bg-orange-50 rounded-full blur-3xl opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* 🔹 ENHANCED HEADING SECTION */}
        <div className="text-center mb-20 max-w-3xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-orange-600 font-bold tracking-widest uppercase text-sm"
          >
            Our Legacy in Numbers
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-5xl font-black text-gray-900 mt-3 mb-6"
          >
            Defining Taste, <span className="text-orange-500">Crafting Memories</span>
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-gray-600 text-lg leading-relaxed"
          >
            At Gurukrupa Samrat, our journey is measured by the smiles we create and the 
            traditions we uphold. Our principles are rooted in quality, hospitality, 
            and a relentless pursuit of culinary excellence.
          </motion.p>
        </div>

        {/* 🔹 STATS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {stats.map(({ label, description, Icon, suffix }, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              viewport={{ once: true }}
              className="relative group text-center p-8 rounded-3xl transition-all duration-300 hover:bg-orange-50/50"
            >
              {/* ICON CONTAINER */}
              <div className="relative mx-auto w-28 h-28 mb-8">
                <div className="absolute inset-0 bg-orange-500 rounded-2xl rotate-6 group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-orange-200" />
                <div className="absolute inset-0 bg-gray-900 rounded-2xl -rotate-3 group-hover:rotate-0 transition-transform duration-300 flex items-center justify-center">
                  <Icon className="w-12 h-12 text-orange-400" />
                </div>
              </div>

              {/* COUNTER */}
              <h3 className="text-4xl font-black text-gray-900 mb-2">
                {counts[i].toLocaleString()}
                <span className="text-orange-500">{suffix}</span>
              </h3>

              {/* TEXT CONTENT */}
              <h4 className="text-lg font-bold text-gray-800 mb-3 group-hover:text-orange-600 transition-colors">
                {label}
              </h4>
              <p className="text-sm text-gray-500 leading-relaxed italic">
                "{description}"
              </p>
            </motion.div>
          ))}
        </div>

        {/* 🔹 EXTRA INFORMATION STRIP */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="mt-24 p-8 md:p-12 rounded-[2rem] bg-gray-900 text-white flex flex-col md:flex-row items-center justify-between gap-8"
        >
          <div className="flex gap-6 items-center">
            <div className="p-4 bg-orange-500 rounded-full">
              <Award className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-orange-400 font-bold">Award Winning Service</p>
              <p className="text-gray-400 text-sm">Recognized for "Best Vegetarian Catering" 3 years in a row.</p>
            </div>
          </div>
          <div className="h-px md:h-12 w-full md:w-px bg-gray-700" />
          <div className="flex gap-6 items-center">
            <div className="p-4 bg-orange-500 rounded-full">
              <Utensils className="w-8 h-8 text-white" />
            </div>
            <div>
              <p className="text-orange-400 font-bold">100% Pure Veg</p>
              <p className="text-gray-400 text-sm">Strictly separate kitchens and zero-compromise hygiene.</p>
            </div>
          </div>
          <button className="whitespace-nowrap px-8 py-4 bg-orange-500 hover:bg-orange-600 text-white font-bold rounded-full transition-all shadow-lg hover:shadow-orange-500/30">
            Our Story
          </button>
        </motion.div>

      </div>
    </section>
  );
}