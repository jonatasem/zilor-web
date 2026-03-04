import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MapSection from "@/components/MapSection";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SocialLinks from "@/components/SocialLinks";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <MapSection />
      <SocialLinks />
      <CallToAction />
      <Footer />
    </>
  );
}