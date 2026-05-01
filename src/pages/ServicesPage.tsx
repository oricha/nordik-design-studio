import { motion } from "framer-motion";
import Services from "@/components/Services";

const ServicesPage = () => {
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
              Servicios
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.08 }}
              className="mt-5 max-w-3xl text-lg leading-relaxed text-muted-foreground"
            >
              Descubre cómo NordiK estructura sus servicios para particulares, promotores y equipos
              profesionales: casas llave en mano, paneles SIP, kits de envolvente y reformas con
              enfoque escandinavo.
            </motion.p>
          </div>
        </section>

        <Services />
      </main>
    </div>
  );
};

export default ServicesPage;
