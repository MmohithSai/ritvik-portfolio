"use client";

import { useEffect, useRef } from "react";
import "./Marquee.css";

/** Infinite leftward ticker. Speed (px/s) comes from the `--mq-speed` CSS var so it can change per breakpoint. */
export default function Marquee({ text, className = "", copies = 4 }: { text: string; className?: string; copies?: number }) {
  const root = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = root.current;
    const group = el?.querySelector<HTMLElement>(".xm__group");
    if (!el || !group) return;
    const sync = () => {
      const speed = parseFloat(getComputedStyle(el).getPropertyValue("--mq-speed")) || 50;
      const gap = parseFloat(getComputedStyle(group).columnGap) || 0;
      el.style.setProperty("--mq-dur", `${(group.offsetWidth + gap) / speed}s`);
    };
    const ro = new ResizeObserver(sync);
    ro.observe(group);
    return () => ro.disconnect();
  }, []);

  const group = (hidden: boolean) => (
    <div className="xm__group" aria-hidden={hidden || undefined}>
      {Array.from({ length: copies }, (_, i) => <span key={i} className="xm__item">{text}</span>)}
    </div>
  );

  return (
    <div className={`xm ${className}`} ref={root}>
      <div className="xm__track">{group(false)}{group(true)}</div>
    </div>
  );
}
