import { X } from "lucide-react";
import { projects } from "@/data/projects";
import { cn } from "@/lib/utils";
import { DELIVERY_RANGES, type ActiveFilters } from "@/types/catalogFilters";

interface FilterSidebarProps {
  filters: ActiveFilters;
  resultsCount: number;
  totalCount: number;
  onChange: (filters: ActiveFilters) => void;
  onClear: () => void;
}

const BEDROOM_OPTIONS = [1, 2, 3, 4] as const;

const energyColors: Record<string, string> = {
  A: "border-green-300 bg-green-100 text-green-800",
  B: "border-lime-300 bg-lime-100 text-lime-800",
  C: "border-yellow-300 bg-yellow-100 text-yellow-800",
  D: "border-orange-300 bg-orange-100 text-orange-800",
};

const availableEnergyClasses = ["A", "B", "C", "D"].filter((energyClass) =>
  projects.some((project) => project.energyClass === energyClass),
);

const FilterSidebar = ({
  filters,
  resultsCount,
  totalCount,
  onChange,
  onClear,
}: FilterSidebarProps) => {
  const hasActiveFilters =
    filters.bedrooms.length > 0 ||
    filters.energyClass.length > 0 ||
    Boolean(filters.deliveryRange);

  const toggleBedroom = (bedroom: number) => {
    const nextBedrooms = filters.bedrooms.includes(bedroom)
      ? filters.bedrooms.filter((value) => value !== bedroom)
      : [...filters.bedrooms, bedroom].sort((a, b) => a - b);

    onChange({ ...filters, bedrooms: nextBedrooms });
  };

  const toggleEnergyClass = (energyClass: string) => {
    const nextEnergyClass = filters.energyClass.includes(energyClass)
      ? filters.energyClass.filter((value) => value !== energyClass)
      : [...filters.energyClass, energyClass];

    onChange({ ...filters, energyClass: nextEnergyClass });
  };

  const removeDeliveryRange = () => onChange({ ...filters, deliveryRange: "" });

  return (
    <div className="rounded-[26px] border border-border bg-background p-5 shadow-[0_20px_60px_rgba(15,15,15,0.05)]">
      <div className="border-b border-border pb-4">
        <p className="text-sm text-muted-foreground">
          Mostrando <span className="font-semibold text-foreground">{resultsCount}</span> de{" "}
          <span className="font-semibold text-foreground">{totalCount}</span> proyectos
        </p>
      </div>

      <div className="border-b border-border py-4">
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

      <div className="border-b border-border py-4">
        <h3 className="text-sm font-semibold text-foreground">Eficiencia energética</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {availableEnergyClasses.map((energyClass) => {
            const selected = filters.energyClass.includes(energyClass);
            return (
              <button
                key={energyClass}
                type="button"
                onClick={() => toggleEnergyClass(energyClass)}
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm font-semibold transition-transform",
                  energyColors[energyClass],
                  selected ? "ring-2 ring-offset-2 ring-accent" : "opacity-80 hover:opacity-100",
                )}
              >
                {energyClass}
              </button>
            );
          })}
        </div>
      </div>

      <div className="border-b border-border py-4">
        <h3 className="text-sm font-semibold text-foreground">Tiempo de entrega</h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {DELIVERY_RANGES.map((range) => {
            const selected = filters.deliveryRange === range.key;
            return (
              <button
                key={range.key}
                type="button"
                onClick={() =>
                  onChange({
                    ...filters,
                    deliveryRange: selected ? "" : range.key,
                  })
                }
                className={cn(
                  "rounded-full border px-3 py-1.5 text-sm font-medium transition-colors",
                  selected
                    ? "border-primary bg-primary text-primary-foreground"
                    : "border-border bg-white text-foreground hover:border-accent/50",
                )}
              >
                {range.label}
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
          {filters.energyClass.map((energyClass) => (
            <button
              key={`energy-${energyClass}`}
              type="button"
              onClick={() => toggleEnergyClass(energyClass)}
              className={cn(
                "inline-flex items-center gap-1 rounded-full border px-3 py-1 text-xs font-semibold",
                energyColors[energyClass],
              )}
            >
              Clase {energyClass}
              <X className="h-3 w-3" aria-hidden />
            </button>
          ))}
          {filters.deliveryRange && (
            <button
              type="button"
              onClick={removeDeliveryRange}
              className="inline-flex items-center gap-1 rounded-full border border-border bg-muted/60 px-3 py-1 text-xs font-medium text-foreground"
            >
              {DELIVERY_RANGES.find((range) => range.key === filters.deliveryRange)?.label}
              <X className="h-3 w-3" aria-hidden />
            </button>
          )}
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
