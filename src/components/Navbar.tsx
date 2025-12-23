"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, HelpCircle } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navItem = (path: string) =>
    `relative px-4 py-2 text-[13px] font-extrabold uppercase tracking-[0.1em]
     transition-all duration-500 rounded-full
     ${
       pathname === path
         ? "text-red-600"
         : "text-gray-500 hover:text-[#0b1d39] hover:bg-orange-50/40"
     }`;

  return (
    <>
      {/* ================= MAIN NAVBAR ================= */}
      <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 md:px-8">
          <div className="flex items-center justify-between h-20 md:h-28">

            {/* LOGO */}
            <Link href="/" className="relative z-50">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="w-40 h-16 md:w-56 md:h-20"
              >
                <Image
                  src="/images/Logos.png"
                  alt="Gurukrupa Samrat"
                  fill
                  className="object-contain"
                  priority
                />
              </motion.div>
            </Link>

            {/* DESKTOP NAV */}
            <nav
              className="hidden lg:flex items-center bg-gray-50/60 backdrop-blur-md  rounded-full px-6 py-2  border border-orange-300/70 shadow-[0_0_0_1px_rgba(251,146,60,0.25)]" >
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Packages", path: "/packages" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link key={item.path} href={item.path} className={navItem(item.path)}>
                  {item.name}

                  {pathname === item.path && (
                    <motion.span
                      layoutId="pill-bg"
                      className="absolute inset-0 bg-white rounded-full  border border-orange-400  ring-1 ring-orange-200/60 shadow-sm -z-10" transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}  />
                  )}
                </Link>
              ))}
            </nav>

            {/* CTA + FAQ */}
            <div className="hidden md:flex items-center gap-3">

              {/* GET QUOTE */}
              <Link href="/get-quote">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="flex items-center gap-4 bg-[#0b1d39] text-white pl-6 pr-2 py-2 rounded-full font-bold text-xs uppercase tracking-widest hover:bg-red-600 transition-all shadow-xl"  >
                  Get A Quote
                  <div className="bg-white/10 p-2 rounded-full">
                    <ChevronRight size={16} />
                  </div>
                </motion.button>
              </Link>

              {/* FAQ ICON */}
              <Link href="/faq" className="relative group">
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-11 h-11 flex items-center justify-center  rounded-full bg-gray-100 text-[#0b1d39]  hover:bg-red-600 hover:text-white  transition-all shadow-md" >
                  <HelpCircle size={20} />

                  <span className="absolute -top-1 -right-1 w-4 h-4 bg-red-600 text-white text-[10px] font-bold rounded-full  flex items-center justify-center animate-pulse">
                    ?
                  </span>
                </motion.button>

                <span className="absolute top-full mt-2 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 bg-black text-white text-[10px]  px-2 py-1 rounded transition-opacity">
                  FAQs
                </span>
              </Link>

            </div>

            {/* MOBILE TOGGLE */}
            <button
              onClick={() => setOpen(!open)}
              className="lg:hidden w-12 h-12 flex items-center justify-center rounded-2xl bg-gray-50 text-[#0b1d39]">
              {open ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* ================= MOBILE MENU ================= */}
        <AnimatePresence>
          {open && (
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-0 bg-[#0b1d39] z-[60] flex flex-col p-8"
            >
              <div className="flex justify-between items-center mb-12">
                <div className="bg-white rounded-xl p-2 w-32">
                  <Image
                    src="/images/Logos.png"
                    alt="Logo"
                    width={100}
                    height={40}
                  />
                </div>

                <button
                  onClick={() => setOpen(false)}
                  className="text-white p-2 border border-white/20 rounded-full">
                  <X size={30} />
                </button>
              </div>

              <nav className="flex flex-col space-y-6">
                {[
                  { label: "Home", path: "/" },
                  { label: "About", path: "/about" },
                  { label: "Packages", path: "/packages" },
                  { label: "Blog", path: "/blog" },
                  { label: "Contact", path: "/contact" },
                  { label: "FAQs", path: "/faqs" },
                ].map((item, i) => (
                  <motion.div
                    key={item.path}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                  >
                    <Link
                      href={item.path}
                      onClick={() => setOpen(false)}
                      className="text-4xl font-black text-white hover:text-orange-400 transition-colors"  >
                      {item.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pb-12">
                <Link href="/get-quote" onClick={() => setOpen(false)}>
                  <button className="w-full bg-red-600 text-white py-6 rounded-3xl text-xl font-black uppercase tracking-widest shadow-2xl">
                    Get A Quote
                  </button>
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}
