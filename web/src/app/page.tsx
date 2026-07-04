import { Hero } from "@/components/home/Hero";
import { StatCarousel } from "@/components/home/StatCarousel";
import { ProblemSolution } from "@/components/home/ProblemSolution";
import { HowItWorks } from "@/components/home/HowItWorks";
import { FoundingCenter } from "@/components/home/FoundingCenter";
import { AmberStory } from "@/components/home/AmberStory";
import { JoinCommunity } from "@/components/home/JoinCommunity";
import { LetsGetSocial } from "@/components/home/LetsGetSocial";
import { FamiliesSearching } from "@/components/home/FamiliesSearching";

export default function Home() {
  return (
    <>
      <Hero />
      <StatCarousel />
      <ProblemSolution />
      <HowItWorks />
      <FoundingCenter />
      <AmberStory />
      <JoinCommunity />
      <LetsGetSocial />
      <FamiliesSearching />
    </>
  );
}
