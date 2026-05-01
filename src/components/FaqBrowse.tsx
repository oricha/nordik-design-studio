import { useMemo, useState } from "react";
import { Search } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";
import { faqCategories, faqItems, type FaqCategorySlug } from "@/data/faq";

export type FaqBrowseProps = {
  className?: string;
  intro?: string;
};

export function FaqBrowse({ className = "", intro }: FaqBrowseProps) {
  const [query, setQuery] = useState("");
  const [tab, setTab] = useState<FaqCategorySlug | "todas">("todas");

  const normalized = query.trim().toLowerCase();

  const filteredItems = useMemo(() => {
    let list =
      tab === "todas" ? faqItems : faqItems.filter((item) => item.category === tab);

    if (normalized) {
      list = list.filter((item) => {
        const blob = `${item.question} ${item.answer}`.toLowerCase();
        return blob.includes(normalized);
      });
    }
    return list;
  }, [tab, normalized]);

  const pills: Array<{ value: FaqCategorySlug | "todas"; label: string }> = [
    { value: "todas", label: "Todas" },
    ...faqCategories.map((c) => ({ value: c.slug, label: c.label })),
  ];

  return (
    <div className={className}>
      {intro ? <p className="mb-4 text-muted-foreground leading-relaxed">{intro}</p> : null}

      <div className="relative mb-6">
        <Search
          className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
          aria-hidden
        />
        <Input
          type="search"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar en preguntas y respuestas…"
          className="pl-10"
          aria-label="Buscar en el FAQ"
        />
      </div>

      <div
        role="tablist"
        aria-label="Categorías FAQ"
        className="mb-6 flex flex-wrap gap-2 rounded-xl border border-border bg-muted/50 p-1.5"
      >
        {pills.map((p) => (
          <button
            key={p.value}
            type="button"
            role="tab"
            aria-selected={tab === p.value}
            className={cn(
              "rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring",
              tab === p.value ? "bg-background text-foreground shadow-sm" : "text-muted-foreground hover:text-foreground",
            )}
            onClick={() => setTab(p.value)}
          >
            {p.label}
          </button>
        ))}
      </div>

      <div role="tabpanel">
        {filteredItems.length === 0 ? (
          <p className="py-10 text-center text-muted-foreground" role="status">
            Sin resultados{query.trim() ? ` para “${query.trim()}”.` : "."}
          </p>
        ) : (
          <Accordion type="multiple" className="w-full divide-y rounded-xl border border-border bg-card px-1 sm:px-4">
            {filteredItems.map((item) => (
              <AccordionItem key={item.id} value={item.id} className="border-border px-3 sm:border-0">
                <AccordionTrigger className="py-5 text-left text-base font-semibold leading-snug text-foreground hover:no-underline">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="pb-5 text-base leading-relaxed text-muted-foreground">
                  <div className="space-y-3 pt-0">
                    {item.answer.split("\n\n").map((paragraph, pi) => (
                      <p key={`${item.id}-p-${pi}`}>{paragraph.trim()}</p>
                    ))}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        )}
      </div>
    </div>
  );
}
