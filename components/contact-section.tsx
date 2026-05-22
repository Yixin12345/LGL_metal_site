import { ContactForm } from "@/components/contact-form";
import { Container } from "@/components/container";
import { MailIcon, MapPinIcon, PhoneIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { siteConfig } from "@/lib/site-data";

const contactCards = [
  {
    title: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: MailIcon,
  },
  {
    title: "Phone",
    value: siteConfig.phone,
    href: `tel:${siteConfig.phone.replace(/[^\d+]/g, "")}`,
    icon: PhoneIcon,
  },
  {
    title: "Location",
    value: siteConfig.location,
    href: undefined,
    icon: MapPinIcon,
  },
];

export function ContactSection() {
  return (
    <section id="contact" className="bg-[var(--color-background)] py-24 sm:py-28">
      <Container>
        <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
          <Reveal>
            <div className="overflow-hidden rounded-[2rem] bg-[linear-gradient(135deg,#08111f_0%,#0f172a_55%,#131f32_100%)] p-8 text-white shadow-[0_24px_80px_rgba(2,6,23,0.22)] sm:p-10">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                Contact
              </p>
              <h2 className="text-balance mt-4 text-3xl font-extrabold tracking-tight sm:text-4xl">
                Contact LL Metal Tech
              </h2>
              <p className="mt-6 text-base leading-8 text-slate-200">
                Tell us the metal, purity, form, quantity, and delivery market
                you need.
              </p>
              <div className="mt-10 space-y-4">
                {contactCards.map((card) => {
                  const Icon = card.icon;

                  return (
                    <div
                      key={card.title}
                      className="flex items-start gap-4 rounded-[1.6rem] border border-white/10 bg-white/8 px-5 py-5"
                    >
                      <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(184,115,51,0.18)] text-[var(--brand-gold)]">
                        <Icon className="size-5" />
                      </span>
                      <div>
                        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                          {card.title}
                        </p>
                        {card.href ? (
                          <a
                            href={card.href}
                            className="mt-2 inline-block text-sm leading-7 text-white hover:text-[var(--brand-gold)]"
                          >
                            {card.value}
                          </a>
                        ) : (
                          <p className="mt-2 text-sm leading-7 text-white">{card.value}</p>
                        )}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="mt-10 rounded-[1.8rem] border border-white/10 bg-[rgba(255,255,255,0.06)] p-6">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.22em] text-slate-300">
                      Map Placeholder
                    </p>
                    <p className="mt-2 text-sm leading-7 text-slate-200">
                      Montreal, Quebec, Canada
                    </p>
                  </div>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-white/12 bg-white/8 text-[var(--brand-gold)]">
                    <MapPinIcon className="size-5" />
                  </span>
                </div>
                <div className="mt-5 h-48 rounded-[1.4rem] border border-white/10 bg-[linear-gradient(135deg,rgba(255,255,255,0.06),rgba(255,255,255,0.02))] p-5">
                  <div className="relative h-full overflow-hidden rounded-[1.1rem] border border-dashed border-white/14">
                    <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.06)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.06)_1px,transparent_1px)] bg-[size:32px_32px]" />
                    <div className="absolute left-[36%] top-[42%] flex items-center gap-2 rounded-full bg-[rgba(184,115,51,0.18)] px-3 py-2 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--brand-gold)]">
                      <MapPinIcon className="size-4" />
                      Montreal
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={120}>
            <div className="rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-10">
              <SectionHeading
                eyebrow="Request a Quote"
                title="Start a Supply Inquiry"
                description="Send your requested material, target specification, and commercial details. LL Metal Tech can then review availability, sourcing route, and next-step requirements."
              />
              <div className="mt-10">
                <ContactForm />
              </div>
            </div>
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
