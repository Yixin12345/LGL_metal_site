import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { qualityPillars } from "@/lib/site-data";

export function QualitySafetySection() {
  return (
    <section
      id="quality"
      className="relative overflow-hidden bg-white py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,115,51,0.05),transparent_24%)]" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Quality & Execution"
            title="What Protects Buyer Confidence on Specialty-Metal Orders"
            description="The website now speaks more directly to real purchasing concerns: application fit, clarity on form and grade, disciplined packaging, and responsive communication once an order is moving."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {qualityPillars.map((pillar, index) => {
            const Icon = pillar.icon;

            return (
              <Reveal key={pillar.title} delay={index * 70}>
                <article className="h-full rounded-[1.7rem] border border-slate-200 bg-[#fcfdff] p-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)]">
                  <div className="mb-6 h-1 w-14 rounded-full bg-[var(--brand-copper)]" />
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
        <Reveal delay={140}>
          <div className="mt-10 rounded-[1.8rem] border border-slate-200 bg-[#fcfdff] px-7 py-7 shadow-[0_18px_45px_rgba(15,23,42,0.05)] sm:px-8">
            <p className="text-sm leading-8 text-slate-600 sm:text-base">
              LL Metal Tech is positioned to support buyers that need clear
              communication around specialty metals rather than generic
              catalog-only sales language. That is especially important when
              the metal, form, or application has a direct impact on process
              performance, consumable life, alloy behavior, or downstream
              manufacturing results.
            </p>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
