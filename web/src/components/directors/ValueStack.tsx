import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Notch } from "./Notch";
import valueStack from "@/../public/images/value-stack.png";

const LAYERS = [
  {
    title: "Liability Protection",
    body: "A trained staff is a protected staff. Most childcare centers are not underprepared because they don't care. They're underprepared because no one has given them a structured, childcare-specific standard to work from. When your team knows what to look for and what to do, you're not just protecting a child. You're protecting your center, your staff, and everything you've built.",
  },
  {
    title: "Parent Trust",
    body: "Allergy parents do not choose a center and then relax. They watch. They ask questions. They notice whether your staff seems confident or uncertain. FAC certification gives them the signal they've been searching for. The badge. The decal on the front door. The staff who already knows their child's name and their child's plan. That kind of trust keeps families enrolled for years and sends others your way.",
  },
  {
    title: "Enrollment Edge",
    body: "The food allergy family who chooses your center because it's FAC Certified is not a one-time enrollment. They're a multi-year relationship with a family who will tell every other allergy parent they know exactly where to go. In premium childcare markets, that's not a cost. That's a growth strategy.",
  },
];

export function ValueStack() {
  return (
    <section className="relative bg-brand-cream py-16 sm:py-20">
      <Container className="px-6 sm:hidden">
        <div className="mx-auto max-w-[348px]">
          <h2 className="text-center font-serif text-[18px] font-bold leading-[1.2] text-ink">
            Three-Layer Value Stack
          </h2>

          <div className="mx-auto mt-5 w-full max-w-[206px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-full">
              <Image
                src={valueStack}
                alt="Value stack diagram: Parent Trust, Enrollment Edge, and Liability Protection"
                fill
                sizes="206px"
                className="object-cover"
              />
            </div>
          </div>

          <div className="mt-7 space-y-4">
            {LAYERS.map((layer) => (
              <div key={layer.title}>
                <h3 className="text-[15px] font-semibold leading-[1.15] text-ink">
                  {layer.title}
                </h3>
                <p className="mt-1 text-[15px] leading-[1.1] text-ink">
                  {layer.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>

      <Container className="hidden sm:block">
        <div className="grid items-center gap-10 lg:grid-cols-[300px_1fr] lg:gap-14">
          <div className="mx-auto w-full max-w-[300px]">
            <div className="relative aspect-square w-full overflow-hidden rounded-full">
              <Image
                src={valueStack}
                alt="Value stack diagram: Parent Trust, Enrollment Edge, and Liability Protection"
                fill
                sizes="300px"
                className="object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="font-serif ml-10 text-[33px] font-bold text-ink sm:text-[38px]">
              Three-Layer Value Stack
            </h2>
            <div className="mt-6 space-y-6">
              {LAYERS.map((layer) => (
                <div key={layer.title}>
                  <h3 className="text-lg font-semibold text-ink">{layer.title}</h3>
                  <p className="mt-1 text-body text-ink">{layer.body}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Notch colorClass="text-brand-cream" />
    </section>
  );
}
