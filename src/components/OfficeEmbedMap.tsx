import type { Location } from "@/data/locations";

interface OfficeEmbedMapProps {
  office: Pick<Location, "title" | "address" | "mapsUrl" | "mapsEmbedUrl">;
  className?: string;
}

/** Mapa embebido sin API key (Google output=embed). F1.5.5 */
const OfficeEmbedMap = ({ office, className }: OfficeEmbedMapProps) => {
  return (
    <div className={className}>
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-sm font-semibold text-foreground">{office.title}</span>
        <a
          href={office.mapsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-accent underline-offset-4 hover:underline"
        >
          Cómo llegar
        </a>
      </div>
      <div className="relative w-full overflow-hidden rounded-2xl border border-border bg-muted" style={{ paddingBottom: "56.25%" }}>
        <iframe
          title={`Ubicación oficina NordiK en ${office.title}`}
          src={office.mapsEmbedUrl}
          className="absolute inset-0 h-full w-full border-0"
          loading="lazy"
          allowFullScreen
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
      <p className="mt-2 text-xs text-muted-foreground">
        {office.address}
      </p>
    </div>
  );
};

export default OfficeEmbedMap;
