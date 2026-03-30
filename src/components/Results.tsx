const transformations = [
  { name: "Martín G.", change: "-15kg en 3 meses", period: "Enero – Abril 2024" },
  { name: "Laura P.", change: "+8kg músculo en 4 meses", period: "Marzo – Julio 2024" },
  { name: "Diego R.", change: "-20kg en 5 meses", period: "Agosto – Dic 2024" },
  { name: "Sofía M.", change: "-12kg en 3 meses", period: "Oct 2024 – Ene 2025" },
];

const testimonials = [
  {
    text: "Joaquín cambió mi vida. En 3 meses logré resultados que en años de gimnasio solo nunca alcancé. Su método es serio, efectivo y siempre está disponible cuando lo necesitás.",
    name: "Martín G.",
    city: "Buenos Aires",
    stars: 5,
  },
  {
    text: "Super profesional y comprometido. Me diseñó un plan adaptado a mis horarios y objetivos. El seguimiento semanal me mantuvo motivada todo el tiempo. 100% recomendado.",
    name: "Laura P.",
    city: "Córdoba",
    stars: 5,
  },
  {
    text: "Llegué sin saber nada de entrenamiento y hoy soy otra persona. Joaquín no solo te entrena, te enseña a entender tu cuerpo y a disfrutar el proceso. Increíble.",
    name: "Diego R.",
    city: "Rosario",
    stars: 5,
  },
];

function StarRating({ count }: { count: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} className="w-4 h-4 text-[#f97316]" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
        </svg>
      ))}
    </div>
  );
}

export default function Results() {
  return (
    <section id="resultados" className="bg-[#111111] py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#f97316] text-xs font-semibold tracking-widest uppercase mb-3 block">
            Transformaciones
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            RESULTADOS REALES
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Personas reales, resultados comprobados. Esto es lo que pasa cuando la dedicación
            se encuentra con el método correcto.
          </p>
        </div>

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-16">
          {transformations.map((item) => (
            <div
              key={item.name}
              className="border border-white/10 bg-[#1a1a1a] overflow-hidden hover:border-[#f97316]/30 transition-colors duration-200 group"
            >
              {/* Split Image */}
              <div className="flex h-48 sm:h-56">
                {/* ANTES */}
                <div className="flex-1 flex flex-col items-center justify-center gap-2 bg-[#2a2a2a] relative overflow-hidden">
                  <div
                    className="absolute inset-0 opacity-30"
                    style={{
                      background: "linear-gradient(180deg, #333 0%, #1a1a1a 100%)",
                    }}
                  />
                  <span className="relative z-10 text-gray-400 text-xs font-black tracking-widest uppercase border border-gray-600 px-3 py-1">
                    ANTES
                  </span>
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#333] flex items-center justify-center">
                    <span className="text-gray-500 text-2xl">👤</span>
                  </div>
                </div>
                {/* Divider */}
                <div className="w-0.5 bg-[#f97316]/60" />
                {/* DESPUÉS */}
                <div
                  className="flex-1 flex flex-col items-center justify-center gap-2 relative overflow-hidden"
                  style={{
                    background: "linear-gradient(180deg, rgba(249,115,22,0.15) 0%, rgba(249,115,22,0.05) 100%)",
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: "radial-gradient(circle at center, rgba(249,115,22,0.3) 0%, transparent 70%)",
                    }}
                  />
                  <span className="relative z-10 text-[#f97316] text-xs font-black tracking-widest uppercase border border-[#f97316]/50 px-3 py-1">
                    DESPUÉS
                  </span>
                  <div className="relative z-10 w-16 h-16 rounded-full bg-[#f97316]/20 border-2 border-[#f97316]/40 flex items-center justify-center">
                    <span className="text-2xl">💪</span>
                  </div>
                </div>
              </div>
              {/* Info */}
              <div className="p-4 flex items-center justify-between">
                <div>
                  <p className="text-white font-semibold text-sm">{item.name}</p>
                  <p className="text-gray-500 text-xs">{item.period}</p>
                </div>
                <span className="text-[#f97316] font-black text-sm bg-[#f97316]/10 border border-[#f97316]/20 px-3 py-1">
                  {item.change}
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div>
          <h3 className="text-center text-xl sm:text-2xl font-black text-white uppercase tracking-tight mb-8">
            Lo Que Dicen Mis Clientes
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {testimonials.map((t) => (
              <div
                key={t.name}
                className="bg-[#1a1a1a] border border-white/10 p-6 flex flex-col gap-4 hover:border-[#f97316]/30 transition-colors duration-200"
              >
                {/* Quote icon */}
                <div className="text-[#f97316] text-4xl font-black leading-none select-none">"</div>
                {/* Text */}
                <p className="text-gray-300 text-sm leading-relaxed flex-1">{t.text}</p>
                {/* Footer */}
                <div className="pt-4 border-t border-white/10 flex items-center justify-between">
                  <div>
                    <p className="text-white font-semibold text-sm">{t.name}</p>
                    <p className="text-gray-500 text-xs">{t.city}</p>
                  </div>
                  <StarRating count={t.stars} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
