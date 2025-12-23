"use client";

import Link from "next/link";
import { ArrowRight, Navigation, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function Locations() {
  return (
    <section className="py-24 bg-white overflow-hidden relative">
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-orange-50/50 -skew-x-12 translate-x-1/4 -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div className="relative z-10">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-orange-100 text-orange-600 text-xs font-bold uppercase tracking-wider mb-6"
          >
            <Navigation size={14} className="animate-pulse" />
            <span>Serving Amravati Since 1997</span>
          </motion.div>

          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight mb-6">
            Taste the Tradition <br />
            <span className="text-orange-500 underline decoration-orange-200 decoration-4 underline-offset-8">Across Amravati City</span>
          </h2>

          <div className="space-y-6 mb-10">
            <p className="text-gray-600 text-lg leading-relaxed">
              Based in <span className="font-bold text-gray-900">Masanganj</span>, we bring premium vegetarian catering to every neighborhood in Amravati.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {["Authentic Varadi Flavors", "Hygienic Preparation", "Timely Venue Delivery", "Expert Staff Management"].map((item, idx) => (
                <div key={idx} className="flex items-center gap-3 text-sm text-gray-700 font-semibold bg-gray-50 p-3 rounded-xl border border-gray-100">
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  {item}
                </div>
              ))}
            </div>
          </div>

          <Link href="/contact" className="inline-block">
            <motion.button 
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative flex items-center gap-3 bg-orange-600 text-white px-10 py-5 rounded-2xl font-bold shadow-xl shadow-orange-200 hover:bg-orange-700 transition-all duration-300"
            >
              Check Availability
              <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
            </motion.button>
          </Link>
        </div>

        {/* RIGHT AREA: REAL INTERACTIVE MAP */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative w-full h-[450px] lg:h-[550px] rounded-3xl overflow-hidden shadow-2xl border-4 border-white"
        >
          {/* Google Maps Iframe focused on Amravati */}
          <iframe
            title="Gurukrupa Samrat Amravati Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14902.991361512347!2d77.74505315000001!3d20.9224911!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bd6a4be73587e91%3A0xc3f98246f414e2d3!2sMasanganj%2C%20Amravati%2C%20Maharashtra%20444601!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="grayscale-0 hover:grayscale-0 transition-all duration-500"
          ></iframe>

          {/* Floating Address Card */}
          <div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-orange-100 flex items-start gap-3">
            <div className="bg-orange-600 p-2 rounded-lg text-white">
              <MapPin size={20} />
            </div>
            <div>
              <p className="text-xs font-bold text-orange-600 uppercase tracking-tighter">Main Branch</p>
              <p className="text-sm font-medium text-gray-900 leading-tight">
                Morbagh, Patwa Chowk, Masanganj, Amravati 
              </p>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}