"use client";

import { useState } from "react";
import { OFFER } from "@/lib/offer-data";

function fmt(n: number, vat: boolean) {
  const val = vat ? Math.round(n * (1 + OFFER.vat)) : n;
  return val.toLocaleString("cs-CZ");
}

export function PriceComparison() {
  const [withVat, setWithVat] = useState(true);

  const czPricePerMWh = fmt(OFFER.current.pricePerMWhExVat, withVat);
  const czMonthlyFee = fmt(OFFER.current.monthlyFeeExVat, withVat);
  const czAnnual = fmt(
    Math.round(OFFER.current.pricePerMWhExVat * OFFER.client.consumptionMWh + OFFER.current.monthlyFeeExVat * 12),
    withVat
  );

  const elPricePerMWh = fmt(OFFER.offer.pricePerMWhExVat, withVat);
  const elMonthlyFee = fmt(OFFER.offer.monthlyFeeExVat, withVat);
  const elAnnual = fmt(
    Math.round(OFFER.offer.pricePerMWhExVat * OFFER.client.consumptionMWh + OFFER.offer.monthlyFeeExVat * 12),
    withVat
  );

  return (
    <section className="py-12 px-6 md:px-10 lg:px-16" style={{ background: "#EBF7F1" }}>
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-wrap items-center justify-between gap-4 mb-8">
          <div>
            <h2 className="text-[20px] font-bold" style={{ color: "#0D3D34" }}>
              Porovnání cen
            </h2>
            <p className="text-[13px] mt-1" style={{ color: "#6B7280" }}>
              Pouze cena komodity — distribuce platí u obou dodavatelů stejně
            </p>
          </div>

          {/* DPH toggle */}
          <div
            className="flex rounded-[10px] p-1 gap-1"
            style={{ background: "#D8EAE0" }}
            role="group"
            aria-label="Zobrazení cen s nebo bez DPH"
          >
            <button
              onClick={() => setWithVat(false)}
              className="px-4 py-2 rounded-[8px] text-[12px] font-semibold transition-all"
              style={
                !withVat
                  ? { background: "#0D3D34", color: "#D7FF00" }
                  : { background: "transparent", color: "#7C9691" }
              }
              aria-pressed={!withVat}
            >
              Bez DPH
            </button>
            <button
              onClick={() => setWithVat(true)}
              className="px-4 py-2 rounded-[8px] text-[12px] font-semibold transition-all"
              style={
                withVat
                  ? { background: "#0D3D34", color: "#D7FF00" }
                  : { background: "transparent", color: "#7C9691" }
              }
              aria-pressed={withVat}
            >
              S DPH 21 %
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* CEZ card */}
          <div
            className="rounded-[16px] p-6 opacity-75"
            style={{ background: "#ffffff", border: "1.5px solid #D1DFD8" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span
                className="px-3 py-1 rounded-full text-[11px] font-semibold"
                style={{ background: "#EBF7F1", color: "#6B7280" }}
              >
                Váš stávající
              </span>
              <span className="text-[15px] font-bold" style={{ color: "#3A3A3C" }}>
                {OFFER.current.supplier}
              </span>
              <span className="text-[12px]" style={{ color: "#6B7280" }}>
                · {OFFER.current.tariff}
              </span>
            </div>

            <PriceRow label="Cena za MWh" value={`${czPricePerMWh} Kč`} />
            <PriceRow label="Stálý měsíční plat" value={`${czMonthlyFee} Kč`} />
            <PriceRow label="Roční náklady (komodita)" value={`${czAnnual} Kč`} strong />
          </div>

          {/* Electree card */}
          <div
            className="rounded-[16px] p-6"
            style={{ background: "#ffffff", border: "2px solid #0D3D34" }}
          >
            <div className="flex items-center gap-2 mb-5">
              <span
                className="px-3 py-1 rounded-full text-[11px] font-semibold"
                style={{ background: "#EBF7F1", color: "#0D3D34" }}
              >
                Naše nabídka
              </span>
              <span className="text-[15px] font-bold" style={{ color: "#0D3D34" }}>
                {OFFER.offer.supplier}
              </span>
              <span
                className="ml-auto px-2 py-0.5 rounded-full text-[11px] font-semibold"
                style={{ background: "#EBF7F1", color: "#20544A" }}
              >
                {OFFER.offer.fixYears}Y fix
              </span>
            </div>

            <PriceRow
              label="Cena za MWh"
              value={`${elPricePerMWh} Kč`}
              savings={`↓ ${(OFFER.current.pricePerMWhExVat - OFFER.offer.pricePerMWhExVat).toLocaleString("cs-CZ")} Kč`}
              highlight
            />
            <PriceRow label="Stálý měsíční plat" value={`${elMonthlyFee} Kč`} highlight />
            <PriceRow label="Roční náklady (komodita)" value={`${elAnnual} Kč`} strong highlight />
          </div>
        </div>

        <p className="mt-4 text-[12px]" style={{ color: "#7C9691" }}>
          * Distribuce, poplatky OTE a daně jsou u obou dodavatelů totožné a nejsou zahrnuty.
          Spotřeba {OFFER.client.consumptionMWh} MWh/rok.
        </p>
      </div>
    </section>
  );
}

function PriceRow({
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
      className="flex items-center justify-between py-3"
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
          <span className="text-[11px] font-semibold" style={{ color: "#20544A" }}>
            {savings}
          </span>
        )}
      </div>
    </div>
  );
}
