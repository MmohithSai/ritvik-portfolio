"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Marquee from "./Marquee";
import { socialIcons } from "./icons";
import { hero, nav, person, socials } from "@/content/site";
import "./Hero.css";

const heroLinks = nav.filter((n) => ["/programs", "/about", "/apply"].includes(n.href));
const external = (href: string) => (href.startsWith("mailto:") ? {} : { target: "_blank", rel: "noopener noreferrer" });

function HeroNav() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false);
    document.addEventListener("keydown", onKey);
    return () => document.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <nav className="xh-nav" data-open={open || undefined} aria-label="Hero">
      <div className="xh-nav__bar">
        <Link className="xh-nav__link" href="/">© {person.name}</Link>
        {heroLinks.map((n) => (
          <Link key={n.href} className="xh-nav__link xh-nav__link--desk" href={n.href}>{n.label}</Link>
        ))}
        <button
          className="xh-nav__toggle"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          aria-controls="xh-nav-panel"
          onClick={() => setOpen((o) => !o)}
        >
          <span /><span />
        </button>
      </div>
      <ul id="xh-nav-panel" className="xh-nav__panel">
        {heroLinks.map((n) => (
          <li key={n.href}><Link className="xh-nav__link" href={n.href} onClick={() => setOpen(false)}>{n.label}</Link></li>
        ))}
      </ul>
    </nav>
  );
}

export default function Hero() {
  return (
    <section className="xh" aria-label="Intro">
      <div className="xh__media">
        <img src={hero.portrait} alt="" />
      </div>
      <div className="xh__grain" aria-hidden />
      <HeroNav />
      <h1 className="sr-only">{person.name}, {person.role}</h1>
      <div className="xh__marquee" aria-hidden>
        <Marquee text={`${person.name} - `} />
      </div>
      <div className="xh__sub" aria-hidden>
        {hero.subtitleLines.map((l) => <h2 key={l}>{l}</h2>)}
      </div>
      <ul className="xh__socials">
        {socials.map((s) => {
          const Icon = socialIcons[s.label];
          return (
            <li key={s.label}>
              <a href={s.href} aria-label={s.label} {...external(s.href)}>
                {Icon && <Icon />}
                <span>{s.label}</span>
              </a>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
