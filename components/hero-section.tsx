import Image from "next/image";

import { Container } from "@/components/container";
import { CheckIcon } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { heroHighlights, homeImages } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-[94svh] items-center overflow-hidden bg-[var(--brand-navy-strong)] pt-28 sm:pt-32"
    >
      <Image
        src={homeImages.hero}
        alt="Rocket launch scene representing aerospace-related advanced manufacturing applications."
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(108deg,rgba(8,17,31,0.93)_8%,rgba(8,17,31,0.75)_44%,rgba(8,17,31,0.38)_100%)]" />
      <div className="grid-fade absolute inset-0 opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,0,0.18),transparent_22%)]" />
      <Container className="relative z-10 pb-18 pt-12 md:pb-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.08fr)_360px] lg:items-center">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-3 text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-slate-300">
              <span className="h-px w-10 bg-[var(--brand-copper)]" />
              Hafnium / Tungsten / Molybdenum / Niobium
            </div>
            <h1 className="text-balance mt-7 max-w-4xl text-4xl font-extrabold leading-[1.02] tracking-tight text-white sm:text-5xl lg:text-[5rem]">
              Minor metals for alloying and high-temperature manufacturing
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200/92 sm:text-lg">
              LGL Metal helps industrial buyers source hafnium, tungsten,
              molybdenum, and niobium with clearer commercial coordination,
              application awareness, and dependable follow-through from inquiry
              to shipment.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
              <LinkButton href="/#products">Explore Core Metals</LinkButton>
              <p className="text-sm leading-7 text-slate-300">
                Montreal-based supply coordination for North American and international buyers.
              </p>
            </div>
          </Reveal>
          <Reveal
            delay={150}
            className="rounded-[1.8rem] border border-white/12 bg-[rgba(8,17,31,0.36)] p-7 shadow-[0_24px_80px_rgba(2,6,23,0.26)] backdrop-blur-sm sm:p-8"
          >
            <div className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-slate-400">
              Core Supply Focus
            </div>
            <div className="mt-4 text-2xl font-bold leading-tight text-white">
              Four core metals. Cleaner sourcing conversations.
            </div>
            <div className="mt-7 space-y-0 divide-y divide-white/10">
              {heroHighlights.map((item) => (
                <div key={item} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
                  <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--brand-copper)]" />
                  <p className="text-sm leading-7 text-slate-200">{item}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
