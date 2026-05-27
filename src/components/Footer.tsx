import { OFFER } from "@/lib/offer-data";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
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
