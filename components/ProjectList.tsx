import { ExternalLink } from "./icons";
import type { Project } from "@/content/site";
import "./ProjectList.css";

export default function ProjectList({ projects }: { projects: Project[] }) {
  return (
    <ul className="projects">
      {projects.map((p) => {
        const inner = (
          <>
            <span className="mono-label project__meta">{p.year}, {p.category}</span>
            <span className="project__preview" aria-hidden>
              {p.image ? <img src={p.image} alt="" width={210} height={140} /> : <span className="mono-label">{p.title}</span>}
            </span>
            <span className="h-row project__title">{p.title}</span>
            {p.url && <ExternalLink className="project__icon" />}
          </>
        );
        return (
          <li key={p.title}>
            {p.url
              ? <a className="project" href={p.url} target="_blank" rel="noopener noreferrer" data-cursor="Watch">{inner}</a>
              : <div className="project">{inner}</div>}
            <span className="rule" />
          </li>
        );
      })}
    </ul>
  );
}
