import type { SVGProps } from "react";
import type { IconName } from "@/content/site";

type P = SVGProps<SVGSVGElement>;

const base = (props: P) => ({
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
  ...props,
});

export const ArrowDownLeft = (p: P) => (
  <svg {...base(p)}><path d="M17 7 7 17" /><path d="M17 17H7V7" /></svg>
);
export const ExternalLink = (p: P) => (
  <svg {...base(p)}><path d="M15 3h6v6" /><path d="M10 14 21 3" /><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" /></svg>
);
export const Plus = (p: P) => (
  <svg {...base(p)}><path d="M5 12h14" /><path d="M12 5v14" /></svg>
);
export const ChevronDown = (p: P) => (
  <svg {...base(p)}><path d="m6 9 6 6 6-6" /></svg>
);
const Pointer = (p: P) => (
  <svg {...base(p)}><path d="M4.04 4.69a.5.5 0 0 1 .65-.65l16 6.5a.5.5 0 0 1-.06.95l-6.13 1.58a2 2 0 0 0-1.43 1.43l-1.58 6.13a.5.5 0 0 1-.95.06z" /></svg>
);
const Toggle = (p: P) => (
  <svg {...base(p)}><rect x="2" y="6" width="20" height="12" rx="6" /><circle cx="16" cy="12" r="2" /></svg>
);
const Target = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="5.5" /><circle cx="12" cy="12" r="2" /></svg>
);
const MessageSquare = (p: P) => (
  <svg {...base(p)}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>
);
const MessageCircle = (p: P) => (
  <svg {...base(p)}><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z" /></svg>
);
const Key = (p: P) => (
  <svg {...base(p)}><circle cx="7.5" cy="15.5" r="5.5" /><path d="m21 2-9.6 9.6" /><path d="m15.5 7.5 3 3L22 7l-3-3" /></svg>
);
const Support = (p: P) => (
  <svg {...base(p)}><circle cx="12" cy="12" r="9" /><circle cx="12" cy="12" r="4" /><path d="m4.93 4.93 4.24 4.24" /><path d="m14.83 9.17 4.24-4.24" /><path d="m14.83 14.83 4.24 4.24" /><path d="m9.17 14.83-4.24 4.24" /></svg>
);

const TrendingUp = (p: P) => (
  <svg {...base(p)}><path d="m22 7-8.5 8.5-5-5L2 17" /><path d="M16 7h6v6" /></svg>
);
const Move = (p: P) => (
  <svg {...base(p)}><path d="M12 2v20" /><path d="m15 19-3 3-3-3" /><path d="m19 9 3 3-3 3" /><path d="M2 12h20" /><path d="m5 9-3 3 3 3" /><path d="m9 5 3-3 3 3" /></svg>
);
const Moon = (p: P) => (
  <svg {...base(p)}><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z" /></svg>
);

export const valueIcons: Record<IconName, (p: P) => React.JSX.Element> = {
  "trending-up": TrendingUp,
  move: Move,
  moon: Moon,
  pointer: Pointer,
  toggle: Toggle,
  target: Target,
  "message-square": MessageSquare,
  "message-circle": MessageCircle,
  key: Key,
  support: Support,
};

/** 40px quadrant mark — same geometry language as the reference "D", spelling "R". */
export const LogoMark = (p: P) => (
  <svg width={40} height={40} viewBox="0 0 40 40" aria-hidden {...p}>
    <rect x="0" y="0" width="19" height="19" rx="2" fill="currentColor" />
    <path d="M21 0h9.5a9.5 9.5 0 0 1 0 19H21z" fill="currentColor" />
    <rect x="0" y="21" width="19" height="19" rx="2" fill="currentColor" />
    <path d="M21 21h4l15 19H21z" fill="currentColor" />
  </svg>
);

/* Phosphor Icons (MIT), regular weight, 256 viewBox, filled — used by the exclusion hero + footer. */
const phosphor = (d: string) => {
  const Icon = (p: P) => (
    <svg width={24} height={24} viewBox="0 0 256 256" fill="currentColor" aria-hidden {...p}><path d={d} /></svg>
  );
  return Icon;
};
export const InstagramLogo = phosphor("M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM176,24H80A56.06,56.06,0,0,0,24,80v96a56.06,56.06,0,0,0,56,56h96a56.06,56.06,0,0,0,56-56V80A56.06,56.06,0,0,0,176,24Zm40,152a40,40,0,0,1-40,40H80a40,40,0,0,1-40-40V80A40,40,0,0,1,80,40h96a40,40,0,0,1,40,40ZM192,76a12,12,0,1,1-12-12A12,12,0,0,1,192,76Z");
export const WhatsappLogo = phosphor("M187.58,144.84l-32-16a8,8,0,0,0-8,.5l-14.69,9.8a40.55,40.55,0,0,1-16-16l9.8-14.69a8,8,0,0,0,.5-8l-16-32A8,8,0,0,0,104,64a40,40,0,0,0-40,40,88.1,88.1,0,0,0,88,88,40,40,0,0,0,40-40A8,8,0,0,0,187.58,144.84ZM152,176a72.08,72.08,0,0,1-72-72A24,24,0,0,1,99.29,80.46l11.48,23L101,118a8,8,0,0,0-.73,7.51,56.47,56.47,0,0,0,30.15,30.15A8,8,0,0,0,138,155l14.61-9.74,23,11.48A24,24,0,0,1,152,176ZM128,24A104,104,0,0,0,36.18,176.88L24.83,210.93a16,16,0,0,0,20.24,20.24l34.05-11.35A104,104,0,1,0,128,24Zm0,192a87.87,87.87,0,0,1-44.06-11.81,8,8,0,0,0-6.54-.67L40,216,52.47,178.6a8,8,0,0,0-.66-6.54A88,88,0,1,1,128,216Z");
export const EnvelopeSimple = phosphor("M224,48H32a8,8,0,0,0-8,8V192a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A8,8,0,0,0,224,48ZM203.43,64,128,133.15,52.57,64ZM216,192H40V74.19l82.59,75.71a8,8,0,0,0,10.82,0L216,74.19V192Z");
export const ArrowUp = phosphor("M205.66,117.66a8,8,0,0,1-11.32,0L136,59.31V216a8,8,0,0,1-16,0V59.31L61.66,117.66a8,8,0,0,1-11.32-11.32l72-72a8,8,0,0,1,11.32,0l72,72A8,8,0,0,1,205.66,117.66Z");

/** Icon for a social link, keyed by its label in content/site.ts `socials`. */
export const socialIcons: Record<string, (p: P) => React.JSX.Element> = {
  Instagram: InstagramLogo,
  WhatsApp: WhatsappLogo,
  Email: EnvelopeSimple,
};
