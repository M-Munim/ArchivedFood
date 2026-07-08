"use client";

import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { IoClose } from "react-icons/io5";
import { NominateForm } from "./NominateForm";

const FOCUSABLE_SELECTOR =
  'input, textarea, button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

/**
 * Popup version of the "Nominate a childcare center" form. Shared by the
 * For Directors "Nominate a center" CTA and the For Parents "Send my center a
 * note" button so both open the same form in a dialog instead of a page.
 */
export function NominateModal({ onClose }: { onClose: () => void }) {
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    closeButtonRef.current?.focus();

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
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  return createPortal(
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-brand-brightblue/95 p-6 text-left"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget) onClose();
      }}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="nomination-dialog-title"
        aria-describedby="nomination-dialog-description"
        className="relative my-auto w-full max-w-[980px] rounded-3xl bg-[#effafa] px-6 pb-7 pt-6 shadow-xl sm:px-10 sm:py-9"
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="nomination-dialog-title"
            className="font-serif text-[26px] font-bold leading-tight text-ink sm:text-[32px]"
          >
            Nominate a childcare center
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close nomination form"
            className="-mr-1 -mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/10"
          >
            <IoClose className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <p
          id="nomination-dialog-description"
          className="mt-3 text-base font-semibold leading-snug text-ink sm:text-lg"
        >
          Help make childcare safer by nominating a center for our certification
          program.
        </p>

        <div className="mt-7">
          <NominateForm />
        </div>
      </div>
    </div>,
    document.body,
  );
}
