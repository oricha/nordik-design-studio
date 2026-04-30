import { motion } from "framer-motion";
import { statistics } from "@/data/about";

export function StatisticsSection() {
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
    <section className="section-padding bg-gradient-to-b from-background to-primary/5">
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
            Nuestro Impacto
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Números que reflejan nuestro compromiso con la excelencia y satisfacción del cliente
          </p>
        </motion.div>

        {/* Statistics Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {statistics.map((stat) => {
            const IconComponent = stat.icon;
            return (
              <motion.div
                key={stat.label}
                variants={itemVariants}
                className="text-center p-8 rounded-lg border border-gray-200 hover:border-accent hover:shadow-lg transition-all duration-300 group"
              >
                <div className="flex justify-center mb-4">
                  <div className="p-4 rounded-full bg-accent/10 group-hover:bg-accent/20 transition-colors">
                    <IconComponent className="w-8 h-8 text-accent" />
                  </div>
                </div>

                <h3 className="text-4xl md:text-5xl font-bold text-accent mb-2">
                  {stat.value}
                </h3>

                <p className="text-lg font-semibold text-foreground mb-2">
                  {stat.label}
                </p>

                <p className="text-sm text-muted-foreground">
                  {stat.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
