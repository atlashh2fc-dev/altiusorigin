"use client";

import { motion } from "framer-motion";
import { ORIGEN, type OrigenPlan } from "@/lib/origen";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";
import { cn } from "@/lib/cn";

function PlanCard({ plan, index }: { plan: OrigenPlan; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -8, scale: 1.02 }}
      className={cn(
        "group relative overflow-hidden rounded-3xl border p-6 backdrop-blur transition-all duration-300",
        plan.highlight
          ? "border-cyan-300/30 bg-gradient-to-b from-cyan-300/15 via-cyan-300/5 to-transparent shadow-[0_0_60px_-20px_rgba(34,211,238,0.5)]"
          : "border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.02]",
        "hover:border-cyan-300/40"
      )}
    >
      {/* Highlight badge */}
      {plan.highlight && (
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          className="absolute -right-8 top-6 rotate-45 bg-gradient-to-r from-violet-500 to-cyan-400 px-10 py-1 text-xs font-bold text-zinc-950"
        >
          POPULAR
        </motion.div>
      )}

      {/* Plan header */}
      <div className="relative">
        <div className="text-lg font-bold text-zinc-50">{plan.name}</div>
        <div className="mt-1 text-sm text-zinc-400">{plan.tagline}</div>
      </div>

      {/* Price */}
      <div className="mt-6">
        <div className="flex items-baseline gap-2">
          <motion.span
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="text-4xl font-bold tracking-tight text-zinc-50"
          >
            ${plan.priceUsdMonthly}
          </motion.span>
          <span className="text-sm text-zinc-400">USD / mes</span>
        </div>

      </div>

      {/* Features */}
      <div className="mt-6 space-y-3">
        {plan.bullets.map((b, i) => (
          <motion.div
            key={b}
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 + i * 0.05 }}
            className="flex items-start gap-3 text-sm text-zinc-300"
          >
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-500/20">
              <CheckIcon className="h-3 w-3 text-cyan-300" />
            </span>
            <span className="leading-6">{b}</span>
          </motion.div>
        ))}
      </div>

      {/* CTA */}
      <div className="mt-8">
        <Button
          href="#diagnostico"
          variant={plan.highlight ? "primary" : "secondary"}
          size="lg"
          className="w-full"
        >
          Empezar con {plan.name}
        </Button>
      </div>

      {/* Glow effects */}
      <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-gradient-to-br from-violet-500/20 to-transparent blur-3xl opacity-0 transition-opacity group-hover:opacity-100" />
      {plan.highlight && (
        <motion.div
          animate={{ opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 3, repeat: Infinity }}
          className="pointer-events-none absolute -left-20 -top-20 h-40 w-40 rounded-full bg-cyan-400/20 blur-3xl"
        />
      )}
    </motion.div>
  );
}

export function Pricing() {
  return (
    <section id="planes" className="relative scroll-mt-24 overflow-hidden">
      {/* Section separator */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />

      <Container className="py-20 sm:py-28">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end"
        >
          <div>
            <Badge className="gap-2">
              <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              Planes
            </Badge>
            <h2 className="mt-6 text-balance text-3xl font-bold tracking-tight text-zinc-50 sm:text-4xl lg:text-5xl">
              Pricing claro.{" "}
              <span className="bg-gradient-to-r from-violet-400 to-cyan-300 bg-clip-text text-transparent">
                Sin letra chica.
              </span>
            </h2>
            <p className="mt-5 max-w-2xl text-pretty text-base leading-7 text-zinc-300">
              Elige tu punto de partida. Crece cuando el sistema empiece a devolver resultados.
            </p>
          </div>
          <div className="hidden sm:block">
            <Button href="#comparador" variant="ghost" size="md">
              Ver comparador
            </Button>
          </div>
        </motion.div>

        <div className="mt-12 grid gap-6 lg:grid-cols-3">
          {ORIGEN.plans.map((p, i) => (
            <PlanCard key={p.id} plan={p} index={i} />
          ))}
        </div>
      </Container>
    </section>
  );
}
