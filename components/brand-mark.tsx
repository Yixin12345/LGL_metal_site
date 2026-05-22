import Link from "next/link";

import { cn } from "@/lib/cn";

export function BrandMark({
  invert = false,
}: {
  invert?: boolean;
}) {
  return (
    <Link
      href="/#home"
      className="inline-flex items-center gap-3"
      aria-label="LL Metal Tech home"
    >
      <span
        className={cn(
          "flex h-11 w-11 items-center justify-center rounded-full border text-sm font-extrabold tracking-[0.2em]",
          invert
            ? "border-white/18 bg-white/10 text-white"
            : "border-[rgba(184,115,51,0.28)] bg-slate-950 text-white",
        )}
      >
        LL
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={cn(
            "text-base font-bold tracking-[0.2em] uppercase",
            invert ? "text-white" : "text-slate-900",
          )}
        >
          LL Metal Tech
        </span>
        <span
          className={cn(
            "mt-1 text-[10px] font-medium uppercase tracking-[0.3em]",
            invert ? "text-slate-300" : "text-slate-500",
          )}
        >
          Industrial Solutions
        </span>
      </span>
    </Link>
  );
}
