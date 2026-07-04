import type { Metadata } from "next";
import { CertHero } from "@/components/certification/CertHero";
import { Curriculum } from "@/components/certification/Curriculum";
import { FinalAssessment } from "@/components/certification/FinalAssessment";
import { TheBadge } from "@/components/certification/TheBadge";
import { JoinCommunity } from "@/components/home/JoinCommunity";
import { LetsGetSocial } from "@/components/home/LetsGetSocial";

export const metadata: Metadata = {
  title: "Certification",
  description:
    "6 modules. 1 final exam. A certification that means something. The FAC standard covers everything a childcare professional needs to recognize, prevent, and respond to food allergy emergencies.",
};

export default function CertificationPage() {
  return (
    <>
      <CertHero />
      <Curriculum />
      <FinalAssessment />
      <TheBadge />
      <JoinCommunity />
      <LetsGetSocial />
    </>
  );
}
