import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

type LegalSection = {
  title: string;
  body: string;
};

export function LegalPage({
  title,
  description,
  sections,
}: {
  title: string;
  description: string;
  sections: LegalSection[];
}) {
  return (
    <>
      <Header />
      <main id="main-content" className="bg-[var(--color-background)] pt-24">
        <section className="bg-[linear-gradient(135deg,#08111f_0%,#0f172a_55%,#131f32_100%)] py-20 text-white">
          <Container>
            <div className="max-w-3xl">
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-slate-300">
                Legal
              </p>
              <h1 className="text-balance mt-4 text-4xl font-extrabold tracking-tight sm:text-5xl">
                {title}
              </h1>
              <p className="mt-6 text-base leading-8 text-slate-200 sm:text-lg">
                {description}
              </p>
            </div>
          </Container>
        </section>
        <section className="py-20">
          <Container>
            <div className="mx-auto max-w-4xl rounded-[2rem] border border-slate-200 bg-white p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] sm:p-10">
              <div className="space-y-10">
                {sections.map((section) => (
                  <article key={section.title}>
                    <h2 className="text-2xl font-bold text-slate-900">{section.title}</h2>
                    <p className="mt-4 text-base leading-8 text-slate-600">
                      {section.body}
                    </p>
                  </article>
                ))}
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
