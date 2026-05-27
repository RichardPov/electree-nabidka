"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

export function MonthlyPayments() {
  const { vat } = useVat();

  const czMonthly = vat
    ? OFFER.current.monthlyPaymentWithVat
    : Math.round(OFFER.current.monthlyPaymentWithVat / (1 + OFFER.vat));
  const elMonthly = vat
    ? OFFER.offer.monthlyPaymentWithVat
    : Math.round(OFFER.offer.monthlyPaymentWithVat / (1 + OFFER.vat));
  const savings  = czMonthly - elMonthly;
  const savPct   = Math.round((savings / czMonthly) * 100);
  const vatLabel = vat ? "s DPH 21 %" : "bez DPH";

  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <h2 className="sec-title">Měsíční zálohy</h2>
        <p className="sec-sub">
          Porovnání modelovaných záloh — při roční spotřebě {OFFER.client.consumptionMWh} MWh
        </p>

        <div className="mp-cards">
          {/* ── Electree card ── */}
          <div className="mp-el-card">
            <div className="mp-card-top">
              <ElMarkOnDark />
              <div>
                <div className="mp-card-name-el">Electree</div>
                <div className="mp-card-tar-el">{OFFER.offer.tariff} · {OFFER.offer.fixYears} roky</div>
              </div>
              <div className="mp-card-badge-el">Naše nabídka</div>
            </div>
            <div className="mp-card-lbl-el">Měsíční záloha {vatLabel}</div>
            <div className="mp-price-el">{elMonthly.toLocaleString("cs-CZ")} Kč</div>
            <div className="mp-price-sub-el">za měsíc</div>
          </div>

          {/* ── ČEZ card ── */}
          <div className="mp-cez-card">
            <div className="mp-card-top">
              <CezMark />
              <div>
                <div className="mp-card-name-cez">ČEZ</div>
                <div className="mp-card-tar-cez">{OFFER.current.tariff}</div>
              </div>
              <div className="mp-card-badge-cez">Aktuálně platíte</div>
            </div>
            <div className="mp-card-lbl-cez">Měsíční záloha {vatLabel}</div>
            <div className="mp-price-cez">{czMonthly.toLocaleString("cs-CZ")} Kč</div>
            <div className="mp-price-sub-cez">za měsíc</div>
          </div>
        </div>

        {/* Savings row */}
        <div className="mp-savings">
          <span className="mp-savings-label">Měsíční úspora na zálohách</span>
          <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
            <span className="mp-savings-amount">−{savings.toLocaleString("cs-CZ")} Kč</span>
            <span className="mp-savings-pct">−{savPct} %</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ElMarkOnDark() {
  return (
    <div className="mp-el-mark" aria-hidden="true">
      <svg width="17" height="17" viewBox="0 0 32 32" fill="none">
        <path d="M15 32C14.45 32 13.99 31.55 14.05 31C14.52 26.28 18.28 22.52 23 22.05C23.55 22 24 22.45 24 23V25C24 25.55 23.55 26 23 26.08C20.49 26.5 18.5 28.49 18.08 31C17.99 31.55 17.55 32 17 32H15Z" fill="#0D3D34"/>
        <path d="M17 32C17.55 32 18.01 31.55 17.95 31C17.48 26.28 13.72 22.52 9 22.05C8.45 22 8 22.45 8 23V25C8 25.55 8.45 26 9 26.08C11.51 26.5 13.5 28.49 13.92 31C14.01 31.55 14.45 32 15 32Z" fill="#0D3D34"/>
        <rect x="14" y="13" width="13" height="4" rx="1" transform="rotate(-90 14 13)" fill="#0D3D34"/>
        <rect x="28.73" y="6.1" width="14" height="4" rx="1" transform="rotate(135 28.73 6.1)" fill="#0D3D34"/>
        <rect x="6.1" y="3.27" width="13.71" height="4" rx="1" transform="rotate(45 6.1 3.27)" fill="#0D3D34"/>
        <path d="M24 16C19.58 16 16 12.42 16 8" stroke="#0D3D34" strokeWidth="4"/>
        <path d="M23.97 18H31C31.55 18 32 17.55 32 17V15C32 14.45 31.55 14 31 14H23.97V18Z" fill="#0D3D34"/>
        <path d="M8 16C12.42 16 16 12.42 16 8" stroke="#0D3D34" strokeWidth="4"/>
        <path d="M8.05 18H1C0.45 18 0 17.55 0 17V15C0 14.45 0.45 14 1 14H8.05V18Z" fill="#0D3D34"/>
      </svg>
    </div>
  );
}

function CezMark() {
  return (
    <div className="mp-cez-mark" aria-hidden="true">ČEZ</div>
  );
}
