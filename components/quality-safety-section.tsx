import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { qualityPillars } from "@/lib/site-data";

export function QualitySafetySection() {
  return (
    <section
      id="sustainability"
      className="relative overflow-hidden bg-[var(--color-background)] py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,115,51,0.08),transparent_24%)]" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Quality & Safety"
            title="Commercial Discipline for Sensitive and High-Value Materials"
            description="Specialty metals demand more than availability alone. We focus on clear specifications, practical coordination, and reliable commercial follow-up to support better purchasing decisions."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {qualityPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <Reveal key={pillar.title} delay={index * 70}>
                <article className="h-full rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[rgba(184,115,51,0.12)] text-[var(--brand-copper)]">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {pillar.description}
                  </p>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
