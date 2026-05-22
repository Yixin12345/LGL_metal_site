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
          "mb-4 inline-flex items-center gap-3 rounded-full border px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em]",
          invert
            ? "border-white/12 bg-white/6 text-white/70"
            : "border-slate-200 bg-white text-[var(--brand-copper)] shadow-sm",
        )}
      >
        <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-copper)]" />
        {eyebrow}
      </div>
      <h2
        className={cn(
          "text-balance text-3xl font-extrabold tracking-tight sm:text-4xl lg:text-5xl",
          invert ? "text-white" : "text-slate-900",
        )}
      >
        {title}
      </h2>
      <p
        className={cn(
          "mt-5 text-base leading-8 sm:text-lg",
          invert ? "text-slate-300" : "text-slate-600",
        )}
      >
        {description}
      </p>
    </div>
  );
}
