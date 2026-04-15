const INSTAGRAM_URL = "https://www.instagram.com/joaacoveron/";

const mockPosts = [
  { label: "Rutina del día 💪", gradient: "linear-gradient(135deg, #1a1a1a 0%, rgba(198,255,0,0.15) 100%)", icon: "🏋️" },
  { label: "Transformación del mes 🔥", gradient: "linear-gradient(135deg, rgba(198,255,0,0.08) 0%, #1a1a1a 100%)", icon: "⚡" },
  { label: "Consejo nutricional 🥗", gradient: "linear-gradient(135deg, #111 0%, rgba(198,255,0,0.12) 50%, #111 100%)", icon: "🥗" },
  { label: "Motivación diaria 🧠", gradient: "linear-gradient(135deg, rgba(198,255,0,0.1) 0%, #1a1a1a 100%)", icon: "🧠" },
];

export default function SocialMedia() {
  return (
    <section className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Big Instagram CTA — entire block is clickable */}
        <a
          href={INSTAGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="block relative overflow-hidden rounded-2xl p-10 sm:p-14 mb-16 cursor-pointer hover:opacity-95 transition-opacity duration-200"
          style={{ background: "linear-gradient(135deg, #C6FF00 0%, #A8E000 100%)" }}
        >
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full opacity-20 pointer-events-none"
            style={{ background: "radial-gradient(circle, white 0%, transparent 70%)", transform: "translate(30%, -30%)" }}
          />

          <div className="relative z-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex flex-col gap-2">
              <span className="text-black/50 text-xs font-bold tracking-widest uppercase">Seguime en Instagram</span>
              <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-black tracking-wide leading-none">
                @joaacoveron
              </h2>
              <p className="text-black/70 text-base font-medium max-w-md">
                Contenido diario de entrenamiento, nutrición, transformaciones y mentalidad ganadora.
              </p>
            </div>

            <div className="flex-shrink-0 flex items-center gap-2 bg-black text-white font-bold text-sm px-6 py-3.5 rounded-xl">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
              </svg>
              Seguir en Instagram
            </div>
          </div>
        </a>

        <h3 className="text-center font-bebas text-3xl sm:text-4xl text-white uppercase tracking-wide mb-10">
          Últimas Publicaciones
        </h3>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {mockPosts.map((post, i) => (
            <a key={i} href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"
              className="group relative aspect-square flex flex-col items-center justify-center gap-3 overflow-hidden border border-white/10 rounded-xl hover:border-[#C6FF00]/50 transition-all duration-300"
              style={{ background: post.gradient }}>
              <div className="absolute inset-0 bg-[#C6FF00]/0 group-hover:bg-[#C6FF00]/8 transition-colors duration-300" />
              <span className="relative z-10 text-4xl">{post.icon}</span>
              <span className="relative z-10 text-white text-xs font-medium text-center px-3">{post.label}</span>
              <span className="relative z-10 text-[#C6FF00] text-xs font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-200">Ver en Instagram →</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
