function getWeekdayInTimeZone(date: Date, timeZone: string): number {
  const w = new Intl.DateTimeFormat("en-US", { timeZone, weekday: "short" }).format(date);
  const map: Record<string, number> = { Sun: 0, Mon: 1, Tue: 2, Wed: 3, Thu: 4, Fri: 5, Sat: 6 };
  return map[w] ?? 0;
}

function getMinutesSinceMidnightInTimeZone(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);
  let hour = 0;
  let minute = 0;
  for (const p of parts) {
    if (p.type === "hour") hour = Number(p.value);
    if (p.type === "minute") minute = Number(p.value);
  }
  return hour * 60 + minute;
}

function parseHm(hm: string): number {
  const [h, m] = hm.split(":").map((x) => Number(x));
  return h * 60 + (m || 0);
}

/** Lun–vie, sin festivos (F1.5.3). */
export function isWeekdayBusinessOpen(
  date: Date,
  timeZone: string,
  openHm: string,
  closeHm: string,
): boolean {
  const wd = getWeekdayInTimeZone(date, timeZone);
  if (wd === 0 || wd === 6) return false;
  const nowM = getMinutesSinceMidnightInTimeZone(date, timeZone);
  const openM = parseHm(openHm);
  const closeM = parseHm(closeHm);
  return nowM >= openM && nowM < closeM;
}
