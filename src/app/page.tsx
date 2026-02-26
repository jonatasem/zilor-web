import Hero from "@/components/Hero";
import AboutSection from "@/components/AboutSection";
import MapSection from "@/components/MapSection";
import CallToAction from "@/components/CallToAction";
import Navbar from "@/components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <MapSection />
      <CallToAction />
      {/* Aqui você adicionaria outras seções, como a de notícias futuras */}
    </>
  );
}