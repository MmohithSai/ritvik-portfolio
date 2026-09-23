import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Stats from "@/components/Stats";
import Cards from "@/components/Cards";
import Gallery from "@/components/Gallery";
import { about, certifications, certificationsIntro, gallery, galleryIntro, person } from "@/content/site";
import "./about.css";

export const metadata: Metadata = { title: "About" };

export default function AboutPage() {
  return (
    <>
      <section className="about-intro section section--light">
        <div className="about-intro__grid">
          <img className="about-intro__portrait" src={person.portrait} alt={`Portrait of ${person.name}`} width={180} height={180} />
          <h1 className="h-display-l">{about.title}</h1>
          <span className="tag">{about.tag}</span>
          <div className="about-intro__text">
            <p className="body">{about.intro}</p>
            <p className="body">{about.more}</p>
          </div>
        </div>
      </section>
      <section className="drives section section--light" aria-labelledby="drives-title">
        <h2 id="drives-title" className="h-section">{about.drivesMe.title}</h2>
        <ul className="drives__cards">
          {about.drivesMe.cards.map((c) => (
            <li key={c.title} className="drives__card">
              <h3 className="h-row">{c.title}</h3>
              <p className="body">{c.text}</p>
            </li>
          ))}
        </ul>
      </section>
      <Stats />
      <PageHeader title={certificationsIntro.title} tag={certificationsIntro.tag} intro={certificationsIntro.intro} size="section" level={2} />
      <Cards items={certifications} label="Certifications" ratio="4 / 3" />
      <PageHeader title={galleryIntro.title} tag={galleryIntro.tag} intro={galleryIntro.intro} size="section" level={2} />
      <Gallery items={gallery} label="Training and movement gallery" />
    </>
  );
}
