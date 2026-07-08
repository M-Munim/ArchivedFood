"use client";

import { useState } from "react";
import Image from "next/image";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import centerBadge from "@/../public/images/Group 3.png";
import slider2 from "@/../public/images/slider2.png";
import slider3 from "@/../public/images/slider3.png";
import slider4 from "@/../public/images/slider4.png";
import slider5 from "@/../public/images/slider5.png";
import slider6 from "@/../public/images/slider6.png";
import { Notch } from "./Notch";

const DELIVERABLES = [
  {
    image: centerBadge,
    title: "FAC Certified Center digital badge",
    caption: "for your website and social profiles",
  },
  {
    image: slider2,
    title: "Physical Window Decal",
    caption:
      "to display at entrance so families see it the moment they arrive",
  },
  {
    image: slider3,
    title: "Parent Trust Kit",
    caption:
      "with ready-to-use email templates, print flyers, and social posts so you can share your certification",
  },
  {
    image: slider4,
    title: "Individual Staff Certificates",
    caption: "for every team member who completes the standard",
  },
  {
    image: slider5,
    title: "Annual Renewal",
    caption:
      "to keep your center current with the latest FDA allergen guidelines",
  },
  {
    image: slider6,
    title: "FAC Certified Center",
    caption: "Directory Listing",
  },
];

export function CenterReceives() {
  const [index, setIndex] = useState(0);
  const item = DELIVERABLES[index];
  const isFirst = index === 0;
  const isLast = index === DELIVERABLES.length - 1;

  return (
    <section className="relative bg-white pb-12 pt-14 sm:pb-[48px] sm:pt-[52px]">
      <Container className="px-6 sm:px-0">
        <div className="mx-auto text-center">
          <Eyebrow>What Your Center Receives</Eyebrow>
          <h2 className="mx-auto mt-3 max-w-[575px] font-serif text-[30px] font-bold leading-[1.05] text-ink sm:text-4xl">
            Everything your center needs to show families you&rsquo;re ready
          </h2>
        </div>

        <div className="mx-auto mt-14 max-w-[1140px] sm:mt-[84px]">
          <figure
            className="flex flex-col items-center text-center"
            aria-live="polite"
          >
            {/* Image row: each slide graphic sits in a fixed-height box so the
                mixed aspect ratios stay vertically consistent, with the arrows
                centered on that box. */}
            <div className="relative w-full">
              <button
                type="button"
                aria-label="Previous item"
                onClick={() => setIndex((current) => Math.max(0, current - 1))}
                disabled={isFirst}
                className="absolute left-0 top-1/2 z-10 hidden h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:bg-[#bcbcbc] sm:flex"
              >
                <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
              </button>

              <div className="relative mx-auto h-[200px] w-full sm:h-[280px] ">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 90vw, 640px"
                  className="object-contain"
                  priority={index === 0}
                />
              </div>

              <button
                type="button"
                aria-label="Next item"
                onClick={() =>
                  setIndex((current) =>
                    Math.min(DELIVERABLES.length - 1, current + 1),
                  )
                }
                disabled={isLast}
                className="absolute right-0 top-1/2 z-10 hidden h-[42px] w-[42px] -translate-y-1/2 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:bg-[#bcbcbc] sm:flex"
              >
                <FaChevronRight className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>

            <figcaption className="mx-auto mt-10 max-w-[460px] sm:mt-12">
              <p className="text-body text-ink">
                {/* On mobile the bold title sits on its own line with the caption
                    beneath it (matching the Figma); at sm+ the break is hidden so
                    they flow together inline. */}
                <span className="font-semibold">{item.title}</span>{" "}
                <br className="sm:hidden" />
                {item.caption}
              </p>
            </figcaption>
          </figure>
        </div>

        <div className="mt-6 flex items-center justify-center gap-4 sm:hidden">
          <button
            type="button"
            aria-label="Previous item"
            onClick={() => setIndex((current) => Math.max(0, current - 1))}
            disabled={isFirst}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:bg-[#bcbcbc]"
          >
            <FaChevronLeft className="h-5 w-5" aria-hidden="true" />
          </button>
          <button
            type="button"
            aria-label="Next item"
            onClick={() =>
              setIndex((current) =>
                Math.min(DELIVERABLES.length - 1, current + 1),
              )
            }
            disabled={isLast}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-ink disabled:cursor-not-allowed disabled:bg-[#bcbcbc]"
          >
            <FaChevronRight className="h-5 w-5" aria-hidden="true" />
          </button>
        </div>
      </Container>

      <Notch colorClass="text-white" />
    </section>
  );
}
