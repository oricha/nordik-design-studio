import { motion } from "framer-motion";
import { Coins, Zap, Home, Shield, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const pillars = [
  {
    icon: Coins,
    title: "Precio más accesible",
    desc: "Menos meses de obra, menos imprevistos. Presupuesto orientativo desde el briefing.",
    link: { label: "Ver modelos desde €32k", href: "/#projects" },
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
  },
  {
    icon: Zap,
    title: "Eficiente energéticamente",
    desc: "Paneles SIP con aislamiento continuo. Menor consumo térmico estimado durante todo el año.",
    link: { label: "Conocer el sistema SIP", href: "/servicios" },
    iconBg: "bg-green-50",
    iconColor: "text-green-600",
  },
  {
    icon: Home,
    title: "Diseño nórdico moderno",
    desc: "Estética escandinava con materiales naturales. Adaptable a tu parcela y necesidades.",
    link: { label: "Explorar proyectos", href: "/#projects" },
    iconBg: "bg-blue-50",
    iconColor: "text-blue-600",
  },
  {
    icon: Shield,
    title: "Acompañamiento en cada etapa",
    desc: "Desde el diseño hasta la entrega. Asesoría técnica, plazos y documentación.",
    link: { label: "Cómo funciona", href: "/#why" },
    iconBg: "bg-wood-light",
    iconColor: "text-wood-dark",
  },
];

const ValueProposition = () => {
  return (
    <section className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-semibold tracking-tight text-foreground md:text-4xl">
            4 razones para elegir NordiK
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-base text-muted-foreground">
            Tu vivienda eficiente, nórdica y a precio justo. Con acompañamiento real.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-4 sm:gap-6 lg:grid-cols-4 lg:gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.08 }}
              className="flex flex-col rounded-2xl border border-border bg-card p-6 shadow-sm transition-shadow duration-200 hover:shadow-md md:p-8"
            >
              <div className={`flex h-12 w-12 items-center justify-center rounded-xl ${pillar.iconBg}`}>
                <pillar.icon className={`h-6 w-6 ${pillar.iconColor}`} strokeWidth={2} aria-hidden />
              </div>
              <h3 className="mt-4 text-base font-semibold text-foreground md:text-lg">{pillar.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground md:text-base">
                {pillar.desc}
              </p>
              <Link
                to={pillar.link.href}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-accent underline-offset-2 hover:opacity-80"
              >
                {pillar.link.label}
                <ArrowRight className="h-4 w-4" aria-hidden />
              </Link>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 text-center"
        >
          <Link
            to="/contactos"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-3.5 text-base font-semibold text-foreground shadow-sm transition-colors hover:border-accent/50"
          >
            Hablar con un asesor
            <ArrowRight className="h-4 w-4" aria-hidden />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ValueProposition;
