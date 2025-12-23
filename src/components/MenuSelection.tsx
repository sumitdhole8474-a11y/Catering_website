"use client";

import { motion, Variants } from "framer-motion";

/* FIX: Added Variants type to satisfy the TypeScript compiler */
/* This prevents the "string is not assignable to Easing" error */
const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { 
      duration: 0.5, 
      ease: "easeOut" // Now recognized as a valid Easing type
    },
  },
};

const sections = [
  {
    title: "Breakfast",
    items: [
      "UPMA - SEV", "MISAL PAV", "JALEBI - FAFDA", "SABUDANA KHICHDI",
      "CHHOLE SAMOSA", "KANDA POHE", "GHAVAN", "IDLI", "PATTICE",
      "TEA / COFFEE", "SEERA SEERA", "BREAD BUTTER", "MEDU WADA",
      "BATATA WADA", "GREEN TEA",
    ],
  },
  {
    title: "Mocktails",
    items: [
      "FLAVOURED MODITHO", "LITCHI MARGARITA", "LAVEENA", "VANILLA",
      "DEVILS DELIGHT", "DARK KNIGHT", "BOOM RANG", "SWEET SIXTEEN",
      "COOL BLUE", "GREEN BERRY", "KHUS COOLER", "BLUE LAGOON",
      "PINA COLADA", "DATES MAGIC", "GREEN TEA",
    ],
  },
  {
    title: "Welcome Drinks",
    items: [
      "PINEAPPLE BLOSSOM", "STRAWBERRY BLOSSOM", "ORANGE-CHASKA",
      "KIWI PINEAPPLE", "MUSK MELON", "COCKTAIL", "COCONUT PUNCH",
      "LICHI BLOSSOM", "PLUM PEACH BLOSSOM", "PERU PINEAPPLE",
      "FRUIT PUNCH", "SOHAN MELON", "TULSIDHARA", "GRAPES GLORRY",
      "ORANGE BLOSSOM", "PERU BLOSSOM", "FRESH PINEAPPLE",
      "WATER MELON", "GANGA HAMUNA", "GREEN GARDEN",
      "SANGRELLA (MUSKMELON, WATERMELON, ORANGE)",
    ],
  },
];

export default function MenuSelection() {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4">

        {/* HEADING */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-4xl font-extrabold text-[#0b1d39] mb-2">
            Select Your Menu
          </h2>
          <p className="text-gray-600">
            Choose items you would like to include in your event
          </p>
        </motion.div>

        {/* SECTIONS */}
        <div className="space-y-16">
          {sections.map((section, idx) => (
            <motion.div
              key={idx}
              variants={container}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {/* CATEGORY TITLE */}
              <motion.h3
                variants={fadeUp}
                className="text-2xl font-bold text-gray-800 mb-8"
              >
                {section.title}
              </motion.h3>

              {/* ITEMS GRID */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-16 gap-y-4">
                {section.items.map((item, i) => (
                  <motion.label
                    key={i}
                    variants={fadeUp}
                    whileHover={{ x: 4 }}
                    className="flex items-center gap-3 cursor-pointer text-gray-700 hover:text-red-600 transition"
                  >
                    <input
                      type="checkbox"
                      className="w-4 h-4 accent-red-600"
                    />
                    <span className="uppercase tracking-wide text-sm">
                      {item}
                    </span>
                  </motion.label>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* SUBMIT BUTTON */}
      <div className="flex justify-center items-center mt-12">
        <button className="bg-red-600 px-10 py-3 rounded-2xl cursor-pointer text-white text-xl font-bold hover:bg-red-700 transition-colors shadow-lg active:scale-95">
          Submit
        </button>
      </div>
    </section>
  );
}