import type { Metadata } from "next";
import "./globals.css";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import WhatsAppFloat from "@/components/WhatsAppFloate";

export const metadata: Metadata = {
  title: "Delight Catering Services",
  description: "Tasty, hygienic and professional catering for all your events.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        suppressHydrationWarning
        className="antialiased bg-white text-gray-900">

        <Navbar/>
        <main className="site-main">{children}</main>
        <Footer />
        <WhatsAppFloat/>
      </body>
    </html>
  );
}
