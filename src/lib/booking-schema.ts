import { z } from "zod";

/**
 * Shared booking-form schema. Used by the client form for validation
 * and by the /api/bookings handler to verify incoming payloads.
 *
 * No budget / deposit fields — quotes happen one-on-one after the brief.
 */

export const SERVICE_OPTIONS = [
  { value: "tattoo-design", label: "Tattoo Design" },
  { value: "embroidery", label: "Custom Embroidery" },
  { value: "commissions", label: "Custom Canvas Painting" },
  { value: "nail-art", label: "Nail Art" },
] as const;

export const SIZE_OPTIONS = [
  { value: "small", label: "Small (under 3 in)" },
  { value: "medium", label: "Medium (3 – 6 in)" },
  { value: "large", label: "Large (6 in +)" },
] as const;

export const COLOR_OPTIONS = [
  { value: "full-color", label: "Full color" },
  { value: "black-and-grey", label: "Black & grey" },
  { value: "black-only", label: "Black only" },
] as const;

export const TIMELINE_OPTIONS = [
  { value: "asap", label: "As soon as possible" },
  { value: "1-month", label: "Within 1 month" },
  { value: "3-months", label: "Within 3 months" },
  { value: "flexible", label: "Flexible" },
] as const;

export const bookingSchema = z.object({
  service: z.enum(["tattoo-design", "embroidery", "commissions", "nail-art"]),
  projectTitle: z.string().max(80).default(""),
  description: z
    .string()
    .min(40, "Tell me a little more — at least a few sentences.")
    .max(2000),
  size: z.enum(["small", "medium", "large"]),
  placement: z.string().min(2, "Placement is required.").max(120),
  color: z.enum(["full-color", "black-and-grey", "black-only"]),
  timeline: z.enum(["asap", "1-month", "3-months", "flexible"]),
  name: z.string().min(2, "Name is required.").max(80),
  email: z.string().email("A valid email is required."),
  instagram: z.string().max(80).default(""),
  ageConfirmed: z.literal(true, {
    message: "Please confirm you're 18 or older.",
  }),
  /** Read-only context attached server-side from URL params. Not part of
   *  the form fields the user fills in. */
  referenceSlug: z.string().max(80).default(""),
  flashSlug: z.string().max(80).default(""),
});

export type BookingPayload = z.infer<typeof bookingSchema>;
