import type { ActiveFilters } from "@/types/catalogFilters";

const VALID_ENERGY_CLASSES = new Set(["A", "B", "C", "D"]);
const VALID_DELIVERY_RANGES = new Set(["lt12", "12-24", "gt24"]);
const VALID_BEDROOMS = new Set([1, 2, 3, 4]);

export const filtersToParams = (filters: ActiveFilters): URLSearchParams => {
  const params = new URLSearchParams();

  if (filters.bedrooms.length > 0) {
    params.set("bed", filters.bedrooms.join(","));
  }

  if (filters.energyClass.length > 0) {
    params.set("eclass", filters.energyClass.join(","));
  }

  if (filters.deliveryRange) {
    params.set("del", filters.deliveryRange);
  }

  return params;
};

export const paramsToFilters = (params: URLSearchParams): ActiveFilters => ({
  bedrooms: (params.get("bed") ?? "")
    .split(",")
    .map((value) => Number(value))
    .filter((value) => VALID_BEDROOMS.has(value)),
  energyClass: (params.get("eclass") ?? "")
    .split(",")
    .filter((value): value is string => VALID_ENERGY_CLASSES.has(value)),
  deliveryRange: VALID_DELIVERY_RANGES.has(params.get("del") ?? "") ? (params.get("del") ?? "") : "",
});
