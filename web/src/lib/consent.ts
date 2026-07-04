/**
 * Shared client-side cookie-consent state. Non-essential cookies (analytics)
 * default to OFF until the visitor explicitly accepts. The choice is stored in
 * localStorage and broadcast via a custom event so the analytics loader can
 * react without a page reload.
 */
import { useSyncExternalStore } from "react";

export type ConsentValue = "accepted" | "declined";

export const CONSENT_KEY = "fac-cookie-consent";
export const CONSENT_EVENT = "fac-consent-change";

export function getConsent(): ConsentValue | null {
  if (typeof window === "undefined") return null;
  try {
    const v = window.localStorage.getItem(CONSENT_KEY);
    return v === "accepted" || v === "declined" ? v : null;
  } catch {
    return null;
  }
}

export function setConsent(value: ConsentValue): void {
  if (typeof window === "undefined") return;
  try {
    window.localStorage.setItem(CONSENT_KEY, value);
  } catch {
    // Storage may be unavailable (private mode, blocked). Still broadcast so the
    // current page reacts for this session.
  }
  window.dispatchEvent(new CustomEvent(CONSENT_EVENT, { detail: value }));
}

function subscribe(callback: () => void): () => void {
  window.addEventListener(CONSENT_EVENT, callback);
  window.addEventListener("storage", callback);
  return () => {
    window.removeEventListener(CONSENT_EVENT, callback);
    window.removeEventListener("storage", callback);
  };
}

/**
 * React hook for the current consent value. Uses useSyncExternalStore so it
 * stays in sync across the consent banner, the analytics loader, and other tabs
 * without effects. Returns null during SSR and until a choice is made.
 */
export function useConsent(): ConsentValue | null {
  return useSyncExternalStore(subscribe, getConsent, () => null);
}
