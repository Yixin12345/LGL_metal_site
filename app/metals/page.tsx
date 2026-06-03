import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { ProductsSection } from "@/components/products-section";

export default function MetalsPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-[86px] sm:pt-[94px]">
        <ProductsSection />
      </main>
      <Footer />
    </>
  );
}
