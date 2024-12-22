import type { Lang } from "~/content.config";

export function format(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

export function getDatetime(date: Date) {
  return date.toISOString().slice(0, 10);
}
