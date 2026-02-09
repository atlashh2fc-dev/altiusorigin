import Link from "next/link";
import { cn } from "@/lib/cn";
import type { ButtonHTMLAttributes } from "react";

const styles = {
  base: "inline-flex items-center justify-center gap-2 rounded-full text-sm font-semibold transition will-change-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-300/60 focus-visible:ring-offset-2 focus-visible:ring-offset-zinc-950 disabled:opacity-50 disabled:pointer-events-none",
  sizes: {
    md: "h-11 px-5",
    lg: "h-12 px-6 text-[15px]",
  },
  variants: {
    primary:
      "bg-gradient-to-r from-violet-600 to-cyan-400 text-zinc-950 shadow-[0_16px_40px_-18px_rgba(34,211,238,0.65)] hover:brightness-110 active:scale-[0.99]",
    secondary:
      "border border-white/[0.12] bg-white/[0.06] text-zinc-50 backdrop-blur hover:bg-white/10 active:scale-[0.99]",
    ghost: "text-zinc-50 hover:bg-white/[0.08] active:scale-[0.99]",
  },
} as const;

type CommonProps = {
  variant?: keyof typeof styles.variants;
  size?: keyof typeof styles.sizes;
  className?: string;
};

type ButtonAsButton = CommonProps &
  ButtonHTMLAttributes<HTMLButtonElement> & { href?: never };

type ButtonAsLink = CommonProps &
  Omit<React.ComponentProps<typeof Link>, "className"> & {
    href: string;
  };

export function Button(props: ButtonAsButton | ButtonAsLink) {
  const variant = props.variant ?? "secondary";
  const size = props.size ?? "md";
  const className = cn(styles.base, styles.sizes[size], styles.variants[variant], props.className);

  if ("href" in props && typeof props.href === "string") {
    const { href, ...rest } = props;
    return <Link href={href} className={className} {...rest} />;
  }

  const { ...rest } = props;
  return <button className={className} {...rest} />;
}
