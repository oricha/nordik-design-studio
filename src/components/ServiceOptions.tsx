import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, X, Star } from "lucide-react";
import { ServiceOptions, calculateServicePrice } from "@/data/projectServiceOptions";

interface ServiceOptionsProps {
  serviceOptions: ServiceOptions;
}

const ServiceOptionsComponent = ({ serviceOptions }: ServiceOptionsProps) => {
  const [selectedIndex, setSelectedIndex] = useState(1);

  return (
    <section className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-4">Opciones de Servicio</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Elige el nivel de servicio que mejor se adapte a tus necesidades. Desde componentes prefabricados hasta una reforma llave en mano.
            </p>
          </div>

          {/* Service Options Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {serviceOptions.options.map((option, idx) => {
              const calculatedPrice = calculateServicePrice(serviceOptions.basePrice, option.priceMultiplier);

              return (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: idx * 0.1 }}
                  className={`relative rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                    selectedIndex === idx
                      ? "border-primary bg-primary/5 shadow-lg"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setSelectedIndex(idx)}
                >
                  {/* Popular Badge */}
                  {option.popular && (
                    <div className="absolute top-0 right-0 bg-accent text-accent-foreground px-4 py-2 flex items-center gap-1 text-sm font-semibold rounded-bl-lg">
                      <Star className="w-4 h-4" />
                      Popular
                    </div>
                  )}

                  <div className="p-8">
                    {/* Title and Description */}
                    <h3 className="text-2xl font-bold text-foreground mb-2">{option.name}</h3>
                    <p className="text-sm text-muted-foreground mb-6">{option.description}</p>

                    {/* Price */}
                    <div className="mb-8">
                      <p className="text-sm text-muted-foreground">Precio estimado desde</p>
                      <p className="text-4xl font-bold text-accent">
                        €{calculatedPrice.toLocaleString()}
                      </p>
                      {option.priceMultiplier !== 1 && (
                        <p className="text-xs text-muted-foreground mt-2">
                          ({Math.round((option.priceMultiplier - 1) * 100)}% más que solo paneles)
                        </p>
                      )}
                    </div>

                    {/* CTA Button */}
                    <button
                      className={`w-full py-3 rounded-lg font-semibold transition-colors mb-6 ${
                        selectedIndex === idx
                          ? "bg-primary text-primary-foreground hover:bg-primary/90"
                          : "bg-border text-foreground hover:bg-border/80"
                      }`}
                    >
                      Solicitar Cotización
                    </button>

                    {/* Included/Excluded Preview */}
                    <div className="space-y-2 text-sm">
                      <div className="flex items-start gap-2">
                        <Check className="w-4 h-4 text-accent flex-shrink-0 mt-0.5" />
                        <span className="text-foreground font-medium">
                          {option.included.length} servicios incluidos
                        </span>
                      </div>
                      <div className="flex items-start gap-2">
                        <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">
                          {option.excluded.length} servicios no incluidos
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Detailed Comparison */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3 }}
            className="bg-warm-gray rounded-xl p-8"
          >
            <h3 className="text-2xl font-bold text-foreground mb-8">Detalle de la Opción Seleccionada</h3>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Included */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <Check className="w-5 h-5 text-accent" />
                  Incluido en esta opción
                </h4>
                <ul className="space-y-3">
                  {serviceOptions.options[selectedIndex].included.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <Check className="w-4 h-4 text-accent flex-shrink-0 mt-1" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Excluded */}
              <div>
                <h4 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <X className="w-5 h-5 text-muted-foreground" />
                  No incluido en esta opción
                </h4>
                <ul className="space-y-3">
                  {serviceOptions.options[selectedIndex].excluded.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <X className="w-4 h-4 text-muted-foreground flex-shrink-0 mt-1" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-8 flex gap-4">
              <button className="flex-1 bg-primary text-primary-foreground px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors">
                Solicitar Cotización para {serviceOptions.options[selectedIndex].name}
              </button>
              <button className="flex-1 bg-border text-foreground px-8 py-3 rounded-lg font-semibold hover:bg-border/80 transition-colors">
                Comparar Todas las Opciones
              </button>
            </div>
          </motion.div>

          {/* Comparison Table */}
          <div className="mt-12 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 font-semibold text-foreground">Característica</th>
                  {serviceOptions.options.map((option, idx) => (
                    <th
                      key={idx}
                      className={`text-center py-4 px-4 font-semibold ${
                        idx === selectedIndex ? "text-accent" : "text-muted-foreground"
                      }`}
                    >
                      {option.name}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-medium text-foreground">Paneles SIP</td>
                  {serviceOptions.options.map((_, idx) => (
                    <td key={idx} className="text-center py-4 px-4">
                      <Check className="w-5 h-5 text-accent mx-auto" />
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-medium text-foreground">Instalación</td>
                  {serviceOptions.options.map((_, idx) => (
                    <td key={idx} className="text-center py-4 px-4">
                      {idx > 0 ? (
                        <Check className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-medium text-foreground">Acabados</td>
                  {serviceOptions.options.map((_, idx) => (
                    <td key={idx} className="text-center py-4 px-4">
                      {idx > 0 ? (
                        <Check className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-medium text-foreground">Sistemas Inteligentes</td>
                  {serviceOptions.options.map((_, idx) => (
                    <td key={idx} className="text-center py-4 px-4">
                      {idx === 2 ? (
                        <Check className="w-5 h-5 text-accent mx-auto" />
                      ) : (
                        <X className="w-5 h-5 text-muted-foreground mx-auto" />
                      )}
                    </td>
                  ))}
                </tr>
                <tr className="border-b border-border">
                  <td className="py-4 px-4 font-medium text-foreground">Garantía</td>
                  {serviceOptions.options.map((_, idx) => (
                    <td key={idx} className="text-center py-4 px-4 text-foreground">
                      {idx === 0 ? "2 años" : idx === 1 ? "5 años" : "10 años"}
                    </td>
                  ))}
                </tr>
              </tbody>
            </table>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ServiceOptionsComponent;
