"use client";

import { useEffect, useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { cn } from "@/lib/cn";
import { navigation } from "@/lib/site-data";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 28);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  const isSolid = isScrolled || isMenuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 transition-all duration-300",
        isSolid
          ? "border-b border-slate-200 bg-[rgba(255,255,255,0.97)] shadow-[0_12px_30px_rgba(15,23,42,0.05)] backdrop-blur-md"
          : "border-b border-slate-200/80 bg-[rgba(255,255,255,0.92)] backdrop-blur-md",
      )}
    >
      <Container>
        <div className="flex h-[86px] items-center justify-between gap-6 sm:h-[94px]">
          <BrandMark />
          <nav className="hidden items-center gap-2 rounded-full border border-slate-200 bg-white/88 p-2 shadow-[0_10px_24px_rgba(15,23,42,0.04)] lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-full px-4 py-2 text-[0.74rem] font-semibold uppercase tracking-[0.16em] text-slate-600 hover:bg-slate-100 hover:text-slate-950 xl:px-5 xl:text-[0.78rem]"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-[1rem] border border-slate-300 bg-white text-slate-900 lg:hidden"
            aria-expanded={isMenuOpen}
            aria-label={isMenuOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsMenuOpen((current) => !current)}
          >
            {isMenuOpen ? <CloseIcon /> : <MenuIcon />}
          </button>
        </div>
      </Container>
      <div
        className={cn(
          "overflow-hidden border-t border-slate-200 bg-white transition-[max-height,opacity] duration-300 lg:hidden",
          isMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="py-5">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-[1rem] px-4 py-3 text-sm font-medium text-slate-700 hover:bg-slate-100 hover:text-slate-950"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </nav>
        </Container>
      </div>
    </header>
  );
}
