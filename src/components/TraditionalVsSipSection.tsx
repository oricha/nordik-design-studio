import { motion } from "framer-motion";
import { Layers } from "lucide-react";
import {
  traditionalVsSipFootnote,
  traditionalVsSipRows,
} from "@/data/traditionalVsSipComparison";

/** F2.5.3 */
export function TraditionalVsSipSection() {
  return (
    <section className="section-padding bg-muted/25">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 text-center"
        >
          <div className="mb-3 inline-flex justify-center">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-accent">
              <Layers className="h-4 w-4" aria-hidden />
              Comparativa
            </span>
          </div>
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Paneles SIP · frente a construcción tradicional</h2>
          <p className="mx-auto mt-3 max-w-2xl text-sm text-muted-foreground">{traditionalVsSipFootnote}</p>
        </motion.div>

        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <div className="overflow-x-auto rounded-2xl border border-border shadow-sm">
            <table className="w-full min-w-[560px] border-collapse text-sm">
              <caption className="sr-only">
                Comparación entre envolvente con paneles SIP y construcción tradicional habitual
              </caption>
              <thead>
                <tr className="bg-primary text-primary-foreground">
                  <th scope="col" className="border-b border-primary-foreground/20 px-4 py-4 text-left font-semibold">
                    Aspecto
                  </th>
                  <th scope="col" className="border-b border-primary-foreground/20 px-4 py-4 text-left font-semibold">
                    Env. SIP Nordic / industriada
                  </th>
                  <th scope="col" className="border-b border-primary-foreground/20 px-4 py-4 text-left font-semibold">
                    Albañilería / bloque habitual
                  </th>
                </tr>
              </thead>
              <tbody>
                {traditionalVsSipRows.map((row) => (
                  <tr key={row.metric} className="even:bg-muted/40">
                    <th scope="row" className="border-b border-border px-4 py-3 font-medium text-foreground">
                      {row.metric}
                    </th>
                    <td className="border-b border-border px-4 py-3 text-muted-foreground">{row.sipPanels}</td>
                    <td className="border-b border-border px-4 py-3 text-muted-foreground">
                      {row.traditionalBuild}
                      {row.note ? (
                        <span className="mt-2 block text-xs italic text-muted-foreground/90">{row.note}</span>
                      ) : null}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="mx-auto mt-4 max-w-3xl text-center text-xs leading-relaxed text-muted-foreground">
            Los valores publicados son comunicación técnico‑comercial; los presupuestos firmados pueden incorporar alcance y
            supuestos distintos.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
