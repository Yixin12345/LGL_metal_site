import type { AnchorHTMLAttributes, ReactNode } from "react";

import { cn } from "@/lib/cn";

type Variant = "primary" | "secondary" | "inverse";

const baseClassName =
  "inline-flex items-center justify-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--brand-copper)]";

const variantClassNames: Record<Variant, string> = {
  primary:
    "bg-[var(--brand-copper)] text-white shadow-lg shadow-[rgba(184,115,51,0.25)] hover:-translate-y-0.5 hover:bg-[var(--brand-copper-strong)]",
  secondary:
    "border border-slate-300 bg-white text-slate-900 hover:-translate-y-0.5 hover:border-slate-400 hover:bg-slate-100",
  inverse:
    "border border-white/20 bg-white/10 text-white backdrop-blur-sm hover:-translate-y-0.5 hover:bg-white/15",
};

export function getButtonClassName(variant: Variant, className?: string) {
  return cn(baseClassName, variantClassNames[variant], className);
}

export function LinkButton({
  children,
  variant = "primary",
  className,
  icon,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: Variant;
  icon?: ReactNode;
}) {
  return (
    <a className={getButtonClassName(variant, className)} {...props}>
      <span>{children}</span>
      {icon}
    </a>
  );
}
