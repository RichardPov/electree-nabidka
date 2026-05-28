"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

const chips = [
  "Rychlé vyřízení",
  "Chytrá úspora",
  `Fixace ${OFFER.offer.fixYears * 12} měsíců`,
];

export function Hero() {
  const { vat } = useVat();

  const annualSavings = vat
    ? OFFER.savings.annual
    : Math.round(OFFER.savings.annual / (1 + OFFER.vat));

  return (
    <section className="hero-wrap">
      <div className="hero-inner">
        <p className="hero-eyebrow fu1">
          <span className="hero-eyebrow-dot" aria-hidden="true" />
          Nabídka platná do {OFFER.validity}
        </p>
        <h1 className="hero-headline">
          <span className="hero-hl-line fu2">S Electree</span>
          <span className="hero-hl-line fu3">
            ušetříte{" "}
            <span className="hero-headline-lime">
              {annualSavings.toLocaleString("cs-CZ")}&thinsp;Kč
            </span>
          </span>
        </h1>
        <p className="hero-hl-sub fu3">Ročně oproti {OFFER.current.supplier}</p>
        <div className="hero-details fu4">
          <span className="hero-detail-item"><span className="hero-detail-key">Elektřina:</span> {OFFER.client.productName}</span>
          <span className="hero-detail-sep" aria-hidden="true" />
          <span className="hero-detail-item"><span className="hero-detail-key">Spotřeba:</span> {OFFER.client.consumptionMWh.toLocaleString("cs-CZ")}&thinsp;MWh/rok</span>
          <span className="hero-detail-sep" aria-hidden="true" />
          <span className="hero-detail-item"><span className="hero-detail-key">Dis. Sazba:</span> {OFFER.client.distributionRate}</span>
        </div>
        {/* chips hidden temporarily
        <div className="hero-pill-chips fu4">
          {chips.map((c, i) => (
            <div key={i} className="hero-pill-chip">{c}</div>
          ))}
        </div>
        */}
      </div>
    </section>
  );
}
