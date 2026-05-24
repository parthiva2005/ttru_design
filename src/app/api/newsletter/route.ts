import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, ipFromRequest } from "@/lib/rate-limit";

const schema = z.object({
  email: z.string().email("Please enter a valid email."),
});

export const runtime = "edge";

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

  // Stub: in production this would call ConvertKit / Beehiiv with a
  // double-opt-in confirmation. For the demo we simply acknowledge.
  return NextResponse.json(
    {
      message: "Check your inbox to confirm your subscription.",
    },
    { status: 200 },
  );
}
