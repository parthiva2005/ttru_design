import clsx, { type ClassValue } from "clsx";

/** Tiny className combinator. */
export function cn(...inputs: ClassValue[]): string {
  return clsx(inputs);
}
