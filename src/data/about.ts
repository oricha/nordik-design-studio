import { LucideIcon, TreePine, Award, Zap, Shield, Clock, Home, Users, Star } from "lucide-react";

export interface Value {
  id: string;
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface Statistic {
  label: string;
  value: string;
  description: string;
  icon: LucideIcon;
  /** F2.2.4: indicador año anterior u otro snapshot */
  yoyCaption?: string;
}

export const statsReportingMeta = {
  quarterlyReviewLabel: "Próxima revisión KPI públicos · marzo 2026 (Q1)",
  dataSnapshotLabel: "Último cierre interno KPI · dic 2025",
} as const;

export const companyMission = {
  statement:
    "Construir viviendas sostenibles, modernas y de alta calidad que combinen la arquitectura escandinava tradicional con la tecnología contemporánea, ofreciendo una alternativa clara para familias y profesionales que buscan bienestar, eficiencia y respeto al entorno.",
  /** F2.1.5: visión en 2–3 párrafos */
  visionParagraphs: [
    "Imaginamos ciudades y entornos rurales donde cada hogar SIP consuma menos, construya rápido y envejezca mejor: menores emisiones en obra, mejor confort en uso y ciclo de vida medible desde el proyecto.",
    "Queremos ser el socio de referencia para quienes priorizan viviendas nórdicas en Europa: desde el kit técnico B2B hasta la llave en mano para particulares, con el mismo estándar de transparencia y soporte tras la entrega.",
    "Este camino nos exige mejorar cada año en certificación ambiental, trazabilidad de la madera y garantía real de servicio — no sólo eslóganes, sino procesos auditables.",
  ],
};

export const values: Value[] = [
  {
    id: "sustainability",
    icon: TreePine,
    title: "Sostenibilidad",
    description: "Utilizamos madera escandinava de origen sostenible y técnicas constructivas que minimizan el impacto ambiental.",
  },
  {
    id: "quality",
    icon: Award,
    title: "Calidad",
    description: "Garantía de 10 años estructural y acabados impecables en cada proyecto que entregamos.",
  },
  {
    id: "innovation",
    icon: Zap,
    title: "Innovación",
    description: "Integramos tecnología moderna en diseño eficiente y sistemas de construcción avanzados.",
  },
  {
    id: "trust",
    icon: Shield,
    title: "Confianza",
    description: "Transparencia total en procesos, precios y comunicación con nuestros clientes desde el inicio.",
  },
];

export const statistics: Statistic[] = [
  {
    label: "Años activos con SIP marca",
    value: "5+",
    description: "Desde el piloto en 2021: diseño, taller y soporte en obra bajo misma marca ejecutiva.",
    icon: Clock,
    yoyCaption: "Dos nodos logísticos añadidos en 2025",
  },
  {
    label: "Obras cerradas",
    value: "240+",
    description: "Viviendas finales, lodges y paquetes técnicos con acta proyecto marca.",
    icon: Home,
    yoyCaption: "+22 % frente ciclo año natural 2024",
  },
  {
    label: "Clientes proyecto seguidos CRM",
    value: "580+",
    description: "Familias, promotoras y ejecutores con expediente en CRM comercial NordiK.",
    icon: Users,
    yoyCaption: "+105 registros proyecto ciclo 2025 vs ciclo 2024",
  },
  {
    label: "Recomendarían NordiK (NPS encuesta QA)",
    value: "94 %",
    description: "Muestra ocho meses proyectos cerrados con entrevista QA post obra.",
    icon: Star,
    yoyCaption: "+4 puntos vs mismo periodo ciclo año previo",
  },
];
