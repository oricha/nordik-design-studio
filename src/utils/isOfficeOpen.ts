function getMinutesInTimeZone(date: Date, timeZone: string): number {
  const parts = new Intl.DateTimeFormat("en-GB", {
    timeZone,
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  }).formatToParts(date);

  let hour = 0;
  let minute = 0;

  for (const part of parts) {
    if (part.type === "hour") hour = Number(part.value);
    if (part.type === "minute") minute = Number(part.value);
  }

  return hour * 60 + minute;
}

function getWeekdayInTimeZone(date: Date, timeZone: string): number {
  const weekday = new Intl.DateTimeFormat("en-US", { timeZone, weekday: "short" }).format(date);
  const map: Record<string, number> = {
    Sun: 0,
    Mon: 1,
    Tue: 2,
    Wed: 3,
    Thu: 4,
    Fri: 5,
    Sat: 6,
  };
  return map[weekday] ?? 0;
}

function parseHourMinutes(value: string): number {
  const [hour, minute] = value.split(":").map(Number);
  return hour * 60 + (minute || 0);
}

export const isOfficeOpen = (timeZone: string, openingHour: string, closingHour: string): boolean => {
  try {
    const now = new Date();
    const weekday = getWeekdayInTimeZone(now, timeZone);
    if (weekday < 1 || weekday > 5) return false;

    const minutesNow = getMinutesInTimeZone(now, timeZone);
    const openingMinutes = parseHourMinutes(openingHour);
    const closingMinutes = parseHourMinutes(closingHour);

    return minutesNow >= openingMinutes && minutesNow < closingMinutes;
  } catch {
    return false;
  }
};
