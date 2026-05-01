import { TreePine, Coins, Zap, Clock, Award, Shield, type LucideIcon } from "lucide-react";
import p1 from "@/assets/project-1.jpg";
import p2 from "@/assets/project-2.jpg";
import p3 from "@/assets/project-3.jpg";
import p4 from "@/assets/project-4.jpg";
import p5 from "@/assets/project-5.jpg";
import p6 from "@/assets/project-6.jpg";

/** F2.2.6: seis valores con micro-testimonio e imagen ilustrativa */
export interface WhyValueWithProof {
  icon: LucideIcon;
  title: string;
  desc: string;
  quote: string;
  cite: string;
  avatar: string;
}

export const whyValuesWithProof: WhyValueWithProof[] = [
  {
    icon: TreePine,
    title: "Madera natural certificada",
    desc: "Cadena declarada cuando el proyecto exige trazabilidad PEFC o FSC en el contrato BIM.",
    quote: "\"Por fin el expediente bosque–taller era legible; con el bloque cara vista nunca figuró el origen.\"",
    cite: "Álvaro T. · cabaña costa norte",
    avatar: p3,
  },
  {
    icon: Coins,
    title: "Precio razonable",
    desc: "Menos meses de obra húmeda suelen traducirse en menos alquiler temporal y menos imprevistos en sitio.",
    quote: "\"Llegamos al estanco dos meses antes que el bloque del mismo barrio y con la misma oleada de lluvias.\"",
    cite: "Carolina M. · promotora Madrid",
    avatar: p1,
  },
  {
    icon: Zap,
    title: "Eficiencia energética",
    desc: "Envolvente continua con menos puentes térmicos típicos de encuentros albañilería en frío.",
    quote: "\"El consumo de calefacción no es ni comparable con el piso de piedra que visitamos como referencia.\"",
    cite: "Helena R. · zona Oulu",
    avatar: p2,
  },
  {
    icon: Clock,
    title: "Construcción rápida",
    desc: "Hitos de taller y montaje coordinados para acotar la ventana crítica de obra en clima adverso.",
    quote: "\"Negociamos fechas de estanqueidad por escrito; el banco y el alquiler temporal lo agradecieron.\"",
    cite: "Sara & Thomas · Levi",
    avatar: p4,
  },
  {
    icon: Award,
    title: "Experiencia profesional",
    desc: "Soporte técnico y QA documentado: visitas obra, blower door cuando contrato lo incluye, bitácora fotográfica.",
    quote: "\"La visita taller remota con drones nos convenció a capataces acostumbrados solo a paleta tradicional.\"",
    cite: "Martti L. · lodges Laponia",
    avatar: p5,
  },
  {
    icon: Shield,
    title: "Garantía declarada",
    desc: "Estructura, materiales e instalaciones básicas con plazos publicados — ver sección garantía en Sobre Nosotros.",
    quote: "\"Saber quién abre parte interno y en cuántos días llega el técnico nos dio paz igual que seguro obra.\"",
    cite: "João F. · casa piloto forestal Portugal",
    avatar: p6,
  },
];
