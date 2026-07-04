import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import waitBackdrop from "@/../public/images/Group 4.png";

export function WhileYouWait() {
  return (
    <section
      id="while-you-wait"
      className="scroll-mt-[76px] bg-white pb-0 pt-7 sm:py-[17px]"
    >
      <div className="relative mx-auto w-full max-w-[630px] sm:w-[calc(100%-32px)]">
        <Image
          src={waitBackdrop}
          alt=""
          sizes="(min-width: 640px) 630px, 100vw"
          data-testid="while-you-wait-backdrop"
          className="block h-auto w-full"
        />

        <div className="absolute inset-0 z-10 px-[8%] pt-[17%] text-center sm:px-[11%] sm:pt-[23%]">
          <Eyebrow>While You Wait</Eyebrow>
          <h2 className="mt-2 font-serif text-[25px] font-bold leading-[1.15] text-brand-blue sm:mt-4 sm:text-[32px] sm:text-ink">
            <span className="block">Is your current center</span>
            <span className="block">not certified yet?</span>
          </h2>
          <p className="mx-auto mt-2 max-w-[310px] text-[16px] leading-[1.3] text-ink sm:mt-9 sm:max-w-[480px] sm:text-[20px]">
            <span className="block sm:inline">
              A lot of centers get certified
            </span>{" "}
            <span className="block sm:inline">because one parent asked.</span>{" "}
            <span className="block sm:inline">
              Share this with your director and
            </span>{" "}
            <span className="block sm:inline">
              let them know it matters to you.
            </span>
          </p>
          <div className="mt-2 flex justify-center sm:mt-8">
            <Button
              href="/nominate"
              variant="mint"
              className="h-[48px] w-[228px] !bg-white !px-0 !py-0 !text-[16px] !font-medium hover:!bg-white/80 sm:h-auto sm:w-auto sm:!px-7 sm:!py-3.5 sm:!text-[17px] sm:!font-semibold"
            >
              Send my center a note
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
