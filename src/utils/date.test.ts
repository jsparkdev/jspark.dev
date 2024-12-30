import { describe, test, expect } from "vitest";
import { format } from "./date";

describe("format", () => {
  const date = new Date("2024-12-21");
  test("formats date", () => {
    expect(format(date)).toBe("Dec 21, 2024");
  });
});
