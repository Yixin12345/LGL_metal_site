import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { services } from "@/lib/site-data";

export function ServicesSection() {
  return (
    <section id="services" className="bg-white py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Products & Services"
            title="Materials and Supply Services"
            description="Commercial support for buyers who need technical metals, application-aware sourcing, and dependable delivery follow-up."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;

            return (
              <Reveal key={service.title} delay={index * 70}>
                <article className="group h-full rounded-[1.8rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-7 shadow-[0_18px_50px_rgba(15,23,42,0.06)] transition duration-300 hover:-translate-y-1.5 hover:border-[rgba(184,115,51,0.22)] hover:shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                  <div className="mb-6 h-1.5 w-16 rounded-full bg-[var(--brand-copper)]" />
                  <div className="flex h-13 w-13 items-center justify-center rounded-2xl bg-[rgba(184,115,51,0.12)] text-[var(--brand-copper)]">
                    <Icon className="size-6" />
                  </div>
                  <h3 className="mt-6 text-xl font-bold text-slate-900">
                    {service.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">
                    {service.description}
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
