"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CursorArrowRaysIcon, RocketIcon, ChartBarIcon, UsersIcon } from "@/components/icons";

const benefits = [
  {
    icon: CursorArrowRaysIcon,
    title: "Captura leads 24/7",
    description: "Formularios inteligentes que convierten visitantes en oportunidades de venta automáticamente.",
    stat: "3x más conversiones",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: RocketIcon,
    title: "Automatiza tu operación",
    description: "Respuestas automáticas, notificaciones y flujos de trabajo que funcionan sin ti.",
    stat: "80% menos tareas manuales",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: ChartBarIcon,
    title: "Mide lo que importa",
    description: "Métricas claras de visitas, conversiones y rendimiento de tu sitio en tiempo real.",
    stat: "Dashboard incluido",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: UsersIcon,
    title: "Escala tu negocio",
    description: "Infraestructura lista para crecer contigo sin límites de tráfico o funcionalidad.",
    stat: "Crece sin preocuparte",
    gradient: "from-amber-500 to-orange-600",
  },
];

export function Benefits() {
  return (
    <section className="relative overflow-hidden py-24 sm:py-32">
      {/* Background */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
        <motion.div
          animate={{ opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
          className="absolute left-1/4 top-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-violet-600/20 blur-[120px]"
        />
      </div>

      <Container className="relative">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-2xl text-center"
        >
          <Badge className="gap-2 border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456z" />
            </svg>
            Tu operación digital
          </Badge>
          <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl">
            Todo lo que necesitas para{" "}
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              vender más
            </span>
          </h2>
          <p className="mt-5 text-lg text-zinc-400">
            No es solo un sitio web. Es tu sistema de ventas que trabaja mientras duermes.
          </p>
        </motion.div>

        {/* Benefits grid */}
        <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {benefits.map((benefit, i) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
              whileHover={{ scale: 1.02, y: -5 }}
              className="group relative overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/50 p-8 backdrop-blur transition-all duration-300 hover:border-white/20"
            >
              {/* Glow effect */}
              <div className={`pointer-events-none absolute -inset-px rounded-3xl bg-gradient-to-br ${benefit.gradient} opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-30`} />

              <div className="relative">
                {/* Icon */}
                <div className={`inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br ${benefit.gradient} shadow-lg`}>
                  <benefit.icon className="h-7 w-7 text-white" />
                </div>

                {/* Content */}
                <h3 className="mt-5 text-xl font-bold text-white">{benefit.title}</h3>
                <p className="mt-2 text-base leading-relaxed text-zinc-400">{benefit.description}</p>

                {/* Stat badge */}
                <div className="mt-5">
                  <span className={`inline-flex items-center gap-2 rounded-full bg-gradient-to-r ${benefit.gradient} px-4 py-2 text-sm font-semibold text-white shadow-lg`}>
                    <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.456 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.65l-4.752-.382-1.831-4.401z" clipRule="evenodd" />
                    </svg>
                    {benefit.stat}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </section>
  );
}
