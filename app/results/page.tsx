import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import Cards from "@/components/Cards";
import { resultsPage, testimonials, testimonialsIntro, transformations } from "@/content/site";

export const metadata: Metadata = { title: "Results" };

export default function ResultsPage() {
  return (
    <>
      <PageHeader title={resultsPage.title} tag={resultsPage.tag} intro={resultsPage.intro} />
      <Cards items={transformations} label="Client transformations" />
      <PageHeader title={testimonialsIntro.title} tag={testimonialsIntro.tag} intro={testimonialsIntro.intro} size="section" level={2} />
      <Cards items={testimonials} label="Client testimonials" />
    </>
  );
}
