const sponsors = [
  {
    name: "Invictus",
    category: "Indumentaria Deportiva",
    tagline: "Gym & StreetWear de alto rendimiento",
    description: "Invictus es la marca de indumentaria que respalda mi rendimiento y el de mis clientes. Diseñada para atletas que buscan estilo y comodidad dentro y fuera del gym.",
    url: "https://invictus.ar/",
    instagramUrl: "https://www.instagram.com/invictusok/",
    instagramHandle: "@invictusok",
    logo: "/logo-invictus.jpg.jpg",
    logoBg: "#0a0a0a",
  },
  {
    name: "Vital Ambition",
    category: "Suplementación",
    tagline: "Suplementación importada y nacional al mejor precio",
    description: "Vital Ambition acompaña el camino de quienes buscan su mejor versión. Para personas ambiciosas que buscan rendir al máximo. EL QUE DUDA, PIERDE.",
    url: "https://www.vitalambition.com.ar/",
    instagramUrl: "https://www.instagram.com/vitalambition.suplementos/",
    instagramHandle: "@vitalambition.suplementos",
    logo: "/logo-vital-ambition.jpg.jpg",
    logoBg: "#b3f000",
  },
];

export default function Sponsors() {
  return (
    <section className="bg-[#0a0a0a] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 md:mb-20">
          <span className="text-[#C6FF00] text-xs font-bold tracking-widest uppercase mb-3 block">
            Sponsors
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wide leading-none">
            MARCAS QUE CONFÍAN EN MÍ
          </h2>
          <p className="text-gray-400 mt-5 text-base sm:text-lg font-light max-w-xl mx-auto leading-relaxed">
            Trabajo con las mejores marcas del mercado. Usá mi código y potenciá tus resultados.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {sponsors.map((sponsor) => (
            <div
              key={sponsor.name}
              className="group bg-[#111111] border border-white/10 rounded-2xl overflow-hidden hover:border-[#C6FF00]/40 transition-all duration-300"
            >
              {/* Logo band */}
              <div
                className="h-44 relative overflow-hidden flex items-center justify-center"
                style={{ background: sponsor.logoBg }}
              >
                <img
                  src={sponsor.logo}
                  alt={`${sponsor.name} logo`}
                  className="h-24 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t from-[#111111] to-transparent" />
              </div>

              <div className="p-8 flex flex-col gap-5">
                <div>
                  <p className="text-[#C6FF00] text-xs font-bold tracking-widest uppercase mb-2">{sponsor.category}</p>
                  <h3 className="font-bebas text-4xl text-white tracking-wide group-hover:text-[#C6FF00] transition-colors duration-200">
                    {sponsor.name}
                  </h3>
                  <p className="text-gray-300 text-sm font-medium mt-1">{sponsor.tagline}</p>
                </div>

                <p className="text-gray-500 text-sm font-light leading-relaxed">{sponsor.description}</p>

                {/* Discount banner */}
                <div className="flex items-center justify-between gap-4 bg-[#0a0a0a] border border-white/10 rounded-xl p-5 flex-wrap">
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-1">Tu código de descuento</p>
                    <p className="font-bebas text-2xl text-[#C6FF00] tracking-widest">JOACOVERON</p>
                    <p className="text-xs text-gray-600 mt-0.5">Descuento especial en toda la tienda</p>
                  </div>
                  <a href={sponsor.url} target="_blank" rel="noopener noreferrer"
                    className="text-xs font-bold bg-[#C6FF00] text-black px-4 py-2.5 rounded-lg hover:bg-[#A8E000] transition-colors whitespace-nowrap">
                    Ver tienda →
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
