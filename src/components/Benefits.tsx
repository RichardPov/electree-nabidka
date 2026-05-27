type BenItem = { num: string; title: string; desc: string; icon: string };

const items: BenItem[] = [
  {
    num: "1.",
    title: "Postaráme se o papírování",
    desc: "Formality nechte na nás. Vše vyřešíme rychle, správně a bez stresu.",
    icon: "clipboard",
  },
  {
    num: "2.",
    title: "Tlačíme ceny dolů",
    desc: "Nabízíme nejvýhodnější ceny na trhu, vaše peněženka zůstane v klidu.",
    icon: "trending-down",
  },
  {
    num: "3.",
    title: "Nemáme skryté poplatky",
    desc: "Říkáme všechno na rovinu. Ceny i podmínky jsou u nás jasné.",
    icon: "eye",
  },
  {
    num: "4.",
    title: "Děláme energii jednodušší",
    desc: "Každý krok i proces nastavujeme tak, aby vás zbytečně nezdržoval.",
    icon: "zap",
  },
  {
    num: "5.",
    title: "Vyřídíme všechno hned",
    desc: "S námi na nic nečekáte. Zbytečné průtahy a čekací lhůty u nás nehrozí.",
    icon: "clock",
  },
  {
    num: "6.",
    title: "Jednáme férově",
    desc: "U nás nenajdete žádné kličky ani nepříjemná překvapení.",
    icon: "scale",
  },
];

export function Benefits() {
  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <h2 className="sec-title">Proč Electree?</h2>
        <div className="benefits-grid">
          {items.map((b, i) => (
            <div key={i} className="ben-card">
              <div className="ben-card-top">
                <span className="ben-num">{b.num}</span>
                <span className="ben-card-icon" aria-hidden="true">
                  <BenIcon name={b.icon} />
                </span>
              </div>
              <div className="ben-card-title">{b.title}</div>
              <div className="ben-card-desc">{b.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenIcon({ name }: { name: string }) {
  const p = {
    width: 36, height: 36, viewBox: "0 0 24 24",
    fill: "none", stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };
  switch (name) {
    case "clipboard":
      return <svg {...p}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1" ry="1"/><path d="M9 12h6M9 16h6"/></svg>;
    case "trending-down":
      return <svg {...p}><polyline points="23 18 13.5 8.5 8.5 13.5 1 6"/><polyline points="17 18 23 18 23 12"/></svg>;
    case "eye":
      return <svg {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
    case "zap":
      return <svg {...p}><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>;
    case "clock":
      return <svg {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    case "scale":
      return <svg {...p}><path d="M12 3v18M3 6l9-3 9 3"/><path d="M6 6l-3 8c0 2.2 1.34 4 3 4s3-1.8 3-4L6 6z"/><path d="M18 6l-3 8c0 2.2 1.34 4 3 4s3-1.8 3-4L18 6z"/></svg>;
    default:
      return null;
  }
}
