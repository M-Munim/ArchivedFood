import Image from "next/image";

import { Eyebrow } from "@/components/ui/Eyebrow";

export function ProblemSolution() {
  return (
    <section className="py-16 sm:py-20">
      {/* Uses the header/hero container width (max-w-[1320px]) rather than the
          narrower shared <Container> so the columns line up with the navbar:
          text starts under the logo, right edge ends under the "Book a call"
          button. */}
      <div className="mx-auto w-full max-w-[1280px] px-6 sm:px-8 lg:px-10">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-0">
          {/* The Problem */}
          <div className="lg:pr-14">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Eyebrow>The Problem</Eyebrow>
                <h2 className="mt-4 max-w-md font-serif text-[30px] font-bold leading-[1.15] text-ink sm:text-[34px]">
                  Parents of children with food allergies are not just picking a
                  childcare center
                </h2>
              </div>
              <Image
                src="/images/Character Image.png"
                alt="Worried food allergy character"
                width={566}
                height={586}
                className="h-24 w-24 shrink-0 object-contain sm:h-28 sm:w-28"
              />
            </div>

            <p className="mt-6 text-body font-semibold text-ink">
              They&rsquo;re deciding who they trust with their child&rsquo;s life.
            </p>

            <div className="mt-5 space-y-4 text-body text-ink">
              <p>
                And when they visit your center, they&rsquo;re looking for a
                signal. Something that tells them your staff is trained,
                prepared, and ready before an incident ever happens.
              </p>
              <p>Most centers can&rsquo;t give them that signal.</p>
              <p>No certification. No badge. No visible proof.</p>
              <p>
                That gap costs you enrollments. And in a worst-case scenario, it
                costs you much more.
              </p>
            </div>
          </div>

          {/* The Solution */}
          <div className="lg:border-l lg:border-black/15 lg:pl-14">
            <div className="flex items-start justify-between gap-4">
              <div>
                <Eyebrow>The Solution</Eyebrow>
                <h2 className="mt-4 max-w-md font-serif text-[30px] font-bold leading-[1.15] text-ink sm:text-[34px]">
                  We built the standard. Now your center can meet it
                </h2>
              </div>
              <Image
                src="/images/Character Illustration.png"
                alt="Happy food allergy character"
                width={396}
                height={438}
                className="h-24 w-24 shrink-0 object-contain sm:h-28 sm:w-28"
              />
            </div>

            <div className="mt-6 space-y-4 text-body text-ink">
              <p>
                Built by a parent of a child with food allergies, in
                collaboration with pediatric allergists, emergency medicine
                doctors, and early childhood educators.
              </p>
              <p>
                Food Allergy Certified is a 90-minute certification program
                designed for childcare centers, daycares, and early education
                providers nationwide. Training incorporates evidence-based
                protocols, emergency response training, and practical
                implementation guides.
              </p>
              <p>
                Your staff gets trained. Your center gets certified. And parents
                see it the moment they walk through your door.
              </p>
              <p>
                This is not just a training program. It&rsquo;s a parent trust
                system and the most visible competitive advantage your center
                can have.
              </p>
            </div>
          </div>
        </div>
        <div aria-hidden="true" className="mt-12 border-t border-black/20 sm:mt-16" />
      </div>
    </section>
  );
}
