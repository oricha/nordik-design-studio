import { motion } from "framer-motion";
import Services from "@/components/Services";

const ServicesPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <main className="pb-16 pt-20 md:pt-24">
        <section className="overflow-hidden border-b border-border bg-warm-gray/70">
          <div className="mx-auto grid max-w-7xl gap-10 px-6 py-14 md:grid-cols-[1.05fr_0.95fr] md:items-end md:px-12 md:py-20 lg:px-20">
            <div>
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                className="mb-4 text-xs font-semibold uppercase tracking-[0.28em] text-accent"
              >
                Servicios NordiK
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.04 }}
                className="max-w-3xl text-balance text-4xl font-semibold tracking-tight text-foreground md:text-6xl md:leading-[1.02]"
              >
                Construcción SIP, ampliaciones y soluciones para promotores
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="mt-6 max-w-2xl text-lg leading-relaxed text-muted-foreground"
              >
                Elige entre casa llave en mano, ampliación concreta, kit SIP o suministro técnico.
                Cada vía tiene un alcance distinto y un primer paso claro para presupuestar.
              </motion.p>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.65, delay: 0.14 }}
              className="grid grid-cols-[0.8fr_1fr] items-end gap-3 md:gap-4"
              aria-hidden
            >
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
            </motion.div>
          </div>
        </section>

        <Services />
      </main>
    </div>
  );
};

export default ServicesPage;
