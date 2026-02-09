import { cn } from "@/lib/cn";
import type { PropsWithChildren } from "react";

type BadgeProps = PropsWithChildren<{
  className?: string;
}>;

export function Badge({ className, children }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-100 backdrop-blur",
        className,
      )}
    >
      {children}
    </span>
  );
}
