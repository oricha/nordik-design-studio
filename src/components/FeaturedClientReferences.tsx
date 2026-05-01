import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ExternalLink } from "lucide-react";
import { featuredClients } from "@/data/featuredClients";

/** F2.1.6 — Logos placeholders con iniciales hasta disponer arte final */
export function FeaturedClientReferences() {
  return (
    <section className="section-padding bg-muted/30">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.5 }}
          className="mb-12 text-center"
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">Referencias destacadas</h2>
          <p className="mx-auto mt-3 max-w-2xl text-muted-foreground">
            Casos de ejemplo con nombres ficticios hasta obtener permisos de marca. Enlaces al catálogo donde el marco se
            relaciona con modelos publicados.
          </p>
        </motion.div>

        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {featuredClients.map((c, idx) => (
            <motion.li
              key={c.id}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.03 }}
              className="flex flex-col rounded-2xl border border-border bg-background p-5 shadow-sm"
            >
              <div
                aria-hidden
                className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-lg font-bold text-primary"
              >
                {c.initials}
              </div>
              <h3 className="font-semibold text-foreground">{c.name}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">{c.summary}</p>
              <div className="mt-4 flex flex-wrap gap-2 border-t border-border pt-4 text-sm">
                {c.projectSlug ? (
                  <Link to={`/proyecto/${c.projectSlug}`} className="font-medium text-accent underline-offset-4 hover:underline">
                    Ver modelo relacionado
                  </Link>
                ) : null}
                {c.optionalUrl ? (
                  <a
                    href={c.optionalUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 font-medium text-muted-foreground hover:text-accent"
                  >
                    Web <ExternalLink className="h-3 w-3" aria-hidden />
                  </a>
                ) : null}
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
}
