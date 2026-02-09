import { ORIGEN } from "@/lib/origen";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { CheckIcon } from "@/components/icons";

export function OneTime() {
  return (
    <section className="relative">
      <Container className="py-16 sm:py-20">
        <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/[0.08] to-white/[0.04] p-8 backdrop-blur">
          <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
            <div className="max-w-2xl">
              <Badge>Pago único (10% menos)</Badge>
              <h2 className="mt-5 text-balance text-3xl font-semibold tracking-tight text-zinc-50 sm:text-4xl">
                Una inversión. Un año de operación incluida.
              </h2>
              <p className="mt-4 text-pretty text-base leading-7 text-zinc-300">
                Ideal si prefieres pagar una vez y salir con una plataforma lista para captar
                y convertir, con hosting + SSL y correo corporativo por 12 meses.
              </p>
              <div className="mt-6 grid gap-3 sm:grid-cols-2">
                {ORIGEN.oneTime.includes.map((i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-zinc-200">
                    <span className="mt-0.5 grid h-5 w-5 place-items-center rounded-full bg-white/[0.08]">
                      <CheckIcon className="h-4 w-4 text-cyan-200" />
                    </span>
                    <span className="leading-6">{i}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="w-full max-w-sm rounded-3xl border border-white/10 bg-black/20 p-6 shadow-[0_30px_90px_-75px_rgba(124,58,237,0.75)]">
              <div className="text-sm font-semibold text-zinc-50">Pago único</div>
              <div className="mt-3 text-4xl font-semibold tracking-tight text-zinc-50">
                ${ORIGEN.oneTime.priceUsd}
              </div>
              <div className="mt-2 text-sm text-zinc-300">
                {ORIGEN.oneTime.priceClp} CLP / {ORIGEN.oneTime.priceBs} Bs
              </div>
              <div className="mt-6 space-y-3">
                <Button href="#diagnostico" variant="primary" size="lg" className="w-full">
                  Quiero el pago único
                </Button>
                <Button href="#planes" variant="secondary" size="lg" className="w-full">
                  Comparar con planes
                </Button>
              </div>
              <div className="mt-4 text-xs leading-6 text-zinc-400">
                Incluye capacitación y puesta en producción. Renovaciones (hosting/dominio) se
                gestionan contigo de forma transparente.
              </div>
            </div>
          </div>

          <div className="pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.26),transparent_60%)] blur-2xl" />
          <div className="pointer-events-none absolute -bottom-32 -left-32 h-72 w-72 rounded-full bg-[radial-gradient(circle_at_center,rgba(124,58,237,0.26),transparent_60%)] blur-2xl" />
        </div>
      </Container>
    </section>
  );
}
