import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SupplyProgramSection } from "@/components/supply-program-section";

export default function SupplyPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-[86px] sm:pt-[94px]">
        <SupplyProgramSection />
      </main>
      <Footer />
    </>
  );
}
