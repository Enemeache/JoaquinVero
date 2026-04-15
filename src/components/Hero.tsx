"use client";

const WHATSAPP_URL = "https://wa.me/5491133910239?text=Hola%20Joaqu%C3%ADn!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios.";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen flex flex-col justify-center overflow-hidden scroll-mt-20"
    >
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-[#0a0a0a]">
        <div
          className="absolute bottom-0 left-0 w-[600px] h-[600px] rounded-full animate-hero-bg"
          style={{
            background: "radial-gradient(circle, rgba(198,255,0,0.2) 0%, rgba(198,255,0,0.05) 50%, transparent 70%)",
            filter: "blur(40px)",
            transform: "translate(-30%, 30%)",
          }}
        />
        <div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(198,255,0,0.06) 0%, transparent 70%)",
            filter: "blur(60px)",
            transform: "translateX(30%)",
            animation: "heroBg 12s ease-in-out infinite reverse",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16 flex flex-col gap-8">
        {/* Badge */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.1s" }}>
          <span className="inline-flex items-center gap-2 bg-[#C6FF00] text-black text-xs font-bold px-4 py-1.5 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
            Personal Trainer IFBB Internacional
          </span>
        </div>

        {/* Main Heading */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-bebas leading-none tracking-wide text-white uppercase">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              MEJORÁ TU CUERPO
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#C6FF00]">
              Y TUS HÁBITOS
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              PARA LOGRAR
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#C6FF00]">
              RESULTADOS REALES
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-gray-300 text-lg sm:text-xl max-w-lg leading-relaxed font-light">
            Asesoría online de entrenamiento y nutrición personalizada, con seguimiento real, organización y acompañamiento constante.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#planes"
            className="inline-flex items-center justify-center bg-[#C6FF00] hover:bg-[#A8E000] text-black font-bold text-base px-8 py-4 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#C6FF00]/30"
          >
            Ver Planes
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-[#C6FF00] text-[#C6FF00] hover:bg-[#C6FF00]/10 font-bold text-base px-8 py-4 transition-all duration-200 hover:scale-105"
          >
            Contactar por WhatsApp
          </a>
        </div>

      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#C6FF00] to-transparent" />
      </div>
    </section>
  );
}
