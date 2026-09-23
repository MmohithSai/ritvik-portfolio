import type { ReactNode } from "react";
import "./PageHeader.css";

type Props = {
  title: ReactNode;
  tag: string;
  intro: string;
  /** section = 100px h-section; large = 160px h-display-l (standalone page headers) */
  size?: "section" | "large";
  level?: 1 | 2;
  tone?: "light" | "dark";
};

export default function PageHeader({ title, tag, intro, size = "large", level = 1, tone = "light" }: Props) {
  const H = level === 1 ? "h1" : "h2";
  return (
    <section className={`page-header section section--${tone}`}>
      <H className={size === "large" ? "h-display-l" : "h-section"}>{title}</H>
      <div className="page-header__side">
        <span className="tag">{tag}</span>
        <p className="body">{intro}</p>
      </div>
    </section>
  );
}
