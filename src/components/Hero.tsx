"use client";

import { useState } from "react";
import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";
import { SavingsChart } from "./SavingsChart";
import { SignModal } from "./SignModal";
export function Hero() {
  const [signOpen, setSignOpen] = useState(false);
  const { vat } = useVat();

  const annualSavings = vat
    ? OFFER.savings.annual
    : Math.round(OFFER.savings.annual / (1 + OFFER.vat));

  return (
    <>
      <section className="hero-wrap">
        <div className="hero">
          {/* Left */}
          <div className="hero-left">
            <div className="hero-tag fu1">
              <span className="hero-tag-dot" aria-hidden="true" />
              <span className="hero-tag-text">
                Indikativní nabídka pro {OFFER.client.name}
              </span>
            </div>

            <p className="hero-label fu2">S Electree ušetříte ročně za elektřinu</p>
            <div className="hero-amount fu2" aria-label={`${annualSavings.toLocaleString("cs-CZ")} korun ročně`}>
              {annualSavings.toLocaleString("cs-CZ")} Kč
            </div>
            <p className="hero-sub fu2">
              oproti vašemu současnému dodavateli {OFFER.current.supplier}
            </p>

            <div className="hero-ctas fu4">
              <button onClick={() => setSignOpen(true)} className="btn-hero-primary">
                Podepsat
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>

            <p className="hero-disclaimer fu5">
              Předběžná kalkulace na základě dostupných dat. Konečné podmínky upřesníme společně.
            </p>
          </div>

          {/* Right: chart */}
          <div className="hero-right">
            <SavingsChart />
          </div>
        </div>
      </section>

      <SignModal isOpen={signOpen} onClose={() => setSignOpen(false)} />
    </>
  );
}
