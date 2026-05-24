import Link from "next/link";
import { forwardRef, type ComponentProps } from "react";
import { cn } from "@/lib/cn";

type Variant = "crimson" | "ink" | "paper" | "ghost";
type Size = "sm" | "md" | "lg";

interface BaseProps {
  variant?: Variant;
  size?: Size;
  className?: string;
  children: React.ReactNode;
}

const baseClasses =
  "relative inline-flex items-center justify-center gap-2 font-body font-medium uppercase tracking-[0.18em] transition-all duration-200 focus-visible:outline-2 focus-visible:outline-offset-3 select-none";

const sizeClasses: Record<Size, string> = {
  sm: "h-9 px-4 text-[11px]",
  md: "h-11 px-6 text-xs",
  lg: "h-14 px-9 text-sm",
};

const variantClasses: Record<Variant, string> = {
  crimson:
    "bg-[color:var(--color-crimson)] text-[color:var(--color-paper)] hover:bg-[color:var(--color-crimson-deep)] active:translate-y-[1px]",
  ink:
    "bg-[color:var(--color-ink)] text-[color:var(--color-paper)] hover:bg-[color:var(--color-ink-soft)] active:translate-y-[1px]",
  paper:
    "bg-[color:var(--color-paper)] text-[color:var(--color-ink)] border border-[color:var(--color-ink)] hover:bg-[color:var(--color-paper-warm)]",
  ghost:
    "text-current border border-current/30 hover:border-current/80 hover:bg-current/5",
};

type LinkProps = BaseProps & ComponentProps<typeof Link>;
type ButtonProps = BaseProps & ComponentProps<"button">;

export const ButtonLink = forwardRef<HTMLAnchorElement, LinkProps>(
  function ButtonLink(
    { variant = "crimson", size = "md", className, children, ...rest },
    ref,
  ) {
    return (
      <Link
        ref={ref}
        className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
        {...rest}
      >
        {children}
      </Link>
    );
  },
);

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(function Button(
  { variant = "crimson", size = "md", className, children, type = "button", ...rest },
  ref,
) {
  return (
    <button
      ref={ref}
      type={type}
      className={cn(baseClasses, sizeClasses[size], variantClasses[variant], className)}
      {...rest}
    >
      {children}
    </button>
  );
});
