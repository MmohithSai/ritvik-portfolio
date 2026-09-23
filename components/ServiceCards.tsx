import Link from "next/link";
import { services } from "@/content/site";
import "./ServiceCards.css";

export default function ServiceCards() {
  return (
    <ul className="svc-cards">
      {services.map((s, i) => (
        <li key={s.slug}>
          <Link href={`/programs/${s.slug}`} className="svc-card section--light">
            <span className="svc-card__dots" aria-hidden>
              {services.map((_, j) => <span key={j} data-on={i === j || undefined} />)}
            </span>
            <h2 className="h-section svc-card__title">
              {s.titleLines.map((l) => <span key={l}>{l}<br /></span>)}
            </h2>
            <p className="body">{s.blurb}</p>
            <dl className="svc-card__meta">
              <span className="rule" />
              <div className="svc-card__row">
                <dt className="body">Format</dt>
                <dd className="text-small">{s.format}</dd>
              </div>
              <span className="rule" />
              <div className="svc-card__row">
                <dt className="body">Learn more</dt>
                <dd aria-hidden>→</dd>
              </div>
            </dl>
          </Link>
        </li>
      ))}
    </ul>
  );
}
