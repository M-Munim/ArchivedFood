"use client";

import { useState, type ReactNode } from "react";
import { Button } from "@/components/ui/Button";
import { NominateModal } from "./NominateModal";

type Variant = "primary" | "outline" | "outlineLight" | "mint";
type Size = "md" | "sm" | "hero" | "header";

/**
 * A CTA that opens the "Nominate a childcare center" popup instead of
 * navigating to the /nominate page. Accepts the usual Button styling props so
 * it can match each call site.
 */
export function NominateButton({
  children = "Nominate a center",
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
        aria-haspopup="dialog"
        aria-expanded={open}
      >
        {children}
      </Button>
      {open && <NominateModal onClose={() => setOpen(false)} />}
    </>
  );
}
