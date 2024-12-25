import type { Lang } from "~/content.config";

function format(date: Date, lang: Lang) {
  return date.toLocaleDateString(lang, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function getDatetime(date: Date) {
  return date.toISOString().slice(0, 10);
}

export { format, getDatetime };
