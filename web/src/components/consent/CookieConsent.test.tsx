import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { CookieConsent } from "./CookieConsent";
import { CONSENT_KEY } from "@/lib/consent";

describe("CookieConsent", () => {
  it("shows the banner when no choice has been recorded", () => {
    render(<CookieConsent />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /accept/i })).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /decline/i })).toBeInTheDocument();
  });

  it("does not render when a choice already exists", () => {
    localStorage.setItem(CONSENT_KEY, "accepted");
    render(<CookieConsent />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("stores 'accepted' and hides after clicking Accept", async () => {
    const user = userEvent.setup();
    render(<CookieConsent />);
    await user.click(screen.getByRole("button", { name: /accept/i }));
    expect(localStorage.getItem(CONSENT_KEY)).toBe("accepted");
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
  });

  it("stores 'declined' after clicking Decline", async () => {
    const user = userEvent.setup();
    render(<CookieConsent />);
    await user.click(screen.getByRole("button", { name: /decline/i }));
    expect(localStorage.getItem(CONSENT_KEY)).toBe("declined");
  });

  it("links to the Cookie Policy", () => {
    render(<CookieConsent />);
    const link = screen.getByRole("link", { name: /cookie policy/i });
    expect(link).toHaveAttribute("href", "/cookies");
  });
});
