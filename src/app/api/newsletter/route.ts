import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, ipFromRequest } from "@/lib/rate-limit";
import { escapeHtml, sendNotificationEmail } from "@/lib/email";

const schema = z.object({
  email: z.string().email("Please enter a valid email."),
});

export const runtime = "nodejs"; // Resend SDK needs the Node runtime

export async function POST(request: Request) {
  const ip = ipFromRequest(request);
  const limit = checkRateLimit(`newsletter:${ip}`, {
    limit: 5,
    windowMs: 60 * 60 * 1000,
  });
  if (!limit.ok) {
    return NextResponse.json(
      { message: "Too many subscription attempts. Please try again later." },
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
      { message: result.error.issues[0]?.message ?? "Invalid email." },
      { status: 422 },
    );
  }

  const { email } = result.data;

  // Notify the studio inbox of the new subscriber.
  const emailed = await sendNotificationEmail({
    subject: `New newsletter signup: ${email}`,
    replyTo: email,
    html: `
      <div style="max-width:520px;margin:0 auto">
        <h2 style="font:600 18px/1.3 -apple-system,sans-serif;color:#0e0e0e">New newsletter subscriber</h2>
        <p style="font:14px/1.6 -apple-system,sans-serif;color:#1a1a1a">
          <strong>${escapeHtml(email)}</strong> just signed up for the newsletter
          from the website footer.
        </p>
      </div>`,
  });

  if (!emailed.ok) {
    console.warn("[newsletter] signup not emailed:", emailed.error);
  }

  return NextResponse.json(
    { message: "Thanks — you're on the list." },
    { status: 200 },
  );
}
