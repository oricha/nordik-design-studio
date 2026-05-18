import { Link } from "react-router-dom";
import { FaqBrowse } from "@/components/FaqBrowse";
import { faqCategories } from "@/data/faq";

/** F3.3.1 + F3.3.2: página FAQ con acordeón, búsqueda y categorías. */
const FaqPage = () => {
  return (
    <div className="min-h-screen bg-background pb-28 pt-28 md:pb-32">
      <header className="border-b border-border bg-warm-gray/80">
        <div className="mx-auto max-w-4xl px-6 py-14">
          <h1 className="text-balance text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.18]">
            Preguntas frecuentes
          </h1>
          <p className="mt-5 max-w-2xl text-lg leading-relaxed text-muted-foreground">
            Proceso, garantía SIP, financiación y aspectos técnicos. Si no encuentras respuesta,{" "}
            <Link className="font-semibold text-accent underline underline-offset-4 hover:opacity-90" to="/contactos">
              solicita presupuesto gratis
            </Link>{" "}
            o escribe por WhatsApp.
          </p>
          <dl className="mt-10 grid gap-6 sm:grid-cols-2">
            {faqCategories.map((c) => (
              <div key={c.slug} className="rounded-xl border border-border bg-background px-5 py-4 shadow-sm">
                <dt className="font-semibold text-foreground">{c.label}</dt>
                <dd className="mt-2 text-base leading-relaxed text-muted-foreground">{c.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </header>

      <div className="mx-auto mt-14 max-w-4xl px-6">
        <FaqBrowse />
        <aside className="mt-14 rounded-2xl border border-border bg-primary p-10 text-primary-foreground shadow-sm">
          <h2 className="text-xl font-semibold md:text-2xl">¿Necesitas un plan BIM o presupuesto cerrado?</h2>
          <p className="mt-4 text-base leading-relaxed text-primary-foreground/90">
            Agenda consulta gratuita inicial: responderemos en 24–48 h laborables.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/contactos"
              className="inline-flex rounded-lg bg-accent px-7 py-3.5 font-semibold text-accent-foreground transition-opacity hover:opacity-95"
            >
              Solicitar presupuesto gratis
            </Link>
            <Link
              to="/#projects"
              className="inline-flex rounded-lg border-2 border-primary-foreground/30 bg-transparent px-7 py-3.5 font-semibold hover:bg-primary-foreground/10"
            >
              Ver todos los proyectos
            </Link>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default FaqPage;

