import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import directoryBlob from "@/../public/images/DirectoryVector.png";
import parentsPhoto from "@/../public/images/ForParents.png";
import parentsPhotoMobile from "@/../public/images/Intro Background Shape (1).png";

export function DirectoryPreview() {
  const content = (
    <div className="mx-auto max-w-3xl">
      <Eyebrow>Directory Preview</Eyebrow>
      <h2 className="mt-3 font-serif text-[32px] font-bold text-brand-orange sm:text-[44px]">
        Certified Center Directory
      </h2>
      <p className="mt-4 text-lg font-bold uppercase tracking-wide text-ink">
        Coming Soon
      </p>
      <div className="mt-8 flex justify-center">
        <Button href="/for-parents#waitlist">Join the waitlist</Button>
      </div>
    </div>
  );

  return (
    <section className="bg-white">
      <div className="sm:hidden">
        <Image
          src={directoryBlob}
          alt=""
          aria-hidden="true"
          sizes="100vw"
          className="block h-auto w-full select-none"
        />

        <div className="relative z-10 -mt-[17vw] bg-brand-blush px-4 pb-10 pt-2 text-center">
          <Eyebrow>Directory Preview</Eyebrow>
          <h2 className="mt-4 whitespace-nowrap font-serif text-[26px] font-bold leading-none text-brand-orange">
            Certified Center Directory
          </h2>
          <p className="mt-4 text-[18px] font-bold uppercase tracking-wide text-ink">
            Coming Soon
          </p>
          <div className="mt-3 flex justify-center">
            <Button
              href="/for-parents#waitlist"
              className="h-[48px] w-[174px] !px-0 !py-0 !text-[16px] !font-medium"
            >
              Join the waitlist
            </Button>
          </div>
        </div>

        <Image
          src={parentsPhotoMobile}
          alt="Two children eating cake together at a table"
          sizes="100vw"
          data-testid="directory-preview-mobile-photo"
          className="-mt-px block h-auto w-full bg-brand-blush"
        />
      </div>

      <div className="hidden sm:block">
        {/* Wavy peach crown: transparent corners sit on white, solid peach base.
            It shares brand-blush's fill so anything peach below is seamless. */}
        <div className="relative">
          <Image
            src={directoryBlob}
            alt=""
            aria-hidden="true"
            sizes="100vw"
            className="block w-full select-none"
          />
          {/* Wide screens: the crown is tall enough to hold the copy, so nestle it
              into the crown's lower dip (over peach) to match the design. */}
          <div className="absolute inset-x-0 top-[32%] hidden px-6 text-center lg:block">
            {content}
          </div>
        </div>

        {/* Tablet screens retain the original band treatment. */}
        <div className="-mt-[13vw] bg-brand-blush px-6 pb-10 pt-2 text-center lg:hidden">
          {content}
        </div>

        <Image
          src={parentsPhoto}
          alt="A young girl enjoying a slice of cake at a party table"
          sizes="100vw"
          className="-mt-px block w-full"
        />
      </div>
    </section>
  );
}
