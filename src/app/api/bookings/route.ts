import { NextResponse } from "next/server";
import { bookingSchema } from "@/lib/booking-schema";
import { appendBooking } from "@/lib/booking-storage";
import { checkRateLimit, ipFromRequest } from "@/lib/rate-limit";

export const runtime = "nodejs"; // file-system access — needs Node runtime

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
