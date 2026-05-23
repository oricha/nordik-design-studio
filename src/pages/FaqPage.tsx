import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { FaqBrowse } from "@/components/FaqBrowse";
import { PageHero } from "@/components/PageHero";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { faqCategories, type FaqCategorySlug } from "@/data/faq";

/** F3.3.1 + F3.3.2: página FAQ con acordeón, búsqueda y categorías. */
const FaqPage = () => {
  const [query, setQuery] = useState("");
  const [activeCategory, setActiveCategory] = useState<FaqCategorySlug>(faqCategories[0].slug);

  return (
    <div className="min-h-screen bg-background pb-28 md:pb-32">
      <PageHero
        eyebrow="Centro de ayuda"
        title="Preguntas frecuentes"
        description={
          <>
            Proceso, garantía SIP, financiación y aspectos técnicos. Si no encuentras respuesta,{" "}
            <Link className="font-semibold text-accent underline underline-offset-4 hover:opacity-90" to="/contactos">
              solicita presupuesto gratis
            </Link>{" "}
            o escribe por WhatsApp.
          </>
        }
        compact
      />

      <div className="mx-auto -mt-10 max-w-4xl px-6">
        <div className="relative z-10 rounded-2xl border border-border bg-background p-4 shadow-[0_24px_60px_-40px_hsl(var(--foreground)/0.45)] md:p-6">
          <div className="relative mt-7">
            <Search
              className="pointer-events-none absolute left-4 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
              aria-hidden
            />
            <Input
              type="search"
              value={query}
              onChange={(event) => setQuery(event.target.value)}
              placeholder="Buscar en preguntas y respuestas..."
              className="h-12 rounded-xl bg-background pl-11 text-base shadow-sm"
              aria-label="Buscar en las preguntas frecuentes"
            />
          </div>

          <div
            role="tablist"
            aria-label="Categorías de preguntas frecuentes"
            className="mt-8 grid gap-3 sm:grid-cols-4"
          >
            {faqCategories.map((category) => (
              <button
                key={category.slug}
                type="button"
                role="tab"
                aria-selected={activeCategory === category.slug}
                onClick={() => setActiveCategory(category.slug)}
                className={cn(
                  "rounded-xl border px-4 py-4 text-left transition duration-200 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-accent focus-visible:ring-offset-2",
                  activeCategory === category.slug
                    ? "border-primary bg-primary text-primary-foreground shadow-[0_18px_40px_-28px_hsl(var(--foreground)/0.45)]"
                    : "border-border bg-background text-foreground shadow-sm hover:border-accent/50",
                )}
              >
                <span className="block text-sm font-semibold">{category.label}</span>
                <span
                  className={cn(
                    "mt-1 block text-xs leading-snug",
                    activeCategory === category.slug ? "text-primary-foreground/75" : "text-muted-foreground",
                  )}
                >
                  {category.description}
                </span>
              </button>
            ))}
          </div>
        </div>

        <div className="mt-14">
        <FaqBrowse
          query={query}
          onQueryChange={setQuery}
          activeCategory={activeCategory}
          onCategoryChange={(category) => {
            if (category !== "todas") setActiveCategory(category);
          }}
          showSearch={false}
          showTabs={false}
          className="scroll-mt-28"
        />
        </div>
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
