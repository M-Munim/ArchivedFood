"use client";

import { useState } from "react";
import { FiMinus, FiPlus } from "react-icons/fi";

export type FaqItem = { q: string; a: string };

export function FaqList({
  items,
  defaultOpen = 0,
  initialCount,
}: {
  items: FaqItem[];
  defaultOpen?: number | null;
  // When set, only the first `initialCount` items show until "Read more" is
  // clicked. Omit to always show every item.
  initialCount?: number;
}) {
  const [open, setOpen] = useState<number | null>(defaultOpen);
  const [showAll, setShowAll] = useState(false);

  const collapsible = initialCount != null && items.length > initialCount;
  const visibleItems =
    collapsible && !showAll ? items.slice(0, initialCount) : items;

  function toggleShowAll() {
    // Collapsing while an item beyond the initial set is open would hide the
    // open answer, so snap back to the default item first.
    if (showAll && open !== null && initialCount != null && open >= initialCount) {
      setOpen(defaultOpen);
    }
    setShowAll((current) => !current);
  }

  return (
    <div className="mx-auto max-w-[900px]">
      {visibleItems.map((item, i) => {
        const isOpen = open === i;
        return (
          <div key={item.q}>
            <button
              type="button"
              onClick={() => setOpen(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="flex w-full items-center justify-between gap-6 py-2 text-left"
            >
              <span className="text-lg font-semibold text-ink">{item.q}</span>
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
              <p className="pb-2 pr-10 text-lg leading-[1.35] text-ink/80">
                {item.a}
              </p>
            )}
          </div>
        );
      })}

      {collapsible && (
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
  );
}
