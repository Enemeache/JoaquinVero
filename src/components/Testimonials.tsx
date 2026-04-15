const testimonials = [
  {
    name: "Milagros",
    initials: "M",
    text: "Cuando arranqué a entrenar con Joaco no tenía constancia con el gym ni noción de mis comidas. Joaco me ayudó a ordenarme, ahora tengo una rutina clara, que me mantiene motivada. Joaco está siempre ahí, motivándote y acompañándote, por más que estemos a mil KM, siento que siempre está ahí 💪🏼 100% recomendado",
  },
  {
    name: "Lucho",
    initials: "L",
    text: "Joaco es un excelente entrenador, muy profesional y comprometido. Siempre atento a la técnica y enfocado en lograr resultados reales. Lo recomiendo totalmente para mejorar el rendimiento y la constancia.",
  },
];

function StarIcon() {
  return (
    <svg className="w-4 h-4 text-[#C6FF00]" fill="currentColor" viewBox="0 0 20 20">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

export default function Testimonials() {
  return (
    <section className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-14 md:mb-16">
          <span className="text-[#C6FF00] text-xs font-bold tracking-widest uppercase mb-3 block">
            Lo que dicen mis clientes
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wide leading-none">
            RESULTADOS REALES
          </h2>
          <p className="text-gray-400 mt-4 text-base font-light max-w-md mx-auto">
            Personas reales, cambios reales. Esto dicen quienes ya empezaron su proceso.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 max-w-4xl mx-auto">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 flex flex-col gap-5 hover:border-[#C6FF00]/30 transition-colors duration-300"
            >
              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <StarIcon key={i} />
                ))}
              </div>

              {/* Quote mark */}
              <svg className="w-8 h-8 text-[#C6FF00]/30" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>

              {/* Review text */}
              <p className="text-gray-300 text-sm sm:text-base leading-relaxed flex-1 -mt-2">
                {t.text}
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/10">
                <div className="w-11 h-11 rounded-full bg-[#C6FF00] flex items-center justify-center font-bebas text-black text-xl flex-shrink-0">
                  {t.initials}
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">{t.name}</p>
                  <p className="text-gray-500 text-xs mt-0.5">Cliente verificado</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
