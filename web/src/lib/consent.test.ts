import { describe, it, expect, vi } from "vitest";
import {
  getConsent,
  setConsent,
  CONSENT_KEY,
  CONSENT_EVENT,
} from "./consent";

describe("consent store", () => {
  it("returns null when no choice has been made", () => {
    expect(getConsent()).toBeNull();
  });

  it("persists an accepted choice and reads it back", () => {
    setConsent("accepted");
    expect(getConsent()).toBe("accepted");
    expect(localStorage.getItem(CONSENT_KEY)).toBe("accepted");
  });

  it("persists a declined choice", () => {
    setConsent("declined");
    expect(getConsent()).toBe("declined");
  });

  it("ignores unknown stored values", () => {
    localStorage.setItem(CONSENT_KEY, "banana");
    expect(getConsent()).toBeNull();
  });

  it("broadcasts a change event with the chosen value", () => {
    const handler = vi.fn();
    window.addEventListener(CONSENT_EVENT, handler);
    setConsent("accepted");
    expect(handler).toHaveBeenCalledOnce();
    const evt = handler.mock.calls[0][0] as CustomEvent;
    expect(evt.detail).toBe("accepted");
    window.removeEventListener(CONSENT_EVENT, handler);
  });
});
