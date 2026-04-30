import { useState } from "react";
import { motion } from "framer-motion";
import { Calendar, Hammer, Truck, Home, Paintbrush, CheckCircle } from "lucide-react";
import { Timeline, calculateTotalDuration } from "@/data/projectTimelines";

interface ConstructionTimelineProps {
  timeline: Timeline;
}

const phaseIcons: Record<string, React.ReactNode> = {
  "Diseño": <Calendar className="w-6 h-6" />,
  "Diseño y Personalización": <Calendar className="w-6 h-6" />,
  "Diseño Personalizado": <Calendar className="w-6 h-6" />,
  "Diseño de Reforma": <Calendar className="w-6 h-6" />,
  "Diseño y Especificaciones": <Calendar className="w-6 h-6" />,
  "Consultoría Inicial": <Calendar className="w-6 h-6" />,
  "Valoración Estructural": <Calendar className="w-6 h-6" />,
  "Fabricación": <Hammer className="w-6 h-6" />,
  "Fabricación de Paneles SIP": <Hammer className="w-6 h-6" />,
  "Fabricación en Fábrica": <Hammer className="w-6 h-6" />,
  "Fabricación de Componentes": <Hammer className="w-6 h-6" />,
  "Producción de Materiales": <Hammer className="w-6 h-6" />,
  "Logística y Transporte": <Truck className="w-6 h-6" />,
  "Transporte": <Truck className="w-6 h-6" />,
  "Preparación y Logística": <Truck className="w-6 h-6" />,
  "Envío": <Truck className="w-6 h-6" />,
  "Empaque y Logística": <Truck className="w-6 h-6" />,
  "Entrega": <Truck className="w-6 h-6" />,
  "Instalación y Montaje": <Home className="w-6 h-6" />,
  "Preparación del Terreno": <Home className="w-6 h-6" />,
  "Montaje Estructural": <Home className="w-6 h-6" />,
  "Construcción en Sitio": <Home className="w-6 h-6" />,
  "Instalación": <Home className="w-6 h-6" />,
  "Montaje": <Home className="w-6 h-6" />,
  "Demolición Selectiva": <Home className="w-6 h-6" />,
  "Instalación Nueva Estructura": <Home className="w-6 h-6" />,
  "Preparación del Sitio": <Home className="w-6 h-6" />,
  "Integración Estructural": <Home className="w-6 h-6" />,
  "Acabados y Finishing": <Paintbrush className="w-6 h-6" />,
  "Acabados": <Paintbrush className="w-6 h-6" />,
  "Acabados y Entrega": <Paintbrush className="w-6 h-6" />,
  "Acabados Finales": <Paintbrush className="w-6 h-6" />,
  "Acabados e Inspección": <Paintbrush className="w-6 h-6" />,
  "Terminación": <Paintbrush className="w-6 h-6" />,
  "Instalaciones MEP": <Paintbrush className="w-6 h-6" />,
  "Sistemas e Interiores": <Paintbrush className="w-6 h-6" />,
  "Sistemas Inteligentes": <Paintbrush className="w-6 h-6" />,
  "Finalización": <CheckCircle className="w-6 h-6" />,
};

const ConstructionTimeline = ({ timeline }: ConstructionTimelineProps) => {
  const [withCustomization, setWithCustomization] = useState(false);
  const totalDuration = calculateTotalDuration(timeline, withCustomization);

  return (
    <section className="section-padding bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-foreground">Timeline de Construcción</h2>
            <div className="flex items-center gap-4">
              <label className="flex items-center gap-3 cursor-pointer">
                <input
                  type="checkbox"
                  checked={withCustomization}
                  onChange={(e) => setWithCustomization(e.target.checked)}
                  className="w-5 h-5 rounded accent-accent"
                />
                <span className="text-sm font-medium text-foreground">Incluir Customización</span>
              </label>
            </div>
          </div>

          {/* Total Duration */}
          <div className="mb-8 p-4 bg-background rounded-lg border border-border">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-muted-foreground mb-1">Duración Total</p>
                <p className="text-2xl font-bold text-accent">{totalDuration} semanas</p>
              </div>
              <div className="text-right">
                <p className="text-sm text-muted-foreground mb-1">Aproximadamente</p>
                <p className="text-lg font-semibold text-foreground">
                  {Math.ceil(totalDuration / 4)} meses
                </p>
              </div>
            </div>
          </div>

          {/* Timeline */}
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent to-accent/30" />

            {/* Phases */}
            <div className="space-y-8">
              {timeline.phases.map((phase, idx) => {
                const duration = withCustomization
                  ? phase.durationWeeks + phase.customizationWeeks
                  : phase.durationWeeks;

                return (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: idx * 0.1 }}
                    className="relative pl-24"
                  >
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-2 w-16 h-16 bg-background border-4 border-accent rounded-full flex items-center justify-center text-accent">
                      {phaseIcons[phase.name] || <Calendar className="w-6 h-6" />}
                    </div>

                    {/* Phase card */}
                    <div className="bg-background p-6 rounded-lg border border-border hover:border-accent/50 transition-colors">
                      <div className="flex items-start justify-between mb-3">
                        <h3 className="text-lg font-semibold text-foreground">{phase.name}</h3>
                        <div className="text-right">
                          <p className="text-sm text-muted-foreground">Duración</p>
                          <p className="text-lg font-bold text-accent">{duration} sem</p>
                          {withCustomization && phase.customizationWeeks > 0 && (
                            <p className="text-xs text-muted-foreground mt-1">
                              (+{phase.customizationWeeks} customización)
                            </p>
                          )}
                        </div>
                      </div>
                      <p className="text-muted-foreground text-sm">{phase.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            {/* Final marker */}
            <motion.div
              initial={{ opacity: 0, scale: 0 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: timeline.phases.length * 0.1 }}
              className="absolute left-0 top-full -translate-y-8 w-16 h-16 bg-accent rounded-full flex items-center justify-center text-white shadow-lg"
            >
              <CheckCircle className="w-8 h-8" />
            </motion.div>
          </div>

          {/* Notes */}
          <div className="mt-16 p-4 bg-background rounded-lg border border-border">
            <p className="text-sm text-muted-foreground">
              <span className="font-semibold text-foreground">Nota:</span> Los tiempos estimados pueden variar según condiciones climáticas, disponibilidad de materiales y cambios en el diseño. Consulta con nuestro equipo para un cronograma exacto.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ConstructionTimeline;
