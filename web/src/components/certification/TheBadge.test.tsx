import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { TheBadge } from "./TheBadge";

describe("TheBadge", () => {
  it("renders the Figma badge-section content", () => {
    render(<TheBadge />);

    expect(screen.getByText("The Badge")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "The FAC Certified badge is a promise, not a decoration.",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText(/When a center earns FAC Certified status/),
    ).toBeInTheDocument();
  });
});
