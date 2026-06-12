import { promises as fs } from "node:fs";
import os from "node:os";
import path from "node:path";
import type { BookingPayload } from "./booking-schema";

/**
 * Best-effort booking log.
 *
 * The authoritative delivery channel is email (see `sendNotificationEmail`).
 * This file is only a convenience backup, so it is written to the OS temp
 * directory — which is writable on serverless hosts like Vercel, unlike the
 * project directory, which is read-only there.
 *
 * Every function here is defensive: a filesystem failure NEVER propagates
 * out, because losing the backup must not fail a real submission.
 */

const DATA_DIR = path.join(os.tmpdir(), "ttru-bookings");
const DATA_FILE = path.join(DATA_DIR, "bookings.json");

export interface StoredBooking extends BookingPayload {
  reference: string;
  receivedAt: string;
  fileCount: number;
}

export async function readBookings(): Promise<StoredBooking[]> {
  try {
    const raw = await fs.readFile(DATA_FILE, "utf8");
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as StoredBooking[]) : [];
  } catch {
    // No file yet, or unreadable — treat as an empty log.
    return [];
  }
}

/**
 * Records a booking and returns it with a generated reference. The reference
 * is always produced; the disk write is attempted but failures are swallowed
 * so the caller can still email and acknowledge the submission.
 */
export async function appendBooking(
  booking: BookingPayload,
  fileCount: number,
): Promise<StoredBooking> {
  const stored: StoredBooking = {
    ...booking,
    reference: generateReference(),
    receivedAt: new Date().toISOString(),
    fileCount,
  };

  try {
    await fs.mkdir(DATA_DIR, { recursive: true });
    const existing = await readBookings();
    existing.push(stored);
    await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf8");
  } catch (err) {
    // Backup write failed (e.g. read-only FS). Not fatal — log and move on.
    console.warn("[booking-storage] could not persist backup:", err);
  }

  return stored;
}

function generateReference(): string {
  // Short, human-readable reference: SQ-YYMMDD-XXXX
  const now = new Date();
  const yy = String(now.getFullYear()).slice(-2);
  const mm = String(now.getMonth() + 1).padStart(2, "0");
  const dd = String(now.getDate()).padStart(2, "0");
  const rand = Math.random().toString(36).slice(2, 6).toUpperCase();
  return `SQ-${yy}${mm}${dd}-${rand}`;
}
