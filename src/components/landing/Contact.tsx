"use client";

import { useMemo, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/cn";

type LeadPayload = {
  name: string;
  email: string;
  company?: string;
  website?: string;
  message?: string;
  utm?: Record<string, string>;
  source?: string;
};

function getUtm() {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const keys = ["utm_source", "utm_medium", "utm_campaign", "utm_term", "utm_content"];
  return keys.reduce<Record<string, string>>((acc, k) => {
    const v = params.get(k);
    if (v) acc[k] = v;
    return acc;
  }, {});
}

export function Contact() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [error, setError] = useState<string | null>(null);
  const utm = useMemo(() => getUtm(), []);

  async function submit(formData: FormData) {
    setStatus("loading");
    setError(null);

    const payload: LeadPayload = {
      name: String(formData.get("name") ?? ""),
      email: String(formData.get("email") ?? ""),
      company: String(formData.get("company") ?? ""),
      website: String(formData.get("website") ?? ""),
      message: String(formData.get("message") ?? ""),
      source: "origen-landing",
      utm,
    };

    const honeypot = String(formData.get("contact") ?? "");
    if (honeypot) {
      setStatus("success");
      return;
    }

    try {
      const res = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) {
        const data = (await res.json().catch(() => null)) as { error?: string } | null;
        throw new Error(data?.error ?? "No se pudo enviar el diagnóstico.");
      }
      setStatus("success");
    } catch (e) {
      setStatus("error");
      setError(e instanceof Error ? e.message : "Error al enviar.");
    }
  }

  return (
    <section id="diagnostico" className="relative scroll-mt-24">
      <Container className="py-16 sm:py-20">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Badge>Diagnóstico</Badge>
            <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
              Agenda una conversación que te deje claridad.
            </h2>
            <p className="mt-4 text-pretty text-base leading-7 text-zinc-300">
              Cuéntanos qué vendes, a quién y cuál es tu objetivo. Te devolvemos una propuesta
              de arquitectura + plan recomendado.
            </p>

            <div className="mt-8 rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur">
              <div className="text-sm font-semibold text-zinc-50">Qué obtienes</div>
              <ul className="mt-3 space-y-2 text-sm leading-7 text-zinc-300">
                <li>• Diagnóstico de conversión y estructura.</li>
                <li>• Plan recomendado (Starter / Growth / Pro).</li>
                <li>• Próximos pasos y alcance sugerido.</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-7">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                void submit(new FormData(e.currentTarget));
              }}
              className="rounded-3xl border border-white/10 bg-white/5 p-6 backdrop-blur"
            >
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label className="text-xs font-medium text-zinc-300">Nombre</label>
                  <input
                    name="name"
                    required
                    className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-zinc-50 outline-none ring-0 placeholder:text-zinc-500 focus:border-cyan-300/35"
                    placeholder="Tu nombre"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-300">Email</label>
                  <input
                    name="email"
                    type="email"
                    required
                    className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-cyan-300/35"
                    placeholder="tu@empresa.com"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-300">Empresa (opcional)</label>
                  <input
                    name="company"
                    className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-cyan-300/35"
                    placeholder="Nombre de tu empresa"
                  />
                </div>
                <div>
                  <label className="text-xs font-medium text-zinc-300">Sitio actual (opcional)</label>
                  <input
                    name="website"
                    className="mt-2 h-11 w-full rounded-2xl border border-white/10 bg-black/25 px-4 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-cyan-300/35"
                    placeholder="https://"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label className="text-xs font-medium text-zinc-300">
                  Objetivo / contexto (opcional)
                </label>
                <textarea
                  name="message"
                  rows={5}
                  className="mt-2 w-full resize-none rounded-2xl border border-white/10 bg-black/25 px-4 py-3 text-sm text-zinc-50 outline-none placeholder:text-zinc-500 focus:border-cyan-300/35"
                  placeholder="Ej: quiero más cotizaciones, tengo campañas activas, necesito automatizar..."
                />
              </div>

              <input
                name="contact"
                tabIndex={-1}
                autoComplete="off"
                className="hidden"
                aria-hidden="true"
              />

              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                <div className="text-xs leading-6 text-zinc-400">
                  Enviando este formulario aceptas contacto para diagnóstico.
                </div>
                <Button
                  type="submit"
                  variant="primary"
                  size="lg"
                  disabled={status === "loading" || status === "success"}
                >
                  {status === "loading"
                    ? "Enviando..."
                    : status === "success"
                      ? "Recibido"
                      : "Enviar diagnóstico"}
                </Button>
              </div>

              {status === "error" ? (
                <div className="mt-4 rounded-2xl border border-rose-400/20 bg-rose-400/10 p-4 text-sm text-rose-100">
                  {error ?? "Error al enviar."}
                </div>
              ) : null}
              {status === "success" ? (
                <div className="mt-4 rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-4 text-sm text-emerald-100">
                  Listo. Te contactaremos con el plan recomendado.
                </div>
              ) : null}
            </form>

            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-zinc-400">
              <span className={cn("inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1")}>
                Respuesta rápida
              </span>
              <span className={cn("inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1")}>
                Alcance claro
              </span>
              <span className={cn("inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1")}>
                Próximos pasos
              </span>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
