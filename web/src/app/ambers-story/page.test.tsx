import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import AmbersStoryPage from "./page";

describe("AmbersStoryPage", () => {
  it("uses the supplied cutout portrait in the opening story layout", () => {
    render(<AmbersStoryPage />);

    const portrait = screen.getByRole("img", {
      name: "Amber, the founder, smiling with her young son Xion",
    });

    expect(portrait).toHaveClass("lg:float-right", "lg:w-[50vw]");
    expect(portrait).toHaveStyle({
      shapeOutside: 'url("/images/Group 1.png")',
    });
    expect(screen.getByTestId("amber-story-copy")).toHaveClass(
      "max-w-[319px]",
      "sm:max-w-[720px]",
    );
    expect(
      screen.getByRole("heading", {
        name: "I didn’t build this as a business. I built it as a mom.",
      }),
    ).toBeInTheDocument();
  });
});
