import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Home } from "lucide-react";
import { projects } from "@/data/projects";
import { getProjectGallery } from "@/data/projectGalleries";
import { getTechnicalSpecs } from "@/data/projectTechnicalSpecs";
import { getProjectTimeline } from "@/data/projectTimelines";
import { getServiceOptions } from "@/data/projectServiceOptions";
import { useQuotationModal } from "@/hooks/useQuotationModal";
import { findRelatedProjects } from "@/utils/relatedProjects";
import ImageGallery from "./ImageGallery";
import TechnicalSpecs from "./TechnicalSpecs";
import ConstructionTimeline from "./ConstructionTimeline";
import ServiceOptions from "./ServiceOptions";
import ConstructionProcess from "./ConstructionProcess";
import RelatedProjects from "./RelatedProjects";
import QuotationModal from "./QuotationModal";
import FloatingQuotationButton from "./FloatingQuotationButton";
import PaymentMilestones from "./PaymentMilestones";
import ProjectAddonsConfigurator from "./ProjectAddonsConfigurator";
import NotFound from "@/pages/NotFound";
import { getPaymentScheme } from "@/data/projectPaymentSchemes";

const ProjectDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const project = projects.find((p) => p.slug === slug);
  const { isOpen, openModal, closeModal, projectName, serviceOption, quotationContext } = useQuotationModal();

  if (!project) {
    return <NotFound />;
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Quotation Modal */}
      <QuotationModal
        isOpen={isOpen}
        onClose={closeModal}
        projectName={projectName}
        serviceOption={serviceOption}
        quotationContext={quotationContext}
      />

      {/* Floating Quotation Button */}
      <FloatingQuotationButton projectName={project.name} onClick={() => openModal(project.name)} />
      <nav className="border-b border-border bg-warm-gray" aria-label="Migas de pan">
        <div className="mx-auto max-w-7xl px-4 py-4">
          <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-normal text-foreground md:text-base">
            <li className="flex items-center gap-2">
              <Link
                to="/"
                className="inline-flex items-center gap-1 font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                <Home className="size-4 shrink-0" aria-hidden />
                Inicio
              </Link>
            </li>
            <li aria-hidden className="text-muted-foreground">
              <ChevronRight className="size-4" />
            </li>
            <li>
              <Link
                to="/#projects"
                className="font-medium text-muted-foreground transition-colors hover:text-foreground"
              >
                Proyectos
              </Link>
            </li>
            <li aria-hidden className="text-muted-foreground">
              <ChevronRight className="size-4" />
            </li>
            <li>
              <span className="font-semibold text-foreground" aria-current="page">
                {project.name}
              </span>
            </li>
          </ol>
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
                <h1 className="mb-4 text-balance text-4xl font-semibold leading-[1.18] tracking-tight text-foreground md:text-5xl lg:text-[3.25rem]">
                  {project.name}
                </h1>
                <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
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

                <button
                  onClick={() => openModal(project.name)}
                  className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Solicitar Cotización
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Gallery Section */}
      {(() => {
        const gallery = getProjectGallery(slug!);
        return gallery ? <ImageGallery images={gallery.images} title="Galería del Proyecto" /> : null;
      })()}

      {/* Description Section */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-foreground md:text-[2rem] md:leading-[1.25]">
              Sobre este Proyecto
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              Este proyecto representa lo mejor de la arquitectura nórdica moderna. Con paneles SIP
              de última generación, aislamiento superior y diseño sostenible, ofrece confort,
              eficiencia y estética en una sola solución.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              Cada detalle ha sido cuidadosamente diseñado para garantizar la máxima satisfacción del
              cliente. Desde la selección de materiales hasta la instalación final, nuestro equipo
              asegura la calidad en cada paso del proceso.
            </p>
          </motion.div>
        </div>
      </section>

      <PaymentMilestones
        scheme={getPaymentScheme(slug!)}
        projectName={project.name}
        onRequestQuote={(msg) => openModal(project.name, "", msg)}
      />

      {/* Features Section */}
      <section className="section-padding bg-warm-gray">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-8 text-3xl font-semibold tracking-tight text-foreground md:text-[2rem] md:leading-[1.25]">
              Características Principales
            </h2>
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

      {/* Technical Specifications Section */}
      {(() => {
        const specs = getTechnicalSpecs(slug!);
        return specs ? <TechnicalSpecs specs={specs} /> : null;
      })()}

      {/* Construction Timeline Section */}
      {(() => {
        const timeline = getProjectTimeline(slug!);
        return timeline ? <ConstructionTimeline timeline={timeline} /> : null;
      })()}

      <ProjectAddonsConfigurator
        slug={slug!}
        projectBaseEUR={project.price}
        projectLabel={project.name}
        onRequestQuote={(msg) => openModal(project.name, "", msg)}
      />

      {/* Service Options Section */}
      {(() => {
        const serviceOptions = getServiceOptions(slug!);
        return serviceOptions ? (
          <ServiceOptions
            serviceOptions={serviceOptions}
            onRequestQuote={(tierName) => openModal(project.name, tierName)}
          />
        ) : null;
      })()}

      {/* Construction Process Section */}
      <ConstructionProcess />

      <section aria-label="Líneas B2C y SIP" className="border-y border-border bg-muted/35">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm leading-relaxed text-muted-foreground">
          ¿Este modelo es para tu hogar o buscas&nbsp;
          <Link to="/servicios#services-b2b" className="font-semibold text-foreground underline underline-offset-2 hover:text-accent">
            suministro SIP para empresa
          </Link>
          ? NordiK separa particulares y profesionales:{" "}
          <Link to="/servicios#services-b2c" className="font-semibold text-foreground underline underline-offset-2 hover:text-accent">
            casas llave en mano
          </Link>{" "}
          vs kits industriales descritos en la home.
        </div>
      </section>

      {/* Related Projects Section */}
      <RelatedProjects projects={findRelatedProjects(project, projects)} />

      {/* CTA Section */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-[2rem] md:leading-[1.25]">
              ¿Interesado en este Proyecto?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Contacta con nuestro equipo para obtener más información y una cotización personalizada.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => openModal(project.name)}
                className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
              >
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
