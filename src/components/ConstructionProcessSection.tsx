import { motion } from "framer-motion";
import { constructionSteps } from "@/data/constructionProcess";
import { ConstructionStepCard } from "./ConstructionStepCard";

export function ConstructionProcessSection() {
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
    <section className="section-padding bg-gradient-to-b from-primary/5 via-background to-background">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Nuestro Proceso Constructivo
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-6">
            Proceso transparente y detallado que explica cómo construimos tus
            sueños con precisión, calidad y profesionalismo
          </p>
          <div className="inline-block px-6 py-3 rounded-full bg-accent/10 text-accent font-semibold">
            Cronograma total: 3-5 meses
          </div>
        </motion.div>

        {/* Steps Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {constructionSteps.map((step) => (
            <motion.div key={step.id} variants={itemVariants}>
              <ConstructionStepCard step={step} />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
