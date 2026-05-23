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
  query?: string;
  onQueryChange?: (query: string) => void;
  activeCategory?: FaqCategorySlug | "todas";
  onCategoryChange?: (category: FaqCategorySlug | "todas") => void;
  showSearch?: boolean;
  showTabs?: boolean;
  includeAllTab?: boolean;
};

export function FaqBrowse({
  className = "",
  intro,
  query,
  onQueryChange,
  activeCategory,
  onCategoryChange,
  showSearch = true,
  showTabs = true,
  includeAllTab = true,
}: FaqBrowseProps) {
  const [internalQuery, setInternalQuery] = useState("");
  const [internalTab, setInternalTab] = useState<FaqCategorySlug | "todas">("todas");

  const currentQuery = query ?? internalQuery;
  const currentTab = activeCategory ?? internalTab;
  const normalized = currentQuery.trim().toLowerCase();

  const updateQuery = (nextQuery: string) => {
    onQueryChange?.(nextQuery);
    if (query === undefined) setInternalQuery(nextQuery);
  };

  const updateTab = (nextTab: FaqCategorySlug | "todas") => {
    onCategoryChange?.(nextTab);
    if (activeCategory === undefined) setInternalTab(nextTab);
  };

  const filteredItems = useMemo(() => {
    let list =
      currentTab === "todas" ? faqItems : faqItems.filter((item) => item.category === currentTab);

    if (normalized) {
      list = list.filter((item) => {
        const blob = `${item.question} ${item.answer}`.toLowerCase();
        return blob.includes(normalized);
      });
    }
    return list;
  }, [currentTab, normalized]);

  const pills: Array<{ value: FaqCategorySlug | "todas"; label: string }> = [
    ...(includeAllTab ? [{ value: "todas" as const, label: "Todas" }] : []),
    ...faqCategories.map((c) => ({ value: c.slug, label: c.label })),
  ];

  return (
    <div className={className}>
      {intro ? <p className="mb-4 text-muted-foreground leading-relaxed">{intro}</p> : null}

      {showSearch ? (
        <div className="relative mb-6">
          <Search
            className="pointer-events-none absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground"
            aria-hidden
          />
          <Input
            type="search"
            value={currentQuery}
            onChange={(e) => updateQuery(e.target.value)}
            placeholder="Buscar en preguntas y respuestas..."
            className="pl-10"
            aria-label="Buscar en las preguntas frecuentes"
          />
        </div>
      ) : null}

      {showTabs ? (
        <div
          role="tablist"
          aria-label="Categorías de preguntas frecuentes"
          className="mb-6 flex flex-wrap gap-2 rounded-xl border border-border bg-muted/50 p-1.5"
        >
          {pills.map((p) => (
            <button
              key={p.value}
              type="button"
              role="tab"
              aria-selected={currentTab === p.value}
              className={cn(
                "rounded-lg px-3 py-2 text-sm font-semibold transition-colors focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring",
                currentTab === p.value
                  ? "bg-background text-foreground shadow-sm"
                  : "text-muted-foreground hover:text-foreground",
              )}
              onClick={() => updateTab(p.value)}
            >
              {p.label}
            </button>
          ))}
        </div>
      ) : null}

      <div role="tabpanel">
        {filteredItems.length === 0 ? (
          <p className="py-10 text-center text-muted-foreground" role="status">
            Sin resultados{currentQuery.trim() ? ` para "${currentQuery.trim()}".` : "."}
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
