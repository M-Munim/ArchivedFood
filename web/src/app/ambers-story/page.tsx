import type { Metadata } from "next";
import Image from "next/image";
import { JoinCommunity } from "@/components/home/JoinCommunity";
import { LetsGetSocial } from "@/components/home/LetsGetSocial";
import amber from "@/../public/images/Group 1.png";
import mobileAmber from "@/../public/images/MobileFrame 118.png";

export const metadata: Metadata = {
  title: "Amber's Story",
  description:
    "I didn't build this as a business. I built it as a mom. The story of why Food Allergy Certified exists, told by founder Amber.",
};

const PARAGRAPHS = [
  "I had just put a little mango milkshake on his lips. I knew it had milk in it. I just never imagined he could be allergic to milk. I was a new mom, curious and excited, wanting to share something sweet with my baby. I was about to step out for a meeting when I looked at him and stopped cold.",
  "Rashes were spreading across his face. His eyes were starting to swell.",
  "I rushed him to the ER. They took us in right away. Sitting there, I didn't know the word anaphylaxis. I didn't know what a food allergy actually looked like. I didn't know that the life I had carefully planned, Plan A, Plan B, Plan C, had just been rewritten by a little mango milkshake.",
  "Soon after, we saw a pediatric allergist and ran a full panel of tests. Milk. Peanuts. Eggs. Nuts. Wheat. Then I started introducing baby cereal and discovered something else entirely. Xion also had FPIES to oats, rice, and avocado.",
  "I poured myself into research. I Googled everything. I practiced using an EpiPen on a trainer until it felt like muscle memory. I read about gut health, about the connection between eczema and food allergies, about what was being developed for kids like Xion. I asked why I had never come across any of this during my entire pregnancy.",
  "As Xion grew, I started meeting other allergy moms. And I started hearing things that stayed with me.",
] as const;

const PARAGRAPHS_AFTER_QUOTE = [
  "I was lucky. I had a mom who believed me from the first reaction. I had support around me that took it seriously. And even with all of that, I started feeling guilty that Xion wasn't being socialized the way other kids were. I worried about what would happen when he was in someone else's care.",
  "I went from being a helicopter mom to an air traffic controller.",
  "I started looking for remote work because no childcare center felt safe enough. Not because centers didn't care. Because I kept asking myself: do the teachers who spend most of the day with my son know what to do? Do they know that anaphylaxis isn't just about breathing? That any two body systems reacting at the same time means it's time for an EpiPen?",
  "I asked more questions. I looked at more centers. And the more I looked, the more I saw the same gap. A gap between what parents of allergic children know and what the people caring for their children know.",
  "The gap was everywhere. And nobody had filled it. So I decided to.",
  "I wanted to make lemonade out of lemons. Food Allergy Certified is that lemonade.",
] as const;

export default function AmbersStoryPage() {
  return (
    <>
      <article className="relative bg-white pb-12 lg:min-h-[640px]">
        <Image
          src={mobileAmber}
          alt=""
          aria-hidden="true"
          priority
          sizes="100vw"
          className="block h-auto w-full sm:hidden"
        />

        <Image
          src={amber}
          alt="Amber, the founder, smiling with her young son Xion"
          priority
          sizes="(min-width: 1024px) 50vw, 100vw"
          className="hidden h-auto w-full sm:block lg:float-right lg:w-[50vw] lg:max-w-[640px]"
          style={{
            shapeOutside: 'url("/images/Group 1.png")',
            shapeImageThreshold: 0.1,
            shapeMargin: "14px",
          }}
        />
        <div className="mx-auto max-w-[1110px] px-6 pt-5 sm:pt-10 lg:pt-[178px]">
          <h1 className="mx-auto max-w-[319px] text-center font-serif text-[31px] font-extrabold leading-[1.08] text-brand-teal-dark sm:mx-0 sm:max-w-[500px] sm:text-left sm:text-[38px] lg:text-[50px]">
            I didn&rsquo;t build this as a business. I built it as a mom.
          </h1>

          <div
            data-testid="amber-story-copy"
            className="mx-auto max-w-[319px] sm:mx-0 sm:max-w-[720px]"
          >
            <p className="mt-8 text-[15px] font-semibold leading-[1.35] text-ink sm:mt-10">
              Xion was four months old.
            </p>

            <div className="mt-2 space-y-3 text-[15px] leading-[1.28] text-ink sm:leading-[1.35]">
              {PARAGRAPHS.map((p) => (
                <p key={p}>{p}</p>
              ))}

              <p className="italic text-ink/90">
                &ldquo;My parents think I&rsquo;m crazy. They think I&rsquo;m
                using the food allergies as an excuse to keep him from all the
                good things in life, like ice cream.&rdquo;
              </p>

              {PARAGRAPHS_AFTER_QUOTE.map((p) => (
                <p key={p}>{p}</p>
              ))}
            </div>
          </div>

          <div className="clear-both" />
        </div>
      </article>

      <JoinCommunity />
      <LetsGetSocial />
    </>
  );
}
