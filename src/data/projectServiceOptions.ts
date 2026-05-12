export type ServiceOption = {
  name: string;
  description: string;
  priceMultiplier: number;
  popular?: boolean;
  included: string[];
  excluded: string[];
};

export type ServiceOptions = {
  basePrice: number;
  options: ServiceOption[];
};

const baseServiceOptions = [
  {
    name: "Solo Paneles SIP",
    description: "Componentes prefabricados de alta calidad listos para montar. Perfecto si tienes equipo de construcción propio.",
    priceMultiplier: 1,
    included: [
      "Paneles SIP completos y cortados a medida",
      "Planos de montaje detallados",
      "Consultoría técnica inicial",
      "Control de calidad en fábrica",
      "Empaque y transporte",
    ],
    excluded: [
      "Servicios de instalación/montaje",
      "Acabados interiores",
      "Sistemas mecánicos/eléctricos",
      "Asistencia en obra",
      "Garantía de instalación",
    ],
  },
  {
    name: "Semi-Llave en Mano",
    description: "Incluye estructura, materiales principales e instalación. Tú gestionas acabados y sistemas. Opción recomendada.",
    priceMultiplier: 1.5,
    popular: true,
    included: [
      "Paneles SIP completos",
      "Estructuras e instalación",
      "Cimentación y preparación",
      "Sistemas básicos (fontanería, electricidad base)",
      "Acabados de piso y techo",
      "Pintura y puertas",
      "Supervisión de obra",
      "Garantía 5 años estructura",
    ],
    excluded: [
      "Sistemas inteligentes/domótica",
      "Acabados premium personalizados",
      "Sistemas solares o geotérmicos",
      "Mobiliario integrado",
      "Servicios post-entrega avanzados",
    ],
  },
  {
    name: "Reforma Completa",
    description: "Servicio integral llave en mano. Diseño, construcción, acabados premium y sistemas. Nosotros nos encargamos de todo.",
    priceMultiplier: 2.2,
    included: [
      "Diseño arquitectónico personalizado",
      "Paneles SIP personalizados",
      "Construcción completa en sitio",
      "Cimentación y preparación profesional",
      "Sistemas inteligentes y domótica",
      "Acabados premium (pisos, paredes, techo)",
      "Sistemas eléctricos y de climatización",
      "Instalaciones sanitarias completas",
      "Pintura de diseñador y detalles",
      "Proyecto listo para habitar",
      "Garantía 10 años estructura",
      "Asistencia técnica 2 años post-entrega",
    ],
    excluded: [
      "Mobiliario (opcional)",
      "Servicios de mudanza",
      "Decoración interior",
    ],
  },
] satisfies ServiceOption[];

const defaultServiceOptions: ServiceOptions = {
  basePrice: 0,
  options: [
    ...baseServiceOptions,
  ],
};

type ProjectServiceOptionsMap = {
  [slug: string]: ServiceOptions;
};

const projectServiceOptionsMap: ProjectServiceOptionsMap = {
  tunturi: {
    basePrice: 185000,
    options: defaultServiceOptions.options,
  },
  sodankyla: {
    basePrice: 245000,
    options: defaultServiceOptions.options,
  },
  torku: {
    basePrice: 32400,
    options: defaultServiceOptions.options,
  },
  levi: {
    basePrice: 145000,
    options: defaultServiceOptions.options,
  },
  kuusamo: {
    basePrice: 95000,
    options: defaultServiceOptions.options,
  },
  oulu: {
    basePrice: 125000,
    options: defaultServiceOptions.options,
  },
  tampere: {
    basePrice: 35000,
    options: defaultServiceOptions.options,
  },
  helsinki: {
    basePrice: 175000,
    options: defaultServiceOptions.options,
  },
};

export const getServiceOptions = (slug: string): ServiceOptions | undefined => {
  return projectServiceOptionsMap[slug];
};

export const buildDefaultServiceOptions = (basePrice: number): ServiceOptions => ({
  basePrice,
  options: [...baseServiceOptions],
});

export const calculateServicePrice = (basePrice: number, multiplier: number): number => {
  return Math.round(basePrice * multiplier);
};
