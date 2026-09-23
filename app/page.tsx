import Hero from "@/components/Hero";
import ServicesStack from "@/components/ServicesStack";
import Stats from "@/components/Stats";
import PageHeader from "@/components/PageHeader";
import ProjectList from "@/components/ProjectList";
import AboutReveal from "@/components/AboutReveal";
import Values from "@/components/Values";
import Process from "@/components/Process";
import ServiceCards from "@/components/ServiceCards";
import Cards from "@/components/Cards";
import Gallery from "@/components/Gallery";
import Button from "@/components/Button";
import Faq from "@/components/Faq";
import {
  capabilities, coachIntro, faqs, instagram, links, philosophyTitle, processIntro, programsIntro,
  skills, skillsIntro, testimonials, testimonialsIntro, transformations, transformationsIntro, values,
} from "@/content/site";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesStack id="coaching" title={coachIntro.title} tag={coachIntro.tag} lines={coachIntro.lines} items={capabilities} />
      <Stats />
      <PageHeader title={skillsIntro.title} tag={skillsIntro.tag} intro={skillsIntro.intro} size="section" level={2} />
      <section className="section section--light home-projects" aria-label="Skills and achievements">
        <ProjectList projects={skills} />
      </section>
      <AboutReveal />
      <Values items={values} title={philosophyTitle} />
      <PageHeader title={processIntro.title} tag={processIntro.tag} intro={processIntro.intro} size="section" level={2} />
      <Process steps={processIntro.steps} />
      <PageHeader title={programsIntro.title} tag={programsIntro.tag} intro={programsIntro.intro} size="section" level={2} tone="dark" />
      <section className="section section--dark home-programs" aria-label="Coaching programs">
        <ServiceCards />
      </section>
      <PageHeader title={transformationsIntro.title} tag={transformationsIntro.tag} intro={transformationsIntro.intro} size="section" level={2} />
      <Cards items={transformations.slice(0, 3)} label="Client transformations" />
      <PageHeader title={testimonialsIntro.title} tag={testimonialsIntro.tag} intro={testimonialsIntro.intro} size="section" level={2} />
      <Cards items={testimonials.slice(0, 3)} label="Client testimonials" />
      <PageHeader title={instagram.title} tag={links.instagramHandle} intro={instagram.intro} size="section" level={2} />
      <Gallery items={instagram.posts} label="Instagram posts" layout="row">
        <Button href={links.instagram} variant="dark" primary external>Follow {links.instagramHandle}</Button>
      </Gallery>
      <Faq items={faqs} />
    </>
  );
}
