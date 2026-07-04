import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { LoginForm } from "./LoginForm";

describe("LoginForm", () => {
  it("renders email and password fields", () => {
    render(<LoginForm />);
    expect(screen.getByLabelText(/email address/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/^password$/i)).toBeInTheDocument();
  });

  it("shows the 'accounts aren't live yet' notice on submit", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    await user.type(screen.getByLabelText(/email address/i), "a@b.com");
    await user.type(screen.getByLabelText(/^password$/i), "secret123");
    await user.click(screen.getByRole("button", { name: /^log in$/i }));
    expect(screen.getByText(/accounts aren.t live yet/i)).toBeInTheDocument();
  });

  it("shows the notice when using 'Forgot password?'", async () => {
    const user = userEvent.setup();
    render(<LoginForm />);
    await user.click(screen.getByRole("button", { name: /forgot password/i }));
    expect(screen.getByText(/accounts aren.t live yet/i)).toBeInTheDocument();
  });
});
