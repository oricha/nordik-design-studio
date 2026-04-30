import { motion } from "framer-motion";
import { Timer, Zap, BadgeCheck } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

const highlights = [
  {
    icon: Timer,
    value: "~60 días",
    label: "Plazo orientativo obra modelo SIP",
    description: "Entrega rápida frente a obra tradicional; plazos sujetos a proyecto.",
  },
  {
    icon: Zap,
    value: "Eficiente",
    label: "Energía · paneles SIP",
    description: "Envolventes con alto aislamiento y consumo contenido durante todo el año.",
  },
  {
    icon: BadgeCheck,
    value: "Normativa UE",
    label: "Cumplimiento europeo",
    description: "Especificaciones y documentación compatible con estándares de la UE.",
  },
];

const Hero = () => {
  return (
    <section className="relative flex min-h-screen items-end overflow-hidden pb-20 pt-32">
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal/90 via-charcoal/40 to-charcoal/15" />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="mb-14 max-w-3xl lg:max-w-4xl"
        >
          <p className="mb-4 inline-flex rounded-full bg-primary-foreground/15 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-primary-foreground backdrop-blur-sm">
            Paneles SIP · Casas prefabricadas · Reformas escandinavas
          </p>
          <h1 className="mb-5 text-balance text-4xl font-bold leading-tight text-primary-foreground md:text-5xl lg:text-[3.35rem]">
            Casas nórdicas SIP con montaje rápido, eficiencia energética y marco técnico europeo
          </h1>
          <p className="mb-3 max-w-2xl text-pretty text-lg text-primary-foreground/90 md:text-xl">
            Presupuesto claro desde el briefing: cerramos proyectos modelo en plazos muy inferiores
            a la obra húmeda tradicional (~60 días objetivo para diseños SIP estándar).
          </p>
          <p className="mb-8 max-w-xl text-primary-foreground/75">
            Aislamiento certificado SIP, menor consumo térmico y documentación lista para obra en toda la Unión Europea.
          </p>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="#contact"
              className="inline-flex justify-center rounded-lg bg-accent px-7 py-3.5 text-center text-base font-semibold text-accent-foreground shadow-[0_8px_40px_rgba(0,0,0,.2)] hover:opacity-[0.93] hover:brightness-105 transition-all"
            >
              Solicitar presupuesto
            </a>
            <a
              href="#projects"
              className="inline-flex justify-center rounded-lg border-2 border-primary-foreground/40 bg-primary-foreground/5 px-7 py-3.5 text-center text-base font-semibold text-primary-foreground backdrop-blur-sm hover:bg-primary-foreground/12 transition-colors"
            >
              Explorar proyectos
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {highlights.map((item, i) => (
            <motion.div
              key={item.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.35 + i * 0.12 }}
              className="glass-card flex gap-4 rounded-xl p-5 md:flex-col md:items-start"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                <item.icon className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold uppercase tracking-wide text-accent">{item.value}</div>
                <div className="mt-1 text-lg font-bold text-foreground">{item.label}</div>
                <p className="mt-2 text-xs leading-snug text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
