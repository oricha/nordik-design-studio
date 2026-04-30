import { motion } from "framer-motion";
import ImageGallery, { type GalleryImage } from "@/components/ImageGallery";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BeforeAfterComparison from "@/components/BeforeAfterComparison";
import ConstructionVideosSection from "@/components/ConstructionVideosSection";
import {
  type CommercialGalleryItem,
  type CommercialGalleryPhase,
  galleryItemsByPhase,
} from "@/data/commercialGallery";

const PHASE_CONFIG: Array<{ value: CommercialGalleryPhase; label: string }> = [
  { value: "exterior", label: "Exterior" },
  { value: "interior", label: "Interiores" },
  { value: "detalles", label: "Detalle / proceso" },
  { value: "acabados", label: "Acabados" },
];

function toGalleryImages(items: CommercialGalleryItem[]): GalleryImage[] {
  return items.map(({ url, title, category }) => ({ url, title, category }));
}

const Gallery = () => {
  return (
    <section id="gallery" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 space-y-3 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Fotos del proyecto</h2>
          <p className="text-muted-foreground">
            Un vistazo al ciclo construcción: parcela y envolvente, interiores, proceso técnico y entrega terminada.
          </p>
          <p className="text-xs text-muted-foreground/90 md:text-sm">
            Imágenes archivo NordiK. Uso campaña comercial sólo tras permiso cliente y proyecto concreto.
          </p>
        </motion.div>

        <Tabs defaultValue={PHASE_CONFIG[0]?.value ?? "exterior"} className="w-full">
          <TabsList className="mx-auto flex h-auto w-full max-w-2xl flex-wrap justify-center gap-1 px-2 py-2 md:max-w-3xl">
            {PHASE_CONFIG.map(({ value, label }) => (
              <TabsTrigger key={value} value={value} className="shrink min-w-fit px-4">
                {label}
              </TabsTrigger>
            ))}
          </TabsList>

          {PHASE_CONFIG.map(({ value, label }) => (
            <TabsContent key={value} value={value} className="mt-6 outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2">
              <ImageGallery
                key={value}
                embedded
                title={`Galería comercial NordiK: ${label}`}
                images={toGalleryImages(galleryItemsByPhase(value))}
              />
            </TabsContent>
          ))}
        </Tabs>

        <div className="mt-16 space-y-16">
          <BeforeAfterComparison />
          <ConstructionVideosSection />
        </div>
      </div>
    </section>
  );
};

export default Gallery;
