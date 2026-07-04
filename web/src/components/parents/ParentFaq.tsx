import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqList, type FaqItem } from "@/components/ui/FaqList";

// Q1 is verbatim from the design; the remaining answers (collapsed in the PDF)
// are authored to match the site's voice.
const FAQ: FaqItem[] = [
  {
    q: "How long does the certification take?",
    a: "Most staff complete the full standard in about 90 minutes.",
  },
  {
    q: "What happens if my child has a reaction at a certified center?",
    a: "Staff at a certified center are trained to recognize a reaction early, respond immediately, use epinephrine when needed, and call 911 while keeping your child calm. Everyone who cares for your child has practiced exactly what to do.",
  },
  {
    q: "My child has multiple allergies. Does this cover all of them?",
    a: "Yes. The training covers the top nine allergens and the principles of preventing cross-contact, so it applies no matter how many allergies your child has.",
  },
  {
    q: "My child has FPIES, not a traditional allergy. Is this relevant for us?",
    a: "Yes. The prevention, communication, and care-plan practices in the standard apply to FPIES and other food-related conditions, not just IgE allergies.",
  },
  {
    q: "What's the difference between FAC Certified and a center that just says they're allergy aware?",
    a: "“Allergy aware” is a claim anyone can make. FAC Certified means every designated staff member completed a structured, childcare-specific standard and passed an exam. It's proof, not a promise.",
  },
  {
    q: "What if a new staff member is hired after certification?",
    a: "New staff can complete the training at any time. Certified centers keep their whole team current so your child is always cared for by trained staff.",
  },
  {
    q: "Can I see what the training actually covers?",
    a: "Yes. The certification covers six modules — understanding allergies, recognizing reactions, emergency response, prevention, communication and care plans, and ongoing readiness. You can review the full curriculum on our Certification page.",
  },
  {
    q: "How do I find a certified center near me?",
    a: "We're building a national directory of certified centers. Join the waitlist above and we'll let you know the moment a certified center opens in your area.",
  },
  {
    q: "Who created this and why should I trust it?",
    a: "Food Allergy Certified was built by a parent of a child with food allergies, in collaboration with pediatric allergists, emergency medicine doctors, and early childhood educators. Read Amber's story to learn why.",
  },
];

export function ParentFaq() {
  return (
    <section className="bg-white py-12 sm:py-16">
      <Container>
        <div className="text-center">
          <Eyebrow>Commonly Asked Questions</Eyebrow>
          <h2 className="mt-3 font-serif text-[30px] font-bold text-ink sm:text-[40px]">
            Parent FAQ
          </h2>
        </div>
        <div className="mt-7">
          <FaqList items={FAQ} initialCount={5} />
        </div>
      </Container>
    </section>
  );
}
