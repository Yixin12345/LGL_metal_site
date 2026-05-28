"use client";

import { startTransition, useEffect, useState } from "react";
import Image from "next/image";

import { Container } from "@/components/container";
import { ArrowRightIcon } from "@/components/icons";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { productGallery } from "@/lib/site-data";

export function ProductGallerySection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = productGallery[activeIndex];

  function goToIndex(nextIndex: number) {
    startTransition(() => {
      setActiveIndex(nextIndex);
    });
  }

  function goToPrevious() {
    goToIndex((activeIndex - 1 + productGallery.length) % productGallery.length);
  }

  function goToNext() {
    goToIndex((activeIndex + 1) % productGallery.length);
  }

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % productGallery.length);
    }, 4500);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="gallery" className="bg-white py-24 sm:py-28">
      <Container>
        <Reveal>
          <SectionHeading
            eyebrow="Product Images"
            title="Material Photos and Process Views"
            description="A single viewing window keeps the section cleaner while still letting visitors move through the full set of product and production images."
            align="center"
          />
        </Reveal>
        <Reveal delay={80}>
          <div className="mt-14 rounded-[2rem] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fafc_100%)] p-5 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-6">
            <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_320px] lg:items-stretch">
              <div className="overflow-hidden rounded-[1.7rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#edf2f7_100%)]">
                <div className="aspect-[16/10] w-full overflow-hidden">
                  <div
                    className="flex h-full transition-transform duration-700 ease-out"
                    style={{
                      width: `${productGallery.length * 100}%`,
                      transform: `translateX(-${activeIndex * (100 / productGallery.length)}%)`,
                    }}
                  >
                  {productGallery.map((item, index) => (
                    <div
                      key={`${item.title}-${index}`}
                      className="relative h-full overflow-hidden"
                      style={{ width: `${100 / productGallery.length}%` }}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        fill
                        sizes="(max-width: 1024px) 100vw, 70vw"
                        className="object-contain p-4 sm:p-6"
                      />
                    </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex flex-col rounded-[1.7rem] border border-slate-200 bg-white p-6 sm:p-7">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-[0.72rem] font-semibold uppercase tracking-[0.28em] text-[var(--brand-copper)]">
                    Gallery Image
                  </p>
                  <p className="text-sm font-medium text-slate-400">
                    {String(activeIndex + 1).padStart(2, "0")} / {String(productGallery.length).padStart(2, "0")}
                  </p>
                </div>
                <h3 className="mt-5 text-2xl font-bold leading-tight text-slate-900">
                  {activeItem.title}
                </h3>
                <p className="mt-4 text-sm leading-8 text-slate-600 sm:text-base">
                  {activeItem.caption}
                </p>
                <p className="mt-4 text-sm leading-7 text-slate-400">
                  The slideshow advances automatically. You can also use the controls below to move between images.
                </p>
                <div className="mt-8 flex gap-3">
                  <button
                    type="button"
                    onClick={goToPrevious}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
                    aria-label="Show previous image"
                  >
                    <ArrowRightIcon className="size-5 rotate-180" />
                  </button>
                  <button
                    type="button"
                    onClick={goToNext}
                    className="inline-flex h-12 w-12 items-center justify-center rounded-full border border-slate-300 bg-white text-slate-900 hover:border-slate-400 hover:bg-slate-50"
                    aria-label="Show next image"
                  >
                    <ArrowRightIcon className="size-5" />
                  </button>
                </div>
                <div className="mt-8 grid grid-cols-3 gap-3">
                  {productGallery.map((item, index) => (
                    <button
                      key={`${item.title}-${index}`}
                      type="button"
                      onClick={() => goToIndex(index)}
                      className={`overflow-hidden rounded-[1rem] border transition ${
                        activeIndex === index
                          ? "border-[var(--brand-copper)] shadow-[0_10px_24px_rgba(184,115,51,0.16)]"
                          : "border-slate-200 hover:border-slate-300"
                      }`}
                      aria-label={`Show image ${index + 1}: ${item.title}`}
                    >
                      <Image
                        src={item.image}
                        alt=""
                        sizes="120px"
                        className="h-20 w-full object-cover"
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
