import { Resend } from "resend";

/**
 * Central email sender. Every form on the site (booking brief, newsletter,
 * contact) routes its notification through here so there's one place to
 * change the destination address or the provider.
 *
 * Configuration (set in .env.local):
 *   RESEND_API_KEY      — required for real delivery. Get one free at resend.com
 *   CONTACT_TO_EMAIL    — where notifications land. Defaults to Sarah's Gmail.
 *   CONTACT_FROM_EMAIL  — the From address. Defaults to Resend's shared
 *                         onboarding domain, which works with no DNS setup.
 *
 * If RESEND_API_KEY is missing the call is a no-op that logs the payload,
 * so the forms keep working in development without crashing.
 */

const TO_EMAIL = process.env.CONTACT_TO_EMAIL ?? "quattrucrafts@gmail.com";
const FROM_EMAIL =
  process.env.CONTACT_FROM_EMAIL ?? "TTRU Designs <onboarding@resend.dev>";

export interface SendEmailArgs {
  subject: string;
  html: string;
  /** Lets Sarah hit "Reply" and answer the person who submitted. */
  replyTo?: string;
}

export interface SendEmailResult {
  ok: boolean;
  error?: string;
}

export async function sendNotificationEmail(
  args: SendEmailArgs,
): Promise<SendEmailResult> {
  const apiKey = process.env.RESEND_API_KEY;

  if (!apiKey) {
    console.warn(
      "[email] RESEND_API_KEY is not set — skipping send. Subject:",
      args.subject,
    );
    return { ok: false, error: "Email is not configured on the server yet." };
  }

  const resend = new Resend(apiKey);

  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: TO_EMAIL,
      subject: args.subject,
      html: args.html,
      ...(args.replyTo ? { replyTo: args.replyTo } : {}),
    });

    if (error) {
      console.error("[email] Resend returned an error:", error);
      return { ok: false, error: error.message ?? "Email failed to send." };
    }

    return { ok: true };
  } catch (err) {
    console.error("[email] send threw:", err);
    return {
      ok: false,
      error: err instanceof Error ? err.message : "Email failed to send.",
    };
  }
}

/** Small helper: escape user-supplied text before dropping it into HTML. */
export function escapeHtml(input: string): string {
  return input
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}
