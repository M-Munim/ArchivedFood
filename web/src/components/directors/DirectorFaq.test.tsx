import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { describe, expect, it } from "vitest";
import { DirectorFaq } from "./DirectorFaq";

describe("DirectorFaq", () => {
  it("shows five questions initially and reveals the rest on request", async () => {
    const user = userEvent.setup();
    render(<DirectorFaq />);

    expect(
      screen.getByText(
        "Most staff complete the full standard in about 90 minutes.",
      ),
    ).toBeInTheDocument();
    expect(
      screen.queryByRole("button", { name: "How much does it cost?" }),
    ).not.toBeInTheDocument();

    await user.click(screen.getByRole("button", { name: "Read more" }));

    const additionalQuestion = screen.getByRole("button", {
      name: "How much does it cost?",
    });
    expect(additionalQuestion).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Read less" }),
    ).toBeInTheDocument();

    await user.click(additionalQuestion);
    expect(
      screen.getByText(/Pricing is based on the size of your center/),
    ).toBeInTheDocument();
  });

  it("collapses back to the initial five questions", async () => {
    const user = userEvent.setup();
    render(<DirectorFaq />);

    await user.click(screen.getByRole("button", { name: "Read more" }));
    await user.click(screen.getByRole("button", { name: "Read less" }));

    expect(
      screen.queryByRole("button", { name: "How much does it cost?" }),
    ).not.toBeInTheDocument();
    expect(screen.getByRole("button", { name: "Read more" })).toHaveAttribute(
      "aria-expanded",
      "false",
    );
  });
});
