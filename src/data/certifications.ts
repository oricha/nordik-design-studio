import type { LucideIcon } from "lucide-react";
import { Award, Leaf, Zap, TreePine, Building2 } from "lucide-react";

export type CertificationGroup = "corporateQuality" | "environmentalForestEnergy";

/** F2.5.2 — Narrativa corta huella y trazabilidad (estimaciones, no garantía de proyecto) */
export const environmentalImpactBlurb = {
  title: "Certificaciones ambientales y huella de obra",
  lead:
    "NordiK prioriza bosques gestionados, declaraciones ambientales de producto y sellos reconocibles en la UE.",
  bullets: [
    "Madera estructural y derivados pueden acogerse a cadena PEFC® y FSC® según proyecto y país de suministro — detallamos trazabilidad en el dossier BIM.",
            "Comparativa orientativa SIP NordiK vs. obra seca cara vista muy variable: estudios internos sugieren menor desperdicio in situ cuando el volumen de obra húmeda se reduce fuertemente; el ahorro de CO₂ depende del mix energético, transporte y acabados finales.",
  ],
} as const;

export interface Certification {
  id: string;
  name: string;
  category: string;
  yearObtained: number;
  description: string;
  certificateUrl: string;
  icon: LucideIcon;
  group: CertificationGroup;
}

export const certifications: Certification[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    category: "Gestión de calidad",
    yearObtained: 2015,
    description: "Sistema de gestión aplicado al diseño, fabricación y soporte obra.",
    certificateUrl: "https://www.iso.org/iso-9001-quality-management.html",
    icon: Award,
    group: "corporateQuality",
  },
  {
    id: "iso-14001",
    name: "ISO 14001:2015",
    category: "Gestión ambiental",
    yearObtained: 2018,
    description: "Marco EMS para mejorar ciclo vida producto‑obra Nordic SIP.",
    certificateUrl: "https://www.iso.org/iso-14001-environmental-management.html",
    icon: Leaf,
    group: "environmentalForestEnergy",
  },
  {
    id: "pefc",
    name: "PEFC® Cadena Custodia",
    category: "Bosques sostenibles UE",
    yearObtained: 2017,
    description: "Trazabilidad madera y derivados donde la cadena de custodia aplique.",
    certificateUrl: "https://www.pefc.org/",
    icon: Leaf,
    group: "environmentalForestEnergy",
  },
  {
    id: "fsc",
    name: "FSC® (cuando proyecto lo requiera)",
    category: "Cadena bosque responsable",
    yearObtained: 2023,
    description: "Oferta proyectos con etiquetado certificado donde la cadena de suministro esté homologada.",
    certificateUrl: "https://fsc.org/",
    icon: TreePine,
    group: "environmentalForestEnergy",
  },
  {
    id: "energieeffizienz",
    name: "Eficiencia energética clase A (referencial)",
    category: "Rendimiento envolvente",
    yearObtained: 2019,
    description: "Modelos casa NordiK apuntados a alto rendimiento cuando el proyecto integre HAVC declarado.",
    certificateUrl: "https://commission.europa.eu/energy/topics/energy-efficiency-energy-saving/energy-label_en",
    icon: Zap,
    group: "environmentalForestEnergy",
  },
  {
    id: "epd",
    name: "EPD declaración ambiental",
    category: "Transparencia LCA panel",
    yearObtained: 2020,
    description: "Datos de producto verificados para ingenierías y LEED/BREEAM orientativos.",
    certificateUrl: "https://www.environdec.com/",
    icon: TreePine,
    group: "environmentalForestEnergy",
  },
  {
    id: "construccion-sostenible",
    name: "Criterios construcción sostenible UE",
    category: "Edificación nivel casi‑cero‑energético-ready",
    yearObtained: 2021,
    description: "Adecuaciones a guías nivel EU/códigos técnicos renovables proyectos grandes.",
    certificateUrl: "https://climate.ec.europa.eu/eu-action/eu-buildings-initiative_energy",
    icon: Building2,
    group: "environmentalForestEnergy",
  },
];

export function certificationsByGroup(g: CertificationGroup): Certification[] {
  return certifications.filter((c) => c.group === g);
}
