import { describe, it, expect } from "vitest";
import { existsSync } from "node:fs";
import { join } from "node:path";
import { mainNav, footerNav } from "./site";

/** Every internal link in the nav/footer must resolve to a real app route.
 *  This guards against the broken-link class of bug in CI. */
const APP_DIR = join(process.cwd(), "src", "app");

// Static legal links that live in the footer's bottom bar.
const LEGAL = ["/privacy", "/terms", "/cookies"];

function routeExists(href: string): boolean {
  // Strip query + hash, keep the path.
  const path = href.split(/[?#]/)[0];
  if (path === "/") return existsSync(join(APP_DIR, "page.tsx"));
  const segment = path.replace(/^\//, "");
  return existsSync(join(APP_DIR, segment, "page.tsx"));
}

describe("internal link integrity", () => {
  const internal = [
    ...mainNav.map((l) => l.href),
    ...footerNav.quickLinks.map((l) => l.href),
    ...footerNav.freeResources.map((l) => l.href),
    ...LEGAL,
  ].filter((h) => h.startsWith("/"));

  it.each([...new Set(internal)])("route exists for %s", (href) => {
    expect(routeExists(href), `no page for ${href}`).toBe(true);
  });
});
