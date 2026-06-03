import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { MinorMetalsSection } from "@/components/minor-metals-section";
import { ProductsSection } from "@/components/products-section";
import { QualitySafetySection } from "@/components/quality-safety-section";
import { SupplyProgramSection } from "@/components/supply-program-section";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <AboutSection />
        <MinorMetalsSection />
        <ProductsSection />
        <SupplyProgramSection />
        <QualitySafetySection />
      </main>
      <Footer />
    </>
  );
}
