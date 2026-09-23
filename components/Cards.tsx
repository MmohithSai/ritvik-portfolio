import type { Card, Media } from "@/content/site";
import "./Cards.css";

const Tile = ({ m, className }: { m: Media; className: string }) => (
  <span className={className}>
    {m.src ? <img src={m.src} alt={m.label} /> : <span className="mono-label">{m.label}</span>}
  </span>
);

/** Card grid for transformations, testimonials and certifications. `ratio` sets the media tile shape. */
export default function Cards({ items, label, ratio = "4 / 5" }: { items: Card[]; label: string; ratio?: string }) {
  return (
    <section className="cards section section--light" aria-label={label}>
      <ul className="cards__list">
        {items.map((c, i) => (
          <li key={i} className="card">
            {c.media && (
              <div className="card__media" style={{ ["--ratio" as string]: ratio }}>
                {c.media.map((m, j) => <Tile key={j} m={m} className="card__tile" />)}
              </div>
            )}
            <div className="card__person">
              {c.photo && <Tile m={c.photo} className="card__photo" />}
              <h3 className="h-sub">{c.title}</h3>
            </div>
            {c.text && <p className="body">{c.text}</p>}
            {c.meta && (
              <dl className="card__meta">
                {c.meta.map((r) => (
                  <div key={r.label}>
                    <span className="rule" />
                    <div className="card__row">
                      <dt className="body">{r.label}</dt>
                      <dd className="text-small">{r.value}</dd>
                    </div>
                  </div>
                ))}
              </dl>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
}
