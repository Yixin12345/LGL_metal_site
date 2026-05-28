import { cn } from "@/lib/cn";

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = "left",
  invert = false,
}: {
  eyebrow: string;
  title: string;
  description: string;
  align?: "left" | "center";
  invert?: boolean;
}) {
  return (
    <div
      className={cn(
        "max-w-3xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      <div
        className={cn(
          "mb-5 inline-flex items-center gap-3 text-[0.72rem] font-semibold uppercase tracking-[0.28em]",
          invert
            ? "text-slate-300"
            : "text-[var(--brand-copper)]",
        )}
      >
        <span
          className={cn(
            "h-px w-10",
            invert ? "bg-white/35" : "bg-[var(--brand-copper)]",
          )}
        />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "text-balance text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl lg:text-[3.05rem]",
          invert ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-6 max-w-2xl text-base leading-8 sm:text-lg",
          align === "center" && "mx-auto",
          invert ? "text-slate-300" : "text-slate-600",
        )}
      >
        {description}
      </p>
    </div>
  );
}
