"use client";

import { useState } from "react";

/**
 * On-brand login form. Frontend-only: no auth provider is wired up yet, so a
 * submit shows an informational notice instead of authenticating.
 * TODO(backend): connect to the real auth provider / session endpoint.
 */
export function LoginForm() {
  const [values, setValues] = useState({ email: "", password: "" });
  const [notice, setNotice] = useState(false);

  const set = (key: keyof typeof values) => (e: React.ChangeEvent<HTMLInputElement>) =>
    setValues((v) => ({ ...v, [key]: e.target.value }));

  const field =
    "w-full rounded-xl border border-ink/25 bg-white px-4 py-3 text-ink placeholder:text-ink/45 focus:border-brand-teal focus:outline-none focus:ring-2 focus:ring-brand-teal/30";
  const label = "mb-1.5 block text-sm font-semibold text-ink";

  return (
    <form
      className="space-y-5"
      onSubmit={(e) => {
        e.preventDefault();
        setNotice(true);
      }}
    >
      <div>
        <label className={label} htmlFor="l-email">Email address</label>
        <input id="l-email" type="email" autoComplete="email" className={field} placeholder="you@email.com" value={values.email} onChange={set("email")} required />
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label className={label} htmlFor="l-password">Password</label>
          <button
            type="button"
            onClick={() => setNotice(true)}
            className="mb-1.5 text-sm font-medium text-brand-teal hover:text-brand-teal-dark"
          >
            Forgot password?
          </button>
        </div>
        <input id="l-password" type="password" autoComplete="current-password" className={field} placeholder="••••••••" value={values.password} onChange={set("password")} required />
      </div>

      <label className="flex items-center gap-2 text-sm text-ink/80">
        <input type="checkbox" className="h-4 w-4 rounded border-ink/30 accent-brand-teal" />
        Keep me signed in
      </label>

      {notice && (
        <p className="rounded-xl bg-brand-cream px-4 py-3 text-sm text-ink">
          Accounts aren&rsquo;t live yet — sign-in opens once certification
          enrollment launches. Want early access?{" "}
          <a href="/book-a-call" className="font-semibold text-brand-teal underline underline-offset-2">
            Book a call
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        className="w-full rounded-full bg-ink px-8 py-3.5 text-[17px] font-semibold text-white transition-colors hover:bg-black/80"
      >
        Log in
      </button>
    </form>
  );
}
