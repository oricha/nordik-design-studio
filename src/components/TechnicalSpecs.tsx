import { motion } from "framer-motion";
import { Layers, Home, Palette, Zap, Award } from "lucide-react";
import { TechnicalSpecs } from "@/data/projectTechnicalSpecs";

interface TechnicalSpecsProps {
  specs: TechnicalSpecs;
}

const SpecsSection = ({
  icon: Icon,
  title,
  items,
}: {
  icon: React.ReactNode;
  title: string;
  items: string[] | Record<string, string | number>;
}) => {
  const isArray = Array.isArray(items);

  return (
    <div className="bg-background p-6 rounded-lg border border-border">
      <div className="flex items-center gap-3 mb-4">
        {Icon}
        <h3 className="font-semibold text-foreground text-lg">{title}</h3>
      </div>
      <ul className="space-y-2">
        {isArray ? (
          (items as string[]).map((item, idx) => (
            <li key={idx} className="text-sm text-muted-foreground flex items-start gap-2">
              <span className="text-accent mt-1">•</span>
              <span>{item}</span>
            </li>
          ))
        ) : (
          Object.entries(items as Record<string, string | number>).map(([key, value]) => (
            <li key={key} className="text-sm text-muted-foreground">
              <span className="font-medium text-foreground capitalize">{key}:</span> {value}
            </li>
          ))
        )}
      </ul>
    </div>
  );
};

const TechnicalSpecsComponent = ({ specs }: TechnicalSpecsProps) => {
  return (
    <section className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-foreground mb-8">Especificaciones Técnicas</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* SIP Panel */}
            <SpecsSection
              icon={<Layers className="w-6 h-6 text-accent" />}
              title="Paneles SIP"
              items={{
                Espesor: `${specs.sipPanel.thickness} cm`,
                "R-Value": `${specs.sipPanel.rValue} m²K/W`,
              }}
            />

            {/* Quantity */}
            <SpecsSection
              icon={<Home className="w-6 h-6 text-accent" />}
              title="Cantidad"
              items={{
                Dormitorios: specs.quantity.bedrooms,
                Baños: specs.quantity.bathrooms,
                "Área Útil": `${specs.quantity.area} m²`,
              }}
            />

            {/* Finishes */}
            <SpecsSection
              icon={<Palette className="w-6 h-6 text-accent" />}
              title="Acabados Incluidos"
              items={{
                Techo: specs.finishes.roof,
                Piso: specs.finishes.floor,
                Pintura: specs.finishes.paint,
                Puertas: specs.finishes.doors,
              }}
            />

            {/* Customization */}
            <SpecsSection
              icon={<Zap className="w-6 h-6 text-accent" />}
              title="Opciones de Personalización"
              items={specs.customization}
            />

            {/* Certifications */}
            <SpecsSection
              icon={<Award className="w-6 h-6 text-accent" />}
              title="Certificaciones"
              items={specs.certifications}
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default TechnicalSpecsComponent;
