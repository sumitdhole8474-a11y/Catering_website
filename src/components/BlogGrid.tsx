"use client";

import { blogs } from "@/components/data/blogs ";
import BlogCard from "./BlogCard";

export default function BlogGrid() {
  return (
    <section className="bg-[#f9f9f9] py-20">
      <div className="max-w-7xl mx-auto px-6">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {blogs.slice(0, 9).map((blog, i) => (
            <BlogCard
              key={blog.id}
              {...blog}
              delay={i * 120}
            />
          ))}
        </div>

      </div>
    </section>
  );
}

