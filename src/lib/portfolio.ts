export interface PortfolioProject {
  id: string;
  name: string;
  url: string;
  category: string;
  description: string;
  image: string;
  tech: string[];
}

export const PORTFOLIO: PortfolioProject[] = [
  {
    id: "altiusignite",
    name: "Altius Ignite",
    url: "https://www.altiusignite.com",
    category: "SaaS",
    description: "Plataforma de orden operativo y software a medida para empresas en crecimiento.",
    image: "/images/site_altius.png",
    tech: ["Next.js", "React", "TypeScript"],
  },
  {
    id: "suits",
    name: "SuitS LegalTech",
    url: "https://suits.altiusignite.com",
    category: "LegalTech",
    description: "Software jurídico y CRM para abogados en LATAM. Gestión de casos y clientes.",
    image: "/images/site_suits.png",
    tech: ["Next.js", "Supabase", "AI"],
  },
  {
    id: "geimser",
    name: "Geimser",
    url: "https://www.geimser.cl",
    category: "Industrial",
    description: "Sitio corporativo para empresa de manufactura industrial avanzada.",
    image: "/images/site_geimser.png",
    tech: ["WordPress", "Custom Theme"],
  },
  {
    id: "vreyes",
    name: "VR Inmobiliaria",
    url: "https://www.vreyes.cl",
    category: "Inmobiliaria",
    description: "Portal inmobiliario con catálogo de propiedades y sistema de contacto.",
    image: "/images/site_vreyes.png",
    tech: ["Next.js", "Tailwind"],
  },
  {
    id: "paulaguerra",
    name: "Paula Guerra C21",
    url: "https://paulaguerrac21.com",
    category: "Real Estate",
    description: "Sitio personal de agente inmobiliaria Century 21 con propiedades exclusivas.",
    image: "/images/site_paulaguerra.png",
    tech: ["WordPress", "CRM Integration"],
  },
  {
    id: "xel",
    name: "XEL Chile",
    url: "https://www.xel.cl",
    category: "Software Jurídico",
    description: "Software jurídico de élite para firmas que no admiten errores.",
    image: "/images/site_xel.png",
    tech: ["React", "Node.js"],
  },
  {
    id: "deudascero",
    name: "Deudas Cero",
    url: "https://deudascero.cl",
    category: "Legal / Finanzas",
    description: "Estudio de abogados especializado en eliminación de deudas complejas.",
    image: "/images/site_deudascero.png",
    tech: ["Next.js", "Financial APIs"],
  },
  {
    id: "rykopay",
    name: "RykoPay",
    url: "https://rykopay.com",
    category: "Fintech",
    description: "Infraestructura de pagos QR en tiempo real para negocios en Bolivia.",
    image: "/images/site_rykopay.png",
    tech: ["React", "Blockchain", "APIs"],
  },
];
