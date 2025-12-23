"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import { ArrowRight, Calendar, MessageCircle } from "lucide-react";

const blogs = [
  {
    date: "29",
    month: "Mar",
    fullDate: "March 29, 2023",
    comments: 5,
    title: "Top 7 Trending Indian Wedding Food Ideas",
    desc: "Indian weddings are known for their grandeur and extravagance, and food plays a vital role in adding to the celebration...",
    image: "/images/weddingfood.jpg",
    slug: "top-7-trending-indian-wedding-food-ideas",
  },
  {
    date: "21",
    month: "Mar",
    fullDate: "March 21, 2023",
    comments: 2,
    title: "14 Essential Tips for Hosting a Memorable Holiday Party",
    desc: "Holiday parties are a great way to bring family, friends, and colleagues together to celebrate the joyous season...",
    image: "/images/holiday.jpg",
    slug: "stress-free-holiday-party-tips",
  },
  {
    date: "20",
    month: "Mar",
    fullDate: "March 20, 2023",
    comments: 0,
    title: "A Guide to Planning the Perfect Menu for Your Birthday Party",
    desc: "Menu planning is one of the key factors in organizing a successful birthday party. It plays a critical role in...",
    image: "/images/party.jpg",
    slug: "perfect-birthday-party-menu",
  },
];

export default function BlogSection() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 bg-[#fff7f0]">
      <div className="max-w-7xl mx-auto px-4">
        {/* Header Animation */}
        <div className={`text-center mb-16 transition-all duration-1000 ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-red-600 font-bold mb-2 uppercase tracking-widest text-sm">Our Blog</p>
          <h2 className="text-4xl md:text-5xl font-extrabold text-[#0b1d39]">
            Latest Tips & <span className="text-orange-500">Catering Tricks</span>
          </h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.map((item, i) => (
            <article
              key={i}
              style={{ transitionDelay: `${i * 150}ms` }}
              className={`group bg-white rounded-[2rem] overflow-hidden border-2 border-orange-400 shadow-lg hover:shadow-2xl transition-all duration-500 transform ${mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
            >
              {/* Image Container */}
              <div className="relative h-64 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Float Date Badge */}
                <div className="absolute top-5 left-5 bg-white border-2 border-orange-500 rounded-2xl px-3 py-1 shadow-md transform -rotate-3 group-hover:rotate-0 transition-transform">
                  <p className="text-xl font-black text-orange-600 leading-none">{item.date}</p>
                  <p className="text-[10px] font-bold text-gray-500 uppercase text-center">{item.month}</p>
                </div>
              </div>

              {/* Content Body */}
              <div className="p-8">
                <h3 className="text-xl font-extrabold text-[#0b1d39] mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                  {item.title}
                </h3>

                <p className="text-gray-600 text-sm mb-8 line-clamp-3 italic">
                  "{item.desc}"
                </p>

                {/* Footer Section: Meta info left, Read more right */}
                <div className="flex items-center justify-between pt-6 border-t border-orange-100">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2 text-[11px] text-gray-400 font-bold uppercase">
                      <Calendar size={12} className="text-orange-500" />
                      {item.fullDate}
                    </div>
                   
                  </div>

                  <Link
                    href={`/blog/${item.slug}`}
                    className="flex items-center gap-1 text-xs font-black text-red-600 hover:text-orange-600 transition-all group/link"
                  >
                    READ MORE 
                    <ArrowRight size={14} className="transform group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}