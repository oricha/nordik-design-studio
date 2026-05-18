import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ChevronRight, Clock3, Download, Home, MapPin, ShieldCheck } from "lucide-react";
import type { Project } from "@/data/projects";
import { getProjectGallery } from "@/data/projectGalleries";
import { getTechnicalSpecs } from "@/data/projectTechnicalSpecs";
import { getProjectTimeline } from "@/data/projectTimelines";
import { buildDefaultServiceOptions, getServiceOptions } from "@/data/projectServiceOptions";
import { useQuotationModal } from "@/hooks/useQuotationModal";
import { findRelatedProjects } from "@/utils/relatedProjects";
import ImageGallery from "./ImageGallery";
import TechnicalSpecs from "./TechnicalSpecs";
import ConstructionTimeline from "./ConstructionTimeline";
import ServiceOptions from "./ServiceOptions";
import ConstructionProcess from "./ConstructionProcess";
import RelatedProjects from "./RelatedProjects";
import QuotationModal from "./QuotationModal";
import PaymentMilestones from "./PaymentMilestones";
import ProjectAddonsConfigurator from "./ProjectAddonsConfigurator";
import { getPaymentScheme } from "@/data/projectPaymentSchemes";
import { getProjectAddons } from "@/data/projectAddons";
import { projects } from "@/data/projects";

type ProjectDetailProps = {
  project: Project;
};

const baseIncludedItems = [
  "Paneles SIP y estructura base según alcance del modelo",
  "Documentación técnica comercial disponible bajo solicitud",
  "Planificación y coordinación NordiK según proyecto",
];

const baseExcludedItems = [
  "Terreno y adecuación de parcela",
  "Permisos, tasas y validaciones locales",
  "Transporte y montaje final, salvo que se contraten expresamente",
];

const ProjectDetail = ({ project }: ProjectDetailProps) => {
  const slug = project.slug ?? "";
  const contactHref = `/contactos?project=${encodeURIComponent(slug)}`;
  const gallery = slug ? getProjectGallery(slug) : undefined;
  const specs = slug ? getTechnicalSpecs(slug) : undefined;
  const timeline = slug ? getProjectTimeline(slug) : undefined;
  const serviceOptions = (slug ? getServiceOptions(slug) : undefined) ?? buildDefaultServiceOptions(project.price);
  const paymentScheme = slug ? getPaymentScheme(slug) : getPaymentScheme("default");
  const addons = slug ? getProjectAddons(slug).slice(0, 3) : [];
  const relatedProjects = findRelatedProjects(project, projects);
  const { isOpen, openModal, closeModal, projectName, serviceOption, quotationContext } = useQuotationModal();

  const priceIncludedItems =
    project.category === "materials"
      ? [
          "Kit SIP y componentes industrializados según despiece",
          "Control de calidad en fábrica",
          "Documentación de entrega y packing list",
        ]
      : project.category === "reforms"
        ? [
            "Intervención base y planificación de reforma",
            "Suministro SIP asociado al alcance definido",
            "Coordinación técnica y documentación comercial",
          ]
        : baseIncludedItems;

  const priceExcludedItems =
    project.category === "materials"
      ? [
          "Descarga en obra, medios auxiliares y montaje",
          "Permisos de obra y legalizaciones locales",
          "Acabados finales e instalaciones complementarias",
        ]
      : project.category === "reforms"
        ? [
            "Imprevistos ocultos en estructura existente",
            "Tasas, licencias y gestiones municipales",
            "Opcionales premium no definidos en contrato",
          ]
        : baseExcludedItems;

  return (
    <div className="min-h-screen bg-background pb-24 lg:pb-0">
      <QuotationModal
        isOpen={isOpen}
        onClose={closeModal}
        projectName={projectName}
        serviceOption={serviceOption}
        quotationContext={quotationContext}
      />

      <div className="border-b border-border bg-warm-gray pt-24" aria-label="Migas de pan">
        <div className="mx-auto max-w-7xl px-6 py-4">
          <nav aria-label="Ruta de navegación" className="mb-2">
            <ol className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm text-muted-foreground">
              <li>
                <Link to="/" className="inline-flex items-center gap-1 transition-colors hover:text-foreground">
                  <Home className="size-4 shrink-0" aria-hidden />
                  Inicio
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li>
                <Link to="/#projects" className="transition-colors hover:text-foreground">
                  Proyectos
                </Link>
              </li>
              <li aria-hidden>
                <ChevronRight className="size-3.5" />
              </li>
              <li className="font-medium text-foreground">{project.name}</li>
            </ol>
          </nav>
        </div>
      </div>

      <section className="section-padding bg-warm-gray">
        <div className="mx-auto max-w-7xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(320px,0.8fr)]">
              <div>
                {gallery ? (
                  <ImageGallery images={gallery.images} title={`Galería ${project.name}`} embedded />
                ) : (
                  <div className="relative aspect-[4/3] overflow-hidden rounded-2xl">
                    <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
                  </div>
                )}
              </div>

              <div className="rounded-2xl border border-border bg-background p-6 shadow-[0_12px_40px_rgba(15,15,15,0.06)] md:p-8">
                <div className="flex flex-wrap items-center gap-2 text-sm font-medium text-muted-foreground">
                  <span className="rounded-full border border-border bg-muted/50 px-3 py-1">
                    {project.category === "houses"
                      ? "Casa"
                      : project.category === "cabins"
                        ? "Cabaña"
                        : project.category === "materials"
                          ? "Materiales"
                          : "Reforma"}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <MapPin className="h-4 w-4" aria-hidden />
                    {project.city}
                  </span>
                </div>

                <h1 className="mt-4 text-balance text-4xl font-semibold leading-[1.12] tracking-tight text-foreground md:text-5xl">
                  {project.name}
                </h1>
                <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
                  Vivienda nórdica con construcción SIP, precio orientativo y acompañamiento técnico
                  real. El alcance final se valida según parcela, transporte y contrato.
                </p>

                <div className="mt-6 rounded-xl border border-border bg-warm-gray/60 p-5">
                  <p className="text-sm font-medium uppercase tracking-wide text-muted-foreground">
                    Precio orientativo
                  </p>
                  <p className="mt-2 text-3xl font-bold text-accent md:text-4xl">
                    Desde €{project.price.toLocaleString()}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                    Estimado sujeto a proyecto, parcela, transporte, permisos y opción de servicio
                    finalmente contratada.
                  </p>
                </div>

                <div className="mt-6 grid grid-cols-2 gap-3">
                  {project.area > 0 && (
                    <div className="rounded-xl border border-border bg-muted/35 p-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Área útil</p>
                      <p className="mt-1 text-xl font-semibold text-foreground">{project.area} m²</p>
                    </div>
                  )}
                  {project.bedrooms > 0 && (
                    <div className="rounded-xl border border-border bg-muted/35 p-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Dormitorios</p>
                      <p className="mt-1 text-xl font-semibold text-foreground">{project.bedrooms}</p>
                    </div>
                  )}
                  {project.bathrooms > 0 && (
                    <div className="rounded-xl border border-border bg-muted/35 p-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Baños</p>
                      <p className="mt-1 text-xl font-semibold text-foreground">{project.bathrooms}</p>
                    </div>
                  )}
                  {project.deliveryWeeks != null && (
                    <div className="rounded-xl border border-border bg-muted/35 p-4">
                      <p className="text-xs uppercase tracking-wide text-muted-foreground">Entrega estimada</p>
                      <p className="mt-1 inline-flex items-center gap-2 text-xl font-semibold text-foreground">
                        <Clock3 className="h-4 w-4 text-accent" aria-hidden />
                        ~{project.deliveryWeeks} semanas
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <Link
                    to={contactHref}
                    className="inline-flex flex-1 items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground transition-opacity hover:opacity-95"
                  >
                    Recibir presupuesto detallado
                  </Link>
                  <button
                    type="button"
                    onClick={() => openModal(project.name)}
                    className="inline-flex flex-1 items-center justify-center rounded-xl border border-border bg-background px-6 py-3.5 text-base font-semibold text-foreground transition-colors hover:border-accent/50"
                  >
                    Solicitar documentación técnica
                  </button>
                </div>

                <div className="mt-5 inline-flex items-center gap-2 rounded-full bg-muted/50 px-3 py-1.5 text-xs font-medium text-muted-foreground">
                  <ShieldCheck className="h-4 w-4 text-accent" aria-hidden />
                  Documentación y certificaciones disponibles bajo solicitud
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section-padding">
        <div className="mx-auto max-w-7xl">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-6 text-3xl font-semibold tracking-tight text-foreground md:text-[2rem] md:leading-[1.25]">
              Sobre este proyecto
            </h2>
            <p className="mb-6 text-lg leading-relaxed text-muted-foreground">
              {project.name} combina lenguaje escandinavo, eficiencia térmica y un planteamiento
              industrializado que ayuda a reducir incertidumbre en plazos y costes frente a obra
              tradicional.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground">
              La propuesta comercial se ajusta según servicio contratado, ubicación de obra y nivel
              de personalización. NordiK valida alcance técnico y documentación antes de emitir la
              cotización definitiva.
            </p>
          </motion.div>
        </div>
      </section>

      {specs ? <TechnicalSpecs specs={specs} /> : null}
      {timeline ? <ConstructionTimeline timeline={timeline} /> : null}

      <ServiceOptions
        serviceOptions={serviceOptions}
        onRequestQuote={(tierName) => openModal(project.name, tierName)}
      />

      <ConstructionProcess />

      <section className="section-padding bg-warm-gray">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl border border-border bg-background p-6 shadow-[0_12px_40px_rgba(15,15,15,0.06)] md:p-8"
          >
            <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
              Precio, alcance y exclusiones
            </p>
            <h2 className="mt-2 text-3xl font-semibold tracking-tight text-foreground">
              Desde €{project.price.toLocaleString()}
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
              Precio estimado y no vinculante hasta revisión final de parcela, transporte, permisos,
              servicio contratado y contrato firmado.
            </p>

            <div className="mt-8 grid gap-6 md:grid-cols-2">
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Incluye habitualmente
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {priceIncludedItems.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  No incluye habitualmente
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {priceExcludedItems.map((item) => (
                    <li key={item}>• {item}</li>
                  ))}
                </ul>
              </div>
            </div>

            {addons.length > 0 ? (
              <div className="mt-8">
                <h3 className="text-sm font-semibold uppercase tracking-wide text-foreground">
                  Opcionales frecuentes
                </h3>
                <ul className="mt-3 space-y-2 text-sm leading-relaxed text-muted-foreground">
                  {addons.map((addon) => (
                    <li key={addon.id}>
                      • {addon.name}: +€{addon.addonPriceEUR.toLocaleString()} aprox.
                    </li>
                  ))}
                </ul>
              </div>
            ) : null}

            <div className="mt-8 rounded-xl border border-border bg-muted/35 p-4">
              <p className="text-sm font-semibold text-foreground">
                Esquema de pagos orientativo, sujeto a contrato
              </p>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Los hitos y porcentajes se confirman en la oferta definitiva según alcance,
                calendario industrial y condiciones logísticas del proyecto.
              </p>
            </div>

            <Link
              to={contactHref}
              className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground transition-opacity hover:opacity-95"
            >
              Recibir presupuesto detallado
            </Link>
          </motion.div>

          <PaymentMilestones
            scheme={paymentScheme}
            projectName={project.name}
            onRequestQuote={(msg) => openModal(project.name, "", msg)}
          />
        </div>
      </section>

      <ProjectAddonsConfigurator
        slug={slug}
        projectBaseEUR={project.price}
        projectLabel={project.name}
        onRequestQuote={(msg) => openModal(project.name, "", msg)}
      />

      <section aria-label="Líneas B2C y SIP" className="border-y border-border bg-muted/35">
        <div className="mx-auto max-w-7xl px-6 py-6 text-center text-sm leading-relaxed text-muted-foreground">
          ¿Este modelo es para tu hogar o buscas{" "}
          <Link to="/servicios#services-b2b" className="font-semibold text-foreground underline underline-offset-2 hover:text-accent">
            suministro SIP para empresa
          </Link>
          ? NordiK separa particulares y profesionales:{" "}
          <Link to="/servicios#services-b2c" className="font-semibold text-foreground underline underline-offset-2 hover:text-accent">
            casas llave en mano
          </Link>{" "}
          frente a kits industriales descritos en la home.
        </div>
      </section>

      <RelatedProjects projects={relatedProjects} />

      <section className="section-padding">
        <div className="mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="mb-4 text-3xl font-semibold tracking-tight text-foreground md:text-[2rem] md:leading-[1.25]">
              ¿Quieres una propuesta ajustada a tu proyecto?
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Te enviamos una estimación detallada del modelo {project.name} con alcance, plazos
              orientativos y siguientes pasos.
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                to={contactHref}
                className="inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-base font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
              >
                Solicitar presupuesto gratis
              </Link>
              <Link
                to="/#projects"
                className="inline-flex items-center justify-center rounded-xl bg-border px-8 py-3 text-base font-semibold text-foreground transition-colors hover:bg-border/80"
              >
                Ver más proyectos
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <div className="fixed bottom-0 left-0 right-0 z-40 border-t border-border bg-background/95 p-4 backdrop-blur-sm lg:hidden">
        <Link
          to={contactHref}
          className="flex w-full items-center justify-center rounded-xl bg-accent py-4 text-base font-bold text-accent-foreground"
        >
          Solicitar presupuesto gratis
        </Link>
      </div>
    </div>
  );
};

export default ProjectDetail;
