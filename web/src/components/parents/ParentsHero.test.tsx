import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { ParentsHero } from "./ParentsHero";

describe("ParentsHero", () => {
  it("uses the supplied hero assets and submits the certification form in a popup", async () => {
    const user = userEvent.setup();
    render(<ParentsHero />);

    expect(screen.getAllByTestId("parents-hero-image")).toHaveLength(2);
    expect(screen.getAllByTestId("parents-wave")).toHaveLength(2);
    screen
      .getAllByTestId("parents-wave")
      .forEach((wave) => expect(wave).toHaveAttribute("alt", ""));
    expect(
      screen.getAllByRole("heading", {
        name: "You should not have to wonder if your child is safe.",
      }),
    ).toHaveLength(2);

    // The form lives in a popup — no fields until the trigger is clicked.
    expect(screen.queryByLabelText("Name")).not.toBeInTheDocument();

    await user.click(
      screen.getAllByRole("button", { name: "Join the waitlist" })[0],
    );

    const dialog = screen.getByRole("dialog");
    await user.type(within(dialog).getByLabelText("Name"), "Amber");
    await user.type(
      within(dialog).getByLabelText("Email"),
      "amber@example.com",
    );
    await user.click(
      within(dialog).getByRole("button", { name: "Submit Request" }),
    );

    // The popup swaps to a success confirmation, greeting the submitter by name.
    expect(
      within(dialog).getByRole("heading", { name: "Thanks, Amber!" }),
    ).toBeInTheDocument();
    expect(screen.getByRole("status")).toBeInTheDocument();
  });
});
