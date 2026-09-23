"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import "./CookieBanner.css";

const KEY = "cookie-ok";

export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(KEY)) setOpen(true);
    } catch {
      setOpen(true);
    }
    const reopen = () => setOpen(true);
    window.addEventListener("open-cookies", reopen);
    return () => window.removeEventListener("open-cookies", reopen);
  }, []);

  if (!open) return null;

  const accept = () => {
    try { localStorage.setItem(KEY, "1"); } catch {}
    setOpen(false);
  };

  return (
    <div className="cookie" role="region" aria-label="Cookie notice">
      <p className="text-small">
        I use cookies to improve your experience on the site. <Link href="/privacy-policy">Privacy Policy</Link>.
      </p>
      <button className="btn btn--dark cookie__ok" onClick={accept}>
        <span className="btn__label">Okay</span>
      </button>
    </div>
  );
}
