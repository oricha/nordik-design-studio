import { X } from "lucide-react";
import { cn } from "@/lib/utils";
import { type ActiveFilters } from "@/types/catalogFilters";

interface FilterSidebarProps {
  filters: ActiveFilters;
  onChange: (filters: ActiveFilters) => void;
  onClear: () => void;
}

const BEDROOM_OPTIONS = [1, 2, 3, 4] as const;

const FilterSidebar = ({
  filters,
  onChange,
  onClear,
}: FilterSidebarProps) => {
  const hasActiveFilters = filters.bedrooms.length > 0;

  const toggleBedroom = (bedroom: number) => {
    const nextBedrooms = filters.bedrooms.includes(bedroom)
      ? filters.bedrooms.filter((value) => value !== bedroom)
      : [...filters.bedrooms, bedroom].sort((a, b) => a - b);

    onChange({ ...filters, bedrooms: nextBedrooms });
  };

  return (
    <div className="rounded-[26px] border border-border bg-background p-5 shadow-[0_20px_60px_rgba(15,15,15,0.05)]">
      <div className="border-b border-border py-4 first:pt-0">
        <h3 className="text-sm font-semibold text-foreground">Habitaciones</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {BEDROOM_OPTIONS.map((bedroom) => {
            const selected = filters.bedrooms.includes(bedroom);
            return (
              <button
                key={bedroom}
                type="button"
                onClick={() => toggleBedroom(bedroom)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-white text-foreground hover:border-accent/50",
                )}
              >
                {bedroom === 4 ? "4+" : bedroom}
              </button>
            );
          })}
        </div>
      </div>

      <div className="pt-4">
        <div className="flex flex-wrap gap-2">
          {filters.bedrooms.map((bedroom) => (
            <button
              key={`bed-${bedroom}`}
              type="button"
              onClick={() => toggleBedroom(bedroom)}
              className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-foreground"
            >
              {bedroom === 4 ? "4+ hab." : `${bedroom} hab.`}
              <X className="h-3 w-3" aria-hidden />
            </button>
          ))}
        </div>

        {hasActiveFilters && (
          <button
            type="button"
            onClick={onClear}
            className="mt-4 text-sm font-semibold text-accent transition-opacity hover:opacity-80"
          >
            Limpiar todo
          </button>
        )}
      </div>
    </div>
  );
};

export default FilterSidebar;
