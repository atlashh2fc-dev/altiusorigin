"use client";

import { useState, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/cn";

const WHATSAPP_NUMBER = "59169040849"; // Paula Guerra
const PLANS = [
    { id: "start", name: "Start", price: "$29 USD/mes" },
    { id: "growth", name: "Growth", price: "$49 USD/mes" },
    { id: "scale", name: "Scale", price: "$99 USD/mes" },
];

type ChatStep = "welcome" | "name" | "phone" | "email" | "plan" | "ready";

interface UserData {
    name: string;
    phone: string;
    email: string;
    plan: string;
}

export function WhatsAppChat() {
    const [isOpen, setIsOpen] = useState(false);
    const [step, setStep] = useState<ChatStep>("welcome");
    const [userData, setUserData] = useState<UserData>({ name: "", phone: "", email: "", plan: "" });
    const [inputValue, setInputValue] = useState("");

    const handleNext = useCallback(() => {
        switch (step) {
            case "welcome":
                setStep("name");
                break;
            case "name":
                if (inputValue.trim().length >= 2) {
                    setUserData((prev) => ({ ...prev, name: inputValue.trim() }));
                    setInputValue("");
                    setStep("phone");
                }
                break;
            case "phone":
                if (inputValue.trim().length >= 8) {
                    setUserData((prev) => ({ ...prev, phone: inputValue.trim() }));
                    setInputValue("");
                    setStep("email");
                }
                break;
            case "email":
                if (inputValue.includes("@")) {
                    setUserData((prev) => ({ ...prev, email: inputValue.trim() }));
                    setInputValue("");
                    setStep("plan");
                }
                break;
            case "plan":
                setStep("ready");
                break;
        }
    }, [step, inputValue]);

    const selectPlan = (planName: string) => {
        setUserData((prev) => ({ ...prev, plan: planName }));
        setStep("ready");
    };

    const openWhatsApp = () => {
        const message = encodeURIComponent(
            `¡Hola! Soy ${userData.name}.\n` +
            `📧 Email: ${userData.email}\n` +
            `📱 Teléfono: ${userData.phone}\n` +
            `💼 Plan de interés: ${userData.plan}\n\n` +
            `Me gustaría más información sobre el desarrollo web.`
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    };

    const resetChat = () => {
        setStep("welcome");
        setUserData({ name: "", phone: "", email: "", plan: "" });
        setInputValue("");
    };

    const getMessage = () => {
        switch (step) {
            case "welcome":
                return "¡Hola! 👋 Soy el asistente de Altius Ignite. Estoy aquí para ayudarte a encontrar el plan perfecto para tu negocio.";
            case "name":
                return "Para empezar, ¿cuál es tu nombre?";
            case "phone":
                return `¡Excelente, ${userData.name}! ¿Cuál es tu número de teléfono?`;
            case "email":
                return "Perfecto. ¿Y tu correo electrónico?";
            case "plan":
                return "¡Genial! ¿Qué plan te interesa conocer?";
            case "ready":
                return `¡Listo ${userData.name}! Un especialista te contactará pronto. ¿Quieres hablar ahora mismo por WhatsApp?`;
        }
    };

    return (
        <>
            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className={cn(
                    "fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full shadow-2xl transition-all duration-300",
                    isOpen
                        ? "bg-zinc-800 rotate-0"
                        : "bg-gradient-to-br from-emerald-500 to-green-600 hover:scale-110 hover:shadow-[0_0_40px_rgba(16,185,129,0.4)]"
                )}
                whileHover={{ scale: isOpen ? 1 : 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
            >
                {isOpen ? (
                    <svg className="h-7 w-7 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                ) : (
                    <svg className="h-8 w-8 text-white" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                    </svg>
                )}

                {/* Pulse ring when closed */}
                {!isOpen && (
                    <span className="absolute inset-0 rounded-full animate-ping bg-emerald-400/30" />
                )}
            </motion.button>

            {/* Chat Window */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-28 right-6 z-50 w-[360px] overflow-hidden rounded-3xl border border-white/10 bg-zinc-900/95 shadow-2xl backdrop-blur-xl sm:w-[380px]"
                    >
                        {/* Header */}
                        <div className="bg-gradient-to-r from-emerald-600 to-green-600 px-5 py-4">
                            <div className="flex items-center gap-3">
                                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20">
                                    <svg className="h-7 w-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                    </svg>
                                </div>
                                <div>
                                    <div className="font-semibold text-white">Altius Ignite</div>
                                    <div className="flex items-center gap-1.5 text-sm text-emerald-100">
                                        <span className="h-2 w-2 rounded-full bg-emerald-300 animate-pulse" />
                                        En línea
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Chat Body */}
                        <div className="max-h-[350px] min-h-[280px] overflow-y-auto p-5">
                            {/* Bot Message */}
                            <motion.div
                                key={step}
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="mb-4"
                            >
                                <div className="inline-block max-w-[85%] rounded-2xl rounded-tl-sm bg-zinc-800 px-4 py-3 text-sm text-zinc-100">
                                    {getMessage()}
                                </div>
                            </motion.div>

                            {/* User responses shown as bubbles */}
                            {userData.name && step !== "name" && (
                                <div className="mb-2 flex justify-end">
                                    <div className="inline-block rounded-2xl rounded-tr-sm bg-emerald-600 px-4 py-2 text-sm text-white">
                                        {userData.name}
                                    </div>
                                </div>
                            )}
                            {userData.phone && step !== "phone" && step !== "name" && (
                                <div className="mb-2 flex justify-end">
                                    <div className="inline-block rounded-2xl rounded-tr-sm bg-emerald-600 px-4 py-2 text-sm text-white">
                                        {userData.phone}
                                    </div>
                                </div>
                            )}
                            {userData.email && step !== "email" && step !== "phone" && step !== "name" && (
                                <div className="mb-2 flex justify-end">
                                    <div className="inline-block rounded-2xl rounded-tr-sm bg-emerald-600 px-4 py-2 text-sm text-white">
                                        {userData.email}
                                    </div>
                                </div>
                            )}
                            {userData.plan && step === "ready" && (
                                <div className="mb-2 flex justify-end">
                                    <div className="inline-block rounded-2xl rounded-tr-sm bg-emerald-600 px-4 py-2 text-sm text-white">
                                        Plan {userData.plan}
                                    </div>
                                </div>
                            )}

                            {/* Plan Selection */}
                            {step === "plan" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="space-y-2"
                                >
                                    {PLANS.map((plan) => (
                                        <button
                                            key={plan.id}
                                            onClick={() => selectPlan(plan.name)}
                                            className="flex w-full items-center justify-between rounded-xl border border-white/10 bg-zinc-800/50 px-4 py-3 text-left transition-all hover:border-emerald-500/50 hover:bg-zinc-800"
                                        >
                                            <span className="font-medium text-white">{plan.name}</span>
                                            <span className="text-sm text-emerald-400">{plan.price}</span>
                                        </button>
                                    ))}
                                </motion.div>
                            )}

                            {/* Ready State - WhatsApp Button */}
                            {step === "ready" && (
                                <motion.div
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    className="mt-4 space-y-3"
                                >
                                    <button
                                        onClick={openWhatsApp}
                                        className="flex w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-4 font-semibold text-white shadow-lg transition-all hover:shadow-[0_0_30px_rgba(16,185,129,0.4)] hover:scale-[1.02]"
                                    >
                                        <svg className="h-5 w-5" viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                                        </svg>
                                        Hablemos por WhatsApp
                                    </button>
                                    <button
                                        onClick={resetChat}
                                        className="w-full rounded-xl border border-white/10 px-4 py-2 text-sm text-zinc-400 transition-colors hover:text-white"
                                    >
                                        Empezar de nuevo
                                    </button>
                                </motion.div>
                            )}
                        </div>

                        {/* Input Area */}
                        {(step === "name" || step === "phone" || step === "email") && (
                            <div className="border-t border-white/10 p-4">
                                <div className="flex gap-2">
                                    <input
                                        type={step === "email" ? "email" : step === "phone" ? "tel" : "text"}
                                        value={inputValue}
                                        onChange={(e) => setInputValue(e.target.value)}
                                        onKeyDown={(e) => e.key === "Enter" && handleNext()}
                                        placeholder={
                                            step === "name" ? "Tu nombre..." :
                                                step === "phone" ? "Tu teléfono..." :
                                                    "Tu email..."
                                        }
                                        className="flex-1 rounded-xl border border-white/10 bg-zinc-800 px-4 py-3 text-sm text-white placeholder:text-zinc-500 focus:border-emerald-500/50 focus:outline-none focus:ring-1 focus:ring-emerald-500/50"
                                    />
                                    <button
                                        onClick={handleNext}
                                        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-emerald-600 text-white transition-colors hover:bg-emerald-500"
                                    >
                                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        )}

                        {/* Welcome - Start Button */}
                        {step === "welcome" && (
                            <div className="border-t border-white/10 p-4">
                                <button
                                    onClick={handleNext}
                                    className="w-full rounded-xl bg-gradient-to-r from-emerald-500 to-green-600 px-6 py-3 font-medium text-white transition-all hover:shadow-lg"
                                >
                                    ¡Empecemos! 🚀
                                </button>
                            </div>
                        )}
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
