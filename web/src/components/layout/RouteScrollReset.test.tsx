import { render, waitFor } from "@testing-library/react";
import { beforeEach, describe, expect, it, vi } from "vitest";
import { RouteScrollReset } from "./RouteScrollReset";

const { route } = vi.hoisted(() => ({
  route: { pathname: "/" },
}));

vi.mock("next/navigation", () => ({
  usePathname: () => route.pathname,
}));

describe("RouteScrollReset", () => {
  beforeEach(() => {
    route.pathname = "/";
    window.history.replaceState({}, "", "/");
    vi.stubGlobal("scrollTo", vi.fn());
  });

  it("resets the document to the true top after a route change", async () => {
    const { rerender } = render(<RouteScrollReset />);

    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenLastCalledWith({
        top: 0,
        left: 0,
        behavior: "instant",
      });
    });

    route.pathname = "/privacy";
    rerender(<RouteScrollReset />);

    await waitFor(() => {
      expect(window.scrollTo).toHaveBeenCalledTimes(2);
    });
  });

  it("does not override navigation to an anchor", async () => {
    window.history.replaceState({}, "", "/privacy#rights");
    route.pathname = "/privacy";

    render(<RouteScrollReset />);

    await waitFor(() => {
      expect(window.scrollTo).not.toHaveBeenCalled();
    });
  });
});
