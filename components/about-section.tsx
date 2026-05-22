import Image from "next/image";

import { Container } from "@/components/container";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { aboutPoints, homeImages } from "@/lib/site-data";

export function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden bg-[var(--color-background)] py-24 sm:py-28"
    >
      <div className="slate-grid absolute inset-0 opacity-40" />
      <Container className="relative">
        <div className="grid gap-14 lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)] lg:items-center">
          <Reveal>
            <SectionHeading
              eyebrow="About Us"
              title="A Montreal-Based Niche Market Supplier"
              description="LL Metal Tech is a specialized supplier focused on hafnium for plasma cutting electrodes, along with selected minor metals, alloys, and high-value metal materials for industrial buyers. We help customers secure hard-to-source inputs with commercial responsiveness and practical coordination."
            />
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
              Our position in Canada, combined with relationships across qualified
              producers and processors, allows us to support customers who need
              purity-conscious supply, reliable communication, and timely
              movement of material.
            </p>
            <div className="mt-10">
              <LinkButton
                href="/#services"
                variant="secondary"
                icon={<ArrowRightIcon className="size-4" />}
              >
                See Supply Services
              </LinkButton>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-5 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-6">
              <div className="relative overflow-hidden rounded-[1.6rem]">
                <Image
                  src={homeImages.about}
                  alt="Industrial processing environment representing specialized metal sourcing and supply."
                  width={920}
                  height={640}
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="h-[300px] w-full object-cover sm:h-[360px]"
                />
                <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(8,17,31,0.55)_100%)]" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <div className="max-w-md rounded-3xl border border-white/12 bg-[rgba(8,17,31,0.68)] p-5 backdrop-blur-md">
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                      Supply Focus
                    </p>
                    <p className="mt-3 text-sm leading-7 text-slate-100">
                      Minor metals, hafnium, and application-driven sourcing
                      support for North American and global customers.
                    </p>
                  </div>
                </div>
              </div>
              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                {aboutPoints.map((point) => (
                  <div
                    key={point}
                    className="flex items-start gap-3 rounded-2xl border border-slate-200 bg-slate-50 px-4 py-4"
                  >
                    <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(184,115,51,0.12)] text-[var(--brand-copper)]">
                      <CheckIcon className="size-4" />
                    </span>
                    <p className="text-sm font-medium leading-7 text-slate-700">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
