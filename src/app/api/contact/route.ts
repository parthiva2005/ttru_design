import { NextResponse } from "next/server";
import { z } from "zod";
import { checkRateLimit, ipFromRequest } from "@/lib/rate-limit";

const schema = z.object({
  name: z.string().min(2).max(80),
  email: z.string().email(),
  subject: z.string().max(120).optional().default(""),
  message: z.string().min(10, "Tell me a little more.").max(2000),
});

export const runtime = "edge";

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

  // Stub: in production this would forward via Resend to hello@…
  // For the demo we simply acknowledge.
  return NextResponse.json(
    {
      message:
        "Thanks — your note is in. I aim to reply within 72 hours, Mondays through Thursdays.",
    },
    { status: 200 },
  );
}
