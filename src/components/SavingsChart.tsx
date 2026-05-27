"use client";

import { useEffect, useRef, useState } from "react";
import { OFFER } from "@/lib/offer-data";

const CEZ_H = 160;
const ELECTREE_H = Math.round(
  (OFFER.offer.monthlyPaymentWithVat / OFFER.current.monthlyPaymentWithVat) * CEZ_H
);
const SAVINGS_H = CEZ_H - ELECTREE_H;

export function SavingsChart() {
  const ref = useRef<SVGSVGElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  const svgH = CEZ_H + 70;
  const barW = 68;
  const gap = 44;
  const svgW = barW * 2 + gap + 48;

  const yBase = CEZ_H + 8;
  const cezX = 0;
  const elX = barW + gap;

  return (
    <div className="flex flex-col items-center select-none">
      <svg
        ref={ref}
        width={svgW}
        height={svgH + 52}
        viewBox={`0 0 ${svgW} ${svgH + 52}`}
        aria-label="Porovnání měsíčních záloh: ČEZ 1 890 Kč vs Electree 1 440 Kč"
        role="img"
      >
        {/* Savings zone label (between the tops) */}
        {visible && (
          <>
            {/* Bracket line from CEZ top to Electree top level */}
            <line
              x1={cezX + barW + 5}
              y1={8}
              x2={cezX + barW + 5}
              y2={8 + SAVINGS_H}
              stroke="rgba(215,255,0,0.5)"
              strokeWidth="1.5"
              strokeDasharray="3 3"
            />
            {/* Savings label */}
            <text
              x={cezX + barW + 12}
              y={8 + SAVINGS_H / 2 + 5}
              fill="#D7FF00"
              fontSize="11"
              fontWeight="700"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              −{OFFER.savings.monthly.toLocaleString("cs-CZ")} Kč
            </text>
            <text
              x={cezX + barW + 12}
              y={8 + SAVINGS_H / 2 + 20}
              fill="rgba(215,255,0,0.6)"
              fontSize="9"
              fontFamily="Plus Jakarta Sans, sans-serif"
            >
              /měsíc
            </text>
          </>
        )}

        {/* CEZ bar */}
        <rect
          x={cezX}
          y={8}
          width={barW}
          height={CEZ_H}
          rx="8"
          fill="rgba(255,255,255,0.1)"
          className={visible ? "bar-animate bar-cez" : ""}
          style={{ transformOrigin: `${cezX + barW / 2}px ${8 + CEZ_H}px` }}
        />
        {/* Electree bar */}
        <rect
          x={elX}
          y={8 + SAVINGS_H}
          width={barW}
          height={ELECTREE_H}
          rx="8"
          fill="#D7FF00"
          className={visible ? "bar-animate bar-electree" : ""}
          style={{ transformOrigin: `${elX + barW / 2}px ${8 + CEZ_H}px` }}
        />

        {/* Baseline */}
        <line
          x1={cezX}
          y1={yBase}
          x2={elX + barW}
          y2={yBase}
          stroke="rgba(255,255,255,0.1)"
          strokeWidth="1"
        />

        {/* CEZ price label */}
        <text
          x={cezX + barW / 2}
          y={4}
          textAnchor="middle"
          fill="rgba(255,255,255,0.55)"
          fontSize="11"
          fontWeight="600"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          1 890 Kč
        </text>

        {/* Electree price label */}
        <text
          x={elX + barW / 2}
          y={8 + SAVINGS_H - 6}
          textAnchor="middle"
          fill="#D7FF00"
          fontSize="11"
          fontWeight="700"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          1 440 Kč
        </text>

        {/* CEZ label */}
        <text
          x={cezX + barW / 2}
          y={yBase + 18}
          textAnchor="middle"
          fill="rgba(255,255,255,0.4)"
          fontSize="11"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          ČEZ
        </text>
        <text
          x={cezX + barW / 2}
          y={yBase + 30}
          textAnchor="middle"
          fill="rgba(255,255,255,0.25)"
          fontSize="9"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          nyní platíte
        </text>

        {/* Electree label */}
        <text
          x={elX + barW / 2}
          y={yBase + 18}
          textAnchor="middle"
          fill="#D7FF00"
          fontSize="11"
          fontWeight="600"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          Electree
        </text>
        <text
          x={elX + barW / 2}
          y={yBase + 30}
          textAnchor="middle"
          fill="rgba(215,255,0,0.5)"
          fontSize="9"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          s námi
        </text>

        {/* Percent badge */}
        <rect
          x={elX + barW / 2 - 22}
          y={yBase + 36}
          width={44}
          height={16}
          rx="8"
          fill="rgba(215,255,0,0.12)"
        />
        <text
          x={elX + barW / 2}
          y={yBase + 47.5}
          textAnchor="middle"
          fill="#D7FF00"
          fontSize="10"
          fontWeight="700"
          fontFamily="Plus Jakarta Sans, sans-serif"
        >
          −{OFFER.savings.pct} %
        </text>
      </svg>
      <p className="text-[10px] mt-1" style={{ color: "rgba(255,255,255,0.3)" }}>
        měsíční záloha s DPH · 4 MWh/rok
      </p>
    </div>
  );
}
