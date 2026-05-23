import { PageHero } from "@/components/PageHero";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-16">
        <PageHero
          eyebrow="Servicios NordiK"
          title="Construcción SIP, ampliaciones y soluciones para promotores"
          description="Elige entre casa llave en mano, ampliación concreta, kit SIP o suministro técnico. Cada vía tiene un alcance distinto y un primer paso claro para presupuestar."
          actions={[
            { label: "Solicitar presupuesto", href: "/contactos" },
            { label: "Ver modelos", href: "/#projects", variant: "secondary" },
          ]}
          stats={[
            { label: "Alcances", value: "4 líneas" },
            { label: "Sistema", value: "SIP" },
            { label: "Soporte", value: "B2C / B2B" },
          ]}
          media={
            <div className="grid grid-cols-[0.8fr_1fr] items-end gap-3 md:gap-4" aria-hidden>
              <img
                src="/images/services/ampliacion4.jpg"
                alt=""
                className="aspect-[4/5] w-full rounded-t-[2rem] object-cover shadow-[0_24px_60px_-34px_hsl(var(--foreground)/0.45)]"
              />
              <img
                src="/images/services/ampliacion1.jpg"
                alt=""
                className="aspect-[4/3] w-full rounded-[2rem] object-cover shadow-[0_24px_60px_-34px_hsl(var(--foreground)/0.45)]"
              />
            </div>
          }
        />

        <Services />
      </main>
    </div>
  );
};

export default ServicesPage;
