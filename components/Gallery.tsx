import type { ReactNode } from "react";
import type { Media } from "@/content/site";
import SpatialCarousel from "./SpatialCarousel";
import "./Gallery.css";

type Props = { items: Media[]; label: string; layout?: "feature" | "row"; children?: ReactNode };

/** Dark media tiles in a scroll-driven spatial carousel; "feature" = portrait tiles (gallery), "row" = square tiles (Instagram). */
export default function Gallery({ items, label, layout = "feature", children }: Props) {
  return (
    <section className="gallery-section section section--light" aria-label={label}>
      <div className={`gallery gallery--${layout}`}>
        <SpatialCarousel>
          {items.map((m, i) => {
            const inner = (
              <>
                {m.src ? <img src={m.src} alt={m.label} /> : <span className="mono-label">[PHOTO / VIDEO]</span>}
                <span className="tag">{m.label}</span>
              </>
            );
            return m.href
              ? <a key={i} className="gallery__tile" href={m.href} target="_blank" rel="noopener noreferrer" data-cursor="Open">{inner}</a>
              : <div key={i} className="gallery__tile">{inner}</div>;
          })}
        </SpatialCarousel>
      </div>
      {children && <div className="gallery__footer">{children}</div>}
    </section>
  );
}
