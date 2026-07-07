import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WaitlistButton } from "@/components/home/WaitlistButton";
import { Notch } from "./Notch";
import heroImg from "@/../public/images/Group 5.png";

export function DirectorsHero() {
  return (
    <section className="relative bg-brand-teal-dark pb-6 sm:pb-16">
      {/* The source asset is essentially square, so at full width it renders too
          tall. Trim only the top (ceiling) via object-bottom so the blob's
          bottom curve and the reaching hand stay fully visible — matching the
          Figma, which keeps the full bottom. */}
      <Image
        src={heroImg}
        alt="Parents and young children gathering at a childcare center"
        priority
        sizes="100vw"
        className="aspect-[5/4] w-full object-cover object-bottom sm:hidden"
      />

      <div className="mx-auto w-full max-w-[391px] px-6 pb-4 pt-5 sm:hidden">
        {/* Wrap locked to the Figma's 4 lines (single trailing period). */}
        <h1 className="font-serif text-[31px] font-extrabold leading-[0.98] text-white">
          One new
          <br />
          enrollment pays for
          <br />
          this. The peace of
          <br />
          mind is priceless.
        </h1>

        <p className="mt-7 text-[15px] leading-[1.24] text-white/90">
          Food Allergy Certified gives your team the training, your center the
          credentials, and food allergy families the reason they&rsquo;ve been
          looking for to choose you and stay.
        </p>

        {/* Both buttons share one fixed width and centre, matching the Figma
            (equal width, ~60% of the frame — not the full-width stack, and not
            auto-hugging where the two ended up different sizes). */}
        <div className="mt-7 flex flex-col items-center gap-4">
          <WaitlistButton
            variant="outlineLight"
            size="hero"
            className="min-h-[45px] w-[240px]"
          />
          <Button
            href="/for-directors#assessment"
            variant="mint"
            size="hero"
            className="min-h-[45px] w-[240px] bg-white hover:bg-white/85"
          >
            Take the assessment
          </Button>
        </div>
      </div>

      <div className="hidden items-center gap-8 sm:grid lg:grid-cols-2 lg:gap-0">
        {/* Copy */}
        <div className="w-full max-w-[660px] justify-self-end px-6 pt-12 pb-14 sm:px-8 lg:py-20 lg:pr-4 lg:pl-10">
          <h1 className="font-serif text-[42px] font-extrabold leading-[1.05] text-white sm:text-[52px] lg:text-[56px]">
            One new enrollment pays for this. The peace of mind is priceless.
          </h1>

          <p className="mt-7 max-w-xl text-body text-white/90">
            Food Allergy Certified gives your team the training, your center the
            credentials, and food allergy families the reason they&rsquo;ve been
            looking for to choose you and stay.
          </p>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <WaitlistButton variant="outlineLight" />
            <Button
              href="/for-directors#assessment"
              variant="mint"
              className="bg-white hover:bg-white/85"
            >
              Take the assessment
            </Button>
          </div>
        </div>

        {/* Transparent blob image sits flush against the right viewport edge. */}
        <div className="relative ml-auto w-full max-w-[680px]">
          <Image
            src={heroImg}
            alt="Parents and young children gathering at a childcare center"
            priority
            sizes="(max-width: 1024px) 100vw, 680px"
            className="h-auto w-full"
          />
        </div>
      </div>

      <Notch colorClass="text-brand-teal-dark" />
    </section>
  );
}
