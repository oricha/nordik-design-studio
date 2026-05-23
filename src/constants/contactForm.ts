/** Prefill proyecto en formulario desde catálogo (F3.4.3). Query en home + hash #contact. */
export const CONTACT_PROJECT_PREFILL_QUERY = "cotizar";

/** Intención desde enlaces tipo `/contactos?service=…` (servicios, CTAs segmentados). */
export const CONTACT_SERVICE_PREFILL_QUERY = "service";

export type ContactServiceIntentMeta = {
  label: string;
  /** Opciones extra en «Tipo de Proyecto» si el usuario llega desde un CTA de servicio. */
  addProjectTypes?: readonly string[];
};

/** Claves establecidas en CTAs públicos (`Services.tsx`, etc.). */
export const CONTACT_SERVICE_INTENT_META: Record<string, ContactServiceIntentMeta> = {
  "ampliacion-cocina": { label: "Ampliación de cocinas", addProjectTypes: ["Renovación"] },
  "ampliacion-trasera": {
    label: "Ampliación trasera de vivienda",
    addProjectTypes: ["Renovación"],
  },
  "ampliacion-terraza": { label: "Ampliación de terrazas", addProjectTypes: ["Renovación"] },
  ampliaciones: { label: "Ampliación de vivienda", addProjectTypes: ["Renovación"] },
  "terrazas-aticos": {
    label: "Construcción en terrazas o áticos",
    addProjectTypes: ["Renovación"],
  },
  "campings-cabanas": { label: "Campings y cabañas", addProjectTypes: ["Cabaña"] },
};
