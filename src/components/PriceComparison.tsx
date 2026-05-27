"use client";

import { useState } from "react";
import { OFFER } from "@/lib/offer-data";

function p(n: number, vat: boolean) {
  return (vat ? Math.round(n * 1.21) : n).toLocaleString("cs-CZ");
}
function annual(mwh: number, fee: number, vat: boolean) {
  return (vat ? Math.round((mwh * 4 + fee * 12) * 1.21) : Math.round(mwh * 4 + fee * 12)).toLocaleString("cs-CZ");
}

export function PriceComparison() {
  const [vat, setVat] = useState(true);

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
          {/* DPH toggle */}
          <div className="dph-toggle" role="group" aria-label="Zobrazení cen" style={{ alignSelf: "center" }}>
            <button className={`dph-btn ${!vat ? "dph-on" : "dph-off"}`} onClick={() => setVat(false)}>Bez DPH</button>
            <button className={`dph-btn ${vat ? "dph-on" : "dph-off"}`}  onClick={() => setVat(true)}>S DPH 21%</button>
          </div>
        </div>

        <div className="price-grid">
          {/* Electree first */}
          <div className="price-card price-card-our">
            <div className="pc-sup">
              Electree
              <span className="pc-badge">Naše nabídka</span>
            </div>
            <div className="pc-row"><span className="pc-label">Cena elektřiny</span><span className="pc-val">{p(OFFER.offer.pricePerMWhExVat, vat)} Kč/MWh</span></div>
            <div className="pc-row"><span className="pc-label">Stálý plat</span><span className="pc-val">{p(OFFER.offer.monthlyFeeExVat, vat)} Kč/měs</span></div>
            <div className="pc-row"><span className="pc-label">Roční náklady (komodita)</span><span className="pc-val">{annual(OFFER.offer.pricePerMWhExVat, OFFER.offer.monthlyFeeExVat, vat)} Kč</span></div>
          </div>

          {/* ČEZ second */}
          <div className="price-card">
            <div className="pc-sup">ČEZ — současná cena</div>
            <div className="pc-row"><span className="pc-label">Cena elektřiny</span><span className="pc-val">{p(OFFER.current.pricePerMWhExVat, vat)} Kč/MWh</span></div>
            <div className="pc-row"><span className="pc-label">Stálý plat</span><span className="pc-val">{p(OFFER.current.monthlyFeeExVat, vat)} Kč/měs</span></div>
            <div className="pc-row"><span className="pc-label">Roční náklady (komodita)</span><span className="pc-val">{annual(OFFER.current.pricePerMWhExVat, OFFER.current.monthlyFeeExVat, vat)} Kč</span></div>
          </div>
        </div>

        <p className="dph-note">
          * Distribuce, poplatky OTE a daně nejsou zahrnuty — jsou totožné u obou dodavatelů.
          Spotřeba {OFFER.client.consumptionMWh} MWh/rok.
        </p>
      </div>
    </section>
  );
}
