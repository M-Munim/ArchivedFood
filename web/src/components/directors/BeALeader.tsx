import Image from "next/image";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Notch } from "./Notch";
import arrowImg from "@/../public/images/arrow.png";

const WITHOUT = [
  "Without Food Allergy Certified Snacks and birthday treats become a source of anxiety for families.",
  "Cross-contact risks go unnoticed because no one has been trained to spot them.",
  "Emergency response is slower than it should be.",
  "Parents choose the center down the street that has the badge and the trained staff.",
];

const WITH = [
  "Your staff knows how to prevent exposure before it ever becomes an emergency.",
  "Epinephrine administration becomes something your team is prepared for and confident about.",
  "Parents feel it before they even ask a question. The badge on the door says everything.",
  "Food allergy families find you, choose you, and refer everyone they know.",
];

function BulletList({
  items,
  className = "mt-6 space-y-4 text-body text-ink",
}: {
  items: string[];
  className?: string;
}) {
  return (
    <ul className={className}>
      {items.map((item) => (
        <li key={item} className="flex gap-3">
          <span aria-hidden="true" className="mt-1 select-none">
            &bull;
          </span>
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function BeALeader() {
  return (
    <section className="relative bg-brand-brightblue py-16 sm:py-20">
      <Container className="px-6 sm:hidden">
        <div className="mx-auto max-w-[320px] text-center">
          <Eyebrow>Be a Leader</Eyebrow>
          {/* Locked to the Figma's 3-line mobile wrap. */}
          <h2 className="mt-4 font-serif text-[24px] font-bold leading-[1.1] text-ink">
            Your center can be the one
            <br />
            parents trust before they
            <br />
            even walk in.
          </h2>
          <p className="mt-6 text-[16px] font-semibold leading-[1.2] text-ink">
            What the difference looks like.
          </p>
        </div>

        <div className="mx-auto mt-8 max-w-[309px]">
          <div className="relative">
            <div className="rounded-[24px] bg-brand-sky px-6 pb-6 pt-5">
              <h3 className="text-center text-[17px] font-semibold leading-[1.2] text-ink">
                Without Food Allergy Certified
              </h3>
              <BulletList
                items={WITHOUT}
                className="mt-5 space-y-3 text-[15px] leading-[1.15] text-ink"
              />
            </div>

            <Image
              src={arrowImg}
              alt=""
              className="pointer-events-none absolute -bottom-11 right-2 z-10 h-auto w-[92px]"
            />
          </div>

          <div className="mt-5 rounded-[24px] bg-white px-6 pb-6 pt-5">
            <h3 className="text-center text-[17px] font-semibold leading-[1.2] text-ink">
              With Food Allergy Certified
            </h3>
            <BulletList
              items={WITH}
              className="mt-5 space-y-3 text-[15px] leading-[1.15] text-ink"
            />
          </div>
        </div>
      </Container>

      <Container className="hidden sm:block">
        <div className="mx-auto max-w-4xl text-center">
          <Eyebrow>Be a Leader</Eyebrow>
          <h2 className="mt-4 font-serif text-[32px] font-bold leading-[1.15] text-ink sm:text-[40px]">
            Your center can be the one parents trust before they even walk in.
          </h2>
          <p className="mt-3 text-body font-semibold text-ink">
            What the difference looks like.
          </p>
        </div>

        <div className="relative mt-12 grid gap-6 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-3xl bg-brand-sky p-8 sm:p-10">
            <h3 className="text-center text-xl font-semibold text-ink">
              Without Food Allergy Certified
            </h3>
            <BulletList items={WITHOUT} />
          </div>

          <div className="rounded-3xl bg-white p-8 sm:p-10">
            <h3 className="text-center text-xl font-semibold text-ink">
              With Food Allergy Certified
            </h3>
            <BulletList items={WITH} />
          </div>

          <Image
            src={arrowImg}
            alt=""
            className="pointer-events-none absolute left-1/2 top-9 hidden h-auto w-[116px] -translate-x-1/2 lg:block"
          />
        </div>
      </Container>

      <Notch colorClass="text-brand-brightblue" />
    </section>
  );
}
