/** F2.5.3 — Valores marcados como estimaciones para comunicación transparente */

export interface ComparisonRow {
  metric: string;
  sipPanels: string;
  traditionalBuild: string;
  note?: string;
}

export const traditionalVsSipFootnote =
  "Las cifras de tiempo, costo y desperdicio son rangos típicos de proyectos tipo vivienda unifamiliar en clima templado-celeste europeo — no sustituyen un presupuesto formal.";

export const traditionalVsSipRows: ComparisonRow[] = [
  {
    metric: "Tiempo de cerramiento hasta estanco",
    sipPanels: "3–8 semanas (envolvente prefabricada + montaje SIP)",
    traditionalBuild: "10–22 semanas (obra húmeda + curados)",
    note: "Sujeto a tamaño equipo y tiempo permitido obra.",
  },
  {
    metric: "Costo total orientativo obra cerrada comparable",
    sipPanels: "−5 % a +12 % sobre presupuesto ladrillo igual acabados *",
    traditionalBuild: "Referencia habitual mercado igual catálogo de acabados",
    note: "* En obres largas el ahorro en plazo puede compensar el coste de transporte desde taller.",
  },
  {
    metric: "Eficiencia energética (envolvente)",
    sipPanels: "U típico menor (menos discontinuidades térmicas, control en taller)",
    traditionalBuild: "Variable según equipo de obra y detallado en sitio",
  },
  {
    metric: "Desperdicio en obra",
    sipPanels: "Bajo (~5–12 % recorte panel optimizado BIM)",
    traditionalBuild: "Medio‑alto (hormigón fresco, retrabajo, recortes in situ)",
  },
  {
    metric: "Garantías contractuales estructuras",
    sipPanels: "10 años SIP documentado NordiK (ver garantía oficial)",
    traditionalBuild: "Según empresa local y seguro decenal habitual",
  },
];
