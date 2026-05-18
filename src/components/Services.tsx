import { motion } from "framer-motion";
import { Building2, Hammer, Home, Layers, Trees, Wrench } from "lucide-react";
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
};

const audienceIntro = {
  b2c: {
    id: "services-b2c" as const,
    eyebrow: "Particulares y hogares",
    title: "Vive nordic SIP",
    description:
      "Casas y cabañas llave en mano, así como reformas y ampliaciones. Ideal si buscas moverte con tu familia, teletrabajar o invertir en una segunda residencia con consumo muy reducido.",
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
      "Paneles Estructurales Aislados, encargos por m² o por kit de planta repetitiva: ideal si ya tienes equipo de obra o eres desarrollador promoviendo comunidades nordic-lite.",
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
    icon: Hammer,
    title: "Ampliaciones de casas",
    subtitle: "Cocinas · salones · espacios traseros",
    audience: "b2c",
    audienceLabel: "Particulares",
    bullets: ["Extensiones SIP integradas en vivienda existente", "Más metros útiles con obra limpia y planificación técnica"],
    description:
      "Diseñamos ampliaciones para cocinas, salones, estudios y espacios traseros, buscando continuidad estética con la casa actual y un presupuesto orientativo según estructura, accesos y acabados.",
    ctaLabel: "Consultar ampliación",
    ctaHash: "/contactos?service=ampliaciones",
  },
  {
    icon: Building2,
    title: "Construcción en terrazas y áticos",
    subtitle: "Cubiertas · áticos · espacios elevados",
    audience: "both",
    audienceLabel: "Mixto · B2C & B2B",
    bullets: ["Soluciones SIP ligeras para cubiertas transitables", "Estudio previo de cargas, permisos y envolvente"],
    description:
      "Creamos nuevos espacios funcionales en terrazas, áticos y cubiertas cuando la estructura y la normativa lo permiten, con sistemas SIP de bajo peso y documentación técnica bajo solicitud.",
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
    className="scroll-mt-28 rounded-2xl border border-border bg-background p-8 shadow-sm lg:p-8"
    tabIndex={-1}
  >
    <p className="text-xs font-semibold uppercase tracking-[0.2em] text-accent">{eyebrow}</p>
    <h3 className="mt-2 text-xl font-bold text-foreground md:text-2xl">{title}</h3>
    <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
  </div>
);

const Services = () => {
  return (
    <section id="services" className="section-padding bg-warm-gray">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center md:mb-16"
        >
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.25em] text-accent">
            Casas · Paneles SIP · Reformas escandinavas
          </p>
          <h2 className="mb-4 text-balance text-3xl font-semibold tracking-tight text-foreground md:text-[2.25rem] md:leading-[1.2] lg:text-4xl">
            Opciones claras para particulares y para empresas
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-muted-foreground">
            NordiK combina proyectos terminados para quien quiere moverse rápido, con líneas industriales SIP
            para quien ejecuta grandes volúmenes. El mismo catálogo público muestra proyectos ejemplo; estas
            líneas distinguen cómo contratar cada servicio en NordiK.
          </p>
        </motion.div>

        <div className="mb-12 grid gap-6 md:grid-cols-2">
          <AudiencePanel {...audienceIntro.b2c} />
          <AudiencePanel {...audienceIntro.b2b} />
        </div>

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service, i) => (
            <motion.article
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className="flex h-full flex-col rounded-2xl border border-border bg-background p-8 interactive-card"
            >
              <div className="mb-4 flex flex-wrap items-start justify-between gap-2">
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
              </div>
              <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-xl bg-wood-light">
                <service.icon className="h-7 w-7 text-wood" strokeWidth={2} aria-hidden />
              </div>
              <h3 className="text-xl font-bold text-foreground">{service.title}</h3>
              <p className="mb-4 text-sm font-medium text-accent">{service.subtitle}</p>
              <ul className="mb-4 space-y-2 text-sm leading-relaxed text-muted-foreground">
                {service.bullets.map((line) => (
                  <li key={line} className="relative pl-3 before:absolute before:left-0 before:top-[0.45rem] before:h-1 before:w-1 before:rounded-full before:bg-accent">
                    {line}
                  </li>
                ))}
              </ul>
              <p className="mb-6 flex-1 text-base leading-relaxed text-muted-foreground">{service.description}</p>
              <a
                href={service.ctaHash}
                className="inline-flex justify-center rounded-lg bg-primary px-4 py-2.5 text-center text-sm font-bold text-primary-foreground hover:bg-primary/90"
              >
                {service.ctaLabel}
              </a>
            </motion.article>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 rounded-2xl border border-accent/35 bg-accent/10 px-8 py-10 text-center md:mt-16"
        >
          <p className="text-lg font-semibold text-foreground">¿Sigues entre llave completa y kit SIP?</p>
          <p className="mx-auto mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Explore el catálogo con filtros de precio y categoría antes de elegir modelo.
          </p>
          <a
            href="/#projects"
            className="mt-8 inline-flex items-center justify-center rounded-xl bg-accent px-8 py-3.5 text-base font-bold text-accent-foreground shadow-lg transition-opacity hover:opacity-95"
          >
            Ver catálogo — casas, cabañas y kits
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
