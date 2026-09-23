"use client";

import { Children, useEffect, useRef, type ReactNode } from "react";
import "./SpatialCarousel.css";

// Port of Framer's "Spatial Carousel" (sticky scroll): page scroll drives a sprung index,
// each card is offset/rotated/scaled by its distance from it. Hand-rolled spring instead of framer-motion.
type Props = {
  children: ReactNode;
  gap?: number;           // px vertical offset per step
  xSpread?: number;       // px horizontal offset per step
  rotation?: number;      // deg per step
  scaleFalloff?: number;  // % per step
  opacityFalloff?: number;// % per step
  perspective?: number;
  scrollPerItem?: number; // vh of scroll to pass one card
  stiffness?: number;
  damping?: number;
};

export default function SpatialCarousel({
  children, gap = 200, xSpread = 600, rotation = 60, scaleFalloff = 10, opacityFalloff = 30,
  perspective = 1000, scrollPerItem = 100, stiffness = 200, damping = 30,
}: Props) {
  const rootRef = useRef<HTMLDivElement>(null);
  const items = Children.toArray(children);
  const n = items.length;

  useEffect(() => {
    const root = rootRef.current!;
    const cards = Array.from(root.querySelectorAll<HTMLElement>(".spatial__card"));
    if (matchMedia("(prefers-reduced-motion: reduce)").matches) return;

    const target = () => {
      const r = root.getBoundingClientRect();
      const p = Math.min(1, Math.max(0, -r.top / Math.max(1, r.height - innerHeight)));
      return p * (n - 1);
    };
    const paint = (at: number) => cards.forEach((el, i) => {
      const d = i - at, a = Math.abs(d);
      el.style.transform = `translate(${d * xSpread}px, ${d * gap}px) rotate(${d * rotation}deg) scale(${Math.max(0, 1 - a * scaleFalloff / 100)})`;
      el.style.opacity = String(Math.max(0, 1 - a * opacityFalloff / 100));
      el.style.zIndex = String(Math.round(1000 - a * 10));
    });

    let x = target(), v = 0, last = 0, frame = 0;
    paint(x);
    const step = (now: number) => {
      frame = requestAnimationFrame(step);
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      v += (stiffness * (target() - x) - damping * v) * dt; // mass 1
      x += v * dt;
      paint(x);
    };
    const io = new IntersectionObserver(([en]) => {
      if (en.isIntersecting) { if (!frame) { last = performance.now(); frame = requestAnimationFrame(step); } }
      else if (frame) { cancelAnimationFrame(frame); frame = 0; }
    });
    io.observe(root);
    return () => { io.disconnect(); cancelAnimationFrame(frame); };
  }, [n, gap, xSpread, rotation, scaleFalloff, opacityFalloff, stiffness, damping]);

  return (
    <div className="spatial" ref={rootRef} style={{ height: `${n * scrollPerItem}svh` }}>
      <ul className="spatial__stage" style={{ perspective }}>
        {items.map((c, i) => <li key={i} className="spatial__card">{c}</li>)}
      </ul>
    </div>
  );
}
