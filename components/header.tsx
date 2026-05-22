"use client";

import { useEffect, useState } from "react";

import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { CloseIcon, MenuIcon } from "@/components/icons";
import { LinkButton } from "@/components/link-button";
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
          ? "bg-[rgba(8,17,31,0.94)] shadow-[0_18px_60px_rgba(2,6,23,0.32)] backdrop-blur-xl"
          : "bg-transparent",
      )}
    >
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <BrandMark invert />
          <nav className="hidden items-center gap-8 lg:flex">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-200 hover:text-white"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="hidden lg:flex">
            <LinkButton href="/#contact">Request a Quote</LinkButton>
          </div>
          <button
            type="button"
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/16 bg-white/8 text-white lg:hidden"
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
          "overflow-hidden border-t border-white/10 transition-[max-height,opacity] duration-300 lg:hidden",
          isMenuOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
      >
        <Container className="py-5">
          <nav className="flex flex-col gap-2">
            {navigation.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="rounded-2xl px-4 py-3 text-sm font-medium text-slate-200 hover:bg-white/8 hover:text-white"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <LinkButton href="/#contact" className="mt-3" onClick={() => setIsMenuOpen(false)}>
              Request a Quote
            </LinkButton>
          </nav>
        </Container>
      </div>
    </header>
  );
}
