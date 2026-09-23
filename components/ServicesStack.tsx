import { ArrowDownLeft } from "./icons";
import "./ServicesStack.css";

type Row = { number: string; title: string; text: string; items: string[] };
type Props = { id: string; title: string; tag: string; lines: string[]; items: Row[] };

/** Dark section of sticky, stacking rows (home "What I coach", programs "Skill progressions"). */
export default function ServicesStack({ id, title, tag, lines, items }: Props) {
  return (
    <section className="svc section section--dark" id={id} aria-labelledby={`${id}-title`}>
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
          <article key={c.title} className="svc__row" style={{ top: `${110 + i * 102}px` }}>
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
