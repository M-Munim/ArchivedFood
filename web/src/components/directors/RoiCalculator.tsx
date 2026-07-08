"use client";

import { useMemo, useState } from "react";
import { FiHeart, FiShield, FiTrendingUp } from "react-icons/fi";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { Notch } from "./Notch";

const currency = (n: number) =>
  n.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
    maximumFractionDigits: 0,
  });

function SliderRow({
  label,
  min,
  max,
  step,
  value,
  onChange,
  minLabel,
  maxLabel,
  displayValue,
}: {
  label: string;
  min: number;
  max: number;
  step: number;
  value: number;
  onChange: (v: number) => void;
  minLabel: string;
  maxLabel: string;
  displayValue: string;
}) {
  return (
    <div>
      <div className="flex items-baseline justify-between gap-4">
        <label className="text-base font-medium text-ink/80">{label}</label>
        <span className="whitespace-nowrap font-serif text-2xl font-bold text-brand-teal">
          {displayValue}
        </span>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-range mt-3 w-full"
        aria-label={label}
      />
      <div className="mt-1 flex justify-between text-sm text-ink/50">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

export function RoiCalculator() {
  const [monthlyTuition, setMonthlyTuition] = useState(1300);
  const [enrollment, setEnrollment] = useState(24);
  const [years, setYears] = useState(2.5);

  const { annualValue, lifetimeValue } = useMemo(() => {
    const annual = Math.round(monthlyTuition * 12);
    return { annualValue: annual, lifetimeValue: Math.round(annual * years) };
  }, [monthlyTuition, years]);

  return (
    <section className="relative bg-brand-seafoam py-12 sm:py-14">
      <Container className="px-6 sm:px-0">
        <div className="mx-auto max-w-[880px] text-center">
          <Eyebrow>ROI Calculator</Eyebrow>
          <h2 className="mt-2 font-serif text-[28px] font-bold leading-tight text-ink sm:text-[32px]">
            See what one new family is worth to your center
          </h2>
          <p className="mx-auto mt-3 max-w-[560px] text-body text-ink/80">
            Most directors know their monthly tuition off the top of their head.
            Enter yours below and see the real number behind one enrollment, one
            that certification helps you protect and grow.
          </p>
        </div>

        {/* Calculator card */}
        <div className="mx-auto mt-7 max-w-[1000px] rounded-3xl bg-[#fbf8f3] p-6 text-left sm:p-10">
          <div className="grid items-start gap-8 md:grid-cols-2">
            {/* Inputs */}
            <div className="space-y-8">
              <SliderRow
                label="Monthly tuition per child"
                min={600}
                max={5000}
                step={25}
                value={monthlyTuition}
                onChange={setMonthlyTuition}
                minLabel="$600/mo"
                maxLabel="$5,000/mo"
                displayValue={currency(monthlyTuition)}
              />
              <SliderRow
                label="Current enrollment"
                min={6}
                max={150}
                step={1}
                value={enrollment}
                onChange={setEnrollment}
                minLabel="6"
                maxLabel="150"
                displayValue={`${enrollment} children`}
              />
              <SliderRow
                label="Average years a family stays enrolled"
                min={1}
                max={6}
                step={0.5}
                value={years}
                onChange={setYears}
                minLabel="1 year"
                maxLabel="6 years"
                displayValue={`${years} ${years === 1 ? "year" : "years"}`}
              />
            </div>

            {/* Outputs */}
            <div className="space-y-4">
              <div className="rounded-2xl border border-ink/5 bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <FiHeart
                    className="h-[18px] w-[18px] shrink-0 text-brand-orange"
                    aria-hidden="true"
                  />
                  <p className="text-base font-semibold text-ink">
                    What one new family brings you
                  </p>
                </div>
                <div className="mb-1 flex items-center justify-between">
                  <span className="text-base text-ink/60">One year enrolled</span>
                  <span className="font-bold text-ink">
                    {currency(annualValue)}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-base text-ink/60">
                    Over {years} years, your average stay
                  </span>
                  <span className="font-bold text-ink">
                    {currency(lifetimeValue)}
                  </span>
                </div>
              </div>

              <div className="rounded-2xl border border-ink/5 bg-white p-5 shadow-sm">
                <div className="mb-3 flex items-center gap-2">
                  <FiShield
                    className="h-[18px] w-[18px] shrink-0 text-brand-teal"
                    aria-hidden="true"
                  />
                  <p className="text-base font-semibold text-ink">
                    Why this matters
                  </p>
                </div>
                <p className="text-base leading-relaxed text-ink/70">
                  Families choose centers they trust without hesitation.
                  Certification is what lets a parent walk in and know their
                  child is protected, not just included.
                </p>
              </div>

              <div className="rounded-2xl border border-brand-teal/20 bg-[#eaf5f3] p-5">
                <div className="mb-2 flex items-center gap-2">
                  <FiTrendingUp
                    className="h-[18px] w-[18px] shrink-0 text-brand-teal"
                    aria-hidden="true"
                  />
                  <p className="text-base font-semibold text-brand-teal-dark">
                    The payback
                  </p>
                </div>
                <p className="text-base leading-relaxed text-ink/80">
                  Certification pays for itself in just a few weeks of one
                  child&rsquo;s tuition, and founding centers lock in an even
                  lower rate right now. One new enrolled family covers it, and
                  every family after that is money back in your pocket.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>

      <Notch colorClass="text-brand-seafoam" />
    </section>
  );
}
