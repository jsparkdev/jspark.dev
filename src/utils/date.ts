import type { Lang } from "~/content.config";

export const format = (date: Date, lang: Lang) =>
  date.toLocaleDateString(lang, {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

export const getDatetime = (date: Date) => date.toISOString().slice(0, 10);
