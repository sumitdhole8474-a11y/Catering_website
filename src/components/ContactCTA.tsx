"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { Phone, Mail, MapPin, Navigation } from "lucide-react";

export default function ContactCTA() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="py-24 bg-[#fff7f0] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-14 items-center">

        {/* LEFT IMAGE - WITH ORANGE BORDER ACCENT */}
        <div
          className={`relative group transition-all duration-700 ease-out ${mounted ? "opacity-100 translate-y-0 scale-100" : "opacity-0 translate-y-8 scale-95"}`}>
          <div className="rounded-3xl overflow-hidden shadow-xl border-4 border-white transform transition-all duration-500 group-hover:-translate-y-4 group-hover:shadow-2xl">
            <Image
              src="/images/contactus.jpg"
              alt="Customer Support"
              width={600}
              height={700}
              className="object-cover w-full h-[500px] transition-transform duration-700 group-hover:scale-105"
              priority
            />
          </div>
          {/* Decorative Orange Element */}
          <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-orange-400/20 rounded-full blur-3xl -z-10"></div>
        </div>

        {/* RIGHT CONTENT - NEW THEME */}
        <div
          className={`bg-white rounded-[2.5rem] p-10 lg:p-12 border-2 border-orange-400 shadow-xl transform transition-all duration-700 ease-out hover:shadow-2xl ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"}`}>

          <p className="text-red-600 font-bold mb-3 uppercase tracking-widest text-sm">
            Stay In Touch
          </p>

          <h2 className="text-4xl lg:text-5xl font-extrabold text-[#0b1d39] mb-10 leading-tight">
            Let's Meet or Call <br /> <span className="text-orange-500 text-3xl lg:text-4xl">For Your Booking</span>
          </h2>

          <div className="space-y-8">
            {/* ADDRESS */}
            <div className={`flex gap-5 transition-all duration-700 delay-100 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="bg-orange-100 p-4 rounded-2xl h-fit">
                <MapPin className="text-orange-600" size={28} />
              </div>
              <div>
                <h4 className="font-bold text-[#0b1d39] text-xl mb-1">Our Location</h4>
                <p className="text-gray-600 leading-relaxed">
                  Gurukrupa Samrat Caterers Services,<br />
                  Morbagh, Patwa Chowk, Amravati-444601
                </p>
                <a 
                  href="https://maps.google.com" 
                  target="_blank" 
                  className="inline-flex items-center gap-2 text-orange-600 font-bold text-sm mt-2 hover:underline"
                >
                  <Navigation size={14} /> Get Directions
                </a>
              </div>
            </div>

            {/* PHONE */}
            <div className={`flex gap-5 transition-all duration-700 delay-200 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="bg-orange-100 p-4 rounded-2xl h-fit">
                <Phone className="text-orange-600" size={28} />
              </div>
              <div>
                <h4 className="font-bold text-[#0b1d39] text-xl mb-1">Let's Talk</h4>
                <p className="text-gray-600 font-medium text-lg">
                  +91 99755 55571
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className={`flex gap-5 transition-all duration-700 delay-300 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
              <div className="bg-orange-100 p-4 rounded-2xl h-fit">
                <Mail className="text-orange-600" size={28} />
              </div>
              <div>
                <h4 className="font-bold text-[#0b1d39] text-xl mb-1">Email Us</h4>
                <p className="text-gray-600">
                  info@example.com<br />
                  booking@example.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}