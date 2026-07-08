import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { RoiCalculator } from "./RoiCalculator";

describe("RoiCalculator", () => {
  it("recalculates the dollar values when Calculate is clicked", () => {
    render(<RoiCalculator />);

    // Defaults: $1,300/mo, 2.5 years -> $15,600 annual, $39,000 lifetime.
    expect(screen.getByText("$15,600")).toBeInTheDocument();
    expect(screen.getByText("$39,000")).toBeInTheDocument();

    // $2,000/mo over 3 years -> $24,000 annual, $72,000 lifetime.
    fireEvent.change(
      screen.getByRole("slider", { name: "Monthly tuition per child" }),
      { target: { value: "2000" } },
    );
    fireEvent.change(
      screen.getByRole("slider", {
        name: "Average years a family stays enrolled",
      }),
      { target: { value: "3" } },
    );

    // Results stay on the previous numbers until the user submits.
    expect(screen.getByText("$15,600")).toBeInTheDocument();
    expect(screen.getByText("$39,000")).toBeInTheDocument();

    fireEvent.click(screen.getByRole("button", { name: "Calculate" }));

    expect(screen.getByText("$24,000")).toBeInTheDocument();
    expect(screen.getByText("$72,000")).toBeInTheDocument();
  });

  it("updates the enrollment and years labels from the sliders", () => {
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

  it("matches the client calculator content", () => {
    render(<RoiCalculator />);

    expect(
      screen.getByRole("heading", {
        name: "See what one new family is worth to your center",
      }),
    ).toBeInTheDocument();
  });
});
