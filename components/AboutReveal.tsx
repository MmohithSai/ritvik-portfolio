"use client";

import { useEffect, useRef } from "react";
import { about, person } from "@/content/site";
import "./AboutReveal.css";

// Warp streaks ported from lumenar-site Manifesto.jsx.
const COLORS = ["138,203,193", "219,176,87", "242,239,232"];

type Streak = { a: number; r: number; len: number; sp: number; c: string; w: number };

function seed(s: Streak) {
  s.a = Math.random() * Math.PI * 2;
  s.r = Math.random() * 0.15;
  s.len = 0.05 + Math.random() * 0.16;
  s.sp = 0.3 + Math.random() * 0.7;
  const p = Math.random();
  s.c = p < 0.55 ? COLORS[0] : p < 0.8 ? COLORS[1] : COLORS[2];
  s.w = 0.6 + Math.random() * 1.1;
  return s;
}

export default function AboutReveal() {
  const frameRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const root = frameRef.current!;
    const canvas = canvasRef.current!;
    const ctx = canvas.getContext("2d")!;
    const coarse = matchMedia("(pointer: coarse)").matches;
    const reduced = matchMedia("(prefers-reduced-motion: reduce)").matches;
    const streaks = Array.from({ length: coarse ? 150 : 340 }, () => seed({} as Streak));
    streaks.forEach((s) => { s.r = Math.random(); });

    let w = 0, h = 0, frame = 0, last = 0;
    let mx = 0, my = 0, tmx = 0, tmy = 0;
    let lastScroll = window.scrollY, boost = 0;

    const resize = () => {
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      w = root.clientWidth; h = root.clientHeight;
      canvas.width = w * dpr; canvas.height = h * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (dt: number) => {
      mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;
      const cx = w / 2 + mx * w * 0.08;
      const cy = h / 2 + my * h * 0.08;
      const R = Math.hypot(w, h) * 0.62;
      ctx.clearRect(0, 0, w, h);
      ctx.lineCap = "round";
      for (const s of streaks) {
        s.r += s.sp * (0.14 + boost * 0.4) * dt * (0.3 + s.r);
        if (s.r > 1) seed(s);
        const r0 = s.r * R;
        const r1 = (s.r + s.len * (0.45 + boost * 0.4)) * R;
        const cos = Math.cos(s.a), sin = Math.sin(s.a);
        const alpha = Math.min(1, s.r * 1.8) * (1 - Math.max(0, (s.r - 0.72) / 0.28));
        ctx.strokeStyle = `rgba(${s.c},${(alpha * 0.85).toFixed(3)})`;
        ctx.lineWidth = s.w * (0.6 + s.r);
        ctx.beginPath();
        ctx.moveTo(cx + cos * r0, cy + sin * r0);
        ctx.lineTo(cx + cos * r1, cy + sin * r1);
        ctx.stroke();
      }
    };

    const step = (now: number) => {
      frame = requestAnimationFrame(step);
      const dt = Math.min(0.05, (now - last) / 1000 || 0.016);
      last = now;
      const sy = window.scrollY;
      boost += (Math.min(3, Math.abs(sy - lastScroll) / 30) - boost) * 0.08;
      lastScroll = sy;
      draw(dt);
    };

    resize();
    if (reduced) {
      const still = () => { resize(); draw(0.016); };
      still();
      window.addEventListener("resize", still);
      return () => window.removeEventListener("resize", still);
    }

    const onMove = (e: PointerEvent) => {
      const r = root.getBoundingClientRect();
      tmx = ((e.clientX - r.left) / r.width) * 2 - 1;
      tmy = ((e.clientY - r.top) / r.height) * 2 - 1;
    };
    const io = new IntersectionObserver(([en]) => {
      if (en.isIntersecting) { if (!frame) { last = performance.now(); frame = requestAnimationFrame(step); } }
      else if (frame) { cancelAnimationFrame(frame); frame = 0; }
    });
    io.observe(root);
    window.addEventListener("resize", resize);
    root.addEventListener("pointermove", onMove);
    return () => {
      io.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("resize", resize);
      root.removeEventListener("pointermove", onMove);
    };
  }, []);

  return (
    <section className="about-reveal" aria-labelledby="about-reveal-title">
      <div className="about-reveal__frame section section--dark" ref={frameRef}>
        <canvas className="about-reveal__canvas" ref={canvasRef} aria-hidden="true" />
        <div className="about-reveal__grid">
          <img className="about-reveal__portrait" src={person.portrait} alt={`Portrait of ${person.name}`} width={160} height={160} />
          <h2 id="about-reveal-title" className="h-section">{about.title}</h2>
          <span className="tag">{about.tag}</span>
          <p className="body">{about.intro}</p>
        </div>
      </div>
    </section>
  );
}
