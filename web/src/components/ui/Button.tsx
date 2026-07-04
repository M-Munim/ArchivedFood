import Link from "next/link";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

type Variant = "primary" | "outline" | "outlineLight" | "mint";

const base =
  "inline-flex items-center justify-center rounded-full font-semibold text-center transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-brand-orange";

const sizes = {
  md: "px-7 py-3.5 text-[17px]",
  sm: "px-5 py-2.5 text-[15px]",
  hero: "px-5 py-2.5 text-[15px] leading-6 sm:px-7 sm:py-3.5 sm:text-[17px]",
  header:
    "px-[13.5px] py-2 text-[14px] leading-4 font-medium! sm:px-5 sm:py-2.5 sm:text-[15px] sm:font-semibold!",
} as const;

const variants: Record<Variant, string> = {
  primary: "bg-ink text-white hover:bg-black/80",
  outline:
    "bg-white text-ink border border-ink/80 hover:bg-ink hover:text-white",
  outlineLight:
    "bg-transparent text-white border border-white/70 hover:bg-white hover:text-ink",
  mint: "bg-brand-mint text-ink hover:bg-brand-mint/80",
};

type CommonProps = {
  variant?: Variant;
  size?: keyof typeof sizes;
  children: ReactNode;
  className?: string;
};

type ButtonAsLink = CommonProps & {
  href: string;
} & Omit<ComponentPropsWithoutRef<typeof Link>, "href" | "className">;

type ButtonAsButton = CommonProps & {
  href?: undefined;
} & Omit<ComponentPropsWithoutRef<"button">, "className">;

export function Button(props: ButtonAsLink | ButtonAsButton) {
  const {
    variant = "primary",
    size = "md",
    className = "",
    children,
    ...rest
  } = props;

  const classes = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  if (props.href !== undefined) {
    const { href, ...linkRest } = rest as ButtonAsLink;
    return (
      <Link href={href} className={classes} {...linkRest}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonAsButton)}>
      {children}
    </button>
  );
}
