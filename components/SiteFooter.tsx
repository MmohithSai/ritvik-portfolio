"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import Marquee from "./Marquee";
import { ArrowUp, socialIcons } from "./icons";
import { footer, person, socials } from "@/content/site";
import "./SiteFooter.css";

const external = (href: string) => (href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" });

/** Fixed reveal footer: sits under `.page` (z 2) and is uncovered by the `.xf-spacer` that follows it. */
export default function SiteFooter() {
  const spacer = useRef<HTMLDivElement>(null);
  const [shown, setShown] = useState(false);

  // Reveal the photo once the spacer starts uncovering the footer.
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => setShown(e.isIntersecting), { threshold: 0.25 });
    if (spacer.current) io.observe(spacer.current);
    return () => io.disconnect();
  }, []);

  return (
    <>
      <div className="xf-spacer" ref={spacer} aria-hidden />
      <footer className="xf" data-shown={shown || undefined}>
        <div className="xf__media">
          <img src={footer.portrait} alt="" />
        </div>

        <a className="xf__top" href="#top" aria-label="Back to top">
          <ArrowUp />
        </a>

        <div className="xf__marquee" aria-hidden>
          <Marquee text={footer.marquee} />
        </div>

        <div className="xf__details">
          <div className="xf__contact">
            {footer.details.map((d) => (
              <p key={d.label}>
                <strong>{d.label}:</strong>{" "}
                {d.href ? <a href={d.href} {...external(d.href)}>{d.value}</a> : d.value}
              </p>
            ))}
          </div>
          <div className="xf__row">
            <ul className="xf__socials">
              {socials.map((s) => {
                const Icon = socialIcons[s.label];
                return (
                  <li key={s.label}>
                    <a href={s.href} {...external(s.href)}>{Icon && <Icon />}<span>{s.label}</span></a>
                  </li>
                );
              })}
            </ul>
            <p className="xf__legal">
              © {new Date().getFullYear()} {person.name} ·{" "}
              <Link href="/legal-notice">Legal Notice</Link> ·{" "}
              <Link href="/privacy-policy">Privacy Policy</Link> ·{" "}
              <button onClick={() => window.dispatchEvent(new Event("open-cookies"))}>Cookies</button>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
