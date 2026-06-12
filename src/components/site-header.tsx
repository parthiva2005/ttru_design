"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { Wordmark } from "./wordmark";
import { ButtonLink } from "./button";
import { cn } from "@/lib/cn";

const NAV_ITEMS = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/services", label: "Services" },
  { href: "/journal", label: "Journal" },
  { href: "/about", label: "About" },
] as const;

export function SiteHeader() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  // Subtle elevation cue once the user scrolls past the hero
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 32);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Close the mobile drawer when navigating
  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  return (
    <header
      className={cn(
        "sticky top-0 z-50 transition-all duration-300",
        scrolled
          ? "bg-[color:var(--color-paper)]/95 backdrop-blur-md border-b border-[color:var(--color-paper-border)]"
          : "bg-transparent",
      )}
    >
      <div className="mx-auto flex h-20 max-w-[1400px] items-center justify-between px-6 lg:px-12 xl:px-16">
        <div className="flex items-center gap-3">
          <Link href="/" aria-label="Sarah Quattrucci — home" className="shrink-0">
            <Image
              src="/logo.png"
              alt="TTRU Designs logo"
              width={48}
              height={48}
              priority
              className="h-12 w-12 rounded-full"
            />
          </Link>
          <Wordmark size="sm" withTagline />
        </div>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-10" aria-label="Primary">
          {NAV_ITEMS.map((item) => {
            const active =
              pathname === item.href || pathname.startsWith(`${item.href}/`);
            return (
              <Link
                key={item.href}
                href={item.href}
                className={cn(
                  "font-body text-[13px] uppercase tracking-[0.22em] transition-colors",
                  active
                    ? "text-[color:var(--color-ink)]"
                    : "text-[color:var(--color-muted)] hover:text-[color:var(--color-ink)]",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="hidden lg:block">
          <ButtonLink href="/book" variant="crimson" size="sm">
            Start a brief
          </ButtonLink>
        </div>

        {/* Mobile trigger */}
        <button
          type="button"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          aria-expanded={mobileOpen}
          onClick={() => setMobileOpen((v) => !v)}
          className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-sm border border-[color:var(--color-ink)]/40 text-[color:var(--color-ink)] hover:border-[color:var(--color-ink)]"
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
      </div>

      {/* Mobile drawer */}
      <div
        className={cn(
          "lg:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out",
          mobileOpen ? "max-h-[420px] opacity-100" : "max-h-0 opacity-0",
        )}
        aria-hidden={!mobileOpen}
      >
        <nav
          className="flex flex-col gap-4 border-t border-[color:var(--color-paper-border)] bg-[color:var(--color-paper)] px-6 py-6"
          aria-label="Mobile"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="font-display text-2xl text-[color:var(--color-ink)]"
            >
              {item.label}
            </Link>
          ))}
          <div className="pt-2">
            <ButtonLink href="/book" variant="crimson" size="md" className="w-full">
              Start a brief
            </ButtonLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
