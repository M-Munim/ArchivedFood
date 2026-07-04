"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

/**
 * Next.js preserves the current scroll position when the first element of the
 * destination page is already visible. For long pages reached from the footer,
 * that can leave the new route slightly scrolled under the sticky header.
 */
export function RouteScrollReset() {
  const pathname = usePathname();

  useEffect(() => {
    // Let native anchor navigation keep its intended destination.
    if (window.location.hash) {
      return;
    }

    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "instant",
    });
  }, [pathname]);

  return null;
}
