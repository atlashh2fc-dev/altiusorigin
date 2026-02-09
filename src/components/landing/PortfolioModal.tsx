"use client";

import { useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/cn";
import type { PortfolioProject } from "@/lib/portfolio";

interface PortfolioModalProps {
    project: PortfolioProject | null;
    isOpen: boolean;
    onClose: () => void;
}

export function PortfolioModal({ project, isOpen, onClose }: PortfolioModalProps) {
    const handleKeyDown = useCallback(
        (e: KeyboardEvent) => {
            if (e.key === "Escape") onClose();
        },
        [onClose]
    );

    useEffect(() => {
        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "hidden";
        }
        return () => {
            document.removeEventListener("keydown", handleKeyDown);
            document.body.style.overflow = "";
        };
    }, [isOpen, handleKeyDown]);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <>
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="fixed inset-0 z-50 bg-black/80 backdrop-blur-xl"
                        onClick={onClose}
                    />

                    {/* Modal */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 10 }}
                        transition={{ type: "spring", stiffness: 300, damping: 30 }}
                        className="fixed inset-4 z-50 m-auto flex max-h-[90vh] max-w-5xl flex-col overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/95 shadow-2xl backdrop-blur-xl sm:inset-8"
                    >
                        {/* Header */}
                        <div className="flex items-center justify-between border-b border-white/10 px-6 py-4">
                            <div>
                                <div className="flex items-center gap-3">
                                    <h2 className="text-xl font-semibold text-zinc-50">{project.name}</h2>
                                    <span className="rounded-full border border-cyan-300/20 bg-cyan-300/10 px-3 py-0.5 text-xs font-medium text-cyan-200">
                                        {project.category}
                                    </span>
                                </div>
                                <p className="mt-1 text-sm text-zinc-400">{project.description}</p>
                            </div>
                            <button
                                onClick={onClose}
                                className="grid h-10 w-10 place-items-center rounded-full border border-white/10 bg-white/5 text-zinc-400 transition hover:bg-white/10 hover:text-zinc-50"
                            >
                                <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>

                        {/* Image */}
                        <div className="relative flex-1 overflow-hidden bg-zinc-950">
                            <div className="absolute inset-0 flex items-center justify-center p-8">
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    transition={{ delay: 0.1, duration: 0.4 }}
                                    className="relative h-full w-full overflow-hidden rounded-2xl border border-white/10 shadow-2xl"
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.name}
                                        fill
                                        className="object-contain"
                                        sizes="(max-width: 1024px) 100vw, 900px"
                                    />
                                </motion.div>
                            </div>

                            {/* Glow effects */}
                            <div className="pointer-events-none absolute -left-32 -top-32 h-64 w-64 rounded-full bg-violet-500/20 blur-[100px]" />
                            <div className="pointer-events-none absolute -bottom-32 -right-32 h-64 w-64 rounded-full bg-cyan-500/20 blur-[100px]" />
                        </div>

                        {/* Footer */}
                        <div className="flex items-center justify-between border-t border-white/10 px-6 py-4">
                            <div className="flex flex-wrap gap-2">
                                {project.tech.map((t) => (
                                    <span
                                        key={t}
                                        className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300"
                                    >
                                        {t}
                                    </span>
                                ))}
                            </div>
                            <a
                                href={project.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={cn(
                                    "inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold transition",
                                    "bg-gradient-to-r from-violet-600 to-cyan-400 text-zinc-950",
                                    "shadow-[0_16px_40px_-18px_rgba(34,211,238,0.65)] hover:brightness-110"
                                )}
                            >
                                Visitar sitio
                                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                </svg>
                            </a>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
}
