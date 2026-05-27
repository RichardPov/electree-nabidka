import { OFFER } from "@/lib/offer-data";

type IconId = "banknote" | "barchart" | "award";

const cards: { iconId: IconId; value: string; label: string; badge: string; hl: boolean }[] = [
  {
    iconId: "banknote",
    value: `${OFFER.savings.monthly.toLocaleString("cs-CZ")} Kč`,
    label: "měsíčně méně na zálohách",
    badge: `−${OFFER.savings.pct} % měsíčně`,
    hl: false,
  },
  {
    iconId: "barchart",
    value: `${OFFER.savings.annual.toLocaleString("cs-CZ")} Kč`,
    label: "ušetříte za rok",
    badge: "roční úspora",
    hl: false,
  },
  {
    iconId: "award",
    value: `${OFFER.savings.threeYear.toLocaleString("cs-CZ")} Kč`,
    label: `celková úspora za ${OFFER.offer.fixYears} roky fixace`,
    badge: "za celou fixaci",
    hl: true,
  },
];

export function SavingsMetrics() {
  return (
    <section className="body-section">
      <div className="body-inner">
        <h2 className="sec-title">Vaše úspora s Electree</h2>
        <div className="metrics-grid">
          {cards.map((c, i) => (
            <div key={i} className={`metric-card${c.hl ? " metric-card-hl" : ""}`}>
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
