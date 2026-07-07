"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { IoClose } from "react-icons/io5";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { NominateForm } from "./NominateForm";
import trumpet from "@/../public/images/Trumpet 1.png";

const FOCUSABLE_SELECTOR =
  'input, textarea, button:not([disabled]), a[href], [tabindex]:not([tabindex="-1"])';

function NominationModal({ onClose }: { onClose: () => void }) {
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

  return (
    <div
      className="fixed inset-0 z-[120] flex items-center justify-center overflow-y-auto bg-brand-brightblue/95 p-6"
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
        className="relative my-auto w-full max-w-[500px] rounded-2xl bg-[#effafa] px-6 pb-6 pt-5 shadow-xl"
      >
        <div className="flex items-start justify-between gap-4">
          <h2
            id="nomination-dialog-title"
            className="font-serif text-[22px] font-bold leading-tight text-ink"
          >
            Nominate a childcare center
          </h2>
          <button
            ref={closeButtonRef}
            type="button"
            onClick={onClose}
            aria-label="Close nomination form"
            className="-mr-1 -mt-1 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-ink transition-colors hover:bg-black/10"
          >
            <IoClose className="h-8 w-8" aria-hidden="true" />
          </button>
        </div>

        <p
          id="nomination-dialog-description"
          className="mt-2.5 text-xs font-semibold leading-tight text-ink"
        >
          Help make childcare safer by nominating a center for our certification
          program.
        </p>

        <div className="mt-4">
          <NominateForm compact />
        </div>
      </div>
    </div>
  );
}

export function NominateCenter() {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  function closeModal() {
    setIsOpen(false);
    triggerRef.current?.querySelector("button")?.focus();
  }

  return (
    <>
      <section className="relative overflow-hidden bg-brand-brightblue py-14 sm:py-16">
        <Container className="px-6 sm:hidden">
          <div className="mx-auto max-w-[308px]">
            {/* Eyebrow spans the full width on one line (matching the Figma);
                fluid-sized so it never wraps on narrow phones. */}
            <Eyebrow className="whitespace-nowrap text-[clamp(11px,3.6vw,14px)]">
              Nominate a Childcare Center
            </Eyebrow>
            <div className="mt-3 grid grid-cols-[1fr_96px] items-start gap-2">
              {/* Heading locked to the Figma's 3-line wrap, beside the megaphone. */}
              <h2 className="font-serif text-[27px] font-bold leading-[1.05] text-ink">
                Know a center
                <br />
                that should be
                <br />
                certified?
              </h2>

              {/* Larger than its 96px grid cell and allowed to bleed right into
                  the section, so it reads bigger without shrinking the heading
                  column (max-w-none beats Tailwind's default img max-width). */}
              <Image
                src={trumpet}
                alt=""
                data-testid="trumpet-artwork"
                sizes="114px"
                className="mt-1 h-auto w-[114px] max-w-none"
              />
            </div>

            {/* Body wrap locked to the Figma's 3 lines. */}
            <p className="mt-6 text-[15px] leading-[1.18] text-ink">
              Nominate them for our pilot
              <br />
              program and they could receive
              <br />
              free certification for their entire staff.
            </p>

            <div ref={triggerRef} className="mt-8 flex justify-center">
              <Button
                type="button"
                variant="mint"
                size="hero"
                aria-haspopup="dialog"
                aria-expanded={isOpen}
                onClick={() => setIsOpen(true)}
                className="min-h-[45px] min-w-[188px] bg-white px-8 hover:bg-white/85"
              >
                Nominate a center
              </Button>
            </div>
          </div>
        </Container>

        <Container className="hidden max-w-[1180px] sm:block">
          <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,1fr)_230px] lg:gap-16">
            <div>
              <Eyebrow>Nominate a Childcare Center</Eyebrow>
              <h2 className="mt-3 font-serif text-[32px] font-bold leading-[1.15] text-ink sm:text-[34px] xl:whitespace-nowrap">
                Know a center that should be certified?
              </h2>
              <p className="mt-5 text-body text-ink">
                Nominate them for our pilot program and they could receive free
                certification for their entire staff.
              </p>
              <div ref={triggerRef} className="mt-6">
                <Button
                  type="button"
                  variant="mint"
                  size="sm"
                  aria-haspopup="dialog"
                  aria-expanded={isOpen}
                  onClick={() => setIsOpen(true)}
                  className="bg-white !px-6 !py-3 text-base hover:bg-white/85"
                >
                  Nominate a center
                </Button>
              </div>
            </div>

            <div className="flex justify-center lg:justify-end">
              <Image
                src={trumpet}
                alt=""
                data-testid="trumpet-artwork"
                sizes="(min-width: 1024px) 210px, 180px"
                className="h-auto w-[180px] sm:w-[200px] lg:w-[210px]"
              />
            </div>
          </div>
        </Container>
      </section>

      {isOpen && <NominationModal onClose={closeModal} />}
    </>
  );
}
