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
      <div className="relative mx-auto -mt-4 max-w-[1280px] px-6 sm:mt-0 lg:px-10 ">
        <div className="mx-auto w-full max-w-[306px] pb-7 text-center sm:max-w-none sm:py-8 lg:mx-0 lg:max-w-[clamp(380px,40vw_-_30px,600px)] lg:py-20 lg:text-left">
          <h1 className="font-serif text-[30px] font-extrabold leading-[1.05] text-brand-orange sm:text-[52px] lg:text-[clamp(2rem,4.2vw_-_7px,55px)]">
            The standard of care{" "}
            <br className="hidden lg:block" />
            for children with{" "}
            <br className="hidden lg:block" />
            food allergies.
          </h1>

          <p className="mx-auto mt-7 max-w-2xl text-body text-ink sm:mt-6 lg:mx-0 lg:mt-7">
            Food Allergy Certified helps childcare centers become the place food
            allergy families trust, choose, and never leave.
          </p>

          <p className="mx-auto mt-2.5 max-w-xl text-body font-semibold text-ink sm:mt-5 lg:mx-0">
            The only food allergy certification designed for childcare centers.
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
