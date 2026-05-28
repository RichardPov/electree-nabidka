"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

export function KeyMetrics() {
  const { vat } = useVat();

  const fmt = (n: number) => n.toLocaleString("cs-CZ");

  const pricePerMWh = vat
    ? Math.round(OFFER.offer.pricePerMWhExVat * (1 + OFFER.vat))
    : OFFER.offer.pricePerMWhExVat;

  const currentPricePerMWh = vat
    ? Math.round(OFFER.current.pricePerMWhExVat * (1 + OFFER.vat))
    : OFFER.current.pricePerMWhExVat;

  const priceDiff = currentPricePerMWh - pricePerMWh;

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
        <h2 className="km-section-title">Vaše nabídka od Electree</h2>
        <div className="km-info-bar">
          <span className="km-info-item">
            <svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
            </svg>
            Elektřina {OFFER.client.productName}
          </span>
          <span className="km-info-group">
            <span className="km-info-item">Spotřeba {OFFER.client.consumptionMWh.toLocaleString("cs-CZ")}&thinsp;MWh/rok</span>
            <span className="km-info-dot" aria-hidden="true" />
            <span className="km-info-item">Dis. Sazba {OFFER.client.distributionRate}</span>
          </span>
        </div>
        <div className="km-grid">
          <div className="km-card">
            <div className="km-eyebrow">Cena za MWh</div>
            <div className="km-value">
              {fmt(pricePerMWh)}&thinsp;<span className="km-unit">Kč</span>
            </div>
            <div className="km-tag km-tag-green">
              <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{marginRight:3,flexShrink:0}}>
                <line x1="12" y1="5" x2="12" y2="19"/><polyline points="19 12 12 19 5 12"/>
              </svg>
              −{fmt(priceDiff)}&thinsp;Kč/MWh oproti ČEZ
            </div>
          </div>

          <div className="km-card">
            <div className="km-eyebrow">Ušetříte za rok na elektřině</div>
            <div className="km-value">
              {fmt(annualSavings)}&thinsp;<span className="km-unit">Kč</span>
            </div>
            <div className="km-tag km-tag-green">Oproti {OFFER.current.supplier}</div>
          </div>

          <div className="km-card">
            <div className="km-eyebrow">Ušetříte celkem</div>
            <div className="km-value">
              {fmt(totalSavings)}&thinsp;<span className="km-unit">Kč</span>
            </div>
            <div className="km-tag km-tag-green">Za {fixMonths} měsíců fixace</div>
          </div>

        </div>
      </div>
    </section>
  );
}
