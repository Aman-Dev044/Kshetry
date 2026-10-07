import Link from "next/link";
import type { ComponentProps, ReactNode } from "react";

type Variant = "solid" | "outline" | "ghost" | "light";
type Size = "sm" | "md";

const base =
  "group relative inline-flex items-center justify-center gap-3 font-sans text-[0.7rem] font-semibold uppercase tracking-[0.18em] transition-[background-color,color,border-color,box-shadow] duration-500 ease-[var(--ease-soft)] focus-visible:outline-2";

const sizes: Record<Size, string> = {
  sm: "px-5 py-3",
  md: "px-7 py-4 sm:px-9",
};

const variants: Record<Variant, string> = {
  solid: "bg-burgundy text-ivory hover:bg-burgundy-deep",
  outline: "border border-burgundy/25 text-burgundy hover:border-burgundy hover:bg-burgundy hover:text-ivory",
  ghost: "text-charcoal hover:text-burgundy",
  light: "border border-gold/40 text-gold-light hover:border-gold hover:bg-gold hover:text-burgundy-deep",
};

type Props = {
  href: string;
  children: ReactNode;
  variant?: Variant;
  size?: Size;
  withArrow?: boolean;
  className?: string;
} & Omit<ComponentProps<typeof Link>, "href" | "children" | "className">;

export default function Button({
  href,
  children,
  variant = "solid",
  size = "md",
  withArrow = true,
  className,
  ...rest
}: Props) {
  return (
    <Link href={href} className={`${base} ${sizes[size]} ${variants[variant]} ${className ?? ""}`} {...rest}>
      <span>{children}</span>
      {withArrow && (
        <svg
          width="16"
          height="8"
          viewBox="0 0 16 8"
          fill="none"
          aria-hidden
          className="transition-transform duration-500 ease-[var(--ease-editorial)] group-hover:translate-x-1"
        >
          <path d="M0 4h14M10.5 .8 14 4l-3.5 3.2" stroke="currentColor" strokeWidth="1" />
        </svg>
      )}
    </Link>
  );
}
