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
    a: "We recommend it. Every person who cares for children should feel confident and prepared.",
  },
  {
    q: "How is this different from ServSafe or other food training?",
    a: "ServSafe and similar programs are built for restaurants and food service. FAC is built specifically for childcare environments and the real situations that come up when you're caring for young children.",
  },
  {
    q: "Do you cover emergency response?",
    a: "Yes. Your staff learns to recognize the signs of a reaction, when to use epinephrine, and exactly what to do while emergency services are on the way.",
  },
  {
    q: "How long does certification last?",
    a: "Certification is valid for one year. Annual renewal keeps your team current with the latest guidelines.",
  },
  {
    q: "How much does it cost?",
    a: "Certification is priced to your center. We don't believe in one-size-fits-all pricing. Book a call and we'll build a custom enterprise plan for your team.",
  },
  {
    q: "What happens after we're certified?",
    a: "Your center receives the FAC badge, the window decal, and the Parent Trust Kit so you can share your certification with families right away. You're also listed in the FAC Certified Center Directory when it launches.",
  },
  {
    q: "Is this available nationwide?",
    a: "Yes. Food Allergy Certified is available to childcare centers across the United States.",
  },
  {
    q: "What if a staff member leaves and we hire someone new?",
    a: "New staff members can complete the training individually and receive their own certificate. Your center's certified status stays intact.",
  },
  {
    q: "How fast will I see a return on this?",
    a: "The national average for center-based childcare is over $13,000 per child per year. In premium markets it's $20,000 or more. If certification helps you earn the trust of one family who was on the fence, your investment pays for itself many times over, every year that child is enrolled. Most centers see the return before the ink is dry.",
  },
  {
    q: "Can I use this in my marketing right away?",
    a: "Yes. The moment your center is certified you receive your FAC badge for your website and social profiles, a physical window decal for your entrance, and a Parent Trust Kit with ready-to-use email templates, social posts, and print flyers. You can start telling families the same day.",
  },
  {
    q: "Will this help me justify a higher tuition rate?",
    a: "Absolutely. FAC certification is a visible, verifiable differentiator. Families who are already paying a premium for childcare are doing it because safety and quality matter to them. Certification gives you the proof point that supports the rate you're charging and makes it easier to hold that rate with confidence.",
  },
  {
    q: "How do I use this to win families who are comparing me to another center?",
    a: "When a family is deciding between your center and another, the FAC badge is a concrete reason to choose you. Train your staff to mention it naturally on tours. Put the window decal where parents see it the moment they walk in. Let the certification do the talking before you say a word.",
  },
  {
    q: "What do I say to a parent who asks about it on a tour?",
    a: "We make that easy. Your Parent Trust Kit includes talking points and templated language so your staff can answer confidently and consistently. You never have to wing it.",
  },
  {
    q: "Does this help with insurance or licensing?",
    a: "FAC certification demonstrates a documented, structured standard of care for food allergy safety. Many centers find this valuable in conversations with insurers and licensing bodies. We recommend checking with your specific provider on coverage implications.",
  },
  {
    q: "I have multiple locations. How does pricing work?",
    a: "Book a call and we'll build a custom enterprise plan for your team.",
  },
  {
    q: "How do I get listed in the directory so parents can find me?",
    a: "Every FAC Certified center is automatically listed in the FAC Certified Center Directory when it launches. Parents search by zip code to find certified centers near them. Being listed means food allergy families in your area can find you before they find anyone else.",
  },
  {
    q: "Will FAC help me create the marketing materials or do I have to do that myself?",
    a: "Your Parent Trust Kit has everything ready to use. Email templates, social posts, and print flyers are all included. You customize them with your center's name and you're done. No design work required.",
  },
  {
    q: "Can I get certified before all my staff complete the training?",
    a: "Certification is granted once all designated staff have passed the final assessment. The training is 90 minutes and fully online, so your team can move through it quickly. Most centers are certified and ready to market within a week of enrolling.",
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
      <Container className="px-6 sm:px-0">
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
                  <p className="pb-2 pr-10 text-body text-ink/80">
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
