import type { Metadata } from "next";
import Link from "next/link";
import { NominateForm } from "@/components/directors/NominateForm";

export const metadata: Metadata = {
  title: "Nominate a center",
  description:
    "Help make childcare safer by nominating a center for our free Food Allergy Certified certification pilot program.",
};

export default function NominatePage() {
  return (
    <section className="bg-brand-brightblue px-4 py-10 sm:px-6 sm:py-16">
      <div className="mx-auto max-w-3xl rounded-3xl bg-brand-sky/40 p-6 shadow-lg sm:p-10">
        <div className="flex items-start justify-between gap-4">
          <h1 className="font-serif text-[28px] font-bold leading-[1.1] text-ink sm:text-[38px]">
            Nominate a childcare center
          </h1>
          <Link
            href="/for-directors"
            aria-label="Close and return to For Directors"
            className="mt-1 flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-ink transition hover:bg-black/10"
          >
            <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" aria-hidden="true">
              <path d="M6 6l12 12M18 6L6 18" />
            </svg>
          </Link>
        </div>

        <p className="mt-3 max-w-2xl text-lg font-semibold text-ink">
          Help make childcare safer by nominating a center for our free
          certification pilot program.
        </p>

        <div className="mt-8">
          <NominateForm />
        </div>
      </div>
    </section>
  );
}
