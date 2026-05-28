import Image from "next/image";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { applicationInsights, productMetals } from "@/lib/site-data";

export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f9fc_0%,#eef3f8_100%)] py-24 sm:py-28"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,115,51,0.08),transparent_24%)]" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Product Portfolio"
            title="Four Core Metals"
            description="Each metal is presented with equal visual weight, along with the practical application context buyers need when evaluating form, use case, and supply fit."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-8 md:grid-cols-2 md:[grid-auto-rows:1fr]">
          {productMetals.map((metal, index) => {
            const insight = applicationInsights[index];

            return (
              <Reveal key={metal.name} delay={index * 80}>
                <article className="group flex h-full flex-col overflow-hidden rounded-[1.85rem] border border-slate-200/80 bg-white shadow-[0_18px_45px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_24px_55px_rgba(15,23,42,0.1)]">
                  <div className="overflow-hidden bg-slate-950">
                    <Image
                      src={metal.image}
                      alt={`${metal.name} product visual`}
                      sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 40vw"
                      className="h-auto w-full transition duration-500 group-hover:scale-[1.02]"
                    />
                  </div>
                  <div className="flex flex-1 flex-col border-t border-slate-200/90 p-7 sm:p-8">
                    <div className="flex items-end justify-between gap-4">
                      <div>
                        <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--brand-copper)]">
                          {metal.kicker}
                        </p>
                        <h3 className="mt-3 text-[1.85rem] font-bold leading-tight text-slate-900">
                          {metal.name}
                        </h3>
                      </div>
                      <span className="text-[2.75rem] font-semibold leading-none tracking-tight text-slate-200">
                        {metal.symbol}
                      </span>
                    </div>
                    <p className="mt-5 text-sm leading-8 text-slate-600 sm:text-base">
                      {metal.description}
                    </p>
                    <div className="mt-6 border-t border-slate-200/80 pt-6">
                      <p className="text-[0.72rem] font-semibold uppercase tracking-[0.24em] text-slate-500">
                        {insight.eyebrow}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-slate-700">
                        {insight.summary}
                      </p>
                    </div>
                    <div className="mt-6 space-y-3 border-t border-slate-200/80 pt-6">
                      {insight.details.map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-3 text-sm leading-7 text-slate-700"
                        >
                          <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--brand-copper)]" />
                          {detail}
                        </div>
                      ))}
                    </div>
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
