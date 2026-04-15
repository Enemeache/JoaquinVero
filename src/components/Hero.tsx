"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-black overflow-hidden scroll-mt-20"
    >
      {/* Desktop: photo on the right with left-to-black gradient */}
      <div className="hidden lg:block absolute right-0 top-0 h-full w-[58%]">
        <div
          className="absolute inset-y-0 left-0 z-10 w-2/5"
          style={{ background: "linear-gradient(to right, #000 15%, transparent)" }}
        />
        <img
          src="/joaco-hero.jpg.PNG"
          alt="Joaquín Verón - Personal Trainer"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Mobile: full-screen photo with dark overlay */}
      <div className="lg:hidden absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/70 z-10" />
        <img
          src="/joaco-hero.jpg.PNG"
          alt="Joaquín Verón"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 flex flex-col justify-center min-h-screen px-6 sm:px-10 lg:px-14 xl:px-16 pt-24 pb-16">

        <h1 className="font-bebas leading-[0.88] text-white uppercase">
          <span
            className="block"
            style={{ fontSize: "clamp(3.5rem, 12.5vw, 10.5rem)" }}
          >
            MEJORÁ TU
          </span>
          <span
            className="block"
            style={{ fontSize: "clamp(3.5rem, 12.5vw, 10.5rem)" }}
          >
            CUERPO
          </span>
          <span
            className="block text-[#C6FF00]"
            style={{ fontSize: "clamp(2.5rem, 8.5vw, 7rem)" }}
          >
            Y TUS HÁBITOS
          </span>
        </h1>

        <p className="text-white/60 text-xs sm:text-sm font-bold tracking-[0.25em] uppercase mt-5 mb-8 max-w-sm">
          Asesoría online de entrenamiento y nutrición personalizada
        </p>

        <a
          href="#planes"
          className="inline-flex w-fit items-center bg-[#C6FF00] hover:bg-[#A8E000] text-black font-bold text-sm px-8 py-4 tracking-widest uppercase transition-all duration-200 hover:scale-105"
        >
          CONOCER PLANES
        </a>
      </div>
    </section>
  );
}
