import Image from "next/image";
import { Button } from "@/components/ui/Button";
import wave from "@/../public/images/Vector.png";

export function CertHero() {
  return (
    <section className="relative min-h-[576px] overflow-hidden bg-brand-sky">
      <Image
        src={wave}
        alt=""
        priority
        data-testid="certification-wave"
        sizes="(min-width: 1024px) 43vw, 80vw"
        className="pointer-events-none absolute -top-8 right-0 h-[24vw] w-[80vw] sm:-top-12 sm:h-[16vw] sm:w-[55vw] lg:-top-14 lg:h-[10vw] lg:w-[43vw]"
      />

      <div className="relative z-10 mx-auto max-w-[940px] px-6 pb-16 pt-20 text-center">
        <h1 className="mx-auto max-w-[700px] font-serif text-[40px] font-extrabold leading-[1.02] text-brand-blue sm:text-[56px]">
          <span className="block">6 modules.</span>
          <span className="block">1 final exam.</span>
          <span className="block">A certification that</span>
          <span className="block">means something.</span>
        </h1>

        <p className="mx-auto mt-7 max-w-[850px] text-lg leading-[1.35] text-ink sm:text-xl">
          FAC was built specifically for childcare professionals. Not a generic
          food safety course. Not a restaurant compliance checklist. This is the
          standard of care for food allergy safety in childcare settings, built
          around the real situations caregivers face every day.
        </p>

        <div className="mt-8 flex justify-center">
          <Button href="/book-a-call">Get your center certified</Button>
        </div>
      </div>
    </section>
  );
}
