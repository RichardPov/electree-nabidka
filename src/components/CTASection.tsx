"use client";

import { useState } from "react";
import { OFFER } from "@/lib/offer-data";
import { SignModal } from "./SignModal";

export function CTASection() {
  const [signOpen, setSignOpen] = useState(false);

  return (
    <>
      <div className="cta-outer" id="cta">
        <div className="cta-card">
          <div className="cta-body">
            <div className="cta-body-left">
              <p className="cta-eyebrow">Připraveno k podpisu</p>
              <h2 className="cta-title">
                Pokračujte ke smlouvě –<br />zabere to méně než minutu.
              </h2>
              <p className="cta-sub">
                Pokračováním potvrzujete, že jste si nabídku přečetli.
                Smlouvu podepíšete v dalším kroku.
              </p>
            </div>
            <div className="cta-body-right">
              <button onClick={() => setSignOpen(true)} className="btn-cta-primary">
                Zkontrolovat a pokračovat
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

          <div className="cta-disclaimer">
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.25)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" style={{ flexShrink: 0, marginTop: 1 }} aria-hidden="true">
              <circle cx="12" cy="12" r="10"/><line x1="12" y1="16" x2="12" y2="12"/><line x1="12" y1="8" x2="12.01" y2="8"/>
            </svg>
            <p className="cta-disclaimer-text">
              Tato nabídka má <strong style={{ color: "rgba(255,255,255,0.45)" }}>indikativní charakter</strong> a vychází z informací poskytnutých při telefonickém hovoru.
              Konečné podmínky a ceny budou upřesněny po zadání kompletních údajů.
              Nabídka č. {OFFER.offerNumber}.
            </p>
          </div>
        </div>
      </div>

      <SignModal isOpen={signOpen} onClose={() => setSignOpen(false)} />
    </>
  );
}
