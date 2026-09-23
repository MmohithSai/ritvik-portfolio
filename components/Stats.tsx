import { stats } from "@/content/site";
import "./Stats.css";

export default function Stats() {
  return (
    <section className="stats section section--light" aria-label="In numbers">
      <dl className="stats__list">
        {stats.map((s) => (
          <div key={s.label} className="stats__item">
            <span className="rule" />
            <dt className="mono-label">{s.label}</dt>
            <dd className="h-row stats__value">{s.value}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
