"use client";

import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";

const FOCUSABLE_SELECTOR =
  'a[href], button:not([disabled]), input, textarea, [tabindex]:not([tabindex="-1"])';

const field =
  "h-[48px] w-full border border-ink/80 bg-white px-4 text-[16px] text-ink placeholder:text-ink/60 focus:outline-none focus:ring-2 focus:ring-brand-orange";

/**
 * Popup "Suggest a topic" form for the blog page. Frontend-only: it validates
 * and shows a thank-you state but does not send anywhere yet.
 * TODO(backend): POST the suggestion to an email service / CRM endpoint.
 */
export function SuggestTopicModal({ onClose }: { onClose: () => void }) {
  const [done, setDone] = useState(false);
  const [values, setValues] = useState({ name: "", email: "", topic: "" });
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
        aria-labelledby="suggest-topic-title"
        className="relative max-h-[calc(100vh-2rem)] w-full max-w-[560px] overflow-y-auto rounded-2xl bg-brand-cream px-5 py-10 shadow-2xl sm:px-12 sm:py-12"
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
          <div className="text-center">
            <h2
              id="suggest-topic-title"
              className="font-serif text-[24px] font-bold leading-[1.15] text-ink sm:text-[28px]"
            >
              Thanks, {values.name.trim() || "friend"}!
            </h2>
            <p role="status" className="mx-auto mt-3 max-w-[400px] text-[15px] leading-[1.4] text-ink/80">
              We&rsquo;ve got your topic suggestion. If we turn it into an
              article, we&rsquo;ll be sure to make it a good one.
            </p>
          </div>
        ) : (
          <>
            <h2
              id="suggest-topic-title"
              className="pr-8 text-center font-serif text-[24px] font-bold leading-[1.15] text-ink sm:text-[28px]"
            >
              Suggest a topic
            </h2>
            <p className="mx-auto mt-2 max-w-[400px] text-center text-[15px] leading-[1.3] text-ink/80">
              What would you like us to write about? Tell us and we&rsquo;ll add
              it to our list.
            </p>

            <form
              className="mx-auto mt-7 max-w-[440px] space-y-[10px]"
              onSubmit={(e) => {
                e.preventDefault();
                if (values.name && values.email && values.topic) setDone(true);
              }}
            >
              <label className="sr-only" htmlFor="st-name">
                Name
              </label>
              <input
                id="st-name"
                ref={firstFieldRef}
                name="name"
                autoComplete="name"
                className={field}
                placeholder="name"
                value={values.name}
                onChange={(e) =>
                  setValues((v) => ({ ...v, name: e.target.value }))
                }
                required
              />
              <label className="sr-only" htmlFor="st-email">
                Email address
              </label>
              <input
                id="st-email"
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
              <label className="sr-only" htmlFor="st-topic">
                Suggest a blog topic
              </label>
              <textarea
                id="st-topic"
                name="topic"
                rows={5}
                className={`${field} h-auto resize-y py-3`}
                placeholder="suggest a blog topic"
                value={values.topic}
                onChange={(e) =>
                  setValues((v) => ({ ...v, topic: e.target.value }))
                }
                required
              />
              <div className="pt-4 text-center">
                <button
                  type="submit"
                  className="h-[44px] rounded-full bg-ink px-7 text-[15px] font-medium text-white transition-colors hover:bg-ink focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
                >
                  Send suggestion
                </button>
              </div>
            </form>
          </>
        )}
      </div>
    </div>
  );
}
