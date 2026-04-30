import type { OfficeLocation } from "@/data/siteContact";

interface OfficeEmbedMapProps {
  office: Pick<OfficeLocation, "title" | "lat" | "lon" | "addressLines">;
  className?: string;
}

/** Mapa embebido sin API key (Google output=embed). F1.5.5 */
const OfficeEmbedMap = ({ office, className }: OfficeEmbedMapProps) => {
  const src = `https://maps.google.com/maps?q=${office.lat},${office.lon}&z=14&hl=es&output=embed`;
  const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${office.lat},${office.lon}`;

  return (
    <div className={className}>
      <div className="mb-2 flex flex-wrap items-baseline justify-between gap-2">
        <span className="text-sm font-semibold text-foreground">{office.title}</span>
        <a
          href={directionsHref}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-medium text-accent underline-offset-4 hover:underline"
        >
          Cómo llegar
        </a>
      </div>
      <iframe
        title={`Mapa: ${office.title}`}
        src={src}
        className="h-52 w-full max-w-full rounded-xl border border-border bg-muted"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
      <p className="mt-2 text-xs text-muted-foreground">
        {office.addressLines.join(" · ")}
      </p>
    </div>
  );
};

export default OfficeEmbedMap;
