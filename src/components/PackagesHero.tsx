"use client";

import { useEffect, useState } from "react";

export default function PackagesHero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  return (
    <section
      className="relative h-[55vh] min-h-[420px w-full flex items-center justify-center"
      style={{
        backgroundImage: "url('/images/foooood.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/55" />

      {/* Content */}
      <div
        className={`
          relative z-10 text-center text-white px-6
          transition-all duration-700 ease-out
          ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}
        `}
      >
        <h1 className="text-4xl md:text-6xl font-extrabold mb-4">
          Packages
        </h1>

        <p className="text-sm md:text-base text-gray-200">
           Gurukrupa Samrat Caterers Services  <span className="mx-2">›</span> Packages
        </p>
      </div>
    </section>
  );
}
