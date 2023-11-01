import { expect, afterEach, vi } from "vitest";
import { cleanup } from "@testing-library/react";
import matchers from "@testing-library/jest-dom/matchers";

expect.extend(matchers);

afterEach(() => {
  cleanup();
});

Object.defineProperty(window.Element.prototype, "scrollTo", {
  writable: true,
  value: vi.fn(),
});
