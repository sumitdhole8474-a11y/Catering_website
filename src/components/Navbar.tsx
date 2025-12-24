"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ChevronRight, HelpCircle } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";

/* Fixed Variants for a premium side-drawer feel */
const menuVariants: Variants = {
  closed: { 
    x: "100%", 
    transition: { duration: 0.3, ease: [0.4, 0, 0.2, 1] } 
  },
  open: { 
    x: 0, 
    transition: { duration: 0.4, ease: [0, 0, 0.2, 1] } 
  }
};

const itemVariants: Variants = {
  closed: { opacity: 0, x: 20 },
  open: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.05 + 0.2, duration: 0.3 }
  })
};

export default function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [open]);

  const navItemClass = (path: string) =>
    `relative px-4 py-2 text-[13px] font-extrabold uppercase tracking-[0.1em] transition-all duration-300 rounded-full
     ${pathname === path ? "text-red-600" : "text-gray-500 hover:text-[#0b1d39]"}`;

  return (
    <>
      <header className="sticky top-0 z-[100] w-full bg-white/90 backdrop-blur-lg border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="flex items-center justify-between h-16 md:h-24">
            
            {/* LOGO */}
            <Link href="/" className="flex-shrink-0">
              <div className="relative w-32 h-10 md:w-52 md:h-16">
                <Image
                  src="/images/Logos.png"
                  alt="Gurukrupa Samrat"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>

            {/* DESKTOP NAV */}
            <nav className="hidden lg:flex items-center space-x-1 bg-gray-50/50 rounded-full px-4 py-1.5 border border-orange-100">
              {[
                { name: "Home", path: "/" },
                { name: "About", path: "/about" },
                { name: "Packages", path: "/packages" },
                { name: "Blog", path: "/blog" },
                { name: "Contact", path: "/contact" },
              ].map((item) => (
                <Link key={item.path} href={item.path} className={navItemClass(item.path)}>
                  <span className="relative z-10">{item.name}</span>
                  {pathname === item.path && (
                    <motion.span
                      layoutId="pill"
                      className="absolute inset-0 bg-white rounded-full border border-orange-200 shadow-sm z-0"
                      transition={{ type: "spring", bounce: 0.2, duration: 0.5 }}
                    />
                  )}
                </Link>
              ))}
            </nav>

            {/* DESKTOP CTA */}
            <div className="hidden md:flex items-center gap-4">
              <Link href="/get-quote" className="bg-[#0b1d39] text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-red-600 transition-colors">
                Get A Quote
              </Link>
            </div>

            {/* MOBILE TOGGLE */}
            <div className="flex items-center gap-3 lg:hidden">
              <Link href="/faq" className="text-[#0b1d39] p-2 hover:bg-gray-100 rounded-full transition-colors">
                <HelpCircle size={22} />
              </Link>
              <button
                onClick={() => setOpen(true)}
                className="w-10 h-10 flex items-center justify-center rounded-xl bg-gray-100 text-[#0b1d39] active:scale-90 transition-all"
              >
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>

        {/* ================= MOBILE PREMIUM DRAWER ================= */}
        <AnimatePresence>
          {open && (
            <>
              {/* Dark Backdrop Overlay */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setOpen(false)}
                className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[110] lg:hidden"
              />

              {/* White Side Drawer */}
              <motion.div
                variants={menuVariants}
                initial="closed"
                animate="open"
                exit="closed"
                className="fixed top-0 right-0 w-[85%] max-w-[400px] h-[100dvh] bg-white z-[120] flex flex-col shadow-2xl lg:hidden"
              >
                {/* Drawer Header */}
                <div className="flex justify-between items-center p-6 border-b border-gray-50">
                  <div className="relative w-24 h-10">
                    <Image src="/images/Logos.png" alt="Logo" fill className="object-contain" />
                  </div>
                  <button 
                    onClick={() => setOpen(false)} 
                    className="p-2 bg-orange-50 text-orange-600 rounded-full active:rotate-90 transition-transform"
                  >
                    <X size={24} />
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 flex flex-col py-8 px-6 space-y-2 overflow-y-auto">
                   <p className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-4 px-4">Menu</p>
                  {[
                    { label: "Home", path: "/" },
                    { label: "About", path: "/about" },
                    { label: "Packages", path: "/packages" },
                    { label: "Blog", path: "/blog" },
                    { label: "Contact", path: "/contact" },
                    { label: "FAQs", path: "/faq" },
                  ].map((item, i) => {
                    const isActive = pathname === item.path;
                    return (
                      <motion.div key={item.path} custom={i} variants={itemVariants}>
                        <Link
                          href={item.path}
                          onClick={() => setOpen(false)}
                          className={`relative flex items-center justify-between px-6 py-4 rounded-2xl text-base font-bold transition-all duration-300
                            ${isActive 
                              ? "bg-orange-500 text-white shadow-lg shadow-orange-200" 
                              : "text-gray-600 hover:bg-gray-50 active:scale-95"}`}
                        >
                          <span className="relative z-10">{item.label}</span>
                          {isActive ? <ChevronRight size={18} /> : null}
                        </Link>
                      </motion.div>
                    );
                  })}
                </nav>

                {/* Mobile Footer Action */}
                <div className="p-6 bg-gray-50/50">
                  <Link href="/get-quote" onClick={() => setOpen(false)}>
                    <button className="w-full bg-[#0b1d39] text-white py-4 rounded-2xl text-sm font-extrabold uppercase tracking-widest active:scale-[0.98] transition-all shadow-xl flex items-center justify-center gap-2">
                      Get A Quote <ChevronRight size={18} />
                    </button>
                  </Link>
                  <div className="mt-6 flex flex-col items-center gap-1">
                    <p className="text-[#0b1d39]/40 text-[10px] uppercase font-bold tracking-widest">
                      Gurukrupa Catering Services
                    </p>
                  </div>
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </header>
    </>
  );
}