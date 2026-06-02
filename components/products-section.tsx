import Image from "next/image";
import Link from "next/link";

import { Container } from "@/components/container";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { applicationInsights, productMetals } from "@/lib/site-data";

export function ProductsSection() {
  return (
    <section
      id="products"
      className="relative overflow-hidden bg-[linear-gradient(180deg,#f6f9fc_0%,#eef3f8_100%)] py-20 sm:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,115,51,0.08),transparent_24%)]" />
      <Container className="relative max-w-[92rem]">
        <Reveal>
          <SectionHeading
            eyebrow="Product Portfolio"
            title="Four Core Metals"
            description="Each metal is presented with equal visual weight, along with the practical application context buyers need when evaluating form, use case, and supply fit."
            align="center"
          />
        </Reveal>
        <div className="mt-12 grid gap-6 lg:grid-cols-2 xl:gap-7">
          {productMetals.map((metal, index) => {
            const insight = applicationInsights[index];

            return (
              <Reveal key={metal.name} delay={index * 80}>
                <Link
                  href={`/materials/${metal.slug}`}
                  className="group flex h-full flex-col overflow-hidden rounded-[1.1rem] border border-slate-200/80 bg-white shadow-[0_14px_34px_rgba(15,23,42,0.055)] transition duration-300 hover:-translate-y-1 hover:border-slate-300 hover:shadow-[0_20px_44px_rgba(15,23,42,0.09)] focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[var(--brand-copper)]"
                  aria-label={`View ${metal.name} material gallery`}
                >
                  <div className="relative min-h-[220px] overflow-hidden bg-slate-950 sm:min-h-[250px] lg:min-h-[260px]">
                    <Image
                      src={metal.image}
                      alt={`${metal.name} product visual`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 50vw"
                      className="object-cover transition duration-500 group-hover:scale-[1.03]"
                    />
                  </div>
                  <div className="flex min-w-0 flex-1 flex-col p-5 sm:p-6">
                    <div className="flex items-end justify-between gap-4">
                      <div className="min-w-0">
                        <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--brand-copper)]">
                          {metal.kicker}
                        </p>
                        <h3 className="mt-2 text-[1.55rem] font-bold leading-tight text-slate-900">
                          {metal.name}
                        </h3>
                      </div>
                      <span className="text-[2.55rem] font-semibold leading-none tracking-tight text-slate-200">
                        {metal.symbol}
                      </span>
                    </div>
                    <p className="mt-4 text-sm leading-6 text-slate-600">
                      {metal.description}
                    </p>
                    <div className="mt-4 space-y-2 border-t border-slate-200/80 pt-4">
                      {insight.details.slice(0, 2).map((detail) => (
                        <div
                          key={detail}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-700"
                        >
                          <span className="mt-2.5 h-1.5 w-1.5 rounded-full bg-[var(--brand-copper)]" />
                          {detail}
                        </div>
                      ))}
                    </div>
                    <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-[var(--brand-copper)]">
                      View material gallery
                      <ArrowRightIcon className="size-4 transition group-hover:translate-x-1" />
                    </div>
                  </div>
                </Link>
              </Reveal>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
