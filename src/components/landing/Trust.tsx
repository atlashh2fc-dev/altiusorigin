"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ServerIcon, ShieldCheckIcon, PencilSquareIcon, HandThumbUpIcon, UsersIcon, CubeIcon } from "@/components/icons";
import type { ComponentType } from "react";

type IconProps = { className?: string };

interface TrustItem {
  Icon: ComponentType<IconProps>;
  t: string;
  d: string;
  gradient: string;
}

const items: TrustItem[] = [
  {
    Icon: ServerIcon,
    t: "Hosting cloud",
    d: "Rendimiento estable y escalable.",
    gradient: "from-cyan-500 to-blue-600"
  },
  {
    Icon: ShieldCheckIcon,
    t: "SSL + seguridad",
    d: "HTTPS, buenas prácticas y base sólida.",
    gradient: "from-emerald-500 to-green-600"
  },
  {
    Icon: PencilSquareIcon,
    t: "Autoadministrable",
    d: "Tu equipo puede actualizar sin fricción.",
    gradient: "from-amber-500 to-orange-600"
  },
  {
    Icon: HandThumbUpIcon,
    t: "Soporte humano",
    d: "Acompañamiento y mejoras por iteración.",
    gradient: "from-violet-500 to-purple-600"
  },
];

interface Testimonial {
  q: string;
  a: string;
  Icon: ComponentType<IconProps>;
  gradient: string;
}

const testimonials: Testimonial[] = [
  {
    q: "\"Pasamos de 'tener una web' a tener un flujo de consultas claro. Ahora sabemos qué funciona y qué no.\"",
    a: "Equipo de servicios profesionales",
    Icon: UsersIcon,
    gradient: "from-violet-500 to-purple-600",
  },
  {
    q: "\"La diferencia fue la estructura: CTAs, formularios y métricas desde el día 1. Se siente como un sistema.\"",
    a: "Negocio local + campañas",
    Icon: ChartBarIcon,
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    q: "\"La experiencia premium nos ayudó a subir ticket y cerrar más rápido. Se nota en la confianza.\"",
    a: "Marca B2B",
    Icon: CubeIcon,
    gradient: "from-emerald-500 to-teal-600",
  },
];

// Import ChartBarIcon separately since we use it in testimonials
import { ChartBarIcon } from "@/components/icons";

export function Trust() {
  return (
    <section className="relative overflow-hidden">
      {/* Section separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent" />

      <Container className="py-20 sm:py-28">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-end lg:justify-between">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Badge className="gap-2 border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
              <ShieldCheckIcon className="h-4 w-4" />
              Confianza
            </Badge>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
              Estándar premium,{" "}
              <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                sin fricción.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-300">
              Diseño y arquitectura pensados para convertir hoy y escalar mañana. Lo esencial,
              incluido.
            </p>
          </motion.div>
        </div>

        {/* Trust items grid */}
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, idx) => (
            <motion.div
              key={it.t}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ y: -6, scale: 1.02 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02] p-6 backdrop-blur transition-all hover:border-cyan-300/30"
            >
              {/* Icon with gradient */}
              <div className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${it.gradient} shadow-lg`}>
                <it.Icon className="h-6 w-6 text-white" />
              </div>
              <div className="text-base font-semibold text-white group-hover:text-cyan-200 transition-colors">
                {it.t}
              </div>
              <div className="mt-2 text-sm leading-7 text-zinc-400">{it.d}</div>

              {/* Hover glow */}
              <div className={`pointer-events-none absolute -bottom-12 -right-12 h-24 w-24 rounded-full bg-gradient-to-br ${it.gradient} opacity-0 blur-3xl transition-opacity group-hover:opacity-40`} />
            </motion.div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {testimonials.map((t, idx) => (
            <motion.figure
              key={t.a}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-10%" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -6 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.06] to-transparent p-8 backdrop-blur transition-all hover:border-violet-400/30"
            >
              {/* Quote icon */}
              <div className="absolute -right-2 -top-2 text-7xl leading-none text-violet-500/10 font-serif">"</div>

              <blockquote className="relative text-pretty text-base leading-7 text-zinc-200">
                {t.q}
              </blockquote>

              <figcaption className="mt-6 flex items-center gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${t.gradient} shadow-lg`}>
                  <t.Icon className="h-6 w-6 text-white" />
                </div>
                <div className="text-sm font-medium text-zinc-300">{t.a}</div>
              </figcaption>

              {/* Hover glow */}
              <div className="pointer-events-none absolute -bottom-12 -left-12 h-32 w-32 rounded-full bg-violet-500/20 opacity-0 blur-3xl transition-opacity group-hover:opacity-100" />
            </motion.figure>
          ))}
        </div>
      </Container>
    </section>
  );
}
