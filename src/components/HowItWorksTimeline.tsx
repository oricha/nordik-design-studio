import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const steps = [
  { number: "01", title: "Elección del proyecto" },
  { number: "02", title: "Consulta y visita de producción" },
  { number: "03", title: "Contrato y primer pago" },
  { number: "04", title: "Tramitación ante la administración" },
  { number: "05", title: "Inicio de obra de la vivienda" },
  { number: "06", title: "Elección de materiales de acabado" },
  { number: "07", title: "Cimentación en parcela" },
  { number: "08", title: "Transporte y montaje" },
  { number: "09", title: "Conexión de suministros" },
];

const previewSteps = steps.slice(0, 8);

const HowItWorksTimeline = () => {
  return (
    <section className="section-padding-home bg-warm-gray overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-col gap-4 md:flex-row md:items-end md:justify-between"
        >
          <div>
            <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-accent">
              El proceso
            </p>
            <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
              Cómo funciona
            </h2>
            <p className="mt-3 max-w-xl text-base leading-relaxed text-muted-foreground">
              Desde elegir modelo hasta instalación — un adelanto de los hitos clave antes de conectar los servicios en tu parcela.
            </p>
          </div>
          <Link
            to="/how-it-works"
            className="inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            Ver proceso completo <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>

        {/* Timeline — horizontal scrollable */}
        <div className="relative">
          {/* Connecting line behind steps */}
          <div
            className="absolute top-[2.125rem] left-0 right-0 hidden h-px bg-border md:block"
            aria-hidden
          />

          <motion.ol
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex gap-0 overflow-x-auto pb-6 md:pb-0
                       scrollbar-none [-ms-overflow-style:none] [scrollbar-width:none]
                       [&::-webkit-scrollbar]:hidden"
          >
            {previewSteps.map((step, i) => (
              <motion.li
                key={step.number}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.06 }}
                className="flex-shrink-0"
                style={{ width: `${100 / previewSteps.length}%`, minWidth: "9rem" }}
              >
                <Link
                  to={`/how-it-works#step-${step.number}`}
                  className="group flex flex-col items-center px-3 text-center"
                >
                  {/* Step dot */}
                  <div
                    className="relative z-10 mb-4 flex h-[4.25rem] w-[4.25rem] shrink-0 items-center
                               justify-center rounded-full border-2 border-border bg-background
                               transition-all duration-200
                               group-hover:border-accent group-hover:bg-accent group-hover:shadow-lg"
                  >
                    <span
                      className="text-lg font-bold tabular-nums text-foreground/60
                                 transition-colors group-hover:text-white"
                    >
                      {step.number}
                    </span>
                  </div>

                  {/* Step title */}
                  <p
                    className="text-sm font-medium leading-snug text-foreground/70
                               transition-colors group-hover:text-accent"
                  >
                    {step.title}
                  </p>
                </Link>
              </motion.li>
            ))}
            <motion.li
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: previewSteps.length * 0.06 }}
              className="flex-shrink-0"
              style={{ width: `${100 / previewSteps.length}%`, minWidth: "9rem" }}
            >
              <Link
                to="/how-it-works#step-09"
                className="group flex flex-col items-center px-3 text-center"
              >
                <div
                  className="relative z-10 mb-4 flex h-[4.25rem] w-[4.25rem] shrink-0 items-center
                             justify-center rounded-full border-2 border-dashed border-accent bg-background
                             transition-all duration-200 group-hover:bg-accent group-hover:shadow-lg"
                >
                  <ArrowRight
                    className="h-6 w-6 text-accent transition-colors group-hover:text-white"
                    aria-hidden
                  />
                </div>

                <p
                  className="text-sm font-medium leading-snug text-foreground/70
                             transition-colors group-hover:text-accent"
                >
                  Ver último paso
                </p>
              </Link>
            </motion.li>
          </motion.ol>
        </div>

        {/* Mobile hint */}
        <p className="mt-4 text-center text-xs text-muted-foreground md:hidden">
          Desliza para ver el resumen y abre después el proceso completo.
        </p>
      </div>
    </section>
  );
};

export default HowItWorksTimeline;
