import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { WaitlistButton } from "@/components/home/WaitlistButton";
import { Notch } from "./Notch";
import heroImg from "@/../public/images/Group 5.png";

export function DirectorsHero() {
  return (
    <section className="relative bg-brand-teal-dark pb-16">
      <Image
        src={heroImg}
        alt="Parents and young children gathering at a childcare center"
        priority
        sizes="100vw"
        className="h-auto w-full sm:hidden"
      />

      <div className="mx-auto w-full max-w-[343px]  pb-9 pt-5 sm:hidden">
        <h1 className="font-serif text-[31px] font-extrabold leading-[0.98] text-white">
          One new enrollment pays for this. The peace of mind is priceless..
        </h1>

        <p className="mt-7 text-[15px] leading-[1.24] text-white/90">
          Food Allergy Certified gives your team the training, your center the
          credentials, and food allergy families the reason they&rsquo;ve been
          looking for to choose you and stay.
        </p>

        <div className="mt-7 flex flex-col gap-4">
          <WaitlistButton
            variant="outlineLight"
            size="hero"
            className="min-h-[45px] w-full"
          />
          <Button
            href="/for-directors#assessment"
            variant="mint"
            size="hero"
            className="min-h-[45px] w-full bg-white hover:bg-white/85"
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
