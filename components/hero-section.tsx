import Image from "next/image";

import { Container } from "@/components/container";
import { ArrowRightIcon, CheckIcon } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { heroHighlights, homeImages } from "@/lib/site-data";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative isolate flex min-h-screen items-end overflow-hidden bg-[var(--brand-navy-strong)] pt-24"
    >
      <Image
        src={homeImages.hero}
        alt="Industrial heavy-equipment environment representing demanding material supply applications."
        fill
        priority
        quality={85}
        sizes="100vw"
        className="object-cover object-center"
      />
      <div className="absolute inset-0 bg-[linear-gradient(105deg,rgba(8,17,31,0.94)_10%,rgba(8,17,31,0.74)_45%,rgba(8,17,31,0.48)_100%)]" />
      <div className="grid-fade absolute inset-0 opacity-80" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,0,0.22),transparent_24%)]" />
      <Container className="relative z-10 pb-16 pt-14 md:pb-20 lg:pb-24">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,1.1fr)_400px] lg:items-end">
          <Reveal className="max-w-3xl">
            <div className="inline-flex items-center gap-3 rounded-full border border-white/12 bg-white/6 px-4 py-2 text-xs font-semibold uppercase tracking-[0.22em] text-slate-200 backdrop-blur-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-[var(--brand-copper)]" />
              Hafnium / Minor Metals / Global Supply Coordination
            </div>
            <h1 className="text-balance mt-7 max-w-4xl text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-7xl">
              Specialized Hafnium &amp; Minor Metal Supply for Demanding
              Industrial Applications
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
              Based in Montreal, LL Metal Tech supports plasma cutting,
              recycling, trading, and manufacturing customers with niche metal
              sourcing, responsive coordination, and quality-minded delivery.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <LinkButton
                href="/#services"
                icon={<ArrowRightIcon className="size-4" />}
              >
                Explore Our Materials
              </LinkButton>
              <LinkButton href="/#contact" variant="inverse">
                Contact Us
              </LinkButton>
            </div>
          </Reveal>
          <Reveal
            delay={150}
            className="rounded-[2rem] border border-white/14 bg-[rgba(255,255,255,0.08)] p-6 shadow-[0_24px_80px_rgba(2,6,23,0.34)] backdrop-blur-xl sm:p-8"
          >
            <div className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
              Operational Focus
            </div>
            <div className="mt-4 text-2xl font-bold text-white">
              A niche supplier for technical metal requirements.
            </div>
            <div className="mt-8 space-y-4">
              {heroHighlights.map((item) => (
                <div
                  key={item}
                  className="flex items-start gap-3 rounded-2xl border border-white/10 bg-white/8 px-4 py-4"
                >
                  <span className="mt-0.5 flex h-9 w-9 items-center justify-center rounded-full bg-[rgba(184,115,51,0.18)] text-[var(--brand-gold)]">
                    <CheckIcon className="size-4" />
                  </span>
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
