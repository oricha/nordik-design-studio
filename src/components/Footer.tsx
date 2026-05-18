import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import { siteContact, whatsappConversationHref } from "@/data/siteContact";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-4 gap-10">
          <div className="md:col-span-2">
            <h3 className="text-2xl font-bold mb-4">
              Nordi<span className="text-accent">K</span>
            </h3>
            <p className="text-primary-foreground/70 text-sm leading-relaxed max-w-sm">
              Casas nórdicas prémium con estructura de madera, diseñadas para la sostenibilidad, el confort y la vida moderna. Construyendo el futuro con la naturaleza.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Enlaces Rápidos</h4>
            <nav className="flex flex-col gap-2 text-sm text-primary-foreground/70">
              <a href="/#projects" className="hover:text-primary-foreground transition-colors">Proyectos</a>
              <a href="/servicios" className="hover:text-primary-foreground transition-colors">Opciones de Construcción</a>
              <a href="/servicios#services-b2c" className="hover:text-primary-foreground transition-colors">Particulares</a>
              <a href="/servicios#services-b2b" className="hover:text-primary-foreground transition-colors">Empresas y SIP</a>
              <a href="/testimonios" className="hover:text-primary-foreground transition-colors">Testimonios</a>
              <a href="/casos" className="hover:text-primary-foreground transition-colors">Casos de estudio</a>
              <a href="/why" className="hover:text-primary-foreground transition-colors">Por qué NordiK</a>
              <a href="/#gallery" className="hover:text-primary-foreground transition-colors">Galería</a>
              <a href="/faq" className="hover:text-primary-foreground transition-colors">FAQ NordiK</a>
              <a href="/contactos" className="hover:text-primary-foreground transition-colors">Agendar consulta</a>
            </nav>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contacto</h4>
            <div className="flex flex-col gap-3 text-sm text-primary-foreground/70">
              <span className="flex items-center gap-2">
                <MapPin className="w-4 h-4 shrink-0" aria-hidden />
                {siteContact.locationLine}
              </span>
              <a href={`tel:${siteContact.phoneHref}`} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Phone className="w-4 h-4 shrink-0" aria-hidden />
                {siteContact.phoneDisplay}{" "}
                <span className="text-primary-foreground/50">· Barcelona HQ</span>
              </a>
              <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs text-primary-foreground/75">
                {siteContact.offices
                  .filter((o) => o.id !== "helsinki")
                  .map((o) => (
                    <a key={o.id} href={`tel:${o.phoneHref}`} className="hover:text-primary-foreground">
                      {o.phoneDisplay}
                    </a>
                  ))}
                {siteContact.regionalDialIn.map((r) => (
                  <a key={r.region} href={`tel:${r.phoneHref}`} className="hover:text-primary-foreground">
                    {r.phoneDisplay}{" "}
                    <span className="text-primary-foreground/50">({r.region})</span>
                  </a>
                ))}
              </div>
              <a
                href={whatsappConversationHref()}
                target="_blank"
                rel="noopener noreferrer"
                className="flex w-fit items-center gap-2 text-xs font-medium hover:text-primary-foreground"
              >
                <MessageCircle className="h-3.5 w-3.5 shrink-0" aria-hidden />
                {siteContact.whatsapp.label}
              </a>
              <a href={`mailto:${siteContact.emailHref}`} className="flex items-center gap-2 hover:text-primary-foreground transition-colors">
                <Mail className="w-4 h-4 shrink-0" aria-hidden />
                {siteContact.emailDisplay}
              </a>
              <span className="block text-xs text-primary-foreground/60">{siteContact.hoursLong}</span>
            </div>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 mt-12 pt-6 text-center text-sm text-primary-foreground/50">
          © 2026 NordiK. Todos los derechos reservados.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
