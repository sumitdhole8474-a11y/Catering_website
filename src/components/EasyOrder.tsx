"use client";

import { ArrowRight } from "lucide-react";

export default function EasyOrder() {
  const events = [
    { title: "WEDDING EVENT", img: "/images/wedding.jpg" },
    { title: "BIRTHDAY EVENT", img: "/images/birthday.jpg" },
    { title: "ENGAGEMENT", img: "/images/ring.jpg" },
    { title: "GET TOGETHER", img: "/images/getogether.jpg" },
  ];

  return (
    <section className="py-24 bg-[#fffcf9] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">

        {/* Heading Area */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-red-500 font-bold uppercase tracking-[0.2em] text-sm mb-4">
            Get It Now
          </p>
          <h2 className="text-3xl lg:text-4xl font-black text-[#0b1d39] leading-tight">
            Planning Your Event Is Now <br />
            <span className="text-orange-500 underline decoration-orange-200 decoration-4 underline-offset-8">Effortless & Quick</span>
          </h2>
        </div>

        {/* Event Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {events.map((item, index) => (
            <div key={index} className="group flex flex-col items-center">
              
              {/* IMAGE CONTAINER WITH PREMIUM HOVER */}
              <div className="relative w-full h-380px overflow-hidden rounded-[2.5rem] border-4 border-white shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-orange-200 group-hover:-translate-y-3">
                <img
                  src={item.img}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                
                {/* Subtle Overlay Gradient */}
                <div className="absolute inset-0 .bg-gradient-to-t from-[#0b1d39]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* REMOVED: Floating Icon Tag section was here */}
              </div>

              {/* TITLE TAG STYLE */}
              <div className="mt-25px z-10 bg-white px-6 py-3 rounded-2xl border border-orange-100 shadow-md transform group-hover:scale-110 transition-transform duration-300">
                <h4 className="font-black text-[12px] tracking-widest text-[#0b1d39] uppercase">
                  {item.title}
                </h4>
              </div>

            </div>
          ))}
        </div>

        {/* CTA BUTTONS */}
        <div className="mt-20 flex flex-wrap justify-center gap-6">
          <a
            href="/get-quote"
            className="group flex items-center gap-3 bg-[#9b7c72] hover:bg-[#866960] text-white px-10 py-5 rounded-2xl font-bold transition-all shadow-xl hover:-translate-y-1"
          >
            <span className="text-lg">⦿ Get A Quote</span>
            <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

      </div>
    </section>
  );
}