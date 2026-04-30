import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { BadgeCheck, PlaySquare } from "lucide-react";
import { pageTestimonials } from "@/data/testimonials";
import { ReviewsAggregate } from "@/components/ReviewsAggregate";
import { StarRating } from "@/components/StarRating";

/** F2.2.1 + agregados F2.2.2/F2.2.3 en tarjetas */
const Testimonials = () => {
  return (
    <div className="min-h-screen bg-background pb-24 pt-28 md:pb-28">
      <div className="mx-auto max-w-7xl px-6">
        <motion.header
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-14 max-w-3xl"
        >
          <h1 className="text-4xl font-bold tracking-tight text-foreground md:text-5xl">Testimonios</h1>
          <p className="mt-4 text-lg text-muted-foreground leading-relaxed">
            Experiencias de clientes y socios ejecutores (casos ejemplo para comunicación; sustituir por permisos reales
            antes de usar en campañas públicas grandes).
          </p>
          <Link to="/casos" className="mt-4 inline-block text-sm font-semibold text-accent underline-offset-4 hover:underline">
            Ver estudios de caso con métricas →
          </Link>
        </motion.header>

        <motion.section
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.05 }}
          className="mb-16"
          aria-labelledby="widget-valoraciones"
        >
          <h2 id="widget-valoraciones" className="sr-only">
            Resumen valoraciones
          </h2>
          <ReviewsAggregate detailHref="/casos" detailLabel="Estudios de caso" />
        </motion.section>

        <section aria-labelledby="videos-opcional" className="mb-16 rounded-2xl border border-border bg-muted/35 p-6 md:p-8">
          <div className="flex flex-wrap items-center gap-3">
            <PlaySquare className="h-6 w-6 text-accent" aria-hidden />
            <h2 id="videos-opcional" className="text-lg font-semibold text-foreground">
              Vídeos testimoniales (pendiente marca)
            </h2>
          </div>
          <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
            Cuando tengamos autorización de imagen podremos enlazar Vimeo o YouTube desde aquí (
            <span className="font-medium text-foreground">F2.2.1</span>). Mientras tanto, un buscador de referencia SIP:
          </p>
          <p className="mt-4">
            <a
              href="https://www.youtube.com/results?search_query=structural+insulated+panel+installation"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm font-semibold text-accent underline-offset-4 hover:underline"
            >
              Ver ejemplos de montaje SIP en YouTube (abre nueva pestaña)
            </a>
          </p>
        </section>

        <ul className="grid gap-10 lg:gap-14">
          {pageTestimonials.map((t, i) => (
            <motion.li
              key={t.id}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ delay: i * 0.03 }}
              className="grid gap-8 border-b border-border pb-14 last:border-b-0 md:grid-cols-[10rem_1fr] md:gap-10"
            >
              <div className="flex flex-col items-start gap-3">
                <img
                  src={t.portrait}
                  alt=""
                  role="presentation"
                  className="h-28 w-28 rounded-2xl object-cover md:h-36 md:w-36"
                />
                <StarRating value={t.rating} size="sm" />
              </div>
              <div className="min-w-0">
                <div className="flex flex-wrap items-center gap-2">
                  <h3 className="text-xl font-bold text-foreground">{t.clientName}</h3>
                  <span className="inline-flex items-center gap-1 rounded-full bg-emerald-500/15 px-2 py-0.5 text-xs font-semibold text-emerald-800">
                    <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
                    Cliente verificado
                  </span>
                </div>
                <p className="mt-1 text-sm text-muted-foreground">
                  {t.role} · {t.city}
                </p>
                <p className="mt-1 text-sm font-medium text-foreground">
                  Proyecto: {t.projectLabel}
                  {t.projectSlug ? (
                    <>
                      {" "}
                      (
                      <Link to={`/proyecto/${t.projectSlug}`} className="text-accent underline-offset-2 hover:underline">
                        ver ficha
                      </Link>
                      )
                    </>
                  ) : null}
                </p>
                <blockquote className="mt-5 text-base leading-relaxed text-muted-foreground">{t.body}</blockquote>
                <div className="mt-4 flex flex-wrap gap-x-4 gap-y-1 border-t border-border pt-4 text-xs text-muted-foreground">
                  <span>
                    <span className="font-medium text-foreground">Compra / servicio:</span> {t.verifiedPurchase}
                  </span>
                  <span>
                    <span className="font-medium text-foreground">Contacto ofuscado:</span> {t.obscuredContact}
                  </span>
                </div>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Testimonials;
