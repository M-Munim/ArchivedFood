"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";

export function JoinCommunity() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <section id="community" className="scroll-mt-24 bg-brand-mint py-14">
      <Container className="px-6 sm:px-0">
        <div className="mx-auto max-w-[760px] text-left sm:text-center">
          <div className="mx-auto">
            <h2 className="text-[28px] font-extrabold uppercase leading-[1.05] tracking-wide text-ink sm:text-[24px] sm:leading-none">
              Join our community
            </h2>
            <p className="mt-5 text-lg leading-[1.18] text-ink sm:mt-7  sm:leading-none">
              Stay in the know about future food allergy certifications, events,
              and news.
            </p>
          </div>

          {submitted ? (
            <p className="mt-8 text-lg font-semibold text-ink">
              Thanks for joining! We&rsquo;ll be in touch soon.
            </p>
          ) : (
            <form
              className="mx-auto mt-8 flex w-full max-w-[775px] flex-row gap-0 sm:mt-9 sm:flex-row"
              onSubmit={(e) => {
                e.preventDefault();
                if (email.trim()) setSubmitted(true);
              }}
            >
              <label htmlFor="community-email" className="sr-only">
                Email address
              </label>
              <input
                id="community-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="enter your email"
                className="h-[45px] min-w-0 flex-1 border border-ink bg-brand-mint px-3 text-[18px] leading-none text-ink placeholder:text-[#777777] focus:outline-none focus:ring-2 focus:ring-brand-orange sm:px-4 sm:text-[20px]"
              />
              <button
                type="submit"
                className="inline-flex h-[45px] w-[128px] shrink-0 items-center justify-center bg-ink px-4  font-semibold leading-none text-white transition-colors hover:bg-black/80 sm:w-[124px] sm:px-5 "
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </Container>
    </section>
  );
}
