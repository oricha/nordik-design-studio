import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X, Maximize2, Minimize2 } from "lucide-react";

type GalleryImage = {
  url: string;
  title: string;
  category: "exterior" | "interior" | "detalles";
};

interface ImageGalleryProps {
  images: GalleryImage[];
  title?: string;
}

const ImageGallery = ({ images, title = "Galería de Imágenes" }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showLightbox, setShowLightbox] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const goToPrevious = () => {
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const goToImage = (index: number) => {
    setActiveIndex(index);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!showLightbox) return;
      if (e.key === "ArrowLeft") goToPrevious();
      if (e.key === "ArrowRight") goToNext();
      if (e.key === "Escape") setShowLightbox(false);
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [showLightbox, images.length]);

  if (images.length === 0) {
    return null;
  }

  const currentImage = images[activeIndex];
  const thumbnailsPerRow = 6;
  const startIndex = Math.floor(activeIndex / thumbnailsPerRow) * thumbnailsPerRow;
  const visibleThumbnails = images.slice(startIndex, startIndex + thumbnailsPerRow);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}>
          <h2 className="text-3xl font-bold text-foreground mb-8">{title}</h2>

          {/* Main Image */}
          <div className="mb-6">
            <motion.div
              layoutId="gallery-main"
              className="relative aspect-video bg-black rounded-xl overflow-hidden cursor-pointer group"
              onClick={() => setShowLightbox(true)}
            >
              <img
                src={currentImage.url}
                alt={currentImage.title}
                className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
              <div className="absolute bottom-4 left-4 bg-black/70 text-white px-3 py-2 rounded-lg text-sm">
                {activeIndex + 1} / {images.length}
              </div>
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <Maximize2 className="w-8 h-8 text-white" />
              </div>

              {/* Navigation Arrows */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToPrevious();
                }}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  goToNext();
                }}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/75 text-white p-2 rounded-full transition-all"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </motion.div>

            {/* Image Title and Category */}
            <div className="mt-4 flex items-center justify-between">
              <div>
                <h3 className="text-lg font-semibold text-foreground">{currentImage.title}</h3>
                <p className="text-sm text-muted-foreground capitalize">
                  {currentImage.category === "exterior"
                    ? "Exterior"
                    : currentImage.category === "interior"
                      ? "Interior"
                      : "Detalles"}
                </p>
              </div>
              <button
                onClick={() => setShowLightbox(true)}
                className="bg-primary text-primary-foreground px-4 py-2 rounded-lg hover:bg-primary/90 transition-colors text-sm font-medium flex items-center gap-2"
              >
                <Maximize2 className="w-4 h-4" />
                Ver en grande
              </button>
            </div>
          </div>

          {/* Thumbnails */}
          <div>
            <p className="text-sm text-muted-foreground mb-3">Miniaturas</p>
            <div className="flex gap-3 overflow-x-auto pb-2">
              {visibleThumbnails.map((img, idx) => {
                const actualIndex = startIndex + idx;
                const isActive = actualIndex === activeIndex;

                return (
                  <button
                    key={actualIndex}
                    onClick={() => goToImage(actualIndex)}
                    className={`flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden border-2 transition-all ${
                      isActive ? "border-primary ring-2 ring-primary" : "border-border hover:border-primary/50"
                    }`}
                  >
                    <img
                      src={img.url}
                      alt={img.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                    />
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {showLightbox && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowLightbox(false)}
            className="fixed inset-0 bg-black/95 z-50 flex items-center justify-center p-4"
          >
            <button
              onClick={() => setShowLightbox(false)}
              className="absolute top-6 right-6 text-white hover:text-gray-300 transition-colors z-60"
            >
              <X className="w-8 h-8" />
            </button>

            <motion.img
              layoutId="gallery-main"
              src={currentImage.url}
              alt={currentImage.title}
              className={`max-h-[80vh] max-w-[90vw] rounded-lg ${isFullscreen ? "w-screen h-screen" : ""}`}
              onClick={(e) => e.stopPropagation()}
            />

            {/* Lightbox Controls */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                goToPrevious();
              }}
              className="absolute left-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            <button
              onClick={(e) => {
                e.stopPropagation();
                goToNext();
              }}
              className="absolute right-6 top-1/2 -translate-y-1/2 bg-white/20 hover:bg-white/40 text-white p-3 rounded-full transition-all"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Bottom Info */}
            <div className="absolute bottom-6 left-6 right-6 flex items-center justify-between text-white">
              <div>
                <p className="font-semibold">{currentImage.title}</p>
                <p className="text-sm text-gray-300">
                  {activeIndex + 1} de {images.length}
                </p>
              </div>
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setIsFullscreen(!isFullscreen);
                }}
                className="bg-white/20 hover:bg-white/40 p-2 rounded transition-colors"
              >
                {isFullscreen ? <Minimize2 className="w-6 h-6" /> : <Maximize2 className="w-6 h-6" />}
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default ImageGallery;
