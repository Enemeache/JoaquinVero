"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-black overflow-hidden scroll-mt-20"
    >
      {/* ── Imagen pre-compuesta 1920×1080 ────────────────────────────────
          Ya viene con zona negra izquierda + persona (cintura→cabeza) a la
          derecha. object-cover la escala sin recorte problemático.
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="absolute inset-0">
        {/* Desktop: imagen pre-compuesta 1920×1080 (negro izq + persona der) */}
        <img
          src="/joaco-hero-v5.png"
          alt="Joaquín Verón - Personal Trainer"
          className="hidden lg:block w-full h-full object-cover object-top"
        />
        {/* Mobile: foto retrato original */}
        <img
          src="/joaco-hero.jpg.PNG"
          alt="Joaquín Verón - Personal Trainer"
          className="lg:hidden w-full h-full object-cover"
          style={{ objectPosition: "50% 18%" }}
        />
        {/* Leve overlay para legibilidad del texto */}
        <div className="absolute inset-0 bg-black/10" />
      </div>

      {/* ── Mobile: overlay más denso ─────────────────────────────────── */}
      <div className="lg:hidden absolute inset-0 bg-black/50 z-[1]" />

      {/* ── Contenido ─────────────────────────────────────────────────── */}
      <div className="relative z-10 flex flex-col justify-center min-h-screen pt-28 pb-14 lg:pb-16">
        <div className="w-full px-8 lg:px-0 flex flex-col items-center lg:items-start text-center lg:text-left lg:ml-[10%] xl:ml-[14%]">

          <h1
            className="font-bebas text-white uppercase"
            style={{ lineHeight: "0.88", letterSpacing: "0.01em" }}
          >
            <span style={{ display: "block", fontSize: "clamp(4.2rem, 15vw, 11rem)" }}>
              MEJORÁ TU
            </span>
            <span style={{ display: "block", fontSize: "clamp(4.2rem, 15vw, 11rem)" }}>
              CUERPO
            </span>
            <span
              className="text-[#C6FF00]"
              style={{ display: "block", fontSize: "clamp(2.8rem, 10vw, 7.5rem)" }}
            >
              Y TUS HÁBITOS
            </span>
          </h1>

          <p
            className="text-white/55 font-bold uppercase mt-5 mb-9"
            style={{ fontSize: "clamp(0.72rem, 2.5vw, 0.78rem)", letterSpacing: "0.28em" }}
          >
            Asesoría online de entrenamiento y nutrición personalizada
          </p>

          <a
            href="#planes"
            className="inline-flex w-fit items-center bg-[#C6FF00] hover:bg-[#A8E000] text-black font-bold uppercase tracking-widest transition-all duration-200 hover:scale-105"
            style={{ fontSize: "0.85rem", padding: "1.1rem 2.8rem" }}
          >
            CONOCER PLANES
          </a>
        </div>
      </div>
    </section>
  );
}
