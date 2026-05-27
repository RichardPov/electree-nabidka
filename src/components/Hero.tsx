"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

const chips = [
  {
    label: "Bez skrytých poplatků",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
    ),
  },
  {
    label: "Fixace ceny",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="3" y="11" width="18" height="11" rx="2"/>
        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
      </svg>
    ),
  },
  {
    label: "Jednoduchý přechod",
    icon: (
      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor"
        strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M5 12h14M12 5l7 7-7 7"/>
      </svg>
    ),
  },
];

export function Hero() {
  const { vat } = useVat();

  const annualSavings = vat
    ? OFFER.savings.annual
    : Math.round(OFFER.savings.annual / (1 + OFFER.vat));

  return (
    <section className="hero-wrap">
      <div className="hero hero-single">
        <div className="hero-tag fu1">
          <span className="hero-tag-dot" aria-hidden="true" />
          <span className="hero-tag-text">Nabídka pro {OFFER.client.name}</span>
        </div>

        <p className="hero-label fu2">S Electree ušetříte ročně za elektřinu</p>
        <div className="hero-amount fu2" aria-label={`${annualSavings.toLocaleString("cs-CZ")} korun ročně`}>
          {annualSavings.toLocaleString("cs-CZ")} Kč
        </div>
        <p className="hero-sub fu2">
          oproti vašemu současnému dodavateli {OFFER.current.supplier}
        </p>

        <div className="hero-lime-chips fu4">
          {chips.map((c, i) => (
            <div key={i} className="hero-lime-chip">
              {c.icon}
              <span>{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
