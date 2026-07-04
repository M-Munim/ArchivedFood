"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { WaitlistModal } from "@/components/parents/WaitlistModal";

type Variant = "primary" | "outline" | "outlineLight" | "mint";
type Size = "md" | "sm" | "hero" | "header";

/**
 * A "Get your center certified" style CTA that opens the waitlist popup
 * (the same one used on the for-parents page) instead of navigating away.
 * Accepts the usual Button styling props so it can match each call site.
 */
export function WaitlistButton({
  children = "Get your center certified",
  variant,
  size,
  className,
}: {
  children?: ReactNode;
  variant?: Variant;
  size?: Size;
  className?: string;
}) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        onClick={() => setOpen(true)}
        variant={variant}
        size={size}
        className={className}
      >
        {children}
      </Button>
      {open && <WaitlistModal onClose={() => setOpen(false)} />}
    </>
  );
}
