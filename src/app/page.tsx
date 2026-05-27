import { VatProvider }      from "@/lib/vat-context";
import { Header }           from "@/components/Header";
import { Hero }             from "@/components/Hero";
import { SavingsMetrics }   from "@/components/SavingsMetrics";
import { MonthlyPayments }  from "@/components/MonthlyPayments";
import { PriceComparison }  from "@/components/PriceComparison";
import { Benefits }         from "@/components/Benefits";
import { CTASection }       from "@/components/CTASection";
import { Footer }           from "@/components/Footer";

export default function OfferPage() {
  return (
    <VatProvider>
      <Header />
      <main>
        <Hero />
        <div style={{ background: "#fff" }}>
          <SavingsMetrics />
          <MonthlyPayments />
          <PriceComparison />
          <Benefits />
        </div>
        <CTASection />
      </main>
      <Footer />
    </VatProvider>
  );
}
