import { Project } from "@/data/projects";

export const findRelatedProjects = (currentProject: Project, allProjects: Project[]): Project[] => {
  const related = allProjects.filter(
    (project) => project.id !== currentProject.id && project.category === currentProject.category,
  );

  related.sort((a, b) => {
    const aDiff = Math.abs(a.price - currentProject.price);
    const bDiff = Math.abs(b.price - currentProject.price);
    return aDiff - bDiff;
  });

  return related.slice(0, 4);
};
