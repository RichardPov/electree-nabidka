import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { SavingsMetrics } from "@/components/SavingsMetrics";
import { PriceComparison } from "@/components/PriceComparison";
import { Benefits } from "@/components/Benefits";
import { CTASection } from "@/components/CTASection";
import { Footer } from "@/components/Footer";

export default function OfferPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-1">
        <Hero />
        <SavingsMetrics />
        <PriceComparison />

        {/* Divider between alternating sections */}
        <div style={{ borderTop: "1px solid #D1DFD8" }} />

        <Benefits />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
