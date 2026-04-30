import { motion } from "framer-motion";

export function AboutHero() {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center bg-gradient-to-br from-primary/10 via-background to-accent/5 overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-4xl mx-auto px-4 py-20 text-center">
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-6xl font-bold text-foreground mb-6"
        >
          Sobre Nosotros
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xl md:text-2xl text-muted-foreground mb-8"
        >
          La historia de NordiK: Trayendo la arquitectura escandinava a España
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto"
        >
          <p className="text-lg text-muted-foreground leading-relaxed">
            Desde nuestros inicios, NordiK ha estado comprometida con llevar las mejores prácticas de construcción escandinava a España. Con más de 5 años de experiencia y 240+ proyectos completados, nos hemos convertido en referentes en la construcción de viviendas modernas, sostenibles y de alta calidad.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
