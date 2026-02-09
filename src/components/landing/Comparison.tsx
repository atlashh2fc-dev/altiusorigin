import { ORIGEN } from "@/lib/origen";
import { Container } from "@/components/ui/Container";
import { Badge } from "@/components/ui/Badge";
import { CheckIcon } from "@/components/icons";

function Cell({ value }: { value: string | boolean }) {
  if (typeof value === "boolean") {
    return value ? (
      <span className="inline-flex h-7 w-7 items-center justify-center rounded-full bg-cyan-300/10 text-cyan-100">
        <CheckIcon className="h-4 w-4" />
      </span>
    ) : (
      <span className="text-zinc-500">—</span>
    );
  }
  return <span className="text-zinc-200">{value}</span>;
}

export function Comparison() {
  return (
    <section id="comparador" className="relative scroll-mt-24">
      <Container className="py-16 sm:py-20">
        <div className="flex items-center justify-between gap-6">
          <div>
            <Badge>Comparador</Badge>
            <h2 className="mt-5 text-2xl font-semibold tracking-tight text-zinc-50 sm:text-3xl">
              Decide rápido.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-zinc-300">
              Mismo estándar premium. Diferente nivel de automatización y escalabilidad.
            </p>
          </div>
        </div>

        <div className="mt-8 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <div className="grid grid-cols-4 gap-0 border-b border-white/10 bg-white/[0.04] text-sm">
            <div className="p-4 text-zinc-400">Incluye</div>
            {ORIGEN.plans.map((p) => (
              <div key={p.id} className="p-4 font-semibold text-zinc-50">
                {p.name}
              </div>
            ))}
          </div>
          <div className="divide-y divide-white/10">
            {ORIGEN.comparison.features.map((f) => (
              <div key={f.key} className="grid grid-cols-4 items-center gap-0 text-sm">
                <div className="p-4 text-zinc-300">{f.label}</div>
                <div className="p-4">
                  <Cell value={f.starter} />
                </div>
                <div className="p-4">
                  <Cell value={f.growth} />
                </div>
                <div className="p-4">
                  <Cell value={f.pro} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
