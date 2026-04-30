/** F2.1.6 Referencias destacadas — nombres ficticios hasta disponer de permisos/logo reales */

export interface FeaturedClient {
  id: string;
  name: string;
  /** Resumen muy breve sin afirmaciones verificadas sensibles */
  summary: string;
  initials: string;
  /** Ruta proyecto catálogo interno cuando aplique */
  projectSlug?: string;
  optionalUrl?: string;
}

export const featuredClients: FeaturedClient[] = [
  {
    id: "ref-aurora-coops",
    name: "Promotora Valle Interior",
    summary: "Bloques residencial mixto SIP + obra seca.",
    initials: "PV",
    projectSlug: "levi",
  },
  {
    id: "ref-lapland-lodge",
    name: "Lodge & Nature · Laponia",
    summary: "Chalets modulares de montaña climatología extrema.",
    initials: "LN",
    projectSlug: "tunturi",
  },
  {
    id: "ref-finlog",
    name: "Finlog Industrial",
    summary: "Cubiertas industriales cerramiento paneles SIP.",
    initials: "FI",
    projectSlug: "tampere",
  },
  {
    id: "ref-metropol",
    name: "Metrópol Norte",
    summary: "Reforma energética fachada sistema híbrido.",
    initials: "MN",
    projectSlug: "helsinki",
  },
  {
    id: "ref-altura",
    name: "Edificaciones Altura 14",
    summary: "Vivienda piloto clase A norte peninsular.",
    initials: "A1",
    projectSlug: "oulu",
  },
  {
    id: "ref-timberline",
    name: "Timberline España",
    summary: "Partners B2B suelo radiante + envolvente.",
    initials: "TE",
  },
  {
    id: "ref-norden",
    name: "Gestión Norden SL",
    summary: "Segunda residencia modelo cabaña compacta.",
    initials: "GN",
    projectSlug: "torku",
  },
  {
    id: "ref-kuusta",
    name: "Cooperativa Kuusta",
    summary: "Eco-barrio 12 unidades proceso industrializado.",
    initials: "CK",
    projectSlug: "kuusamo",
  },
];
