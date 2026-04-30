import { Project } from "@/data/projects";

export const findRelatedProjects = (currentProject: Project, allProjects: Project[]): Project[] => {
  const priceRange = currentProject.price * 0.3; // ±30% price range
  const minPrice = currentProject.price - priceRange;
  const maxPrice = currentProject.price + priceRange;

  // Filter projects by category and price range, excluding current project
  const related = allProjects.filter(
    (p) =>
      p.id !== currentProject.id &&
      p.category === currentProject.category &&
      p.price >= minPrice &&
      p.price <= maxPrice
  );

  // Sort by price similarity (closest first)
  related.sort((a, b) => {
    const aDiff = Math.abs(a.price - currentProject.price);
    const bDiff = Math.abs(b.price - currentProject.price);
    return aDiff - bDiff;
  });

  // Return max 4 projects
  return related.slice(0, 4);
};
