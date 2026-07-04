import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { ContactForm } from "./ContactForm";

describe("ContactForm", () => {
  it("renders the core fields", () => {
    render(<ContactForm />);
    expect(screen.getByLabelText(/first name/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/how can we help/i)).toBeInTheDocument();
  });

  it("shows a personalized success state after a valid submit", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.type(screen.getByLabelText(/first name/i), "Jamie");
    await user.type(screen.getByLabelText(/email address/i), "jamie@example.com");
    await user.type(screen.getByLabelText(/how can we help/i), "Tell me more.");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText(/thanks, jamie/i)).toBeInTheDocument();
    expect(screen.queryByRole("button", { name: /send message/i })).not.toBeInTheDocument();
  });

  it("does not show success when required fields are empty", async () => {
    const user = userEvent.setup();
    render(<ContactForm />);
    await user.click(screen.getByRole("button", { name: /send message/i }));
    expect(screen.queryByText(/thanks,/i)).not.toBeInTheDocument();
  });
});
