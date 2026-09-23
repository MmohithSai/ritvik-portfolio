import type { ProcessStep } from "@/content/site";
import "./Process.css";

/** Vertical timeline down the page centre; steps alternate title/text sides. */
export default function Process({ steps }: { steps: ProcessStep[] }) {
  return (
    <section className="process section section--light" aria-label="The process">
      <ol className="process__list">
        {steps.map((s, i) => (
          <li key={s.title} className="process__step" data-side={i % 2 ? "right" : "left"}>
            <div className="process__title">
              <span className="mono-label">({String(i + 1).padStart(2, "0")})</span>
              <h2 className="h-row">{s.title}</h2>
            </div>
            <p className="body process__text">{s.text}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
