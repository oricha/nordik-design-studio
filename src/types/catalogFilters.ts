export interface ActiveFilters {
  bedrooms: number[];
  energyClass: string[];
  deliveryRange: string;
}

export const DELIVERY_RANGES = [
  { key: "lt12", label: "< 12 semanas", test: (weeks: number) => weeks < 12 },
  { key: "12-24", label: "12–24 semanas", test: (weeks: number) => weeks >= 12 && weeks <= 24 },
  { key: "gt24", label: "24+ semanas", test: (weeks: number) => weeks > 24 },
] as const;
