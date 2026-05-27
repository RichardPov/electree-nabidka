"use client";

import { useState } from "react";
import { OFFER } from "@/lib/offer-data";

function fmtPrice(n: number, withVat: boolean) {
  const val = withVat ? Math.round(n * (1 + OFFER.vat)) : n;
  return val.toLocaleString("cs-CZ");
}

function calcAnnual(pricePerMWh: number, monthlyFee: number, withVat: boolean) {
  const raw = pricePerMWh * OFFER.client.consumptionMWh + monthlyFee * 12;
  return withVat ? Math.round(raw * (1 + OFFER.vat)) : Math.round(raw);
}

export function PriceComparison() {
  const [withVat, setWithVat] = useState(true);

  const czPpm = fmtPrice(OFFER.current.pricePerMWhExVat, withVat);
  const czFee = fmtPrice(OFFER.current.monthlyFeeExVat, withVat);
  const czAnnual = calcAnnual(OFFER.current.pricePerMWhExVat, OFFER.current.monthlyFeeExVat, withVat).toLocaleString("cs-CZ");

  const elPpm = fmtPrice(OFFER.offer.pricePerMWhExVat, withVat);
  const elFee = fmtPrice(OFFER.offer.monthlyFeeExVat, withVat);
  const elAnnual = calcAnnual(OFFER.offer.pricePerMWhExVat, OFFER.offer.monthlyFeeExVat, withVat).toLocaleString("cs-CZ");

  const diff = OFFER.current.pricePerMWhExVat - OFFER.offer.pricePerMWhExVat;

  return (
    <section className="py-14 px-6 md:px-10 lg:px-16" style={{ background: "#EBF7F1" }}>
      <div className="max-w-5xl mx-auto">
        {/* Header row */}
        <div className="flex flex-wrap items-end justify-between gap-4 mb-8">
          <div>
            <h2
              className="text-[11px] font-semibold tracking-widest uppercase mb-2"
              style={{ color: "#96D5B7", letterSpacing: "0.1em" }}
            >
              Porovnání cen
            </h2>
            <p className="text-[13px]" style={{ color: "#6B7280" }}>
              Pouze cena komodity — distribuce platí u obou stejně
            </p>
          </div>

          {/* DPH toggle — DS pill toggle style */}
          <div
            className="flex rounded-full p-1 gap-1"
            style={{ background: "#D8EAE0" }}
            role="group"
            aria-label="Zobrazení cen"
          >
            <button
              onClick={() => setWithVat(false)}
              aria-pressed={!withVat}
              className="px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all"
              style={
                !withVat
                  ? { background: "#0D3D34", color: "#D7FF00" }
                  : { background: "transparent", color: "#7C9691" }
              }
            >
              Bez DPH
            </button>
            <button
              onClick={() => setWithVat(true)}
              aria-pressed={withVat}
              className="px-4 py-1.5 rounded-full text-[12px] font-semibold transition-all"
              style={
                withVat
                  ? { background: "#0D3D34", color: "#D7FF00" }
                  : { background: "transparent", color: "#7C9691" }
              }
            >
              S DPH 21 %
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* ČEZ card */}
          <div
            className="rounded-[18px] p-6 opacity-70"
            style={{ background: "#ffffff", border: "1.5px solid #D1DFD8" }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                style={{ background: "#EBF7F1", color: "#6B7280" }}
              >
                Nyní platíte
              </span>
              <span className="text-[15px] font-bold" style={{ color: "#3A3A3C" }}>
                {OFFER.current.supplier}
              </span>
            </div>
            <PRow label="Cena za MWh" value={`${czPpm} Kč`} />
            <PRow label="Stálý měsíční plat" value={`${czFee} Kč`} />
            <PRow label="Roční náklady" value={`${czAnnual} Kč`} strong />
          </div>

          {/* Electree card */}
          <div
            className="rounded-[18px] p-6"
            style={{ background: "#ffffff", border: "2px solid #0D3D34" }}
          >
            <div className="flex items-center gap-2.5 mb-6">
              <span
                className="px-2.5 py-1 rounded-full text-[11px] font-semibold"
                style={{ background: "#EBF7F1", color: "#0D3D34" }}
              >
                Naše nabídka
              </span>
              <span className="text-[15px] font-bold" style={{ color: "#0D3D34" }}>
                {OFFER.offer.supplier}
              </span>
              <span
                className="ml-auto px-2.5 py-1 rounded-full text-[11px] font-semibold"
                style={{ background: "#0D3D34", color: "#D7FF00" }}
              >
                {OFFER.offer.fixYears}Y fix
              </span>
            </div>
            <PRow
              label="Cena za MWh"
              value={`${elPpm} Kč`}
              savings={`↓ ${diff.toLocaleString("cs-CZ")} Kč`}
              highlight
            />
            <PRow label="Stálý měsíční plat" value={`${elFee} Kč`} highlight />
            <PRow label="Roční náklady" value={`${elAnnual} Kč`} strong highlight />
          </div>
        </div>

        <p className="mt-4 text-[12px]" style={{ color: "#7C9691" }}>
          * Distribuce, poplatky OTE a daně jsou totožné u obou dodavatelů — nejsou zahrnuty.
          Spotřeba {OFFER.client.consumptionMWh} MWh/rok.
        </p>
      </div>
    </section>
  );
}

function PRow({
  label,
  value,
  savings,
  strong = false,
  highlight = false,
}: {
  label: string;
  value: string;
  savings?: string;
  strong?: boolean;
  highlight?: boolean;
}) {
  return (
    <div
      className="flex items-center justify-between py-3.5"
      style={{ borderTop: "1px solid #EBF7F1" }}
    >
      <span className="text-[13px]" style={{ color: "#6B7280" }}>
        {label}
      </span>
      <div className="flex items-center gap-2">
        <span
          className={strong ? "text-[15px] font-bold" : "text-[14px] font-semibold"}
          style={{ color: highlight ? "#0D3D34" : "#3A3A3C" }}
        >
          {value}
        </span>
        {savings && (
          <span
            className="text-[11px] font-semibold"
            style={{ color: "#20544A" }}
          >
            {savings}
          </span>
        )}
      </div>
    </div>
  );
}
