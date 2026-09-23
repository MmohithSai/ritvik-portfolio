"use client";

import { usePathname } from "next/navigation";
import Button from "./Button";
import { links, person } from "@/content/site";
import "./CtaSection.css";

/** Final "Apply" card on every route except /apply; inverted (light card) on the dark /programs page. */
export default function CtaSection() {
  const path = usePathname();
  if (path === "/apply") return null;
  const inverted = path === "/programs";
  const variant = inverted ? "dark" : "light";

  return (
    <section className={`cta section ${inverted ? "section--dark cta--inverted" : "section--light"}`} aria-labelledby="cta-title">
      <div className={`cta-card ${inverted ? "section--light" : "section--dark"}`}>
        <p className="body">Let’s train!</p>
        <h2 id="cta-title" className="h-cta">Ready to start<br />your training?</h2>
        <div className="cta-card__ctas">
          <Button href="/apply" variant={variant} primary avatar={person.avatar}>Apply for coaching</Button>
          <Button href={links.whatsapp} variant={variant} external>WhatsApp</Button>
          <Button href={links.instagram} variant={variant} external>Instagram</Button>
        </div>
      </div>
    </section>
  );
}
