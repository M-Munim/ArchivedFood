import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { FinalAssessment } from "./FinalAssessment";

describe("FinalAssessment", () => {
  it("uses the supplied certification badge and matches the assessment content", () => {
    render(<FinalAssessment />);

    expect(
      screen.getByRole("img", {
        name: "Food Allergy Certified — 2026 Certified Center badge",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "Certification is earned, not assumed.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "An expert weighs in" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "Portrait of the reviewing pediatric allergist",
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("intro-background-shape")).toHaveAttribute(
      "alt",
      "A certified center storefront displaying the Food Allergy Certified decal",
    );
  });
});
