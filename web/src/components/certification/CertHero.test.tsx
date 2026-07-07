import { fireEvent, render, screen } from "@testing-library/react";
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
  });

  it("opens the certification lead form when the CTA is clicked", () => {
    render(<CertHero />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", { name: "Get your center certified" }),
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Get your center certified" }),
    ).toBeInTheDocument();
  });
});
