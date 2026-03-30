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
  return (
    <section id="sobre-mi" className="bg-[#111111] py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image / Placeholder */}
          <div className="flex justify-center md:justify-start">
            <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96">
              {/* Background decoration */}
              <div className="absolute -inset-4 border border-[#f97316]/20 -rotate-3" />
              <div className="absolute -inset-2 border border-[#f97316]/10 rotate-1" />
              {/* Main image placeholder */}
              <div
                className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, #1a1a1a 0%, #222222 50%, rgba(249,115,22,0.1) 100%)",
                }}
              >
                {/* Initials */}
                <span className="text-8xl md:text-9xl font-black text-[#f97316] select-none leading-none">
                  JV
                </span>
                <span className="text-gray-400 text-sm font-medium mt-2 tracking-widest uppercase">
                  Joaquín Verón
                </span>
                {/* Decorative line */}
                <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#f97316]" />
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="flex flex-col gap-6">
            {/* Label */}
            <span className="text-[#f97316] text-xs font-semibold tracking-widest uppercase">
              Sobre Mí
            </span>

            {/* Heading */}
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight uppercase tracking-tight">
              Tu Entrenador,<br />
              <span className="text-[#f97316]">Tu Aliado</span>
            </h2>

            {/* Bio */}
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Soy Joaquín Verón, entrenador personal certificado con más de 5 años de experiencia
              transformando cuerpos y mentes. Mi metodología combina ciencia del deporte, nutrición
              y mentalidad para llevar a mis clientes al siguiente nivel.
            </p>
            <p className="text-gray-400 text-base leading-relaxed">
              Creo que cada persona tiene el potencial de superar sus propios límites. Mi misión es
              darte las herramientas, el plan y el acompañamiento para que lo logres.
            </p>

            {/* Feature grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-2">
              {features.map((feat) => (
                <div
                  key={feat.title}
                  className="flex items-start gap-3 bg-[#1a1a1a] border border-white/5 p-4 hover:border-[#f97316]/30 transition-colors duration-200 group"
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
