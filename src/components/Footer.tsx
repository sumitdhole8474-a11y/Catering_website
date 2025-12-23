"use client";
import Link from "next/link";
import { motion, Variants } from "framer-motion"; // Added Variants import
import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaInstagram,
  FaPhoneAlt,
  FaEnvelope,
} from "react-icons/fa";

// Fixed: Explicitly typed as Variants to allow 'easeOut' string
const fadeUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 1) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.15,
      duration: 0.6,
      ease: "easeOut",
    },
  }),
};

export default function Footer() {
  return (
    <footer className="bg-[rgb(7,9,47)] text-white pt-20 pb-8">
      <div className="max-w-7xl mx-auto px-4 grid md:grid-cols-3 gap-12">
        {/* ABOUT */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={1}
        >
          <h3 className="text-2xl font-bold mb-4">About Us</h3>
          <p className="text-white/90 leading-relaxed mb-6">
            Gurukrupa Samrat Catering Service, Amravati – Since 1997 – your trusted
            partner for delicious vegetarian food and exceptional hospitality....
          </p>
          <Link href="/about">
            <button className="bg-red-600 px-6 py-3 rounded-full font-semibold hover:bg-red-700 transition cursor-pointer">
              Read More
            </button>
          </Link>
          <div className="flex gap-4 mt-6">
            {[
              { Icon: FaFacebookF, href: "https://facebook.com" },
              { Icon: FaTwitter, href: "https://twitter.com" },
              { Icon: FaYoutube, href: "https://youtube.com" },
              { Icon: FaInstagram, href: "https://instagram.com" },
            ].map(({ Icon, href }, i) => (
              <motion.a
                key={i}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.15 }}
                className="bg-red-600 p-3 rounded-lg cursor-pointer text-white"
              >
                <Icon />
              </motion.a>
            ))}
          </div>
        </motion.div>

        {/* QUICK LINKS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
        >
          <h3 className="text-2xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-3">
            {[
              { label: "Home", href: "/" },
              { label: "About Us", href: "/about" },
              { label: "Get A Quote", href: "/get-quote" },
              { label: "Contact Us", href: "/contact" },
              { label: "Packages", href: "/packages" },
            ].map((item, i) => (
              <li key={i} className="border-b border-white/30 pb-2">
                <Link href={item.href} className="hover:text-red-600 transition block cursor-pointer">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ADDRESS */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={3}
        >
          <h3 className="text-2xl font-bold mb-4">Address</h3>
          <p className="leading-relaxed mb-6 text-white/90">
            Morbagh, Patwa Chowk, Masanganj, Amravati-444601
          </p>
          <div className="flex items-center gap-3 mb-3">
            <FaPhoneAlt />
            <span>+919975555571</span>
          </div>
          <div className="flex items-center gap-3">
            <FaEnvelope />
            <span>info@example.com</span>
          </div>
        </motion.div>
      </div>

      <motion.div
        variants={fadeUp}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={4}
        className="border-t border-white/30 mt-12 pt-6 flex flex-col md:flex-row justify-between text-sm px-4 text-center md:text-left"
      >
        <p>© 2023 GKV EVENT'S MANAGEMENT PVT. LTD. All rights reserved.</p>
        <p>Website developed by Final Touch Websolutions.</p>
      </motion.div>
    </footer>
  );
}