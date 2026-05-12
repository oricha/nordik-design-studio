import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowUpDown,
  Bath,
  BedDouble,
  ChevronDown,
  Clock3,
  Grid2X2,
  List,
  Maximize2,
  SlidersHorizontal,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import FilterSidebar from "@/components/FilterSidebar";
import { Sheet, SheetContent, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { Slider } from "@/components/ui/slider";
import { PROJECT_CATALOG_QUERY_KEY } from "@/constants/projectCatalog";
import { CONTACT_PROJECT_PREFILL_QUERY } from "@/constants/contactForm";
import { projectCategoryPresentation } from "@/constants/projectCategoryPresentation";
import { projects, type Project } from "@/data/projects";
import { cn } from "@/lib/utils";
import { type ActiveFilters } from "@/types/catalogFilters";
import { filtersToParams, paramsToFilters } from "@/utils/catalogUrl";
import { projectMatchesSearch } from "@/utils/projectCatalogSearch";

const categories = [
  { key: "all", label: "Todos" },
  { key: "houses", label: "Casas" },
  { key: "cabins", label: "Cabañas" },
  { key: "materials", label: "Materiales" },
  { key: "reforms", label: "Reformas" },
] as const;

const sortOptions = [
  { value: "price-asc", label: "Precio: Menor a Mayor" },
  { value: "price-desc", label: "Precio: Mayor a Menor" },
  { value: "area-desc", label: "Más grande primero" },
  { value: "name-asc", label: "Nombre: A-Z" },
] as const;

const QUERY_KEY = PROJECT_CATALOG_QUERY_KEY;

const EMPTY_ADVANCED_FILTERS: ActiveFilters = {
  bedrooms: [],
};

const energyColors: Record<NonNullable<Project["energyClass"]>, string> = {
  A: "border-green-300 bg-green-100 text-green-800",
  B: "border-lime-300 bg-lime-100 text-lime-800",
  C: "border-yellow-300 bg-yellow-100 text-yellow-800",
  D: "border-orange-300 bg-orange-100 text-orange-800",
};

const formatPrice = (value: number) => `€ ${value.toLocaleString()}`;

const projectMatchesAdvancedFilters = (project: Project, filters: ActiveFilters) => {
  if (filters.bedrooms.length > 0 && project.category !== "materials" && project.category !== "reforms") {
    const matchesBedroom = filters.bedrooms.some((bedroom) =>
      bedroom === 4 ? project.bedrooms >= 4 : project.bedrooms === bedroom,
    );
    if (!matchesBedroom) {
      return false;
    }
  }

  return true;
};

const calculateAvailableRange = (
  category: string,
  search: string,
  advancedFilters: ActiveFilters,
): [number, number] => {
  const byCategoryAndSearch = projects.filter(
    (project) =>
      (category === "all" || project.category === category) && projectMatchesSearch(project, search),
  );

  const filtered = byCategoryAndSearch.filter((project) =>
    projectMatchesAdvancedFilters(project, advancedFilters),
  );

  const source = filtered.length > 0 ? filtered : byCategoryAndSearch;

  if (source.length === 0) {
    return [0, 400000];
  }

  const prices = source.map((project) => project.price);
  const minPrice = Math.floor(Math.min(...prices) / 1000) * 1000;
  const maxPrice = Math.ceil(Math.max(...prices) / 1000) * 1000;

  return [minPrice, maxPrice];
};

const ProjectCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState("price-asc");
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [advancedFilters, setAdvancedFilters] = useState<ActiveFilters>(() =>
    paramsToFilters(searchParams),
  );
  const searchQuery = searchParams.get(QUERY_KEY) ?? "";

  useEffect(() => {
    const saved = sessionStorage.getItem("projectViewMode") as "grid" | "list" | null;
    if (saved) {
      setViewMode(saved);
    }
  }, []);

  useEffect(() => {
    setAdvancedFilters(paramsToFilters(searchParams));
  }, [searchParams]);

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    sessionStorage.setItem("projectViewMode", mode);
  };

  const handleFilterChange = (filters: ActiveFilters) => {
    setAdvancedFilters(filters);
    setSearchParams((prev) => {
      const next = new URLSearchParams(prev);
      next.delete("bed");
      next.delete("eclass");
      next.delete("del");

      const advancedParams = filtersToParams(filters);
      advancedParams.forEach((value, key) => next.set(key, value));

      return next;
    });
  };

  const clearAdvancedFilters = () => {
    handleFilterChange(EMPTY_ADVANCED_FILTERS);
  };

  const availableRange = useMemo(
    () => calculateAvailableRange(activeCategory, searchQuery, advancedFilters),
    [activeCategory, searchQuery, advancedFilters],
  );

  const [priceRange, setPriceRange] = useState<[number, number]>(availableRange);

  useEffect(() => {
    setPriceRange((prev) => {
      const [minAvailable, maxAvailable] = availableRange;
      const [minCurrent, maxCurrent] = prev;
      const nextMin = Math.max(minCurrent, minAvailable);
      const nextMax = Math.min(maxCurrent, maxAvailable);

      if (nextMin <= nextMax) {
        return [nextMin, nextMax];
      }

      return [minAvailable, maxAvailable];
    });
  }, [availableRange]);

  const filtered = useMemo(() => {
    const result = projects.filter((project) => {
      if (activeCategory !== "all" && project.category !== activeCategory) {
        return false;
      }

      if (project.price < priceRange[0] || project.price > priceRange[1]) {
        return false;
      }

      if (!projectMatchesSearch(project, searchQuery)) {
        return false;
      }

      if (!projectMatchesAdvancedFilters(project, advancedFilters)) {
        return false;
      }

      return true;
    });

    const [field, dir] = sortBy.split("-");
    result.sort((a, b) => {
      const valA = field === "name" ? a.name : field === "area" ? a.area : a.price;
      const valB = field === "name" ? b.name : field === "area" ? b.area : b.price;

      if (typeof valA === "string" && typeof valB === "string") {
        return dir === "asc" ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }

      return dir === "asc" ? (valA as number) - (valB as number) : (valB as number) - (valA as number);
    });

    return result;
  }, [activeCategory, advancedFilters, priceRange, searchQuery, sortBy]);

  const activeFilterCount =
    advancedFilters.bedrooms.length;

  return (
    <section id="projects" className="section-padding bg-warm-gray">
      <div className="mx-auto max-w-7xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <div className="flex flex-col gap-3 md:flex-row md:items-baseline md:gap-6">
            <h2 className="shrink-0 text-4xl font-semibold tracking-tight text-foreground md:text-5xl md:leading-[1.2]">
              Buscar casas
            </h2>
            <p className="max-w-3xl text-lg leading-relaxed text-muted-foreground">
              Encuentra la casa o cabaña perfecta para tu próxima escapada.
            </p>
          </div>
        </motion.div>

        <div className="flex flex-col gap-8">
          <div className="min-w-0">
            <div className="mb-4 rounded-[26px] border border-border bg-background px-6 py-6 shadow-[0_20px_60px_rgba(15,15,15,0.06)]">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3">
                  <span className="text-base font-semibold text-foreground">Precio</span>
                  <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
                    <div className="flex items-center gap-3">
                      <input
                        type="number"
                        min={availableRange[0]}
                        max={availableRange[1]}
                        value={priceRange[0]}
                        onChange={(e) => {
                          const parsed = Number(e.target.value.replace(",", "."));
                          if (Number.isNaN(parsed)) return;
                          const [lo, hi] = availableRange;
                          const capped = Math.min(hi, Math.max(lo, parsed));
                          const nextMin = Math.min(capped, priceRange[1]);
                          setPriceRange([nextMin, priceRange[1]]);
                        }}
                        className="h-14 w-full min-w-[150px] rounded-2xl border border-border bg-white px-5 text-lg text-foreground outline-none transition-colors focus:border-accent md:w-[170px]"
                      />
                      <span className="text-xl text-muted-foreground">-</span>
                      <input
                        type="number"
                        min={availableRange[0]}
                        max={availableRange[1]}
                        value={priceRange[1]}
                        onChange={(e) => {
                          const parsed = Number(e.target.value.replace(",", "."));
                          if (Number.isNaN(parsed)) return;
                          const [lo, hi] = availableRange;
                          const capped = Math.min(hi, Math.max(lo, parsed));
                          const nextMax = Math.max(capped, priceRange[0]);
                          setPriceRange([priceRange[0], nextMax]);
                        }}
                        className="h-14 w-full min-w-[150px] rounded-2xl border border-border bg-white px-5 text-lg text-foreground outline-none transition-colors focus:border-accent md:w-[170px]"
                      />
                    </div>

                    <div className="min-w-0 flex-1 px-1">
                      <Slider
                        min={availableRange[0]}
                        max={availableRange[1]}
                        step={1000}
                        value={priceRange}
                        onValueChange={(value) => setPriceRange([value[0], value[1]])}
                        className="[&_[data-radix-slider-range]]:bg-accent [&_[data-radix-slider-thumb]]:h-5 [&_[data-radix-slider-thumb]]:w-5 [&_[data-radix-slider-thumb]]:border-accent [&_[data-radix-slider-thumb]]:bg-accent [&_[data-radix-slider-track]]:h-1.5 [&_[data-radix-slider-track]]:bg-accent/20"
                      />
                      <div className="mt-3 flex items-center justify-between text-sm text-muted-foreground">
                        <span>{formatPrice(priceRange[0])}</span>
                        <span>{formatPrice(priceRange[1])}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-8 rounded-[26px] border border-border bg-background px-6 py-5 shadow-[0_20px_60px_rgba(15,15,15,0.05)]">
              <div className="flex flex-col gap-4">
                <div className="flex flex-wrap items-center gap-3">
                  <div className="relative">
                    <ArrowUpDown className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                    <select
                      value={sortBy}
                      onChange={(e) => setSortBy(e.target.value)}
                      className="h-12 min-w-[270px] appearance-none rounded-2xl border border-border bg-white pl-12 pr-12 text-base text-foreground outline-none transition-colors focus:border-accent"
                    >
                      {sortOptions.map((opt) => (
                        <option key={opt.value} value={opt.value}>
                          {opt.label}
                        </option>
                      ))}
                    </select>
                    <ChevronDown className="pointer-events-none absolute right-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                  </div>

                  <div className="flex items-center gap-2" role="group" aria-label="Vista de resultados">
                    <button
                      type="button"
                      onClick={() => handleViewModeChange("grid")}
                      aria-pressed={viewMode === "grid"}
                      className={cn(
                        "rounded-2xl p-3 transition-all",
                        viewMode === "grid"
                          ? "bg-primary text-primary-foreground"
                          : "bg-background text-muted-foreground hover:bg-border",
                      )}
                      title="Vista Grid"
                    >
                      <Grid2X2 className="h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      onClick={() => handleViewModeChange("list")}
                      aria-pressed={viewMode === "list"}
                      className={cn(
                        "rounded-2xl p-3 transition-all",
                        viewMode === "list"
                          ? "bg-primary text-primary-foreground"
                          : "bg-background text-muted-foreground hover:bg-border",
                      )}
                      title="Vista Lista"
                    >
                      <List className="h-5 w-5" />
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setDrawerOpen(true)}
                    className="inline-flex items-center gap-2 rounded-2xl border border-border bg-white px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50 lg:hidden"
                  >
                    <SlidersHorizontal className="h-4 w-4" aria-hidden />
                    Filtros
                    {activeFilterCount > 0 && (
                      <span className="inline-flex min-w-5 items-center justify-center rounded-full bg-accent px-1.5 py-0.5 text-xs font-bold text-accent-foreground">
                        {activeFilterCount}
                      </span>
                    )}
                  </button>
                </div>

                <div className="flex flex-wrap items-start gap-3 lg:flex-nowrap lg:justify-between">
                  {categories.map((cat) => (
                    <button
                      key={cat.key}
                      type="button"
                      onClick={() => setActiveCategory(cat.key)}
                      className={cn(
                        "rounded-2xl border px-5 py-3 text-base font-medium transition-all",
                        activeCategory === cat.key
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-white text-foreground hover:border-accent/50",
                      )}
                    >
                      {cat.label}
                    </button>
                  ))}

                  <div className="hidden shrink-0 lg:flex lg:min-w-[250px] lg:flex-col lg:items-end">
                    <span className="mb-3 text-sm font-semibold text-foreground">Habitaciones</span>
                    <div className="flex items-center gap-2">
                      {[1, 2, 3, 4].map((bedroom) => {
                        const selected = advancedFilters.bedrooms.includes(bedroom);
                        return (
                          <button
                            key={`desktop-bed-${bedroom}`}
                            type="button"
                            onClick={() =>
                              handleFilterChange({
                                ...advancedFilters,
                                bedrooms: selected
                                  ? advancedFilters.bedrooms.filter((value) => value !== bedroom)
                                  : [...advancedFilters.bedrooms, bedroom].sort((a, b) => a - b),
                              })
                            }
                            className={cn(
                              "rounded-2xl border px-4 py-3 text-base font-medium transition-all",
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
                </div>
              </div>
            </div>

            <div className="mb-8" id="catalog-results-anchor" />

            <div
              className={
                viewMode === "grid"
                  ? "grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3"
                  : "flex flex-col gap-4"
              }
            >
              <AnimatePresence mode="popLayout">
                {filtered.map((project) => (
                  <ProjectCard key={project.id} project={project} listView={viewMode === "list"} />
                ))}
              </AnimatePresence>
            </div>

            {filtered.length === 0 && (
              <p className="py-12 text-center text-muted-foreground" role="status">
                <span className="font-medium text-foreground">No hay resultados.</span>{" "}
                Pruebe otros términos o ajuste el rango de precio y categoría.
              </p>
            )}
          </div>
        </div>
      </div>

      <Sheet open={drawerOpen} onOpenChange={setDrawerOpen}>
        <SheetContent side="bottom" className="h-[85vh] overflow-y-auto rounded-t-[28px] px-5">
          <SheetHeader className="border-b border-border pb-4">
            <SheetTitle>Filtros</SheetTitle>
          </SheetHeader>
          <div className="py-5">
            <FilterSidebar
              filters={advancedFilters}
              onChange={handleFilterChange}
              onClear={clearAdvancedFilters}
            />
          </div>
          <div className="sticky bottom-0 flex gap-3 border-t border-border bg-background pb-2 pt-4">
            {activeFilterCount > 0 ? (
              <button
                type="button"
                onClick={clearAdvancedFilters}
                className="inline-flex flex-1 items-center justify-center rounded-xl border border-border px-4 py-3 text-sm font-semibold text-foreground transition-colors hover:border-accent/50"
              >
                Limpiar todo
              </button>
            ) : (
              <div className="flex-1" />
            )}
            <button
              type="button"
              onClick={() => setDrawerOpen(false)}
              className="inline-flex flex-1 items-center justify-center rounded-xl bg-primary px-4 py-3 text-sm font-semibold text-primary-foreground transition-opacity hover:opacity-95"
            >
              Aplicar
            </button>
          </div>
        </SheetContent>
      </Sheet>
    </section>
  );
};

const ProjectCard = ({ project, listView }: { project: Project; listView?: boolean }) => {
  const { Icon: CatIcon, label: categoryLabel } = projectCategoryPresentation[project.category];
  const quoteHref =
    project.slug != null && project.slug.length > 0
      ? `/contactos?${CONTACT_PROJECT_PREFILL_QUERY}=${encodeURIComponent(project.slug)}`
      : "/contactos";
  const detailPath = project.slug ? `/proyecto/${project.slug}` : null;

  const quoteButton = (
    <Link
      to={quoteHref}
      className="inline-flex w-full items-center justify-center rounded-lg bg-accent px-4 py-2.5 text-center text-sm font-bold text-accent-foreground transition-opacity hover:opacity-95 sm:w-auto"
      onClick={(e) => e.stopPropagation()}
    >
      Solicitar cotización
    </Link>
  );

  const metaBadges = (
    <div className="mb-3 flex flex-wrap items-center gap-2">
      {project.energyClass && (
        <span
          className={cn(
            "inline-flex rounded-full border px-2.5 py-1 text-xs font-semibold",
            energyColors[project.energyClass],
          )}
        >
          Clase {project.energyClass}
        </span>
      )}
      {project.deliveryWeeks != null && (
        <span className="inline-flex items-center gap-1 text-xs font-medium text-muted-foreground">
          <Clock3 className="h-3.5 w-3.5" aria-hidden />
          ~{project.deliveryWeeks} sem.
        </span>
      )}
    </div>
  );

  const listInner = (
    <>
      <div className="relative h-40 w-40 shrink-0 overflow-hidden rounded-lg sm:h-44 sm:w-44">
        <img src={project.image} alt={project.name} className="h-full w-full object-cover" loading="lazy" />
        {project.badge && (
          <span
            className={cn(
              "absolute left-2 top-2 rounded px-2 py-1 text-xs font-semibold",
              project.badge === "New"
                ? "bg-accent text-accent-foreground"
                : "bg-primary text-primary-foreground",
            )}
          >
            {project.badge}
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-semibold text-foreground/90">
            <CatIcon className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
            {categoryLabel}
          </span>
          <h3 className="mb-2 text-lg font-semibold text-foreground">{project.name}</h3>
          <p className="mb-2 text-base leading-normal text-muted-foreground">{project.city}</p>
          {metaBadges}
          {project.area > 0 && (
            <div className="mb-3 flex flex-wrap items-center gap-4 text-base text-muted-foreground">
              <span className="flex items-center gap-1">
                <Maximize2 className="h-3.5 w-3.5" /> {project.area} m²
              </span>
              <span className="flex items-center gap-1">
                <BedDouble className="h-3.5 w-3.5" /> {project.bedrooms}
              </span>
              <span className="flex items-center gap-1">
                <Bath className="h-3.5 w-3.5" /> {project.bathrooms}
              </span>
            </div>
          )}
        </div>
        <div className="text-xl font-bold text-accent">€{project.price.toLocaleString()}</div>
      </div>
    </>
  );

  const gridInner = (
    <>
      <div className="relative aspect-[4/3] overflow-hidden">
        <img src={project.image} alt={project.name} className="h-full w-full object-cover" loading="lazy" />
        {project.badge && (
          <span
            className={cn(
              "absolute left-3 top-3 rounded-full px-3 py-1 text-xs font-semibold",
              project.badge === "New"
                ? "bg-accent text-accent-foreground"
                : "bg-primary text-primary-foreground",
            )}
          >
            {project.badge}
          </span>
        )}
      </div>
      <div className="p-6">
        <span className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border border-border bg-muted/60 px-2.5 py-0.5 text-xs font-semibold text-foreground/90">
          <CatIcon className="size-3.5 shrink-0" strokeWidth={2} aria-hidden />
          {categoryLabel}
        </span>
        <h3 className="mb-2 text-lg font-semibold text-foreground">{project.name}</h3>
        <p className="mb-2 text-base leading-normal text-muted-foreground">{project.city}</p>
        {metaBadges}
        {project.area > 0 && (
          <div className="mb-3 flex flex-wrap items-center gap-4 text-base text-muted-foreground">
            <span className="flex items-center gap-1">
              <Maximize2 className="h-3.5 w-3.5" /> {project.area} m²
            </span>
            <span className="flex items-center gap-1">
              <BedDouble className="h-3.5 w-3.5" /> {project.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="h-3.5 w-3.5" /> {project.bathrooms}
            </span>
          </div>
        )}
        <div className="text-xl font-bold text-accent">€{project.price.toLocaleString()}</div>
      </div>
    </>
  );

  return listView ? (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="interactive-card flex flex-col overflow-hidden rounded-lg border border-border bg-background sm:flex-row sm:items-stretch"
    >
      {detailPath ? (
        <Link
          to={detailPath}
          className="flex min-w-0 flex-1 gap-4 p-5 text-left focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring"
        >
          {listInner}
        </Link>
      ) : (
        <div className="flex flex-1 gap-4 p-5">{listInner}</div>
      )}
      <div className="flex flex-col justify-center border-t border-border bg-muted/20 px-4 py-4 sm:w-48 sm:border-l sm:border-t-0">
        {quoteButton}
      </div>
    </motion.div>
  ) : (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="interactive-card flex flex-col overflow-hidden rounded-xl border border-border bg-background"
    >
      {detailPath ? (
        <Link to={detailPath} className="block text-left focus-visible:outline focus-visible:ring-2 focus-visible:ring-ring">
          {gridInner}
        </Link>
      ) : (
        <div className="block">{gridInner}</div>
      )}
      <div className="border-t border-border bg-muted/20 px-6 py-4">{quoteButton}</div>
    </motion.div>
  );
};

export default ProjectCatalog;
