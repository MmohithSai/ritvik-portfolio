import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ServiceHero from "@/components/ServiceHero";
import Process from "@/components/Process";
import Values from "@/components/Values";
import Faq from "@/components/Faq";
import { services } from "@/content/site";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const s = services.find((x) => x.slug === slug);
  return { title: s ? s.titleLines.join(" ").replace("- ", "") : "Service" };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find((s) => s.slug === slug);
  if (!service) notFound();

  return (
    <>
      <ServiceHero service={service} />
      <Process steps={service.process} />
      <Values items={service.values} />
      <Faq items={service.faqs} />
    </>
  );
}
