"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { PORTFOLIO, type PortfolioProject } from "@/lib/portfolio";
import { cn } from "@/lib/cn";

function CarouselDot({ active, onClick }: { active: boolean; onClick: () => void }) {
    return (
        <button
            onClick={onClick}
            className={cn(
                "h-3 w-3 rounded-full transition-all duration-300",
                active
                    ? "w-10 bg-gradient-to-r from-violet-500 to-cyan-400 shadow-[0_0_20px_rgba(34,211,238,0.5)]"
                    : "bg-white/20 hover:bg-white/40"
            )}
        />
    );
}

function ProjectCard({ project }: { project: PortfolioProject }) {
    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -20 }}
            transition={{ duration: 0.5, ease: [0.2, 0.8, 0.2, 1] }}
            className="relative w-full"
        >
            {/* Main screenshot container with 3D lift effect */}
            <motion.div
                whileHover={{ scale: 1.02, y: -5 }}
                transition={{ duration: 0.3 }}
                className="group relative mx-auto max-w-4xl"
            >
                {/* Glow behind the card */}
                <div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-violet-600/30 via-cyan-500/20 to-violet-600/30 opacity-60 blur-2xl transition-opacity group-hover:opacity-80" />

                {/* Screenshot frame */}
                <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl border-2 border-white/20 bg-zinc-900 shadow-[0_25px_80px_-20px_rgba(0,0,0,0.8)]">
                    <Image
                        src={project.image}
                        alt={project.name}
                        fill
                        className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        sizes="(max-width: 768px) 100vw, 900px"
                        priority
                    />

                    {/* Shine effect on hover */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                </div>
            </motion.div>

            {/* Info below - clean and readable */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.4 }}
                className="mt-8 text-center"
            >
                <div className="inline-flex items-center gap-4">
                    <h3 className="text-3xl font-bold text-white">{project.name}</h3>
                    <span className="rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 px-4 py-1.5 text-sm font-semibold text-cyan-300 ring-1 ring-cyan-400/30">
                        {project.category}
                    </span>
                </div>
                <p className="mx-auto mt-3 max-w-lg text-lg text-zinc-300">{project.description}</p>
                <div className="mt-5 flex flex-wrap justify-center gap-2">
                    {project.tech.map((t) => (
                        <span
                            key={t}
                            className="rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-zinc-200"
                        >
                            {t}
                        </span>
                    ))}
                </div>
                <div className="mt-8">
                    <Button
                        href={project.url}
                        variant="primary"
                        size="lg"
                        target="_blank"
                        rel="noopener noreferrer"
                    >
                        Visitar sitio en vivo
                        <svg className="ml-2 h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                        </svg>
                    </Button>
                </div>
            </motion.div>
        </motion.div>
    );
}

export function PortfolioShowcase() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isAutoPlaying, setIsAutoPlaying] = useState(true);
    const [isInView, setIsInView] = useState(false);

    const nextSlide = useCallback(() => {
        setActiveIndex((prev) => (prev + 1) % PORTFOLIO.length);
    }, []);

    const prevSlide = useCallback(() => {
        setActiveIndex((prev) => (prev - 1 + PORTFOLIO.length) % PORTFOLIO.length);
    }, []);

    // Auto-play carousel
    useEffect(() => {
        if (!isAutoPlaying || !isInView) return;
        const timer = setInterval(nextSlide, 6000);
        return () => clearInterval(timer);
    }, [isAutoPlaying, isInView, nextSlide]);

    const handleMouseEnter = () => setIsAutoPlaying(false);
    const handleMouseLeave = () => setIsAutoPlaying(true);

    return (
        <>
            {/* Spotlight overlay - darkens rest of page when carousel is in view */}
            <AnimatePresence>
                {isInView && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="pointer-events-none fixed inset-0 z-40 bg-gradient-to-b from-zinc-950/60 via-transparent to-zinc-950/60"
                    />
                )}
            </AnimatePresence>

            <section
                id="portfolio"
                className="relative z-50 scroll-mt-24 overflow-hidden py-24 sm:py-32"
                onMouseEnter={() => setIsInView(true)}
                onMouseLeave={() => setIsInView(false)}
            >
                {/* Section background */}
                <div className="pointer-events-none absolute inset-0">
                    <div className="absolute inset-0 bg-gradient-to-b from-zinc-950 via-zinc-900 to-zinc-950" />
                    <div className="absolute left-1/2 top-1/2 h-[800px] w-[1000px] -translate-x-1/2 -translate-y-1/2">
                        <motion.div
                            animate={{
                                opacity: [0.3, 0.5, 0.3],
                                scale: [1, 1.1, 1]
                            }}
                            transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                            className="h-full w-full rounded-full bg-gradient-to-br from-violet-600/30 via-cyan-500/20 to-violet-600/30 blur-[100px]"
                        />
                    </div>
                </div>

                <Container className="relative">
                    {/* Header */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="mx-auto max-w-3xl text-center"
                    >
                        <Badge className="gap-2 border-cyan-400/30 bg-cyan-400/10 text-cyan-300">
                            <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Muestra de nuestro trabajo
                        </Badge>
                        <h2 className="mt-6 text-balance text-4xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            Resultados{" "}
                            <span className="bg-gradient-to-r from-violet-400 via-cyan-300 to-violet-400 bg-clip-text text-transparent">
                                que hablan solos
                            </span>
                        </h2>
                        <p className="mt-6 text-lg text-zinc-300 sm:text-xl">
                            Cada sitio está operando y generando resultados para nuestros clientes.
                        </p>
                    </motion.div>

                    {/* Carousel */}
                    <div
                        className="relative mt-16"
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {/* Navigation arrows */}
                        <button
                            onClick={prevSlide}
                            className="absolute -left-2 top-1/3 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-zinc-900/90 text-white shadow-xl backdrop-blur transition-all hover:border-cyan-400/50 hover:bg-zinc-800 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] sm:-left-6 lg:-left-16"
                            aria-label="Anterior"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
                            </svg>
                        </button>
                        <button
                            onClick={nextSlide}
                            className="absolute -right-2 top-1/3 z-20 flex h-14 w-14 items-center justify-center rounded-full border border-white/20 bg-zinc-900/90 text-white shadow-xl backdrop-blur transition-all hover:border-cyan-400/50 hover:bg-zinc-800 hover:shadow-[0_0_30px_rgba(34,211,238,0.3)] sm:-right-6 lg:-right-16"
                            aria-label="Siguiente"
                        >
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
                                <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                        </button>

                        {/* Main carousel area */}
                        <div className="px-4 sm:px-8 lg:px-16">
                            <AnimatePresence mode="wait">
                                <ProjectCard key={activeIndex} project={PORTFOLIO[activeIndex]} />
                            </AnimatePresence>
                        </div>

                        {/* Dots navigation */}
                        <div className="mt-12 flex justify-center gap-3">
                            {PORTFOLIO.map((_, idx) => (
                                <CarouselDot
                                    key={idx}
                                    active={idx === activeIndex}
                                    onClick={() => setActiveIndex(idx)}
                                />
                            ))}
                        </div>

                        {/* Progress bar */}
                        <div className="mx-auto mt-6 h-1.5 max-w-sm overflow-hidden rounded-full bg-white/10">
                            <motion.div
                                key={`progress-${activeIndex}`}
                                initial={{ width: "0%" }}
                                animate={{ width: isAutoPlaying && isInView ? "100%" : "0%" }}
                                transition={{ duration: 6, ease: "linear" }}
                                className="h-full bg-gradient-to-r from-violet-500 via-cyan-400 to-violet-500"
                            />
                        </div>
                    </div>

                    {/* Thumbnail strip */}
                    <div className="mt-12 flex justify-center gap-4 overflow-x-auto px-4 pb-4">
                        {PORTFOLIO.map((project, idx) => (
                            <button
                                key={project.id}
                                onClick={() => setActiveIndex(idx)}
                                className={cn(
                                    "group relative h-20 w-36 shrink-0 overflow-hidden rounded-xl transition-all duration-300",
                                    idx === activeIndex
                                        ? "ring-2 ring-cyan-400 shadow-[0_0_30px_rgba(34,211,238,0.4)] scale-110"
                                        : "opacity-40 hover:opacity-70 ring-1 ring-white/10"
                                )}
                            >
                                <Image
                                    src={project.image}
                                    alt={project.name}
                                    fill
                                    className="object-cover object-top"
                                    sizes="150px"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/60 to-transparent" />
                                <span className="absolute bottom-1.5 left-2 text-xs font-medium text-white/80">
                                    {project.name.split(" ")[0]}
                                </span>
                            </button>
                        ))}
                    </div>
                </Container>
            </section>
        </>
    );
}
