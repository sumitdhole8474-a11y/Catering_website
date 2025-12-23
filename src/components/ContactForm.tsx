"use client";

import { Mail, Phone, MapPin, MessageSquare } from "lucide-react";

export default function ContactSection() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Inquiry sent successfully! Our team will contact you shortly.");
  };

  return (
    <section className="py-24 bg-[#fff7f0]">
      <div className="max-w-7xl mx-auto px-4">
        {/* HEADING */}
        <div className="text-center mb-16">
          <p className="text-red-600 font-semibold mb-2 uppercase tracking-widest">
            Get In Touch
          </p>
          <h2 className="text-5xl font-extrabold text-[#0b1d39]">
            Contact Us
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* LEFT COLUMN: INFO & WRAPPED MAP */}
          <div className="space-y-6">
            {/* Phone Card */}
            <div className="bg-white p-5 rounded-2xl border-2 border-orange-400 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1d39] text-sm">Call Us</h4>
                  <p className="text-gray-600 text-xs">+91 9975555571</p>
                </div>
              </div>
            </div>

            {/* Email Card */}
            <div className="bg-white p-5 rounded-2xl border-2 border-orange-400 shadow-lg hover:shadow-xl transition-all">
              <div className="flex items-center gap-4">
                <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1d39] text-sm">Email Us</h4>
                  <p className="text-gray-600 text-xs">info@example.com</p>
                </div>
              </div>
            </div>

            {/* VISIT US SECTION WITH WRAPPED MAP */}
            <div className="bg-white rounded-2xl border-2 border-orange-400 shadow-lg overflow-hidden transition-all hover:shadow-xl">
              <div className="p-5 flex items-center gap-4 border-b border-orange-100">
                <div className="bg-orange-100 p-3 rounded-xl text-orange-600">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-[#0b1d39] text-sm">Visit Us</h4>
                  <p className="text-gray-600 text-xs"> Morbagh, Patwa Chowk, Masanganj, Amravati-444601</p>
                </div>
              </div>
              {/* Wrapped Map Container - FIXED SRC */}
              <div className="h-48 w-full bg-gray-100">
                <iframe 
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d120658.46328514125!2d72.8258374!3d19.0821978!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                  width="100%" 
                  height="100%" 
                  style={{ border: 0 }} 
                  allowFullScreen 
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                ></iframe>
              </div>
            </div>

            {/* WhatsApp Card */}
            <div className="bg-orange-600 p-5 rounded-2xl shadow-lg text-white flex items-center justify-between group cursor-pointer active:scale-95 transition-all">
              <div>
                <h4 className="font-bold text-sm">Fast Response</h4>
                <p className="text-orange-100 text-xs">WhatsApp Support</p>
              </div>
              <MessageSquare size={20} className="group-hover:scale-110 transition-transform" />
            </div>
          </div>

          {/* RIGHT COLUMN: INQUIRY FORM */}
          <div className="lg:col-span-2 bg-white p-8 rounded-3xl border-2 border-orange-400 shadow-xl flex flex-col justify-center">
            <h3 className="text-2xl font-bold text-[#0b1d39] mb-6">Send an Inquiry</h3>
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <input 
                  type="text" 
                  placeholder="Your Name" 
                  className="w-full p-4 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                  required 
                />
                <input 
                  type="text" 
                  placeholder="Phone Number" 
                  className="w-full p-4 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                  required 
                />
              </div>
              
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full p-4 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition"
                required 
              />

              <textarea 
                rows={5} 
                placeholder="How can we help you? Tell us about your requirements..." 
                className="w-full p-4 rounded-xl border border-orange-200 focus:border-orange-500 focus:ring-2 focus:ring-orange-200 outline-none transition resize-none"
                required></textarea>

              <button 
                type="submit" 
                className="w-full bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 rounded-xl shadow-lg transform active:scale-95 transition-all text-lg">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}