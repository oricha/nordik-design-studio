import { useCallback, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { addonsTotalEUR, getProjectAddons, type ProjectAddon } from "@/data/projectAddons";

type ProjectAddonsConfiguratorProps = {
  slug: string;
  /** Precio público proyecto (solo referencia en UI hasta pricing dinámico) */
  projectBaseEUR: number;
  projectLabel: string;
  onRequestQuote?: (prefillMessage: string) => void;
};

function buildQuoteMessage(selected: readonly ProjectAddon[], base: number, label: string): string {
  if (selected.length === 0)
    return `Sin opcionales marcados para ${label}. Precio proyecto listado desde €${base.toLocaleString()}.`;

  const addonSum = selected.reduce((acc, a) => acc + a.addonPriceEUR, 0);
  const lines = selected.map(
    (a) => `- ${a.name}: + €${a.addonPriceEUR.toLocaleString()} — ${a.description}`
  );
  const totalOrient = base + addonSum;
  return [
    "[Opcionales seleccionados en ficha — importes orientativos]",
    "",
    ...lines,
    "",
    `Suma opcionales: + €${addonSum.toLocaleString()}`,
    `Total orientativo (lista + opcionales): ~ €${totalOrient.toLocaleString()}`,
    "",
    "(Cifras no vinculantes hasta presupuesto firmado NordiK.)",
    "",
    `Proyecto referencia: ${label} — base lista €${base.toLocaleString()}`,
  ].join("\n");
}

const ProjectAddonsConfigurator = ({
  slug,
  projectBaseEUR,
  projectLabel,
  onRequestQuote,
}: ProjectAddonsConfiguratorProps) => {
  const catalog = useMemo(() => getProjectAddons(slug), [slug]);
  const [chosen, setChosen] = useState<Record<string, boolean>>({});

  const selectedList = useMemo(
    () => catalog.filter((a) => chosen[a.id]),
    [catalog, chosen]
  );

  const addonsSum = addonsTotalEUR(
    catalog,
    new Set(Object.keys(chosen).filter((id) => chosen[id]))
  );

  const toggle = useCallback((id: string) => {
    setChosen((prev) => ({ ...prev, [id]: !prev[id] }));
  }, []);

  const handleQuote = () => {
    if (!onRequestQuote) return;
    onRequestQuote(`${buildQuoteMessage(selectedList, projectBaseEUR, projectLabel)}`);
  };

  return (
    <section className="section-padding bg-background" aria-labelledby="addons-config-heading">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 id="addons-config-heading" className="text-3xl font-bold text-foreground">
            Opcionales del proyecto (antes del visualizador 3D completo)
          </h2>
          <p className="mt-3 max-w-2xl text-sm text-muted-foreground">
            Elige extras habituales. Los importes ayudan a orientar tu presupuesto; el equipo validará
            viabilidad técnica modelo y ubicación obra.
          </p>

          <div className="mt-10 grid gap-4 md:grid-cols-2">
            {catalog.map((addon) => {
              const checked = !!chosen[addon.id];
              return (
                <label
                  key={addon.id}
                  htmlFor={`addon-${addon.id}`}
                  className={`flex cursor-pointer flex-col rounded-2xl border-2 bg-warm-gray/40 p-5 transition-colors ${
                    checked ? "border-accent bg-accent/5" : "border-border hover:border-accent/35"
                  }`}
                >
                  <div className="flex gap-4">
                    <input
                      id={`addon-${addon.id}`}
                      type="checkbox"
                      checked={checked}
                      onChange={() => toggle(addon.id)}
                      className="mt-1 h-4 w-4 shrink-0 accent-accent rounded border-border"
                    />
                    <div className="min-w-0">
                      <span className="font-semibold text-foreground">{addon.name}</span>
                      <p className="mt-1 text-sm text-muted-foreground">{addon.description}</p>
                      <p className="mt-4 text-lg font-bold text-accent">
                        + €{addon.addonPriceEUR.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </label>
              );
            })}
          </div>

          <div className="mt-10 rounded-2xl border border-border bg-muted/30 px-6 py-5 md:flex md:items-center md:justify-between">
            <div>
              <p className="text-sm font-medium text-foreground">
                Lista modelo {projectLabel}
              </p>
              <p className="text-xs text-muted-foreground">
                Base publicada desde €{projectBaseEUR.toLocaleString()} · opcionales hoy €
                {addonsSum.toLocaleString()}
              </p>
              <p className="mt-2 text-sm font-semibold text-foreground">
                Total orientativo: ~ €{(projectBaseEUR + addonsSum).toLocaleString()}
              </p>
            </div>
            {onRequestQuote ? (
              <button
                type="button"
                onClick={handleQuote}
                className="mt-4 shrink-0 rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 md:mt-0"
              >
                Pedir cotización con esta selección
              </button>
            ) : null}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProjectAddonsConfigurator;
