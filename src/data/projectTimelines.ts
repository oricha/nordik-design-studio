export type Phase = {
  name: string;
  durationWeeks: number;
  customizationWeeks: number;
  description: string;
};

export type Timeline = {
  phases: Phase[];
};

type ProjectTimelinesMap = {
  [slug: string]: Timeline;
};

const projectTimelines: ProjectTimelinesMap = {
  tunturi: {
    phases: [
      {
        name: "Diseño y Personalización",
        durationWeeks: 2,
        customizationWeeks: 2,
        description: "Revisión de planos, ajustes finales y aprobación de diseño con cliente",
      },
      {
        name: "Fabricación de Paneles SIP",
        durationWeeks: 4,
        customizationWeeks: 2,
        description: "Corte, ensamblaje y control de calidad de los paneles en fábrica",
      },
      {
        name: "Logística y Transporte",
        durationWeeks: 2,
        customizationWeeks: 1,
        description: "Embalaje, organización de ruta y transporte hasta el terreno",
      },
      {
        name: "Instalación y Montaje",
        durationWeeks: 3,
        customizationWeeks: 1,
        description: "Cimentación, montaje de estructura y conexiones eléctricas",
      },
      {
        name: "Acabados y Finishing",
        durationWeeks: 3,
        customizationWeeks: 2,
        description: "Pintura, pavimentos, puertas, ventanas e instalaciones finales",
      },
    ],
  },
  sodankyla: {
    phases: [
      {
        name: "Diseño y Especificaciones",
        durationWeeks: 2,
        customizationWeeks: 3,
        description: "Valoración de terreno, diseño personalizado y selección de acabados",
      },
      {
        name: "Fabricación",
        durationWeeks: 5,
        customizationWeeks: 2,
        description: "Producción de todos los componentes SIP con tolerancias precisas",
      },
      {
        name: "Preparación del Terreno",
        durationWeeks: 1,
        customizationWeeks: 1,
        description: "Cimentación y preparación de la base para montaje",
      },
      {
        name: "Montaje Estructural",
        durationWeeks: 2,
        customizationWeeks: 1,
        description: "Elevación e instalación de la estructura principal",
      },
      {
        name: "Instalaciones MEP",
        durationWeeks: 2,
        customizationWeeks: 1,
        description: "Sistemas mecánicos, eléctricos y de plomería",
      },
      {
        name: "Acabados y Entrega",
        durationWeeks: 2,
        customizationWeeks: 2,
        description: "Acabados interiores, pintura, limpieza y entrega final",
      },
    ],
  },
  torku: {
    phases: [
      {
        name: "Diseño",
        durationWeeks: 1,
        customizationWeeks: 1,
        description: "Revisión de planos estándar y ajustes menores",
      },
      {
        name: "Fabricación",
        durationWeeks: 2,
        customizationWeeks: 1,
        description: "Fabricación rápida de componentes modulares",
      },
      {
        name: "Transporte",
        durationWeeks: 1,
        customizationWeeks: 0,
        description: "Entrega de componentes al sitio",
      },
      {
        name: "Instalación",
        durationWeeks: 2,
        customizationWeeks: 1,
        description: "Montaje y conexiones de estructura",
      },
      {
        name: "Acabados",
        durationWeeks: 1,
        customizationWeeks: 1,
        description: "Pintura, puertas y detalles finales",
      },
    ],
  },
  levi: {
    phases: [
      {
        name: "Diseño Personalizado",
        durationWeeks: 2,
        customizationWeeks: 2,
        description: "Diseño según preferencias y características del terreno",
      },
      {
        name: "Fabricación en Fábrica",
        durationWeeks: 3,
        customizationWeeks: 2,
        description: "Producción de paneles SIP y componentes",
      },
      {
        name: "Preparación y Logística",
        durationWeeks: 2,
        customizationWeeks: 1,
        description: "Embalaje protector y organización de transporte",
      },
      {
        name: "Construcción en Sitio",
        durationWeeks: 3,
        customizationWeeks: 1,
        description: "Cimentación, montaje y conexiones estructurales",
      },
      {
        name: "Acabados Finales",
        durationWeeks: 2,
        customizationWeeks: 2,
        description: "Interiores, sistemas e inspecciones finales",
      },
    ],
  },
  kuusamo: {
    phases: [
      {
        name: "Diseño",
        durationWeeks: 1,
        customizationWeeks: 1,
        description: "Confirmación de diseño estándar o ajustes solicitados",
      },
      {
        name: "Fabricación",
        durationWeeks: 2,
        customizationWeeks: 1,
        description: "Producción eficiente de módulos SIP",
      },
      {
        name: "Envío",
        durationWeeks: 1,
        customizationWeeks: 0,
        description: "Transporte rápido a destino",
      },
      {
        name: "Montaje",
        durationWeeks: 2,
        customizationWeeks: 1,
        description: "Instalación estructural rápida",
      },
      {
        name: "Terminación",
        durationWeeks: 1,
        customizationWeeks: 1,
        description: "Acabados e inspección de calidad",
      },
    ],
  },
  oulu: {
    phases: [
      {
        name: "Valoración Estructural",
        durationWeeks: 1,
        customizationWeeks: 1,
        description: "Inspección de estructura existente y planificación de reforma",
      },
      {
        name: "Demolición Selectiva",
        durationWeeks: 1,
        customizationWeeks: 1,
        description: "Remoción de materiales obsoletos y preparación",
      },
      {
        name: "Fabricación de Componentes",
        durationWeeks: 2,
        customizationWeeks: 2,
        description: "Paneles SIP adaptados para la reforma",
      },
      {
        name: "Instalación Nueva Estructura",
        durationWeeks: 2,
        customizationWeeks: 1,
        description: "Montaje de paneles y conexión con estructura existente",
      },
      {
        name: "Sistemas e Interiores",
        durationWeeks: 2,
        customizationWeeks: 2,
        description: "Instalaciones nuevas, aislamiento y acabados",
      },
    ],
  },
  tampere: {
    phases: [
      {
        name: "Consultoría Inicial",
        durationWeeks: 1,
        customizationWeeks: 2,
        description: "Asesoramiento sobre opciones de materialización",
      },
      {
        name: "Producción de Materiales",
        durationWeeks: 3,
        customizationWeeks: 2,
        description: "Fabricación de paquete SIP completo según especificaciones",
      },
      {
        name: "Empaque y Logística",
        durationWeeks: 1,
        customizationWeeks: 1,
        description: "Preparación para envío o almacenamiento",
      },
      {
        name: "Entrega",
        durationWeeks: 2,
        customizationWeeks: 0,
        description: "Transportación al destino especificado",
      },
    ],
  },
  helsinki: {
    phases: [
      {
        name: "Diseño de Reforma",
        durationWeeks: 2,
        customizationWeeks: 2,
        description: "Planificación detallada de modernización y mejoras",
      },
      {
        name: "Preparación del Sitio",
        durationWeeks: 1,
        customizationWeeks: 1,
        description: "Evaluación estructural y desmantelamiento controlado",
      },
      {
        name: "Fabricación de Componentes",
        durationWeeks: 3,
        customizationWeeks: 2,
        description: "Producción de paneles y sistemas adaptados",
      },
      {
        name: "Integración Estructural",
        durationWeeks: 2,
        customizationWeeks: 1,
        description: "Instalación combinada con estructura existente",
      },
      {
        name: "Sistemas Inteligentes",
        durationWeeks: 2,
        customizationWeeks: 2,
        description: "Instalación de domótica, climatización y sistemas modernos",
      },
      {
        name: "Finalización",
        durationWeeks: 1,
        customizationWeeks: 1,
        description: "Acabados, pruebas de sistemas y entrega",
      },
    ],
  },
};

export const getProjectTimeline = (slug: string): Timeline | undefined => {
  return projectTimelines[slug];
};

export const calculateTotalDuration = (timeline: Timeline, withCustomization: boolean): number => {
  return timeline.phases.reduce((total, phase) => {
    return total + (withCustomization ? phase.durationWeeks + phase.customizationWeeks : phase.durationWeeks);
  }, 0);
};
