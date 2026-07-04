import type { Metadata } from "next";
import { ParentsHero } from "@/components/parents/ParentsHero";
import { WhileYouWait } from "@/components/parents/WhileYouWait";
import { ParentFaq } from "@/components/parents/ParentFaq";
import { DirectoryPreview } from "@/components/parents/DirectoryPreview";
import { JoinCommunity } from "@/components/home/JoinCommunity";
import { LetsGetSocial } from "@/components/home/LetsGetSocial";

export const metadata: Metadata = {
  title: "For Parents",
  description:
    "You should not have to wonder if your child is safe. Join the waitlist for a national directory of FAC Certified childcare centers where staff is trained and food allergy children are truly looked after.",
};

export default function ForParentsPage() {
  return (
    <>
      <ParentsHero />
      <WhileYouWait />
      <ParentFaq />
      <DirectoryPreview />
      <JoinCommunity />
      <LetsGetSocial />
    </>
  );
}
