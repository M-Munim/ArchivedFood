"use client";

import { useRouter } from "next/navigation";

export function LoginBackButton() {
  const router = useRouter();

  return (
    <button
      type="button"
      aria-label="Go back"
      onClick={() => {
        if (window.history.length > 1) {
          router.back();
          return;
        }

        router.push("/");
      }}
      className="absolute left-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full border border-ink/15 bg-white text-ink shadow-sm transition hover:bg-white/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-teal"
    >
      <svg
        viewBox="0 0 24 24"
        className="h-5 w-5"
        fill="none"
        stroke="currentColor"
        strokeWidth={2.5}
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <path d="M19 12H5" />
        <path d="M12 19l-7-7 7-7" />
      </svg>
    </button>
  );
}
