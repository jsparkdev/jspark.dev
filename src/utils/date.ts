export function format(date: Date) {
  const formatter = new Intl.DateTimeFormat("en", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });

  return formatter.format(date);
}

export function getDatetime(date: Date) {
  return date.toISOString().split("T")[0];
}
