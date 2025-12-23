"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";

const packages = [
  {
    title: "Silver Package",
    desc: "Best for small events",
    price: "₹599",
    features: [
      "2 Starters",
      "2 Sabji",
      "Dal & Rice",
      "1 Sweet",
      "Basic Service",
    ],
    popular: false,
  },
  {
    title: "Gold Package",
    desc: "Perfect for weddings",
    price: "₹899",
    features: [
      "3 Starters",
      "3 Sabji",
      "Rice / Dal",
      "2 Sweets",
      "Live Counter",
      "Premium Service",
    ],
    popular: true,
  },
  {
    title: "Platinum Package",
    desc: "Luxury celebrations",
    price: "₹1199",
    features: [
      "5 Starters",
      "4 Sabji",
      "Rice / Dal",
      "3 Sweets",
      "Live Counters",
      "VIP Service",
    ],
    popular: false,
  },
];

export default function PackagesCards() {
  return (
    <section className="py-28 bg-[#f7f4f2]">
      <div className="max-w-7xl mx-auto px-4 text-center">

        {/* HEADING */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#0b1d39] mb-14"
        >
          Our Catering Packages
        </motion.h2>

        {/* CARDS */}
        <div className="grid md:grid-cols-3 gap-10">
          {packages.map((pkg, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -16 }}
              className={`relative rounded-3xl p-8 bg-[#fff4ec] shadow-lg transition-all
                ${pkg.popular ? "ring-2 ring-orange-400 scale-105" : ""}
              `}
            >
              {/* MOST POPULAR BADGE */}
              {pkg.popular && (
                <span className="absolute top-5 right-5 bg-orange-500 text-white text-xs font-semibold px-4 py-1 rounded-full">
                  Most Popular
                </span>
              )}

              {/* TITLE */}
              <h3 className="text-2xl font-bold text-[#0b1d39] mb-2">
                {pkg.title}
              </h3>

              <p className="text-gray-600 mb-6">{pkg.desc}</p>

              {/* PRICE */}
              <div className="text-4xl font-extrabold text-orange-600 mb-8">
                {pkg.price}
                <span className="text-base font-medium text-gray-500">
                  / per plate
                </span>
              </div>

              {/* FEATURES */}
              <ul className="space-y-4 mb-10 text-left">
                {pkg.features.map((item, j) => (
                  <li key={j} className="flex items-center gap-3 text-gray-700">
                    <Check className="text-orange-500" size={18} />
                    {item}
                  </li>
                ))}
              </ul>

              {/* BUTTON */}
              <button className="w-full bg-orange-500 hover:bg-orange-600 text-white py-4 rounded-full font-semibold transition-all duration-300 hover:shadow-xl">
                View Menu
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
