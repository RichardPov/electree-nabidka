import { OFFER } from "@/lib/offer-data";

const cards = [
  {
    icon: "📅",
    value: `${OFFER.savings.monthly.toLocaleString("cs-CZ")} Kč`,
    label: "měsíčně méně na zálohách",
    badge: `−${OFFER.savings.pct} % měsíčně`,
    hl: false,
  },
  {
    icon: "📆",
    value: `${OFFER.savings.annual.toLocaleString("cs-CZ")} Kč`,
    label: "ušetříte za rok",
    badge: "roční úspora",
    hl: false,
  },
  {
    icon: "🏆",
    value: `${OFFER.savings.threeYear.toLocaleString("cs-CZ")} Kč`,
    label: `celková úspora za ${OFFER.offer.fixYears} roky fixace`,
    badge: "za celou fixaci",
    hl: true,
  },
] as const;

export function SavingsMetrics() {
  return (
    <section className="body-section">
      <div className="body-inner">
        <h2 className="sec-title">Vaše úspora s Electree</h2>
        <div className="metrics-grid">
          {cards.map((c, i) => (
            <div key={i} className={`metric-card${c.hl ? " metric-card-hl" : ""}`}>
              <div className="mc-icon" aria-hidden="true">{c.icon}</div>
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
