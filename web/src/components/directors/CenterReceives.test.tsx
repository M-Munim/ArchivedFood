import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CenterReceives } from "./CenterReceives";

describe("CenterReceives", () => {
  it("renders the Figma badge slide and advances through the deliverables", () => {
    render(<CenterReceives />);

    expect(
      screen.getByRole("heading", {
        name: "Everything your center needs to show families you’re ready",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("img", {
        name: "FAC Certified Center digital badge",
      }),
    ).toBeInTheDocument();

    const previousButtons = screen.getAllByRole("button", {
      name: "Previous item",
    });
    const nextButtons = screen.getAllByRole("button", { name: "Next item" });

    expect(previousButtons[0]).toBeDisabled();
    fireEvent.click(nextButtons[0]);

    expect(screen.getByText("Physical Window Decal")).toBeInTheDocument();
    expect(previousButtons[0]).toBeEnabled();
  });
});
