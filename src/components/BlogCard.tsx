"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

// THE FIX: The interface now only contains what you actually use.
// No 'comments' property here = No more build errors.
interface BlogCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  slug: string;
  delay?: number;
}

export default function BlogCard({
  title,
  excerpt,
  image,
  date,
  slug,
  delay = 0,
}: BlogCardProps) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setMounted(true), delay);
    return () => clearTimeout(timer);
  }, [delay]);

  return (
    <article
      className={`bg-white rounded-2xl overflow-hidden border-2 border-orange-400 shadow-lg transform transition-all duration-700 ease-out hover:-translate-y-4 hover:shadow-2xl ${
        mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
    >
      {/* IMAGE SECTION */}
      <div className="relative h-64 w-full">
        <Image 
          src={image} 
          alt={title} 
          fill 
          className="object-cover" 
          priority={false}
        />
      </div>

      {/* CONTENT SECTION */}
      <div className="p-6">
        <h3 className="text-lg font-extrabold text-[#0b1d39] mb-3 leading-tight">
          {title}
        </h3>

        <p className="text-gray-600 text-sm mb-6 line-clamp-3">
          {excerpt}
        </p>

        <div className="flex items-center justify-between mt-auto">
          {/* Only Date displayed here - No mentions of comments */}
          <div className="flex items-center gap-2 text-[10px] sm:text-xs text-gray-400 font-medium">
            <span>{date}</span>
          </div>

          <Link
            href={`/blog/${slug}`}
            className="inline-flex items-center gap-1 text-xs font-bold text-red-500 hover:text-orange-600 transition-colors uppercase tracking-wider"
          >
            Read More »
          </Link>
        </div>
      </div>
    </article>
  );
}