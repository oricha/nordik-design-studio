import ContactSection from "@/components/ContactSection";
import { LocationsSection } from "@/components/LocationsSection";
import { PageHero } from "@/components/PageHero";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-16">
        <PageHero
          eyebrow="Contacto comercial"
          title="Cuéntanos dónde quieres construir y qué alcance necesitas"
          description="Habla con el equipo NordiK sobre casas prefabricadas, paneles SIP, reformas y opciones de implantación. Te responderemos con siguiente paso, documentación útil y referencia de seguimiento."
          stats={[
            { label: "Respuesta", value: "24-48 h" },
            { label: "Canales", value: "Email / Teléfono" },
            { label: "Oficinas", value: "Barcelona + red" },
          ]}
        />

        <ContactSection />
        <LocationsSection />
      </main>
    </div>
  );
};

export default ContactPage;
