import { OFFER } from "@/lib/offer-data";

export function MonthlyPayments() {
  const czMonthly3y = (OFFER.current.monthlyPaymentWithVat * 36).toLocaleString("cs-CZ");
  const elMonthly3y = (OFFER.offer.monthlyPaymentWithVat * 36).toLocaleString("cs-CZ");

  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <h2 className="sec-title">Měsíční zálohy</h2>
        <div className="zal-card">
          <div className="zal-hdr">
            <span className="zal-hdr-text">
              Porovnání modelovaných záloh — při roční spotřebě {OFFER.client.consumptionMWh} MWh
            </span>
          </div>
          <div className="zal-body">
            {/* ČEZ */}
            <div className="zal-col zal-cez">
              <div className="zal-sup">ČEZ (současný)</div>
              <div className="zal-amt">{OFFER.current.monthlyPaymentWithVat.toLocaleString("cs-CZ")} Kč</div>
              <div className="zal-mo">/měsíc</div>
              <div className="zal-3y">{czMonthly3y} Kč za 3 roky</div>
            </div>

            {/* Middle */}
            <div className="zal-mid">
              <div className="zal-pct">−{OFFER.savings.pct}%</div>
              <div className="zal-czk">−{OFFER.savings.monthly.toLocaleString("cs-CZ")} Kč/měs</div>
              <div className="zal-arr">→</div>
            </div>

            {/* Electree */}
            <div className="zal-col zal-electree">
              <div className="zal-sup">Electree (nové)</div>
              <div className="zal-amt">{OFFER.offer.monthlyPaymentWithVat.toLocaleString("cs-CZ")} Kč</div>
              <div className="zal-mo">/měsíc</div>
              <div className="zal-3y">{elMonthly3y} Kč za 3 roky</div>
            </div>
          </div>
          <div className="zal-ftr">
            Celková úspora za 3 roky fixace: <strong>{OFFER.savings.threeYear.toLocaleString("cs-CZ")} Kč</strong>
          </div>
        </div>
      </div>
    </section>
  );
}
