import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Location } from "../data/locations";

interface LocationCardProps {
  location: Location;
}

export function LocationCard({ location }: LocationCardProps) {
  return (
    <div className="p-6 border border-gray-200 rounded-lg hover-lift transition-all duration-300">
      <h3 className="text-xl font-semibold text-foreground mb-4">
        {location.city}
      </h3>

      <div className="space-y-4">
        {/* Address */}
        <div className="flex items-start gap-3">
          <MapPin className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm text-muted-foreground">{location.address}</p>
            <p className="text-sm text-muted-foreground">{location.postalCode}</p>
          </div>
        </div>

        {/* Phone */}
        <div className="flex items-center gap-3">
          <Phone className="w-5 h-5 text-accent flex-shrink-0" />
          <a
            href={`tel:${location.phone}`}
            className="text-sm text-accent hover:text-accent/80 transition-colors"
          >
            {location.phone}
          </a>
        </div>

        {/* Email */}
        <div className="flex items-center gap-3">
          <Mail className="w-5 h-5 text-accent flex-shrink-0" />
          <a
            href={`mailto:${location.email}`}
            className="text-sm text-accent hover:text-accent/80 transition-colors"
          >
            {location.email}
          </a>
        </div>

        {/* Opening Hours */}
        <div className="flex items-start gap-3 pt-2 border-t border-gray-100">
          <Clock className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
          <div className="flex-1">
            <p className="text-sm font-medium text-foreground mb-2">
              Horario de Atención:
            </p>
            <div className="space-y-1">
              {location.openingHours.map((hour, index) => (
                <p key={index} className="text-sm text-muted-foreground">
                  {hour.day}: <span className="font-medium">{hour.hours}</span>
                </p>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
