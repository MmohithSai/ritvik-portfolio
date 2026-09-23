"use client";

import { useId, useState } from "react";
import { Plus } from "./icons";
import type { Faq as FaqItem } from "@/content/site";
import "./Faq.css";

export default function Faq({ items, tone = "light" }: { items: FaqItem[]; tone?: "light" | "dark" }) {
  const [open, setOpen] = useState<number | null>(null);
  const id = useId();

  return (
    <section className={`faq section section--${tone}`} aria-labelledby={`${id}-title`}>
      <h2 id={`${id}-title`} className="h-section">Frequently asked questions</h2>
      <ul className="faq__list">
        {items.map((item, i) => {
          const isOpen = open === i;
          return (
            <li key={item.q} className="faq__item" data-open={isOpen || undefined}>
              <button
                className="faq__row"
                aria-expanded={isOpen}
                aria-controls={`${id}-${i}`}
                data-cursor={isOpen ? "Close" : undefined}
                onClick={() => setOpen(isOpen ? null : i)}
              >
                <span className="body faq-num">({String(i + 1).padStart(2, "0")})</span>
                <span className="body faq-q">{item.q}</span>
                <Plus className="faq__icon" />
              </button>
              <div id={`${id}-${i}`} role="region" className="faq__panel">
                <div className="faq__panel-inner">
                  <p className="body">{item.a}</p>
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
