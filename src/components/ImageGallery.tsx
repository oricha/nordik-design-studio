import { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2, ZoomIn, ZoomOut } from "lucide-react";

export type GalleryImage = {
  url: string;
  title: string;
  category: "exterior" | "interior" | "detalles" | "acabados";
};

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
  /** Dentro de otro `<section>` (p.ej. galería home con pestañas). */
  embedded?: boolean;
}

const MIN_ZOOM = 1;
const MAX_ZOOM = 3;

function categoryLabel(c: GalleryImage["category"]) {
  switch (c) {
    case "exterior":
      return "Exterior";
    case "interior":
      return "Interiores";
    case "detalles":
      return "Detalle / proceso";
    case "acabados":
      return "Acabados";
    default:
      return c;
  }
}

const ImageGallery = ({ images, title = "Galería de Imágenes", embedded = false }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [zoomLevel, setZoomLevel] = useState(MIN_ZOOM);

  const goToPrevious = useCallback(() => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  }, [images.length]);

  const goToNext = useCallback(() => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  }, [images.length]);

  const lightboxStageRef = useRef<HTMLDivElement>(null);

  const toggleFullscreen = useCallback(() => {
    const el = lightboxStageRef.current;
    if (!el) return;
    if (!document.fullscreenElement) {
      void el.requestFullscreen().catch(() => undefined);
    } else {
      void document.exitFullscreen().catch(() => undefined);
    }
  }, []);


  useEffect(() => {
    setZoomLevel(MIN_ZOOM);
  }, [activeIndex]);

  useEffect(() => {
    if (!showLightbox) setZoomLevel(MIN_ZOOM);
  }, [showLightbox]);

  useEffect(() => {
    if (!showLightbox) return () => {};
    return () => {
      const stage = lightboxStageRef.current;
      if (stage && document.fullscreenElement === stage) {
        void document.exitFullscreen().catch(() => undefined);
      }
    };
  }, [showLightbox]);

  useEffect(() => {
    if (!showLightbox) return;
    const handler = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft") {
        e.preventDefault();
        goToPrevious();
      }
      if (e.key === "ArrowRight") {
        e.preventDefault();
        goToNext();
      }
      if (e.key === "+" || e.key === "=") {
        e.preventDefault();
        setZoomLevel((z) => Math.min(MAX_ZOOM, +(z + 0.25).toFixed(2)));
      }
      if (e.key === "-" || e.key === "_") {
        e.preventDefault();
        setZoomLevel((z) => Math.max(MIN_ZOOM, +(z - 0.25).toFixed(2)));
      }
      if (e.key === "Escape") setShowLightbox(false);
    };
    window.addEventListener("keydown", handler);
    return () => window.removeEventListener("keydown", handler);
  }, [showLightbox, goToPrevious, goToNext]);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[activeIndex];

  const Root = embedded ? "div" : "section";
  const rootClass = embedded ? "w-full pt-2" : "section-padding";

  return (
    <Root className={rootClass}>
      <div className="mx-auto max-w-7xl">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          {embedded ? (
            <h2 className="sr-only">{title}</h2>
          ) : (
            <h2 className="mb-8 text-3xl font-bold text-foreground">{title}</h2>
          )}

          <div className="mb-6">
            <motion.div
              layoutId={`gallery-main-${title}`}
              className="relative aspect-video cursor-pointer overflow-hidden rounded-xl bg-black group"
              onClick={() => setShowLightbox(true)}
            >
              <img
                src={currentImage.url}
                alt={currentImage.title}
                className="size-full object-cover transition-transform duration-300 group-hover:scale-105"
                loading="lazy"
                decoding="async"
              />
              <div className="pointer-events-none absolute inset-0 bg-black/0 transition-colors group-hover:bg-black/20" />
              <div className="absolute bottom-4 left-4 rounded-lg bg-black/70 px-3 py-2 text-sm text-white">
                {activeIndex + 1} / {images.length}
              </div>
              <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-0 transition-opacity group-hover:opacity-100">
                <Maximize2 className="size-8 text-white" />
              </div>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/75"
                aria-label="Imagen anterior"
              >
                <ChevronLeft className="size-6" />
              </button>
              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 z-10 -translate-y-1/2 rounded-full bg-black/50 p-2 text-white transition-all hover:bg-black/75"
                aria-label="Imagen siguiente"
              >
                <ChevronRight className="size-6" />
              </button>
            </motion.div>

            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{currentImage.title}</h3>
                <p className="text-sm text-muted-foreground">{categoryLabel(currentImage.category)}</p>
              </div>
              <button
                type="button"
                onClick={() => setShowLightbox(true)}
                className="inline-flex shrink-0 items-center gap-2 rounded-lg bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
              >
                <Maximize2 className="size-4" />
                Lightbox
              </button>
            </div>
          </div>

          <div className="mt-4">
            <p className="mb-3 text-sm text-muted-foreground">Miniaturas</p>
            <div className="grid max-h-56 grid-cols-4 gap-2 overflow-y-auto pb-2 sm:grid-cols-6 lg:grid-cols-10">
              {images.map((img, idx) => {
                const isActive = idx === activeIndex;
                return (
                  <button
                    key={`${idx}-${img.url.slice(-12)}`}
                    type="button"
                    onClick={() => goToImage(idx)}
                    aria-current={isActive}
                    aria-label={`Ver foto ${idx + 1}: ${img.title}`}
                    className={`aspect-square overflow-hidden rounded-lg border-2 transition-all focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${
                      isActive ? "border-primary ring-2 ring-primary/40" : "border-border hover:border-primary/40"
                    }`}
                  >
                    <img src={img.url} alt="" className="size-full object-cover" loading="lazy" />
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            role="dialog"
            aria-modal="true"
            aria-label={`Galería: ${currentImage.title}`}
            onClick={() => setShowLightbox(false)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
          >
            <button
              type="button"
              onClick={() => setShowLightbox(false)}
              className="absolute right-6 top-6 z-[60] text-white transition-colors hover:text-gray-300"
              aria-label="Cerrar galería"
            >
              <X className="size-8" />
            </button>

            <div
              ref={lightboxStageRef}
              className="relative mx-auto flex max-h-[85vh] max-w-[94vw] cursor-zoom-in items-center justify-center overflow-auto bg-black px-12 py-20 sm:px-16 dark:bg-transparent"
              onClick={(e) => e.stopPropagation()}
            >
              <img
                src={currentImage.url}
                alt={currentImage.title}
                className={`max-h-[80vh] w-auto origin-center rounded-lg shadow-2xl transition-transform duration-200 ease-out will-change-transform select-none ${
                  zoomLevel > MIN_ZOOM ? "cursor-zoom-out" : "cursor-zoom-in"
                }`}
                style={{ transform: `scale(${zoomLevel})` }}
                loading="lazy"
                decoding="async"
                onDoubleClick={(ev) => {
                  ev.stopPropagation();
                  setZoomLevel((z) => (Math.abs(z - MIN_ZOOM) < 0.01 ? 2 : MIN_ZOOM));
                }}
              />
            </div>

            <p className="pointer-events-none absolute bottom-36 left-0 right-0 z-[58] px-8 text-center text-xs text-gray-400 sm:block">
              ← → para navegar · + / − zoom · Doble clic alterna zoom · Esc cierra · Botón Pantalla completa (visor)
            </p>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-4 top-1/2 z-[60] -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:left-6"
              aria-label="Anterior"
            >
              <ChevronLeft className="size-8" />
            </button>

            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-4 top-1/2 z-[60] -translate-y-1/2 rounded-full bg-white/15 p-3 text-white transition-colors hover:bg-white/30 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 sm:right-6"
              aria-label="Siguiente"
            >
              <ChevronRight className="size-8" />
            </button>

            <div className="absolute bottom-6 left-6 right-6 flex flex-col gap-4 text-white md:flex-row md:items-center md:justify-between">
              <div>
                <p className="font-semibold">{currentImage.title}</p>
                <p className="text-sm text-gray-300">
                  {activeIndex + 1} de {images.length}
                </p>
              </div>
              <div className="flex flex-wrap items-center justify-end gap-2">
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomLevel((z) => Math.max(MIN_ZOOM, +(z - 0.25).toFixed(2)));
                  }}
                  disabled={zoomLevel <= MIN_ZOOM}
                  className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-white/25 disabled:pointer-events-none disabled:opacity-40"
                  aria-label="Reducir zoom"
                >
                  <ZoomOut className="size-4" />
                  Menos
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomLevel((z) => Math.min(MAX_ZOOM, +(z + 0.25).toFixed(2)));
                  }}
                  disabled={zoomLevel >= MAX_ZOOM}
                  className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-white/25 disabled:pointer-events-none disabled:opacity-40"
                  aria-label="Aumentar zoom"
                >
                  <ZoomIn className="size-4" />
                  Más
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    setZoomLevel(MIN_ZOOM);
                  }}
                  disabled={zoomLevel === MIN_ZOOM}
                  className="rounded-full bg-white/15 p-2 transition-colors hover:bg-white/25 disabled:pointer-events-none disabled:opacity-40"
                  aria-label="Restablecer zoom"
                  title="Restablecer zoom"
                >
                  <Minimize2 className="size-6" />
                </button>
                <button
                  type="button"
                  onClick={(e) => {
                    e.stopPropagation();
                    toggleFullscreen();
                  }}
                  className="inline-flex items-center gap-1 rounded-full bg-white/15 px-3 py-2 text-xs font-semibold uppercase tracking-wide transition-colors hover:bg-white/25"
                  aria-label="Pantalla completa del área del visor"
                  title="Pantalla completa"
                >
                  <Maximize2 className="size-4" />
                  Pantalla
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </Root>
  );
};

export default ImageGallery;
