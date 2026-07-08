"use client";

import { useState } from "react";

/**
 * On-brand contact form. Frontend-only: it validates and shows a success
 * state but does not send anywhere yet.
 * TODO(backend): POST to an email service / CRM endpoint.
 */
export function ContactForm() {
  const [done, setDone] = useState(false);
  const [values, setValues] = useState({
    first: "",
    last: "",
    email: "",
    role: "",
    message: "",
  });

  const set = (key: keyof typeof values) => (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) => setValues((v) => ({ ...v, [key]: e.target.value }));

  if (done) {
    return (
      <div className="rounded-3xl bg-brand-mint/30 p-8 text-center sm:p-10">
        <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-brand-teal text-white">
          <svg viewBox="0 0 24 24" className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round" aria-hidden="true"><path d="M20 6L9 17l-5-5" /></svg>
        </div>
        <h3 className="mt-5 font-serif text-2xl font-bold text-brand-teal-dark">
          Thanks, {values.first || "friend"}!
        </h3>
        <p className="mt-3 text-body text-ink">
          Your message is on its way. We&rsquo;ll get back to you within one
          business day.
        </p>
      </div>
    );
  }

  const field =
    "w-full rounded-xl border border-ink/25 bg-white px-4 py-3 text-ink placeholder:text-ink/45 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30";
  const label = "mb-1.5 block text-sm font-semibold text-ink";

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        if (values.first && values.email && values.message) setDone(true);
      }}
    >
      <div className="grid gap-5 sm:grid-cols-2">
        <div>
          <label className={label} htmlFor="c-first">First name</label>
          <input id="c-first" className={field} placeholder="First name" value={values.first} onChange={set("first")} required />
        </div>
        <div>
          <label className={label} htmlFor="c-last">Last name</label>
          <input id="c-last" className={field} placeholder="Last name" value={values.last} onChange={set("last")} />
        </div>
      </div>

      <div>
        <label className={label} htmlFor="c-email">Email address</label>
        <input id="c-email" type="email" className={field} placeholder="jane@email.com" value={values.email} onChange={set("email")} required />
      </div>

      <div>
        <label className={label} htmlFor="c-role">I am a…</label>
        <select id="c-role" className={`${field} appearance-none`} value={values.role} onChange={set("role")}>
          <option value="">Select one</option>
          <option value="parent">Parent / caregiver</option>
          <option value="director">Childcare director / owner</option>
          <option value="staff">Childcare staff member</option>
          <option value="other">Someone else</option>
        </select>
      </div>

      <div>
        <label className={label} htmlFor="c-message">How can we help?</label>
        <textarea id="c-message" rows={5} className={`${field} resize-y`} placeholder="Tell us a little about what you're looking for…" value={values.message} onChange={set("message")} required />
      </div>

      <button
        type="submit"
        className="w-full rounded-full bg-ink px-8 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-ink sm:w-auto"
      >
        Send message
      </button>
    </form>
  );
}
