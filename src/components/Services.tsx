import { motion } from "framer-motion";
import { Home, Layers, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Casas Completamente Terminadas",
    subtitle: "Soluciones Llave en Mano",
    description:
      "Experimente la propiedad de una vivienda sin estrés con nuestras casas prémium llave en mano con estructura de madera. Desde el diseño escandinavo inicial hasta los acabados interiores finales, gestionamos cada etapa de la construcción. Nuestras casas energéticamente eficientes con calificación A se entregan listas para mudarse, combinando el confort moderno con la arquitectura sostenible.",
  },
  {
    icon: Layers,
    title: "Paneles Prefabricados",
    subtitle: "Venta de SIP y Materiales",
    description:
      "Acelere su construcción con nuestros SIP (Paneles Estructurales Aislados) de alto rendimiento y componentes de madera prefabricados. Suministramos materiales de construcción certificados y kits cortados con precisión diseñados para un montaje rápido. Ideal para promotores y constructores de bricolaje que buscan un aislamiento térmico y una integridad estructural superiores.",
  },
  {
    icon: Wrench,
    title: "Construcción In Situ",
    subtitle: "Reformas y Servicios",
    description:
      "Más allá de la construcción nueva, nos especializamos en renovaciones modernas de apartamentos y construcciones in situ a medida. Ya sea que busque una remodelación interior de estilo escandinavo o extensiones de madera especializadas, nuestro equipo ofrece una artesanía profesional utilizando materiales de alta calidad para aumentar el valor y la eficiencia de su propiedad.",
  },
];

const Services = () => {
  return (
    <section id="services" className="section-padding bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Opciones de Construcción
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Desde casas llave en mano hasta suministro de materiales — ofrecemos soluciones flexibles para cada etapa de su proyecto.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="bg-background rounded-2xl p-8 hover-lift"
            >
              <div className="w-14 h-14 rounded-xl bg-wood-light flex items-center justify-center mb-6">
                <service.icon className="w-7 h-7 text-wood" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground mb-1">{service.title}</h3>
              <p className="text-sm text-accent font-medium mb-4">{service.subtitle}</p>
              <p className="text-sm text-muted-foreground leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
