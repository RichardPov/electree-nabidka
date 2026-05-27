"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

function fmt(n: number, vat: boolean) {
  return (vat ? Math.round(n * (1 + OFFER.vat)) : n).toLocaleString("cs-CZ");
}
function annual(pricePerMWh: number, monthlyFee: number, vat: boolean) {
  const base = Math.round(pricePerMWh * OFFER.client.consumptionMWh + monthlyFee * 12);
  return (vat ? Math.round(base * (1 + OFFER.vat)) : base).toLocaleString("cs-CZ");
}

export function PriceComparison() {
  const { vat } = useVat();

  const annualSavings = vat
    ? Math.round(OFFER.savings.commodityAnnual * (1 + OFFER.vat))
    : OFFER.savings.commodityAnnual;

  const elTooltip = `${fmt(OFFER.offer.pricePerMWhExVat, vat)} Kč/MWh × ${OFFER.client.consumptionMWh} + ${fmt(OFFER.offer.monthlyFeeExVat, vat)} Kč × 12 měs`;
  const czTooltip = `${fmt(OFFER.current.pricePerMWhExVat, vat)} Kč/MWh × ${OFFER.client.consumptionMWh} + ${fmt(OFFER.current.monthlyFeeExVat, vat)} Kč × 12 měs`;

  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", flexWrap: "wrap", gap: 12, marginBottom: 4 }}>
          <div>
            <h2 className="sec-title">Ceny elektřiny</h2>
            <p className="sec-sub" style={{ margin: "4px 0 0" }}>
              Zobrazeno {vat ? "s DPH 21 %" : "bez DPH"}
            </p>
          </div>
        </div>

        <div className="price-grid">
          {/* Electree first */}
          <div className="price-card price-card-our">
            <div className="pc-sup">
              Electree
              <span className="pc-badge">Naše nabídka</span>
            </div>
            <div className="pc-row">
              <span className="pc-label">Spotřeba elektřiny</span>
              <span className="pc-val">{OFFER.client.consumptionMWh} MWh/rok</span>
            </div>
            <div className="pc-row">
              <span className="pc-label">Cena elektřiny</span>
              <span className="pc-val">{fmt(OFFER.offer.pricePerMWhExVat, vat)} Kč/MWh</span>
            </div>
            <div className="pc-row">
              <span className="pc-label">Stálý plat</span>
              <span className="pc-val">{fmt(OFFER.offer.monthlyFeeExVat, vat)} Kč/měs</span>
            </div>
            <div className="pc-row">
              <span className="pc-label pc-label-tip">
                Roční náklady (komodita)
                <span className="pc-tip-icon" aria-hidden="true">?</span>
                <span className="pc-tip-content">{elTooltip}</span>
              </span>
              <span className="pc-val">{annual(OFFER.offer.pricePerMWhExVat, OFFER.offer.monthlyFeeExVat, vat)} Kč</span>
            </div>
          </div>

          {/* ČEZ second */}
          <div className="price-card">
            <div className="pc-sup">ČEZ — současná cena</div>
            <div className="pc-row">
              <span className="pc-label">Spotřeba elektřiny</span>
              <span className="pc-val">{OFFER.client.consumptionMWh} MWh/rok</span>
            </div>
            <div className="pc-row">
              <span className="pc-label">Cena elektřiny</span>
              <span className="pc-val">{fmt(OFFER.current.pricePerMWhExVat, vat)} Kč/MWh</span>
            </div>
            <div className="pc-row">
              <span className="pc-label">Stálý plat</span>
              <span className="pc-val">{fmt(OFFER.current.monthlyFeeExVat, vat)} Kč/měs</span>
            </div>
            <div className="pc-row">
              <span className="pc-label pc-label-tip">
                Roční náklady (komodita)
                <span className="pc-tip-icon" aria-hidden="true">?</span>
                <span className="pc-tip-content">{czTooltip}</span>
              </span>
              <span className="pc-val">{annual(OFFER.current.pricePerMWhExVat, OFFER.current.monthlyFeeExVat, vat)} Kč</span>
            </div>
          </div>
        </div>

        {/* Annual savings summary */}
        <div className="price-annual-savings">
          <span>Vaše roční úspora za elektřinu</span>
          <span className="price-annual-savings-val">{annualSavings.toLocaleString("cs-CZ")} Kč</span>
        </div>

        <p className="dph-note">
          * Distribuce, poplatky OTE a daně nejsou zahrnuty — jsou totožné u obou dodavatelů.
          Spotřeba {OFFER.client.consumptionMWh} MWh/rok.
        </p>
      </div>
    </section>
  );
}
