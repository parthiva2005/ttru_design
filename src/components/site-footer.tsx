"use client";

import Link from "next/link";
import { useState } from "react";
import { Mail, Phone } from "lucide-react";
import { Wordmark } from "./wordmark";
import { Button } from "./button";
import { InstagramIcon } from "./icons";

export function SiteFooter() {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "ok" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus("loading");
    try {
      const res = await fetch("/api/newsletter", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });
      const data = (await res.json()) as { message?: string };
      if (!res.ok) throw new Error(data.message ?? "Subscription failed");
      setStatus("ok");
      setMessage(data.message ?? "You're on the list.");
      setEmail("");
    } catch (err) {
      setStatus("error");
      setMessage(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <footer className="relative mt-24 bg-[color:var(--color-ink)] text-[color:var(--color-paper)] film-grain">
      <div className="relative z-10 mx-auto max-w-[1400px] px-6 py-20 lg:px-12 xl:px-16">
        <div className="grid gap-12 lg:grid-cols-12">
          <div className="lg:col-span-4 space-y-6">
            <Wordmark variant="light" size="md" withTagline />
            <p className="max-w-xs text-sm leading-relaxed text-[color:var(--color-paper)]/70">
              Fine-line tattoos, custom embroidery, and custom canvas painting.
              Working out of a small private studio at 29 Green Street,
              Stoughton, Massachusetts.
            </p>
          </div>

          <div className="lg:col-span-2">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-paper)]/50">
              Explore
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li><Link className="link-underline" href="/portfolio">Portfolio</Link></li>
              <li><Link className="link-underline" href="/services">Services</Link></li>
              <li><Link className="link-underline" href="/journal">Journal</Link></li>
              <li><Link className="link-underline" href="/about">About</Link></li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-paper)]/50">
              Contact
            </h4>
            <ul className="mt-5 space-y-3 text-sm">
              <li>
                <a
                  href="https://instagram.com/ttru_designs"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2.5"
                >
                  <InstagramIcon size={14} className="shrink-0" />
                  <span className="link-underline">@ttru_designs</span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:quattrucrafts@gmail.com"
                  className="flex items-center gap-2.5"
                >
                  <Mail size={14} className="shrink-0" />
                  <span className="link-underline break-all">quattrucrafts@gmail.com</span>
                </a>
              </li>
              <li>
                <a href="tel:+17814082354" className="flex items-center gap-2.5">
                  <Phone size={14} className="shrink-0" />
                  <span className="link-underline">+1 (781) 408-2354</span>
                </a>
              </li>
              <li>
                <Link className="link-underline" href="/book">
                  Book a consultation →
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-[color:var(--color-paper)]/50">
              Newsletter
            </h4>
            <p className="mt-5 text-sm text-[color:var(--color-paper)]/70">
              New work, healed results and open studio dates. One email a month
              tops — usually less.
            </p>
            <form onSubmit={onSubmit} className="mt-4 flex flex-col gap-3">
              <label htmlFor="footer-email" className="sr-only">
                Email address
              </label>
              <input
                id="footer-email"
                type="email"
                required
                placeholder="you@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="h-11 bg-transparent border border-[color:var(--color-paper)]/30 px-4 text-sm text-[color:var(--color-paper)] placeholder:text-[color:var(--color-paper)]/40 focus:border-[color:var(--color-paper)] focus:outline-none"
              />
              <Button
                type="submit"
                variant="paper"
                size="sm"
                disabled={status === "loading"}
                className="w-full"
              >
                {status === "loading" ? "Subscribing…" : "Subscribe"}
              </Button>
              {message ? (
                <p
                  className={
                    status === "error"
                      ? "text-xs text-[color:var(--color-crimson-soft)]"
                      : "text-xs text-[color:var(--color-paper)]/70"
                  }
                >
                  {message}
                </p>
              ) : null}
            </form>
          </div>
        </div>

        <div className="mt-16 flex flex-col items-start justify-between gap-4 border-t border-[color:var(--color-paper)]/15 pt-8 text-xs text-[color:var(--color-paper)]/50 md:flex-row md:items-center">
          <p>© {new Date().getFullYear()} Sarah Quattrucci. All work belongs to the artist.</p>
          <div className="flex gap-6">
            <Link href="/legal/privacy" className="link-underline">Privacy</Link>
            <Link href="/legal/terms" className="link-underline">Terms & booking policy</Link>
            <Link href="/contact" className="link-underline">Contact</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
