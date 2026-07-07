"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { PricingModal } from "./PricingModal";

type Variant = "primary" | "outline" | "outlineLight" | "mint";
type Size = "md" | "sm" | "hero" | "header";

/**
 * The "Get your center certified" CTA. Opens the "Get your center certified"
 * popup instead of navigating away. Accepts the usual Button styling props so
 * it can match each call site.
 */
export function CertifyButton({
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
      {open && <PricingModal onClose={() => setOpen(false)} />}
    </>
  );
}
