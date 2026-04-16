export default function BrandPage() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen font-sans">

      {/* ── SLIDE 1 — Portada ───────────────────────────────────────────── */}
      <div className="w-full aspect-square max-w-[1080px] mx-auto flex flex-col items-center justify-center bg-[#0a0a0a] border-b border-white/5 px-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_#C6FF0015_0%,_transparent_70%)]" />
        <span className="text-[#C6FF00] text-xs font-bold tracking-[0.4em] uppercase mb-6 z-10">Identidad de Marca</span>
        <h1 className="font-bebas text-[11rem] text-white leading-none tracking-wide text-center z-10">
          JOACO<span className="text-[#C6FF00]">.</span><br />VERÓN
        </h1>
        <p className="text-gray-400 text-lg tracking-widest uppercase mt-4 z-10">Personal Trainer · Asesoría Online</p>
        <div className="absolute bottom-12 left-0 right-0 flex justify-center gap-3 z-10">
          <div className="w-2 h-2 rounded-full bg-[#C6FF00]" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
          <div className="w-2 h-2 rounded-full bg-white/20" />
        </div>
      </div>

      {/* ── SLIDE 2 — Paleta de colores ─────────────────────────────────── */}
      <div className="w-full aspect-square max-w-[1080px] mx-auto flex flex-col justify-center bg-[#0a0a0a] border-b border-white/5 px-16">
        <span className="text-[#C6FF00] text-xs font-bold tracking-[0.4em] uppercase mb-3">02 / 05</span>
        <h2 className="font-bebas text-7xl text-white tracking-wide mb-12">PALETA DE COLORES</h2>
        <div className="grid grid-cols-2 gap-5">
          {/* Lima */}
          <div className="flex flex-col gap-3">
            <div className="h-36 rounded-2xl bg-[#C6FF00] flex items-end p-5">
              <span className="font-bebas text-black text-2xl tracking-widest">PRIMARIO</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white font-bold text-sm">#C6FF00</span>
              <span className="text-gray-500 text-xs">Lime / Neon Green</span>
            </div>
          </div>
          {/* Negro */}
          <div className="flex flex-col gap-3">
            <div className="h-36 rounded-2xl bg-[#111111] border border-white/10 flex items-end p-5">
              <span className="font-bebas text-white text-2xl tracking-widest">FONDO</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white font-bold text-sm">#111111</span>
              <span className="text-gray-500 text-xs">Dark Surface</span>
            </div>
          </div>
          {/* Blanco */}
          <div className="flex flex-col gap-3">
            <div className="h-24 rounded-2xl bg-white flex items-end p-5">
              <span className="font-bebas text-black text-xl tracking-widest">TEXTO PRINCIPAL</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white font-bold text-sm">#FFFFFF</span>
              <span className="text-gray-500 text-xs">White</span>
            </div>
          </div>
          {/* Gris */}
          <div className="flex flex-col gap-3">
            <div className="h-24 rounded-2xl bg-[#6B7280] flex items-end p-5">
              <span className="font-bebas text-white text-xl tracking-widest">TEXTO SECUNDARIO</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-white font-bold text-sm">#6B7280</span>
              <span className="text-gray-500 text-xs">Gray 500</span>
            </div>
          </div>
        </div>
      </div>

      {/* ── SLIDE 3 — Tipografía ────────────────────────────────────────── */}
      <div className="w-full aspect-square max-w-[1080px] mx-auto flex flex-col justify-center bg-[#0a0a0a] border-b border-white/5 px-16">
        <span className="text-[#C6FF00] text-xs font-bold tracking-[0.4em] uppercase mb-3">03 / 05</span>
        <h2 className="font-bebas text-7xl text-white tracking-wide mb-10">TIPOGRAFÍA</h2>

        <div className="flex flex-col gap-8">
          {/* Bebas Neue */}
          <div className="border border-white/10 rounded-2xl p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="text-gray-500 text-xs tracking-widest uppercase">Display / Headings</span>
              <span className="text-[#C6FF00] text-xs font-bold">Bebas Neue</span>
            </div>
            <p className="font-bebas text-7xl text-white leading-none tracking-wide">Aa Bb Cc</p>
            <p className="font-bebas text-3xl text-gray-400 mt-3 tracking-widest">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
            <p className="font-bebas text-2xl text-gray-600 mt-1 tracking-widest">0123456789</p>
          </div>

          {/* Sans-serif */}
          <div className="border border-white/10 rounded-2xl p-8">
            <div className="flex justify-between items-start mb-4">
              <span className="text-gray-500 text-xs tracking-widest uppercase">Body / UI</span>
              <span className="text-[#C6FF00] text-xs font-bold">Inter / System Sans</span>
            </div>
            <p className="text-white text-4xl font-bold leading-tight">Entrenamiento y nutrición<br />personalizada.</p>
            <p className="text-gray-400 text-base mt-3 font-light leading-relaxed">
              Regular · Semibold · Bold · Light disponibles para jerarquía visual en cuerpo de texto, etiquetas y UI.
            </p>
          </div>
        </div>
      </div>

      {/* ── SLIDE 4 — Proceso de creación ───────────────────────────────── */}
      <div className="w-full aspect-square max-w-[1080px] mx-auto flex flex-col justify-center bg-[#0a0a0a] border-b border-white/5 px-16">
        <span className="text-[#C6FF00] text-xs font-bold tracking-[0.4em] uppercase mb-3">04 / 05</span>
        <h2 className="font-bebas text-7xl text-white tracking-wide mb-10">PROCESO</h2>

        <div className="flex flex-col gap-4">
          {[
            { n: "01", title: "Brief & Objetivos", desc: "Definición de público, tono de marca, secciones clave y conversión." },
            { n: "02", title: "Identidad Visual", desc: "Paleta de color, tipografía, logo y sistema de diseño coherente." },
            { n: "03", title: "Diseño & Prototipo", desc: "Wireframes, composición hero, secciones y experiencia mobile-first." },
            { n: "04", title: "Desarrollo", desc: "Next.js 14 · TypeScript · Tailwind CSS 4 · Deploy en Vercel." },
            { n: "05", title: "Lanzamiento", desc: "Optimización SEO, performance y dominio personalizado." },
          ].map((step) => (
            <div key={step.n} className="flex items-center gap-5">
              <span className="font-bebas text-[#C6FF00] text-4xl w-12 flex-shrink-0">{step.n}</span>
              <div className="flex-1 border-b border-white/10 pb-3">
                <p className="text-white font-bold text-sm">{step.title}</p>
                <p className="text-gray-500 text-xs mt-0.5 leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── SLIDE 5 — Stack técnico ──────────────────────────────────────── */}
      <div className="w-full aspect-square max-w-[1080px] mx-auto flex flex-col justify-center bg-[#0a0a0a] px-16">
        <span className="text-[#C6FF00] text-xs font-bold tracking-[0.4em] uppercase mb-3">05 / 05</span>
        <h2 className="font-bebas text-7xl text-white tracking-wide mb-10">STACK TÉCNICO</h2>

        <div className="grid grid-cols-2 gap-4 mb-10">
          {[
            { tech: "Next.js 14", role: "Framework · App Router" },
            { tech: "TypeScript", role: "Tipado estático" },
            { tech: "Tailwind CSS 4", role: "Estilos utilitarios" },
            { tech: "Vercel", role: "Deploy & CDN" },
            { tech: "Sharp", role: "Procesamiento de imágenes" },
            { tech: "WhatsApp API", role: "Conversión directa" },
          ].map((item) => (
            <div key={item.tech} className="flex items-center gap-3 bg-[#111111] border border-white/5 rounded-xl px-5 py-4">
              <div className="w-2 h-2 rounded-full bg-[#C6FF00] flex-shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">{item.tech}</p>
                <p className="text-gray-500 text-xs">{item.role}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="border border-[#C6FF00]/20 rounded-2xl p-6 bg-[#C6FF00]/5">
          <p className="font-bebas text-3xl text-[#C6FF00] tracking-wide mb-1">@joaacoveron</p>
          <p className="text-gray-400 text-sm">Asesoría online · Entrenamiento · Nutrición</p>
        </div>
      </div>

    </div>
  );
}
