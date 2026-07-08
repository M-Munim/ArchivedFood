import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/contact/ContactForm";
import { JoinCommunity } from "@/components/home/JoinCommunity";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Questions about Food Allergy Certified? Reach out and we'll get back to you within one business day.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-4xl text-center">
            <Eyebrow className="text-brand-teal">Contact Us</Eyebrow>
            <h1 className="mt-4 font-serif text-[40px] font-extrabold leading-[1.05] text-brand-teal-dark sm:text-[56px]">
              We&rsquo;d love to hear from you.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-body text-ink px-4">
              Whether you&rsquo;re a parent looking for a safer center or a
              director ready to get certified, we&rsquo;re here to help.
            </p>
          </div>

          <div className="mx-auto mt-14 max-w-2xl">
            <div className="rounded-3xl border border-black/10 p-6 shadow-sm sm:p-9 mx-4">
              <ContactForm />
            </div>
          </div>
        </Container>
      </section>

      <JoinCommunity />
    </>
  );
}
