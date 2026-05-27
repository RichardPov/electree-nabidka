const items = [
  {
    title: "Postaráme se o papírování",
    desc: "Formality nechte na nás. Vše vyřešíme rychle, správně a bez stresu.",
    icon: "clipboard",
  },
  {
    title: "Nemáme skryté poplatky",
    desc: "Říkáme všechno na rovinu. Ceny i podmínky jsou u nás jasné.",
    icon: "eye",
  },
  {
    title: "Vyřídíme všechno hned",
    desc: "S námi na nic nečekáte. Zbytečné průtahy a čekací lhůty u nás nehrozí.",
    icon: "clock",
  },
] as const;

export function Benefits() {
  return (
    <section className="body-section" style={{ paddingTop: 0 }}>
      <div className="body-inner">
        <h2 className="sec-title">Proč Electree?</h2>
        <div className="benefits-grid">
          {items.map((b, i) => (
            <div key={i} className="ben-item">
              <div className="ben-icon" aria-hidden="true">
                <BenIcon name={b.icon} />
              </div>
              <div>
                <div className="ben-title">{b.title}</div>
                <div className="ben-text">{b.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function BenIcon({ name }: { name: string }) {
  const p = { width: 18, height: 18, viewBox: "0 0 24 24", fill: "none", stroke: "#D7FF00", strokeWidth: 2.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (name) {
    case "clipboard":
      return <svg {...p}><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><rect x="8" y="2" width="8" height="4" rx="1"/><path d="M9 12h6M9 16h6"/></svg>;
    case "eye":
      return <svg {...p}><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>;
    case "clock":
      return <svg {...p}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
    default:
      return null;
  }
}
