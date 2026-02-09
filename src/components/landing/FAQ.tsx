"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { ORIGEN } from "@/lib/origen";
import { cn } from "@/lib/cn";

export function FAQ() {
  const items = useMemo(() => ORIGEN.faq, []);
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="relative scroll-mt-24">
      <Container className="py-16 sm:py-20">
        <Badge>FAQ</Badge>
        <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
          Preguntas que importan.
        </h2>
        <p className="mt-4 max-w-2xl text-pretty text-base leading-7 text-zinc-300">
          Respuestas claras para decidir sin dudas.
        </p>

        <div className="mt-10 space-y-3">
          {items.map((it, idx) => {
            const isOpen = open === idx;
            return (
              <button
                key={it.q}
                type="button"
                onClick={() => setOpen((prev) => (prev === idx ? null : idx))}
                className={cn(
                  "w-full rounded-3xl border bg-white/5 p-6 text-left backdrop-blur transition",
                  isOpen ? "border-cyan-300/20" : "border-white/10 hover:border-white/[0.15]",
                )}
                aria-expanded={isOpen}
              >
                <div className="flex items-start justify-between gap-6">
                  <div className="text-sm font-semibold text-zinc-50">{it.q}</div>
                  <div
                    className={cn(
                      "mt-0.5 grid h-7 w-7 place-items-center rounded-full border border-white/10 bg-black/[0.15] text-zinc-200 transition",
                      isOpen ? "rotate-45 border-cyan-300/25 text-cyan-100" : "rotate-0",
                    )}
                    aria-hidden="true"
                  >
                    <span className="text-lg leading-none">+</span>
                  </div>
                </div>
                <div
                  className={cn(
                    "grid transition-[grid-template-rows,opacity] duration-300",
                    isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <p className="mt-3 text-sm leading-7 text-zinc-300">{it.a}</p>
                  </div>
                </div>
              </button>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
