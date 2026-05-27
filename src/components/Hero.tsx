"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

const chips = [
  "100 % obnovitelné",
  `Fixace ${OFFER.offer.fixYears * 12} měsíců`,
  "Linka péče 24/7",
];

export function Hero() {
  const { vat } = useVat();

  const annualSavings = vat
    ? OFFER.savings.annual
    : Math.round(OFFER.savings.annual / (1 + OFFER.vat));

  return (
    <section className="hero-wrap">
      <div className="hero hero-single">
        <div className="hero-eyebrow">Nabídka platná do {OFFER.validity}</div>
        <h1 className="hero-headline">
          S Electree ušetříte{" "}
          <em className="hero-headline-lime">
            {annualSavings.toLocaleString("cs-CZ")}&thinsp;Kč
          </em>
        </h1>
        <div className="hero-pill-chips">
          {chips.map((c, i) => (
            <div key={i} className="hero-pill-chip">{c}</div>
          ))}
        </div>
      </div>
    </section>
  );
}
