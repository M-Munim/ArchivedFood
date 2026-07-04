import type { Metadata, Viewport } from "next";
import { Fraunces, Poppins } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { CookieConsent } from "@/components/consent/CookieConsent";
import { Analytics } from "@/components/analytics/Analytics";
import { RouteScrollReset } from "@/components/layout/RouteScrollReset";

const fraunces = Fraunces({
  subsets: ["latin"],
  style: ["normal", "italic"],
  variable: "--font-fraunces",
  display: "swap",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-poppins",
  display: "swap",
});

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#188079",
};

const description =
  "Food Allergy Certified helps childcare centers become the place food allergy families trust, choose, and never leave. The only food allergy certification designed for childcare centers.";

export const metadata: Metadata = {
  metadataBase: new URL("https://foodallergycertified.com"),
  title: {
    default:
      "Food Allergy Certified — The standard of care for children with food allergies",
    template: "%s | Food Allergy Certified",
  },
  description,
  applicationName: "Food Allergy Certified",
  keywords: [
    "food allergy certification",
    "childcare food allergy training",
    "allergy-safe daycare",
    "anaphylaxis training childcare",
    "food allergy certified centers",
  ],
  authors: [{ name: "Food Allergy Certified" }],
  openGraph: {
    title: "Food Allergy Certified",
    description,
    type: "website",
    siteName: "Food Allergy Certified",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Food Allergy Certified",
    description,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${poppins.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col overflow-x-hidden bg-white text-ink">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-white"
        >
          Skip to main content
        </a>
        <RouteScrollReset />
        <Header />
        <main id="main-content" className="flex-1">
          {children}
        </main>
        <Footer />
        <CookieConsent />
        <Analytics />
      </body>
    </html>
  );
}
