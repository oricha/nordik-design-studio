import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Play } from "lucide-react";
import videoThumb from "@/assets/video-thumbnail.jpg";
import { whyValuesWithProof } from "@/data/whyWithTestimonials";

/** F2.2.6: seis valores con micro-testimonio y mini avatar */
const WhySection = () => {
  return (
    <section id="why" className="section-padding bg-background">
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 max-w-xl text-3xl font-semibold tracking-tight text-foreground md:max-w-2xl md:text-[2.25rem] md:leading-[1.22] lg:text-4xl"
        >
          ¿Por qué los mercados nórdicos apuestan por vivienda SIP?
        </motion.h2>

        <div className="grid items-start gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative aspect-video cursor-pointer overflow-hidden rounded-2xl group"
          >
            <img src={videoThumb} alt="Construcción casa escandinava" className="h-full w-full object-cover" />
            <div className="absolute inset-0 flex items-center justify-center bg-charcoal/30 transition-colors group-hover:bg-charcoal/40">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-accent">
                <Play className="ml-1 h-6 w-6 text-accent-foreground" />
              </div>
            </div>
          </motion.div>

          <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {whyValuesWithProof.map((item, i) => (
              <motion.li
                key={item.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="flex flex-col rounded-xl border border-border bg-card p-6 shadow-sm"
              >
                <div className="flex items-start gap-3">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-wood-light">
                    <item.icon className="h-5 w-5 text-wood-dark" strokeWidth={2} aria-hidden />
                  </div>
                  <div className="min-w-0">
                    <h3 className="font-semibold text-foreground">{item.title}</h3>
                    <p className="mt-1 text-base leading-relaxed text-muted-foreground">{item.desc}</p>
                  </div>
                </div>
                <blockquote className="mt-4 border-l-2 border-accent pl-3 text-base italic leading-relaxed text-muted-foreground">
                  {item.quote}
                </blockquote>
                <div className="mt-3 flex items-center gap-2">
                  <img
                    src={item.avatar}
                    alt=""
                    role="presentation"
                    className="h-9 w-9 rounded-full object-cover"
                  />
                  <span className="text-xs text-muted-foreground">{item.cite}</span>
                </div>
              </motion.li>
            ))}
          </ul>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-14 flex flex-col items-center rounded-2xl border border-border bg-card px-8 py-10 text-center shadow-sm"
        >
          <p className="text-lg font-semibold text-foreground">La confianza viene de transparencia BIM y plazos escritos</p>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Equipo finlandés–español, sede dual y documentación lista para banca y permisos donde aplique.
          </p>
          <Link
            to="/about"
            className="mt-8 inline-flex rounded-xl bg-accent px-8 py-3.5 text-base font-bold text-accent-foreground transition-opacity hover:opacity-95"
          >
            Conoce más sobre NordiK
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default WhySection;
