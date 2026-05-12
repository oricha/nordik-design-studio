import type { ActiveFilters } from "@/types/catalogFilters";

const VALID_BEDROOMS = new Set([1, 2, 3, 4]);

export const filtersToParams = (filters: ActiveFilters): URLSearchParams => {
  const params = new URLSearchParams();

  if (filters.bedrooms.length > 0) {
    params.set("bed", filters.bedrooms.join(","));
  }

  return params;
};

export const paramsToFilters = (params: URLSearchParams): ActiveFilters => ({
  bedrooms: (params.get("bed") ?? "")
    .split(",")
    .map((value) => Number(value))
    .filter((value) => VALID_BEDROOMS.has(value)),
});
