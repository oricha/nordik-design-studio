export interface TeamMember {
  id: string;
  name: string;
  position: string;
  specialty: string;
  image: string;
  bio?: string;
  socialLinks: {
    platform: "linkedin" | "github" | "twitter";
    url: string;
  }[];
}

export const teamMembers: TeamMember[] = [
  {
    id: "ceo",
    name: "Henrik Larsson",
    position: "Fundador y CEO",
    specialty: "Arquitectura escandinava & Gestión",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    bio: "20+ años en construcción sostenible y diseño arquitectónico.",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    id: "projects",
    name: "Anna Svensson",
    position: "Directora de Proyectos",
    specialty: "Coordinación y control de calidad",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    bio: "Especialista en gestión de proyectos complejos y satisfacción del cliente.",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    id: "engineer",
    name: "Carlos García",
    position: "Ingeniero Principal",
    specialty: "Estructuras y sostenibilidad",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    bio: "Ingeniero experto en sistemas constructivos y eficiencia energética.",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "github", url: "https://github.com" },
    ],
  },
  {
    id: "designer",
    name: "Sofia Andersson",
    position: "Diseñadora Principal",
    specialty: "Arquitectura y diseño interior",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Diseñadora con visión clara de la estética y funcionalidad moderna.",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com" },
      { platform: "twitter", url: "https://twitter.com" },
    ],
  },
  {
    id: "sustainability",
    name: "Lars Bergström",
    position: "Director de Sostenibilidad",
    specialty: "Construcción eco-friendly",
    image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=400&h=400&fit=crop",
    bio: "Especialista en prácticas sostenibles y certificaciones ambientales.",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
  {
    id: "customer",
    name: "María Rodríguez",
    position: "Gerente de Atención al Cliente",
    specialty: "Relaciones y satisfacción",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
    bio: "Dedica su carrera a garantizar la máxima satisfacción del cliente.",
    socialLinks: [
      { platform: "linkedin", url: "https://linkedin.com" },
    ],
  },
];
