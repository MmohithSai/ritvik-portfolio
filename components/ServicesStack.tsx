"use client";

import { useEffect, useRef } from "react";
import { ArrowDownLeft } from "./icons";
import "./ServicesStack.css";

const TOP = 110;
const STEP = 102;

type Row = { number: string; title: string; text: string; items: string[] };
type Props = { id: string; title: string; tag: string; lines: string[]; items: Row[] };

/** Dark section of sticky, stacking rows (home "What I coach", programs "Skill progressions"). */
export default function ServicesStack({ id, title, tag, lines, items }: Props) {
  const ref = useRef<HTMLElement>(null);

  // Only stack when the last row (sticking lowest) still fits on screen; otherwise its bottom
  // would be pinned below the viewport and never readable, so the rows just scroll normally.
  useEffect(() => {
    const el = ref.current!;
    const rows = Array.from(el.querySelectorAll<HTMLElement>(".svc__row"));
    const check = () => {
      el.removeAttribute("data-stack"); // measure natural heights
      const tallest = Math.max(...rows.map((r) => r.offsetHeight));
      el.toggleAttribute("data-stack", innerWidth >= 810 && TOP + (rows.length - 1) * STEP + tallest <= innerHeight);
    };
    check();
    document.fonts.ready.then(check);
    addEventListener("resize", check);
    return () => removeEventListener("resize", check);
  }, []);

  return (
    <section className="svc section section--dark" id={id} aria-labelledby={`${id}-title`} ref={ref}>
      <div className="svc__head">
        <h2 id={`${id}-title`} className="h-section">{title}</h2>
        <div className="svc__intro">
          <span className="tag">{tag}</span>
          <div className="svc__intro-text">
            {lines.map((l) => <p key={l} className="body">{l}</p>)}
          </div>
        </div>
      </div>
      <div className="svc__stack">
        {items.map((c, i) => (
          <article key={c.title} className="svc__row" style={{ "--top": `${TOP + i * STEP}px` } as React.CSSProperties}>
            <div className="svc__row-head">
              <span className="h-row" aria-hidden>{c.number}</span>
              <h3 className="h-row">{c.title}</h3>
              <ArrowDownLeft className="svc__arrow" />
            </div>
            <div className="svc__body">
              <p className="body">{c.text}</p>
              <ul className="svc__items">
                {c.items.map((item, j) => (
                  <li key={item}>
                    <span className="mono-index">{String(j + 1).padStart(2, "0")}</span>
                    <span className="h-sub">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
