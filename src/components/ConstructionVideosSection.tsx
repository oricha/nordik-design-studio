import { memo } from "react";
import { Play, Box } from "lucide-react";
import thumb from "@/assets/video-thumbnail.jpg";

/** F2.3.4 — embed + enlace tours 360 suplente hasta presupuesto */
function ConstructionVideosSection() {
  return (
    <div className="mx-auto mt-16 max-w-7xl px-6">
      <h3 className="text-center text-2xl font-bold text-foreground">Obra en vídeo · tours virtuales próximos</h3>
      <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-muted-foreground leading-relaxed">
        Embebemos un recurso público SIP genérico; sustituye por tus timelapses de obra o vídeo marca tan pronto tengas
        hosting definitivo proyecto.
      </p>

      <div className="mt-10 grid gap-10 md:grid-cols-2">
        <figure className="overflow-hidden rounded-2xl border border-border bg-muted/30 shadow-sm">
          <div className="relative aspect-video bg-black">
            <iframe
              title="Construcción viviendas madera / SIP (referencia YouTube)"
              className="size-full"
              loading="lazy"
              src="https://www.youtube.com/embed/ZS3O0DdPFMQ?rel=0"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          <figcaption className="flex items-start gap-2 p-4 text-sm text-muted-foreground">
            <Play className="mt-0.5 h-4 w-4 shrink-0 text-accent" aria-hidden />
            Contenido de referencia incrustado: obra industrializada (~3 min). Sustituir por el canal NordiK u ocultar hasta tener vídeo aprobado por marca.
          </figcaption>
        </figure>

        <div className="flex flex-col justify-center rounded-2xl border border-dashed border-border bg-muted/20 p-8 text-center">
          <Box className="mx-auto mb-4 h-10 w-10 text-muted-foreground" aria-hidden />
          <p className="font-semibold text-foreground">Tour interactivo 360° · placeholder</p>
          <p className="mx-auto mt-2 max-w-sm text-sm text-muted-foreground">
            Contrata modelo Matterport o tour WebXR y enlázalo desde aquí. Mientras tanto, miniatura proyecto archivo:
          </p>
          <img
            src={thumb}
            alt="Miniatura vídeo — proceso construcción (archivo marca)"
            className="mx-auto mt-6 max-h-48 rounded-lg object-cover"
          />
          <a
            href="https://matterport.com/discover/"
            target="_blank"
            rel="noopener noreferrer"
            className="mx-auto mt-6 inline-flex text-sm font-semibold text-accent underline-offset-4 hover:underline"
          >
            Ejemplos públicos Matterport · abrir nueva pestaña
          </a>
        </div>
      </div>
    </div>
  );
}

export default memo(ConstructionVideosSection);
