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
          <h2 className="text-3xl font-bold text-foreground mb-2">También Te Puede Interesar</h2>
          <p className="text-muted-foreground mb-8">Explora otros proyectos similares que podrían ajustarse a tus necesidades.</p>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {projects.map((project, idx) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: idx * 0.1 }}
              >
                <Link to={project.slug ? `/proyecto/${project.slug}` : "#"}>
                  <div className="bg-background rounded-xl overflow-hidden hover-lift group cursor-pointer h-full">
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={project.image}
                        alt={project.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                      />
                      {project.badge && (
                        <span
                          className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
                            project.badge === "New"
                              ? "bg-accent text-accent-foreground"
                              : "bg-primary text-primary-foreground"
                          }`}
                        >
                          {project.badge}
                        </span>
                      )}
                    </div>
                    <div className="p-5">
                      <h3 className="font-semibold text-foreground text-lg mb-2">{project.name}</h3>
                      {project.area > 0 && (
                        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
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
