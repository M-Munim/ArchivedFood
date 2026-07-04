"use client";

import { useCallback, useEffect, useState } from "react";
import Image, { type StaticImageData } from "next/image";
import statOne from "@/../public/images/one.png";
import statTwo from "@/../public/images/two.png";
import statThree from "@/../public/images/three.png";
import statFour from "@/../public/images/four.png";

type Stat = {
  /** Two-line quote: [line, line]. On desktop each entry is forced onto its own line. */
  quote: [string, string];
  source: string;
  /** Panel background colour. */
  bg: string;
  /** Statistic graphic composited on the coloured panel. */
  image: StaticImageData;
};

const STATS: Stat[] = [
  {
    quote: ["1 in 13 children has a food allergy.", "That’s about 2 kids in every classroom."],
    source: "Source: CDC, Healthy Schools (cdc.gov)",
    bg: "#ffbc00",
    image: statOne,
  },
  {
    quote: [
      "Over 60% of food allergy reactions at school",
      "happen in preschools and childcare facilities.",
    ],
    source: "Source: Food Allergy Research & Education (foodallergy.org)",
    bg: "#5bbaba",
    image: statTwo,
  },
  {
    quote: [
      "25% of severe reactions at school happen",
      "in children with no prior allergy diagnosis.",
    ],
    source: "Source: Food Allergy Research & Education (foodallergy.org)",
    bg: "#0089ff",
    image: statThree,
  },
  {
    quote: [
      "Up to 72% of childcare staff have never",
      "received food allergy training.",
    ],
    source: "Source: FARE early-childhood training data (foodallergy.org)",
    bg: "#f46800",
    image: statFour,
  },
];

const AUTOPLAY_MS = 6000;

export function StatCarousel() {
  const [index, setIndex] = useState(0);

  const go = useCallback((next: number) => {
    setIndex((next + STATS.length) % STATS.length);
  }, []);

  useEffect(() => {
    // Respect users who prefer reduced motion — don't auto-advance for them.
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (reduced) return;
    const id = setInterval(() => setIndex((i) => (i + 1) % STATS.length), AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [index]);

  return (
    <section id="stats" className="relative scroll-mt-20 overflow-hidden">
      {/* Sliding track: each stat is a full-width coloured panel. */}
      <div
        className="flex transition-transform duration-700 ease-out motion-reduce:transition-none"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {STATS.map((stat, i) => (
          <div
            key={i}
            className="flex min-h-[460px] w-full shrink-0 flex-col items-center justify-center px-6 pb-24 pt-16 text-center"
            style={{ backgroundColor: stat.bg }}
            aria-hidden={i !== index}
          >
            <Image
              src={stat.image}
              alt=""
              aria-hidden="true"
              priority={i === 0}
              className="mx-auto h-28 w-auto sm:h-36"
            />

            <blockquote className="mt-10 max-w-2xl font-serif text-[26px] font-extrabold italic leading-[1.2] text-ink sm:text-[34px] lg:max-w-[900px] lg:text-[36px]">
              {stat.quote[0]}{" "}
              {/* On desktop each half is forced onto its own line (2 lines total);
                  on smaller screens the halves flow and wrap naturally. */}
              <br className="hidden lg:block" />
              {stat.quote[1]}
            </blockquote>

            <p className="mt-6 text-sm text-ink/80">{stat.source}</p>
          </div>
        ))}
      </div>

      {/* Dots */}
      <div className="absolute inset-x-0 bottom-9 flex items-center justify-center gap-3">
        {STATS.map((_, i) => (
          <button
            key={i}
            type="button"
            aria-label={`Show statistic ${i + 1}`}
            aria-current={i === index}
            onClick={() => go(i)}
            className={`h-2.5 w-2.5 rounded-full transition-all ${
              i === index ? "bg-ink" : "bg-ink/40 hover:bg-ink/70"
            }`}
          />
        ))}
      </div>
    </section>
  );
}
