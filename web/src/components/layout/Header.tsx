"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Logo } from "@/components/ui/Logo";
import { Button } from "@/components/ui/Button";
import { CertifyButton } from "@/components/home/CertifyButton";
import { mainNav } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  // A few pages have a solid-white hero, so the header sits on a solid
  // background instead of the translucent blur used elsewhere.
  const useSolidHeaderBg =
    pathname === "/certification" ||
    pathname === "/ambers-story" ||
    pathname === "/directory" ||
    pathname === "/for-parents";

  if (pathname === "/login") {
    return null;
  }

  return (
    <header
      className={`sticky top-0 z-50 ${
        useSolidHeaderBg
          ? "bg-white"
          : "bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80"
      }`}
    >
      {/* Short bar with the taller logo hanging past the bottom edge. */}
      <div className="mx-auto flex h-[70px] w-full max-w-[1320px] items-center justify-between gap-4 px-5 py-0 sm:h-[76px] sm:px-6 lg:px-10">
        <Logo
          priority
          width={148}
          className="relative z-10 ml-1 mt-6 self-start [&_img]:h-auto [&_img]:w-[128px] sm:ml-0 xl:[&_img]:w-[148px]"
        />

        {/* Desktop nav + actions, grouped to the right to match the design */}
        <div className="hidden items-center gap-4 xl:flex">
          <nav aria-label="Main" className="flex items-center gap-5">
            {mainNav.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-[16px] font-medium text-ink transition-colors hover:text-brand-orange"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <Button href="/login" variant="outline" size="sm">
              Login
            </Button>
            <CertifyButton variant="mint" size="sm">
              Request a Spot
            </CertifyButton>
          </div>
        </div>

        {/* Mobile: Request a Spot + hamburger */}
        <div className="flex items-center gap-2 sm:gap-3 xl:hidden">
          <CertifyButton variant="mint" size="header">
            Request a Spot
          </CertifyButton>
          <button
            type="button"
            aria-label="Toggle menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="inline-flex flex-col gap-1.5 py-2 pl-[15px] pr-px sm:p-2"
          >
            <span
              className={`h-0.5 w-[34px] bg-ink transition-transform sm:w-6 ${
                open ? "translate-y-2 rotate-45" : ""
              }`}
            />
            <span
              className={`h-0.5 w-[34px] bg-ink transition-opacity sm:w-6 ${
                open ? "opacity-0" : ""
              }`}
            />
            <span
              className={`h-0.5 w-[34px] bg-ink transition-transform sm:w-6 ${
                open ? "-translate-y-2 -rotate-45" : ""
              }`}
            />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-black/10 bg-white xl:hidden">
          {/* pt clears the logo, which overhangs the short bar above. */}
          <nav aria-label="Mobile" className="flex flex-col px-6 pb-6 pt-12">
            {[{ label: "Home", href: "/" }, ...mainNav].map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className={`border-b border-black/10 py-4 text-[17px] transition-colors hover:text-brand-orange ${
                    isActive ? "font-bold text-ink" : "font-medium text-ink"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <Button href="/#community" variant="outline" size="sm">
                Join our community
              </Button>
              <Button href="/login" variant="outline" size="sm">
                Login
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
