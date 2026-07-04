import Image from "next/image";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Notch } from "./Notch";
import liabilityImg from "@/../public/images/FAC_Directors-Staff@2x 1.png";

export function TheLiability() {
  return (
    <section className="relative bg-brand-yellow">
      <div className="sm:hidden">
        <div className="ml-auto w-full max-w-[225px]">
          <Image
            src={liabilityImg}
            alt="A caregiver and children eating fresh fruit together at a table"
            sizes="225px"
            className="h-auto w-full"
            loading="eager"
          />
        </div>

        <div className="mx-auto w-full max-w-[313px] px-7 pb-9 pt-0">
          <Eyebrow className="text-[13px]">The Liability</Eyebrow>
          <h2 className="mt-3 font-serif text-[28px] font-bold leading-[1.05] text-ink">
            A trained staff is a protected staff
          </h2>

          <div className="mt-5 space-y-4 text-[15px] leading-[1.16] text-ink">
            <p>
              Most childcare centers are not underprepared because they
              don&rsquo;t care. They&rsquo;re underprepared because no one has
              given them a structured, childcare-specific standard to follow.
            </p>
            <p>
              FAC certification changes that. Your staff learns to recognize the
              early signs of a reaction before it becomes an emergency. They
              learn when to use epinephrine, what to say to a 911 dispatcher,
              how to stay calm and keep the child calm while help is on the way.
              They learn it in language built for caregivers, not clinicians.
            </p>
            <p>
              When something happens, and in childcare it eventually does, the
              question is not whether your team was trained. The question is
              whether you can show that they were.
            </p>
            <p>FAC answers that question.</p>
          </div>

          <p className="mt-4 text-xs italic leading-[1.2] text-ink">
            Sources: School Nutrition Association 2023; Frontiers in Pediatrics
            2025; Research, Advocacy and Practice Journal 2025
          </p>
        </div>
      </div>

      <div className="hidden sm:block">
        <div className="liability-frame ">
          <div className="liability-copy ">
            <Eyebrow>The Liability</Eyebrow>
            <h2 className="mt-3 font-serif text-3xl font-bold leading-[1.1] text-ink">
              A trained staff is a protected staff
            </h2>

            <div className="mt-6 max-w-[850px] space-y-2.5 text-xl leading-[1.25] text-ink">
              <p>
                Most childcare centers are not underprepared because they
                don&rsquo;t care. They&rsquo;re underprepared because no one has
                given them a structured, childcare-specific standard to follow.
              </p>
              <p>
                FAC certification changes that. Your staff learns to recognize the
                early signs of a reaction before it becomes an emergency. They
                learn when to use epinephrine, what to say to a 911 dispatcher,
                how to stay calm and keep the child calm while help is on the way.
                They learn it in language built for caregivers, not clinicians.
              </p>
              <p>
                When something happens, and in childcare it eventually does, the
                question is not whether your team was trained. The question is
                whether you can show that they were.
              </p>
              <p>FAC answers that question.</p>
            </div>

            <p className="mt-3 italic leading-[1.25] text-ink">
              Sources: School Nutrition Association 2023; Frontiers in Pediatrics
              2025; Research, Advocacy and Practice Journal 2025
            </p>
          </div>

          <div className="liability-image">
            <Image
              src={liabilityImg}
              alt="A caregiver and children eating fresh fruit together at a table"
              sizes="(max-width: 1024px) 100vw, 830px"
              className="h-auto w-full"
              loading="eager"
            />
          </div>
        </div>
      </div>

      <Notch colorClass="text-brand-yellow" />
    </section>
  );
}
