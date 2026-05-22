import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { capabilities } from "@/lib/site-data";

export function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="relative overflow-hidden bg-[linear-gradient(135deg,#08111f_0%,#0f172a_55%,#131f32_100%)] py-24 sm:py-28"
    >
      <div className="grid-fade absolute inset-0 opacity-70" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(201,151,0,0.18),transparent_28%)]" />
      <Container className="relative">
        <Reveal>
          <SectionHeading
            eyebrow="Capabilities"
            title="How LL Metal Tech Supports Niche Metal Supply"
            description="From initial inquiry and purity discussion to packaging and shipment follow-up, LL Metal Tech helps buyers navigate hard-to-source metal requirements with clearer commercial coordination."
            align="center"
            invert
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map((capability, index) => (
            <Reveal key={capability.title} delay={index * 70}>
              <article className="h-full rounded-[1.8rem] border border-white/10 bg-white/6 p-7 backdrop-blur-sm">
                <div className="flex items-center gap-4">
                  <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[rgba(184,115,51,0.18)] text-sm font-bold text-[var(--brand-gold)]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                  <h3 className="text-lg font-bold text-white">{capability.title}</h3>
                </div>
                <p className="mt-5 text-sm leading-7 text-slate-300">
                  {capability.description}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
