import "@testing-library/jest-dom/vitest";
import { cleanup } from "@testing-library/react";
import { afterEach, vi } from "vitest";
import React from "react";

afterEach(() => {
  cleanup();
  localStorage.clear();
});

// next/image → plain <img> for jsdom. Handles both string and StaticImageData src.
vi.mock("next/image", () => ({
  default: (props: Record<string, unknown>) => {
    // Strip Next-only props that a plain <img> doesn't understand.
    const { src, alt, fill, priority, sizes, unoptimized, ...rest } = props;
    void fill;
    void priority;
    void sizes;
    void unoptimized;
    const resolved =
      typeof src === "string"
        ? src
        : ((src as { src?: string } | undefined)?.src ?? "/stub.png");
    return React.createElement("img", { src: resolved, alt, ...rest });
  },
}));

// next/link → plain <a>.
vi.mock("next/link", () => ({
  default: ({
    href,
    children,
    ...rest
  }: {
    href: string;
    children: React.ReactNode;
  }) => React.createElement("a", { href, ...rest }, children),
}));

// jsdom lacks matchMedia (used by prefers-reduced-motion checks).
Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    addListener: vi.fn(),
    removeListener: vi.fn(),
    dispatchEvent: vi.fn(),
  }),
});
