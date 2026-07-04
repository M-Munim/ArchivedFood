"use client";

import Script from "next/script";
import { useConsent } from "@/lib/consent";

/**
 * Privacy-first analytics loader. It loads Google Analytics (GA4) ONLY when:
 *   1. a measurement ID is configured via NEXT_PUBLIC_ANALYTICS_ID, AND
 *   2. the visitor has accepted analytics cookies (see CookieConsent).
 * With no ID set it is a complete no-op, so the site ships without analytics
 * until the client provides an ID. It reacts to consent changes without a reload.
 */
const MEASUREMENT_ID = process.env.NEXT_PUBLIC_ANALYTICS_ID;

export function Analytics() {
  const consent = useConsent();

  if (!MEASUREMENT_ID || consent !== "accepted") return null;

  return (
    <>
      <Script
        src={`https://www.googletagmanager.com/gtag/js?id=${MEASUREMENT_ID}`}
        strategy="afterInteractive"
      />
      <Script id="ga4-init" strategy="afterInteractive">
        {`
          window.dataLayer = window.dataLayer || [];
          function gtag(){dataLayer.push(arguments);}
          gtag('js', new Date());
          gtag('config', '${MEASUREMENT_ID}', { anonymize_ip: true });
        `}
      </Script>
    </>
  );
}
