import type { Metadata } from "next";
import { DirectorsHero } from "@/components/directors/DirectorsHero";
import { BeALeader } from "@/components/directors/BeALeader";
import { ValueStack } from "@/components/directors/ValueStack";
import { RoiCalculator } from "@/components/directors/RoiCalculator";
import { CenterReceives } from "@/components/directors/CenterReceives";
import { TheLiability } from "@/components/directors/TheLiability";
import { WhoThisIsFor } from "@/components/directors/WhoThisIsFor";
import { AssessmentCta } from "@/components/directors/AssessmentCta";
import { DirectorFaq } from "@/components/directors/DirectorFaq";
import { NominateCenter } from "@/components/directors/NominateCenter";
import { JoinCommunity } from "@/components/home/JoinCommunity";
import { LetsGetSocial } from "@/components/home/LetsGetSocial";

export const metadata: Metadata = {
  title: "For Directors",
  description:
    "One new enrollment pays for this. The peace of mind is priceless. Food Allergy Certified gives your team the training, your center the credentials, and food allergy families the reason to choose you and stay.",
};

export default function ForDirectorsPage() {
  return (
    <>
      <DirectorsHero />
      <BeALeader />
      <ValueStack />
      <RoiCalculator />
      <CenterReceives />
      <TheLiability />
      <WhoThisIsFor />
      <AssessmentCta />
      <DirectorFaq />
      <NominateCenter />
      <JoinCommunity />
      <LetsGetSocial />
    </>
  );
}
