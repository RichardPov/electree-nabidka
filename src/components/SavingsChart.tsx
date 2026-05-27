"use client";

import { useEffect, useRef, useState } from "react";
import { OFFER } from "@/lib/offer-data";

const R = 76;
const SW = 15;
const CIRC = 2 * Math.PI * R; // ≈ 477.5
const ARC = (OFFER.savings.pct / 100) * CIRC; // 24% arc
const SIZE = (R + SW + 2) * 2;
const CENTER = SIZE / 2;

export function SavingsChart() {
  const [ready, setReady] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setReady(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="flex flex-col items-center gap-4"
      role="img"
      aria-label={`Úspora ${OFFER.savings.pct} % — záloha klesá z ${OFFER.current.monthlyPaymentWithVat} Kč na ${OFFER.offer.monthlyPaymentWithVat} Kč měsíčně`}
    >
      {/* Donut ring */}
      <div className="relative" style={{ width: SIZE, height: SIZE }}>
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          style={{ transform: "rotate(-90deg)" }}
          aria-hidden="true"
        >
          {/* Track — full circle, very subtle */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={R}
            fill="none"
            stroke="rgba(255,255,255,0.07)"
            strokeWidth={SW}
          />
          {/* Paid portion — 76%, dim */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={R}
            fill="none"
            stroke="rgba(255,255,255,0.12)"
            strokeWidth={SW}
            strokeLinecap="butt"
            strokeDasharray={CIRC}
            strokeDashoffset={ready ? ARC : CIRC}
            style={{
              transition: ready
                ? "stroke-dashoffset 1.2s cubic-bezier(0.4, 0, 0.2, 1) 0.2s"
                : "none",
            }}
          />
          {/* Savings arc — 24%, lime */}
          <circle
            cx={CENTER}
            cy={CENTER}
            r={R}
            fill="none"
            stroke="#D7FF00"
            strokeWidth={SW}
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={ready ? CIRC - ARC : CIRC}
            style={{
              transition: ready
                ? "stroke-dashoffset 1.6s cubic-bezier(0.4, 0, 0.2, 1) 0.4s"
                : "none",
            }}
          />
        </svg>

        {/* Center overlay — stays upright */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span
            className="text-[42px] font-extrabold leading-none tracking-tight"
            style={{ color: "#D7FF00", letterSpacing: "-0.03em" }}
          >
            −{OFFER.savings.pct}%
          </span>
          <span
            className="text-[11px] mt-1.5 font-medium tracking-wide"
            style={{ color: "rgba(255,255,255,0.4)", textTransform: "uppercase", letterSpacing: "0.07em" }}
          >
            úspora
          </span>
        </div>
      </div>

      {/* Price comparison strip below ring */}
      <div
        className="flex items-center gap-4 px-4 py-3 rounded-2xl"
        style={{
          background: "rgba(255,255,255,0.04)",
          border: "1px solid rgba(255,255,255,0.07)",
        }}
      >
        {/* CEZ */}
        <div className="text-center">
          <div className="text-[10px] font-semibold mb-1" style={{ color: "rgba(255,255,255,0.3)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            ČEZ
          </div>
          <div
            className="text-[15px] font-semibold line-through"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            {OFFER.current.monthlyPaymentWithVat.toLocaleString("cs-CZ")} Kč
          </div>
        </div>

        {/* Arrow */}
        <svg width="20" height="10" viewBox="0 0 20 10" fill="none" aria-hidden="true">
          <path
            d="M0 5h16M12 1l4 4-4 4"
            stroke="rgba(215,255,0,0.45)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>

        {/* Electree */}
        <div className="text-center">
          <div className="text-[10px] font-semibold mb-1" style={{ color: "rgba(215,255,0,0.5)", textTransform: "uppercase", letterSpacing: "0.06em" }}>
            Electree
          </div>
          <div className="text-[15px] font-bold" style={{ color: "#D7FF00" }}>
            {OFFER.offer.monthlyPaymentWithVat.toLocaleString("cs-CZ")} Kč
          </div>
        </div>
      </div>

      <p className="text-[10px]" style={{ color: "rgba(255,255,255,0.2)" }}>
        záloha s DPH · {OFFER.client.consumptionMWh} MWh/rok
      </p>
    </div>
  );
}
