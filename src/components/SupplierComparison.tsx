"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

function ElectreeMark() {
  return (
    <div className="sc-mark sc-mark-dark">
      <svg width="18" height="18" viewBox="0 0 32 32" fill="none" aria-hidden="true">
        <path d="M15 32C14.45 32 13.99 31.55 14.05 31C14.52 26.28 18.28 22.52 23 22.05C23.55 22 24 22.45 24 23V25C24 25.55 23.55 26 23 26.08C20.49 26.5 18.5 28.49 18.08 31C17.99 31.55 17.55 32 17 32H15Z" fill="#D7FF00"/>
        <path d="M17 32C17.55 32 18.01 31.55 17.95 31C17.48 26.28 13.72 22.52 9 22.05C8.45 22 8 22.45 8 23V25C8 25.55 8.45 26 9 26.08C11.51 26.5 13.5 28.49 13.92 31C14.01 31.55 14.45 32 15 32Z" fill="#D7FF00"/>
        <rect x="14" y="13" width="13" height="4" rx="1" transform="rotate(-90 14 13)" fill="#D7FF00"/>
        <rect x="28.73" y="6.1" width="14" height="4" rx="1" transform="rotate(135 28.73 6.1)" fill="#D7FF00"/>
        <rect x="6.1" y="3.27" width="13.71" height="4" rx="1" transform="rotate(45 6.1 3.27)" fill="#D7FF00"/>
        <path d="M24 16C19.58 16 16 12.42 16 8" stroke="#D7FF00" strokeWidth="4"/>
        <path d="M23.97 18H31C31.55 18 32 17.55 32 17V15C32 14.45 31.55 14 31 14H23.97V18Z" fill="#D7FF00"/>
        <path d="M8 16C12.42 16 16 12.42 16 8" stroke="#D7FF00" strokeWidth="4"/>
        <path d="M8.05 18H1C0.45 18 0 17.55 0 17V15C0 14.45 0.45 14 1 14H8.05V18Z" fill="#D7FF00"/>
      </svg>
    </div>
  );
}

function CezMark() {
  return (
    <div className="sc-mark sc-mark-cez">ČEZ</div>
  );
}

export function SupplierComparison() {
  const { vat } = useVat();
  const fmt = (n: number) => n.toLocaleString("cs-CZ");

  const el = vat
    ? OFFER.offer.monthlyPaymentWithVat
    : Math.round(OFFER.offer.monthlyPaymentWithVat / (1 + OFFER.vat));
  const cz = vat
    ? OFFER.current.monthlyPaymentWithVat
    : Math.round(OFFER.current.monthlyPaymentWithVat / (1 + OFFER.vat));
  const sav = cz - el;
  const savPct = Math.round((sav / cz) * 100);

  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <div className="sc-grid">
          {/* Electree card */}
          <div className="sc-card sc-card-dark">
            <div className="sc-card-header">
              <ElectreeMark />
              <div className="sc-card-info">
                <div className="sc-card-name sc-name-light">Electree</div>
                <div className="sc-card-tariff sc-tariff-muted">
                  {OFFER.offer.tariff} · {OFFER.offer.fixYears} roky
                </div>
              </div>
              <div className="sc-badge sc-badge-our">Naše nabídka</div>
            </div>
            <div className="sc-amount-label sc-label-muted">Měsíční záloha s DPH</div>
            <div className="sc-amount sc-amount-lime">
              {fmt(el)}&thinsp;<span className="sc-amount-unit">Kč</span>
            </div>
            <div className="sc-per sc-per-muted">za měsíc</div>
          </div>

          {/* ČEZ card */}
          <div className="sc-card sc-card-light">
            <div className="sc-card-header">
              <CezMark />
              <div className="sc-card-info">
                <div className="sc-card-name sc-name-dim">ČEZ</div>
                <div className="sc-card-tariff sc-tariff-dim">{OFFER.current.tariff}</div>
              </div>
              <div className="sc-badge sc-badge-cur">Aktuálně</div>
            </div>
            <div className="sc-amount-label sc-label-dim">Měsíční záloha s DPH</div>
            <div className="sc-amount sc-amount-dim">
              {fmt(cz)}&thinsp;<span className="sc-amount-unit">Kč</span>
            </div>
            <div className="sc-per sc-per-dim">za měsíc</div>
          </div>
        </div>

        {/* Savings row */}
        <div className="sc-savings">
          <span className="sc-savings-label">Měsíční úspora</span>
          <div className="sc-savings-right">
            <span className="sc-savings-val">−{fmt(sav)}&thinsp;Kč</span>
            <span className="sc-savings-pct">−{savPct}&thinsp;%</span>
          </div>
        </div>
      </div>
    </section>
  );
}
