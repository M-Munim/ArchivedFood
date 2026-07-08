import Image from "next/image";

import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Button } from "@/components/ui/Button";
import { CertifyButton } from "@/components/home/CertifyButton";

const STEPS = [
  {
    n: 1,
    image: "/images/Isolation_Mode1.png",
    width: 252,
    height: 240,
    title: "Sign Up",
    body: "Enroll your center online in just minutes.",
  },
  {
    n: 2,
    image: "/images/Isolation_Mode2.png",
    width: 168,
    height: 160,
    title: "Train Your Staff",
    body: (
      <>
        Short, scenario-based modules your whole team completes in about 90{" "}
        <br className="hidden sm:block" />
        minutes. Fully online.
      </>
    ),
  },
  {
    n: 3,
    image: "/images/Isolation_Mode3.png",
    width: 168,
    height: 160,
    title: "Get Certified",
    body: (
      <>
        Your center receives official FAC Certified status, your badge, your
        window{" "}
        <br className="hidden sm:block" />
        decal, and your Parent Trust Kit. You’re now the center allergy families
        are{" "}
        <br className="hidden sm:block" />
        looking for.
      </>
    ),
  },
];

function StepBadge({
  n,
  image,
  width,
  height,
}: {
  n: number;
  image: string;
  width: number;
  height: number;
}) {
  return (
    <Image
      src={image}
      alt={`Step ${n}`}
      width={width}
      height={height}
      className="h-20 w-20 shrink-0 object-contain"
    />
  );
}

export function HowItWorks() {
  return (
    <section className="pb-8 sm:pb-16 lg:pb-20">
      <Container className="px-6 sm:px-0">
        <div className="mx-auto max-w-3xl text-left sm:text-center">
          <Eyebrow>How It Works</Eyebrow>
          <h2 className="mt-4 font-serif text-[30px] font-bold leading-[1.15] text-ink sm:text-[38px]">
            Simple to implement. Powerful to show.
          </h2>
          <p className="mt-3 text-body font-semibold text-ink">
            Built by a parent. Backed by experts.
          </p>
        </div>

        <ol className="mx-auto mt-12 max-w-[800px] space-y-8">
          {STEPS.map((step) => (
            <li key={step.n} className="flex items-start gap-6">
              <StepBadge
                n={step.n}
                image={step.image}
                width={step.width}
                height={step.height}
              />
              <div className="pt-1">
                <h3 className="text-lg font-semibold text-ink">{step.title}</h3>
                <p className="mt-1 text-body text-ink">
                  {step.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mx-auto mt-12 flex max-w-[800px] flex-col gap-4 sm:flex-row sm:items-center sm:justify-center">
          <CertifyButton>Go to the form</CertifyButton>
          <Button href="/ambers-story" variant="outline">
            Learn more
          </Button>
        </div>
      </Container>
    </section>
  );
}
