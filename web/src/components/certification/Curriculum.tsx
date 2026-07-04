"use client";

import { useState } from "react";
import { IoChevronBack, IoChevronForward } from "react-icons/io5";
import { Button } from "@/components/ui/Button";

type Module = {
  n: number;
  title: string;
  body: string;
};

const MODULES: Module[] = [
  {
    n: 1,
    title: "Understanding Food Allergies",
    body: "What food allergies actually are, how they differ from intolerances and sensitivities, and why they matter specifically in childcare settings. The top 9 allergens and where they hide, including in classroom materials.",
  },
  {
    n: 2,
    title: "Recognizing Reactions",
    body: "Early and severe signs of allergic reactions, including behavioral changes that appear before physical symptoms do. The Look Test, a fast and visual way to identify reactions in progress.",
  },
  {
    n: 3,
    title: "Prevention",
    body: "Cross-contact in daily routines, safe kitchen and snack practices, and how to keep children safe during celebrations, field trips, and everyday social moments.",
  },
  {
    n: 4,
    title: "Emergency Response",
    body: "When and how to use an EpiPen, Auvi-Q, and Neffy. The 911 protocol. What to do in the minutes before help arrives.",
  },
  {
    n: 5,
    title: "Communication with Families",
    body: "What food allergy parents need to feel safe, how to communicate clearly every day, and how to build a real partnership with the families who trust you with their children.",
  },
  {
    n: 6,
    title: "Allergy-Safe Classroom Culture",
    body: "Empowering every team member, including substitutes and floaters. How to include children with allergies fully in every activity. The daily risk walkthrough.",
  },
];

const MODULE_PAGES = [
  MODULES.slice(0, 2),
  MODULES.slice(2, 4),
  MODULES.slice(4, 6),
];

function ModuleCard({
  module,
  className = "min-h-[376px] rounded-[26px] bg-white px-8 py-10 sm:px-11 sm:py-11",
  bodyClassName = "mt-4 text-[20px] leading-[1.27] text-ink",
}: {
  module: Module;
  className?: string;
  bodyClassName?: string;
}) {
  return (
    <article className={className}>
      <p className="text-[18px] font-semibold uppercase leading-none tracking-[0.03em] text-brand-orange">
        Module {module.n}
      </p>
      <h3 className="mt-1 text-[20px] font-semibold leading-[1.15] text-ink">
        {module.title}
      </h3>
      <p className={bodyClassName}>{module.body}</p>
    </article>
  );
}

export function Curriculum() {
  const [desktopPage, setDesktopPage] = useState(0);
  const [mobilePage, setMobilePage] = useState(0);
  const lastDesktopPage = MODULE_PAGES.length - 1;
  const lastMobilePage = MODULES.length - 1;

  return (
    <section id="process" className="scroll-mt-20 bg-brand-sky pb-14 pt-6">
      <div className="mx-auto max-w-[1160px] px-6 text-center">
        <h2 className="font-serif text-[27px] font-bold leading-tight text-ink sm:text-[40px]">
          Curriculum overview
        </h2>
        <p className="mx-auto mt-3 max-w-[314px] text-[15px] leading-[1.2] text-ink sm:max-w-[1110px] sm:text-[20px] sm:leading-[1.3]">
          The FAC standard covers everything a childcare professional needs to
          recognize, prevent, and respond to food allergy emergencies. 90
          minutes, fully online, built around the pace of real childcare work.
        </p>
      </div>

      <div className="mx-auto mt-8 max-w-[291px] px-0 sm:hidden">
        <div className="overflow-hidden">
          <div
            id="curriculum-track-mobile"
            className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${mobilePage * 100}%)` }}
          >
            {MODULES.map((module, moduleIndex) => (
              <div
                key={module.n}
                data-testid={`curriculum-mobile-page-${moduleIndex}`}
                aria-hidden={moduleIndex !== mobilePage}
                className="min-w-full"
              >
                <ModuleCard
                  module={module}
                  className="min-h-[194px] rounded-[24px] bg-white px-5 py-6"
                  bodyClassName="mt-4 text-[14px] leading-[1.12] text-ink"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="mt-5 flex items-center justify-center gap-4">
          <button
            type="button"
            aria-label="Previous modules"
            aria-controls="curriculum-track-mobile"
            disabled={mobilePage === 0}
            onClick={() => setMobilePage((current) => Math.max(0, current - 1))}
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:bg-black/20"
          >
            <IoChevronBack className="h-7 w-7" aria-hidden="true" />
          </button>

          <button
            type="button"
            aria-label="Next modules"
            aria-controls="curriculum-track-mobile"
            disabled={mobilePage === lastMobilePage}
            onClick={() =>
              setMobilePage((current) => Math.min(lastMobilePage, current + 1))
            }
            className="flex h-11 w-11 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:bg-black/20"
          >
            <IoChevronForward className="h-7 w-7" aria-hidden="true" />
          </button>
        </div>
      </div>

      <div className="mx-auto mt-8 hidden max-w-[1076px] grid-cols-[56px_minmax(0,1fr)_56px] items-center gap-8 px-6 sm:grid lg:grid-cols-[56px_minmax(0,810px)_56px] lg:gap-[77px] lg:px-0">
        <button
          type="button"
          aria-label="Previous modules"
          aria-controls="curriculum-track"
          disabled={desktopPage === 0}
          onClick={() => setDesktopPage((current) => Math.max(0, current - 1))}
          className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:bg-black/20"
        >
          <IoChevronBack className="h-7 w-7" aria-hidden="true" />
        </button>

        <div className="overflow-hidden">
          <div
            id="curriculum-track"
            className="flex transition-transform duration-500 ease-out motion-reduce:transition-none"
            style={{ transform: `translateX(-${desktopPage * 100}%)` }}
          >
            {MODULE_PAGES.map((modules, pageIndex) => (
              <div
                key={modules[0].n}
                data-testid={`curriculum-page-${pageIndex}`}
                aria-hidden={pageIndex !== desktopPage}
                className="grid min-w-full grid-cols-2 gap-8"
              >
                {modules.map((module) => (
                  <ModuleCard key={module.n} module={module} />
                ))}
              </div>
            ))}
          </div>
        </div>

        <button
          type="button"
          aria-label="Next modules"
          aria-controls="curriculum-track"
          disabled={desktopPage === lastDesktopPage}
          onClick={() =>
            setDesktopPage((current) => Math.min(lastDesktopPage, current + 1))
          }
          className="flex h-14 w-14 items-center justify-center rounded-full bg-ink text-white transition-colors hover:bg-black/80 disabled:cursor-not-allowed disabled:bg-black/20"
        >
          <IoChevronForward className="h-7 w-7" aria-hidden="true" />
        </button>
      </div>

      <p className="sr-only" aria-live="polite">
        Showing module {mobilePage + 1} on mobile and modules{" "}
        {desktopPage * 2 + 1} and {desktopPage * 2 + 2} on larger screens, out
        of {MODULES.length}
      </p>

      <div className="mt-8 flex justify-center">
        <Button
          href="/book-a-call"
          variant="outline"
          className="!bg-transparent px-8 text-[18px] hover:!bg-ink sm:px-8"
        >
          Enroll your center
        </Button>
      </div>
    </section>
  );
}
