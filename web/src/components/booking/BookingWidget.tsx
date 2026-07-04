"use client";

import { useMemo, useState } from "react";

/**
 * On-brand booking calendar. In the Mobile PDF (m-p5) this card is marked
 * "FPO — Calendly integration", so this is a styled, interactive placeholder:
 * it lets a visitor pick an available weekday + time and shows a confirmation.
 * TODO(backend): replace the slot selection with the real Calendly embed
 * (or POST the request to a scheduling endpoint).
 */

const WEEKDAYS = ["SUN", "MON", "TUE", "WED", "THU", "FRI", "SAT"] as const;
const MONTHS = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
] as const;

// Sample 15-minute intro slots offered on an available day.
const TIME_SLOTS = [
  "9:00 am", "9:30 am", "10:00 am", "11:00 am",
  "1:00 pm", "1:30 pm", "2:30 pm", "3:00 pm", "4:00 pm",
] as const;

function startOfDay(d: Date) {
  return new Date(d.getFullYear(), d.getMonth(), d.getDate());
}

export function BookingWidget() {
  const today = useMemo(() => startOfDay(new Date()), []);
  const [view, setView] = useState({ year: today.getFullYear(), month: today.getMonth() });
  const [selected, setSelected] = useState<Date | null>(null);
  const [slot, setSlot] = useState<string | null>(null);
  const [confirmed, setConfirmed] = useState(false);

  const firstOfMonth = new Date(view.year, view.month, 1);
  const daysInMonth = new Date(view.year, view.month + 1, 0).getDate();
  const leadingBlanks = firstOfMonth.getDay();

  // A day is bookable if it is today-or-later and a weekday (Mon–Fri).
  const isAvailable = (day: number) => {
    const d = new Date(view.year, view.month, day);
    const weekday = d.getDay();
    return d >= today && weekday !== 0 && weekday !== 6;
  };

  const atMonthStart =
    view.year === today.getFullYear() && view.month === today.getMonth();

  const shiftMonth = (delta: number) => {
    setSelected(null);
    setSlot(null);
    setConfirmed(false);
    setView((v) => {
      const m = v.month + delta;
      return { year: v.year + Math.floor(m / 12), month: ((m % 12) + 12) % 12 };
    });
  };

  const cells: (number | null)[] = [
    ...Array(leadingBlanks).fill(null),
    ...Array.from({ length: daysInMonth }, (_, i) => i + 1),
  ];

  const longDate = selected
    ? selected.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
      })
    : "";

  if (confirmed && selected && slot) {
    return (
      <div className="rounded-3xl bg-brand-mint/30 p-8 text-center sm:p-10">
        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-teal text-white">
          <svg viewBox="0 0 24 24" className="h-8 w-8" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <path d="M20 6L9 17l-5-5" />
          </svg>
        </div>
        <h3 className="mt-6 font-serif text-[26px] font-bold text-brand-teal-dark">
          You&rsquo;re booked!
        </h3>
        <p className="mt-3 text-lg text-ink">
          Your 15-minute call is set for
          <br />
          <span className="font-semibold">{longDate} at {slot}</span>.
        </p>
        <p className="mt-4 text-ink/70">
          A calendar invite is on its way. Can&rsquo;t wait to chat!
        </p>
        <button
          type="button"
          onClick={() => {
            setConfirmed(false);
            setSelected(null);
            setSlot(null);
          }}
          className="mt-8 inline-flex items-center justify-center rounded-full border border-ink/70 px-6 py-3 font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Pick a different time
        </button>
      </div>
    );
  }

  return (
    <div className="rounded-3xl bg-brand-mint/30 p-6 sm:p-8">
      <h3 className="font-serif text-[24px] font-bold text-brand-teal-dark sm:text-[26px]">
        Select a Date &amp; Time
      </h3>

      {/* Month navigation */}
      <div className="mt-6 flex items-center justify-between">
        <button
          type="button"
          aria-label="Previous month"
          disabled={atMonthStart}
          onClick={() => shiftMonth(-1)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-black/10 disabled:cursor-not-allowed disabled:opacity-30"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M15 6l-6 6 6 6" /></svg>
        </button>
        <p className="font-semibold text-ink">
          {MONTHS[view.month]} {view.year}
        </p>
        <button
          type="button"
          aria-label="Next month"
          onClick={() => shiftMonth(1)}
          className="flex h-9 w-9 items-center justify-center rounded-full text-ink transition hover:bg-black/10"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round"><path d="M9 6l6 6-6 6" /></svg>
        </button>
      </div>

      {/* Weekday header */}
      <div className="mt-6 grid grid-cols-7 gap-y-2 text-center text-xs font-semibold tracking-wide text-ink/50">
        {WEEKDAYS.map((d) => (
          <span key={d}>{d}</span>
        ))}
      </div>

      {/* Day grid */}
      <div className="mt-2 grid grid-cols-7 gap-y-2 text-center">
        {cells.map((day, i) => {
          if (day === null) return <span key={`b${i}`} />;
          const available = isAvailable(day);
          const isSelected =
            selected &&
            selected.getFullYear() === view.year &&
            selected.getMonth() === view.month &&
            selected.getDate() === day;
          return (
            <div key={day} className="flex justify-center">
              <button
                type="button"
                disabled={!available}
                onClick={() => {
                  setSelected(new Date(view.year, view.month, day));
                  setSlot(null);
                }}
                className={[
                  "flex h-11 w-11 items-center justify-center rounded-full text-[15px] transition",
                  isSelected
                    ? "bg-brand-teal-dark font-bold text-white"
                    : available
                      ? "bg-brand-teal/85 font-semibold text-white hover:bg-brand-teal"
                      : "cursor-default text-ink/30",
                ].join(" ")}
              >
                {day}
              </button>
            </div>
          );
        })}
      </div>

      {/* Time slots — shown once a date is chosen */}
      {selected && (
        <div className="mt-8 border-t border-black/10 pt-6">
          <p className="text-sm font-semibold text-ink">
            {longDate}
          </p>
          <div className="mt-4 grid grid-cols-3 gap-3">
            {TIME_SLOTS.map((t) => (
              <button
                key={t}
                type="button"
                onClick={() => setSlot(t)}
                className={[
                  "rounded-xl border px-2 py-3 text-sm font-semibold transition",
                  slot === t
                    ? "border-brand-teal bg-brand-teal text-white"
                    : "border-ink/25 text-ink hover:border-brand-teal hover:text-brand-teal",
                ].join(" ")}
              >
                {t}
              </button>
            ))}
          </div>
          {slot && (
            <button
              type="button"
              onClick={() => setConfirmed(true)}
              className="mt-6 w-full rounded-full bg-ink px-8 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-black/80"
            >
              Confirm {slot}
            </button>
          )}
        </div>
      )}

      {/* Time zone + troubleshooting footer */}
      <div className="mt-8 border-t border-black/10 pt-6">
        <p className="text-xs font-semibold uppercase tracking-wide text-ink/50">
          Time zone
        </p>
        <p className="mt-2 flex items-center gap-2 text-ink/70">
          <svg viewBox="0 0 24 24" className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth={2} aria-hidden="true">
            <circle cx="12" cy="12" r="9" />
            <path d="M3 12h18M12 3c2.5 2.7 2.5 15.3 0 18M12 3c-2.5 2.7-2.5 15.3 0 18" />
          </svg>
          Eastern Time (US &amp; Canada)
        </p>
        <button
          type="button"
          className="mt-5 inline-flex items-center justify-center rounded-full border border-ink/60 px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:bg-ink hover:text-white"
        >
          Troubleshooting
        </button>
      </div>
    </div>
  );
}
