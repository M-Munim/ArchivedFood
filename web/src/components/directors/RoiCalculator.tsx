"use client";

import { useState } from "react";
import { Container } from "@/components/ui/Container";
import { Eyebrow } from "@/components/ui/Eyebrow";
import { WaitlistButton } from "@/components/home/WaitlistButton";
import { Notch } from "./Notch";

function SliderRow({
  label,
  hint,
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
  hint: string;
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
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-xl font-semibold text-ink">{label}</p>
          <p className="mt-1 text-base text-ink/60">{hint}</p>
        </div>
        <p className="whitespace-nowrap font-serif text-2xl font-bold text-brand-teal">
          {displayValue}
        </p>
      </div>
      <input
        type="range"
        min={min}
        max={max}
        step={step}
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
        className="roi-range mt-5 w-full"
        aria-label={label}
      />
      <div className="mt-1 flex justify-between text-sm text-ink/60">
        <span>{minLabel}</span>
        <span>{maxLabel}</span>
      </div>
    </div>
  );
}

export function RoiCalculator() {
  const [enrollment, setEnrollment] = useState(24);
  const [years, setYears] = useState(2.5);

  return (
    <section className="relative bg-brand-seafoam py-12 sm:py-14">
      <Container className="px-6 sm:px-0">
        <div className="mx-auto max-w-[880px]">
          <div className="text-center">
            <Eyebrow>ROI Calculator</Eyebrow>
            <h2 className="mt-2 font-serif text-[28px] font-bold leading-tight text-ink sm:text-[32px]">
              One enrollment changes the math completely
            </h2>
          </div>

          <div className="mt-6 space-y-3 text-lg leading-[1.3] text-ink">
            <p>
              The national average for center-based childcare is over $13,000
              per child per year. In premium markets like California, New York,
              and Washington DC, families pay $20,000 or more annually.
            </p>
            <p>
              If becoming FAC Certified helps you earn the trust of one family
              who was on the fence, one family who chose you because you had the
              certification and the other center didn&rsquo;t, your investment
              pays for itself many times over. Every year that child is
              enrolled.
            </p>
            <p>
              That&rsquo;s not a cost. That&rsquo;s a growth strategy.
            </p>
          </div>

          <p className="mt-3 text-xs italic text-ink/80">
            Source: Economic Policy Institute, Child Care Aware of America,
            National Database of Childcare Prices (2024 to 2025)
          </p>
        </div>

        {/* Calculator card */}
        <div className="mx-auto mt-7 max-w-[1200px] rounded-3xl bg-white p-6 text-left sm:p-10">
          <div className="space-y-8">
            <SliderRow
              label="Current enrollment"
              hint="Total children currently enrolled at your center"
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
              hint="How long the typical family remains at your center"
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
        </div>

        <div className="mt-7 flex flex-col items-center gap-5 text-center">
          <p className="text-lg font-semibold text-ink">
            Certification is priced to your center. Let&rsquo;s talk about what
            makes sense for you.
          </p>
          <WaitlistButton
            variant="mint"
            size="sm"
            className="bg-white py-4 px-6 hover:bg-white/85"
          />
        </div>
      </Container>

      <Notch colorClass="text-brand-seafoam" />
    </section>
  );
}
