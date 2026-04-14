"use client";
import { useState } from "react";

const WA_URL = "https://wa.me/5491133910239?text=Hola%20Joaco!%20Me%20interesa%20saber%20m%C3%A1s%20sobre%20los%20planes%20de%20entrenamiento%20%F0%9F%94%A5";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 3000);
  }

  return (
    <section id="contacto" className="bg-[#0a0a0a] py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left: info */}
          <div className="flex flex-col gap-6">
            <span className="text-[#C6FF00] text-xs font-bold tracking-widest uppercase">Contacto</span>
            <h2 className="font-bebas text-6xl sm:text-7xl md:text-8xl text-white tracking-wide leading-none">
              HABLEMOS<br /><span className="text-[#C6FF00]">HOY</span>
            </h2>
            <p className="text-gray-400 text-lg font-light leading-relaxed max-w-sm">
              ¿Listo para empezar tu transformación? Escribime y te cuento cómo podemos trabajar juntos. Sin compromiso.
            </p>
            <div className="flex flex-col gap-4 mt-4">
              {[
                { icon: "📱", label: "WhatsApp", val: "+54 9 11 3391-0239" },
                { icon: "📸", label: "Instagram", val: "@joaacoveron" },
                { icon: "📍", label: "Ubicación", val: "Argentina · Online y Presencial" },
              ].map((item) => (
                <div key={item.label} className="flex items-center gap-4">
                  <div className="w-11 h-11 bg-[#C6FF00] flex items-center justify-center text-lg rounded-xl flex-shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-[10px] font-bold tracking-widest uppercase text-gray-500">{item.label}</p>
                    <p className="text-white font-medium text-sm mt-0.5">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
            <a href={WA_URL} target="_blank" rel="noopener noreferrer"
              className="mt-2 inline-flex items-center gap-3 bg-[#25D366] hover:bg-[#1fb859] text-white font-bold text-base px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 shadow-lg shadow-[#25D366]/25 w-fit">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Escribime por WhatsApp
            </a>
          </div>

          {/* Right: form */}
          <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 sm:p-10">
            <h3 className="font-bebas text-3xl text-white tracking-wide mb-8">DEJAME TU CONSULTA</h3>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Nombre</label>
                  <input type="text" placeholder="Tu nombre" className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-[#C6FF00]/50 transition-colors placeholder:text-gray-700" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Apellido</label>
                  <input type="text" placeholder="Tu apellido" className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-[#C6FF00]/50 transition-colors placeholder:text-gray-700" />
                </div>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Email</label>
                <input type="email" placeholder="tu@email.com" className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-[#C6FF00]/50 transition-colors placeholder:text-gray-700" />
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">¿Qué plan te interesa?</label>
                <select className="w-full bg-[#1a1a1a] border border-white/10 text-gray-300 text-sm px-4 py-3 rounded-xl outline-none focus:border-[#C6FF00]/50 transition-colors">
                  <option value="">Seleccioná un plan</option>
                  <option>Plan Base – Asesoría Online</option>
                  <option>Asesoría Online Personalizada</option>
                  <option>Asesoría Online Premium</option>
                  <option>No sé, quiero asesoramiento</option>
                </select>
              </div>
              <div>
                <label className="block text-[10px] font-bold tracking-widest uppercase text-gray-500 mb-2">Tu objetivo</label>
                <textarea placeholder="¿Qué querés lograr? Bajar de peso, ganar masa muscular..." rows={3}
                  className="w-full bg-[#1a1a1a] border border-white/10 text-white text-sm px-4 py-3 rounded-xl outline-none focus:border-[#C6FF00]/50 transition-colors placeholder:text-gray-700 resize-none" />
              </div>
              <button type="submit"
                className={`w-full py-4 font-bold text-sm rounded-xl transition-all duration-200 hover:scale-[1.02] ${
                  submitted ? "bg-[#25D366] text-white" : "bg-[#C6FF00] text-black hover:bg-[#A8E000]"
                }`}>
                {submitted ? "✓ ¡Consulta enviada!" : "Enviar consulta →"}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
