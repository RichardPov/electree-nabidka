"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

type IconId = "banknote" | "barchart" | "award";

export function SavingsMetrics() {
  const { vat } = useVat();

  const adj = (n: number) => vat ? n : Math.round(n / (1 + OFFER.vat));

  const cards: { iconId: IconId; value: string; label: string; badge: string }[] = [
    {
      iconId: "banknote",
      value: `${adj(OFFER.savings.monthly).toLocaleString("cs-CZ")} Kč`,
      label: "ušetříte měsíčně na zálohách",
      badge: `−${adj(OFFER.savings.monthly).toLocaleString("cs-CZ")} Kč/měsíc`,
    },
    {
      iconId: "barchart",
      value: `${adj(OFFER.savings.annual).toLocaleString("cs-CZ")} Kč`,
      label: "ušetříte za rok na elektřině",
      badge: "roční úspora",
    },
    {
      iconId: "award",
      value: `${adj(OFFER.savings.threeYear).toLocaleString("cs-CZ")} Kč`,
      label: "za celou dobu fixace",
      badge: "za celou fixaci",
    },
  ];

  return (
    <section className="body-section">
      <div className="body-inner">
        <h2 className="sec-title">Vaše úspora s Electree</h2>
        <div className="metrics-grid">
          {cards.map((c, i) => (
            <div key={i} className="metric-card">
              <div className="mc-icon" aria-hidden="true">
                <MetricIcon id={c.iconId} />
              </div>
              <div className="mc-val">{c.value}</div>
              <div className="mc-label">{c.label}</div>
              <div className="mc-badge">{c.badge}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function MetricIcon({ id }: { id: IconId }) {
  const p = {
    width: 18, height: 18, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth: 2.2,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (id) {
    case "banknote":
      return (
        <svg {...p}>
          <rect width="20" height="12" x="2" y="6" rx="2"/>
          <circle cx="12" cy="12" r="2"/>
          <path d="M6 12h.01M18 12h.01"/>
        </svg>
      );
    case "barchart":
      return (
        <svg {...p}>
          <line x1="18" y1="20" x2="18" y2="10"/>
          <line x1="12" y1="20" x2="12" y2="4"/>
          <line x1="6" y1="20" x2="6" y2="16"/>
        </svg>
      );
    case "award":
      return (
        <svg {...p}>
          <circle cx="12" cy="8" r="6"/>
          <path d="M15.477 12.89 17 22l-5-3-5 3 1.523-9.11"/>
        </svg>
      );
  }
}
