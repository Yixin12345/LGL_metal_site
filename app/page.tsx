import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { ProductGallerySection } from "@/components/product-gallery-section";
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
        <ProductsSection />
        <ProductGallerySection />
        <SupplyProgramSection />
        <QualitySafetySection />
      </main>
      <Footer />
    </>
  );
}
