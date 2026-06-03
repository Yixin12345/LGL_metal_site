import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";

import { Container } from "@/components/container";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ArrowRightIcon } from "@/components/icons";
import { MaterialGalleryViewer } from "@/components/material-gallery-viewer";
import { productMetals } from "@/lib/site-data";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getMaterial(slug: string) {
  return productMetals.find((metal) => metal.slug === slug);
}

export function generateStaticParams() {
  return productMetals.map((metal) => ({
    slug: metal.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const material = getMaterial(slug);

  if (!material) {
    return {};
  }

  return {
    title: `${material.name} | LGL Metal Material Gallery`,
    description: Array.isArray(material.description)
      ? material.description.join(" ")
      : material.description,
  };
}

export default async function MaterialPage({ params }: PageProps) {
  const { slug } = await params;
  const material = getMaterial(slug);

  if (!material) {
    notFound();
  }

  const galleryItems = material.gallery.filter((item) => item.image !== material.image);

  return (
    <>
      <Header />
      <main className="bg-white pt-[118px]" id="main-content">
        <section className="bg-[linear-gradient(180deg,#f6f9fc_0%,#ffffff_100%)] py-12 sm:py-16">
          <Container>
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <Link
                href="/#products"
                className="inline-flex items-center gap-2 text-sm font-semibold text-slate-600 hover:text-slate-950"
              >
                <ArrowRightIcon className="size-4 rotate-180" />
                Back to metals
              </Link>
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(420px,1.1fr)] lg:items-center">
              <div>
                <div className="flex items-end gap-5">
                  <h1 className="text-5xl font-bold tracking-tight text-slate-950 sm:text-6xl">
                    {material.name}
                  </h1>
                  <span className="text-5xl font-semibold leading-none text-slate-200 sm:text-6xl">
                    {material.symbol}
                  </span>
                </div>
                <div className="mt-6 space-y-4 text-base leading-8 text-slate-600 sm:text-lg">
                  {(Array.isArray(material.description)
                    ? material.description
                    : [material.description]
                  ).map((paragraph) => (
                    <p key={paragraph}>{paragraph}</p>
                  ))}
                </div>
              </div>

              <div className="overflow-hidden rounded-[1.5rem] border border-slate-200 bg-slate-950 shadow-[0_24px_60px_rgba(15,23,42,0.12)]">
                <Image
                  src={material.image}
                  alt={`${material.name} product visual`}
                  priority
                  sizes="(max-width: 1024px) 100vw, 560px"
                  className="h-auto w-full"
                />
              </div>
            </div>
          </Container>
        </section>

        <section className="py-16 sm:py-20">
          <Container>
            <div className="grid gap-10 lg:grid-cols-[330px_minmax(0,1fr)]">
              <aside className="space-y-6">
                <div className="rounded-[1.25rem] border border-slate-200 bg-slate-50 p-6">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">
                    Supply Forms
                  </h2>
                  <div className="mt-5 space-y-3">
                    {material.forms.map((form) => (
                      <div key={form} className="flex items-start gap-3 text-sm leading-7 text-slate-700">
                        <span className="mt-3 h-1.5 w-1.5 rounded-full bg-[var(--brand-copper)]" />
                        {form}
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-[1.25rem] border border-slate-200 bg-white p-6">
                  <h2 className="text-sm font-semibold uppercase tracking-[0.24em] text-slate-900">
                    General Info
                  </h2>
                  <dl className="mt-5 space-y-4">
                    {material.generalInfo.map((item) => (
                      <div key={item.label}>
                        <dt className="text-[0.68rem] font-semibold uppercase tracking-[0.2em] text-slate-400">
                          {item.label}
                        </dt>
                        <dd className="mt-1 text-sm font-semibold text-slate-800">
                          {item.value}
                        </dd>
                      </div>
                    ))}
                  </dl>
                </div>
              </aside>

              <div>
                <div className="mb-7">
                  <p className="text-[0.74rem] font-semibold uppercase tracking-[0.28em] text-[var(--brand-copper)]">
                    Material Gallery
                  </p>
                  <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-950">
                    {material.name} photos and process views
                  </h2>
                </div>
                <MaterialGalleryViewer items={galleryItems} />
              </div>
            </div>
          </Container>
        </section>
      </main>
      <Footer />
    </>
  );
}
