

import Hero from "@/components/Hero";
import WhatsAppFloat from "@/components/WhatsAppFloate";
import AboutHome from "@/components/AboutHome";
import EasyOrder from "@/components/EasyOrder";
import WhoWeAre from "@/components/WhoWeAre";
import Locations from "@/components/Locations";
import PackagesSection from "@/components/PackagesSection";
import DeliciousCaterers from "@/components/DeliciousCaterers";
import Testimonials from "@/components/Testimonials";
import ContactCTA from "@/components/ContactCTA";
import BlogSection from "@/components/BlogSection";

export default function HomePage() {
  return (
    <>
     
      <Hero />
       <AboutHome />
        <EasyOrder/>
       <WhoWeAre/>
       <Locations/>
       <PackagesSection />
       <DeliciousCaterers/>
       <Testimonials/>
       <ContactCTA/>
       <BlogSection/>
      <WhatsAppFloat />
    </>
  );
}
