import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CertifyButton } from "./CertifyButton";
import desktopHeroImg from "@/../public/images/HomeGroup 1.png";
import mobileHeroImg from "@/../public/images/Frame 118.png";

export function Hero() {
  return (
    <section className="relative overflow-hidden lg:min-h-[672px]">
      {/* The mobile and desktop compositions use purpose-built image crops. */}
      <Image
        src={mobileHeroImg}
        alt="A childcare teacher greeting a smiling boy wearing a backpack"
        priority
        sizes="100vw"
        className="h-auto w-full sm:hidden"
      />

      <div className="relative hidden h-[420px] w-full sm:block lg:absolute lg:top-0 lg:bottom-13 lg:right-0 lg:h-auto lg:w-[54%]">
        <Image
          src={desktopHeroImg}
          alt="A childcare teacher kneeling to greet a smiling boy wearing a backpack"
          fill
          priority
          sizes="(max-width: 1024px) 100vw, 55vw"
          className="object-contain object-center lg:object-top-right"
        />
      </div>

      {/* Copy */}
      <div className="relative mx-auto -mt-4 max-w-[1280px] px-5 sm:mt-0 sm:px-6 lg:px-10 ">
        <div className="mx-auto w-full max-w-[360px] pb-7 text-center sm:max-w-none sm:py-8 lg:mx-0 lg:max-w-[clamp(380px,43vw_-_40px,640px)] lg:pb-20 lg:pt-[128px] lg:text-left">
          {/* Mobile wraps are locked with `sm:hidden` breaks so the headline reads
              exactly as the Figma; the `hidden lg:block` breaks drive the desktop
              wrap. The sm/tablet range wraps naturally (both sets hidden). */}
          <h1 className="font-serif text-[30px] font-extrabold leading-[1.05] text-brand-orange sm:text-[52px] lg:text-[clamp(2rem,3.7vw_-_5px,54px)]">
            The standard of{" "}
            <br className="sm:hidden" />
            care{" "}
            <br className="hidden lg:block" />
            for children{" "}
            <br className="sm:hidden" />
            with{" "}
            <br className="hidden lg:block" />
            food allergies.
          </h1>

          {/* Client-flagged: must read in 3 lines on mobile, matching the Figma.
              `sm:hidden` breaks lock the wrap; the widened column above gives the
              lines room so nothing soft-wraps into a 4th line. */}
          <p className="mx-auto mt-7 max-w-2xl text-body text-ink sm:mt-6 lg:mx-0 lg:mt-7">
            Food Allergy Certified helps childcare{" "}
            <br className="sm:hidden" />
            centers become the place food allergy{" "}
            <br className="sm:hidden" />
            families trust, choose, and never leave.
          </p>

          <p className="mx-auto mt-2.5 max-w-xl text-body font-semibold text-ink sm:mt-5 lg:mx-0">
            The only food allergy certification{" "}
            <br className="sm:hidden" />
            designed for childcare centers.
          </p>

          <div className="mx-auto mt-[15px] flex w-full max-w-[268px] flex-col gap-3.5 sm:mt-8 sm:max-w-none sm:flex-row sm:flex-wrap sm:justify-center sm:gap-4 lg:mx-0 lg:justify-start lg:gap-3">
            <CertifyButton
              size="hero"
              className="min-h-[45px] w-full whitespace-nowrap sm:w-auto lg:px-5 lg:text-[15px]"
            />
            <Button
              href="/for-parents"
              variant="outline"
              size="hero"
              className="min-h-[45px] w-full whitespace-nowrap sm:w-auto lg:px-5 lg:text-[15px]"
            >
              I&rsquo;m a parent, keep me posted
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
