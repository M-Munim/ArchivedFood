import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { AssessmentCta } from "./AssessmentCta";

describe("AssessmentCta", () => {
  it("opens the assessment and completes all five questions", async () => {
    const user = userEvent.setup();
    render(<AssessmentCta />);

    await user.click(
      screen.getByRole("button", { name: "Start the assessment" }),
    );

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
      screen.getByRole("heading", {
        name: "What’s your role at the childcare center?",
      }),
    ).toBeInTheDocument();
    expect(screen.queryByText("Question 1")).not.toBeInTheDocument();

    await user.click(screen.getByRole("radio", { name: "Director/Owner" }));
    expect(
      screen.getByRole("heading", {
        name: /How confident are you in recognizing signs/,
      }),
    ).toBeInTheDocument();

    await user.click(screen.getByRole("radio", { name: "Very confident" }));
    await user.click(
      screen.getByRole("radio", { name: "Within the last 6 months" }),
    );
    await user.click(
      screen.getByRole("radio", {
        name: "Yes, I’ve had hands-on training",
      }),
    );
    await user.click(
      screen.getByRole("radio", { name: "Every time we serve food" }),
    );

    expect(
      screen.getByRole("heading", {
        name: "Thank you!",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByText("Emergency response protocol guide"),
    ).toBeInTheDocument();
    expect(screen.getByText("Staff training checklist")).toBeInTheDocument();
    expect(
      screen.getByRole("link", { name: "Get your free resources" }),
    ).toHaveAttribute("href", "/contact");
  });

  it("closes with Escape and restores focus to the trigger", async () => {
    const user = userEvent.setup();
    render(<AssessmentCta />);

    const trigger = screen.getByRole("button", {
      name: "Start the assessment",
    });
    await user.click(trigger);
    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
