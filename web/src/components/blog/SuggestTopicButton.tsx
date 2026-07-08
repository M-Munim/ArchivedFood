"use client";

import { useState } from "react";
import { Button } from "@/components/ui/Button";
import { SuggestTopicModal } from "./SuggestTopicModal";

/**
 * Blog "Suggest a topic" CTA that opens the suggestion form in a popup
 * instead of navigating to the contact page.
 */
export function SuggestTopicButton() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        type="button"
        variant="outline"
        aria-haspopup="dialog"
        aria-expanded={open}
        onClick={() => setOpen(true)}
      >
        Suggest a topic
      </Button>
      {open && <SuggestTopicModal onClose={() => setOpen(false)} />}
    </>
  );
}
