type Plan = {
  name: string;
  price: string;
  period: string;
  popular: boolean;
  features: string[];
  waLink: string;
  cta: string;
};

const plans: Plan[] = [
  {
    name: "Online",
    price: "$XX.XXX",
    period: "/mes",
    popular: false,
    cta: "Elegir Plan Online",
    waLink:
      "https://wa.me/5491133910239?text=Hola%20Joaco!%20Me%20interesa%20el%20Plan%20Online.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.",
    features: [
      "Rutina mensual personalizada",
      "Seguimiento por WhatsApp",
      "Ajustes quincenales",
      "Acceso a base de ejercicios",
      "1 videollamada inicial",
    ],
  },
  {
    name: "Presencial",
    price: "$XX.XXX",
    period: "/mes",
    popular: true,
    cta: "Elegir Plan Presencial",
    waLink:
      "https://wa.me/5491133910239?text=Hola%20Joaco!%20Me%20interesa%20el%20Plan%20Presencial.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.",
    features: [
      "Todo lo del Plan Online",
      "Sesiones presenciales grupales",
      "Corrección de técnica en vivo",
      "Plan nutricional básico",
      "Seguimiento semanal de progreso",
      "Soporte prioritario",
    ],
  },
  {
    name: "1 a 1",
    price: "$XX.XXX",
    period: "/sesión",
    popular: false,
    cta: "Elegir Plan 1 a 1",
    waLink:
      "https://wa.me/5491133910239?text=Hola%20Joaco!%20Me%20interesa%20el%20Plan%201%20a%201.%20Quisiera%20m%C3%A1s%20informaci%C3%B3n.",
    features: [
      "Sesiones privadas con Joaco",
      "Corrección de técnica en vivo",
      "Rutina 100% adaptada",
      "Seguimiento nutricional completo",
      "Disponibilidad horaria flexible",
    ],
  },
];

function CheckIcon() {
  return (
    <span className="w-5 h-5 rounded-full bg-[#C6FF00] flex items-center justify-center flex-shrink-0 mt-0.5">
      <svg
        className="w-3 h-3 text-black"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        strokeWidth={3.5}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
      </svg>
    </span>
  );
}

export default function Plans() {
  return (
    <section id="planes" className="bg-[#0a0a0a] py-24 md:py-32 scroll-mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <span className="text-[#C6FF00] text-xs font-bold tracking-widest uppercase mb-3 block">
            Inversión en ti
          </span>
          <h2 className="font-bebas text-5xl sm:text-6xl md:text-7xl text-white uppercase tracking-wide leading-none">
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
              className={`relative flex flex-col transition-all duration-300 hover:-translate-y-1 rounded-2xl overflow-hidden border p-10 ${
                plan.popular
                  ? "bg-[#111111] border-[#C6FF00]/40 shadow-xl shadow-[#C6FF00]/10 scale-[1.02] md:scale-[1.04]"
                  : "border-white/10 bg-[#111111] hover:border-[#C6FF00]/20"
              }`}
            >
              {/* Top colored bar */}
              <div
                className={`absolute top-0 left-0 right-0 h-1 ${
                  plan.popular ? "bg-[#C6FF00]" : "bg-white/10"
                }`}
              />

              {/* Popular badge */}
              {plan.popular && (
                <div className="absolute top-4 right-4">
                  <span className="bg-[#C6FF00] text-black font-black text-xs px-3 py-1 tracking-wider uppercase whitespace-nowrap rounded-full">
                    Más Popular
                  </span>
                </div>
              )}

              {/* Plan name & price */}
              <div className="mb-6">
                <h3 className="font-bebas text-white text-3xl tracking-wide mb-3">
                  {plan.name}
                </h3>
                <div className="flex items-end gap-1">
                  <span
                    className={`font-bebas text-5xl tracking-wide ${
                      plan.popular ? "text-[#C6FF00]" : "text-white"
                    }`}
                  >
                    {plan.price}
                  </span>
                  <span className="text-gray-400 text-sm mb-1.5 font-medium">{plan.period}</span>
                </div>
              </div>

              {/* Divider */}
              <div className={`h-px mb-6 ${plan.popular ? "bg-[#C6FF00]/20" : "bg-white/10"}`} />

              {/* Features */}
              <ul className="flex flex-col gap-3 flex-1 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
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
                className={`mt-auto flex items-center justify-center font-bold text-sm px-6 py-4 rounded-xl transition-all duration-200 hover:scale-105 ${
                  plan.popular
                    ? "bg-[#C6FF00] hover:bg-[#A8E000] text-black hover:shadow-lg hover:shadow-[#C6FF00]/30"
                    : "border border-[#C6FF00]/40 text-[#C6FF00] hover:bg-[#C6FF00]/10 hover:border-[#C6FF00]"
                }`}
              >
                {plan.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Note */}
        <p className="text-center text-gray-500 text-sm mt-10">
          ¿Tenés dudas? Escribime y te ayudo a elegir el plan ideal.{" "}
          <a
            href="https://wa.me/5491133910239"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#C6FF00] hover:underline font-medium"
          >
            Contactar ahora →
          </a>
        </p>
      </div>
    </section>
  );
}
