import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, ipFromRequest } from "@/lib/rate-limit";
import { escapeHtml, sendNotificationEmail } from "@/lib/email";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  subject: z.string().max(120).optional().default(""),
  message: z.string().min(10, "Tell me a little more.").max(2000),
});

export const runtime = "nodejs"; // Resend SDK needs the Node runtime

export async function POST(request: Request) {
  const ip = ipFromRequest(request);
  const limit = checkRateLimit(`contact:${ip}`, {
    limit: 5,
    windowMs: 60 * 60 * 1000,
  });
  if (!limit.ok) {
    return NextResponse.json(
      { message: "Too many messages from this address. Please try again later." },
      { status: 429 },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json({ message: "Invalid JSON." }, { status: 400 });
  }

  const result = schema.safeParse(payload);
  if (!result.success) {
    return NextResponse.json(
      { message: result.error.issues[0]?.message ?? "Validation failed." },
      { status: 422 },
    );
  }

  const { name, email, subject, message } = result.data;

  const emailed = await sendNotificationEmail({
    subject: subject ? `Contact: ${subject}` : `Contact form — ${name}`,
    replyTo: email,
    html: `
      <div style="max-width:560px;margin:0 auto">
        <h2 style="font:600 18px/1.3 -apple-system,sans-serif;color:#0e0e0e">New message from ${escapeHtml(
          name,
        )}</h2>
        <p style="font:13px/1.5 -apple-system,sans-serif;color:#6b6b6b">
          ${escapeHtml(email)}${subject ? ` &middot; ${escapeHtml(subject)}` : ""}
        </p>
        <p style="font:14px/1.6 -apple-system,sans-serif;color:#1a1a1a;white-space:pre-wrap;margin-top:16px">${escapeHtml(
          message,
        )}</p>
      </div>`,
  });

  if (!emailed.ok) {
    console.warn("[contact] message not emailed:", emailed.error);
  }

  return NextResponse.json(
    {
      message:
        "Thanks — your note is in. I aim to reply within 72 hours, Mondays through Thursdays.",
    },
    { status: 200 },
  );
}
