import Image from "next/image";

import { Container } from "@/components/container";
import { ArrowRightIcon } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
import { Reveal } from "@/components/reveal";
import { homeImages } from "@/lib/site-data";

export function CtaBanner() {
  return (
    <section className="bg-white py-8 sm:py-12">
      <Container>
        <Reveal>
          <div className="relative overflow-hidden rounded-[2rem] bg-[var(--brand-navy-strong)] px-6 py-16 sm:px-10 lg:px-14">
            <Image
              src={homeImages.cta}
              alt="Industrial metal processing environment representing specialized material sourcing."
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(8,17,31,0.9)_15%,rgba(8,17,31,0.72)_55%,rgba(8,17,31,0.84)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(201,151,0,0.18),transparent_28%)]" />
            <div className="relative z-10 max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                Start an Inquiry
              </p>
              <h2 className="text-balance mt-4 text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                Need a Qualified Source for Hafnium or Minor Metals?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-slate-200 sm:text-lg">
                Share the material, grade, quantity, and destination, and we
                will respond with the most practical next step.
              </p>
              <div className="mt-10">
                <LinkButton
                  href="/#contact"
                  icon={<ArrowRightIcon className="size-4" />}
                >
                  Request a Quote
                </LinkButton>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
