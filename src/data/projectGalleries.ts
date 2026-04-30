export type ProjectGallery = {
  slug: string;
  images: Array<{
    url: string;
    title: string;
    category: "exterior" | "interior" | "detalles";
  }>;
};

export const projectGalleries: ProjectGallery[] = [
  {
    slug: "kuusamo",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Vista frontal principal",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Detalle de fachada",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Sala de estar moderna",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Cocina integrada",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Dormitorio principal",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Ventanales panorámicos",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Escaleras de diseño",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Baño minimalista",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Exterior en invierno",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Terraza con vistas",
        category: "exterior",
      },
    ],
  },
  {
    slug: "tampere",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Fachada principal",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Detalle arquitectónico",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Sala de estar",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Comedor moderno",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Dormitorio principal",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Ventanas grandes",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Diseño interior",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Baño de lujo",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Exterior con jardín",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7d8a28?w=1200&h=800&fit=crop",
        title: "Entrada principal",
        category: "exterior",
      },
    ],
  },
  {
    slug: "levi",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Casa moderna",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Detalles de construcción",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Interior luminoso",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Cocina integral",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Recámara principal",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Ventanería moderna",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Espacio abierto",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Baño elegante",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Área exterior",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7d8a28?w=1200&h=800&fit=crop",
        title: "Acceso principal",
        category: "exterior",
      },
    ],
  },
  {
    slug: "oulu",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Reforma exterior",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Detalle fachada",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Espacio reformado",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Cocina renovada",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Dormitorio reforma",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Ventanas nuevas",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Diseño interior nuevo",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Baño renovado",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Zona exterior reforma",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7d8a28?w=1200&h=800&fit=crop",
        title: "Entrada reformada",
        category: "exterior",
      },
    ],
  },
  {
    slug: "torku",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Cabaña frontal",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Detalle construcción",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Interior cabaña",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Cocina cabaña",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Dormitorio cabaña",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Ventanas cabaña",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Sala cabaña",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Baño cabaña",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Exterior cabaña",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7d8a28?w=1200&h=800&fit=crop",
        title: "Entrada cabaña",
        category: "exterior",
      },
    ],
  },
  {
    slug: "helsinki",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Casa Helsinki",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Arquitectura Helsinki",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Reforma interior",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Cocina Helsinki",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Dormitorio reforma",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Detalles ventanas",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Espacio abierto",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Baño moderno",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Patio exterior",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7d8a28?w=1200&h=800&fit=crop",
        title: "Acceso principal",
        category: "exterior",
      },
    ],
  },
  {
    slug: "tunturi",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Casa Tunturi",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Fachada moderna",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Sala principal",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Cocina moderna",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Recámara principal",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Ventanales",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Comedor abierto",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Baño completo",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Terraza exterior",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7d8a28?w=1200&h=800&fit=crop",
        title: "Entrada Tunturi",
        category: "exterior",
      },
    ],
  },
  {
    slug: "sodankyla",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Cabaña Sodankyla",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Construcción SIP",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Interior cabaña",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Cocina pequeña",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Dormitorio cabaña",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Ventanas pequeñas",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Sala compacta",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Baño funcional",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Exterior nieve",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7d8a28?w=1200&h=800&fit=crop",
        title: "Puerta entrada",
        category: "exterior",
      },
    ],
  },
  {
    slug: "kuusamo",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Casa Kuusamo",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Detalles arquitectónicos",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Sala estar",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Comedor integrado",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Recámara principal",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Acristalamiento",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Escaleras diseño",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Suite baño",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Patio Kuusamo",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7d8a28?w=1200&h=800&fit=crop",
        title: "Entrada casa",
        category: "exterior",
      },
    ],
  },
  {
    slug: "inari",
    images: [
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Fachada principal Inari",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Vista lateral moderna",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Detalle fachada revestimiento",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Cocina abierta Inari",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Dormitorio principal",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Ventanales panorámicos",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Escaleras diseño",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Baño suite",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Patio y terraza",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7d8a28?w=1200&h=800&fit=crop",
        title: "Acceso entrada",
        category: "exterior",
      },
    ],
  },
  {
    slug: "rovaniemi",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Fachada principal Rovaniemi",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Vista lateral luminosa",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Detalle ventanería",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Sala comedor",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Dormitorio",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Grandes ventanas",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Estructura interior",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Baño moderno",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Zona exterior",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7d8a28?w=1200&h=800&fit=crop",
        title: "Entrada frontal",
        category: "exterior",
      },
    ],
  },
  {
    slug: "saariselka",
    images: [
      {
        url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1200&h=800&fit=crop",
        title: "Cabaña Saariselkä",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=1200&h=800&fit=crop",
        title: "Detalle exterior",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1570129477492-45a003537e1f?w=1200&h=800&fit=crop",
        title: "Ventanas ampias",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1200&h=800&fit=crop",
        title: "Cocina compacta",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1495521821757-a1efb6729352?w=1200&h=800&fit=crop",
        title: "Dormitorio principal",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?w=1200&h=800&fit=crop",
        title: "Vistas exteriores",
        category: "detalles",
      },
      {
        url: "https://images.unsplash.com/photo-1575460711063-f32bee8e6f06?w=1200&h=800&fit=crop",
        title: "Sala estar",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1552948110-fac1076e7b04?w=1200&h=800&fit=crop",
        title: "Baño pequeño",
        category: "interior",
      },
      {
        url: "https://images.unsplash.com/photo-1576305325570-4e7b2d8b8c84?w=1200&h=800&fit=crop",
        title: "Terraza",
        category: "exterior",
      },
      {
        url: "https://images.unsplash.com/photo-1600566753376-12c8ab7d8a28?w=1200&h=800&fit=crop",
        title: "Entrada cabaña",
        category: "exterior",
      },
    ],
  },
];

export const getProjectGallery = (slug: string): ProjectGallery | undefined => {
  return projectGalleries.find((g) => g.slug === slug);
};
