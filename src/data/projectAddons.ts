/**
 * Opcionales aditivos (F1.2.10). `addonPriceEUR` permite evolucionar a pricing dinámico sumando deltas.
 */

export type ProjectAddon = {
  id: string;
  name: string;
  description: string;
  /** Incremento lista orientativo sobre precio proyecto publicado */
  addonPriceEUR: number;
};

const defaultAddons: ProjectAddon[] = [
  {
    id: "floor-heating",
    name: "Suelo radiante eléctrico (zona húmeda)",
    description: "Canalización y termostatos programables entrada de gama en baños modelo.",
    addonPriceEUR: 4200,
  },
  {
    id: "pv-ready",
    name: "Vivienda preparada instalación fotovoltaica",
    description: "Reserva conduit y cuadro AC etiquetados; sin módulos ni inversores.",
    addonPriceEUR: 1800,
  },
  {
    id: "triple-glazing",
    name: "Triple acristalamiento sala principal",
    description: "Mejor Uw/acústica en estancia definida donde el proyecto lo admite técnico.",
    addonPriceEUR: 5900,
  },
  {
    id: "garage-sip",
    name: "Módulo garaje volumétrico SIP",
    description: "Anexo hasta 21 m² mismo acabado fachada que casa (batch taller compartido).",
    addonPriceEUR: 12400,
  },
];

/** Slugs con misma lista ampliada o reducida en el futuro */
const overrides: Partial<Record<string, ProjectAddon[]>> = {
  torku: [
    ...defaultAddons,
    {
      id: "loft-ladder",
      name: "Kit escalón altillo reforzado",
      description: "Acceso mezzanine cabaña temporada con traba seguridad térmica cerrada.",
      addonPriceEUR: 850,
    },
  ],
};

export const getProjectAddons = (slug: string): ProjectAddon[] =>
  overrides[slug] ?? defaultAddons;

export const addonsTotalEUR = (
  addonsCatalog: ProjectAddon[],
  selectedIds: ReadonlySet<string>
): number =>
  addonsCatalog
    .filter((a) => selectedIds.has(a.id))
    .reduce((acc, item) => acc + item.addonPriceEUR, 0);
