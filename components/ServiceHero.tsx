import Button from "./Button";
import { person, type Service } from "@/content/site";
import "./ServiceHero.css";

export default function ServiceHero({ service }: { service: Service }) {
  return (
    <section className="svc-detail-hero section section--light">
      <article className="svc-detail-card section--dark">
        <h1 className="h-display-l">
          {service.titleLines.map((l) => <span key={l}>{l}<br /></span>)}
        </h1>
        <p className="body">— {service.blurb}</p>
        <p className="body">{service.intro}</p>
        <dl className="svc-detail-card__meta">
          <div className="svc-detail-card__row">
            <dt className="body">Includes</dt>
            <dd>
              <ul>{service.includes.map((x) => <li key={x} className="text-small">{x}</li>)}</ul>
            </dd>
          </div>
          <div className="svc-detail-card__row">
            <dt className="body">Format</dt>
            <dd className="text-small">{service.format}</dd>
          </div>
        </dl>
        <Button href="/apply" variant="light" primary avatar={person.avatar} className="svc-detail-card__cta">Apply now</Button>
      </article>
    </section>
  );
}
