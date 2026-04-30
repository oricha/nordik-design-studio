import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Building2, Download, Timer } from "lucide-react";
import g1 from "@/assets/gallery-1.jpg";
import g4 from "@/assets/gallery-4.jpg";
import gp2 from "@/assets/project-2.jpg";
import gp5 from "@/assets/project-5.jpg";
import gx3 from "@/assets/gallery-3.jpg";

const pdfOutline = "/downloads/caso-estudio-outline.txt";

const cases = [
  {
    slug: "tunturi",
    title: "Tres lodges en Laponia · operación turística sin parón",
    intro:
      "El cliente necesitaba tres volúmenes equivalentes montados dentro de ventana meteorológica estrecha, sin prolongar temporada de reserva en lodges antiguos de bloque que ya mostraban pérdidas energéticas.",
    context:
      "Acceso combinado ferry y carretera, suelo sensible al deshielo y nueva normativa de cortafuegos del municipio. El calendario de ocupación marcaba fecha tope antes del siguiente ciclo turístico invernal.",
    solution:
      "Cerramiento SIP producido en taller UE, etiquetaje BIM por capas y montaje con equipo nordautorizado registrando QA deuniones antes de llegar obra con nieve superficial.",
    outcomes: [
      "Estanqueidad alcanzada en 62 días de calendario desde inicio obra seca en sitio",
      "−38 % residuos in situ fotografiados frente al lodge de bloque de la temporada previa mismo operador (comparativo interno)",
      "Proyección calefactable año 15 con simulador interno: ~22 % frente modelo bloque documentado dossier proyecto",
    ],
    metrics: [
      { k: "Superficie útil combinada", v: "438 m²" },
      { k: "Ciclo diseño · llaves prueba ocupación parcial", v: "9 meses" },
      { k: "Inversión", v: "NDA hasta publicación dossier público oficial" },
    ],
    before: g1,
    after: gx3,
    roiHint: "ROI energético modelo simulador interno año 15; no garantía universal.",
  },
  {
    slug: "oulu",
    title: "Reforma cerramiento · vivienda unifamiliar costa norte",
    intro:
      "Propietarios con vivienda de fábrica envejecida y humedades capilares repetidas en cara norte; buscaban mantener uso parcial durante obras porque la hija cursaba estudios en la ciudad.",
    context:
      "Inviernos largos, viento cargado salitre y objetivo blower door marcado por el promotor financiero ciudadano proyecto.",
    solution:
      "Reposición de línea SIP exterior preservando distribución interior; carpinterías integradas nueva serie acústico-térmica contrato proyecto.",
    outcomes: ["Bajo umbral blower door pactado proyecto reglamento local", "Ocupación parcial planta segunda mitad proceso obra seca"],
    metrics: [
      { k: "Superficie envolvente sustituida", v: "186 m²" },
      { k: "Cerramiento obra seca", v: "11 semanas efectivas obra" },
      { k: "Inversión", v: "NDA hasta dossier público" },
    ],
    before: gp2,
    after: gp5,
    roiHint:
      "−18 % en primera factura de gas tras entrega versus el mismo contador el invierno anterior (caso punto; sin extrapolar).",
  },
  {
    slug: "helsinki",
    title: "Bifamiliar Helsinki · BIM ejecutivo para promotora",
    intro:
      "Constructora habitual de bloque cara vista que debía responder a dossier ESG inversionista mediante envolvente industrializada marca NordiK en solar compartido con obra húmeda vecina retardada tiempo.",
    context:
      "Retrasos de la albañilería vecina en el mismo solar condicionaban la agenda del promotor y la percepción de calidad ante el fondo inversionista.",
    solution:
      "Kit ampliado con doce semanas de soporte ejecutivo: visitas virtuales taller, registros foto QA por dron y revisión BIM semanal hasta puesta estanca.",
    outcomes: [
      "Sellado térmico acorde al nivel energético fijado en contrato proyecto",
      "Addenda lucernarios integrada como segundo hito de precio antes de la fachada cara ventana época lluvias",
    ],
    metrics: [
      { k: "Unidades", v: "2 viviendas adosadas" },
      { k: "Soporte ejecutivo documentado", v: "12 semanas" },
      { k: "Desperdicio corte obra sitio vs bloque paralelo", v: "−41 %" },
    ],
    before: g4,
    after: gx3,
    roiHint: "Informe inversionista interno PDF ESG mismo ciclo dossier proyecto (no público hasta release legal).",
  },
];

const CaseStudies = () => (
  <div className="min-h-screen bg-background pb-24 pt-28 md:pb-28">
    <div className="mx-auto max-w-7xl px-6">
      <header className="mb-14 max-w-3xl">
        <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">Casos destacados</h1>
        <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
          Tres historias ejemplo con antes/después ilustrativo, métricas resumidas y enlace al modelo del catálogo. Las cifras
          económicas quedan bajo NDA hasta publicar el dossier comercial oficial.
        </p>
        <div className="mt-6 flex flex-wrap gap-4">
          <Link
            to="/testimonios"
            className="inline-flex items-center gap-2 text-sm font-semibold text-accent hover:underline"
          >
            Leer testimonios <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
          <a
            href={pdfOutline}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-muted/50 px-4 py-2 text-sm font-semibold hover:bg-muted"
          >
            <Download className="h-4 w-4" aria-hidden />
            Descargar esquema informe caso (.txt)
          </a>
        </div>
      </header>

      <ol className="space-y-24">
        {cases.map((c, idx) => (
          <motion.li
            key={c.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            className="border-b border-border pb-24 last:border-0"
          >
            <span className="text-xs font-bold uppercase tracking-widest text-muted-foreground">
              Estudio de caso · {idx + 1}/{cases.length}
            </span>
            <h2 className="mt-2 text-2xl font-bold text-foreground md:text-3xl">{c.title}</h2>

            <div className="mt-8 grid gap-8 lg:grid-cols-2">
              <figure className="space-y-2">
                <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
                  <img src={c.before} alt="Estado inicial referencia proyecto" className="h-full w-full object-cover" />
                </div>
                <figcaption className="text-xs uppercase tracking-wide text-muted-foreground">Antes · referencia</figcaption>
              </figure>
              <figure className="space-y-2">
                <div className="aspect-[4/3] overflow-hidden rounded-xl border border-border">
                  <img src={c.after} alt="Resultado referencia proyecto" className="h-full w-full object-cover" />
                </div>
                <figcaption className="text-xs uppercase tracking-wide text-muted-foreground">Después · referencia</figcaption>
              </figure>
            </div>

            <div className="mt-10 grid gap-8 md:grid-cols-2">
              <div>
                <h3 className="font-semibold text-foreground">Contexto</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.context}</p>
                <p className="mt-6 text-sm leading-relaxed text-muted-foreground">{c.intro}</p>
              </div>
              <div>
                <h3 className="font-semibold text-foreground">Solución NordiK</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{c.solution}</p>
                <ul className="mt-4 list-disc space-y-2 ps-5 text-sm text-muted-foreground">
                  {c.outcomes.map((o) => (
                    <li key={o}>{o}</li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-muted/35 p-6">
              <div className="flex flex-wrap items-center gap-2 text-sm font-semibold text-foreground">
                <Timer className="h-4 w-4 text-accent" aria-hidden /> Métricas resumidas
              </div>
              <dl className="mt-4 grid gap-4 sm:grid-cols-3">
                {c.metrics.map((m) => (
                  <div key={m.k}>
                    <dt className="text-xs uppercase tracking-wide text-muted-foreground">{m.k}</dt>
                    <dd className="mt-1 font-medium text-foreground">{m.v}</dd>
                  </div>
                ))}
              </dl>
              <p className="mt-4 flex flex-wrap items-center gap-2 text-sm text-muted-foreground">
                <Building2 className="h-4 w-4 shrink-0" aria-hidden />
                {c.roiHint}
              </p>
            </div>

            <p className="mt-8">
              <Link to={`/proyecto/${c.slug}`} className="text-sm font-semibold text-accent hover:underline">
                Abrir proyecto relacionado ({c.slug}) →
              </Link>
            </p>
          </motion.li>
        ))}
      </ol>
    </div>
  </div>
);

export default CaseStudies;
