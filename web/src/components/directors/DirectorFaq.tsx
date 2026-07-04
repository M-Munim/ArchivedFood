"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Notch } from "./Notch";

const INITIAL_FAQ_COUNT = 5;

// Q1's answer is verbatim from the design. The remaining answers were collapsed
// in the PDF, so they are authored to match the site's voice and content.
const FAQ = [
  {
    q: "How long does the certification take?",
    a: "Most staff complete the full standard in about 90 minutes.",
  },
  {
    q: "Do all staff members need to be certified?",
    a: "We recommend certifying every staff member who works directly with children. Your center earns official FAC Certified status once all of your designated staff have passed.",
  },
  {
    q: "How is this different from ServSafe or other food training?",
    a: "ServSafe and similar programs are built for restaurants and general food handling. FAC is built specifically for childcare — the situations, ages, and emergencies your team actually faces every day.",
  },
  {
    q: "Do you cover emergency response?",
    a: "Yes. An entire module is devoted to recognizing a reaction early, using epinephrine, calling 911, and keeping a child calm until help arrives.",
  },
  {
    q: "How long does certification last?",
    a: "Certification is valid for one year. We'll remind you when it's time to renew so your center stays current and ready.",
  },
  {
    q: "How much does it cost?",
    a: "Pricing is based on the size of your center and the number of staff. Book a quick call and we'll put together what makes sense for you.",
  },
  {
    q: "What happens after we're certified?",
    a: "You receive your digital badge, a physical window decal, your Parent Trust Kit, and a listing in our directory so families can find you.",
  },
  {
    q: "Is this available nationwide?",
    a: "Yes. FAC is fully online and available to childcare centers, daycares, and early education providers across the country.",
  },
  {
    q: "What if a staff member leaves and we hire someone new?",
    a: "New team members can complete the training at any time. Keeping your whole team certified is what keeps your center's status active.",
  },
  {
    q: "How fast will I see a return on this?",
    a: "Often with a single enrollment. One food allergy family who chooses you because you're certified can cover your investment many times over.",
  },
  {
    q: "Can I use this in my marketing right away?",
    a: "Yes. The moment you're certified you can display your badge on your website, social profiles, and front door.",
  },
  {
    q: "Will this help me justify a higher tuition rate?",
    a: "Certification signals a higher standard of care, which is exactly what families in premium markets are looking for and willing to pay for.",
  },
  {
    q: "How do I use this to win families who are comparing me to another center?",
    a: "The badge answers the question before a parent asks it. When one center is certified and the other isn't, the choice makes itself.",
  },
  {
    q: "What do I say to a parent who asks about it on a tour?",
    a: "Tell them your staff completed a childcare-specific food allergy standard, passed an exam, and is trained to prevent and respond to reactions. Your Parent Trust Kit gives you the exact language.",
  },
  {
    q: "Does this help with insurance or licensing?",
    a: "FAC is a training and certification standard, not a substitute for licensing. Many directors find that documented, structured training strengthens their position with insurers and licensors.",
  },
  {
    q: "I have multiple locations. How does pricing work?",
    a: "We offer plans for franchises and regional operators. Reach out and we'll build pricing that covers every location.",
  },
  {
    q: "How do I get listed in the directory so parents can find me?",
    a: "Once your center is certified, we add you to the public directory automatically so food allergy families searching in your area can find you.",
  },
  {
    q: "Will FAC help me create the marketing materials or do I have to do that myself?",
    a: "Your Parent Trust Kit includes ready-to-use materials, so you don't have to start from scratch.",
  },
  {
    q: "Can I get certified before all my staff complete the training?",
    a: "Individual staff receive their certificates as they pass. Your center earns official FAC Certified status once all designated staff have completed the standard.",
  },
];

export function DirectorFaq() {
  const [open, setOpen] = useState<number | null>(0);
  const [showAll, setShowAll] = useState(false);
  const visibleFaq = showAll ? FAQ : FAQ.slice(0, INITIAL_FAQ_COUNT);

  function toggleShowAll() {
    if (showAll && open !== null && open >= INITIAL_FAQ_COUNT) {
      setOpen(0);
    }
    setShowAll((current) => !current);
  }

  return (
    <section className="relative bg-white py-16">
      <Container>
        <div className="text-center">
          <Eyebrow>Commonly Asked Questions</Eyebrow>
          <h2 className="mt-3 font-serif text-[30px] font-bold leading-tight text-ink sm:text-[34px]">
            Director FAQ
          </h2>
        </div>

        <div className="mx-auto mt-7 max-w-[900px]">
          {visibleFaq.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={item.q}>
                <button
                  type="button"
                  onClick={() => setOpen(isOpen ? null : i)}
                  aria-expanded={isOpen}
                  className="flex w-full items-center justify-between gap-6 py-2 text-left"
                >
                  <span className="text-lg font-semibold text-ink">
                    {item.q}
                  </span>
                  {isOpen ? (
                    <FiMinus
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 stroke-[2.5] text-ink"
                    />
                  ) : (
                    <FiPlus
                      aria-hidden="true"
                      className="h-4 w-4 shrink-0 stroke-[2.5] text-ink"
                    />
                  )}
                </button>
                {isOpen && (
                  <p className="pb-2 pr-10 text-lg leading-[1.35] text-ink/80">
                    {item.a}
                  </p>
                )}
              </div>
            );
          })}

          {FAQ.length > INITIAL_FAQ_COUNT && (
            <button
              type="button"
              onClick={toggleShowAll}
              aria-expanded={showAll}
              className="mt-4 text-left text-base font-medium text-ink underline decoration-1 underline-offset-2 transition-opacity hover:opacity-65"
            >
              {showAll ? "Read less" : "Read more"}
            </button>
          )}
        </div>
      </Container>

      <Notch colorClass="text-white" />
    </section>
  );
}
