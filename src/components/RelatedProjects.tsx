import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Maximize2, BedDouble, Bath } from "lucide-react";
import { Project } from "@/data/projects";

interface RelatedProjectsProps {
  projects: Project[];
}

const RelatedProjects = ({ projects }: RelatedProjectsProps) => {
  if (projects.length === 0) {
    return null;
  }

  return (
    <section className="section-padding bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mb-2 text-3xl font-semibold tracking-tight text-foreground md:text-[2rem] md:leading-[1.25]">
            También Te Puede Interesar
          </h2>
          <p className="mb-8 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Explora otros proyectos similares que podrían ajustarse a tus necesidades.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <Link to={project.slug ? `/proyecto/${project.slug}` : "#"} className="block h-full">
                  <div className="interactive-card h-full cursor-pointer overflow-hidden rounded-xl border border-border bg-background">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="h-full w-full object-cover"
                        loading="lazy"
                      />
                      {project.badge && (
                        <span
                          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                            project.badge === "Novedad"
                              ? "bg-accent text-accent-foreground"
                              : "bg-primary text-primary-foreground"
                          }`}
                        >
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-foreground text-lg mb-2">{project.name}</h3>
                      {project.area > 0 && (
                        <div className="mb-3 flex items-center gap-4 text-base text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Maximize2 className="w-3.5 h-3.5" /> {project.area} m²
                          </span>
                          <span className="flex items-center gap-1">
                            <BedDouble className="w-3.5 h-3.5" /> {project.bedrooms}
                          </span>
                          <span className="flex items-center gap-1">
                            <Bath className="w-3.5 h-3.5" /> {project.bathrooms}
                          </span>
                        </div>
                      )}
                      <div className="text-xl font-bold text-accent">€{project.price.toLocaleString()}</div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default RelatedProjects;
