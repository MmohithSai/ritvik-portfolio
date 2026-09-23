import Link from "next/link";
import type { ReactNode } from "react";
import "./Button.css";

type Props = {
  href: string;
  children: ReactNode;
  variant?: "dark" | "light" | "outline";
  /** Primary CTAs hover-fill with the accent (DESIGN.md: accent is hover-only). */
  primary?: boolean;
  avatar?: string;
  className?: string;
  external?: boolean;
  onClick?: () => void;
};

export default function Button({ href, children, variant = "dark", primary, avatar, className = "", external, onClick }: Props) {
  const cls = [
    "btn",
    variant === "dark" ? "btn--dark" : "btn--light",
    variant === "outline" && "btn--outlined",
    primary && "btn--primary",
    avatar && "btn--avatar",
    className,
  ].filter(Boolean).join(" ");

  const inner = (
    <>
      <span className="btn__fill" aria-hidden />
      {avatar && <img className="btn__avatar" src={avatar} alt="" width={27} height={27} />}
      <span className="btn__roll">
        <span className="btn__label">{children}</span>
        <span className="btn__label" aria-hidden>{children}</span>
      </span>
    </>
  );

  if (external || href.startsWith("mailto:") || href.startsWith("#")) {
    return <a className={cls} href={href} onClick={onClick} {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}>{inner}</a>;
  }
  return <Link className={cls} href={href} onClick={onClick}>{inner}</Link>;
}
