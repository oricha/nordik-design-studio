import { motion } from "framer-motion";
import { Award, Users, Building2 } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

const stats = [
  { icon: Award, value: "5+", label: "Years of Experience" },
  { icon: Users, value: "100%", label: "Client Satisfaction" },
  { icon: Building2, value: "240+", label: "Projects Delivered" },
];

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-end pb-20 pt-32 overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/30 to-charcoal/10" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-2xl mb-16"
        >
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6">
            Modern and high-quality wood frame houses
          </h1>
          <p className="text-lg text-primary-foreground/80 mb-8 max-w-lg">
            Sustainable, energy-efficient living engineered for the future.
          </p>
          <div className="flex gap-4">
            <a
              href="#projects"
              className="bg-accent text-accent-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity"
            >
              View Projects
            </a>
            <a
              href="#contact"
              className="border border-primary-foreground/30 text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary-foreground/10 transition-colors"
            >
              Get a Quote
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.15 }}
              className="glass-card rounded-xl p-6 flex items-center gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-accent/20 flex items-center justify-center">
                <stat.icon className="w-6 h-6 text-accent" />
              </div>
              <div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
