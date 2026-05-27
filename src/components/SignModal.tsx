"use client";
import { useEffect } from "react";

interface Props { isOpen: boolean; onClose: () => void; }

const ITEMS = [
  { main: "Číslo OP nebo pasu",     note: "k ověření totožnosti" },
  { main: "EAN odběrného místa",    note: "najdete ho na vyúčtování od ČEZ" },
  { main: "IBAN bankovního účtu",   note: "pro nastavení inkasa" },
  { main: "Kontaktní e-mail",       note: "pro potvrzení smlouvy" },
];

export function SignModal({ isOpen, onClose }: Props) {
  useEffect(() => {
    if (!isOpen) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="sign-modal-title">
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Zavřít">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        <div className="modal-icon-wrap">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"/>
            <polyline points="14 2 14 8 20 8"/>
            <line x1="16" y1="13" x2="8" y2="13"/>
            <line x1="16" y1="17" x2="8" y2="17"/>
          </svg>
        </div>

        <h2 className="modal-title" id="sign-modal-title">Co budete potřebovat</h2>
        <p className="modal-sub">Pro uzavření smlouvy online si připravte následující:</p>

        <ul className="modal-list">
          {ITEMS.map((item, i) => (
            <li key={i} className="modal-list-item">
              <span className="modal-list-check" aria-hidden="true">
                <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round">
                  <polyline points="20 6 9 17 4 12"/>
                </svg>
              </span>
              <span>
                <span className="modal-item-main">{item.main}</span>
                <span className="modal-item-note"> — {item.note}</span>
              </span>
            </li>
          ))}
        </ul>

        <p className="modal-note">Přechod za vás plně vyřídíme. Bez výpadku dodávky, bez formulářů.</p>

        <div className="modal-footer">
          <button className="btn-modal-primary" onClick={onClose}>
            Pokračovat k podpisu
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </button>
          <button className="btn-modal-back" onClick={onClose}>Zpět</button>
        </div>
      </div>
    </div>
  );
}
