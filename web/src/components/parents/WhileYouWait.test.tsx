import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { WhileYouWait } from "./WhileYouWait";

describe("WhileYouWait", () => {
  it("uses the supplied backdrop and keeps the nomination action", () => {
    render(<WhileYouWait />);

    expect(screen.getByTestId("while-you-wait-backdrop")).toHaveAttribute(
      "alt",
      "",
    );
    expect(
      screen.getByRole("heading", {
        name: "Is your current center not certified yet?",
      }),
    ).toHaveClass("text-brand-blue", "sm:text-ink");
    expect(
      screen.getByRole("link", { name: "Send my center a note" }),
    ).toHaveAttribute("href", "/nominate");
  });
});
