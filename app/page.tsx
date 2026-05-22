import { AboutSection } from "@/components/about-section";
import { CapabilitiesSection } from "@/components/capabilities-section";
import { ContactSection } from "@/components/contact-section";
import { CtaBanner } from "@/components/cta-banner";
import { Footer } from "@/components/footer";
import { GallerySection } from "@/components/gallery-section";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { IndustriesSection } from "@/components/industries-section";
import { QualitySafetySection } from "@/components/quality-safety-section";
import { ServicesSection } from "@/components/services-section";
import { TrustBar } from "@/components/trust-bar";

export default function Page() {
  return (
    <>
      <Header />
      <main id="main-content">
        <HeroSection />
        <TrustBar />
        <AboutSection />
        <ServicesSection />
        <CapabilitiesSection />
        <IndustriesSection />
        <GallerySection />
        <QualitySafetySection />
        <CtaBanner />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
