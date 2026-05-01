/** F2.2.2 — Agregados orientativos (sustituir por API Google/Trustpilot en integración futura). */

export const reviewAggregate = {
  /** Media mostrada en UI */
  average: 4.8,
  scale: 5,
  totalRespondents: 186,
  sourceLabel: "Encuestas post-obra + llamadas QA trimestral (interno NordiK)",
  /** Visible “última actualización” */
  lastSyncedLabel: "Datos revisados por comercial · 29 ene 2026",
};

/** Barras proporcionales (no tienen por quite sumar 100 por redondeos) */
export const starDistributionPct: { stars: 1 | 2 | 3 | 4 | 5; pct: number }[] = [
  { stars: 5, pct: 68 },
  { stars: 4, pct: 22 },
  { stars: 3, pct: 6 },
  { stars: 2, pct: 3 },
  { stars: 1, pct: 1 },
];
