"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { ArrowRightIcon, SparkIcon, GlobeIcon, ShieldCheckIcon, PencilSquareIcon } from "@/components/icons";

const VIDEOS = ["/11.mov", "/12.mov"];
const VIDEO_DURATION = 8000; // 8 seconds per video

const fadeUp = {
  hidden: { opacity: 0, y: 30, filter: "blur(12px)" },
  show: { opacity: 1, y: 0, filter: "blur(0px)" },
};

const benefits = [
  {
    icon: GlobeIcon,
    title: "Hosting + Dominio",
    desc: "Incluido en todos los planes",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: ShieldCheckIcon,
    title: "SSL Gratuito",
    desc: "Conexión segura HTTPS",
    gradient: "from-emerald-500 to-green-600",
  },
  {
    icon: PencilSquareIcon,
    title: "Autoadministrable",
    desc: "Edita sin saber código",
    gradient: "from-violet-500 to-purple-600",
  },
];

export function Hero() {
  const [currentVideo, setCurrentVideo] = useState(0);
  const videoRef1 = useRef<HTMLVideoElement>(null);
  const videoRef2 = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    // Cycle through videos
    const interval = setInterval(() => {
      setCurrentVideo((prev) => (prev + 1) % VIDEOS.length);
    }, VIDEO_DURATION);

    return () => clearInterval(interval);
  }, []);

  // Ensure videos play
  useEffect(() => {
    if (videoRef1.current) videoRef1.current.play().catch(() => { });
    if (videoRef2.current) videoRef2.current.play().catch(() => { });
  }, []);

  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Video 1 */}
        <AnimatePresence mode="wait">
          {currentVideo === 0 && (
            <motion.div
              key="video-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <video
                ref={videoRef1}
                src={VIDEOS[0]}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Video 2 */}
        <AnimatePresence mode="wait">
          {currentVideo === 1 && (
            <motion.div
              key="video-1"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="absolute inset-0"
            >
              <video
                ref={videoRef2}
                src={VIDEOS[1]}
                autoPlay
                muted
                loop
                playsInline
                className="h-full w-full object-cover"
              />
            </motion.div>
          )}
        </AnimatePresence>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-950/70 via-zinc-950/50 to-zinc-950/90" />

        {/* Subtle color overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-violet-950/30 via-transparent to-cyan-950/20" />
      </div>

      {/* Content */}
      <Container className="relative z-10 py-24 sm:py-32 lg:py-40">
        <motion.div
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.12 }}
          className="mx-auto max-w-4xl text-center"
        >
          {/* Badge */}
          <motion.div variants={fadeUp}>
            <Badge className="gap-2 border-violet-400/30 bg-violet-500/20 px-4 py-2 text-sm font-medium text-violet-200 shadow-lg shadow-violet-500/10 backdrop-blur">
              <SparkIcon className="h-5 w-5 text-violet-400" />
              Proyectos en producción constantemente
            </Badge>
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={fadeUp}
            className="mt-8 text-balance text-4xl font-bold leading-[1.1] tracking-tight text-white sm:text-5xl lg:text-6xl xl:text-7xl drop-shadow-2xl"
          >
            Páginas web que{" "}
            <span className="relative">
              <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-emerald-300 bg-clip-text text-transparent">
                generan clientes
              </span>
              {/* Underline effect */}
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: [0.2, 0.8, 0.2, 1] }}
                className="absolute -bottom-1 left-0 h-1 w-full origin-left bg-gradient-to-r from-violet-400 via-cyan-400 to-emerald-400 rounded-full"
              />
            </span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            variants={fadeUp}
            className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-zinc-200 sm:text-xl drop-shadow-lg"
          >
            Diseñamos sitios profesionales con{" "}
            <span className="font-semibold text-white">hosting incluido</span>,
            SSL, formularios y panel de administración.{" "}
            <span className="font-bold text-cyan-300">Desde $29 USD/mes.</span>
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-5">
            <Button href="#planes" variant="primary" size="lg" className="group text-base px-8 py-4 shadow-xl shadow-violet-500/30">
              Ver Planes y Precios
              <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
            </Button>
            <Button href="#portfolio" variant="secondary" size="lg" className="text-base px-8 py-4 border-white/30 bg-white/10 hover:bg-white/20 backdrop-blur">
              Ver Proyectos
            </Button>
          </motion.div>

          {/* Benefit pills */}
          <motion.div
            variants={fadeUp}
            className="mt-12 flex flex-wrap justify-center gap-3"
          >
            {benefits.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.6 + i * 0.1 }}
                className="flex items-center gap-2 rounded-full border border-white/20 bg-zinc-900/60 px-4 py-2 backdrop-blur"
              >
                <div className={`flex h-6 w-6 items-center justify-center rounded-full bg-gradient-to-br ${item.gradient}`}>
                  <item.icon className="h-3.5 w-3.5 text-white" />
                </div>
                <span className="text-sm font-medium text-zinc-100">{item.title}</span>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust stats */}
          <motion.div
            variants={fadeUp}
            className="mt-16 flex flex-wrap justify-center gap-8 border-t border-white/20 pt-8 sm:gap-16"
          >
            {[
              { value: "50+", label: "Proyectos entregados" },
              { value: "99.9%", label: "Uptime garantizado" },
              { value: "8+", label: "Años de experiencia" },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="text-2xl font-bold text-white sm:text-3xl drop-shadow-lg">{stat.value}</div>
                <div className="text-sm text-zinc-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}
