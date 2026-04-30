import { LucideIcon, TreePine, Award, Zap, Shield, Clock, Home, Users, MapPin } from "lucide-react";

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
}

export const companyMission = {
  statement: "Construir viviendas sostenibles, modernas y de alta calidad que combinen la arquitectura escandinava tradicional con la tecnología contemporánea, ofreciendo a las familias españolas una alternativa única en el mercado de la construcción.",
  vision: "Ser el referente principal en construcción de casas escandinavas en España, reconocidos por nuestra excelencia, sostenibilidad y compromiso con la satisfacción del cliente.",
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
    label: "Años en el mercado",
    value: "5+",
    description: "Experiencia comprobada en construcción",
    icon: Clock,
  },
  {
    label: "Proyectos completados",
    value: "240+",
    description: "Casas modernas entregadas",
    icon: Home,
  },
  {
    label: "Clientes satisfechos",
    value: "100%",
    description: "Tasa de satisfacción del cliente",
    icon: Users,
  },
  {
    label: "Oficinas",
    value: "2",
    description: "Presencia en Madrid y Barcelona",
    icon: MapPin,
  },
];
