import contactHouseImage from "@/assets/contact-house.jpg";
import galleryOneImage from "@/assets/gallery-1.jpg";
import galleryTwoImage from "@/assets/gallery-2.jpg";
import galleryThreeImage from "@/assets/gallery-3.jpg";
import galleryFourImage from "@/assets/gallery-4.jpg";
import projectOneImage from "@/assets/project-1.jpg";
import projectTwoImage from "@/assets/project-2.jpg";

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
    image: galleryOneImage,
    qaCheckpoints: ["Aprobación de planos", "Verificación de especificaciones"],
  },
  {
    id: "fabrication",
    stepNumber: 2,
    title: "Fabricación en Fábrica",
    description:
      "Los componentes prefabricados se construyen en nuestras instalaciones de fabricación bajo condiciones controladas, garantizando máxima precisión y calidad.",
    duration: "4-6 semanas",
    image: galleryTwoImage,
    qaCheckpoints: ["Inspección de componentes", "Pruebas de calidad"],
  },
  {
    id: "quality-control",
    stepNumber: 3,
    title: "Control de Calidad",
    description:
      "Cada componente se somete a inspecciones rigurosas y pruebas de resistencia para garantizar que cumple con nuestros altos estándares de calidad.",
    duration: "1-2 semanas",
    image: projectOneImage,
    qaCheckpoints: ["Certificación de componentes", "Pruebas de durabilidad"],
  },
  {
    id: "logistics",
    stepNumber: 4,
    title: "Logística & Transporte",
    description:
      "Los componentes se empacan de forma segura y se transportan a la ubicación de construcción. Coordinamos la entrega para que coincida con el cronograma del sitio.",
    duration: "1-2 semanas",
    image: projectTwoImage,
    qaCheckpoints: ["Verificación de entrega", "Inspección de sitio"],
  },
  {
    id: "site-prep",
    stepNumber: 5,
    title: "Preparación del Sitio",
    description:
      "Se prepara la base y se realizan trabajos preliminares necesarios. Se establecen sistemas de drenaje, cimentación y otras preparaciones esenciales.",
    duration: "1-2 semanas",
    image: galleryThreeImage,
    qaCheckpoints: ["Inspección de cimentación", "Validación de niveles"],
  },
  {
    id: "assembly",
    stepNumber: 6,
    title: "Ensamblaje & Montaje",
    description:
      "Los componentes prefabricados se ensamblan en el sitio utilizando técnicas especializadas. Esta fase es mucho más rápida que la construcción tradicional.",
    duration: "2-3 semanas",
    image: galleryFourImage,
    qaCheckpoints: ["Alineación estructural", "Conexiones aseguradas"],
  },
  {
    id: "finishing",
    stepNumber: 7,
    title: "Instalaciones & Acabados",
    description:
      "Se completan los sistemas eléctricos, fontanería, HVAC y trabajos de acabado. Se realizan pruebas finales para garantizar que todo funciona correctamente.",
    duration: "2-3 semanas",
    image: contactHouseImage,
    qaCheckpoints: [
      "Inspecciones de sistemas",
      "Pruebas funcionales finales",
    ],
  },
];
