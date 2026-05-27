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
                Pokračovat k podpisu
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>

        </div>
      </div>

      <SignModal isOpen={signOpen} onClose={() => setSignOpen(false)} />
    </>
  );
}
