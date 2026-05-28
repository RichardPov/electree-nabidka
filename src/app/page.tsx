import { VatProvider }         from "@/lib/vat-context";
import { Header }              from "@/components/Header";
import { Hero }                from "@/components/Hero";
import { KeyMetrics }          from "@/components/KeyMetrics";
import { PaymentBreakdown }    from "@/components/PaymentBreakdown";
import { Features }            from "@/components/Features";
import { SupplierComparison }  from "@/components/SupplierComparison";
import { ClientSection }       from "@/components/ClientSection";
import { CTASection }          from "@/components/CTASection";
import { Footer }              from "@/components/Footer";

export default function OfferPage() {
  return (
    <VatProvider>
      <Header />
      <main>
        <Hero />
        <div style={{ background: "#fff" }}>
          <KeyMetrics />
          <SupplierComparison />
          <PaymentBreakdown />
          <Features />
          <ClientSection />
        </div>
        <CTASection />
      </main>
      <Footer />
    </VatProvider>
  );
}
