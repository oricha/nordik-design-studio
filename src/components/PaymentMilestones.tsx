import { motion } from "framer-motion";
import type { PaymentScheme } from "@/data/projectPaymentSchemes";

type PaymentMilestonesProps = {
  scheme: PaymentScheme;
  /** Texto opcional enlazando con modal de cotización */
  projectName?: string;
  /** Abre cotización incluyendo resumen texto del usuario */
  onRequestQuote?: (prefillMessage: string) => void;
};

const PaymentMilestones = ({ scheme, projectName = "", onRequestQuote }: PaymentMilestonesProps) => {
  const cumulative = (): number[] => {
    let acc = 0;
    return scheme.milestones.map((m) => {
      acc += m.percent;
      return acc;
    });
  };
  const totals = cumulative();

  const composePrefill = () => {
    const header = `[Esquema de pagos solicitado]\n${scheme.title}`;
    const body = scheme.milestones
      .map((m, i) => `- ${totals[i]}% acumulado · ${m.phase}: ${m.summary} (${m.percent}%)`)
      .join("\n");
    const foot = scheme.footnote ? `\n\n${scheme.footnote}` : "";
    const tail = `\n\nProyecto referencia: ${projectName}`;
    return header + "\n\n" + body + foot + tail;
  };

  const handleQuote = () => {
    if (!onRequestQuote) return;
    onRequestQuote(composePrefill());
  };

  return (
    <section
      aria-labelledby="payment-milestones-heading"
      className="section-padding bg-background"
    >
      <div className="mx-auto max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="rounded-2xl border border-border bg-warm-gray/70 p-6 shadow-[0_12px_40px_rgba(15,15,15,0.06)] md:p-8"
        >
          <div className="mb-6 flex flex-col gap-2 md:flex-row md:items-start md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                Transparencia comercial
              </p>
              <h2
                id="payment-milestones-heading"
                className="mt-1 text-2xl font-bold tracking-tight text-foreground md:text-3xl"
              >
                {scheme.title}
              </h2>
            </div>
            {projectName ? (
              <span className="inline-flex shrink-0 items-center rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                {projectName}
              </span>
            ) : null}
          </div>

          <ol className="relative space-y-0 border-l-2 border-accent/40 pl-6">
            {scheme.milestones.map((step, idx) => (
              <li key={`${step.phase}-${idx}`} className="pb-10 last:pb-0">
                <span
                  className="absolute -left-[11px] top-2 flex h-[18px] w-[18px] items-center justify-center rounded-full bg-accent text-[11px] font-bold text-accent-foreground"
                  aria-hidden
                >
                  {idx + 1}
                </span>
                <p className="text-sm font-semibold text-accent">{step.percent}%</p>
                <h3 className="font-semibold text-foreground">{step.phase}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{step.summary}</p>
                <p className="mt-2 inline-flex rounded-md bg-accent/15 px-2 py-1 text-[11px] font-medium uppercase tracking-wide text-accent-foreground/90">
                  Acumulado estimado hasta este hito: {totals[idx]}%
                </p>
              </li>
            ))}
          </ol>

          {scheme.footnote ? (
            <p className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
              {scheme.footnote}
            </p>
          ) : null}

          {onRequestQuote ? (
            <div className="mt-8 rounded-xl bg-background p-5">
              <p className="text-sm text-muted-foreground">
                Puedes enviar esta estructura a nuestro equipo comercial cuando solicites cotización.
              </p>
              <button
                type="button"
                onClick={handleQuote}
                className="mt-4 w-full rounded-lg border border-border bg-muted/50 px-4 py-2.5 text-sm font-semibold text-foreground transition-colors hover:bg-border sm:w-auto sm:min-w-[200px]"
              >
                Solicitar presupuesto con este esquema
              </button>
            </div>
          ) : null}
        </motion.div>
      </div>
    </section>
  );
};

export default PaymentMilestones;
