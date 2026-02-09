"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { ArrowRightIcon } from "@/components/icons";

export function FinalCTA() {
    return (
        <section className="relative overflow-hidden bg-gradient-to-br from-white via-zinc-50 to-zinc-100 py-24 sm:py-32">
            {/* Decorative elements */}
            <div className="pointer-events-none absolute inset-0">
                <div className="absolute left-0 top-0 h-px w-full bg-gradient-to-r from-transparent via-violet-500/30 to-transparent" />
                <motion.div
                    animate={{ opacity: [0.2, 0.4, 0.2] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-violet-500/10 blur-[120px]"
                />
                <motion.div
                    animate={{ opacity: [0.15, 0.3, 0.15] }}
                    transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute -right-40 bottom-20 h-[400px] w-[400px] rounded-full bg-cyan-500/10 blur-[100px]"
                />
            </div>

            <Container className="relative">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mx-auto max-w-3xl text-center"
                >
                    {/* Badge */}
                    <div className="inline-flex items-center gap-2 rounded-full border border-violet-300 bg-violet-100 px-4 py-2 text-sm font-medium text-violet-700">
                        <span className="h-2 w-2 rounded-full bg-violet-500 animate-pulse" />
                        Estamos listos
                    </div>

                    {/* Headline */}
                    <h2 className="mt-8 text-balance text-4xl font-bold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl">
                        Tu próximo sitio web{" "}
                        <span className="bg-gradient-to-r from-violet-600 to-cyan-500 bg-clip-text text-transparent">
                            empieza hoy
                        </span>
                    </h2>

                    {/* Subheadline */}
                    <p className="mt-6 text-lg leading-relaxed text-zinc-600 sm:text-xl">
                        Conversemos sobre tu negocio y diseñemos juntos una plataforma que genere resultados reales.
                        Sin compromiso, en menos de 30 minutos.
                    </p>

                    {/* CTAs - HIGH CONTRAST BUTTONS */}
                    <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row sm:gap-6">
                        <a
                            href="#diagnostico"
                            className="group inline-flex items-center justify-center gap-2 rounded-2xl bg-zinc-900 px-8 py-4 text-base font-semibold text-white shadow-xl transition-all duration-300 hover:bg-zinc-800 hover:shadow-2xl hover:scale-105"
                        >
                            Agendar Diagnóstico Gratis
                            <ArrowRightIcon className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
                        </a>
                        <a
                            href="#planes"
                            className="inline-flex items-center justify-center rounded-2xl border-2 border-zinc-900 bg-transparent px-8 py-4 text-base font-semibold text-zinc-900 transition-all duration-300 hover:bg-zinc-900 hover:text-white"
                        >
                            Ver Planes y Precios
                        </a>
                    </div>

                    {/* Trust signals */}
                    <div className="mt-14 flex flex-wrap justify-center gap-12 pt-8 border-t border-zinc-300">
                        {[
                            { stat: "50+", label: "Proyectos" },
                            { stat: "99.9%", label: "Uptime" },
                            { stat: "8+", label: "Años" },
                        ].map((item) => (
                            <div key={item.label} className="text-center">
                                <div className="text-3xl font-bold text-zinc-900">{item.stat}</div>
                                <div className="text-sm text-zinc-500">{item.label}</div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </Container>
        </section>
    );
}
