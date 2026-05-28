import { OFFER } from "@/lib/offer-data";

const items = [
  {
    icon: "check",
    title: "Vše vyřídíme za Vás",
    sub: "Přechod bez starostí",
  },
  {
    icon: "file",
    title: "Žádné papírování",
    sub: "Jednoduše online",
  },
  {
    icon: "lock",
    title: `Fixace ceny ${OFFER.offer.fixYears * 12} měsíců`,
    sub: "Jistota stabilní ceny",
  },
  {
    icon: "phone",
    title: "Zákaznická podpora",
    sub: "Po–Pá 9–17 hodin",
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
    case "check":
      return (
        <svg {...p}>
          <circle cx="12" cy="12" r="10"/>
          <polyline points="9 12 11.5 14.5 16 9.5"/>
        </svg>
      );
    case "file":
      return (
        <svg {...p}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
          <polyline points="14 2 14 8 20 8"/>
          <line x1="9" y1="13" x2="15" y2="13"/>
          <line x1="9" y1="17" x2="13" y2="17"/>
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
