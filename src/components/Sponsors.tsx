const sponsors = [
  {
    name: "Invictus",
    tagline: "Suplementos deportivos de alta performance",
    description:
      "Invictus es la marca de suplementación que respalda mi rendimiento y el de mis clientes. Calidad comprobada, fórmulas efectivas.",
    url: "https://invictus.ar/",
    badge: "Suplementación",
  },
  {
    name: "Vital Ambition",
    tagline: "Nutrición y bienestar para atletas",
    description:
      "Vital Ambition acompaña el camino de quienes buscan su mejor versión con productos de nutrición y bienestar de primer nivel.",
    url: "https://www.vitalambition.com.ar/",
    badge: "Nutrición",
  },
];

export default function Sponsors() {
  return (
    <section className="bg-[#0a0a0a] py-20 md:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#f97316] text-xs font-semibold tracking-widest uppercase mb-3 block">
            Sponsors
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            MARCAS QUE CONFÍAN EN MÍ
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Trabajo con las mejores marcas del mercado porque mis clientes merecen lo mejor.
          </p>
        </div>

        {/* Sponsor Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-3xl mx-auto">
          {sponsors.map((sponsor) => (
            <a
              key={sponsor.name}
              href={sponsor.url}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col gap-5 bg-[#111111] border border-white/10 p-8 transition-all duration-300 hover:border-[#f97316]/60 hover:bg-[#111111]/80 orange-glow"
            >
              {/* Corner accent */}
              <div className="absolute top-0 left-0 w-12 h-12 border-t-2 border-l-2 border-[#f97316]/40 group-hover:border-[#f97316]/80 transition-colors duration-300" />
              <div className="absolute bottom-0 right-0 w-12 h-12 border-b-2 border-r-2 border-[#f97316]/40 group-hover:border-[#f97316]/80 transition-colors duration-300" />

              {/* Badge */}
              <span className="self-start text-[#f97316] text-xs font-semibold tracking-widest uppercase border border-[#f97316]/30 px-3 py-1">
                {sponsor.badge}
              </span>

              {/* Name */}
              <h3 className="text-3xl sm:text-4xl font-black text-white tracking-tight group-hover:text-[#f97316] transition-colors duration-200">
                {sponsor.name}
              </h3>

              {/* Tagline */}
              <p className="text-[#f97316] text-sm font-semibold">{sponsor.tagline}</p>

              {/* Description */}
              <p className="text-gray-400 text-sm leading-relaxed">{sponsor.description}</p>

              {/* Link indicator */}
              <div className="flex items-center gap-2 text-[#f97316] text-xs font-semibold tracking-wider uppercase mt-auto pt-2 border-t border-white/10">
                Visitar sitio
                <svg
                  className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2.5}
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
