import { BrandMark } from "@/components/brand-mark";
import { Container } from "@/components/container";
import { navigation, siteConfig } from "@/lib/site-data";

export function Footer() {
  return (
    <footer className="bg-[#0b1321] py-14 text-slate-300">
      <Container>
        <div className="grid gap-10 lg:grid-cols-[1.5fr_0.9fr_0.8fr]">
          <div>
            <BrandMark size="footer" />
            <p className="mt-6 max-w-sm text-sm leading-7 text-slate-400">
              Montreal-based supplier focused on hafnium, tungsten,
              molybdenum, niobium, and specialized industrial material
              requirements.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
              Quick Links
            </h3>
            <div className="mt-5 space-y-3">
              {navigation.slice(1).map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-sm text-slate-400 hover:text-white"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-[0.22em] text-white">
              Legal
            </h3>
            <div className="mt-5 space-y-3">
              <a href="/privacy-policy" className="block text-sm text-slate-400 hover:text-white">
                Privacy Policy
              </a>
              <a href="/terms-of-use" className="block text-sm text-slate-400 hover:text-white">
                Terms of Use
              </a>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-slate-500">
          Copyright 2026 {siteConfig.legalName}. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
