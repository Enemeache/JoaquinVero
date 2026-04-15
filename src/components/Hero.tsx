"use client";

export default function Hero() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen bg-black overflow-hidden scroll-mt-20"
    >
      {/* ── Desktop photo ───────────────────────────────────────────────────
          container arranca en el 28% del viewport (no en el borde derecho)
          → la imagen queda más centrada en pantalla, igual que Franco Curia.
          object-cover + object-top: llena el ancho y ancla la cabeza arriba.
      ──────────────────────────────────────────────────────────────────────── */}
      <div
        className="hidden lg:block absolute top-0 bottom-0 right-0 overflow-hidden"
        style={{ width: "72%" }}
      >
        {/* Gradient negro → transparente: funde el área de texto con la foto */}
        <div
          className="absolute inset-y-0 left-0 z-10"
          style={{
            width: "42%",
            background:
              "linear-gradient(to right, #000 0%, #000 20%, rgba(0,0,0,0.55) 65%, transparent 100%)",
          }}
        />
        <img
          src="/joaco-hero.jpg.PNG"
          alt="Joaquín Verón - Personal Trainer"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ── Mobile: fondo completo con overlay ──────────────────────────── */}
      <div className="lg:hidden absolute inset-0 z-0">
        <div className="absolute inset-0 bg-black/65 z-10" />
        <img
          src="/joaco-hero.jpg.PNG"
          alt="Joaquín Verón"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* ── Texto ──────────────────────────────────────────────────────────
          justify-end en mobile (texto abajo), justify-center en desktop
      ──────────────────────────────────────────────────────────────────────── */}
      <div className="relative z-20 flex flex-col justify-end lg:justify-center min-h-screen px-6 sm:px-10 lg:px-14 xl:px-20 pt-28 pb-14 lg:pb-16">

        <h1
          className="font-bebas text-white uppercase"
          style={{ lineHeight: "0.88", letterSpacing: "0.01em" }}
        >
          <span style={{ display: "block", fontSize: "clamp(3.2rem, 13vw, 11rem)" }}>
            MEJORÁ TU
          </span>
          <span style={{ display: "block", fontSize: "clamp(3.2rem, 13vw, 11rem)" }}>
            CUERPO
          </span>
          <span
            className="text-[#C6FF00]"
            style={{ display: "block", fontSize: "clamp(2rem, 8.8vw, 7.5rem)" }}
          >
            Y TUS HÁBITOS
          </span>
        </h1>

        <p
          className="text-white/55 font-bold uppercase mt-5 mb-9"
          style={{ fontSize: "clamp(0.58rem, 0.95vw, 0.75rem)", letterSpacing: "0.28em" }}
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
