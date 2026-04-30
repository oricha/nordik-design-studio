import { motion } from "framer-motion";
import { ShieldCheck, Download, ListOrdered } from "lucide-react";
import { warrantyClaimSteps, warrantyCoverageItems, warrantyPdfPath } from "@/data/warranty";

/** F2.5.1 */
export function WarrantySection() {
  return (
    <section id="garantia" className="section-padding bg-background scroll-mt-24">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 flex flex-wrap items-end justify-between gap-6"
        >
          <div className="max-w-3xl">
            <div className="mb-2 inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              <ShieldCheck className="h-4 w-4" aria-hidden />
              Nuestra garantía
            </div>
            <h2 className="text-3xl font-bold text-foreground md:text-4xl">Cobertura y postventa SIP</h2>
            <p className="mt-3 text-muted-foreground">
              Plazos y alcance pueden variar según contrato, país instalación y equipo ejecutor autorizado NordiK.
            </p>
          </div>
          <a
            href={warrantyPdfPath}
            download
            className="inline-flex shrink-0 items-center gap-2 rounded-xl border border-border bg-muted/50 px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-muted"
          >
            <Download className="h-4 w-4" aria-hidden />
            Descargar términos (borrador&nbsp;.txt)
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="grid gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <h3 className="mb-4 text-lg font-semibold text-foreground">Ámbitos y plazos</h3>
            <ul className="space-y-4">
              {warrantyCoverageItems.map((item) => (
                <li key={item.scope} className="rounded-xl border border-border bg-card p-5">
                  <div className="flex flex-wrap items-baseline gap-2">
                    <span className="rounded-md bg-accent/15 px-2 py-0.5 font-mono text-sm font-semibold text-accent">
                      {item.years}
                    </span>
                    <span className="font-semibold text-foreground">{item.scope}</span>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.detail}</p>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-5">
            <div className="rounded-2xl border border-border bg-muted/35 p-6">
              <h3 className="mb-3 flex items-center gap-2 text-lg font-semibold text-foreground">
                <ListOrdered className="h-5 w-5 text-accent" aria-hidden />
                Proceso de reclamación
              </h3>
              <ol className="list-decimal space-y-3 ps-5 text-sm text-muted-foreground">
                {warrantyClaimSteps.map((step, i) => (
                  <li key={i} className="leading-relaxed marker:font-semibold marker:text-accent">
                    {step}
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
