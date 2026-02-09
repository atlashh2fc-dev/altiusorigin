export type OrigenPlanId = "starter" | "growth" | "pro";

export type OrigenPlan = {
  id: OrigenPlanId;
  name: string;
  priceUsdMonthly: string;
  priceClpMonthly: string;
  priceBsMonthly: string;
  highlight?: boolean;
  tagline: string;
  bullets: string[];
};

export const ORIGEN = {
  domain: "origen.altiusignite.com",
  brand: "Origen",
  company: "Altius Ignite",
  hero: {
    title: "No necesitas solo una web. Necesitas una operación digital.",
    subtitle:
      "Construimos plataformas listas para generar contactos, ventas y datos desde el primer día.",
    primaryCta: { label: "Ver Planes", href: "#planes" },
    secondaryCta: { label: "Agendar Diagnóstico", href: "#diagnostico" },
  },
  plans: [
    {
      id: "starter",
      name: "Starter",
      priceUsdMonthly: "19,99",
      priceClpMonthly: "17.991",
      priceBsMonthly: "137,93",
      tagline: "Presencia sólida, lista para operar.",
      bullets: [
        "Hasta 5 páginas",
        "Responsive",
        "Hosting cloud",
        "SSL",
        "Correos",
        "Botón WhatsApp",
        "Autoadministrable",
      ],
    },
    {
      id: "growth",
      name: "Growth",
      priceUsdMonthly: "24,99",
      priceClpMonthly: "22.491",
      priceBsMonthly: "172,43",
      highlight: true,
      tagline: "Escala contenido, SEO y soporte.",
      bullets: [
        "Todo Starter",
        "Dominio 1 año",
        "Blog",
        "Chat",
        "SEO base",
        "Soporte prioritario",
      ],
    },
    {
      id: "pro",
      name: "Pro",
      priceUsdMonthly: "34,99",
      priceClpMonthly: "31.491",
      priceBsMonthly: "241,43",
      tagline: "Automatización + CRM + métricas.",
      bullets: [
        "Todo Growth",
        "Automatización de leads",
        "Integración con CRM",
        "Dashboard de métricas",
        "Configuración de funnels",
      ],
    },
  ] satisfies OrigenPlan[],
  oneTime: {
    priceUsd: "299,99",
    priceClp: "269.991",
    priceBs: "2.069,93",
    includes: [
      "Diseño + desarrollo",
      "Deploy y configuración",
      "Capacitación",
      "Hosting + SSL 1 año",
      "Email corporativo",
    ],
  },
  comparison: {
    features: [
      { key: "pags", label: "Páginas", starter: "Hasta 5", growth: "Hasta 8", pro: "Hasta 12" },
      { key: "responsive", label: "Responsive", starter: true, growth: true, pro: true },
      { key: "hosting", label: "Hosting cloud", starter: true, growth: true, pro: true },
      { key: "ssl", label: "SSL (HTTPS)", starter: true, growth: true, pro: true },
      { key: "mail", label: "Correos corporativos", starter: true, growth: true, pro: true },
      { key: "wa", label: "Botón WhatsApp", starter: true, growth: true, pro: true },
      { key: "cms", label: "Autoadministrable", starter: true, growth: true, pro: true },
      { key: "domain", label: "Dominio 1 año", starter: false, growth: true, pro: true },
      { key: "blog", label: "Blog", starter: false, growth: true, pro: true },
      { key: "chat", label: "Chat", starter: false, growth: true, pro: true },
      { key: "seo", label: "SEO base", starter: false, growth: true, pro: true },
      { key: "support", label: "Soporte prioritario", starter: false, growth: true, pro: true },
      { key: "auto", label: "Automatización de leads", starter: false, growth: false, pro: true },
      { key: "crm", label: "Integración CRM", starter: false, growth: false, pro: true },
      { key: "dash", label: "Dashboard de métricas", starter: false, growth: false, pro: true },
      { key: "funnels", label: "Funnels (configuración)", starter: false, growth: false, pro: true },
    ],
  },
  faq: [
    {
      q: "¿Qué significa “operación digital” en la práctica?",
      a: "Una web que no solo “se ve bien”: capta leads, los ordena, automatiza respuestas y mide resultados para que puedas optimizar.",
    },
    {
      q: "¿Puedo administrar el contenido sin depender de ustedes?",
      a: "Sí. Te entregamos una plataforma autoadministrable con capacitación para que edites textos, imágenes y secciones cuando lo necesites.",
    },
    {
      q: "¿Incluye hosting, SSL y correo corporativo?",
      a: "Sí. Todos los planes incluyen hosting cloud, SSL y cuentas de correo. En Growth/Pro se suma dominio 1 año.",
    },
    {
      q: "¿En cuánto tiempo está lista?",
      a: "Depende del alcance y del material disponible, pero el enfoque es salir rápido con una versión lista para vender y luego iterar.",
    },
    {
      q: "¿Puedo pasarme de plan más adelante?",
      a: "Sí. Puedes partir con Starter y evolucionar a Growth/Pro cuando quieras, sin rehacer desde cero.",
    },
    {
      q: "¿Cómo capturan los leads y las métricas?",
      a: "Configuramos formularios, eventos y paneles. En Pro integramos automatización, CRM y un dashboard con indicadores clave.",
    },
  ],
} as const;

