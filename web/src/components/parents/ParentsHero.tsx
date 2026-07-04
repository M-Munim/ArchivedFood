"use client";

import { useState } from "react";
import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { WaitlistModal } from "@/components/parents/WaitlistModal";
import heroImg from "@/../public/images/Asset 1@4x 2.png";
import parentWave from "@/../public/images/forParent.png";

function WaitlistTrigger({ onOpen }: { onOpen: () => void }) {
  return (
    <div className="mt-10">
      <button
        type="button"
        onClick={onOpen}
        className="h-[44px] rounded-full bg-ink px-7 text-[15px] font-medium text-white transition-colors hover:bg-black/80 focus-visible:ring-2 focus-visible:ring-brand-orange focus-visible:ring-offset-2"
      >
        Join the waitlist
      </button>
    </div>
  );
}

export function ParentsHero() {
  const [open, setOpen] = useState(false);

  return (
    <section className="overflow-hidden bg-white pb-4">
      <div className="sm:hidden">
        <div className="relative">
          <Image
            src={heroImg}
            alt="A young child eating a cracker at the table"
            priority
            sizes="100vw"
            data-testid="parents-hero-image"
            className="block h-[294px] w-full object-cover object-center"
          />
          <Image
            src={parentWave}
            alt=""
            sizes="100vw"
            data-testid="parents-wave"
            className="pointer-events-none absolute inset-x-0 bottom-0 h-auto w-full"
          />
        </div>

        <Container className="pb-0 pt-3 text-center">
          <h1 className="mx-auto max-w-[316px] font-serif text-[28px] font-extrabold leading-[1.02] text-brand-teal">
            <span className="block">You should not</span>
            <span className="block">have to wonder if</span>
            <span className="block">your child is safe.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-[322px] text-[16px] leading-[1.2] text-ink">
            We are building a national directory of FAC Certified childcare
            centers. Places where the staff is trained, the protocols are in
            place, and food allergy children are truly looked after.
          </p>

          <p className="mx-auto mt-5 max-w-[322px] text-[16px] font-semibold leading-[1.2] text-ink">
            Join the waitlist and we will let you know the moment a certified
            center opens in your area.
          </p>

          <div id="waitlist" className="scroll-mt-24">
            <WaitlistTrigger onOpen={() => setOpen(true)} />
          </div>
        </Container>
      </div>

      <div className="hidden sm:block">
        <div className="relative">
          <Image
            src={heroImg}
            alt="A young child eating a cracker at the table"
            priority
            sizes="100vw"
            data-testid="parents-hero-image"
            className="block h-[420px] w-full object-cover object-center sm:h-auto"
          />
          <Image
            src={parentWave}
            alt=""
            sizes="100vw"
            data-testid="parents-wave"
            className="pointer-events-none absolute inset-x-0 -bottom-[37px] h-auto w-full"
          />
        </div>

        <Container className="relative -mt-[calc(24vw+10px)] pb-0 text-center">
          <h1 className="mx-auto font-serif text-[38px] font-extrabold leading-[1.08] text-brand-teal sm:text-[52px]">
            <span className="block">You should not</span>
            <span className="block">have to wonder if your</span>
            <span className="block">child is safe.</span>
          </h1>

          <p className="mx-auto mt-7 max-w-[620px] text-lg leading-[1.35] text-ink sm:text-xl">
            We are building a national directory of FAC Certified childcare
            centers. Places where the staff is trained, the protocols are in
            place, and food allergy children are truly looked after.
          </p>

          <p className="mx-auto mt-6 max-w-[620px] text-lg font-semibold leading-[1.35] text-ink sm:text-xl">
            Join the waitlist and we will let you know the moment a certified
            center opens in your area.
          </p>

          <div id="waitlist" className="scroll-mt-24">
            <WaitlistTrigger onOpen={() => setOpen(true)} />
          </div>
        </Container>
      </div>

      {open && <WaitlistModal onClose={() => setOpen(false)} />}
    </section>
  );
}
