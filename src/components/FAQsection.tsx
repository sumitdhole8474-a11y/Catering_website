"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Search, HelpCircle } from "lucide-react";
import { FAQ_DATA } from "@/faqdata";

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState(FAQ_DATA[0].category);
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  const [search, setSearch] = useState("");
  const [modalFAQ, setModalFAQ] = useState<{ q: string; a: string } | null>(null);

  const filteredFAQs =
    FAQ_DATA.find(c => c.category === activeCategory)?.items.filter(
      f =>
        f.q.toLowerCase().includes(search.toLowerCase()) ||
        f.a.toLowerCase().includes(search.toLowerCase())
    ) || [];

  return (
    <section className="py-24 bg-[#fff7f0]">
      <div className="max-w-6xl mx-auto px-4">

        {/* HEADER */}
        <div className="text-center mb-12">
          <p className="text-orange-600 font-semibold mb-2">
            Got Questions?
          </p>
          <h2 className="text-4xl font-extrabold text-[#0b1d39]">
            Frequently Asked Questions
          </h2>
        </div>

        {/* SEARCH */}
        <div className="max-w-md mx-auto mb-10 relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
          <input
            type="text"
            placeholder="Search your question..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3 rounded-full border border-orange-300 focus:ring-2 focus:ring-orange-400 outline-none"/>
        </div>

        {/* CATEGORY TABS */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {FAQ_DATA.map(cat => (
            <button
              key={cat.category}
              onClick={() => {
                setActiveCategory(cat.category);
                setOpenIndex(null);
              }}
              className={`px-5 py-2 rounded-full text-sm font-semibold transition
                ${
                  activeCategory === cat.category
                    ? "bg-orange-600 text-white shadow-md"
                    : "bg-white text-gray-700 hover:bg-orange-100"
                }`}
            >
              {cat.category}
            </button>
          ))}
        </div>

        {/* FAQ LIST */}
        <div className="space-y-4">
          {filteredFAQs.map((faq, i) => (
            <motion.div
              key={i}
              layout
              className="bg-white rounded-2xl border border-orange-200">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full px-6 py-5 flex justify-between items-center text-left">
                <span className="font-semibold text-[#0b1d39]">{faq.q}</span>
                <span className="text-orange-600 text-xl">
                  {openIndex === i ? "−" : "+"}
                </span>
              </button>

              <AnimatePresence>
                {openIndex === i && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="px-6 pb-5 text-gray-600"
                  >
                    <p>{faq.a}</p>

                    {/* MODAL TRIGGER */}
                    <button
                      onClick={() => setModalFAQ(faq)}
                      className="mt-3 text-orange-600 font-semibold text-sm hover:underline">
                      Read in detail
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>

      {/* FAQ MODAL */}
      <AnimatePresence>
        {modalFAQ && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/60 flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setModalFAQ(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl max-w-lg w-full p-8">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="text-orange-600" />
                <h3 className="text-xl font-extrabold text-[#0b1d39]">
                  {modalFAQ.q}
                </h3>
              </div>
              <p className="text-gray-600 leading-relaxed">
                {modalFAQ.a}
              </p>

              <button
                onClick={() => setModalFAQ(null)}
                className="mt-6 bg-orange-600 text-white px-6 py-2 rounded-full font-semibold">
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
