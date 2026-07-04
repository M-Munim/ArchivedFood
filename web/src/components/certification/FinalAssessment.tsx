import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import certBadge from "@/../public/images/Group 3.png";
import introBackground from "@/../public/images/Intro Background Shape.png";
import allergist from "@/../public/images/allergist.jpeg";

export function FinalAssessment() {
  return (
    <section className="bg-brand-sky pt-8">
      <div className="mx-auto max-w-[980px] px-6 text-center">
        <Image
          src={certBadge}
          alt="Food Allergy Certified — 2026 Certified Center badge"
          width={180}
          height={Math.round((certBadge.height / certBadge.width) * 180)}
          className="mx-auto"
        />

        <Eyebrow className="mt-8">The Final Assessment</Eyebrow>
        <h2 className="mt-3 font-serif text-[30px] font-bold leading-tight text-ink sm:text-[34px]">
          Certification is earned, not assumed.
        </h2>
        <p className="mx-auto mt-8 max-w-[920px] text-lg leading-[1.25] text-ink sm:text-[20px]">
          Every staff member takes a final assessment before receiving their
          individual certificate. Centers receive official FAC Certified status
          once all designated staff have passed. This is what separates FAC from
          a video someone watched. The exam is what makes the certification
          worth something.
        </p>

        {/* Expert card */}
        <div className="mx-auto mt-8 max-w-[350px] overflow-hidden rounded-[24px] border border-ink bg-transparent text-left">
          <div className="px-5 py-5">
            <h3 className="text-center text-[21px] font-semibold leading-tight text-ink">
              An expert weighs in
            </h3>
            <p className="mt-3 text-[18px] leading-[1.2] text-ink">
              The FAC standard has been reviewed by a board-certified pediatric
              allergist to ensure clinical accuracy across all six modules.
            </p>
          </div>
          <div className="flex min-h-[85px] items-center bg-ink text-left text-white">
            <Image
              src={allergist}
              alt="Portrait of the reviewing pediatric allergist"
              width={85}
              height={85}
              className="h-[85px] w-[85px] shrink-0 object-cover"
            />
            <div className="px-5 py-3">
              <p className="text-[16px] font-semibold leading-tight">
                Board-certified pediatric allergist
              </p>
              <p className="mt-1 text-[15px] leading-tight text-white/80">
                Clinical reviewer, FAC certification standard
              </p>
            </div>
          </div>
        </div>
      </div>

      <Image
        src={introBackground}
        alt="A certified center storefront displaying the Food Allergy Certified decal"
        data-testid="intro-background-shape"
        sizes="100vw"
        className="h-auto w-full"
      />
    </section>
  );
}
