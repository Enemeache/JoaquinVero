"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-black overflow-hidden scroll-mt-20"
    >
      {/* ── Desktop: photo anchored at bottom-right ─────────────────────────
          La imagen tiene h-[110%] anclada al bottom: el pie queda fuera del
          viewport y siempre vemos de la cintura hacia la cabeza.
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="hidden lg:block absolute right-0 top-0 bottom-0 overflow-hidden w-[58%]">
        {/* Gradient: negro sólido → transparente (blends text area with photo) */}
        <div
          className="absolute inset-y-0 left-0 z-10"
          style={{
            width: "55%",
            background: "linear-gradient(to right, #000 10%, rgba(0,0,0,0.6) 60%, transparent 100%)",
          }}
        />
        {/* Gradient bottom: sutil para anclaje visual */}
        <div className="absolute bottom-0 left-0 right-0 h-40 z-10 bg-gradient-to-t from-black/60 to-transparent" />
        <img
          src="/joaco-hero.jpg.PNG"
          alt="Joaquín Verón - Personal Trainer"
          className="absolute bottom-0 right-0 h-[108%] w-auto"
        />
      </div>

      {/* ── Mobile: foto de fondo centrada en la parte superior ──────────── */}
      <div className="lg:hidden absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/65 z-10" />
        <img
          src="/joaco-hero.jpg.PNG"
          alt="Joaquín Verón"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ── Content ──────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex flex-col justify-end lg:justify-center min-h-screen px-6 sm:px-10 lg:px-14 xl:px-20 pt-28 pb-14 lg:pb-20">

        <h1
          className="font-bebas text-white uppercase"
          style={{ lineHeight: "0.88", letterSpacing: "0.01em" }}
        >
          <span
            className="block"
            style={{ fontSize: "clamp(3.5rem, 13vw, 11rem)" }}
          >
            MEJORÁ TU
          </span>
          <span
            className="block"
            style={{ fontSize: "clamp(3.5rem, 13vw, 11rem)" }}
          >
            CUERPO
          </span>
          <span
            className="block text-[#C6FF00]"
            style={{ fontSize: "clamp(2.2rem, 8.8vw, 7.5rem)" }}
          >
            Y TUS HÁBITOS
          </span>
        </h1>

        <p
          className="text-white/55 font-bold uppercase mt-5 mb-9"
          style={{ fontSize: "clamp(0.6rem, 1vw, 0.75rem)", letterSpacing: "0.28em" }}
        >
          Asesoría online de entrenamiento y nutrición personalizada
        </p>

        <a
          href="#planes"
          className="inline-flex w-fit items-center bg-[#C6FF00] hover:bg-[#A8E000] text-black font-bold uppercase tracking-widest transition-all duration-200 hover:scale-105"
          style={{ fontSize: "0.8rem", padding: "1rem 2.5rem" }}
        >
          CONOCER PLANES
        </a>
      </div>
    </section>
  );
}
