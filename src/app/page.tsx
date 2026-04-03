import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import WhyUs from "@/components/sections/WhyUs";
import Portfolio from "@/components/sections/Portfolio";
import Pricing from "@/components/sections/Pricing";
import FAQ from "@/components/ui/FAQ";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="relative">
        <Hero />
        <WhyUs />
        <Portfolio />
        <Pricing />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
