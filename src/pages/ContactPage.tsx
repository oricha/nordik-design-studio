import { motion } from "framer-motion";
import ContactSection from "@/components/ContactSection";
import { LocationsSection } from "@/components/LocationsSection";

const ContactPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-16 pt-20 md:pt-24">
        <section className="border-b border-border bg-warm-gray/70">
          <div className="mx-auto max-w-6xl px-6 py-14 md:py-20">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.16]"
            >
              Contactos
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground"
            >
              Habla con el equipo NordiK sobre casas prefabricadas, paneles SIP, reformas y opciones
              de implantación. Mantuvimos el mismo lenguaje visual del sitio para que esta página encaje
              con el resto de la experiencia.
            </motion.p>
          </div>
        </section>

        <ContactSection />
        <LocationsSection />
      </main>
    </div>
  );
};

export default ContactPage;
