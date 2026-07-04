import { Eyebrow } from "@/components/ui/Eyebrow";

export function TheBadge() {
  return (
    <section className="bg-white pb-[72px] pt-[76px]">
      <div className="mx-auto max-w-[1160px] px-6 text-center">
        <Eyebrow>The Badge</Eyebrow>
        <h2 className="mx-auto mt-5 max-w-[620px] font-serif text-[30px] font-bold leading-[1.15] text-ink sm:text-[38px]">
          The FAC Certified badge is a promise, not a decoration.
        </h2>
        <p className="mx-auto mt-8 max-w-[1086px] text-left text-lg leading-[1.35] text-ink sm:text-[20px]">
          When a center earns FAC Certified status, they receive a badge for
          their website and social profiles and a physical window decal for
          their entrance. For a food allergy parent, that decal on the front
          door is one of the most meaningful things they can see. It tells them
          the people inside have been trained, tested, and certified to keep
          their child safe. It tells them they chose the right place.
        </p>
      </div>
    </section>
  );
}
