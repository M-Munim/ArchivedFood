import Image from "next/image";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";

export function AmberStory() {
  return (
    <section className="pb-16 pt-0 sm:pb-20 sm:pt-0">
      <Container>
        <div className="grid grid-cols-[42%_1fr] items-start gap-x-5 gap-y-6 lg:grid-cols-[300px_1fr] lg:gap-x-14">
          <div className="relative w-full max-w-[300px] lg:row-span-2">
            <Image
              src="/images/Frame 123.png"
              alt="Amber, the founder, smiling with her young son"
              width={448}
              height={522}
              className="h-auto w-full object-cover"
              sizes="300px"
            />
            <Image
              src="/images/Isolation_Mode (3).png"
              alt=""
              width={98}
              height={92}
              className="absolute -bottom-4 -right-5 h-auto w-10 sm:w-11"
              aria-hidden="true"
            />
          </div>

          <div className="lg:pt-9">
            <Eyebrow>Amber&rsquo;s Story</Eyebrow>
            <h2 className="mt-4 font-serif text-[26px] font-bold leading-[1.15] text-ink sm:text-[36px]">
              Built by a mom who needed it to exist
            </h2>
          </div>

          <div className="col-span-2 lg:col-span-1 lg:col-start-2">
            <div className="space-y-4 text-lg leading-[1.35] text-ink">
              <p>
                When my son Xion was four months old, I put a little mango
                milkshake on his lips. I knew it had milk in it. I just never
                imagined he could be allergic to milk. Within minutes, rashes
                were spreading across his face and his eyes were starting to
                swell. We rushed to the ER.
              </p>
              <p className="font-semibold">
                That was the day I learned the word anaphylaxis.
              </p>
              <p>
                I built Food Allergy Certified because I couldn&rsquo;t find a
                childcare center I trusted enough for Xion. The more centers I
                visited, the more I kept seeing the same thing. Parents who knew
                everything about their child&rsquo;s allergies, and staff who had
                never been trained on any of it. That gap needed to be filled. I
                wanted to make lemonade out of lemons.
              </p>
            </div>

            <Link
              href="/ambers-story"
              className="mt-7 inline-block text-lg font-medium text-ink underline underline-offset-4 hover:text-brand-orange"
            >
              Read the full story
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
}
