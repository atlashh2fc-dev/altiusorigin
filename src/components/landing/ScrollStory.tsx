"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CursorArrowRaysIcon, PaintBrushIcon, RocketIcon, ClockIcon } from "@/components/icons";
import type { ComponentType } from "react";

type IconProps = { className?: string };

interface Step {
  n: string;
  t: string;
  d: string;
  Icon: ComponentType<IconProps>;
  gradient: string;
  image: string;
}

const steps: Step[] = [
  {
    n: "01",
    t: "Diagnóstico y arquitectura",
    d: "Definimos tu objetivo (leads, cotizaciones o ventas), mensajes, estructura y qué medir.",
    Icon: CursorArrowRaysIcon,
    gradient: "from-violet-500 to-purple-600",
    image: "/images/illustrations/planning.png",
  },
  {
    n: "02",
    t: "Diseño premium orientado a conversión",
    d: "Jerarquía visual, microcopy y CTAs que guían. Sin ruido, sin distracciones.",
    Icon: PaintBrushIcon,
    gradient: "from-cyan-500 to-blue-600",
    image: "/images/illustrations/design.png",
  },
  {
    n: "03",
    t: "Deploy, capacitación e iteración",
    d: "Publicamos, entrenamos a tu equipo y optimizamos con datos. La web se convierte en sistema.",
    Icon: RocketIcon,
    gradient: "from-emerald-500 to-teal-600",
    image: "/images/illustrations/launch.png",
  },
];

export function ScrollStory() {
  return (
    <section className="relative overflow-hidden">
      {/* Animated line connector */}
      <div className="pointer-events-none absolute left-1/2 top-0 h-full w-px -translate-x-1/2 lg:left-[41.666%]">
        <motion.div
          initial={{ scaleY: 0 }}
          whileInView={{ scaleY: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: "easeOut" }}
          className="h-full w-full origin-top bg-gradient-to-b from-violet-500/50 via-cyan-400/30 to-transparent"
        />
      </div>

      <Container className="py-20 sm:py-28">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Left sticky column */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-5"
          >
            <div className="lg:sticky lg:top-28">
              <Badge className="gap-2 border-violet-400/30 bg-violet-400/10 text-violet-300">
                <ClockIcon className="h-4 w-4" />
                Metodología
              </Badge>
              <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Una narrativa que{" "}
                <span className="bg-gradient-to-r from-cyan-300 to-violet-400 bg-clip-text text-transparent">
                  guía hacia la acción.
                </span>
              </h2>
              <p className="mt-5 text-pretty text-base leading-7 text-zinc-300">
                Cada bloque existe para reducir fricción y aumentar intención: claridad, prueba,
                oferta, y un CTA siempre a mano.
              </p>
              <div className="mt-8 flex flex-col gap-4 sm:flex-row lg:flex-col">
                <Button href="#planes" variant="primary" size="lg">
                  Ver Planes
                </Button>
                <Button href="#diagnostico" variant="secondary" size="lg">
                  Agendar Diagnóstico
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right timeline column */}
          <div className="lg:col-span-7">
            <div className="space-y-8">
              {steps.map((s, idx) => (
                <motion.div
                  key={s.n}
                  initial={{ opacity: 0, x: 30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-10%" }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  whileHover={{ x: 8 }}
                  className="group relative rounded-3xl border border-white/10 bg-gradient-to-r from-white/[0.08] to-white/[0.02] p-6 backdrop-blur transition-all hover:border-cyan-300/30"
                >
                  {/* Step number with glow */}
                  <div className="absolute -left-4 top-6 flex h-8 w-8 items-center justify-center rounded-full border border-violet-400/40 bg-zinc-900 text-xs font-bold text-violet-300 shadow-[0_0_20px_rgba(124,58,237,0.4)]">
                    {s.n}
                  </div>

                  <div className="ml-6 grid gap-5 lg:grid-cols-2 lg:items-center">
                    {/* Content */}
                    <div className="flex items-start gap-4">
                      {/* Icon with gradient background */}
                      <motion.div
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${s.gradient} shadow-lg`}
                      >
                        <s.Icon className="h-6 w-6 text-white" />
                      </motion.div>

                      <div className="flex-1">
                        <div className="text-lg font-semibold text-white group-hover:text-cyan-200 transition-colors">
                          {s.t}
                        </div>
                        <p className="mt-2 text-sm leading-6 text-zinc-400">{s.d}</p>
                      </div>
                    </div>

                    {/* Image */}
                    <motion.div
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: 0.2 + idx * 0.1 }}
                      className="relative overflow-hidden rounded-xl"
                    >
                      <div className={`absolute -inset-2 rounded-xl bg-gradient-to-br ${s.gradient} opacity-20 blur-xl`} />
                      <Image
                        src={s.image}
                        alt={s.t}
                        width={300}
                        height={200}
                        className="relative w-full rounded-xl object-cover shadow-lg"
                      />
                    </motion.div>
                  </div>

                  {/* Connector dot */}
                  <div className="absolute -left-[5.5px] top-[26px] h-3 w-3 rounded-full border-2 border-cyan-400 bg-zinc-900" />

                  {/* Hover glow */}
                  <div className={`pointer-events-none absolute -right-12 -top-12 h-40 w-40 rounded-full bg-gradient-to-br ${s.gradient} opacity-0 blur-3xl transition-opacity group-hover:opacity-20`} />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
