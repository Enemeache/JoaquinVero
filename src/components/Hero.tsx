"use client";

const WHATSAPP_URL = "https://wa.me/5491133910239?text=Hola%20Joaqu%C3%ADn!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios.";

const stats = [
  { value: "150+", label: "Clientes" },
  { value: "5+", label: "Años de Experiencia" },
  { value: "500+", label: "Transformaciones" },
];

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
            background: "radial-gradient(circle, rgba(249,115,22,0.25) 0%, rgba(249,115,22,0.05) 50%, transparent 70%)",
            filter: "blur(40px)",
            transform: "translate(-30%, 30%)",
          }}
        />
        <div
          className="absolute top-1/4 right-0 w-[400px] h-[400px] rounded-full"
          style={{
            background: "radial-gradient(circle, rgba(249,115,22,0.08) 0%, transparent 70%)",
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
          <span className="inline-flex items-center gap-2 border border-[#f97316]/40 text-[#f97316] text-xs font-semibold px-4 py-1.5 tracking-widest uppercase">
            <span className="w-1.5 h-1.5 rounded-full bg-[#f97316] animate-pulse" />
            Entrenador Personal Certificado
          </span>
        </div>

        {/* Main Heading */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
          <h1 className="font-black leading-none tracking-tighter text-white uppercase">
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              TRANSFORMA
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f97316]">
              TU CUERPO
            </span>
            <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-8xl">
              TRANSFORMA
            </span>
            <span className="block text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-[#f97316]">
              TU VIDA
            </span>
          </h1>
        </div>

        {/* Subheading */}
        <div className="animate-fade-in-up" style={{ animationDelay: "0.3s" }}>
          <p className="text-gray-300 text-lg sm:text-xl max-w-lg leading-relaxed">
            Entrenamiento personalizado que genera resultados reales. Sin excusas, solo progreso.
          </p>
        </div>

        {/* CTAs */}
        <div
          className="flex flex-col sm:flex-row gap-4 animate-fade-in-up"
          style={{ animationDelay: "0.4s" }}
        >
          <a
            href="#planes"
            className="inline-flex items-center justify-center bg-[#f97316] hover:bg-[#ea6c0a] text-black font-bold text-base px-8 py-4 transition-all duration-200 hover:scale-105 hover:shadow-lg hover:shadow-[#f97316]/30"
          >
            Ver Planes
          </a>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-[#f97316] text-[#f97316] hover:bg-[#f97316]/10 font-bold text-base px-8 py-4 transition-all duration-200 hover:scale-105"
          >
            Contactar por WhatsApp
          </a>
        </div>

        {/* Stats */}
        <div
          className="mt-8 pt-8 border-t border-white/10 grid grid-cols-3 gap-4 sm:gap-8 max-w-xl animate-fade-in-up"
          style={{ animationDelay: "0.5s" }}
        >
          {stats.map((stat) => (
            <div key={stat.label} className="flex flex-col gap-1">
              <span className="text-2xl sm:text-3xl md:text-4xl font-black text-[#f97316]">
                {stat.value}
              </span>
              <span className="text-gray-400 text-xs sm:text-sm font-medium leading-tight">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-float">
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
        <div className="w-px h-8 bg-gradient-to-b from-[#f97316] to-transparent" />
      </div>
    </section>
  );
}
