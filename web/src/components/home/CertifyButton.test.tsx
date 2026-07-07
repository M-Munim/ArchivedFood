import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { CertifyButton } from "./CertifyButton";

describe("CertifyButton", () => {
  it("opens the certification lead form with the expected fields", () => {
    render(<CertifyButton />);

    // No dialog until the CTA is clicked.
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    fireEvent.click(
      screen.getByRole("button", { name: "Get your center certified" }),
    );

    const dialog = screen.getByRole("dialog");
    expect(dialog).toBeInTheDocument();
    expect(
      screen.getByRole("heading", { name: "Get your center certified" }),
    ).toBeInTheDocument();

    // Every field from the design is present.
    expect(screen.getByLabelText("Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Email")).toBeInTheDocument();
    expect(screen.getByLabelText("Phone")).toBeInTheDocument();
    expect(screen.getByLabelText("Your Title")).toBeInTheDocument();
    expect(screen.getByLabelText("Childcare Center Name")).toBeInTheDocument();
    expect(screen.getByLabelText("Zip Code / Location")).toBeInTheDocument();
    expect(
      screen.getByLabelText("Number of Employees Requiring Certification"),
    ).toBeInTheDocument();
    expect(screen.getByLabelText(/Message/)).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Submit Request" }),
    ).toBeInTheDocument();
  });

  it("shows a success state after a valid submission", () => {
    render(<CertifyButton />);
    fireEvent.click(
      screen.getByRole("button", { name: "Get your center certified" }),
    );

    fireEvent.change(screen.getByLabelText("Name"), {
      target: { value: "Jane" },
    });
    fireEvent.change(screen.getByLabelText("Email"), {
      target: { value: "jane@example.com" },
    });
    fireEvent.click(screen.getByRole("button", { name: "Submit Request" }));

    expect(screen.getByText(/Thanks, Jane/)).toBeInTheDocument();
    expect(
      screen.queryByRole("heading", { name: "Get your center certified" }),
    ).not.toBeInTheDocument();
  });
});
