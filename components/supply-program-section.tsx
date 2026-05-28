import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { supplyPrograms, workflowSteps } from "@/lib/site-data";

export function SupplyProgramSection() {
  return (
    <section
      id="supply"
      className="relative overflow-hidden bg-[#f8fafc] py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,115,51,0.07),transparent_24%)]" />
      <Container className="relative">
        <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] lg:items-start">
          <Reveal>
            <SectionHeading
              eyebrow="Supply Approach"
              title="Built Around Specification Clarity and Commercial Follow-Through"
              description="For specialty metals, buyers usually need more than a product name. They need the right form, the right application fit, and a smoother path from inquiry to shipment."
            />
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[1.8rem] border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)] sm:p-8">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-[var(--brand-copper)]">
                Commercial Workflow
              </p>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {workflowSteps.map((step, index) => (
                  <div
                    key={step.title}
                    className="rounded-[1.3rem] border border-slate-200 bg-slate-50/80 px-5 py-5"
                  >
                    <div className="flex items-center gap-3">
                      <span className="flex h-10 w-10 items-center justify-center rounded-full bg-[rgba(184,115,51,0.14)] text-sm font-bold text-[var(--brand-copper)]">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      <h3 className="text-base font-bold text-slate-900">
                        {step.title}
                      </h3>
                    </div>
                    <p className="mt-4 text-sm leading-7 text-slate-600">
                      {step.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
        <div className="mt-14 grid gap-6 lg:grid-cols-3">
          {supplyPrograms.map((program, index) => {
            const Icon = program.icon;

            return (
              <Reveal key={program.title} delay={index * 80}>
                <article className="h-full rounded-[1.7rem] border border-slate-200 bg-white p-7 shadow-[0_18px_45px_rgba(15,23,42,0.06)]">
                  <div className="mb-6 h-1 w-14 rounded-full bg-[var(--brand-copper)]" />
                  <span className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[rgba(184,115,51,0.12)] text-[var(--brand-copper)]">
                    <Icon className="size-6" />
                  </span>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {program.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {program.description}
                  </p>
                  <div className="mt-6 space-y-3">
                    {program.points.map((point) => (
                      <div key={point} className="rounded-[1.2rem] bg-slate-50 px-4 py-3 text-sm leading-7 text-slate-700">
                        {point}
                      </div>
                    ))}
                  </div>
                </article>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
