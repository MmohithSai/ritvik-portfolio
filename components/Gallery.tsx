import type { ReactNode } from "react";
import type { Media } from "@/content/site";
import "./Gallery.css";

type Props = { items: Media[]; label: string; layout?: "feature" | "row"; children?: ReactNode };

/** Dark media tiles; "feature" = first tile spans two rows (gallery), "row" = square tiles (Instagram). */
export default function Gallery({ items, label, layout = "feature", children }: Props) {
  return (
    <section className="gallery-section section section--light" aria-label={label}>
      <ul className={`gallery gallery--${layout}`}>
        {items.map((m, i) => {
          const inner = (
            <>
              {m.src ? <img src={m.src} alt={m.label} /> : <span className="mono-label">[PHOTO / VIDEO]</span>}
              <span className="tag">{m.label}</span>
            </>
          );
          return (
            <li key={i}>
              {m.href
                ? <a className="gallery__tile" href={m.href} target="_blank" rel="noopener noreferrer" data-cursor="Open">{inner}</a>
                : <div className="gallery__tile">{inner}</div>}
            </li>
          );
        })}
      </ul>
      {children && <div className="gallery__footer">{children}</div>}
    </section>
  );
}
