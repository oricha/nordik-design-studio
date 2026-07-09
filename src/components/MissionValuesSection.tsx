import { motion } from "framer-motion";
import { companyMission, values } from "@/data/about";

export function MissionValuesSection() {
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
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          {/* Mission & Vision */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true, margin: "-100px" }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
              Nuestra Misión y Visión
            </h2>

            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Misión
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {companyMission.statement}
                </p>
              </div>

              <div>
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  Visión
                </h3>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  {companyMission.visionParagraphs.map((paragraph, i) => (
                    <p key={i}>{paragraph}</p>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Values Grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 gap-6 md:grid-cols-3"
          >
            {values.map((value) => {
              const IconComponent = value.icon;
              return (
                <motion.div
                  key={value.id}
                  variants={itemVariants}
                  className="p-6 border border-border rounded-lg hover:border-accent hover:shadow-lg transition-all duration-300"
                >
                  <IconComponent className="w-8 h-8 text-accent mb-3" />
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {value.title}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
