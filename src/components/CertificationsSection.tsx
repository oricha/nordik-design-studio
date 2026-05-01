import { motion } from "framer-motion";
import { certificationsByGroup, environmentalImpactBlurb } from "@/data/certifications";
import { CertificationCard } from "./CertificationCard";

export function CertificationsSection() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut",
      },
    },
  };

  const corporate = certificationsByGroup("corporateQuality");
  const environmental = certificationsByGroup("environmentalForestEnergy");

  return (
    <section className="section-padding bg-gradient-to-b from-background to-primary/5">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14 text-center"
        >
          <h2 className="text-3xl font-bold text-foreground md:text-4xl">Certificaciones y sellos</h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            Calidad de gestión, cadena forestal y declaraciones para proyectos eficientes — F2.1.3 y expansión ambiental{" "}
            <span className="whitespace-nowrap">(F2.5.2)</span>.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="mb-14"
        >
          <h3 className="mb-6 text-center text-xl font-semibold text-foreground">Gestión y calidad</h3>
          <div className="mx-auto flex max-w-md justify-center md:max-w-lg">
            {corporate.map((cert) => (
              <motion.div key={cert.id} variants={itemVariants} className="w-full">
                <CertificationCard certification={cert} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 rounded-2xl border border-border bg-muted/30 p-6 md:p-8"
        >
          <h3 className="text-xl font-semibold text-foreground">{environmentalImpactBlurb.title}</h3>
          <p className="mt-2 text-muted-foreground">{environmentalImpactBlurb.lead}</p>
          <ul className="mt-4 list-disc space-y-2 ps-6 text-sm text-muted-foreground">
            {environmentalImpactBlurb.bullets.map((b, i) => (
              <li key={i} className="leading-relaxed">
                {b}
              </li>
            ))}
          </ul>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <h3 className="mb-6 text-center text-xl font-semibold text-foreground">
            Cadena forestal · energía · circularidad declarada
          </h3>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {environmental.map((cert) => (
              <motion.div key={cert.id} variants={itemVariants}>
                <CertificationCard certification={cert} />
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
