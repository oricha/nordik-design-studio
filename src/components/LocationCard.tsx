import { Clock, Mail, MapPin, Phone } from "lucide-react";
import type { Location } from "@/data/locations";
import OfficeEmbedMap from "@/components/OfficeEmbedMap";
import { isOfficeOpen } from "@/utils/isOfficeOpen";

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  const openNow = isOfficeOpen(location.timezone, location.openHour, location.closeHour);

  return (
    <div className="rounded-2xl border border-border bg-background p-6 shadow-sm transition-all duration-300">
      <div className="mb-4 flex flex-wrap items-center justify-between gap-3">
        <h3 className="text-xl font-semibold text-foreground">{location.title}</h3>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${
            openNow ? "bg-green-100 text-green-800" : "bg-slate-100 text-slate-600"
          }`}
        >
          <span className={`h-1.5 w-1.5 rounded-full ${openNow ? "bg-green-500 animate-pulse" : "bg-slate-400"}`} />
          {openNow ? "Abierto ahora" : "Cerrado"}
        </span>
      </div>

      <div className="space-y-4">
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">{location.address}</p>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-accent flex-shrink-0" />
          <a
            href={`tel:${location.phoneHref}`}
            className="text-sm text-accent hover:text-accent/80 transition-colors"
          >
            {location.phone}
          </a>
        </div>

        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-accent flex-shrink-0" />
          <a
            href={`mailto:${location.email}`}
            className="text-sm text-accent hover:text-accent/80 transition-colors"
          >
            {location.email}
          </a>
        </div>

        <div className="flex items-start gap-3 border-t border-border pt-2">
          <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground mb-1">Horario de Atención</p>
            <p className="text-sm text-muted-foreground">{location.hoursLabel}</p>
            <p className="mt-1 text-xs text-muted-foreground">{location.timezone}</p>
          </div>
        </div>

        <OfficeEmbedMap office={location} className="pt-2" />
      </div>
    </div>
  );
}
