import { OFFER } from "@/lib/offer-data";

type CellData =
  | { type: "check" }
  | { type: "cross" }
  | { type: "text"; val: string }
  | { type: "dash" };

const FEATURES: { label: string; cez: CellData; el: CellData }[] = [
  { label: "Fixace ceny",           cez: { type: "cross" }, el: { type: "text", val: `${OFFER.offer.fixYears} roky` } },
  { label: "100% zelená energie",   cez: { type: "cross" }, el: { type: "check" } },
  { label: "Přechod bez starostí",  cez: { type: "cross" }, el: { type: "check" } },
];

export function MonthlyPayments() {
  const czMonthly3y = (OFFER.current.monthlyPaymentWithVat * 36).toLocaleString("cs-CZ");
  const elMonthly3y = (OFFER.offer.monthlyPaymentWithVat * 36).toLocaleString("cs-CZ");

  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <h2 className="sec-title">Měsíční zálohy</h2>
        <p className="sec-sub">Porovnání modelovaných záloh — při roční spotřebě {OFFER.client.consumptionMWh} MWh</p>

        <div className="comp-card">
          {/* Column headers */}
          <div className="comp-hrow">
            <div className="comp-spacer" />
            <div className="comp-hcol comp-hcol-el">
              <div className="comp-el-badge">Naše nabídka</div>
              <div className="comp-hname">Electree</div>
              <div className="comp-htar">{OFFER.offer.tariff} · {OFFER.offer.fixYears} roky</div>
            </div>
            <div className="comp-hcol comp-hcol-cez">
              <div className="comp-hname">ČEZ</div>
              <div className="comp-htar">{OFFER.current.tariff}</div>
            </div>
          </div>

          {/* Monthly payment row */}
          <div className="comp-row">
            <div className="comp-label">
              Měsíční záloha
              <span className="comp-label-note">s DPH</span>
            </div>
            <div className="comp-cell comp-cell-el">
              <span className="comp-price-bold">{OFFER.offer.monthlyPaymentWithVat.toLocaleString("cs-CZ")} Kč</span>
              <span className="comp-period">/měs</span>
            </div>
            <div className="comp-cell comp-cell-cez">
              <span className="comp-price-muted">{OFFER.current.monthlyPaymentWithVat.toLocaleString("cs-CZ")} Kč</span>
              <span className="comp-period">/měs</span>
            </div>
          </div>

          {/* 3-year total row */}
          <div className="comp-row">
            <div className="comp-label">Celkem za 3 roky</div>
            <div className="comp-cell comp-cell-el">
              <span className="comp-price-bold">{elMonthly3y} Kč</span>
            </div>
            <div className="comp-cell comp-cell-cez">
              <span className="comp-price-muted">{czMonthly3y} Kč</span>
            </div>
          </div>

          {/* Feature rows */}
          {FEATURES.map((row, i) => (
            <div className="comp-row" key={i}>
              <div className="comp-label">{row.label}</div>
              <div className="comp-cell comp-cell-el">
                <CellView data={row.el} />
              </div>
              <div className="comp-cell comp-cell-cez">
                <CellView data={row.cez} />
              </div>
            </div>
          ))}

          {/* Savings callout row */}
          <div className="comp-savings-row">
            <div className="comp-savings-label">Úspora za 3 roky fixace</div>
            <div className="comp-savings-val">{OFFER.savings.threeYear.toLocaleString("cs-CZ")} Kč</div>
            <div className="comp-savings-empty">—</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function CellView({ data }: { data: CellData }) {
  if (data.type === "check") return <CheckIcon />;
  if (data.type === "cross") return <CrossIcon />;
  if (data.type === "text") return <span className="comp-feat-text">{data.val}</span>;
  return <span className="comp-dash">—</span>;
}

function CheckIcon() {
  return (
    <span className="comp-check" aria-label="Ano">
      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <polyline points="20 6 9 17 4 12" />
      </svg>
    </span>
  );
}

function CrossIcon() {
  return (
    <span className="comp-cross" aria-label="Ne">
      <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <line x1="18" y1="6" x2="6" y2="18" />
        <line x1="6" y1="6" x2="18" y2="18" />
      </svg>
    </span>
  );
}
