import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Notch } from "./Notch";

const AUDIENCE = [
  "Independent daycare owners and directors",
  "Montessori and early education operators",
  "Childcare franchise locations and regional operators",
  "Any center that wants to stand out, protect families, and grow enrollment through trust",
];

export function WhoThisIsFor() {
  return (
    <section className="relative bg-brand-orange py-16 sm:py-20">
      <Container>
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Who This Is For</Eyebrow>
          <h2 className="mt-4 font-serif text-[32px] font-bold leading-[1.15] text-ink sm:text-[40px]">
            Built for centers that take safety seriously
          </h2>
        </div>

        <ul className="mx-auto mt-10 max-w-5xl space-y-1 text-lg leading-[1.35] text-ink">
          {AUDIENCE.map((item) => (
            <li key={item} className="flex gap-3 text-lg">
              <span aria-hidden="true" className=" select-none">
                &bull;
              </span>
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </Container>

      <Notch colorClass="text-brand-orange" />
    </section>
  );
}
