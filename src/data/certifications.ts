import { LucideIcon } from "lucide-react";
import { Award, Leaf, Zap, TreePine, Building2 } from "lucide-react";

export interface Certification {
  id: string;
  name: string;
  category: string;
  yearObtained: number;
  description: string;
  certificateUrl: string;
  icon: LucideIcon;
}

export const certifications: Certification[] = [
  {
    id: "iso-9001",
    name: "ISO 9001:2015",
    category: "Quality Management",
    yearObtained: 2015,
    description: "Sistema de gestión de calidad",
    certificateUrl: "https://www.iso.org/iso-9001-quality-management.html",
    icon: Award,
  },
  {
    id: "pefc",
    name: "PEFC Certificado",
    category: "Sustainable Forestry",
    yearObtained: 2017,
    description: "Certificación de forestería sostenible",
    certificateUrl: "https://www.pefc.org",
    icon: Leaf,
  },
  {
    id: "iso-14001",
    name: "ISO 14001:2015",
    category: "Environmental Management",
    yearObtained: 2018,
    description: "Sistema de gestión ambiental",
    certificateUrl: "https://www.iso.org/iso-14001-environmental-management.html",
    icon: Leaf,
  },
  {
    id: "energieeffizienz",
    name: "Energieeffizienz Clase A",
    category: "Energy Efficiency",
    yearObtained: 2019,
    description: "Certificación de eficiencia energética",
    certificateUrl: "https://ec.europa.eu/energy/en/euenergy-label",
    icon: Zap,
  },
  {
    id: "epd",
    name: "EPD - Declaración Ambiental",
    category: "Environmental Declaration",
    yearObtained: 2020,
    description: "Declaración ambiental de producto",
    certificateUrl: "https://www.environdec.com",
    icon: TreePine,
  },
  {
    id: "construccion-sostenible",
    name: "Construcción Sostenible",
    category: "Sustainable Building",
    yearObtained: 2021,
    description: "Certificación de construcción sostenible",
    certificateUrl: "https://www.greenbuildingcouncil.org",
    icon: Building2,
  },
];
