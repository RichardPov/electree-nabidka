"use client";

import { useEffect, useRef, useState } from "react";
import { OFFER } from "@/lib/offer-data";

/* SVG ring math */
const R    = 74;
const SW   = 14;
const CIRC = 2 * Math.PI * R;          // ≈ 464.9
const ARC  = (OFFER.savings.pct / 100) * CIRC;  // 24% ≈ 111.6
const SIZE = (R + SW + 2) * 2;         // 180px
const C    = SIZE / 2;

export function SavingsChart() {
  const [on, setOn] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) { setOn(true); obs.disconnect(); } },
      { threshold: 0.2 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      role="img"
      aria-label={`Donut chart — úspora ${OFFER.savings.pct}%`}
      style={{ display: "flex", flexDirection: "column", alignItems: "center", gap: 0 }}
    >
      {/* Ring */}
      <div style={{ position: "relative", width: SIZE, height: SIZE }}>
        <svg
          width={SIZE}
          height={SIZE}
          viewBox={`0 0 ${SIZE} ${SIZE}`}
          style={{ transform: "rotate(-90deg)" }}
          aria-hidden="true"
        >
          {/* Track */}
          <circle cx={C} cy={C} r={R} fill="none" stroke="rgba(255,255,255,0.07)" strokeWidth={SW} />
          {/* Arc — savings */}
          <circle
            cx={C} cy={C} r={R}
            fill="none"
            stroke="#D7FF00"
            strokeWidth={SW}
            strokeLinecap="round"
            strokeDasharray={CIRC}
            strokeDashoffset={on ? CIRC - ARC : CIRC}
            style={{ transition: on ? "stroke-dashoffset 1.8s cubic-bezier(0.4,0,0.2,1) 0.3s" : "none" }}
          />
        </svg>

        {/* Center text — upright overlay */}
        <div style={{
          position: "absolute", inset: 0,
          display: "flex", flexDirection: "column",
          alignItems: "center", justifyContent: "center",
        }}>
          <span style={{
            fontSize: 42, fontWeight: 900, lineHeight: 1,
            color: "#fff", letterSpacing: "-0.03em",
            fontFamily: "var(--font-jakarta), Plus Jakarta Sans, sans-serif",
          }}>
            {OFFER.savings.pct}&nbsp;%
          </span>
          <span style={{
            fontSize: 12, color: "rgba(255,255,255,0.42)", marginTop: 6,
            fontFamily: "var(--font-jakarta), Plus Jakarta Sans, sans-serif",
          }}>
            úspora na záloze
          </span>
        </div>
      </div>
    </div>
  );
}
