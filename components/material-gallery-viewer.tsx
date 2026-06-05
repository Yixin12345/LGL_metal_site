"use client";

import { useState } from "react";
import Image from "next/image";

import type { ProductGalleryItem } from "@/lib/site-data";

export function MaterialGalleryViewer({
  items,
}: {
  items: ProductGalleryItem[];
}) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeItem = items[activeIndex];

  if (!activeItem) {
    return (
      <div className="rounded-[1.5rem] border border-slate-200 bg-white p-8 text-sm leading-7 text-slate-500 shadow-[0_24px_60px_rgba(15,23,42,0.08)]">
        Additional gallery images are not available for this material yet.
      </div>
    );
  }

  return (
    <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4 shadow-[0_24px_60px_rgba(15,23,42,0.08)] sm:p-5">
      <div className="grid gap-5 lg:grid-cols-[minmax(0,1fr)_240px]">
        <div className="overflow-hidden rounded-[1.15rem] border border-slate-200 bg-[linear-gradient(180deg,#f8fafc_0%,#edf2f7_100%)]">
          <div className="relative h-[420px] sm:h-[500px] lg:h-[560px]">
            {activeItem.videoSrc ? (
              <video
                src={activeItem.videoSrc}
                controls
                playsInline
                preload="metadata"
                className="h-full w-full bg-slate-950 object-contain"
              />
            ) : activeItem.image ? (
              <Image
                src={activeItem.image}
                alt={activeItem.title}
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 760px"
                className="object-contain p-3 sm:p-5"
              />
            ) : null}
          </div>
        </div>

        <div className="flex min-h-0 flex-col rounded-[1.15rem] border border-slate-200 bg-slate-50 p-4">
          <p className="text-[0.68rem] font-semibold uppercase tracking-[0.24em] text-[var(--brand-copper)]">
            Gallery
          </p>
          <h2 className="mt-3 text-xl font-bold leading-tight text-slate-900">
            {activeItem.title}
          </h2>
          {activeItem.caption ? (
            <p className="mt-3 text-sm leading-7 text-slate-600">
              {activeItem.caption}
            </p>
          ) : null}
          <p className="mt-4 text-sm font-medium text-slate-400">
            {String(activeIndex + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
          </p>

          <div className="mt-5 grid grid-cols-2 gap-3 lg:grid-cols-1">
            {items.map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                type="button"
                onClick={() => setActiveIndex(index)}
                className={`grid grid-cols-[68px_1fr] items-center gap-3 rounded-[0.9rem] border bg-white p-2 text-left transition ${
                  activeIndex === index
                    ? "border-[var(--brand-copper)] shadow-[0_10px_22px_rgba(184,115,51,0.14)]"
                    : "border-slate-200 hover:border-slate-300"
                }`}
                aria-label={`Show ${item.title}`}
              >
                <span className="relative h-14 overflow-hidden rounded-[0.65rem] bg-slate-100">
                  {item.videoSrc ? (
                    <span className="flex h-full w-full items-center justify-center text-[0.62rem] font-semibold uppercase tracking-[0.16em] text-slate-500">
                      Video
                    </span>
                  ) : item.image ? (
                    <Image
                      src={item.image}
                      alt=""
                      fill
                      sizes="68px"
                      className="object-contain p-1"
                    />
                  ) : null}
                </span>
                <span className="min-w-0 text-sm font-semibold leading-5 text-slate-700">
                  {item.title}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
