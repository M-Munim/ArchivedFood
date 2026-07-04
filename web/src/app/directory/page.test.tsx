import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import DirectoryPage from "./page";

describe("DirectoryPage", () => {
  it("uses the supplied hero assets and preserves both directory actions", () => {
    render(<DirectoryPage />);

    expect(screen.getAllByTestId("directory-vector")).toHaveLength(2);
    expect(screen.getByTestId("directory-children-mobile")).toHaveAttribute(
      "alt",
      "Two children blowing bubbles together outdoors",
    );
    screen.getAllByTestId("directory-children").forEach((image) => {
      expect(image).toHaveAttribute(
        "alt",
        "Two children blowing bubbles together outdoors",
      );
    });
    expect(
      screen.getAllByRole("heading", {
        name: "Find a food allergy certified childcare center near you.",
      }).length,
    ).toBeGreaterThan(0);

    const parentLinks = screen.getAllByRole("link", {
      name: /parent, keep me posted/i,
    });
    const certificationLinks = screen.getAllByRole("link", {
      name: "Get your center certified",
    });

    parentLinks.forEach((parentLink) => {
      expect(parentLink).toHaveAttribute("href", "/for-parents");
      expect(parentLink).toHaveClass("!font-medium");
    });
    expect(
      parentLinks.some((link) => link.classList.contains("!text-[16px]")),
    ).toBe(true);
    expect(
      parentLinks.some((link) => link.classList.contains("!text-[15px]")),
    ).toBe(true);

    certificationLinks.forEach((certificationLink) => {
      expect(certificationLink).toHaveAttribute("href", "/certification");
      expect(certificationLink).toHaveClass("!font-medium");
    });
    expect(
      certificationLinks.some((link) =>
        link.classList.contains("!text-[16px]"),
      ),
    ).toBe(true);
    expect(
      certificationLinks.some((link) =>
        link.classList.contains("!text-[15px]"),
      ),
    ).toBe(true);
  });
});
