"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

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
  const { vat } = useVat();

  const czMonthly = vat
    ? OFFER.current.monthlyPaymentWithVat
    : Math.round(OFFER.current.monthlyPaymentWithVat / (1 + OFFER.vat));
  const elMonthly = vat
    ? OFFER.offer.monthlyPaymentWithVat
    : Math.round(OFFER.offer.monthlyPaymentWithVat / (1 + OFFER.vat));
  const savings3y = vat
    ? OFFER.savings.threeYear
    : Math.round(OFFER.savings.threeYear / (1 + OFFER.vat));

  const czMonthly3y = (czMonthly * 36).toLocaleString("cs-CZ");
  const elMonthly3y = (elMonthly * 36).toLocaleString("cs-CZ");

  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <h2 className="sec-title">Měsíční zálohy</h2>
        <p className="sec-sub">Porovnání modelovaných záloh — při roční spotřebě {OFFER.client.consumptionMWh} MWh</p>

        <div className="comp-card">
          <div className="comp-hrow">
            <div className="comp-spacer" />

            {/* Electree column */}
            <div className="comp-hcol comp-hcol-el">
              <div className="comp-el-badge">Naše nabídka</div>
              <div className="comp-hlogo">
                <ElectreeMark />
                <div className="comp-hname">Electree</div>
              </div>
              <div className="comp-htar">{OFFER.offer.tariff} · {OFFER.offer.fixYears} roky</div>
            </div>

            {/* ČEZ column */}
            <div className="comp-hcol comp-hcol-cez">
              <div className="comp-cez-badge">Vaše aktuální nabídka</div>
              <div className="comp-hlogo">
                <CezMark />
                <div className="comp-hname">ČEZ</div>
              </div>
              <div className="comp-htar">{OFFER.current.tariff}</div>
            </div>
          </div>

          <div className="comp-row">
            <div className="comp-label">
              Měsíční záloha
              <span className="comp-label-note">{vat ? "s DPH 21 %" : "bez DPH"}</span>
            </div>
            <div className="comp-cell comp-cell-el">
              <span className="comp-price-bold">{elMonthly.toLocaleString("cs-CZ")} Kč</span>
              <span className="comp-period">/měs</span>
            </div>
            <div className="comp-cell comp-cell-cez">
              <span className="comp-price-muted">{czMonthly.toLocaleString("cs-CZ")} Kč</span>
              <span className="comp-period">/měs</span>
            </div>
          </div>

          <div className="comp-row">
            <div className="comp-label">Celkem za 3 roky</div>
            <div className="comp-cell comp-cell-el">
              <span className="comp-price-bold">{elMonthly3y} Kč</span>
            </div>
            <div className="comp-cell comp-cell-cez">
              <span className="comp-price-muted">{czMonthly3y} Kč</span>
            </div>
          </div>

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

          <div className="comp-savings-row">
            <div className="comp-savings-label">Úspora za 3 roky fixace</div>
            <div className="comp-savings-val">
              {savings3y.toLocaleString("cs-CZ")} Kč
              <span className="comp-savings-pct">−{OFFER.savings.pct}%</span>
            </div>
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

function ElectreeMark() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 32 32" fill="none" aria-hidden="true">
      <path d="M15 32C14.4477 32 13.9947 31.551 14.0492 31.0014C14.5177 26.2759 18.2759 22.5177 23.0014 22.0492C23.551 21.9947 24 22.4477 24 23L24 25C24 25.5523 23.5489 25.9913 23.0042 26.0823C20.4883 26.5025 18.5025 28.4883 18.0823 31.0042C17.9913 31.5489 17.5523 32 17 32L15 32Z" fill="#0D3D34"/>
      <path d="M17 32C17.5523 32 18.0053 31.551 17.9508 31.0014C17.4823 26.2759 13.7241 22.5177 8.9986 22.0492C8.44901 21.9947 8 22.4477 8 23L8 25C8 25.5523 8.45108 25.9913 8.99581 26.0823C11.5117 26.5025 13.4975 28.4883 13.9177 31.0042C14.0087 31.5489 14.4477 32 15 32L15 32Z" fill="#0D3D34"/>
      <rect x="14" y="13" width="13" height="4" rx="1" transform="rotate(-90 14 13)" fill="#0D3D34"/>
      <rect x="28.7266" y="6.10059" width="13.9999" height="4" rx="1" transform="rotate(135 28.7266 6.10059)" fill="#0D3D34"/>
      <rect x="6.10156" y="3.27246" width="13.7099" height="4" rx="1" transform="rotate(45 6.10156 3.27246)" fill="#0D3D34"/>
      <path d="M24 16C19.5817 16 16 12.4183 16 8" stroke="#0D3D34" strokeWidth="4"/>
      <path d="M23.9688 18H31.0039C31.5562 18 32.0039 17.5523 32.0039 17V15C32.0039 14.4477 31.5562 14 31.0039 14H23.9688V18Z" fill="#0D3D34"/>
      <path d="M8 16C12.4183 16 16 12.4183 16 8" stroke="#0D3D34" strokeWidth="4"/>
      <path d="M8.04688 18H1.00391C0.451622 18 0.00390625 17.5523 0.00390625 17V15C0.00390625 14.4477 0.451622 14 1.00391 14H8.04688V18Z" fill="#0D3D34"/>
    </svg>
  );
}

function CezMark() {
  return (
    <div className="comp-cez-mark" aria-hidden="true">ČEZ</div>
  );
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
