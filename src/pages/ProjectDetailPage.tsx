import { useEffect } from "react";
import { Navigate, useParams } from "react-router-dom";
import ProjectDetail from "@/components/ProjectDetail";
import { projects } from "@/data/projects";

const ProjectDetailPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((candidate) => candidate.slug === slug);

  useEffect(() => {
    if (project) {
      document.title = `${project.name} | Casa NordiK`;
    }

    return () => {
      document.title = "NordiK — Casas de madera modernas | Arquitectura escandinavia";
    };
  }, [project]);

  if (!project) {
    return <Navigate to="/404" replace />;
  }

  return <ProjectDetail project={project} />;
};

export default ProjectDetailPage;
