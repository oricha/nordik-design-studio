import { motion } from "framer-motion";
import { TreePine, Coins, Zap, Clock, Award, Shield, Play } from "lucide-react";
import videoThumb from "@/assets/video-thumbnail.jpg";

const values = [
  { icon: TreePine, title: "Madera Natural", desc: "Madera escandinava de origen sostenible" },
  { icon: Coins, title: "Precio Asequible", desc: "Precios competitivos sin compromisos" },
  { icon: Zap, title: "Eficiencia Energética", desc: "Rendimiento térmico con calificación A" },
  { icon: Clock, title: "Construcción Rápida", desc: "Ensamblado en semanas, no en meses" },
  { icon: Award, title: "Experiencia Profesional", desc: "Artesanía experta garantizada" },
  { icon: Shield, title: "Garantía", desc: "10 años de garantía estructural" },
];

const WhySection = () => {
  return (
    <section id="why" className="section-padding bg-background">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-foreground mb-12 max-w-lg"
        >
          ¿Por qué los países escandinavos están cambiando a este formato de vivienda?
        </motion.h2>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative rounded-2xl overflow-hidden aspect-video group cursor-pointer"
          >
            <img
              src={videoThumb}
              alt="Scandinavian house construction"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-charcoal/30 flex items-center justify-center group-hover:bg-charcoal/40 transition-colors">
              <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center">
                <Play className="w-6 h-6 text-accent-foreground ml-1" />
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            {values.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col gap-3"
              >
                <div className="w-10 h-10 rounded-lg bg-wood-light flex items-center justify-center">
                  <item.icon className="w-5 h-5 text-wood-dark" />
                </div>
                <h3 className="font-semibold text-foreground">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
