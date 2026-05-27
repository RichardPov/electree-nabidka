import { OFFER } from "@/lib/offer-data";

const items = [
  {
    icon: "renewable",
    title: "100 % obnovitelné zdroje",
    sub: "certifikát původu energie",
  },
  {
    icon: "card",
    title: "Online správa smlouvy",
    sub: "změny tarifu i fakturace",
  },
  {
    icon: "lock",
    title: `Fixace ceny ${OFFER.offer.fixYears * 12} měsíců`,
    sub: "žádné nárazové změny",
  },
  {
    icon: "phone",
    title: "Zákaznická linka",
    sub: "7 dní v týdnu, 8–20 h",
  },
] as const;

export function Features() {
  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <div className="feat-grid">
          {items.map((item, i) => (
            <div key={i} className="feat-card">
              <div className="feat-icon" aria-hidden="true">
                <FeatIcon name={item.icon} />
              </div>
              <div>
                <div className="feat-title">{item.title}</div>
                <div className="feat-sub">{item.sub}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FeatIcon({ name }: { name: string }) {
  const p = {
    width: 18, height: 18, viewBox: "0 0 24 24",
    fill: "none", stroke: "var(--dark)",
    strokeWidth: 1.8,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "renewable":
      return (
        <svg {...p}>
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
        </svg>
      );
    case "card":
      return (
        <svg {...p}>
          <rect x="2" y="5" width="20" height="14" rx="2"/>
          <line x1="2" y1="10" x2="22" y2="10"/>
        </svg>
      );
    case "lock":
      return (
        <svg {...p}>
          <rect x="3" y="11" width="18" height="11" rx="2"/>
          <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
        </svg>
      );
    case "phone":
      return (
        <svg {...p}>
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.27a16 16 0 0 0 6 6l1.15-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.81l.01 1.11z"/>
        </svg>
      );
    default:
      return null;
  }
}
