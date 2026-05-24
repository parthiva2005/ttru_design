import { promises as fs } from "node:fs";
import path from "node:path";
import type { BookingPayload } from "./booking-schema";

/**
 * Tiny file-backed booking store. In production this becomes a Sanity
 * mutation or a row in the operational database; here it persists to
 * a JSON file under `.data/bookings.json` so submissions survive across
 * dev-server reloads without requiring any external service.
 */

const DATA_DIR = path.join(process.cwd(), ".data");
const DATA_FILE = path.join(DATA_DIR, "bookings.json");

export interface StoredBooking extends BookingPayload {
  reference: string;
  receivedAt: string;
  fileCount: number;
}

async function ensureFile() {
  await fs.mkdir(DATA_DIR, { recursive: true });
  try {
    await fs.access(DATA_FILE);
  } catch {
    await fs.writeFile(DATA_FILE, "[]", "utf8");
  }
}

export async function readBookings(): Promise<StoredBooking[]> {
  await ensureFile();
  const raw = await fs.readFile(DATA_FILE, "utf8");
  try {
    const parsed = JSON.parse(raw) as unknown;
    return Array.isArray(parsed) ? (parsed as StoredBooking[]) : [];
  } catch {
    return [];
  }
}

export async function appendBooking(
  booking: BookingPayload,
  fileCount: number,
): Promise<StoredBooking> {
  await ensureFile();
  const existing = await readBookings();
  const stored: StoredBooking = {
    ...booking,
    reference: generateReference(),
    receivedAt: new Date().toISOString(),
    fileCount,
  };
  existing.push(stored);
  await fs.writeFile(DATA_FILE, JSON.stringify(existing, null, 2), "utf8");
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
