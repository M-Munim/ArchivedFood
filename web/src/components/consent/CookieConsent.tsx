"use client";

import Link from "next/link";
import { setConsent, useConsent } from "@/lib/consent";

/**
 * Accessible cookie-consent banner. It appears only until the visitor makes a
 * choice; non-essential (analytics) cookies stay off unless they select Accept.
 * The choice is persisted and broadcast to the analytics loader (see Analytics).
 */
export function CookieConsent() {
  const consent = useConsent();

  // Hidden during SSR/first paint and after a choice has been recorded.
  if (consent !== null) return null;

  const choose = (value: "accepted" | "declined") => setConsent(value);

  return (
    <div
      role="dialog"
      aria-modal="false"
      aria-labelledby="cookie-consent-title"
      aria-describedby="cookie-consent-desc"
      className="fixed inset-x-0 bottom-0 z-[90] px-4 pb-4 sm:px-6 sm:pb-6"
    >
      <div className="mx-auto flex max-w-4xl flex-col gap-4 rounded-2xl border border-black/10 bg-white p-5 shadow-xl sm:flex-row sm:items-center sm:gap-6 sm:p-6">
        <div className="flex-1">
          <h2 id="cookie-consent-title" className="font-serif text-lg font-bold text-ink">
            We value your privacy
          </h2>
          <p id="cookie-consent-desc" className="mt-1 text-sm leading-[1.5] text-ink/75">
            We use essential cookies to run this site and, with your consent,
            analytics cookies to improve it. You can change your choice any time.{" "}
            <Link href="/cookies" className="font-semibold text-brand-teal underline">
              Cookie Policy
            </Link>
          </p>
        </div>
        <div className="flex shrink-0 gap-3">
          <button
            type="button"
            onClick={() => choose("declined")}
            className="rounded-full border border-ink/25 px-5 py-2.5 text-sm font-semibold text-ink transition hover:bg-black/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
          >
            Decline
          </button>
          <button
            type="button"
            onClick={() => choose("accepted")}
            className="rounded-full bg-brand-teal px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-brand-teal-dark focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal focus-visible:ring-offset-2"
          >
            Accept
          </button>
        </div>
      </div>
    </div>
  );
}
