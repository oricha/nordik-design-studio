import { motion } from "framer-motion";
import { Home, Layers, Wrench } from "lucide-react";

const services = [
  {
    icon: Home,
    title: "Completely Finished Houses",
    subtitle: "Turnkey Solutions",
    description:
      "Experience stress-free home ownership with our premium turnkey wood-frame houses. From initial Scandinavian design to final interior finishing, we handle every stage of construction. Our A-rated energy-efficient homes are delivered ready for you to move in, combining modern comfort with sustainable architecture.",
  },
  {
    icon: Layers,
    title: "Prefabricated Panels",
    subtitle: "SIP & Material Sales",
    description:
      "Speed up your build with our high-performance SIP (Structural Insulated Panels) and prefabricated wooden components. We supply certified construction materials and precision-cut kits designed for rapid assembly. Ideal for developers and DIY builders looking for superior thermal insulation and structural integrity.",
  },
  {
    icon: Wrench,
    title: "On-site Construction",
    subtitle: "Renovations & Services",
    description:
      "Beyond new builds, we specialize in modern apartment renovations and bespoke on-site construction. Whether you are looking for a Scandinavian-style interior remodel or specialized wooden extensions, our team provides professional craftsmanship using high-quality materials to increase your property's value and efficiency.",
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
            Construction Options
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            From turnkey houses to material supply — we offer flexible solutions for every stage of your project.
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
