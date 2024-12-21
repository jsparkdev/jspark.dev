import { describe, test, expect } from "vitest";
import { format, getDatetime } from "./date";

describe("format", () => {
  const date = new Date("2024-12-21");

  test("formats date in Korean", () => {
    expect(format(date, "ko")).toBe("2024년 12월 21일");
  });

  test("formats date in English", () => {
    expect(format(date, "en")).toBe("Dec 21, 2024");
  });
});

describe("getDatetime", () => {
  test("converts Date to YYYY-MM-DD format", () => {
    const date = new Date("2024-12-21");
    expect(getDatetime(date)).toBe("2024-12-21");
  });
});
