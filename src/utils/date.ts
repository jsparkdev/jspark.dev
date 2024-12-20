import type { langs } from "~/content.config";

export function format(date: Date, lang: (typeof langs)[number]) {
  const formatter = new Intl.DateTimeFormat(lang, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formatter.format(date);
}

export function getDatetime(date: Date) {
  return date.toISOString().split("T")[0];
}
