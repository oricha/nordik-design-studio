/**
 * Esquema de pagos por hitos reutilizable (F1.2.9).
 * Fallback estándar si el slug no tiene override.
 */

export type PaymentMilestone = {
  /** Porcentaje del precio acordado orientativo hasta firma; sumas habituales 100 % */
  percent: number;
  /** Etapa contractual / técnica asociada al cobro */
  phase: string;
  summary: string;
};

export type PaymentScheme = {
  title: string;
  milestones: PaymentMilestone[];
  footnote?: string;
};

/** Plantilla habitual para obra residencial / SIP */
export const defaultResidentialScheme: PaymentScheme = {
  title: "Ejemplo estándar de pagos por hitos",
  footnote:
    "Los porcentajes se formalizan en el contrato. Este desglose es orientativo para planificar flujo de caja antes de cotización oficial.",
  milestones: [
    {
      percent: 20,
      phase: "Reserva y proyecto técnico",
      summary: "Bloque calendario y revisión proyecto base ante pedido taller.",
    },
    {
      percent: 30,
      phase: "Pedido industrial y taller",
      summary: "Lanzamiento de paneles SIP y cargas industriales tras firma obra.",
    },
    {
      percent: 35,
      phase: "Pre-entrega / volumen cerrado",
      summary: "Envolvente impermeable y pre-instalaciones previas antes de segundo tramo obra.",
    },
    {
      percent: 15,
      phase: "Entrega provisional y acta técnico",
      summary: "Conformidad para próximos acabados o llave provisional según contrato.",
    },
  ],
};

const bySlug: Record<string, Omit<PaymentScheme, "milestones"> & { milestones: PaymentMilestone[] }> = {
  torku: {
    title: "Pagos orientativos modelo cabaña compacta",
    footnote:
      "Modelo menor superficie suele tener hitos rápidos; la firma ajustará calendarios reales campo.",
    milestones: [
      { percent: 25, phase: "Anticipo reserva modelo", summary: "Reserva modelo Torku y pack SIP inicial." },
      { percent: 35, phase: "Montaje y envío obra", summary: "Carga compacta y equipo montaje programa corto." },
      { percent: 25, phase: "Cerramiento volumen pequeño", summary: "Test estanqueidad y soporte acabados ligeros." },
      { percent: 15, phase: "Cierre", summary: "Actas garantía envolvente según alcance firmado." },
    ],
  },
  tampere: {
    title: "Esquema suministro kit SIP (solo material)",
    footnote:
      "Orientado B2B: sin montaje NordiK. Condiciones financieras comerciales se reflejan en oferta SIP.",
    milestones: [
      { percent: 40, phase: "Compromiso de fabricación", summary: "Pago lanzamiento taller y slots CNC definidos." },
      { percent: 40, phase: "Listo despacho fábrica", summary: "Control QA final antes cargar pallets / cliente." },
      { percent: 20, phase: "Conformidad en recepción", summary: "Verificación contra albarán entrega proyecto destino." },
    ],
  },
};

export const getPaymentScheme = (slug: string): PaymentScheme =>
  bySlug[slug] ?? defaultResidentialScheme;
