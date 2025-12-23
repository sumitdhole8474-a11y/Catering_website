"use client";

import Image from "next/image";
import Link from "next/link";
import { blogs } from "@/components/data/blogs ";
import { motion, useScroll, useSpring } from "framer-motion";
import { useParams } from "next/navigation";
import { Calendar, Clock, Share2, ArrowLeft, ChevronRight } from "lucide-react";

export default function BlogDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const blog = blogs.find((b) => b.slug === slug);
  
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  if (!blog) return null;

  const relatedBlogs = blogs.filter((b) => b.slug !== blog.slug).slice(0, 3);

  return (
    <article className="bg-[#fffcf9] min-h-screen pb-24 selection:bg-orange-200">
      {/* ⚡ READING PROGRESS BAR */}
      <motion.div className="fixed top-0 left-0 right-0 h-1.5 bg-orange-500 z-[100] origin-left" style={{ scaleX }} />

      {/* 🧡 SOFT GRADIENT HERO */}
      <div className="relative h-[65vh] w-full flex items-center justify-center overflow-hidden bg-orange-50">
        <motion.div 
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute inset-0"
        >
          <Image src={blog.image} alt={blog.title} fill className="object-cover opacity-30 blur-[2px]" />
          <div className="absolute inset-0 bg-gradient-to-b from-orange-100/20 via-white to-[#fffcf9]" />
        </motion.div>

        <div className="relative z-10 max-w-4xl px-6 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500 text-white text-xs font-black uppercase tracking-widest mb-6 shadow-lg shadow-orange-200"
          >
            <Calendar size={14} /> 2025 Catering Trends
          </motion.div>
          
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-4xl md:text-6xl font-black text-[#0b1d39] leading-[1.1] mb-8"
          >
            {blog.title}
          </motion.h1>

          <motion.div 
             initial={{ opacity: 0 }}
             animate={{ opacity: 1 }}
             transition={{ delay: 0.4 }}
             className="flex items-center justify-center gap-6 text-slate-500 font-bold"
          >
            <span className="flex items-center gap-2"><Clock size={18} className="text-orange-500" /> 5 Min Read</span>
            <span className="h-4 w-px bg-orange-200" />
            <button className="flex items-center gap-2 hover:text-orange-600 transition"><Share2 size={18} /> Share</button>
          </motion.div>
        </div>
      </div>

      {/* 🧠 CONTENT SECTION */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 -mt-20 relative z-20">
        
        {/* MAIN ARTICLE BODY */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="lg:col-span-8 bg-white rounded-[40px] shadow-2xl shadow-orange-100/50 p-8 md:p-16 border border-orange-100"
        >
          <Link href="/blog" className="inline-flex items-center gap-2 text-orange-500 font-black text-sm uppercase mb-10 hover:gap-4 transition-all">
            <ArrowLeft size={18} /> Back to stories
          </Link>

          <div className="prose prose-orange prose-lg max-w-none">
            <div className="text-2xl font-bold text-slate-700 leading-relaxed mb-12 border-l-8 border-orange-500 pl-8 bg-orange-50/50 py-6 rounded-r-2xl">
              {blog.excerpt}
            </div>

            <div 
              className="blog-content text-slate-600 leading-8 space-y-6"
              dangerouslySetInnerHTML={{ __html: blog.content }} 
            />
          </div>
        </motion.div>

        {/* ✨ REIMAGINED RECOMMENDED READING */}
        <aside className="lg:col-span-4 space-y-8">
          <div className="sticky top-28 space-y-8">
            <div className="bg-[#0b1d39] text-white p-8 rounded-[32px] shadow-2xl overflow-hidden relative group">
                <div className="absolute top-0 right-0 w-32 h-32 bg-orange-500/20 blur-3xl rounded-full -mr-16 -mt-16 group-hover:bg-orange-500/40 transition-all duration-700" />
                
                <h4 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <span className="w-2 h-8 bg-orange-500 rounded-full" />
                  Popular Now
                </h4>

                <div className="space-y-6">
                  {relatedBlogs.map((item, idx) => (
                    <motion.div
                      key={item.slug}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <Link href={`/blog/${item.slug}`} className="group flex gap-4 items-center">
                        <div className="relative h-20 w-20 shrink-0 rounded-2xl overflow-hidden border-2 border-white/10">
                          <Image src={item.image} alt="" fill className="object-cover group-hover:scale-110 transition-transform duration-500" />
                        </div>
                        <div className="space-y-1">
                          <h5 className="font-bold text-sm leading-tight group-hover:text-orange-400 transition">
                            {item.title}
                          </h5>
                          <span className="text-[10px] text-white/50 uppercase font-black tracking-widest">Read Article →</span>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
            </div>

            {/* CALL TO ACTION BOX */}
            <div className="bg-orange-500 p-8 rounded-[32px] text-white shadow-xl shadow-orange-200 relative overflow-hidden">
                <div className="relative z-10">
                  <h4 className="text-xl font-black mb-4 leading-tight">Planning a special event in Mumbai?</h4>
                  <p className="text-white/80 text-sm mb-6">Let Gurukrupa Samrat handle the delicious details.</p>
                  <Link href="/get-quote" className="w-full bg-white text-orange-600 py-4 rounded-2xl font-black text-center block hover:bg-[#0b1d39] hover:text-white transition-all shadow-lg">
                    Get A Quote Now
                  </Link>
                </div>
            </div>
          </div>
        </aside>
      </div>
    </article>
  );
}