import { motion } from "framer-motion";
import { Lightbulb, Wrench, Truck, Hammer, CheckCircle2, Home } from "lucide-react";

const ConstructionProcess = () => {
  const steps = [
    {
      icon: Lightbulb,
      title: "Diseño Personalizado",
      description:
        "Desarrollamos el diseño de acuerdo a tus necesidades específicas, optimizando para máxima eficiencia energética.",
    },
    {
      icon: Wrench,
      title: "Fabricación en Fábrica",
      description:
        "Los paneles SIP se cortan y ensamblan con precisión en fábrica bajo control de calidad riguroso.",
    },
    {
      icon: Truck,
      title: "Logística y Transporte",
      description:
        "Los componentes se empacan protegidamente y se transportan hasta el sitio de construcción.",
    },
    {
      icon: Hammer,
      title: "Montaje Estructural",
      description:
        "La estructura se monta rápidamente en el terreno, con cimentación completa en solo días.",
    },
    {
      icon: CheckCircle2,
      title: "Sistemas e Instalaciones",
      description:
        "Se instalan sistemas eléctricos, plomería, climatización y todas las instalaciones requeridas.",
    },
    {
      icon: Home,
      title: "Acabados y Entrega",
      description:
        "Se completan los acabados interiores, pintura y detalles finales. Inspección y entrega llave en mano.",
    },
  ];

  return (
    <section className="section-padding bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Proceso Constructivo SIP</h2>
            <p className="text-muted-foreground max-x-2xl mx-auto">
              Conoce paso a paso cómo construimos tus casas con paneles SIP, desde el diseño hasta la entrega final.
            </p>
          </div>

          {/* Process Steps */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className="relative"
                >
                  {/* Step number background */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 bg-accent text-white rounded-full flex items-center justify-center font-bold text-lg shadow-lg">
                    {idx + 1}
                  </div>

                  {/* Content card */}
                  <div className="bg-background p-6 rounded-lg border border-border h-full pt-8">
                    <div className="text-accent mb-4">
                      <Icon className="w-8 h-8" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-3">{step.title}</h3>
                    <p className="text-sm text-muted-foreground">{step.description}</p>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Why SIP Section */}
          <div className="bg-background rounded-lg border border-border p-8 mb-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">¿Por qué SIP es Diferente?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-4xl font-bold text-accent mb-2">70%</p>
                <p className="font-semibold text-foreground mb-2">Más Rápido</p>
                <p className="text-sm text-muted-foreground">
                  La fabricación en fábrica + montaje rápido reduce 60-70% del tiempo de construcción.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.1 }}
              >
                <p className="text-4xl font-bold text-accent mb-2">40%</p>
                <p className="font-semibold text-foreground mb-2">Menor Costo</p>
                <p className="text-sm text-muted-foreground">
                  Menos mano de obra, menor desperdicio y eficiencia operativa reducen costos significativamente.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: 0.2 }}
              >
                <p className="text-4xl font-bold text-accent mb-2">100%</p>
                <p className="font-semibold text-foreground mb-2">Control de Calidad</p>
                <p className="text-sm text-muted-foreground">
                  Producción en fábrica garantiza estándares consistentes y tolerancias precisas.
                </p>
              </motion.div>
            </div>
          </div>

          {/* Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-6">SIP vs Construcción Tradicional</h3>
            <div className="overflow-x-auto bg-background rounded-lg border border-border">
              <table className="w-full">
                <thead>
                  <tr className="border-b border-border bg-warm-gray">
                    <th className="text-left p-4 font-semibold text-foreground">Aspecto</th>
                    <th className="text-center p-4 font-semibold text-accent">Paneles SIP</th>
                    <th className="text-center p-4 font-semibold text-muted-foreground">Construcción Tradicional</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-border hover:bg-warm-gray transition-colors">
                    <td className="p-4 font-medium text-foreground">Tiempo de Construcción</td>
                    <td className="p-4 text-center text-accent font-semibold">4-6 meses</td>
                    <td className="p-4 text-center text-muted-foreground">8-12 meses</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-warm-gray transition-colors">
                    <td className="p-4 font-medium text-foreground">Costo Total Aproximado</td>
                    <td className="p-4 text-center text-accent font-semibold">€1.200-1.400/m²</td>
                    <td className="p-4 text-center text-muted-foreground">€1.600-2.000/m²</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-warm-gray transition-colors">
                    <td className="p-4 font-medium text-foreground">Eficiencia Energética</td>
                    <td className="p-4 text-center text-accent font-semibold">A+ / Pasiva</td>
                    <td className="p-4 text-center text-muted-foreground">B / C típica</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-warm-gray transition-colors">
                    <td className="p-4 font-medium text-foreground">Desperdicio de Materiales</td>
                    <td className="p-4 text-center text-accent font-semibold">5-10%</td>
                    <td className="p-4 text-center text-muted-foreground">20-30%</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-warm-gray transition-colors">
                    <td className="p-4 font-medium text-foreground">Durabilidad</td>
                    <td className="p-4 text-center text-accent font-semibold">50+ años</td>
                    <td className="p-4 text-center text-muted-foreground">30-40 años típica</td>
                  </tr>
                  <tr className="border-b border-border hover:bg-warm-gray transition-colors">
                    <td className="p-4 font-medium text-foreground">Impacto Ambiental</td>
                    <td className="p-4 text-center text-accent font-semibold">Bajo / Madera Certificada</td>
                    <td className="p-4 text-center text-muted-foreground">Moderado / Alto</td>
                  </tr>
                  <tr className="hover:bg-warm-gray transition-colors">
                    <td className="p-4 font-medium text-foreground">Control de Calidad</td>
                    <td className="p-4 text-center text-accent font-semibold">Fábrica / Certificado</td>
                    <td className="p-4 text-center text-muted-foreground">En sitio / Variable</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </motion.div>

          {/* Key Advantages */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-accent/10 p-6 rounded-lg border border-accent/20"
            >
              <h4 className="font-semibold text-foreground mb-3">✓ Ventajas de SIP</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Construcción 60-70% más rápida</li>
                <li>• Menor costo total de proyecto</li>
                <li>• Máxima eficiencia energética (ahorro 70%)</li>
                <li>• Menos residuos y más sostenible</li>
                <li>• Mejor aislamiento acústico</li>
                <li>• Mayor durabilidad y resistencia</li>
                <li>• Flexibilidad de diseño</li>
                <li>• Mejor control de calidad</li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3 }}
              className="bg-muted/30 p-6 rounded-lg border border-muted/20"
            >
              <h4 className="font-semibold text-foreground mb-3">⊘ Limitaciones Tradicionales</h4>
              <ul className="space-y-2 text-sm text-foreground">
                <li>• Construcción lenta y dependiente del clima</li>
                <li>• Mayor gasto en mano de obra</li>
                <li>• Eficiencia energética limitada</li>
                <li>• Desperdicio de materiales elevado</li>
                <li>• Mayor contaminación acústica</li>
                <li>• Durabilidad limitada en tiempo</li>
                <li>• Diseños estandarizados</li>
                <li>• Control de calidad variable</li>
              </ul>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConstructionProcess;
