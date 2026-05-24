import { cn } from "@/lib/cn";

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  variant?: "paper" | "ink";
  bleed?: boolean;
  innerClassName?: string;
}

/**
 * Editorial section wrapper. Provides consistent vertical rhythm and
 * either the cream "Paper" or dark "Ink" surface.
 */
export function Section({
  variant = "paper",
  bleed = false,
  className,
  innerClassName,
  children,
  ...rest
}: SectionProps) {
  return (
    <section
      className={cn(
        "relative",
        variant === "ink"
          ? "bg-[color:var(--color-ink)] text-[color:var(--color-paper)] film-grain"
          : "bg-[color:var(--color-paper)] text-[color:var(--color-ink)]",
        bleed ? "py-0" : "py-20 md:py-28 lg:py-32",
        className,
      )}
      {...rest}
    >
      <div
        className={cn(
          "relative z-10 mx-auto w-full max-w-[1400px] px-6 lg:px-12 xl:px-16",
          innerClassName,
        )}
      >
        {children}
      </div>
    </section>
  );
}

interface EyebrowProps {
  children: React.ReactNode;
  className?: string;
}

export function Eyebrow({ children, className }: EyebrowProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.32em] text-[color:var(--color-muted)]",
        className,
      )}
    >
      <span aria-hidden className="h-px w-8 bg-current/40" />
      {children}
    </span>
  );
}

interface SectionHeadingProps {
  eyebrow?: string;
  title: React.ReactNode;
  intro?: React.ReactNode;
  align?: "left" | "center";
  variant?: "paper" | "ink";
  className?: string;
}

export function SectionHeading({
  eyebrow,
  title,
  intro,
  align = "left",
  variant = "paper",
  className,
}: SectionHeadingProps) {
  return (
    <header
      className={cn(
        "flex flex-col gap-5",
        align === "center" ? "items-center text-center" : "items-start",
        className,
      )}
    >
      {eyebrow ? <Eyebrow>{eyebrow}</Eyebrow> : null}
      <h2
        className={cn(
          "font-display tracking-tight",
          "text-4xl md:text-5xl lg:text-6xl",
          variant === "ink"
            ? "text-[color:var(--color-paper)]"
            : "text-[color:var(--color-ink)]",
        )}
      >
        {title}
      </h2>
      {intro ? (
        <p
          className={cn(
            "max-w-xl text-base leading-relaxed md:text-lg",
            variant === "ink"
              ? "text-[color:var(--color-paper)]/75"
              : "text-[color:var(--color-muted)]",
            align === "center" && "mx-auto",
          )}
        >
          {intro}
        </p>
      ) : null}
    </header>
  );
}

export function HandRule({ variant = "paper" }: { variant?: "paper" | "ink" }) {
  return (
    <div
      role="presentation"
      className={cn("divider-hand", variant === "ink" && "on-ink")}
    />
  );
}
