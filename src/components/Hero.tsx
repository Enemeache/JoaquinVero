"use client";

const WHATSAPP_URL = "https://wa.me/5491133910239?text=Hola%20Joaqu%C3%ADn!%20Quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tus%20servicios.";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-[#0a0a0a] overflow-hidden scroll-mt-20 flex"
    >
      {/* LEFT — Text content */}
      <div className="relative z-10 flex flex-col justify-center px-6 sm:px-10 lg:px-12 xl:px-16 pt-24 pb-16 w-full lg:w-1/2">
        <div className="max-w-lg mx-auto lg:mx-0">

          {/* Badge */}
          <div className="animate-fade-in-up mb-6" style={{ animationDelay: "0.1s" }}>
            <span className="inline-flex items-center gap-2 bg-[#C6FF00] text-black text-xs font-bold px-4 py-1.5 tracking-widest uppercase">
              <span className="w-1.5 h-1.5 rounded-full bg-black animate-pulse" />
              Personal Trainer IFBB Internacional
            </span>
          </div>

          {/* Main Heading */}
          <div className="animate-fade-in-up" style={{ animationDelay: "0.2s" }}>
            <h1 className="font-bebas leading-none tracking-wide text-white uppercase">
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl">
                MEJORÁ TU
              </span>
              <span className="block text-6xl sm:text-7xl md:text-8xl lg:text-7xl xl:text-8xl">
                CUERPO
              </span>
              <span className="block text-5xl sm:text-6xl md:text-7xl lg:text-6xl xl:text-7xl text-[#C6FF00]">
                Y TUS HÁBITOS
              </span>
            </h1>
          </div>

          {/* Subheading */}
          <div className="animate-fade-in-up mt-6" style={{ animationDelay: "0.3s" }}>
            <p className="text-gray-400 text-sm sm:text-base max-w-md leading-relaxed font-light tracking-wide uppercase">
              Asesoría online de entrenamiento y nutrición personalizada, con seguimiento real y acompañamiento constante.
            </p>
          </div>

          {/* CTAs */}
          <div
            className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            <a
              href="#planes"
              className="inline-flex items-center justify-center bg-[#C6FF00] hover:bg-[#A8E000] text-black font-bold text-sm px-8 py-4 tracking-widest uppercase transition-all duration-200 hover:scale-105"
            >
              Conocer Planes
            </a>
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center border border-white/30 text-white hover:border-[#C6FF00] hover:text-[#C6FF00] font-bold text-sm px-8 py-4 tracking-widest uppercase transition-all duration-200"
            >
              Escribime
            </a>
          </div>

        </div>
      </div>

      {/* RIGHT — Photo (desktop) */}
      <div className="hidden lg:flex absolute right-0 top-0 w-1/2 h-full items-end justify-center">
        {/* Gradient fade on left edge */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10" />
        {/* Gradient fade on bottom */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10" />
        <img
          src="/joaco-hero.jpg.PNG"
          alt="Joaquín Verón - Personal Trainer"
          className="h-full w-full object-contain object-bottom"
        />
      </div>

      {/* Mobile: photo as background with overlay */}
      <div className="lg:hidden absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img
          src="/joaco-hero.jpg.PNG"
          alt="Joaquín Verón"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-8 flex flex-col items-center gap-2 animate-float z-20 hidden lg:flex">
        <div className="w-px h-12 bg-gradient-to-b from-[#C6FF00] to-transparent" />
        <span className="text-gray-500 text-xs tracking-widest uppercase">Scroll</span>
      </div>
    </section>
  );
}
