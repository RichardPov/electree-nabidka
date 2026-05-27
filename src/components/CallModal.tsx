"use client";
import { useEffect, useState } from "react";

interface Props { isOpen: boolean; onClose: () => void; }

export function CallModal({ isOpen, onClose }: Props) {
  const [phone, setPhone] = useState("+420 721 456 789");
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) setSubmitted(false);
  }, [isOpen]);

  useEffect(() => {
    if (!isOpen) return;
    const fn = (e: KeyboardEvent) => { if (e.key === "Escape") onClose(); };
    document.addEventListener("keydown", fn);
    return () => document.removeEventListener("keydown", fn);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div className="modal-overlay" onClick={onClose} role="dialog" aria-modal="true" aria-labelledby="call-modal-title">
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose} aria-label="Zavřít">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>

        {submitted ? (
          <div className="modal-success">
            <div className="modal-success-icon">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="20 6 9 17 4 12"/>
              </svg>
            </div>
            <h2 className="modal-success-title">Zavoláme vám!</h2>
            <p className="modal-success-sub">
              Náš poradce vás kontaktuje na číslo<br />
              <strong>{phone}</strong><br />
              do 2 pracovních dnů. Po–Pá, 8:00–16:00.
            </p>
            <button className="btn-modal-primary" style={{ marginTop: 24, width: "100%" }} onClick={onClose}>
              Zavřít
            </button>
          </div>
        ) : (
          <>
            <div className="modal-icon-wrap">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.27a16 16 0 0 0 6 6l1.15-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 15.81l.01 1.11z"/>
              </svg>
            </div>

            <h2 className="modal-title" id="call-modal-title">Zavolejte mi</h2>
            <p className="modal-sub">Potvrďte číslo a náš poradce vám zavolá zpět do 2 pracovních dnů.</p>

            <input
              type="tel"
              className="modal-input"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              aria-label="Telefonní číslo"
            />
            <p className="modal-note">Provozní doba: Po–Pá, 8:00–16:00</p>

            <div className="modal-footer">
              <button className="btn-modal-primary" onClick={() => setSubmitted(true)}>
                Potvrdit číslo
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
              <button className="btn-modal-back" onClick={onClose}>Zpět</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
