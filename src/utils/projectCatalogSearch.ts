import type { Project } from "@/data/projects";

const CATEGORY_LABELS_ES: Record<Project["category"], string[]> = {
  houses: ["casa", "casas"],
  cabins: ["cabaña", "cabañas"],
  materials: ["materiales", "material", "panel", "sip"],
  reforms: ["reforma", "reformas"],
};

function categoryTokensForMatch(cat: Project["category"]): string[] {
  return [cat, ...CATEGORY_LABELS_ES[cat]];
}

export function projectMatchesSearch(project: Project, rawQuery: string): boolean {
  const q = rawQuery.trim().toLowerCase();
  if (!q) return true;

  const hay = [
    project.name,
    project.city,
    project.category,
    ...categoryTokensForMatch(project.category),
  ]
    .join(" ")
    .toLowerCase();

  const tokens = q.split(/\s+/).filter(Boolean);
  return tokens.every((t) => hay.includes(t));
}

