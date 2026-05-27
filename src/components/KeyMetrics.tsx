"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

export function KeyMetrics() {
  const { vat } = useVat();

  const fmt = (n: number) => n.toLocaleString("cs-CZ");

  const pricePerMWh = vat
    ? Math.round(OFFER.offer.pricePerMWhExVat * (1 + OFFER.vat))
    : OFFER.offer.pricePerMWhExVat;

  const annualSavings = vat
    ? OFFER.savings.annual
    : Math.round(OFFER.savings.annual / (1 + OFFER.vat));

  const totalSavings = vat
    ? OFFER.savings.threeYear
    : Math.round(OFFER.savings.threeYear / (1 + OFFER.vat));

  const monthlyPayment = vat
    ? OFFER.offer.monthlyPaymentWithVat
    : Math.round(OFFER.offer.monthlyPaymentWithVat / (1 + OFFER.vat));

  const fixMonths = OFFER.offer.fixYears * 12;

  return (
    <section className="body-section">
      <div className="body-inner">
        <div className="km-grid">
          <div className="km-card">
            <div className="km-eyebrow">Cena za MWh</div>
            <div className="km-value">
              {fmt(pricePerMWh)}&thinsp;<span className="km-unit">Kč</span>
            </div>
            <div className="km-sub">Fixovaná po celých {fixMonths} měsíců</div>
          </div>

          <div className="km-card">
            <div className="km-eyebrow">Ušetříte za rok</div>
            <div className="km-value">
              {fmt(annualSavings)}&thinsp;<span className="km-unit">Kč</span>
            </div>
            <div className="km-sub">Oproti {OFFER.current.supplier}</div>
          </div>

          <div className="km-card">
            <div className="km-eyebrow">Ušetříte celkem</div>
            <div className="km-value">
              {fmt(totalSavings)}&thinsp;<span className="km-unit">Kč</span>
            </div>
            <div className="km-sub">Za {fixMonths} měsíců fixace</div>
          </div>

          <div className="km-card km-card-dark">
            <div className="km-badge-key">★&nbsp;Klíčové</div>
            <div className="km-eyebrow km-eyebrow-dark">Měsíční záloha</div>
            <div className="km-value km-value-lime">
              {fmt(monthlyPayment)}&thinsp;<span className="km-unit">Kč</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
