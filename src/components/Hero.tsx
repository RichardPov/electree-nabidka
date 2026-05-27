"use client";

import { useState } from "react";
import { OFFER } from "@/lib/offer-data";
import { SavingsChart } from "./SavingsChart";
import { SignModal } from "./SignModal";
import { CallModal } from "./CallModal";

export function Hero() {
  const [signOpen, setSignOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

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

            <p className="hero-label fu2">S Electree ušetříte ročně</p>
            <div className="hero-amount fu2" aria-label={`${OFFER.savings.annual.toLocaleString("cs-CZ")} korun ročně`}>
              {OFFER.savings.annual.toLocaleString("cs-CZ")} Kč
            </div>
            <p className="hero-sub fu2">
              oproti vašemu současnému dodavateli {OFFER.current.supplier}
            </p>

            <div className="hero-ctas fu4">
              <button onClick={() => setSignOpen(true)} className="btn-hero-primary">
                Podepsat online
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button onClick={() => setCallOpen(true)} className="btn-hero-ghost">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.27a16 16 0 0 0 6 6l1.15-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 15.81l.01 1.11z"/>
                </svg>
                Zavolejte mi
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
      <CallModal isOpen={callOpen} onClose={() => setCallOpen(false)} />
    </>
  );
}
