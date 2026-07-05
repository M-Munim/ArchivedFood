import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { FaqList, type FaqItem } from "@/components/ui/FaqList";

// Q1 is verbatim from the design; the remaining answers (collapsed in the PDF)
// are authored to match the site's voice.
const FAQ: FaqItem[] = [
  {
    q: "How do I know the staff actually learned this and didn't just click through?",
    a: "Every staff member takes a final assessment before receiving their individual certificate. It's not a participation trophy. They have to pass. That's what makes the certification worth something, and what makes it worth something to you.",
  },
  {
    q: "What happens if my child has a reaction at a certified center?",
    a: "FAC Certified staff are trained to recognize reactions early, respond immediately, administer epinephrine correctly, and follow the 911 protocol while keeping your child calm. Certification doesn't guarantee a reaction won't happen. It means the people in that room know exactly what to do when it does.",
  },
  {
    q: "My child has multiple allergies. Does this cover all of them?",
    a: "Yes. FAC covers all 9 major allergens recognized by the FDA including milk, eggs, peanuts, tree nuts, wheat, soy, fish, shellfish, and sesame. Staff also learn that reactions don't look the same from child to child, which is why following your child's individual allergy plan is built into the standard.",
  },
  {
    q: "My child has FPIES, not a traditional allergy. Is this relevant for us?",
    a: "Yes. FAC helps staff understand that food reactions take many forms and that no two children respond the same way. Staff are trained to know and follow each child's individual care plan, which is the foundation of safe care for any food-related condition.",
  },
  {
    q: "What's the difference between FAC Certified and a center that just says they're allergy aware?",
    a: "Anyone can say they're allergy aware. FAC Certified means the staff completed a structured, expert-reviewed training standard, passed a final assessment, and earned a certification that has to be renewed every year. It's the difference between a promise and proof.",
  },
  {
    q: "What if a new staff member is hired after certification?",
    a: "New staff can complete the training individually and receive their own certificate. Your child's center maintains its certified status and your child stays protected.",
  },
  {
    q: "Can I see what the training actually covers?",
    a: "Yes. The full curriculum is outlined on our Certification page. Six modules covering everything from recognizing early reaction signs to emergency response to building an allergy-safe classroom culture.",
  },
  {
    q: "How do I find a certified center near me?",
    a: "Join the parent waitlist and we'll notify you the moment a certified center opens in your area. The FAC Certified Center Directory launches with our first wave of certified centers.",
  },
  {
    q: "Who created this and why should I trust it?",
    a: "FAC was built by Amber Omran, a mom of a child with multiple food allergies including milk, peanuts, eggs, tree nuts, wheat, and FPIES. She built this because she couldn't find a childcare center she trusted enough for her own son. The curriculum has been reviewed by a board-certified pediatric allergist for clinical accuracy.",
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
        <div className="mt-7 px-6">
          <FaqList items={FAQ} initialCount={5} />
        </div>
      </Container>
    </section>
  );
}
