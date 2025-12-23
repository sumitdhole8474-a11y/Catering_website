"use client";

import { useEffect, useState } from "react";

export default function BlogHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative h-[55vh] min-h-420px overflow-hidden flex items-center justify-center">
      
      {/* VIDEO BACKGROUND */}
      <video
        autoPlay
        muted
        loop
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/videos/foodblog.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* DARK OVERLAY */}
      <div className="absolute inset-0 bg-black/60" />

      {/* CONTENT */}
      <div
        className={`relative z-10 text-center text-white transition-all duration-700
        ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Blog
        </h1>

        <p className="text-gray-200 text-sm md:text-base">
           Gurukrupa Samrat Caterers Services  <span className="mx-2">›</span> Blog
        </p>
      </div>
    </section>
  );
}

