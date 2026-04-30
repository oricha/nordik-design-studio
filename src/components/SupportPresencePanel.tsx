import { Building2, MessageCircle, Phone } from "lucide-react";
import { siteContact, type OfficeLocation } from "@/data/siteContact";
import { isWeekdayBusinessOpen } from "@/utils/businessHours";
import OfficeEmbedMap from "@/components/OfficeEmbedMap";

const OpenBadge = ({ office }: { office: OfficeLocation }) => {
  const open = isWeekdayBusinessOpen(
    new Date(),
    office.timeZone,
    office.weekdayOpen,
    office.weekdayClose,
  );
  return (
    <span
      className={`inline-flex items-center rounded-full px-2 py-0.5 text-[0.65rem] font-semibold uppercase tracking-wide ${
        open ? "bg-emerald-500/15 text-emerald-700" : "bg-muted text-muted-foreground"
      }`}
    >
      {open ? "Abierto ahora" : "Fuera de horario"}
    </span>
  );
};

/** Teléfonos por región, horarios claros por sede y mapas (F1.5.2, F1.5.3, F1.5.5). */
const SupportPresencePanel = () => (
  <div className="space-y-12">
    <div id="regional-contact" className="scroll-mt-24 space-y-4">
      <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
        <Phone className="h-5 w-5 text-accent" aria-hidden />
        Teléfonos por país
      </div>
      <p className="text-sm text-muted-foreground">
        Enlaces <span className="font-medium text-foreground">tel:</span> para llamar desde el móvil.
      </p>
      <ul className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
        {siteContact.offices.map((o) => (
          <li key={o.id}>
            <a
              href={`tel:${o.phoneHref}`}
              className="block rounded-xl border border-border bg-background p-4 transition-colors hover:border-accent/40"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{o.title}</span>
              <p className="mt-1 font-semibold text-foreground">{o.phoneDisplay}</p>
            </a>
          </li>
        ))}
        {siteContact.regionalDialIn.map((line) => (
          <li key={line.region}>
            <a
              href={`tel:${line.phoneHref}`}
              className="block rounded-xl border border-border bg-background p-4 transition-colors hover:border-accent/40"
            >
              <span className="text-xs font-medium uppercase tracking-wide text-muted-foreground">{line.region}</span>
              <p className="mt-1 font-semibold text-foreground">{line.phoneDisplay}</p>
            </a>
          </li>
        ))}
      </ul>
      <a
        href={siteContact.whatsapp.href}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 rounded-lg border border-emerald-500/30 bg-emerald-500/10 px-4 py-2 text-sm font-semibold text-emerald-800 hover:bg-emerald-500/15"
      >
        <MessageCircle className="h-4 w-4" aria-hidden />
        {siteContact.whatsapp.label}
      </a>
    </div>

    <div className="space-y-4">
      <div className="flex items-center gap-2 text-lg font-semibold text-foreground">
        <Building2 className="h-5 w-5 text-accent" aria-hidden />
        Horarios y zonas horarias
      </div>
      <ul className="grid gap-4 md:grid-cols-2">
        {siteContact.offices.map((office) => (
          <li key={office.id} className="rounded-xl border border-border bg-background p-5">
            <div className="flex flex-wrap items-center gap-2">
              <h3 className="font-semibold text-foreground">{office.title}</h3>
              <OpenBadge office={office} />
            </div>
            <p className="mt-2 text-sm text-muted-foreground">{office.hoursLabel}</p>
            <p className="mt-1 text-xs text-muted-foreground">{office.timeZone.replace("_", " ")}</p>
            <p className="mt-3 text-sm">
              <a href={`tel:${office.phoneHref}`} className="font-medium underline-offset-4 hover:text-accent hover:underline">
                {office.phoneDisplay}
              </a>
            </p>
            <address className="mt-3 text-sm not-italic text-muted-foreground">
              {office.addressLines.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </address>
          </li>
        ))}
      </ul>
    </div>

    <div id="office-maps" className="scroll-mt-24 space-y-4">
      <h3 className="text-lg font-semibold text-foreground">Mapas de oficinas</h3>
      <p className="text-sm text-muted-foreground">
        Ubicaciones orientativas; pulsa «Cómo llegar» para rutas en Google Maps.
      </p>
      <div className="grid gap-10 md:grid-cols-2">
        {siteContact.offices.map((office) => (
          <OfficeEmbedMap key={office.id} office={{ ...office }} />
        ))}
      </div>
    </div>
  </div>
);

export default SupportPresencePanel;
