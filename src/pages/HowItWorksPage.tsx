import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { PageHero } from "@/components/PageHero";
import projectSelectionImage from "@/assets/how-it-works-step-01-project-selection.jpg";
import productionVisitImage from "@/assets/how-it-works-step-02-production-visit.jpg";
import contractPaymentImage from "@/assets/how-it-works-step-03-contract-payment.jpg";
import administrationPermitsImage from "@/assets/how-it-works-step-04-administration-permits.jpg";
import constructionStartImage from "@/assets/how-it-works-step-05-construction-start.jpg";
import finishMaterialsImage from "@/assets/how-it-works-step-06-finish-materials.jpg";
import foundationSurveyImage from "@/assets/how-it-works-step-07-foundation-survey.jpg";
import transportAssemblyImage from "@/assets/how-it-works-step-08-transport-assembly.jpg";

const steps = [
  {
    number: "01",
    title: "Elección del proyecto",
    body: `Explora nuestra web para encontrar el modelo que encaje con tu visión: tamaño, distribución y acabados. Completa tu vivienda con opciones adicionales y crea tu espacio ideal. ¡Cuéntanos qué personalizaciones te interesan!`,
    image: projectSelectionImage,
    imageAlt: "Planos de construcción de una casa NordiK sobre una mesa de estudio",
  },
  {
    number: "02",
    title: "Consulta y visita de producción",
    body: `Visita nuestras oficinas en Barcelona o Madrid o programa una videoconsulta con el equipo técnico. También puedes solicitar conocer talleres de fabricación acordados y viviendas de referencia para evaluar materiales y acabados.`,
    image: productionVisitImage,
    imageAlt: "Personas con casco visitando una obra de casa prefabricada con paneles SIP",
  },
  {
    number: "03",
    title: "Contrato y primer pago",
    body: `Cuando el modelo y las ampliaciones estén definidos, firmamos el contrato. En esta fase se abona normalmente una provisión inicial del 50 % del importe total acordado, según condiciones del contrato.`,
    image: contractPaymentImage,
    imageAlt: "Apretón de manos sobre contrato, planos de vivienda y casco de obra",
  },
  {
    number: "04",
    title: "Tramitación ante la administración",
    body: `Tras la firma te entregamos la documentación y planos necesarios para presentarlos ante el ayuntamiento u organismo competente. Ajustamos la vivienda a la normativa local para facilitar licencias y permisos.`,
    image: administrationPermitsImage,
    imageAlt: "Documentación administrativa, solicitud de licencia de obra y planos para permisos de construcción",
  },
  {
    number: "05",
    title: "Inicio de obra de la vivienda",
    body: `La fabricación de tu vivienda arranca en instalaciones controladas en taller. Los plazos dependen del tamaño y diseño elegidos. Te mantenemos informado con hitos claros sobre el avance en la planta de producción.`,
    image: constructionStartImage,
    imageAlt: "Cimentación de una vivienda con paneles SIP y materiales preparados para iniciar el montaje",
  },
  {
    number: "06",
    title: "Elección de materiales de acabado",
    body: `Ofrecemos un amplio catálogo de acabados para fachada, interior, suelos, cubierta y carpinterías, con tonalidades y texturas para que cada detalle refleje lo acordado en proyecto.`,
    image: finishMaterialsImage,
    imageAlt: "Interior salón-cocina con texturas de madera, suelos y muestras de materiales de acabado",
  },
  {
    number: "07",
    title: "Cimentación en parcela",
    body: `Mientras avanza la prefabricación, en tu parcela debe ejecutarse la cimentación: pilares, micropilotaje, zapatas u otra solución de ingeniería. Recibirás planos y criterios para preparar obra y accesos según el modelo contratado.`,
    image: foundationSurveyImage,
    imageAlt: "Técnicos de espaldas midiendo y nivelando la cimentación de una vivienda en parcela",
  },
  {
    number: "08",
    title: "Transporte y montaje",
    body: `Con la vivienda lista, coordinamos el transporte hasta tu ubicación. El embalaje (acabada, en módulos o panelizada) varía según modelo; suele requerirse grúa en origen y en destino para descarga y montaje seguro.`,
    image: transportAssemblyImage,
    imageAlt: "Camión transportando paneles SIP y remolque con contenedor protegido hacia una obra residencial",
  },
  {
    number: "09",
    title: "Conexión de suministros",
    body: `Una vez apoyada la vivienda y cerrados los trabajos en obra, se enlazan agua, saneamiento y electricidad a las tomas preparadas en interior. Con eso, tu nueva casa queda lista para ocupación y puesta en marcha final.`,
  },
];

// Scroll to the anchor from URL hash after page load
const useScrollToAnchor = () => {
  const { hash } = useLocation();
  useEffect(() => {
    if (!hash) return;
    const el = document.querySelector(hash);
    if (el) {
      setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 100);
    }
  }, [hash]);
};

const HowItWorksPage = () => {
  useScrollToAnchor();

  return (
    <div className="min-h-screen bg-background">
      <PageHero
        eyebrow="El proceso"
        title="Cómo funciona"
        description="Desde elegir modelo hasta ocupar tu vivienda: 9 pasos claros hasta tu nueva casa NordiK. Cada fase explicada para que sepas siempre qué viene después."
        backHref="/"
        stats={[
          { label: "Fases", value: "9 pasos" },
          { label: "Método", value: "Obra seca" },
          { label: "Control", value: "Hitos claros" },
        ]}
      />

      {/* Sticky mini-nav on desktop */}
      <div className="sticky top-[62px] z-30 hidden border-b border-border bg-background/95 backdrop-blur-md lg:block">
        <div className="mx-auto max-w-7xl px-6">
          <ol className="flex gap-0 overflow-x-auto py-3 [&::-webkit-scrollbar]:hidden">
            {steps.map((s) => (
              <li key={s.number} className="shrink-0">
                <a
                  href={`#step-${s.number}`}
                  className="group flex items-center gap-2 rounded-lg px-3 py-1.5 text-sm
                             text-muted-foreground transition-colors hover:text-foreground"
                >
                  <span className="font-bold tabular-nums text-accent">{s.number}</span>
                  <span className="hidden xl:inline">{s.title}</span>
                </a>
              </li>
            ))}
          </ol>
        </div>
      </div>

      {/* Steps */}
      <div className="mx-auto max-w-6xl px-6 py-16">
        <ol className="space-y-0">
          {steps.map((step, i) => {
            const prev = steps[i - 1];
            const next = steps[i + 1];
            const imageOnLeft = i % 2 === 0;

            return (
              <li
                key={step.number}
                id={`step-${step.number}`}
                className="scroll-mt-32"
              >
                <motion.div
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.5 }}
                  className="grid gap-8 py-14 md:grid-cols-[4.5rem_minmax(0,1fr)]"
                >
                  {/* Left: number + connector */}
                  <div className="hidden flex-col items-center md:flex">
                    {/* Circle */}
                    <div
                      className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full
                                 border-2 border-accent bg-accent/10"
                    >
                      <span className="text-base font-bold tabular-nums text-accent">
                        {step.number}
                      </span>
                    </div>
                    {/* Connector line */}
                    {i < steps.length - 1 && (
                      <div className="mt-4 flex-1 w-px bg-border" />
                    )}
                  </div>

                  {/* Right: content */}
                  <div className="min-w-0 pb-4">
                    <div
                      className={`grid items-center gap-8 ${
                        step.image ? "lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1fr)]" : ""
                      }`}
                    >
                      {step.image ? (
                        <figure className={imageOnLeft ? "lg:order-1" : "lg:order-2"}>
                          <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border bg-muted shadow-[0_24px_70px_-48px_hsl(var(--foreground)/0.55)]">
                            <img
                              src={step.image}
                              alt={step.imageAlt}
                              className="h-full w-full object-cover"
                              loading={i === 0 ? "eager" : "lazy"}
                            />
                          </div>
                        </figure>
                      ) : null}

                      <div className={step.image && imageOnLeft ? "lg:order-2" : "lg:order-1"}>
                        <div className="mb-4 flex items-center gap-3 md:hidden">
                          <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border-2 border-accent bg-accent/10 text-sm font-bold tabular-nums text-accent">
                            {step.number}
                          </span>
                          <span className="h-px flex-1 bg-border" aria-hidden />
                        </div>

                        <p className="mb-3 text-xs font-semibold uppercase tracking-[0.24em] text-accent">
                          Paso {step.number}
                        </p>
                        <h2 className="mb-4 text-2xl font-semibold tracking-tight text-foreground md:text-3xl">
                          {step.title}
                        </h2>
                        <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                          {step.body}
                        </p>

                        {/* Step navigation */}
                        <div className="mt-8 flex flex-wrap items-center gap-4">
                          {i === steps.length - 1 && (
                            <Link
                              to="/contactos"
                              className="inline-flex items-center gap-2 rounded-xl bg-accent px-6 py-3
                                         text-sm font-bold text-accent-foreground transition-opacity hover:opacity-90"
                            >
                              Empezar tu proyecto <ArrowRight className="h-4 w-4" />
                            </Link>
                          )}
                          <div className="flex flex-wrap gap-3 text-sm">
                            {prev && (
                              <a
                                href={`#step-${prev.number}`}
                                className="inline-flex items-center gap-1.5 font-medium text-muted-foreground hover:text-foreground"
                              >
                                <ArrowLeft className="h-3.5 w-3.5" />
                                {prev.number}. {prev.title}
                              </a>
                            )}
                            {next && (
                              <a
                                href={`#step-${next.number}`}
                                className="inline-flex items-center gap-1.5 font-medium text-accent hover:opacity-80"
                              >
                                Siguiente: {next.number}. {next.title}
                                <ArrowRight className="h-3.5 w-3.5" />
                              </a>
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Divider between steps (except last) */}
                {i < steps.length - 1 && (
                  <div className="border-t border-border/50 md:ml-[4.5rem]" />
                )}
              </li>
            );
          })}
        </ol>

        {/* Final CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 rounded-2xl border border-border bg-card px-8 py-10 text-center shadow-sm"
        >
          <h3 className="text-xl font-semibold text-foreground">
            ¿Empezamos tu proyecto?
          </h3>
          <p className="mt-2 text-base text-muted-foreground">
            Solicita un presupuesto sin compromiso y el equipo te acompaña en cada paso.
          </p>
          <Link
            to="/contactos"
            className="mt-6 inline-flex items-center gap-2 rounded-xl bg-accent px-8 py-3.5
                       text-base font-bold text-accent-foreground transition-opacity hover:opacity-90"
          >
            Solicitar presupuesto gratis <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default HowItWorksPage;
