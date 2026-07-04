import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { DirectoryPreview } from "./DirectoryPreview";

describe("DirectoryPreview", () => {
  it("uses the client mobile artwork and keeps the waitlist action", () => {
    render(<DirectoryPreview />);

    expect(screen.getByTestId("directory-preview-mobile-photo")).toHaveAttribute(
      "alt",
      "Two children eating cake together at a table",
    );
    expect(
      screen.getAllByRole("heading", {
        name: "Certified Center Directory",
      }),
    ).toHaveLength(3);
    screen
      .getAllByRole("link", { name: "Join the waitlist" })
      .forEach((link) =>
        expect(link).toHaveAttribute("href", "/for-parents#waitlist"),
      );
  });
});
