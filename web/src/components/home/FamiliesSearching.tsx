import Image from "next/image";
import { Button } from "@/components/ui/Button";
import { CertifyButton } from "./CertifyButton";
import families from "@/../public/images/Group 1 (1).png";
import mobileFamilies from "@/../public/images/HomeFrame 118.png";

export function FamiliesSearching() {
  return (
    <section className="relative overflow-hidden pb-10">
      <Image
        src={mobileFamilies}
        alt="A childcare teacher greeting a child with a backpack as a parent looks on"
        sizes="100vw"
        className="h-auto w-full sm:hidden"
      />

      <div className="relative mx-auto -mt-4 max-w-[1320px] px-6 sm:hidden">
        <div className="mx-auto w-full max-w-[320px] pb-8 text-center">
          <h2 className="font-serif text-[32px] font-extrabold leading-[1.05] text-brand-teal">
            The families you want are already searching for you
          </h2>

          <p className="mt-7 text-body text-ink">
            Food allergy parents don&rsquo;t just pick a childcare center off a
            list. They research. They visit. They look for proof that your center
            is safe for their child.
          </p>

          <p className="mt-3 text-body font-semibold text-ink">
            Be the center they find and the one they never leave.
          </p>

          <div className="mx-auto mt-8 flex w-full max-w-[289px] flex-col gap-4">
            <Button
              href="/for-directors#assessment"
              size="hero"
              className="min-h-[45px] w-full"
            >
              Take the assessment
            </Button>
            <CertifyButton
              variant="outline"
              size="hero"
              className="min-h-[45px] w-full"
            />
          </div>
        </div>
      </div>

      <div className="relative hidden sm:block lg:min-h-[620px]">
        <div className="relative h-[420px] w-full lg:absolute lg:inset-y-0 lg:right-0 lg:h-full lg:w-[54%]">
          <Image
            src={families}
            alt="A childcare teacher greeting a child with a backpack as a parent looks on"
            fill
            sizes="(max-width: 1024px) 100vw, 55vw"
            className="object-contain object-center lg:object-right"
          />
        </div>

        <div className="relative mx-auto max-w-[1320px] px-8 pb-12 pt-8 text-center lg:px-10">
          <div className="mx-auto w-full max-w-[740px] lg:mx-0 lg:w-[48%] lg:max-w-none lg:py-20 lg:pr-4 lg:text-left">
            <h2 className="font-serif text-[34px] font-extrabold leading-[1.05] text-brand-teal sm:text-[48px] lg:text-[52px]">
              The families you want are already searching for you
            </h2>

            <p className="mx-auto mt-6 max-w-xl text-body text-ink lg:mx-0">
              Food allergy parents don&rsquo;t just pick a childcare center off a
              list. They research. They visit. They look for proof that your center
              is safe for their child.
            </p>

            <p className="mx-auto mt-5 max-w-xl text-body font-semibold text-ink lg:mx-0">
              Be the center they find and the one they never leave.
            </p>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <Button href="/for-directors#assessment">Take the assessment</Button>
              <CertifyButton variant="outline" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
