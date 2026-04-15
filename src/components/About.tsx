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

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/5491133910239?text=Hola%20Joaco%2C%20quiero%20m%C3%A1s%20info%20sobre%20tu%20asesor%C3%ADa."
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-[#25D366] hover:bg-[#1da951] text-white font-bold text-sm px-6 py-3 rounded-xl transition-all duration-200 hover:scale-105 w-fit"
            >
              <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
                <path d="M12 0C5.373 0 0 5.373 0 12c0 2.127.558 4.121 1.532 5.849L.073 23.927l6.244-1.635A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.818 9.818 0 01-5.032-1.388l-.36-.214-3.733.979.995-3.638-.234-.374A9.818 9.818 0 1112 21.818z"/>
              </svg>
              Consultar por WhatsApp
            </a>

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
