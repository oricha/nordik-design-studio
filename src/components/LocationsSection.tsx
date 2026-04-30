import { motion } from "framer-motion";
import { locations } from "../data/locations";
import { LocationCard } from "./LocationCard";

export function LocationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section id="locations" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold text-foreground mb-4">
            Nuestras Oficinas
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Contamos con oficinas en Madrid y Barcelona para atender mejor tus
            necesidades. Visítanos o contacta con nuestro equipo en la ubicación
            más cercana.
          </p>
        </motion.div>

        {/* Locations Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-2 gap-8"
        >
          {locations.map((location) => (
            <motion.div key={location.id} variants={itemVariants}>
              <LocationCard location={location} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
