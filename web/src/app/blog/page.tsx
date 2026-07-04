import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { JoinCommunity } from "@/components/home/JoinCommunity";
import { LetsGetSocial } from "@/components/home/LetsGetSocial";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Practical food allergy guidance for childcare centers and families — coming soon from Food Allergy Certified.",
};

export default function BlogPage() {
  return (
    <>
      <section className="bg-white py-16 sm:py-24">
        <Container className="max-w-2xl text-center">
          <Eyebrow className="text-brand-pink-ink">The Blog</Eyebrow>
          <h1 className="mt-4 font-serif text-[40px] font-extrabold leading-[1.05] text-brand-teal-dark sm:text-[56px]">
            Guidance worth sharing is on the way.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.4] text-ink sm:text-xl">
            We&rsquo;re writing practical, no-jargon articles on food allergy
            safety for childcare centers and families — from spotting a reaction
            early to building trust with allergy parents.
          </p>
          <p className="mt-4 text-lg font-semibold text-ink">Coming soon.</p>

          <div className="mt-9 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/certification">Explore the certification</Button>
            <Button href="/contact" variant="outline">
              Suggest a topic
            </Button>
          </div>
        </Container>
      </section>

      <JoinCommunity />
      <LetsGetSocial />
    </>
  );
}
