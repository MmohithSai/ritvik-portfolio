"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import Button from "./Button";
import { ChevronDown, LogoMark } from "./icons";
import { nav, person, services } from "@/content/site";
import "./SiteNav.css";

export default function SiteNav() {
  const [hidden, setHidden] = useState(false);
  const [dropdown, setDropdown] = useState(false);
  const [menu, setMenu] = useState(false);
  const [tone, setTone] = useState<"light" | "dark">("light");
  const pathname = usePathname();
  const groupRef = useRef<HTMLDivElement>(null);
  const sheetRef = useRef<HTMLDivElement>(null);
  const menuBtnRef = useRef<HTMLButtonElement>(null);

  // Hide on scroll-down, reveal on scroll-up / near top; track the surface under the nav.
  useEffect(() => {
    let last = window.scrollY;
    let frame = 0;
    const readTone = () => {
      frame = 0;
      const under = document
        .elementsFromPoint(window.innerWidth / 2, 54)
        .find((el) => !el.closest(".nav, .cursor"));
      setTone(under?.closest(".section--dark, .section--light")?.classList.contains("section--dark") ? "dark" : "light");
    };
    // The home hero has its own nav, so stay out of the way while it's on screen.
    const inHero = (y: number) => pathname === "/" && y < window.innerHeight * 0.8;
    const onScroll = () => {
      if (!frame) frame = requestAnimationFrame(readTone);
      const y = window.scrollY;
      if (Math.abs(y - last) < 8) return;
      const down = y > last && y > 80;
      setHidden(down || inHero(y));
      if (down) setDropdown(false);
      last = y;
    };
    readTone();
    setHidden(inHero(window.scrollY));
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(frame);
    };
  }, [pathname]);

  // Dropdown: outside click + Escape.
  useEffect(() => {
    if (!dropdown) return;
    const onDown = (e: PointerEvent) => {
      if (!groupRef.current?.contains(e.target as Node)) setDropdown(false);
    };
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setDropdown(false);
    document.addEventListener("pointerdown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("pointerdown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, [dropdown]);

  // Menu sheet: focus first link, trap Tab, Escape closes, restore focus.
  useEffect(() => {
    if (!menu) return;
    const sheet = sheetRef.current;
    const links = () => Array.from(sheet?.querySelectorAll<HTMLElement>("a,button") ?? []);
    links()[0]?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenu(false);
      if (e.key !== "Tab") return;
      const els = links();
      const first = els[0], lastEl = els[els.length - 1];
      if (e.shiftKey && document.activeElement === first) { e.preventDefault(); lastEl?.focus(); }
      else if (!e.shiftKey && document.activeElement === lastEl) { e.preventDefault(); first?.focus(); }
    };
    document.addEventListener("keydown", onKey);
    const btn = menuBtnRef.current;
    return () => {
      document.removeEventListener("keydown", onKey);
      btn?.focus();
    };
  }, [menu]);

  return (
    <header className="nav" data-hidden={hidden || undefined} data-tone={tone}>
      <Link className="nav__logo" href="/" aria-label={`${person.name} — home`}>
        <LogoMark />
      </Link>

      <nav className="nav__links" aria-label="Main">
        <div className="nav-group" ref={groupRef}>
          <Button href="/programs" variant="light" className="nav-pill">Programs</Button>
          <button
            className="nav-chevron"
            aria-label="Show programs"
            aria-expanded={dropdown}
            aria-controls="services-menu"
            onClick={() => setDropdown((o) => !o)}
          >
            <span className="nav-chevron__tile"><ChevronDown width={16} height={16} /></span>
          </button>
          {dropdown && (
            <ul id="services-menu" className="nav-dropdown">
              {services.map((s) => (
                <li key={s.slug}>
                  <Link className="nav-dropdown__link" href={`/programs/${s.slug}`} onClick={() => setDropdown(false)}>
                    {s.title}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </div>
        <Button href="/results" variant="outline" className="nav-pill">Results</Button>
        <Button href="/about" variant="outline" className="nav-pill">About</Button>
      </nav>

      <div className="nav__cta">
        <Button href="/apply" variant="dark" primary avatar={person.avatar}>Apply</Button>
        <button
          ref={menuBtnRef}
          className="btn btn--dark nav__menu-btn"
          aria-expanded={menu}
          aria-controls="menu-sheet"
          onClick={() => setMenu((o) => !o)}
        >
          <span className="btn__label">Menu</span>
        </button>
      </div>

      {menu && (
        <>
          <div className="menu-backdrop" onClick={() => setMenu(false)} />
          <div id="menu-sheet" className="menu-sheet" role="dialog" aria-modal="true" aria-label="Menu" ref={sheetRef}>
            <ul>
              {nav.map((n) => (
                <li key={n.href}>
                  <Link className="menu-sheet__link" href={n.href} onClick={() => setMenu(false)}>{n.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
    </header>
  );
}
