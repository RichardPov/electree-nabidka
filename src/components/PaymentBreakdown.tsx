"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

export function PaymentBreakdown() {
  const { vat } = useVat();

  const total = vat
    ? OFFER.offer.monthlyPaymentWithVat
    : Math.round(OFFER.offer.monthlyPaymentWithVat / (1 + OFFER.vat));

  const { breakdown } = OFFER;
  const commodityAmt    = Math.round(total * breakdown.commodity / 100);
  const distributionAmt = Math.round(total * breakdown.distribution / 100);
  const taxesAmt        = total - commodityAmt - distributionAmt;

  const rows = [
    {
      color: "var(--lime)",
      label: "Silová složka",
      pct: breakdown.commodity,
      sub: "Cena vaší elektřiny",
      amount: commodityAmt,
    },
    {
      color: "var(--dark)",
      label: "Distribuce",
      pct: breakdown.distribution,
      sub: "Doprava přes síť",
      amount: distributionAmt,
    },
    {
      color: "#c4cdd6",
      label: "Daně & poplatky",
      pct: breakdown.taxes,
      sub: vat ? "DPH 21 % + státní poplatky" : "Státní poplatky",
      amount: taxesAmt,
    },
  ];

  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <div className="pb-card">
          <div className="pb-header">
            <div>
              <div className="pb-eyebrow">Složení měsíční platby</div>
              <h2 className="pb-title">Kam vlastně jdou vaše peníze</h2>
            </div>
            <div className="pb-total">{total.toLocaleString("cs-CZ")} Kč</div>
          </div>

          <div className="pb-bar">
            <div className="pb-bar-seg" style={{ width: `${breakdown.commodity}%`,    background: "var(--lime)" }} />
            <div className="pb-bar-seg" style={{ width: `${breakdown.distribution}%`, background: "var(--dark)" }} />
            <div className="pb-bar-seg" style={{ width: `${breakdown.taxes}%`,        background: "#c4cdd6" }} />
          </div>

          <div className="pb-rows">
            {rows.map((r, i) => (
              <div key={i} className="pb-row">
                <div className="pb-row-left">
                  <span className="pb-dot" style={{ background: r.color }} />
                  <div>
                    <div className="pb-row-label">
                      {r.label}
                      <span className="pb-row-pct"> ({r.pct} %)</span>
                    </div>
                    <div className="pb-row-sub">{r.sub}</div>
                  </div>
                </div>
                <div className="pb-row-amount">{r.amount.toLocaleString("cs-CZ")} Kč</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
