import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ParallaxBanner from "@/components/ParallaxBanner";
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
        <ParallaxBanner
          image="/joaco-parallax-1.jpg.PNG"
          quote="EL PROCESO ES EL RESULTADO"
          alt="Joaquín Verón entrenando"
        />
        <Plans />
        <ParallaxBanner
          image="/joaco-parallax-2.jpg.PNG"
          quote="SIN CONSTANCIA NO HAY TRANSFORMACIÓN"
          alt="Joaquín Verón en el gym"
        />
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
