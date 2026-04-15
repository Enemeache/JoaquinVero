import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ParallaxBanner from "@/components/ParallaxBanner";
import Plans from "@/components/Plans";
import Testimonials from "@/components/Testimonials";
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
        <ParallaxBanner
          image="/joaco-parallax-1.jpg.PNG"
          alt="Joaquín Verón entrenando"
        />
        <Plans />
        <Testimonials />
        <ParallaxBanner
          image="/joaco-parallax-2.jpg.PNG"
          alt="Joaquín Verón en el gym"
        />
        <Sponsors />
        <SocialMedia />
        <Contact />
      </main>
      <Footer />
      <WhatsAppBot />
    </>
  );
}
