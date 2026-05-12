import { motion } from "framer-motion";
import { Timer, Zap, BadgeCheck } from "lucide-react";
import heroImage from "@/assets/hero-house.jpg";

const highlights = [
  {
    icon: Timer,
    value: "~60 días",
    label: "Fabricación rápida",
    description: "Plazos muy inferiores a la obra húmeda tradicional, sujetos a proyecto y diseño.",
  },
  {
    icon: Zap,
    value: "Eficiencia A",
    label: "Ahorro energético real",
    description: "Paneles SIP de alto aislamiento: menor consumo térmico durante todo el año.",
  },
  {
    icon: BadgeCheck,
    value: "Normativa UE",
    label: "Documentación lista para obra",
    description: "Especificaciones y documentación técnica compatible con estándares europeos aplicables.",
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
          <h1 className="mb-5 text-balance text-[clamp(2.375rem,4.5vw,3.5rem)] font-semibold leading-[1.18] tracking-tight text-primary-foreground md:text-[clamp(3rem,3.6vw,3.55rem)]">
            La casa que siempre soñaste. Ahora es posible.
          </h1>
          <p className="mb-8 max-w-2xl text-pretty text-lg text-primary-foreground/90 md:text-xl">
            Diseño nórdico, construcción SIP rápida y eficiente. Normativa europea verificada,
            presupuesto claro y asesoría técnica en cada etapa de tu proyecto.
          </p>
          <motion.ul
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mb-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-primary-foreground/80"
          >
            {[
              "Cumplimiento normativo europeo aplicable",
              "Garantía estructural verificada",
              "Asesoría técnica en cada proyecto",
            ].map((badge) => (
              <li key={badge} className="flex items-center gap-1.5">
                <span className="text-accent" aria-hidden>
                  ✓
                </span>
                {badge}
              </li>
            ))}
          </motion.ul>
          <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <a
              href="/contactos"
              className="inline-flex justify-center rounded-lg bg-accent px-8 py-3.5 text-center text-base font-bold text-accent-foreground shadow-[0_8px_40px_rgba(0,0,0,.2)] transition-[opacity,filter] hover:brightness-105 hover:opacity-[0.97]"
            >
              Solicitar Presupuesto Gratis
            </a>
            <a
              href="#projects"
              className="inline-flex justify-center rounded-lg border-2 border-primary-foreground/55 bg-primary-foreground/12 px-8 py-3.5 text-center text-base font-bold text-primary-foreground backdrop-blur-sm transition-colors hover:bg-primary-foreground/20"
            >
              Ver Modelos
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
              className="glass-card flex gap-4 rounded-xl p-6 md:flex-col md:items-start"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-accent/20">
                <item.icon className="h-6 w-6 text-accent" strokeWidth={2} aria-hidden />
              </div>
              <div className="min-w-0">
                <div className="text-sm font-semibold uppercase tracking-wide text-accent">{item.value}</div>
                <div className="mt-1 text-lg font-bold text-foreground">{item.label}</div>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
