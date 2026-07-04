import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RoiCalculator } from "./RoiCalculator";

describe("RoiCalculator", () => {
  it("updates both displayed values from the sliders", () => {
    render(<RoiCalculator />);

    fireEvent.change(
      screen.getByRole("slider", { name: "Current enrollment" }),
      { target: { value: "42" } },
    );
    fireEvent.change(
      screen.getByRole("slider", {
        name: "Average years a family stays enrolled",
      }),
      { target: { value: "4.5" } },
    );

    expect(screen.getByText("42 children")).toBeInTheDocument();
    expect(screen.getByText("4.5 years")).toBeInTheDocument();
  });

  it("matches the Figma calculator content", () => {
    render(<RoiCalculator />);

    expect(
      screen.getByRole("heading", {
        name: "One enrollment changes the math completely",
      }),
    ).toBeInTheDocument();
    expect(
      screen.queryByText("Lifetime tuition from one new family"),
    ).not.toBeInTheDocument();

    // The CTA opens the waitlist popup instead of navigating to /certification.
    const cta = screen.getByRole("button", {
      name: "Get your center certified",
    });
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    fireEvent.click(cta);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
  });
});
