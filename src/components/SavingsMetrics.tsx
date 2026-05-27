"use client";

import { OFFER } from "@/lib/offer-data";
import { useVat } from "@/lib/vat-context";

export function SavingsMetrics() {
  const { vat } = useVat();

  const adj = (n: number) => vat ? n : Math.round(n / (1 + OFFER.vat));

  const cards: { value: string; label: string; badge: string }[] = [
    {
      value: `${adj(OFFER.savings.monthly).toLocaleString("cs-CZ")} Kč`,
      label: "ušetříte měsíčně na zálohách",
      badge: `−${adj(OFFER.savings.monthly).toLocaleString("cs-CZ")} Kč/měsíc`,
    },
    {
      value: `${adj(OFFER.savings.annual).toLocaleString("cs-CZ")} Kč`,
      label: "ušetříte za rok na elektřině",
      badge: "roční úspora",
    },
    {
      value: `${adj(OFFER.savings.threeYear).toLocaleString("cs-CZ")} Kč`,
      label: `celková úspora za ${OFFER.offer.fixYears} roky fixace`,
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
