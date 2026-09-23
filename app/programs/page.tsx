import type { Metadata } from "next";
import ServiceCards from "@/components/ServiceCards";
import ServicesStack from "@/components/ServicesStack";
import Faq from "@/components/Faq";
import { faqs, programsPage, progressions, progressionsIntro } from "@/content/site";
import "./programs.css";

export const metadata: Metadata = { title: "Programs" };

export default function ProgramsPage() {
  return (
    <div className="page-dark">
      <section className="svc-hero section section--dark">
        <h1 className="svc-hero__title">
          {programsPage.titleLines.map((l) => <span key={l}>{l}</span>)}
        </h1>
        <p className="body-l svc-hero__intro">{programsPage.intro}</p>
        <span className="tag svc-hero__tag svc-hero__tag--l">{programsPage.tag}</span>
        <span className="tag svc-hero__tag svc-hero__tag--r">Programs</span>
      </section>
      <section className="section section--dark svc-list" aria-label="Programs">
        <ServiceCards />
      </section>
      <section className="section section--dark svc-disclaimer">
        <h2 className="h-section">Pricing</h2>
        <p className="body">{programsPage.pricing}</p>
      </section>
      <ServicesStack id="progressions" title={progressionsIntro.title} tag={progressionsIntro.tag} lines={progressionsIntro.lines} items={progressions} />
      <Faq items={faqs} tone="dark" />
    </div>
  );
}
