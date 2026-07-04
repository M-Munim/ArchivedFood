"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { IoClose } from "react-icons/io5";
import facBadge from "@/../public/images/Group 3.png";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, [tabindex]:not([tabindex="-1"])';

const field =
  "h-[48px] w-full border border-ink/80 bg-white px-4 text-[16px] text-ink placeholder:text-ink focus:outline-none focus:ring-2 focus:ring-brand-orange";

export function WaitlistModal({ onClose }: { onClose: () => void }) {
  const [done, setDone] = useState(false);
  const [values, setValues] = useState({ first: "", email: "", zip: "" });
  const dialogRef = useRef<HTMLDivElement>(null);
  const firstFieldRef = useRef<HTMLInputElement>(null);

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

  return (
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
        aria-labelledby="waitlist-dialog-title"
        className="relative max-h-[calc(100vh-2rem)] w-full max-w-[760px] overflow-y-auto bg-brand-cream px-5 py-10 shadow-2xl sm:px-12 sm:py-12"
      >
        <button
          type="button"
          onClick={onClose}
          aria-label="Close"
          className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-ink transition-colors hover:bg-white/60"
        >
          <IoClose className="h-7 w-7" aria-hidden="true" />
        </button>

        {done ? (
          <div className="text-left">
            <p role="status" className="sr-only">
              You&rsquo;re on the waitlist. Below is a note you can send to your
              center&rsquo;s director.
            </p>

            <p className="text-[11px] font-bold uppercase tracking-[0.12em] text-ink/60">
              Subject:
            </p>
            <h2
              id="waitlist-dialog-title"
              className="mt-2 font-serif text-[22px] font-bold leading-[1.15] text-ink sm:text-[27px]"
            >
              Something I&rsquo;d love for our center to look into
            </h2>

            <div className="mt-5 space-y-4 text-[15px] leading-[1.5] text-ink">
              <p>Hi [Director Name],</p>
              <p>
                I came across something recently called Food Allergy Certified.
                It&rsquo;s a certification specifically for childcare centers
                that trains staff on food allergy safety and gives centers a way
                to show families they&rsquo;re prepared.
              </p>
              <p>
                As a parent of a child with food allergies, this kind of
                certification would mean a lot to me. And I think it would help
                our center stand out to other families like mine who look for
                exactly this when choosing where to enroll.
              </p>
              <p>
                I thought it might be worth a look. You can learn more at{" "}
                <span className="font-bold">foodallergycertified.com.</span>
              </p>
            </div>

            <div className="mt-4 flex items-end justify-between gap-4">
              <div className="space-y-4 text-[15px] leading-[1.5] text-ink">
                <p>Thank you for everything you do for our kids.</p>
                <p>{values.first.trim() || "[Parent Name]"}</p>
              </div>
              <Image
                src={facBadge}
                alt="Food Allergy Certified"
                className="h-auto w-[84px] shrink-0 sm:w-[96px]"
              />
            </div>
          </div>
        ) : (
          <>
            <h2
              id="waitlist-dialog-title"
              className="pr-8 text-center font-serif text-[24px] font-bold leading-[1.15] text-ink sm:text-[28px]"
            >
              Join the waitlist
            </h2>
            <p className="mx-auto mt-2 max-w-[380px] text-center text-[15px] leading-[1.3] text-ink/80">
              We&rsquo;ll let you know the moment a certified center opens in
              your area.
            </p>

            <form
              className="mx-auto mt-7 max-w-[540px] space-y-[10px]"
              onSubmit={(e) => {
                e.preventDefault();
                if (values.first && values.email && values.zip) setDone(true);
              }}
            >
              <label className="sr-only" htmlFor="wl-first">
                First name
              </label>
              <input
                id="wl-first"
                ref={firstFieldRef}
                name="firstName"
                autoComplete="given-name"
                className={field}
                placeholder="first name"
                value={values.first}
                onChange={(e) =>
                  setValues((v) => ({ ...v, first: e.target.value }))
                }
                required
              />
              <label className="sr-only" htmlFor="wl-email">
                Email address
              </label>
              <input
                id="wl-email"
                name="email"
                type="email"
                autoComplete="email"
                className={field}
                placeholder="email address"
                value={values.email}
                onChange={(e) =>
                  setValues((v) => ({ ...v, email: e.target.value }))
                }
                required
              />
              <label className="sr-only" htmlFor="wl-zip">
                Zip code
              </label>
              <input
                id="wl-zip"
                name="postalCode"
                inputMode="numeric"
                autoComplete="postal-code"
                className={field}
                placeholder="zip code"
                value={values.zip}
                onChange={(e) =>
                  setValues((v) => ({ ...v, zip: e.target.value }))
                }
                required
              />
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="h-[44px] rounded-full bg-ink px-7 text-[15px] font-medium text-white transition-colors hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
                >
                  Join the waitlist
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
