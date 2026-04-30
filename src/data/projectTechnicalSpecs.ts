export type TechnicalSpecs = {
  sipPanel: {
    thickness: number;
    rValue: number;
  };
  quantity: {
    bedrooms: number;
    bathrooms: number;
    area: number;
  };
  finishes: {
    roof: string;
    floor: string;
    paint: string;
    doors: string;
  };
  customization: string[];
  certifications: string[];
};

type ProjectTechnicalSpecsMap = {
  [slug: string]: TechnicalSpecs;
};

const projectTechnicalSpecs: ProjectTechnicalSpecsMap = {
  tunturi: {
    sipPanel: {
      thickness: 20,
      rValue: 5.2,
    },
    quantity: {
      bedrooms: 4,
      bathrooms: 2,
      area: 145,
    },
    finishes: {
      roof: "Tejados de pizarra natural",
      floor: "Tarima de roble macizo",
      paint: "Pintura ecológica mate premium",
      doors: "Puertas de alerce lacadas",
    },
    customization: [
      "Ampliación de ventanas",
      "Suelos adicionales",
      "Integración domótica",
      "Sistemas de energía renovable",
    ],
    certifications: [
      "ISO 9001:2015",
      "PEFC Certificado",
      "Energieeffizienz Clase A",
      "Declaración Ambiental de Producto (EPD)",
    ],
  },
  sodankyla: {
    sipPanel: {
      thickness: 22,
      rValue: 5.8,
    },
    quantity: {
      bedrooms: 5,
      bathrooms: 3,
      area: 180,
    },
    finishes: {
      roof: "Cubiertas de cinc patinado",
      floor: "Parquet de abeto tratado",
      paint: "Pintura mineral transpirable",
      doors: "Puertas de fresno con cerraduras inteligentes",
    },
    customization: [
      "Sistemas de calefacción geotérmica",
      "Instalación solar térmica",
      "Ampliación modular",
      "Integración de piscina interior",
    ],
    certifications: [
      "ISO 9001:2015",
      "ISO 14001:2015",
      "PEFC Certificado",
      "Pasaporte de Diseño Sostenible",
    ],
  },
  torku: {
    sipPanel: {
      thickness: 18,
      rValue: 4.6,
    },
    quantity: {
      bedrooms: 2,
      bathrooms: 1,
      area: 48,
    },
    finishes: {
      roof: "Tejas cerámicas tradicionales",
      floor: "Suelo de hormigón pulido",
      paint: "Pintura exterior resistente UV",
      doors: "Puerta de entrada de aluminio anodizado",
    },
    customization: [
      "Ampliación horizontal",
      "Terraza cubierta",
      "Sistema de ventilación mecánica controlada",
    ],
    certifications: [
      "ISO 9001:2015",
      "PEFC Certificado",
      "Marcado CE",
    ],
  },
  levi: {
    sipPanel: {
      thickness: 20,
      rValue: 5.2,
    },
    quantity: {
      bedrooms: 3,
      bathrooms: 2,
      area: 110,
    },
    finishes: {
      roof: "Cubiertas de metal con aislamiento reflectivo",
      floor: "Tarima de pino tratado",
      paint: "Pintura acrílica de primer nivel",
      doors: "Puertas de caoba maciza",
    },
    customization: [
      "Sistema de recirculación de aire caliente",
      "Integración de chimenea",
      "Jardín de invierno",
      "Ampliación de área de almacenamiento",
    ],
    certifications: [
      "ISO 9001:2015",
      "PEFC Certificado",
      "Energieeffizienz Clase B",
    ],
  },
  kuusamo: {
    sipPanel: {
      thickness: 20,
      rValue: 5.2,
    },
    quantity: {
      bedrooms: 2,
      bathrooms: 1,
      area: 80,
    },
    finishes: {
      roof: "Tejas de madera tratada",
      floor: "Suelo radiante con tarima",
      paint: "Pintura ecológica de secado rápido",
      doors: "Puertas de abeto con vidrio templado",
    },
    customization: [
      "Sistema de calefacción radiante completo",
      "Terraza ampliada",
      "Integración de sauna",
      "Sistema de captura de agua lluvia",
    ],
    certifications: [
      "ISO 9001:2015",
      "PEFC Certificado",
      "Pasaporte de Construcción Limpia",
    ],
  },
  oulu: {
    sipPanel: {
      thickness: 20,
      rValue: 5.2,
    },
    quantity: {
      bedrooms: 3,
      bathrooms: 1,
      area: 95,
    },
    finishes: {
      roof: "Cubiertas recicladas con garantía 30 años",
      floor: "Tarima flotante de roble",
      paint: "Pintura nórdica resistente clima frío",
      doors: "Puertas de entrada con doble acristalamiento",
    },
    customization: [
      "Reforma integral de fachada",
      "Incorporación de paneles solares",
      "Ampliación de cocina",
      "Mejora de aislamiento acústico",
    ],
    certifications: [
      "ISO 9001:2015",
      "Certificado de Rehabilitación Energética",
      "PEFC Certificado",
    ],
  },
  tampere: {
    sipPanel: {
      thickness: 22,
      rValue: 5.8,
    },
    quantity: {
      bedrooms: 0,
      bathrooms: 0,
      area: 0,
    },
    finishes: {
      roof: "Acabado según especificación del cliente",
      floor: "Acabado según especificación del cliente",
      paint: "Acabado según especificación del cliente",
      doors: "Acabado según especificación del cliente",
    },
    customization: [
      "Paquete de materiales completo SIP",
      "Personalización según diseño cliente",
      "Instalación asistida",
      "Capacitación para montaje",
    ],
    certifications: [
      "ISO 9001:2015",
      "PEFC Certificado",
      "Cumplimiento normativa europea",
    ],
  },
  helsinki: {
    sipPanel: {
      thickness: 20,
      rValue: 5.2,
    },
    quantity: {
      bedrooms: 3,
      bathrooms: 2,
      area: 120,
    },
    finishes: {
      roof: "Cubiertas modernas con aislamiento superior",
      floor: "Suelo de cemento pulido + alfombras",
      paint: "Pintura mineral de diseñador",
      doors: "Puertas de vidrio templado automáticas",
    },
    customization: [
      "Integración domótica completa",
      "Sistema de climatización inverter",
      "Reforma de distribución interior",
      "Incorporación de accesibilidad universal",
    ],
    certifications: [
      "ISO 9001:2015",
      "ISO 14001:2015",
      "PEFC Certificado",
      "Diseño Accesible Certificado",
    ],
  },
};

export const getTechnicalSpecs = (slug: string): TechnicalSpecs | undefined => {
  return projectTechnicalSpecs[slug];
};
