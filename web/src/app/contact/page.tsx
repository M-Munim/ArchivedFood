import type { Metadata } from "next";
import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { ContactForm } from "@/components/contact/ContactForm";
import { JoinCommunity } from "@/components/home/JoinCommunity";
import { LetsGetSocial } from "@/components/home/LetsGetSocial";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Questions about Food Allergy Certified? Reach out and we'll get back to you within one business day — or book a free 15-minute call with Amber.",
};

export default function ContactPage() {
  return (
    <>
      <section className="bg-white py-14 sm:py-20">
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <Eyebrow className="text-brand-teal">Contact Us</Eyebrow>
            <h1 className="mt-4 font-serif text-[40px] font-extrabold leading-[1.05] text-brand-teal-dark sm:text-[56px]">
              We&rsquo;d love to hear from you.
            </h1>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-[1.4] text-ink sm:text-xl">
              Whether you&rsquo;re a parent looking for a safer center or a
              director ready to get certified, we&rsquo;re here to help.
            </p>
          </div>

          <div className="mx-auto mt-14 grid max-w-5xl gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16">
            {/* Form */}
            <div className="rounded-3xl border border-black/10 p-6 shadow-sm sm:p-9">
              <ContactForm />
            </div>

            {/* Info panel */}
            <div className="lg:pt-4">
              <h2 className="font-serif text-2xl font-bold text-ink">
                Other ways to reach us
              </h2>

              <div className="mt-6 space-y-6">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                    Prefer to talk?
                  </p>
                  <p className="mt-1 text-ink/80">
                    Book a free 15-minute call with Amber — no pressure, no pitch.
                  </p>
                  <Link
                    href="/book-a-call"
                    className="mt-3 inline-flex items-center justify-center rounded-full bg-brand-mint px-6 py-3 font-semibold text-ink transition-colors hover:bg-brand-mint/80"
                  >
                    Book a call
                  </Link>
                </div>

                <div>
                  <p className="text-sm font-semibold uppercase tracking-wide text-ink/50">
                    Response time
                  </p>
                  <p className="mt-1 text-ink/80">
                    We reply to every message within one business day.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>

      <JoinCommunity />
      <LetsGetSocial />
    </>
  );
}
