import { OFFER } from "@/lib/offer-data";

export function MonthlyPayments() {
  const czMonthly3y = (OFFER.current.monthlyPaymentWithVat * 36).toLocaleString("cs-CZ");
  const elMonthly3y = (OFFER.offer.monthlyPaymentWithVat * 36).toLocaleString("cs-CZ");
  const elBarPct = Math.round((OFFER.offer.monthlyPaymentWithVat / OFFER.current.monthlyPaymentWithVat) * 100);

  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <h2 className="sec-title">Měsíční zálohy</h2>
        <p className="sec-sub">Porovnání modelovaných záloh — při roční spotřebě {OFFER.client.consumptionMWh} MWh</p>

        <div className="zal-premium">
          {/* ČEZ panel */}
          <div className="zal-panel zal-panel-cez">
            <div className="zal-psup">ČEZ — Současný dodavatel</div>
            <div className="zal-pamount">{OFFER.current.monthlyPaymentWithVat.toLocaleString("cs-CZ")} Kč</div>
            <div className="zal-pmo">/měsíc s DPH</div>
            <div className="zal-barwrap">
              <div className="zal-bar zal-bar-cez" style={{ width: "100%" }} />
            </div>
            <div className="zal-p3y">{czMonthly3y} Kč za 3 roky</div>
          </div>

          {/* Electree panel */}
          <div className="zal-panel zal-panel-electree">
            <div className="zal-psup">
              Electree — Vaše nová nabídka
              <span className="zal-badge-our">Naše nabídka</span>
            </div>
            <div className="zal-pamount-row">
              <div className="zal-pamount">{OFFER.offer.monthlyPaymentWithVat.toLocaleString("cs-CZ")} Kč</div>
              <div className="zal-pct-badge">−{OFFER.savings.pct}%</div>
            </div>
            <div className="zal-pmo">/měsíc s DPH</div>
            <div className="zal-barwrap">
              <div className="zal-bar zal-bar-electree" style={{ width: `${elBarPct}%` }} />
            </div>
            <div className="zal-p3y">{elMonthly3y} Kč za 3 roky</div>
            <div className="zal-savings-row">
              <span className="zal-savings-label">Ušetříte za 3 roky</span>
              <span className="zal-savings-val">{OFFER.savings.threeYear.toLocaleString("cs-CZ")} Kč</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
