"use client";

import Image from "next/image";
import { useRef, useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { NominateModal } from "./NominateModal";
import trumpet from "@/../public/images/Trumpet 1.png";

export function NominateCenter({
  className = "bg-brand-brightblue",
}: {
  /** Section background utility. Defaults to the For Directors blue. */
  className?: string;
} = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const triggerRef = useRef<HTMLDivElement>(null);

  function closeModal() {
    setIsOpen(false);
    triggerRef.current?.querySelector("button")?.focus();
  }

  return (
    <>
      <section
        className={`relative overflow-hidden py-14 sm:py-16 ${className}`}
      >
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

      {isOpen && <NominateModal onClose={closeModal} />}
    </>
  );
}
