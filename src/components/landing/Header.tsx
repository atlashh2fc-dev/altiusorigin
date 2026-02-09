import { ORIGEN } from "@/lib/origen";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";

// Premium SVG Logo for Origen
function OrigenLogo() {
  return (
    <svg
      viewBox="0 0 40 40"
      className="h-10 w-10"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="logo-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#8b5cf6" />
          <stop offset="50%" stopColor="#06b6d4" />
          <stop offset="100%" stopColor="#10b981" />
        </linearGradient>
      </defs>
      {/* Outer ring */}
      <circle
        cx="20"
        cy="20"
        r="17"
        stroke="url(#logo-gradient)"
        strokeWidth="2.5"
        fill="none"
      />
      {/* Inner stylized O */}
      <circle
        cx="20"
        cy="20"
        r="9"
        stroke="url(#logo-gradient)"
        strokeWidth="3"
        fill="none"
      />
      {/* Accent dot */}
      <circle cx="20" cy="20" r="3" fill="url(#logo-gradient)" />
    </svg>
  );
}

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-white/10 bg-zinc-950/80 backdrop-blur-xl">
      <Container className="flex h-16 items-center justify-between">
        <a href="#" className="group inline-flex items-center gap-3">
          <OrigenLogo />
          <div className="leading-tight">
            <div className="text-base font-bold tracking-tight text-zinc-50">{ORIGEN.brand}</div>
            <div className="text-xs text-zinc-400">{ORIGEN.company}</div>
          </div>
        </a>

        <nav className="hidden items-center gap-2 sm:flex">
          <Button href="#beneficios" variant="ghost" size="md">
            Beneficios
          </Button>
          <Button href="#planes" variant="ghost" size="md">
            Planes
          </Button>
          <Button href={ORIGEN.hero.secondaryCta.href} variant="secondary" size="md">
            Agendar
          </Button>
          <Button href={ORIGEN.hero.primaryCta.href} variant="primary" size="md">
            Ver Planes
          </Button>
        </nav>
      </Container>
    </header>
  );
}
