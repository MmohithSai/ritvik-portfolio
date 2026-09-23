"use client";

import { useEffect, useRef, useState } from "react";
import "./Cursor.css";

/** Difference-blend cursor dot; grows into a label chip over any [data-cursor] element. */
export default function Cursor() {
  const ref = useRef<HTMLDivElement>(null);
  const [label, setLabel] = useState<string | null>(null);
  const [on, setOn] = useState(false);

  useEffect(() => {
    if (!matchMedia("(pointer: fine)").matches || matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    let x = 0, y = 0, frame = 0;
    const paint = () => {
      frame = 0;
      if (ref.current) ref.current.style.transform = `translate(${x}px, ${y}px)`;
    };
    const onMove = (e: PointerEvent) => {
      x = e.clientX; y = e.clientY;
      setOn(true);
      const t = (e.target as Element | null)?.closest?.("[data-cursor]");
      setLabel(t ? t.getAttribute("data-cursor") : null);
      if (!frame) frame = requestAnimationFrame(paint);
    };
    const onLeave = () => setOn(false);
    // content moves under a still pointer while scrolling → re-read what's under it
    const onScroll = () => {
      const t = document.elementFromPoint(x, y)?.closest("[data-cursor]");
      setLabel(t ? t.getAttribute("data-cursor") : null);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("pointermove", onMove, { passive: true });
    document.documentElement.addEventListener("pointerleave", onLeave);
    return () => {
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("scroll", onScroll);
      document.documentElement.removeEventListener("pointerleave", onLeave);
      cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <div ref={ref} className="cursor" data-on={on || undefined} data-label={label ? "" : undefined} aria-hidden>
      {label && <span className="cursor__label">{label}</span>}
    </div>
  );
}
