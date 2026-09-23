import { valueIcons } from "./icons";
import type { Value } from "@/content/site";
import "./Values.css";

export default function Values({ items, title }: { items: Value[]; title?: string }) {
  return (
    <section className="values section section--dark" aria-label={title ?? "How I coach"}>
      {title && <h2 className="h-section values__title">{title}</h2>}
      <ul className="values__list">
        {items.map((v) => {
          const Icon = valueIcons[v.icon];
          return (
            <li key={v.label} className="values__row">
              <span className="body-l values__label">{v.label}</span>
              <Icon className="values__icon" />
              <span className="body-l values__text">{v.text}</span>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
