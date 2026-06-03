import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { QualitySafetySection } from "@/components/quality-safety-section";

export default function QualityPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-[86px] sm:pt-[94px]">
        <QualitySafetySection />
      </main>
      <Footer />
    </>
  );
}
