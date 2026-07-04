"use client";

import { useState } from "react";
import { FiCheck } from "react-icons/fi";

/**
 * Nominate-a-center form (Desktop PDF p17 / Mobile p20). Frontend-only:
 * validates and shows a success state but does not submit anywhere yet.
 * TODO(backend): POST the nomination to an email service / CRM endpoint.
 */
const FIELDS = [
  { key: "name", label: "Your name", type: "text", required: true },
  { key: "email", label: "Your email", type: "email", required: true },
  {
    key: "center",
    label: "Childcare center name",
    type: "text",
    required: true,
  },
  { key: "location", label: "Center location", type: "text", required: true },
  {
    key: "contactPerson",
    label: "Contact person at center (if known)",
    type: "text",
    required: false,
  },
  {
    key: "contactEmail",
    label: "Contact email (if known)",
    type: "email",
    required: false,
  },
] as const;

export function NominateForm({ compact = false }: { compact?: boolean }) {
  const [done, setDone] = useState(false);
  const [values, setValues] = useState<Record<string, string>>({});

  const set =
    (key: string) =>
    (event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
      setValues((current) => ({ ...current, [key]: event.target.value }));

  if (done) {
    return (
      <div className={compact ? "py-10 text-center" : "py-8 text-center"}>
        <div
          className={`mx-auto flex items-center justify-center rounded-full bg-brand-teal text-white ${
            compact ? "h-12 w-12" : "h-14 w-14"
          }`}
        >
          <FiCheck
            className={compact ? "h-6 w-6" : "h-7 w-7"}
            aria-hidden="true"
          />
        </div>
        <h2
          className={`mt-5 font-serif font-bold text-ink ${
            compact ? "text-[22px]" : "text-2xl"
          }`}
        >
          Thank you for the nomination!
        </h2>
        <p
          className={`mx-auto mt-3 max-w-md text-ink/80 ${
            compact ? "text-base" : "text-lg"
          }`}
        >
          We&rsquo;ll reach out to {values.center || "the center"} about our
          free certification pilot program.
        </p>
      </div>
    );
  }

  const field = compact
    ? "w-full border border-ink/55 bg-transparent px-3 py-1.5 text-[13px] leading-snug text-ink focus:border-brand-teal focus:outline-none focus:ring-1 focus:ring-brand-teal"
    : "w-full border border-ink/80 bg-white px-4 py-3 text-ink placeholder:text-ink/40 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30";
  const label = compact
    ? "mb-1.5 block text-xs leading-tight text-ink"
    : "mb-2 block text-lg text-ink";

  return (
    <form
      className={compact ? "space-y-2.5" : "space-y-5"}
      onSubmit={(event) => {
        event.preventDefault();
        if (values.name && values.email && values.center && values.location) {
          setDone(true);
        }
      }}
    >
      {FIELDS.map((item) => (
        <div key={item.key}>
          <label className={label} htmlFor={`nom-${item.key}`}>
            {item.label}
          </label>
          <input
            id={`nom-${item.key}`}
            type={item.type}
            className={field}
            value={values[item.key] ?? ""}
            onChange={set(item.key)}
            required={item.required}
          />
        </div>
      ))}

      <div>
        <label className={label} htmlFor="nom-reason">
          Reason for center nomination
        </label>
        <textarea
          id="nom-reason"
          rows={compact ? 1 : 3}
          className={`${field} ${compact ? "h-8 resize-none" : "resize-y"}`}
          value={values.reason ?? ""}
          onChange={set("reason")}
        />
      </div>

      <div className={compact ? "pt-1.5" : "pt-2"}>
        <button
          type="submit"
          className={`rounded-full bg-ink font-semibold text-white transition-colors hover:bg-black/80 ${
            compact
              ? "px-4 py-2.5 text-xs leading-none"
              : "px-8 py-3.5 text-[17px]"
          }`}
        >
          Submit
        </button>
      </div>
    </form>
  );
}
