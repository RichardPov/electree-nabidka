const items = [
  {
    title: "Fixní cena na 3 roky",
    desc: "Garantovaná cena elektřiny bez ohledu na pohyb trhu. Žádná překvapení ve vyúčtování.",
    icon: "lock",
  },
  {
    title: "100% zelená energie",
    desc: "Elektřina z obnovitelných zdrojů. Certifikát původu je součástí každé smlouvy.",
    icon: "leaf",
  },
  {
    title: "Zákaznická péče",
    desc: "Osobní přístup a podpora kdykoli ji budete potřebovat. Vždy na telefonu.",
    icon: "phone",
  },
  {
    title: "Snadný přechod",
    desc: "Vše vyřídíme za vás. Bez výpadku dodávky, bez formulářů, bez starostí.",
    icon: "switch",
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
    case "lock":
      return <svg {...p}><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>;
    case "leaf":
      return <svg {...p}><path d="M2 22c1.25-1.25 2.5-5 6-6s7.5-2 10-6c1-1.5 1.5-3 1.5-5 0 0-4.5 1-7.5 4S8 15 6 18"/><path d="M2 22c0-3 1.5-6 4-8"/></svg>;
    case "phone":
      return <svg {...p}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.27a16 16 0 0 0 6 6l1.15-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.81l.01 1.11z"/></svg>;
    case "switch":
      return <svg {...p}><path d="M17 1l4 4-4 4"/><path d="M3 11V9a4 4 0 0 1 4-4h14"/><path d="M7 23l-4-4 4-4"/><path d="M21 13v2a4 4 0 0 1-4 4H3"/></svg>;
    default:
      return null;
  }
}
