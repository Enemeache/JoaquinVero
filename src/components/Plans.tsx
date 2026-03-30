type Plan = {
  name: string;
  price: string;
  popular: boolean;
  features: string[];
  waLink: string;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Plan Básico",
    price: "$25.000",
    popular: false,
    cta: "Elegir Plan Básico",
    waLink:
      "https://wa.me/5491133910239?text=Hola%20Joaqu%C3%ADn!%20Me%20interesa%20el%20Plan%20B%C3%A1sico%20(%2425.000%2Fmes).%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.",
    features: [
      "Rutina de entrenamiento mensual",
      "1 ajuste de rutina al mes",
      "Acceso a grupo de WhatsApp",
      "Soporte por WhatsApp (lun-vie)",
    ],
  },
  {
    name: "Plan Intermedio",
    price: "$45.000",
    popular: true,
    cta: "Elegir Plan Intermedio",
    waLink:
      "https://wa.me/5491133910239?text=Hola%20Joaqu%C3%ADn!%20Me%20interesa%20el%20Plan%20Intermedio%20(%2445.000%2Fmes).%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.",
    features: [
      "Todo lo del Plan Básico",
      "Rutinas semanales personalizadas",
      "Guía nutricional base",
      "2 videollamadas mensuales",
      "Seguimiento semanal de progreso",
    ],
  },
  {
    name: "Plan Premium",
    price: "$75.000",
    popular: false,
    cta: "Elegir Plan Premium",
    waLink:
      "https://wa.me/5491133910239?text=Hola%20Joaqu%C3%ADn!%20Me%20interesa%20el%20Plan%20Premium%20(%2475.000%2Fmes).%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.",
    features: [
      "Todo lo del Plan Intermedio",
      "Entrenamiento 100% personalizado",
      "Plan nutricional completo",
      "Videollamadas ilimitadas",
      "Seguimiento diario",
      "Acceso prioritario 24/7",
    ],
  },
];

function CheckIcon() {
  return (
    <svg
      className="w-4 h-4 text-[#f97316] flex-shrink-0 mt-0.5"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      strokeWidth={3}
    >
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

export default function Plans() {
  return (
    <section id="planes" className="bg-[#0a0a0a] py-20 md:py-28 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#f97316] text-xs font-semibold tracking-widest uppercase mb-3 block">
            Inversión en ti
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white uppercase tracking-tight">
            ELIGE TU PLAN
          </h2>
          <p className="text-gray-400 mt-4 text-base sm:text-lg max-w-xl mx-auto">
            Planes diseñados para cada etapa de tu camino. Sin contratos, sin sorpresas.
          </p>
        </div>

        {/* Plans Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative flex flex-col transition-all duration-300 hover:-translate-y-1 ${
                plan.popular
                  ? "border-2 border-[#f97316] bg-[#1a1a1a] shadow-xl shadow-[#f97316]/20 scale-[1.02] md:scale-[1.04]"
                  : "border border-white/10 bg-[#111111] hover:border-[#f97316]/40"
              }`}
            >
              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-10">
                  <span className="bg-[#f97316] text-black font-black text-xs px-4 py-1.5 tracking-wider uppercase whitespace-nowrap">
                    Más Popular
                  </span>
                </div>
              )}

              <div className="p-6 sm:p-8 flex flex-col flex-1 gap-6">
                {/* Plan name & price */}
                <div>
                  <h3 className="text-white font-bold text-xl mb-3">{plan.name}</h3>
                  <div className="flex items-end gap-1">
                    <span
                      className={`text-4xl font-black ${
                        plan.popular ? "text-[#f97316]" : "text-white"
                      }`}
                    >
                      {plan.price}
                    </span>
                    <span className="text-gray-400 text-sm mb-1.5 font-medium">/mes</span>
                  </div>
                </div>

                {/* Divider */}
                <div className={`h-px ${plan.popular ? "bg-[#f97316]/30" : "bg-white/10"}`} />

                {/* Features */}
                <ul className="flex flex-col gap-3 flex-1">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-start gap-2.5">
                      <CheckIcon />
                      <span className="text-gray-300 text-sm leading-relaxed">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <a
                  href={plan.waLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`mt-auto flex items-center justify-center font-bold text-sm px-6 py-3.5 transition-all duration-200 hover:scale-105 ${
                    plan.popular
                      ? "bg-[#f97316] hover:bg-[#ea6c0a] text-black hover:shadow-lg hover:shadow-[#f97316]/30"
                      : "border border-[#f97316] text-[#f97316] hover:bg-[#f97316]/10"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-sm mt-8">
          ¿Tenés dudas? Escribime y te ayudo a elegir el plan ideal.{" "}
          <a
            href="https://wa.me/5491133910239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#f97316] hover:underline font-medium"
          >
            Contactar ahora →
          </a>
        </p>
      </div>
    </section>
  );
}
