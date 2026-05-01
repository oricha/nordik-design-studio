import heroHouse from "@/assets/hero-house.jpg";
import contactHouse from "@/assets/contact-house.jpg";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import project1 from "@/assets/project-1.jpg";
import project3 from "@/assets/project-3.jpg";
import project5 from "@/assets/project-5.jpg";
import project6 from "@/assets/project-6.jpg";
import torkuHero from "@/assets/torku-hero.jpg";
import torkuInterior from "@/assets/torku-interior.jpg";
import torkuSide from "@/assets/torku-side.jpg";

export type CommercialGalleryPhase = "exterior" | "interior" | "detalles" | "acabados";

export type CommercialGalleryItem = {
  url: string;
  title: string;
  category: CommercialGalleryPhase;
  projectNote: string;
};

/** F2.3.1 + F2.3.2: fotos archivo marca por fase del ciclo construcción. */
export const commercialGalleryItems: CommercialGalleryItem[] = [
  {
    url: heroHouse,
    title: "Cerramiento vista bosque antes acabados revestimiento",
    category: "exterior",
    projectNote: "Archivo marca · proyecto Laponia",
  },
  {
    url: torkuHero,
    title: "Fachada cabaña modelo Torku cara norte",
    category: "exterior",
    projectNote: "Serie catálogo Torku",
  },
  {
    url: torkuSide,
    title: "Detalle encuentro tabla y lamina soporte cara lateral",
    category: "exterior",
    projectNote: "Torku",
  },
  {
    url: project1,
    title: "Parcela proyecto unifamiliar entorno montaña",
    category: "exterior",
    projectNote: "Serie proyecto catálogo",
  },
  {
    url: project6,
    title: "Urbanización obra terminada temporada nieve",
    category: "exterior",
    projectNote: "Archivo marca",
  },
  {
    url: gallery1,
    title: "Salón día con cara a sur y madera pino tratada",
    category: "interior",
    projectNote: "Interior piloto marca",
  },
  {
    url: gallery3,
    title: "Cocina lineal muebles lacados contraste madera",
    category: "interior",
    projectNote: "Interior piloto marca",
  },
  {
    url: torkuInterior,
    title: "Zona día modelo cabaña muebles modelo compacto",
    category: "interior",
    projectNote: "Torku interior",
  },
  {
    url: project3,
    title: "Dormitorio planta segunda cabaña temporada montaje archivo",
    category: "interior",
    projectNote: "Archivo proyecto",
  },
  {
    url: gallery4,
    title: "Muro OSB cara interior antes tratamiento cara vista sala",
    category: "detalles",
    projectNote: "Proceso construcción",
  },
  {
    url: gallery2,
    title: "Estructura y OSB cara exterior proceso montaje",
    category: "detalles",
    projectNote: "Proceso construcción",
  },
  {
    url: project5,
    title: "Revestimiento madera interior pasillo proceso acabados",
    category: "detalles",
    projectNote: "Proceso acabados",
  },
  {
    url: torkuSide,
    title: "Encuentro aislamiento y perfil soporte proyecto inspeccionado BIM",
    category: "detalles",
    projectNote: "Detalle calidad taller",
  },
  {
    url: gallery4,
    title: "Fachada ventilada terminada después de proceso impermeabilización",
    category: "acabados",
    projectNote: "Acabados fachada",
  },
  {
    url: contactHouse,
    title: "Vivienda unifamiliar cara sur tras limpieza final entrega proyecto",
    category: "acabados",
    projectNote: "Archivo marca",
  },
  {
    url: gallery1,
    title: "Estancia principal tras entrega: iluminación y texturas nórdicas",
    category: "acabados",
    projectNote: "Interior entrega",
  },
  {
    url: torkuInterior,
    title: "Muebles fijos y parquet aceitado cabaña modelo compacto",
    category: "acabados",
    projectNote: "Torku",
  },
];

export function galleryItemsByPhase(phase: CommercialGalleryPhase): CommercialGalleryItem[] {
  return commercialGalleryItems.filter((i) => i.category === phase);
}
