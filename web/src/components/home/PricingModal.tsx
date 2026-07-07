"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])';

const field =
  "w-full rounded-xl border border-ink/25 bg-white px-4 py-3 text-[16px] text-ink placeholder:text-ink/45 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30";
const label = "mb-1.5 block text-[15px] font-semibold text-ink";

const EMPTY = {
  name: "",
  email: "",
  phone: "",
  title: "",
  center: "",
  zip: "",
  employees: "",
  message: "",
};

/**
 * "Get your center certified" lead form for centers, opened from the
 * "Get your center certified" CTA. Frontend-only: it validates and shows a
 * success state but does not send anywhere yet.
 * TODO(backend): POST to an email service / CRM endpoint.
 */
export function PricingModal({ onClose }: { onClose: () => void }) {
  const [done, setDone] = useState(false);
  const [values, setValues] = useState(EMPTY);
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

  const set =
    (key: keyof typeof EMPTY) =>
    (
      e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
    ) =>
      setValues((v) => ({ ...v, [key]: e.target.value }));

  // Lock body scroll, focus the first field, and restore focus to the trigger
  // on close.
  useEffect(() => {
    const previouslyFocused = document.activeElement as HTMLElement | null;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    firstFieldRef.current?.focus();

    return () => {
      document.body.style.overflow = previousOverflow;
      previouslyFocused?.focus?.();
    };
  }, []);

  // Escape to close + keep Tab focus inside the dialog.
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        onClose();
        return;
      }

      if (event.key !== "Tab" || !dialogRef.current) return;

      const focusable = Array.from(
        dialogRef.current.querySelectorAll<HTMLElement>(FOCUSABLE_SELECTOR),
      );
      if (focusable.length === 0) return;

      const first = focusable[0];
      const last = focusable[focusable.length - 1];

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => document.removeEventListener("keydown", handleKeyDown);
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center bg-black/65 p-4 sm:p-6"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="pricing-dialog-title"
        className="relative max-h-[calc(100vh-2rem)] w-full max-w-[560px] overflow-y-auto rounded-2xl bg-white px-5 py-8 shadow-2xl sm:px-9 sm:py-10"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-ink/60 transition-colors hover:bg-ink/5 hover:text-ink"
        >
          <IoClose className="h-7 w-7" aria-hidden="true" />
        </button>

        {done ? (
          <div className="py-4 text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal text-white">
              <svg
                viewBox="0 0 24 24"
                className="h-7 w-7"
                fill="none"
                stroke="currentColor"
                strokeWidth={2.5}
                strokeLinecap="round"
                strokeLinejoin="round"
                aria-hidden="true"
              >
                <path d="M20 6L9 17l-5-5" />
              </svg>
            </div>
            <h2
              id="pricing-dialog-title"
              className="mt-5 font-serif text-[24px] font-bold text-brand-teal-dark"
            >
              Thanks, {values.name.trim() || "friend"}!
            </h2>
            <p role="status" className="mt-3 text-[15px] leading-[1.5] text-ink">
              We&rsquo;ve got your request and will get back to you with pricing
              details within one business day.
            </p>
          </div>
        ) : (
          <>
            <h2
              id="pricing-dialog-title"
              className="pr-8 font-serif text-[26px] font-bold leading-[1.15] text-brand-teal-dark sm:text-[30px]"
            >
              Get your center certified
            </h2>
            <p className="mt-2.5 text-[15px] leading-[1.4] text-ink/70">
              Fill out the form below and we&rsquo;ll get back to you with
              pricing details and information to get started.
            </p>

            <form
              className="mt-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                if (values.name.trim() && values.email.trim()) setDone(true);
              }}
            >
              <div>
                <label className={label} htmlFor="pr-name">
                  Name
                </label>
                <input
                  id="pr-name"
                  ref={firstFieldRef}
                  name="name"
                  autoComplete="name"
                  className={field}
                  value={values.name}
                  onChange={set("name")}
                  required
                />
              </div>

              <div>
                <label className={label} htmlFor="pr-email">
                  Email
                </label>
                <input
                  id="pr-email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  className={field}
                  value={values.email}
                  onChange={set("email")}
                  required
                />
              </div>

              <div>
                <label className={label} htmlFor="pr-phone">
                  Phone
                </label>
                <input
                  id="pr-phone"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  className={field}
                  value={values.phone}
                  onChange={set("phone")}
                />
              </div>

              <div>
                <label className={label} htmlFor="pr-title">
                  Your Title
                </label>
                <input
                  id="pr-title"
                  name="title"
                  autoComplete="organization-title"
                  className={field}
                  placeholder="e.g., Director, Owner"
                  value={values.title}
                  onChange={set("title")}
                />
              </div>

              <div>
                <label className={label} htmlFor="pr-center">
                  Childcare Center Name
                </label>
                <input
                  id="pr-center"
                  name="center"
                  autoComplete="organization"
                  className={field}
                  value={values.center}
                  onChange={set("center")}
                />
              </div>

              <div>
                <label className={label} htmlFor="pr-zip">
                  Zip Code / Location
                </label>
                <input
                  id="pr-zip"
                  name="zip"
                  autoComplete="postal-code"
                  inputMode="numeric"
                  className={field}
                  placeholder="e.g., 90210"
                  value={values.zip}
                  onChange={set("zip")}
                />
              </div>

              <div>
                <label className={label} htmlFor="pr-employees">
                  Number of Employees Requiring Certification
                </label>
                <input
                  id="pr-employees"
                  name="employees"
                  type="number"
                  inputMode="numeric"
                  min={1}
                  className={field}
                  placeholder="e.g., 5"
                  value={values.employees}
                  onChange={set("employees")}
                />
              </div>

              <div>
                <label className={label} htmlFor="pr-message">
                  Message <span className="font-normal text-ink/50">(Optional)</span>
                </label>
                <textarea
                  id="pr-message"
                  name="message"
                  rows={4}
                  className={`${field} resize-y`}
                  value={values.message}
                  onChange={set("message")}
                />
              </div>

              <button
                type="submit"
                className="mt-2 w-full rounded-full bg-brand-teal px-8 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-brand-teal-dark focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
              >
                Submit Request
              </button>
            </form>
          </>
        )}
      </div>
    </div>,
    document.body,
  );
}
