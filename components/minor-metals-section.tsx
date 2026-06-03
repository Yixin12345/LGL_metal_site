import Image from "next/image";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import chemImage from "@/chem.png";

const minorMetalGroups = [
  { name: "Electronic metals", examples: "Ga, Ge" },
  { name: "Power metals", examples: "Mo, Zr" },
  { name: "Structural metals", examples: "Cr, V" },
  { name: "Performance metals", examples: "Ti, Re" },
];

export function MinorMetalsSection() {
  return (
    <section
      id="minor-metals"
      className="relative overflow-hidden bg-[#08111f] py-20 text-slate-300 sm:py-24"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(184,115,51,0.16),transparent_28%)]" />
      <div className="grid-fade absolute inset-0 opacity-20" />
      <Container className="relative">
        <div className="mx-auto max-w-7xl">
          <Reveal>
            <div className="text-center">
              <p className="text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-[var(--brand-copper)]">
                About Minor Metals
              </p>
              <h2 className="mx-auto mt-4 max-w-4xl text-4xl font-bold tracking-tight text-white sm:text-5xl">
                Critical inputs for advanced industrial performance
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-slate-300 sm:text-lg">
                Minor metals are often low-volume, high-value materials that
                support demanding applications across aerospace, electronics,
                energy, medical, optics, catalysts, batteries, and renewable
                technologies.
              </p>
            </div>
          </Reveal>

          <Reveal delay={100}>
            <div className="mx-auto mt-10 max-w-5xl overflow-hidden rounded-[1.1rem] border border-white/10 bg-white/[0.04] shadow-[0_22px_60px_rgba(0,0,0,0.24)]">
              <Image
                src={chemImage}
                alt="Stylized periodic table of chemical elements"
                sizes="(max-width: 1024px) 100vw, 1024px"
                className="h-auto w-full"
              />
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="mt-10 rounded-[1.25rem] border border-white/10 bg-white/[0.045] p-5 shadow-[0_24px_70px_rgba(0,0,0,0.24)] backdrop-blur-sm sm:p-6 lg:p-7">
              <div className="space-y-3 text-sm leading-7 text-slate-300 sm:text-base">
                <p>
                  Traditionally, minor metals are those metals not traded on
                  formal exchanges, although cobalt and molybdenum are now
                  traded on the London Metal Exchange along with base metals.
                  Minor metals very often have lower volume, but often higher
                  value, critical to many industrial sectors.
                </p>
                <p>
                  Their applications cover industries from aerospace,
                  automotive, medical, optics, consumer electronics, catalysts,
                  batteries, and renewable energy technologies. They can be
                  found from capacitors for consumer electronics such as
                  tantalum and metallic cathodes for rechargeable batteries
                  such as cobalt to photovoltaic solar cells such as silicon
                  and semiconductor materials such as gallium and indium.
                </p>
                <p>
                  Minor metals are often defined by governments as critical or
                  strategic on the basis of their exceptional characteristics.
                  As alloying elements, they can give steel, nickel, aluminum,
                  and other base metals their desired or enhanced mechanical
                  properties, deformability, corrosion resistance, and other
                  essential performance characteristics.
                </p>
              </div>

              <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {minorMetalGroups.map((group) => (
                  <div
                    key={group.name}
                    className="rounded-[1rem] border border-white/10 bg-[#0d1828] px-5 py-4"
                  >
                    <p className="text-sm font-bold text-white">
                      {group.name}
                    </p>
                    <p className="mt-1 text-sm text-slate-400">
                      e.g. {group.examples}
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
