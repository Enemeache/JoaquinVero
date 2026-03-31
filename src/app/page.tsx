import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Plans from "@/components/Plans";
import Results from "@/components/Results";
import Sponsors from "@/components/Sponsors";
import SocialMedia from "@/components/SocialMedia";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppBot from "@/components/WhatsAppBot";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Plans />
        <Results />
        <Sponsors />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBot />
    </>
  );
}
