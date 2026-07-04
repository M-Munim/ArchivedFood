import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { Curriculum } from "./Curriculum";

describe("Curriculum", () => {
  it("slides through all six modules in three two-card views", async () => {
    const user = userEvent.setup();
    const { container } = render(<Curriculum />);

    const previous = container.querySelector<HTMLButtonElement>(
      'button[aria-controls="curriculum-track"][aria-label="Previous modules"]',
    );
    const next = container.querySelector<HTMLButtonElement>(
      'button[aria-controls="curriculum-track"][aria-label="Next modules"]',
    );
    const track = document.getElementById("curriculum-track");

    expect(previous).not.toBeNull();
    expect(next).not.toBeNull();
    expect(previous).toBeDisabled();
    expect(next).not.toBeDisabled();
    expect(screen.getByTestId("curriculum-page-0")).toHaveAttribute(
      "aria-hidden",
      "false",
    );

    await user.click(next);

    expect(track).toHaveStyle({ transform: "translateX(-100%)" });
    const secondPage = screen.getByTestId("curriculum-page-1");
    expect(secondPage).toHaveAttribute("aria-hidden", "false");
    expect(within(secondPage).getByText("Prevention")).toBeInTheDocument();
    expect(
      within(secondPage).getByText("Emergency Response"),
    ).toBeInTheDocument();

    await user.click(next);

    expect(track).toHaveStyle({ transform: "translateX(-200%)" });
    const thirdPage = screen.getByTestId("curriculum-page-2");
    expect(thirdPage).toHaveAttribute("aria-hidden", "false");
    expect(next).toBeDisabled();
    expect(
      within(thirdPage).getByText("Communication with Families"),
    ).toBeInTheDocument();
    expect(
      within(thirdPage).getByText("Allergy-Safe Classroom Culture"),
    ).toBeInTheDocument();
  });

  it("keeps the enrollment CTA linked to booking", () => {
    render(<Curriculum />);

    expect(
      screen.getByRole("link", { name: "Enroll your center" }),
    ).toHaveAttribute("href", "/book-a-call");
  });
});
