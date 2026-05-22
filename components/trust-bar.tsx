import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { trustItems } from "@/lib/site-data";

export function TrustBar() {
  return (
    <section className="relative -mt-10 z-20">
      <Container>
        <Reveal className="rounded-[2rem] border border-slate-200 bg-white shadow-[0_24px_70px_rgba(15,23,42,0.12)]">
          <div className="grid gap-0 divide-y divide-slate-200 sm:grid-cols-2 sm:divide-y-0 lg:grid-cols-4 lg:divide-x">
            {trustItems.map((item) => {
              const Icon = item.icon;

              return (
                <div key={item.title} className="flex items-center gap-4 px-6 py-6">
                  <span className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[rgba(184,115,51,0.12)] text-[var(--brand-copper)]">
                    <Icon className="size-5" />
                  </span>
                  <span className="text-sm font-semibold text-slate-800">
                    {item.title}
                  </span>
                </div>
              );
            })}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
