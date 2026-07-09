import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  ArrowRight,
  Building2,
  ChefHat,
  ChevronLeft,
  ChevronRight,
  ClipboardCheck,
  Home,
  HousePlus,
  Layers,
  Ruler,
  ShieldCheck,
  Sun,
  Trees,
  Wrench,
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

type ServiceAudience = "b2c" | "b2b" | "both";

type ServiceItem = {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  audience: ServiceAudience;
  audienceLabel: string;
  bullets: string[];
  description: string;
  ctaLabel: string;
  ctaHash: string;
  imageSrc?: string;
  imageAlt?: string;
};

const audienceIntro = {
  b2c: {
    id: "services-b2c" as const,
    eyebrow: "Particulares y hogares",
    title: "Vive el SIP nórdico",
    description:
      "Casas y cabañas llave en mano, así como reformas y ampliaciones concretas (cocinas, zona trasera, terraza). Ideal si buscas moverte con tu familia, teletrabajar o invertir en una segunda residencia con consumo muy reducido.",
  },
  b2b: {
    id: "services-b2b" as const,
    eyebrow: "Empresas, comunidades de propietarios y promotores",
    title: "Materiales, kits y grandes volúmenes",
    description:
      "Suministro de paneles SIP, kits dimensionados para obra y soporte técnico para tus equipos. Cotizamos por proyecto, lote estándar o contrato repetitivo fuera del catálogo B2C.",
  },
};

const services: ServiceItem[] = [
  {
    icon: Home,
    title: "Casas completamente terminadas",
    subtitle: "Llave en mano · proyecto residencial",
    audience: "b2c",
    audienceLabel: "Particulares",
    bullets: ["Diseño escandinavo a medida", "Entrega con acabados y certificaciones donde aplique"],
    description:
      "Un solo interlocutor de cimentación a llaves: proyecto, fabricación SIP, montaje en obra y opciones premium de interiorismo. Transparente desde el briefing comercial inicial.",
    ctaLabel: "Solicitar presupuesto sin compromiso",
    ctaHash: "/contactos",
  },
  {
    icon: Layers,
    title: "Paneles SIP y kits de envolvente",
    subtitle: "Suministro B2B y promotores",
    audience: "b2b",
    audienceLabel: "Profesional",
    bullets: ["Listas de corte CNC y cargas agrupadas", "Documentación para obra UE"],
    description:
      "Paneles Estructurales Aislados, encargos por m² o por kit de planta repetitiva: ideal si ya tienes equipo de obra o eres desarrollador promoviendo comunidades estilo nórdico ligero.",
    ctaLabel: "Ver precios SIP y dossier técnico",
    ctaHash: "/contactos",
  },
  {
    icon: Wrench,
    title: "Reformas y construcción in situ",
    subtitle: "Particulares y contratas",
    audience: "both",
    audienceLabel: "Mixto · B2C & B2B",
    bullets: ["Renovaciones de apartamentos/chalets SIP", "Obra nueva colaborativa con tu equipo"],
    description:
      "Renovamos viviendas con enfoque nórdico y gestionamos in situ proyectos donde mezclas tu contrata con nuestra ingeniería o prefabricamos piezas volumétricas concretas.",
    ctaLabel: "Agendar consulta ejecutiva",
    ctaHash: "/contactos",
  },
  {
    icon: ChefHat,
    title: "Ampliación de cocinas",
    subtitle: "Cocina comedor · luz · conexión con el exterior",
    audience: "b2c",
    audienceLabel: "Particulares",
    bullets: [
      "Reordenamos la cocina o la abrimos al salón/comedor cuando la envolvente lo permite",
      "Propuesta de panel SIP ligero tras valorar cargas existentes",
    ],
    description:
      "Si buscas más metros de cocina o integrar zona comedor con buena luminosidad, partimos de tus fotos o planillo y definimos siguiente paso con documentación suficiente.",
    ctaLabel: "Pedir información — ampliación cocina",
    ctaHash: "/contactos?service=ampliacion-cocina",
    imageSrc: "/images/services/ampliacion1.jpg",
    imageAlt: "Vivienda con ampliación integrada tipo cocina-comedor luminosa.",
  },
  {
    icon: HousePlus,
    title: "Ampliación trasera de vivienda",
    subtitle: "Hacia patio · jardín · fondo de parcela",
    audience: "b2c",
    audienceLabel: "Particulares",
    bullets: [
      "Salón, dormitorio o zona polivalente pegada al jardín o patio",
      "Encaje de nueva pieza SIP con aislamiento y estética nórdica",
    ],
    description:
      "Amplía hacia el fondo cuando quieres ganar sala de estar o habitación sin mover toda la vivienda. Analizamos empalmes, desagües próximos y solape con cubierta existente.",
    ctaLabel: "Solicitar valoración trasera",
    ctaHash: "/contactos?service=ampliacion-trasera",
    imageSrc: "/images/services/ampliacion4.jpg",
    imageAlt: "Ampliación posterior de casa unifamiliar vista desde el jardín.",
  },
  {
    icon: Sun,
    title: "Ampliación de terrazas",
    subtitle: "Más superficie útil al aire libre",
    audience: "b2c",
    audienceLabel: "Particulares",
    bullets: [
      "Ampliación o cerramiento parcial según proyecto y límites urbanísticos locales",
      "Plan de obra por fases para minimizar ocupación del espacio habitual",
    ],
    description:
      "Cubrimos proyectos donde el objetivo es ganar zona exterior habitable con detalle fino tipo nórdico. Confirmamos límites y cargas antes de recomendar formato.",
    ctaLabel: "Consultar ampliación de terraza",
    ctaHash: "/contactos?service=ampliacion-terraza",
  },
  {
    icon: Building2,
    title: "Construcción en terrazas y áticos",
    subtitle: "Cubiertas · áticos · envolvente elevada",
    audience: "both",
    audienceLabel: "Mixto · B2C & B2B",
    bullets: [
      "Espacio nuevo sobre forjado existente cuando las cargas y la normativa lo admiten",
      "Soluciones SIP ligeras para cubiertas transitables",
    ],
    description:
      "Complementamos la línea de ampliaciones en planta cuando el reto está en crear habitáculo sobre cubierta, ático o forjado. La viabilidad estructural y los permisos dependen de cada edificio.",
    ctaLabel: "Evaluar terraza o ático",
    ctaHash: "/contactos?service=terrazas-aticos",
  },
  {
    icon: Trees,
    title: "Campings y cabañas",
    subtitle: "Glamping · turismo rural · módulos compactos",
    audience: "b2b",
    audienceLabel: "Profesional",
    bullets: ["Cabañas modulares para alojamientos turísticos", "Diseños repetibles, rápidos de montar y personalizables"],
    description:
      "Proyectamos cabañas y unidades compactas para campings, glamping y turismo rural, optimizando transporte, montaje por fases y una imagen nórdica consistente para el conjunto.",
    ctaLabel: "Planificar proyecto turístico",
    ctaHash: "/contactos?service=campings-cabanas",
  },
];

const reviewItems = [
  {
    icon: ClipboardCheck,
    title: "Encaje normativo",
    description: "Revisamos uso, retranqueos y límites antes de hablar de alcance cerrado.",
  },
  {
    icon: Ruler,
    title: "Estructura y accesos",
    description: "Miramos cargas, cimentación, cubierta existente y cómo entra el material a obra.",
  },
  {
    icon: ShieldCheck,
    title: "Presupuesto responsable",
    description: "Damos el siguiente paso con fotos, plano o visita, sin prometer viabilidad a ciegas.",
  },
];

// ─── Carousel config ───────────────────────────────────────────────────────────
const COLS = 3;
const ROWS = 2;
const PAGE_SIZE = COLS * ROWS; // 6 cards visible
const ADVANCE = 2;             // slide 2 cards (1 row) per step
const INTERVAL_MS = 30_000;
const TOTAL_STEPS = Math.ceil(services.length / ADVANCE); // 4

// ─── Sub-components ────────────────────────────────────────────────────────────

const AudiencePanel = ({
  eyebrow,
  title,
  description,
  id,
}: {
  eyebrow: string;
  title: string;
  description: string;
  id: string;
}) => (
  <div
    id={id}
    className="scroll-mt-28 border-t border-border bg-background/70 p-6 shadow-[0_18px_50px_-36px_hsl(var(--foreground)/0.32)] md:p-8"
    tabIndex={-1}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
    <h3 className="mt-2 text-xl font-bold text-foreground md:text-2xl">{title}</h3>
    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
  </div>
);

const ServiceCard = ({ service, index }: { service: ServiceItem; index: number }) => (
  <motion.article
    initial={{ opacity: 0, y: 16 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.35, delay: Math.min(index * 0.06, 0.22) }}
    className="group flex h-full flex-col overflow-hidden rounded-2xl border border-border bg-background shadow-[0_18px_50px_-36px_hsl(var(--foreground)/0.32)] transition duration-300 ease-out hover:-translate-y-1 hover:shadow-[0_26px_60px_-34px_hsl(var(--foreground)/0.4)]"
  >
    {service.imageSrc ? (
      <div className="aspect-[16/10] w-full shrink-0 overflow-hidden bg-muted">
        <img
          src={service.imageSrc}
          alt={service.imageAlt ?? ""}
          className="h-full w-full object-cover transition duration-500 ease-out group-hover:scale-[1.035]"
          loading="lazy"
        />
      </div>
    ) : null}
    <div className="flex flex-1 flex-col p-6">
      <div className="mb-5 flex items-start justify-between gap-4">
        <span
          className={`rounded-full px-3 py-1 text-[11px] font-semibold uppercase tracking-wide ${
            service.audience === "b2b"
              ? "border border-accent/45 bg-accent/10 text-accent-foreground"
              : service.audience === "b2c"
                ? "border border-border bg-muted text-foreground"
                : "border border-primary/35 bg-primary/10 text-primary"
          }`}
        >
          {service.audienceLabel}
        </span>
        <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-wood-light">
          <service.icon className="h-5 w-5 text-wood-dark" strokeWidth={2} aria-hidden />
        </div>
      </div>

      <p className="mb-2 text-xs font-semibold uppercase tracking-[0.16em] text-accent">{service.subtitle}</p>
      <h3 className="text-xl text-balance font-semibold text-foreground">{service.title}</h3>
      <p className="mt-4 text-sm leading-relaxed text-muted-foreground">{service.description}</p>

      <ul className="mt-5 space-y-2 text-sm leading-relaxed text-muted-foreground">
        {service.bullets.map((line) => (
          <li key={line} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" aria-hidden />
            <span>{line}</span>
          </li>
        ))}
      </ul>

      <a
        href={service.ctaHash}
        className="mt-auto pt-7 inline-flex items-center justify-between gap-3 rounded-xl bg-primary px-4 py-3 text-sm font-bold text-primary-foreground transition duration-300 ease-out hover:bg-primary/90 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2"
      >
        <span>{service.ctaLabel}</span>
        <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" aria-hidden />
      </a>
    </div>
  </motion.article>
);

// ─── Slide variants ────────────────────────────────────────────────────────────
const slideVariants = {
  enter: (dir: number) => ({ x: `${dir * 100}%`, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (dir: number) => ({ x: `${dir * -100}%`, opacity: 0 }),
};

const slideTransition = { duration: 0.55, ease: [0.32, 0, 0.18, 1] as const };

// ─── Main component ────────────────────────────────────────────────────────────
const Services = () => {
  const [step, setStep] = useState(0);
  const [dir, setDir] = useState<1 | -1>(1);

  const goNext = useCallback(() => {
    setDir(1);
    setStep((prev) => (prev + 1) % TOTAL_STEPS);
  }, []);

  const goPrev = useCallback(() => {
    setDir(-1);
    setStep((prev) => (prev - 1 + TOTAL_STEPS) % TOTAL_STEPS);
  }, []);

  const goTo = useCallback((index: number) => {
    setDir(index > step ? 1 : -1);
    setStep(index);
  }, [step]);

  // Auto-advance every 30 seconds
  useEffect(() => {
    const timer = setInterval(goNext, INTERVAL_MS);
    return () => clearInterval(timer);
  }, [goNext]);

  // Visible 6 cards starting at (step * ADVANCE) with wrap-around
  const startIndex = (step * ADVANCE) % services.length;
  const visibleCards = Array.from({ length: PAGE_SIZE }, (_, i) =>
    services[(startIndex + i) % services.length]
  );

  return (
    <section id="services" className="section-padding bg-warm-gray">
      <div className="mx-auto max-w-7xl">

        {/* ── Header ── */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-3xl md:mb-12"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Casas · Paneles SIP · Reformas escandinavas
          </p>
          <h2 className="mb-5 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-[2.5rem] md:leading-[1.12] lg:text-5xl">
            Servicios claros para construir, ampliar o industrializar tu proyecto
          </h2>
          <p className="max-w-2xl text-base leading-relaxed text-muted-foreground">
            NordiK combina proyectos terminados para quien quiere moverse rápido, con líneas industriales SIP
            para quien ejecuta grandes volúmenes.
          </p>
        </motion.div>

        {/* ── Audience panels ── */}
        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <AudiencePanel {...audienceIntro.b2c} />
          <AudiencePanel {...audienceIntro.b2b} />
        </div>

        {/* ── Carousel ── */}
        <div id="servicios-principales" className="scroll-mt-28">

          {/* Carousel header + nav buttons */}
          <div className="mb-7 flex items-end justify-between gap-4">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.24em] text-accent">Todos los servicios</p>
              <h3 className="mt-3 text-2xl font-semibold text-foreground md:text-3xl">
                Del proyecto completo al suministro técnico
              </h3>
            </div>
            <div className="flex shrink-0 items-center gap-2">
              <button
                onClick={goPrev}
                aria-label="Servicios anteriores"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-accent/50 hover:text-accent active:scale-[0.96]"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
              <button
                onClick={goNext}
                aria-label="Servicios siguientes"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-border bg-background text-foreground transition hover:border-accent/50 hover:text-accent active:scale-[0.96]"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Card grid with slide animation */}
          <div className="relative overflow-hidden rounded-3xl">
            <AnimatePresence mode="wait" custom={dir}>
              <motion.div
                key={step}
                custom={dir}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={slideTransition}
                className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
              >
                {visibleCards.map((service, i) => (
                  <ServiceCard key={`${step}-${service.title}`} service={service} index={i} />
                ))}
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Progress bar + dots */}
          <div className="mt-8 space-y-3">
            {/* Auto-progress bar — resets on each step */}
            <div className="h-[2px] overflow-hidden rounded-full bg-border">
              <motion.div
                key={`progress-${step}`}
                className="h-full origin-left bg-accent"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: INTERVAL_MS / 1000, ease: "linear" }}
              />
            </div>

            {/* Dots + counter */}
            <div className="flex items-center justify-between">
              <div className="flex gap-2" role="tablist" aria-label="Páginas de servicios">
                {Array.from({ length: TOTAL_STEPS }, (_, i) => (
                  <button
                    key={i}
                    role="tab"
                    aria-selected={i === step}
                    aria-label={`Página ${i + 1} de ${TOTAL_STEPS}`}
                    onClick={() => goTo(i)}
                    className={`h-2 rounded-full transition-all duration-300 ${
                      i === step
                        ? "w-6 bg-accent"
                        : "w-2 bg-border hover:bg-muted-foreground"
                    }`}
                  />
                ))}
              </div>
              <span className="text-xs tabular-nums text-muted-foreground">
                {step + 1} / {TOTAL_STEPS}
              </span>
            </div>
          </div>
        </div>

        {/* ── Review strip ── */}
        <div className="my-14 grid overflow-hidden rounded-[1.75rem] border border-border bg-background shadow-[0_18px_50px_-36px_hsl(var(--foreground)/0.35)] md:grid-cols-3">
          {reviewItems.map((item, i) => (
            <div
              key={item.title}
              className={`p-6 md:p-7 ${i > 0 ? "border-t border-border md:border-l md:border-t-0" : ""}`}
            >
              <item.icon className="h-6 w-6 text-accent" strokeWidth={2} aria-hidden />
              <h4 className="mt-4 text-base font-semibold text-foreground">{item.title}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </div>
          ))}
        </div>

        {/* ── Bottom CTA ── */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="rounded-[1.75rem] border border-accent/35 bg-accent/10 px-6 py-9 text-left md:px-8 md:py-10 lg:flex lg:items-center lg:justify-between lg:gap-8"
        >
          <div>
            <p className="text-lg font-semibold text-foreground">¿Sigues entre llave completa, ampliación y kit SIP?</p>
            <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
              Explora el catálogo con filtros de precio y categoría antes de elegir modelo.
            </p>
          </div>
          <a
            href="/#projects"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-6 py-3.5 text-base font-bold text-accent-foreground shadow-lg transition duration-300 hover:opacity-95 active:scale-[0.98] lg:mt-0"
          >
            Ver catálogo — casas, cabañas y kits
          </a>
        </motion.div>

      </div>
    </section>
  );
};

export default Services;
