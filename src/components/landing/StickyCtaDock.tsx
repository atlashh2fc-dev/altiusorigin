"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { ORIGEN } from "@/lib/origen";
import { Button } from "@/components/ui/Button";
import { ArrowRightIcon } from "@/components/icons";

export function StickyCtaDock() {
  const { scrollY } = useScroll();
  const opacity = useTransform(scrollY, [0, 220], [0, 1]);
  const y = useTransform(scrollY, [0, 220], [16, 0]);

  return (
    <motion.div
      style={{ opacity, y }}
      className="fixed inset-x-0 bottom-4 z-50 px-4 sm:hidden"
    >
      <div className="mx-auto flex max-w-md items-center justify-between gap-3 rounded-2xl border border-white/10 bg-zinc-950/65 p-3 shadow-[0_24px_70px_-40px_rgba(0,0,0,0.85)] backdrop-blur">
        <div className="min-w-0">
          <div className="truncate text-sm font-semibold text-zinc-50">Planes claros.</div>
          <div className="truncate text-xs text-zinc-300">Elige y empieza a captar leads.</div>
        </div>
        <Button href={ORIGEN.hero.primaryCta.href} variant="primary" size="md" className="shrink-0">
          Ver
          <ArrowRightIcon className="h-4 w-4" />
        </Button>
      </div>
    </motion.div>
  );
}

