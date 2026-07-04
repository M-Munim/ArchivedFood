import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { BookingWidget } from "@/components/booking/BookingWidget";

export const metadata: Metadata = {
  title: "Book a call",
  description:
    "Book a free 15-minute call with Amber, founder of Food Allergy Certified. No pressure, no pitch — just a conversation about your center and whether FAC certification makes sense for you.",
};

export default function BookACallPage() {
  return (
    <section className="bg-white py-14 sm:py-20">
      <Container>
        <div className="grid items-start gap-10 lg:grid-cols-[1fr_1.1fr] lg:gap-16">
          {/* Intro — Amber's greeting */}
          <div>
            <p className="text-[22px] leading-[1.4] text-ink sm:text-[26px]">
              Hi, I&rsquo;m Amber. This is a free 15-minute call. No pressure, no
              pitch. Just a conversation about your center and whether FAC
              certification makes sense for you.
            </p>

            <p className="mt-6 text-lg font-semibold text-ink sm:text-xl">
              Book a time that works and I&rsquo;ll see you there.
            </p>
          </div>

          {/* Booking calendar */}
          <div>
            <BookingWidget />
          </div>
        </div>
      </Container>
    </section>
  );
}
