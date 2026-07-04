import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CertHero } from "./CertHero";

describe("CertHero", () => {
  it("matches the certification hero content and uses the supplied wave asset", () => {
    render(<CertHero />);

    expect(
      screen.getByRole("heading", {
        name: "6 modules. 1 final exam. A certification that means something.",
      }),
    ).toBeInTheDocument();
    expect(screen.getByTestId("certification-wave")).toHaveAttribute("alt", "");
    expect(
      screen.getByRole("link", { name: "Get your center certified" }),
    ).toHaveAttribute("href", "/book-a-call");
  });
});
