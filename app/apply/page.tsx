import type { Metadata } from "next";
import ContactPanel from "@/components/ContactPanel";
import { applyPage } from "@/content/site";

export const metadata: Metadata = { title: "Apply for coaching" };

export default function ApplyPage() {
  return (
    <>
      <section className="contact-header section section--light">
        <h1 className="h-display-l">{applyPage.title}</h1>
        <p className="body-l">{applyPage.intro}</p>
      </section>
      <ContactPanel />
    </>
  );
}
