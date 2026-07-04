import { afterEach, beforeEach, describe, expect, it, vi } from "vitest";
import { render, screen, waitFor } from "@testing-library/react";
import { LetsGetSocial } from "./LetsGetSocial";

describe("LetsGetSocial", () => {
  beforeEach(() => {
    vi.stubGlobal(
      "matchMedia",
      vi.fn().mockReturnValue({
        matches: true,
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }),
    );

    vi.stubGlobal(
      "fetch",
      vi.fn().mockResolvedValue({
        ok: true,
        json: async () => ({
          posts: Array.from({ length: 4 }, (_, index) => ({
            id: `post-${index + 1}`,
            caption: `Social post ${index + 1}`,
            permalink: `https://www.instagram.com/p/post-${index + 1}/`,
            sizes: {
              small: {
                width: 320,
                height: 400,
                mediaUrl: `https://behold.pictures/post-${index + 1}.jpg`,
              },
            },
          })),
        }),
      }),
    );
  });

  afterEach(() => {
    vi.unstubAllGlobals();
  });

  it("renders the live Behold social feed", async () => {
    const { container } = render(<LetsGetSocial />);

    expect(
      screen.getByRole("heading", { name: "Let’s get social" }),
    ).toBeInTheDocument();

    const widget = container.querySelector("behold-widget");
    expect(widget).toHaveAttribute("feed-id", "1993DwdeVuDukLXO8xlh");

    await waitFor(() => {
      expect(screen.getByTestId("mobile-social-grid")).toHaveAttribute(
        "aria-busy",
        "false",
      );
    });
  });

  it("renders four live posts in a two-column mobile grid", async () => {
    render(<LetsGetSocial />);

    const grid = screen.getByTestId("mobile-social-grid");
    expect(grid).toHaveClass("grid-cols-2", "sm:hidden");

    await waitFor(() => {
      expect(
        screen.getAllByRole("link", { name: /Open Instagram post/ }),
      ).toHaveLength(4);
    });

    expect(grid).toHaveAttribute("aria-busy", "false");
  });
});
