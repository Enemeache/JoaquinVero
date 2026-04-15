"use client";

import { useState } from "react";

const features = [
  {
    icon: "💪",
    title: "Entrenamiento Personalizado",
    desc: "Rutinas diseñadas 100% para tus objetivos, nivel y disponibilidad.",
  },
  {
    icon: "🥗",
    title: "Guía Nutricional",
    desc: "Orientación alimentaria para potenciar tus resultados y tu energía.",
  },
  {
    icon: "📊",
    title: "Seguimiento de Progreso",
    desc: "Control detallado de tu evolución semana a semana.",
  },
  {
    icon: "🧠",
    title: "Mentalidad Ganadora",
    desc: "Desarrollamos disciplina y constancia para que nunca pares.",
  },
];

export default function About() {
  const [bioExpanded, setBioExpanded] = useState(false);

  return (
    <section id="sobre-mi" className="bg-[#111111] py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-72 sm:w-80 md:w-96" style={{ aspectRatio: "3/4" }}>
              <div className="absolute -inset-4 border border-[#C6FF00]/20 -rotate-3" />
              <div className="absolute -inset-2 border border-[#C6FF00]/10 rotate-1" />
              <div className="relative w-full h-full overflow-hidden">
                <img
                  src="/joaco-about.jpg.jpg"
                  alt="Joaquín Verón - Personal Trainer"
                  className="w-full h-full object-cover object-top"
                />
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#C6FF00]" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            <span className="text-[#C6FF00] text-xs font-bold tracking-widest uppercase">
              Sobre Mí
            </span>

            <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white leading-none uppercase tracking-wide">
              Tu Entrenador,<br />
              <span className="text-[#C6FF00]">Tu Aliado</span>
            </h2>

            {/* First paragraph — always visible */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed font-light">
              Soy Joaquín Verón, Personal Trainer, y ayudo a personas de distintos niveles a mejorar su cuerpo y su estilo de vida, no solo a seguir una rutina.
            </p>

            {/* Rest of bio — collapsible on mobile */}
            <div className={`${bioExpanded ? "block" : "hidden"} md:block flex flex-col gap-4`}>
              <p className="text-gray-400 text-base leading-relaxed font-light">
                Mi enfoque no es hacer dietas extremas ni entrenamientos imposibles de sostener. Trabajo sobre organización, hábitos, entrenamiento y nutrición, para que los resultados lleguen y se mantengan en el tiempo.
              </p>
              <p className="text-gray-400 text-base leading-relaxed font-light mt-2">
                Cada asesoría es 100% personalizada, adaptada a tu nivel, tus tiempos y tu realidad. No creo en planes genéricos ni en soluciones rápidas: creo en procesos bien hechos, con seguimiento real y acompañamiento constante.
              </p>
            </div>

            {/* Ver más toggle — mobile only */}
            <button
              className="md:hidden flex items-center gap-1.5 text-[#C6FF00] text-sm font-bold -mt-2 w-fit"
              onClick={() => setBioExpanded((v) => !v)}
            >
              {bioExpanded ? "Ver menos" : "Ver más"}
              <svg
                className={`w-4 h-4 transition-transform duration-300 ${bioExpanded ? "rotate-180" : ""}`}
                fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
              </svg>
            </button>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {features.map((feat) => (
                <div
                  key={feat.title}
                  className="flex items-start gap-3 bg-[#1a1a1a] border border-white/5 p-4 hover:border-[#C6FF00]/30 transition-colors duration-200 group rounded-xl"
                >
                  <span className="text-2xl mt-0.5 flex-shrink-0 group-hover:scale-110 transition-transform duration-200">
                    {feat.icon}
                  </span>
                  <div>
                    <p className="text-white font-semibold text-sm">{feat.title}</p>
                    <p className="text-gray-400 text-xs mt-0.5 leading-relaxed">{feat.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
