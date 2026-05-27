"use client";

import { useState } from "react";
import { SignModal } from "./SignModal";
import { CallModal } from "./CallModal";

export function V2Actions() {
  const [signOpen, setSignOpen] = useState(false);
  const [callOpen, setCallOpen] = useState(false);

  return (
    <>
      <div className="v2-cta">
        <button onClick={() => setSignOpen(true)} className="v2-cta-btn">
          Podepsat online
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </button>
        <button onClick={() => setCallOpen(true)} className="v2-cta-btn-ghost">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.27a16 16 0 0 0 6 6l1.15-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.81l.01 1.11z"/>
          </svg>
          Zavolejte mi
        </button>
      </div>
      <SignModal isOpen={signOpen} onClose={() => setSignOpen(false)} />
      <CallModal isOpen={callOpen} onClose={() => setCallOpen(false)} />
    </>
  );
}
