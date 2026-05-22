import Image from "next/image";

import { Container } from "@/components/container";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { galleryItems } from "@/lib/site-data";

export function GallerySection() {
  return (
    <section id="projects" className="bg-white py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Materials"
            title="Material Focus & Supply Environments"
            description="Use these placeholders to later showcase hafnium, minor metals, warehousing, packing, and shipment activity with your own photography."
            align="center"
          />
        </Reveal>
        <div className="mt-14 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {galleryItems.map((item, index) => (
            <Reveal key={item.title} delay={index * 70}>
              <article className="group overflow-hidden rounded-[1.8rem] border border-slate-200 bg-slate-950 shadow-[0_18px_50px_rgba(15,23,42,0.08)]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={item.image}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(180deg,transparent_0%,rgba(8,17,31,0.75)_100%)]" />
                  <div className="absolute inset-x-0 bottom-0 p-6">
                    <h3 className="text-lg font-bold text-white">{item.title}</h3>
                    <p className="mt-3 text-sm leading-7 text-slate-200">
                      {item.caption}
                    </p>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
