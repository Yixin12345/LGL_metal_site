import { AboutSection } from "@/components/about-section";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";

export default function AboutPage() {
  return (
    <>
      <Header />
      <main id="main-content" className="pt-[86px] sm:pt-[94px]">
        <AboutSection />
      </main>
      <Footer />
    </>
  );
}
