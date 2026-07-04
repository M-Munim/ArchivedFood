"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { footerNav, siteConfig, socialLinks } from "@/lib/site";
import { SocialIcon } from "./SocialIcons";
import logo from "@/../public/images/logo.png";

export function Footer() {
  const pathname = usePathname();

  if (pathname === "/login") {
    return null;
  }

  return (
    <footer className="mt-auto bg-black text-white">
      <div className="mx-auto max-w-[1100px] px-6 py-12 sm:px-0 lg:py-[56px]">
          <div className="flex flex-col gap-8 lg:grid lg:grid-cols-[150px_200px_150px_170px_1fr] lg:gap-[50px]">
            {/* Logo + brand: side by side on mobile, two columns on desktop */}
            <div className="flex items-start gap-5 lg:contents">
              <Image
                src={logo}
                alt="Food Allergy Certified"
                width={130}
                height={Math.round((logo.height / logo.width) * 130)}
                className="h-auto w-[120px] shrink-0 lg:w-[110px]"
              />

              <div>
                <p className="text-[17px] font-bold leading-tight text-white lg:text-[15px]">
                  Food Allergy Certified.
                </p>
                <p className="mt-1 max-w-[180px] text-[16px] leading-[1.2] text-white/90 lg:leading-[1.15]">
                  The standard of care starts here.
                </p>

                <ul className="mt-5 flex items-center gap-2.5 lg:mt-8 lg:gap-2">
                  {socialLinks.map((s) => (
                    <li key={s.label}>
                      <a
                        href={s.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={s.label}
                        className="flex h-9 w-9 items-center justify-center rounded-[6px] bg-white transition hover:bg-white/80 lg:h-[22px] lg:w-[22px] lg:rounded-[4px]"
                      >
                        <SocialIcon icon={s.icon} />
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <hr className="border-white/25 lg:hidden" />

            {/* Quick Links + Free Resources: two columns on mobile, two columns on desktop */}
            <div className="grid grid-cols-2 gap-8 lg:contents">
              <div>
                <h3 className="text-[13px] font-bold uppercase leading-none text-white">
                  Quick Links
                </h3>
                <ul className="mt-3 space-y-1.5 lg:mt-2 lg:space-y-1">
                  {footerNav.quickLinks.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] leading-[1.3] text-white/90 hover:text-white lg:text-[14px]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="text-[13px] font-bold uppercase leading-none text-white">
                  Free Resources
                </h3>
                <ul className="mt-3 space-y-1.5 lg:mt-2 lg:space-y-1">
                  {footerNav.freeResources.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className="text-[15px] leading-[1.3] text-white/90 hover:text-white lg:text-[14px]"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <hr className="border-white/25 lg:hidden" />

            <div>
              <h3 className="text-[13px] font-bold uppercase leading-none text-white">
                Contact Us
              </h3>
              <Link
                href="/contact"
                className="mt-3 inline-flex items-center gap-2 whitespace-nowrap text-[15px] leading-none text-white/90 hover:text-white lg:text-[14px]"
              >
                <svg
                  viewBox="0 0 24 24"
                  className="h-[18px] w-[18px] fill-white"
                  aria-hidden="true"
                >
                  <path d="M3 5h18a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1zm9 7L4 7v1l8 5 8-5V7l-8 5z" />
                </svg>
                Get in touch
              </Link>
            </div>
          </div>

          <hr className="mt-8 hidden border-white/35 lg:mt-[26px] lg:block" />

          <div className="mt-8 flex flex-col items-start justify-between gap-4 text-[12px] leading-none text-white/70 sm:flex-row sm:items-center lg:mt-[26px]">
            <p>&copy; 2026 {siteConfig.name}. All rights reserved.</p>
            <nav aria-label="Legal" className="flex items-center gap-2.5">
              <Link href="/privacy" className="hover:text-white">
                Privacy Policy
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/terms" className="hover:text-white">
                Terms of Service
              </Link>
              <span aria-hidden="true">|</span>
              <Link href="/cookies" className="hover:text-white">
                Cookie Policy
              </Link>
            </nav>
          </div>
      </div>
    </footer>
  );
}
