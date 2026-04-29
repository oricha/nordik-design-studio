import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { projects } from "@/data/projects";
import NotFound from "@/pages/NotFound";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Breadcrumbs */}
      <nav className="bg-warm-gray border-b border-border">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1">
            <Home className="w-4 h-4" />
            Inicio
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <Link to="/#projects" className="text-muted-foreground hover:text-foreground transition-colors">
            Proyectos
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-foreground font-medium">{project.name}</span>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section-padding bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div className="relative aspect-video rounded-xl overflow-hidden">
                <img
                  src={project.image}
                  alt={project.name}
                  className="w-full h-full object-cover"
                />
                {project.badge && (
                  <span
                    className={`absolute top-4 left-4 px-4 py-2 rounded-full text-sm font-semibold ${
                      project.badge === "New"
                        ? "bg-accent text-accent-foreground"
                        : "bg-primary text-primary-foreground"
                    }`}
                  >
                    {project.badge}
                  </span>
                )}
              </div>

              <div>
                <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                  {project.name}
                </h1>
                <p className="text-muted-foreground text-lg mb-6">
                  Descubre este hermoso proyecto de arquitectura nórdica. Diseño moderno, eficiencia
                  energética y construcción sostenible.
                </p>

                <div className="grid grid-cols-2 gap-4 mb-8">
                  {project.area > 0 && (
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Área</p>
                      <p className="text-2xl font-bold text-foreground">{project.area} m²</p>
                    </div>
                  )}
                  {project.bedrooms > 0 && (
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Dormitorios</p>
                      <p className="text-2xl font-bold text-foreground">{project.bedrooms}</p>
                    </div>
                  )}
                  {project.bathrooms > 0 && (
                    <div className="bg-background p-4 rounded-lg">
                      <p className="text-sm text-muted-foreground mb-1">Baños</p>
                      <p className="text-2xl font-bold text-foreground">{project.bathrooms}</p>
                    </div>
                  )}
                  <div className="bg-background p-4 rounded-lg">
                    <p className="text-sm text-muted-foreground mb-1">Precio</p>
                    <p className="text-2xl font-bold text-accent">
                      €{project.price.toLocaleString()}
                    </p>
                  </div>
                </div>

                <button className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Description Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-6">Sobre este Proyecto</h2>
            <p className="text-muted-foreground text-lg leading-relaxed mb-6">
              Este proyecto representa lo mejor de la arquitectura nórdica moderna. Con paneles SIP
              de última generación, aislamiento superior y diseño sostenible, ofrece confort,
              eficiencia y estética en una sola solución.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Cada detalle ha sido cuidadosamente diseñado para garantizar la máxima satisfacción del
              cliente. Desde la selección de materiales hasta la instalación final, nuestro equipo
              asegura la calidad en cada paso del proceso.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-8">Características Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { title: "Paneles SIP", description: "Aislamiento superior y construcción rápida" },
                { title: "Eficiencia Energética", description: "Reducción de consumo hasta 70%" },
                { title: "Sostenible", description: "Materiales ecológicos certificados" },
                { title: "Diseño Moderno", description: "Arquitectura escandinava contemporánea" },
                { title: "Instalación Rápida", description: "Reducción de tiempo de construcción" },
                { title: "Garantía 10 años", description: "Protección integral de tu inversión" },
              ].map((feature, idx) => (
                <div key={idx} className="bg-background p-6 rounded-lg">
                  <h3 className="font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold text-foreground mb-4">¿Interesado en este Proyecto?</h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contacta con nuestro equipo para obtener más información y una cotización personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Solicitar Cotización
              </button>
              <Link
                to="/#projects"
                className="bg-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-border/80 transition-colors"
              >
                Ver Más Proyectos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default ProjectDetail;
