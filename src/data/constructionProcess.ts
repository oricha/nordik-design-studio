export interface ConstructionStep {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  duration: string;
  image: string;
  qaCheckpoints?: string[];
}

export const constructionSteps: ConstructionStep[] = [
  {
    id: "design",
    stepNumber: 1,
    title: "Diseño & Planificación",
    description:
      "Trabajamos con el cliente para crear un diseño personalizado que cumpla con sus especificaciones y necesidades. Se elaboran planos detallados y se valida la viabilidad del proyecto.",
    duration: "2-4 semanas",
    image:
      "https://images.unsplash.com/photo-1541123603104-852dbe8b7198?w=600&h=400&fit=crop",
    qaCheckpoints: ["Aprobación de planos", "Verificación de especificaciones"],
  },
  {
    id: "fabrication",
    stepNumber: 2,
    title: "Fabricación en Fábrica",
    description:
      "Los componentes prefabricados se construyen en nuestras instalaciones de fabricación bajo condiciones controladas, garantizando máxima precisión y calidad.",
    duration: "4-6 semanas",
    image:
      "https://images.unsplash.com/photo-1531482615713-2afd69097998?w=600&h=400&fit=crop",
    qaCheckpoints: ["Inspección de componentes", "Pruebas de calidad"],
  },
  {
    id: "quality-control",
    stepNumber: 3,
    title: "Control de Calidad",
    description:
      "Cada componente se somete a inspecciones rigurosas y pruebas de resistencia para garantizar que cumple con nuestros altos estándares de calidad.",
    duration: "1-2 semanas",
    image:
      "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=400&fit=crop",
    qaCheckpoints: ["Certificación de componentes", "Pruebas de durabilidad"],
  },
  {
    id: "logistics",
    stepNumber: 4,
    title: "Logística & Transporte",
    description:
      "Los componentes se empacan de forma segura y se transportan a la ubicación de construcción. Coordinamos la entrega para que coincida con el cronograma del sitio.",
    duration: "1-2 semanas",
    image:
      "https://images.unsplash.com/photo-1534016066556-6b63e9c48cea?w=600&h=400&fit=crop",
    qaCheckpoints: ["Verificación de entrega", "Inspección de sitio"],
  },
  {
    id: "site-prep",
    stepNumber: 5,
    title: "Preparación del Sitio",
    description:
      "Se prepara la base y se realizan trabajos preliminares necesarios. Se establecen sistemas de drenaje, cimentación y otras preparaciones esenciales.",
    duration: "1-2 semanas",
    image:
      "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&h=400&fit=crop",
    qaCheckpoints: ["Inspección de cimentación", "Validación de niveles"],
  },
  {
    id: "assembly",
    stepNumber: 6,
    title: "Ensamblaje & Montaje",
    description:
      "Los componentes prefabricados se ensamblan en el sitio utilizando técnicas especializadas. Esta fase es mucho más rápida que la construcción tradicional.",
    duration: "2-3 semanas",
    image:
      "https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=600&h=400&fit=crop",
    qaCheckpoints: ["Alineación estructural", "Conexiones aseguradas"],
  },
  {
    id: "finishing",
    stepNumber: 7,
    title: "Instalaciones & Acabados",
    description:
      "Se completan los sistemas eléctricos, fontanería, HVAC y trabajos de acabado. Se realizan pruebas finales para garantizar que todo funciona correctamente.",
    duration: "2-3 semanas",
    image:
      "https://images.unsplash.com/photo-1565450588840-4d7f3db47a12?w=600&h=400&fit=crop",
    qaCheckpoints: [
      "Inspecciones de sistemas",
      "Pruebas funcionales finales",
    ],
  },
];
