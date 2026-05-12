import { Clock, Mail, MessageCircle, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import { siteContact, whatsappConversationHref } from "@/data/siteContact";

const TrustBar = () => {
  return (
    <section className="border-y border-border bg-card/70">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-6 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <p className="text-sm font-semibold text-foreground md:text-base">
            Cuéntanos dónde quieres construir y te orientamos sin compromiso
          </p>
          <p className="text-xs leading-relaxed text-muted-foreground">
            España · Portugal · Francia — consultar disponibilidad por región, según proyecto.
          </p>
        </div>

        <div className="flex flex-col gap-3 text-sm sm:flex-row sm:flex-wrap sm:items-center sm:gap-4">
          <a
            href={`tel:${siteContact.phoneHref}`}
            className="inline-flex items-center gap-1.5 font-semibold text-foreground transition-colors hover:text-accent"
          >
            <Phone className="h-4 w-4 text-accent" aria-hidden />
            {siteContact.phoneDisplay}
          </a>
          <a
            href={`mailto:${siteContact.emailHref}`}
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="h-4 w-4" aria-hidden />
            {siteContact.emailDisplay}
          </a>
          <a
            href={whatsappConversationHref()}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-muted-foreground transition-colors hover:text-foreground"
          >
            <MessageCircle className="h-4 w-4" aria-hidden />
            WhatsApp
          </a>
          <span className="inline-flex items-center gap-1.5 text-muted-foreground">
            <Clock className="h-4 w-4" aria-hidden />
            {siteContact.hoursShort}
          </span>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <a
            href={`tel:${siteContact.phoneHref}`}
            className="inline-flex items-center justify-center rounded-lg border border-border px-4 py-2 text-sm font-semibold text-foreground transition-colors hover:border-accent/50"
          >
            📞 Llamar
          </a>
          <Link
            to="/contactos"
            className="inline-flex items-center justify-center rounded-lg bg-accent px-4 py-2 text-sm font-semibold text-accent-foreground transition-opacity hover:opacity-95"
          >
            Solicitar presupuesto
          </Link>
        </div>
      </div>
    </section>
  );
};

export default TrustBar;
