import { NextResponse } from "next/server";
import {
  SERVICE_OPTIONS,
  SIZE_OPTIONS,
  COLOR_OPTIONS,
  TIMELINE_OPTIONS,
  bookingSchema,
  type BookingPayload,
} from "@/lib/booking-schema";
import { appendBooking } from "@/lib/booking-storage";
import { checkRateLimit, ipFromRequest } from "@/lib/rate-limit";
import { escapeHtml, sendNotificationEmail } from "@/lib/email";

export const runtime = "nodejs"; // file-system access — needs Node runtime

/** Turn an option value (e.g. "tattoo-design") into its human label. */
function labelFor(
  options: ReadonlyArray<{ value: string; label: string }>,
  value: string,
): string {
  return options.find((o) => o.value === value)?.label ?? value;
}

function buildBookingEmail(b: BookingPayload, reference: string, files: number) {
  const rows: [string, string][] = [
    ["Reference", reference],
    ["Service", labelFor(SERVICE_OPTIONS, b.service)],
    ["Project title", b.projectTitle || "—"],
    ["Size", labelFor(SIZE_OPTIONS, b.size)],
    ["Placement", b.placement],
    ["Colour", labelFor(COLOR_OPTIONS, b.color)],
    ["Timeline", labelFor(TIMELINE_OPTIONS, b.timeline)],
    ["Name", b.name],
    ["Email", b.email],
    ["Instagram", b.instagram || "—"],
    ["Reference images", String(files)],
    ["Flash linked", b.flashSlug || "—"],
    ["Reference piece", b.referenceSlug || "—"],
  ];

  const tableRows = rows
    .map(
      ([k, v]) =>
        `<tr><td style="padding:6px 14px 6px 0;color:#6b6b6b;font:13px/1.5 -apple-system,sans-serif;white-space:nowrap;vertical-align:top">${escapeHtml(
          k,
        )}</td><td style="padding:6px 0;color:#1a1a1a;font:14px/1.5 -apple-system,sans-serif">${escapeHtml(
          v,
        )}</td></tr>`,
    )
    .join("");

  const html = `
    <div style="max-width:560px;margin:0 auto">
      <h2 style="font:600 20px/1.3 -apple-system,sans-serif;color:#0e0e0e">New booking brief — ${escapeHtml(
        b.name,
      )}</h2>
      <table style="border-collapse:collapse;margin:16px 0">${tableRows}</table>
      <h3 style="font:600 14px/1.3 -apple-system,sans-serif;color:#0e0e0e;margin-top:24px">Description</h3>
      <p style="font:14px/1.6 -apple-system,sans-serif;color:#1a1a1a;white-space:pre-wrap">${escapeHtml(
        b.description,
      )}</p>
    </div>`;

  return { subject: `New brief: ${b.name} — ${labelFor(SERVICE_OPTIONS, b.service)}`, html };
}

const RATE_LIMIT = { limit: 3, windowMs: 60 * 60 * 1000 }; // 3 / hour

export async function POST(request: Request) {
  const ip = ipFromRequest(request);
  const limit = checkRateLimit(`bookings:${ip}`, RATE_LIMIT);
  if (!limit.ok) {
    return NextResponse.json(
      {
        message:
          "Too many submissions from this address. Please try again later.",
      },
      {
        status: 429,
        headers: {
          "Retry-After": Math.ceil(limit.retryAfterMs / 1000).toString(),
        },
      },
    );
  }

  let payload: unknown;
  try {
    payload = await request.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid JSON payload." },
      { status: 400 },
    );
  }

  const result = bookingSchema.safeParse(payload);
  if (!result.success) {
    const first = result.error.issues[0];
    return NextResponse.json(
      {
        message: first?.message ?? "Validation failed.",
        issues: result.error.issues,
      },
      { status: 422 },
    );
  }

  // fileCount is optional metadata passed alongside the validated payload
  const fileCountRaw =
    typeof payload === "object" && payload && "fileCount" in payload
      ? (payload as { fileCount?: number }).fileCount
      : 0;
  const fileCount = typeof fileCountRaw === "number" ? fileCountRaw : 0;

  try {
    const stored = await appendBooking(result.data, fileCount);

    // Email the brief to the studio inbox. Delivery failure must not block
    // the submission — the brief is already safely persisted.
    const { subject, html } = buildBookingEmail(
      result.data,
      stored.reference,
      fileCount,
    );
    const emailed = await sendNotificationEmail({
      subject,
      html,
      replyTo: result.data.email,
    });
    if (!emailed.ok) {
      console.warn("[bookings] saved but email not sent:", emailed.error);
    }

    return NextResponse.json(
      {
        message: "Brief received.",
        reference: stored.reference,
      },
      { status: 201 },
    );
  } catch (err) {
    console.error("[bookings] failed to persist:", err);
    return NextResponse.json(
      { message: "Could not save your brief. Please try again." },
      { status: 500 },
    );
  }
}

/** Read endpoint for the local admin dashboard — listed by most-recent first. */
export async function GET() {
  // For demo: returns a stub message. In a real build this would require
  // auth before returning the booking list.
  return NextResponse.json(
    {
      message:
        "Bookings list is private. Authenticated admin dashboard reads from /api/bookings/admin.",
    },
    { status: 401 },
  );
}
