"use client";

import { useState } from "react";
import { SignModal } from "./SignModal";

export function V2Actions() {
  const [signOpen, setSignOpen] = useState(false);

  return (
    <>
      <div className="v2-cta">
        <button onClick={() => setSignOpen(true)} className="v2-cta-btn">
          Chci ušetřit s Electree ↗
        </button>
        <button onClick={() => setSignOpen(true)} className="v2-cta-link-btn">
          Mám zájem o podpis smlouvy →
        </button>
      </div>
      <SignModal isOpen={signOpen} onClose={() => setSignOpen(false)} />
    </>
  );
}
