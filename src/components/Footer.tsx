import { OFFER } from "@/lib/offer-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        {/* Phone CTA row */}
        <div className="footer-phone">
          <span className="footer-phone-q">Máte otázky?</span>
          <a href="tel:+420666888999" className="footer-phone-link">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" style={{ flexShrink: 0 }}>
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.27a16 16 0 0 0 6 6l1.15-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.81l.01 1.11z"/>
            </svg>
            +420 666 888 999
          </a>
          <span className="footer-phone-hours">Po–Pá, 8:00–16:00</span>
        </div>

        <div className="footer-row">
          <span className="footer-link">Electree s.r.o.</span>
          <div className="footer-contact">
            <a href="mailto:info@electree.cz" className="footer-link">info@electree.cz</a>
            <a href="tel:+420800000000" className="footer-link">800 xxx xxx</a>
          </div>
        </div>
        <div className="footer-divider" />
        <p className="footer-small">
          * Roční náklady zahrnují pouze komoditu (silová elektřina) + stálý plat. Distribuce, poplatky OTE
          a daně nejsou zahrnuty a platí stejně u obou dodavatelů. Spotřeba: {OFFER.client.consumptionMWh} MWh/rok.
          Zálohy jsou modelované na základě spotřeby a mohou se lišit dle skutečné spotřeby. Ceny bez DPH, pokud není uvedeno jinak.
          Nabídka má indikativní charakter a vychází z informací poskytnutých při telefonickém hovoru.
          Platnost do {OFFER.validity}.
        </p>
        <p className="footer-copy">
          © 2026 Electree s.r.o.&nbsp;·&nbsp;Nabídka č. {OFFER.offerNumber}&nbsp;·&nbsp;nabidka.electree.cz
        </p>
      </div>
    </footer>
  );
}
