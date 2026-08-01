import type { AnchorHTMLAttributes, ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

const base =
  "inline-flex items-center justify-center gap-2 rounded-[3px] font-sans text-sm font-semibold transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50";

const variants = {
  default: "bg-ink text-background hover:bg-[#2b2e36]",
  outline: "border border-[#cfc9be] bg-white text-[#45423c] hover:border-accent hover:bg-[#fdf7f1] hover:text-accent",
} as const;

type Variant = keyof typeof variants;

export function Button({
  className = "",
  variant = "default",
  ...props
}: ButtonHTMLAttributes<HTMLButtonElement> & { variant?: Variant }) {
  return <button className={cn(base, variants[variant], className)} {...props} />;
}

export function ButtonLink({
  className = "",
  variant = "default",
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: Variant }) {
  return <a className={cn(base, variants[variant], className)} {...props} />;
}
