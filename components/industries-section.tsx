import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { industries } from "@/lib/site-data";

export function IndustriesSection() {
  return (
    <section className="bg-[var(--color-background)] py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Applications"
            title="Applications and Markets We Support"
            description="Our supply focus aligns with technical buyers across plasma cutting, specialty alloys, recycling, industrial distribution, and advanced manufacturing."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {industries.map((industry, index) => {
            const Icon = industry.icon;

            return (
              <Reveal key={industry.title} delay={index * 60}>
                <article className="h-full rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)]">
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[rgba(184,115,51,0.12)] text-[var(--brand-copper)]">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {industry.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {industry.description}
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
