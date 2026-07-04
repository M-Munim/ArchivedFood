import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { NominateCenter } from "./NominateCenter";

describe("NominateCenter", () => {
  it("uses the supplied trumpet artwork and opens the nomination form", async () => {
    const user = userEvent.setup();
    const { container } = render(<NominateCenter />);

    expect(
      screen.getByRole("heading", {
        name: "Know a center that should be certified?",
      }),
    ).toBeInTheDocument();
    const trigger = screen.getByRole("button", { name: "Nominate a center" });
    await user.click(trigger);

    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByLabelText("Your name")).toBeInTheDocument();
    expect(screen.getByLabelText("Your email")).toBeInTheDocument();
    expect(screen.getByLabelText("Childcare center name")).toBeInTheDocument();
    expect(screen.getByLabelText("Center location")).toBeInTheDocument();

    const artwork = screen.getByTestId("trumpet-artwork");
    expect(artwork).toHaveAttribute("alt", "");
    expect(container.querySelector("section svg")).not.toBeInTheDocument();
  });

  it("submits the compact form and shows its success state", async () => {
    const user = userEvent.setup();
    render(<NominateCenter />);

    await user.click(screen.getByRole("button", { name: "Nominate a center" }));
    await user.type(screen.getByLabelText("Your name"), "A Parent");
    await user.type(screen.getByLabelText("Your email"), "parent@example.com");
    await user.type(
      screen.getByLabelText("Childcare center name"),
      "Bright Start",
    );
    await user.type(screen.getByLabelText("Center location"), "Austin, TX");
    await user.click(screen.getByRole("button", { name: "Submit" }));

    expect(
      screen.getByRole("heading", { name: "Thank you for the nomination!" }),
    ).toBeInTheDocument();
    expect(screen.getByText(/reach out to Bright Start/)).toBeInTheDocument();
  });

  it("closes with Escape and restores focus to the trigger", async () => {
    const user = userEvent.setup();
    render(<NominateCenter />);

    const trigger = screen.getByRole("button", { name: "Nominate a center" });
    await user.click(trigger);
    await user.keyboard("{Escape}");

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    expect(trigger).toHaveFocus();
  });
});
