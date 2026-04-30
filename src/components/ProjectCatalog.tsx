import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Maximize2,
  BedDouble,
  Bath,
  ArrowUpDown,
  Search,
  X,
  Grid2X2,
  List,
  SlidersHorizontal,
  ChevronDown,
} from "lucide-react";
import { Link, useSearchParams } from "react-router-dom";
import { PROJECT_CATALOG_QUERY_KEY } from "@/constants/projectCatalog";
import { projects, type Project } from "@/data/projects";
import { Slider } from "@/components/ui/slider";
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
];

const formatPrice = (value: number) => `€ ${value.toLocaleString()}`;

const calculateAvailableRange = (category: string, search: string): [number, number] => {
  const filtered = projects.filter(
    (p) =>
      (category === "all" || p.category === category) && projectMatchesSearch(p, search)
  );

  if (filtered.length === 0) return [0, 400000];

  const prices = filtered.map((p) => p.price);
  const minPrice = Math.floor(Math.min(...prices) / 1000) * 1000;
  const maxPrice = Math.ceil(Math.max(...prices) / 1000) * 1000;

  return [minPrice, maxPrice];
};

const QUERY_KEY = PROJECT_CATALOG_QUERY_KEY;

const ProjectCatalog = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState("price-asc");
  const searchQuery = searchParams.get(QUERY_KEY) ?? "";

  const setCatalogSearch = (value: string) => {
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        if (!value.trim()) {
          next.delete(QUERY_KEY);
        } else {
          next.set(QUERY_KEY, value);
        }
        return next;
      },
      { replace: true }
    );
  };

  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");

  useEffect(() => {
    const saved = sessionStorage.getItem("projectViewMode") as "grid" | "list" | null;
    if (saved) {
      setViewMode(saved);
    }
  }, []);

  const handleViewModeChange = (mode: "grid" | "list") => {
    setViewMode(mode);
    sessionStorage.setItem("projectViewMode", mode);
  };

  const availableRange = useMemo(
    () => calculateAvailableRange(activeCategory, searchQuery),
    [activeCategory, searchQuery]
  );

  const [priceRange, setPriceRange] = useState<[number, number]>(availableRange);

  useEffect(() => {
    setPriceRange((prev) => {
      const [minAvail, maxAvail] = availableRange;
      const [minCurrent, maxCurrent] = prev;

      const newMin = Math.max(minCurrent, minAvail);
      const newMax = Math.min(maxCurrent, maxAvail);

      if (newMin <= newMax) {
        return [newMin, newMax];
      }
      return [minAvail, maxAvail];
    });
  }, [availableRange]);

  const filtered = useMemo(() => {
    const result = projects.filter(
      (p) =>
        (activeCategory === "all" || p.category === activeCategory) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1] &&
        projectMatchesSearch(p, searchQuery)
    );

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
  }, [activeCategory, sortBy, priceRange, searchQuery]);

  return (
    <section id="projects" className="section-padding bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Buscar casas</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            Encuentra la casa o cabaña perfecta para tu próxima escapada.
          </p>
        </motion.div>

        <div className="mb-4 rounded-[26px] border border-border bg-background px-6 py-6 shadow-[0_20px_60px_rgba(15,15,15,0.06)]">
          <div className="flex flex-col gap-6 xl:flex-row xl:items-center">
            <div className="flex min-w-0 flex-1 items-center rounded-2xl border border-border bg-white px-5 py-4">
              <Search className="mr-4 h-5 w-5 flex-shrink-0 text-foreground" />
              <input
                type="text"
                placeholder="Buscar por nombre, ciudad (p. ej. Oulu), tipo como «cabaña», «sip»..."
                value={searchQuery}
                onChange={(e) => setCatalogSearch(e.target.value)}
                className="w-full bg-transparent text-base text-foreground outline-none placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setCatalogSearch("")}
                  className="ml-3 rounded-full p-1 text-muted-foreground transition-colors hover:bg-muted hover:text-foreground"
                  aria-label="Limpiar búsqueda"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>

            <div className="flex flex-[1.25] flex-col gap-3">
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

            <button
              type="button"
              className="inline-flex h-14 items-center justify-center gap-3 rounded-2xl bg-primary px-8 text-base font-semibold text-primary-foreground transition-transform hover:scale-[1.01]"
              onClick={() => document.getElementById("catalog-results-anchor")?.scrollIntoView({ behavior: "smooth" })}
            >
              <Search className="h-5 w-5" />
              Buscar
            </button>
          </div>
        </div>

        <div className="mb-8 rounded-[26px] border border-border bg-background px-6 py-5 shadow-[0_20px_60px_rgba(15,15,15,0.05)]">
          <div className="flex flex-col gap-4 xl:flex-row xl:items-center xl:justify-between">
            <div className="flex flex-col gap-4 xl:flex-row xl:items-center">
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

              <div className="flex flex-wrap items-center gap-3">
                {categories.map((cat) => (
                  <button
                    key={cat.key}
                    type="button"
                    onClick={() => setActiveCategory(cat.key)}
                    className={`rounded-2xl border px-5 py-3 text-base font-medium transition-all ${
                      activeCategory === cat.key
                        ? "border-primary bg-primary text-primary-foreground"
                        : "border-border bg-white text-foreground hover:border-accent/50"
                    }`}
                  >
                    {cat.label}
                  </button>
                ))}
              </div>
            </div>

            <button className="inline-flex h-12 items-center justify-center gap-3 self-start rounded-2xl border border-border bg-white px-5 text-base text-foreground transition-colors hover:border-accent/50">
              <SlidersHorizontal className="h-4 w-4" />
              Filtros avanzados
              <ChevronDown className="h-4 w-4 text-muted-foreground" />
            </button>
          </div>
        </div>

        <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between" id="catalog-results-anchor">
          <div className="flex items-center gap-2" role="group" aria-label="Vista de resultados">
            <button
              type="button"
              onClick={() => handleViewModeChange("grid")}
              aria-pressed={viewMode === "grid"}
              className={`rounded-2xl p-3 transition-all ${
                viewMode === "grid"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-border"
              }`}
              title="Vista Grid"
            >
              <Grid2X2 className="h-5 w-5" />
            </button>
            <button
              type="button"
              onClick={() => handleViewModeChange("list")}
              aria-pressed={viewMode === "list"}
              className={`rounded-2xl p-3 transition-all ${
                viewMode === "list"
                  ? "bg-primary text-primary-foreground"
                  : "bg-background text-muted-foreground hover:bg-border"
              }`}
              title="Vista Lista"
            >
              <List className="h-5 w-5" />
            </button>
          </div>

          <p className="text-right text-lg text-muted-foreground">
            {filtered.length} resultados encontrados
          </p>
        </div>

        {/* Grid */}
        <div
          className={
            viewMode === "grid"
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
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
          <p className="text-center text-muted-foreground py-12" role="status">
            <span className="font-medium text-foreground">No hay resultados.</span>{" "}
            Pruebe otros términos o ajuste el rango de precio y categoría.
          </p>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project, listView }: { project: Project; listView?: boolean }) => {
  const content = listView ? (
    <motion.div
      layout
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -20 }}
      transition={{ duration: 0.3 }}
      className="bg-background rounded-lg overflow-hidden hover-lift group cursor-pointer flex gap-4 p-4 border border-border"
    >
      <div className="relative w-40 h-40 flex-shrink-0 overflow-hidden rounded-lg">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {project.badge && (
          <span
            className={`absolute top-2 left-2 px-2 py-1 rounded text-xs font-semibold ${project.badge === "New"
              ? "bg-accent text-accent-foreground"
              : "bg-primary text-primary-foreground"
              }`}
          >
            {project.badge}
          </span>
        )}
      </div>
      <div className="flex min-w-0 flex-1 flex-col justify-between">
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-2">{project.name}</h3>
          <p className="text-sm text-muted-foreground mb-2">{project.city}</p>
          {project.area > 0 && (
            <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
              <span className="flex items-center gap-1">
                <Maximize2 className="w-3.5 h-3.5" /> {project.area} m²
              </span>
              <span className="flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5" /> {project.bedrooms}
              </span>
              <span className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5" /> {project.bathrooms}
              </span>
            </div>
          )}
        </div>
        <div className="text-xl font-bold text-accent">€{project.price.toLocaleString()}</div>
      </div>
    </motion.div>
  ) : (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="bg-background rounded-xl overflow-hidden hover-lift group cursor-pointer"
    >
      <div className="relative aspect-[4/3] overflow-hidden">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        {project.badge && (
          <span
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${project.badge === "New"
              ? "bg-accent text-accent-foreground"
              : "bg-primary text-primary-foreground"
              }`}
          >
            {project.badge}
          </span>
        )}
      </div>
      <div className="p-5">
        <h3 className="font-semibold text-foreground text-lg mb-2">{project.name}</h3>
        <p className="text-sm text-muted-foreground mb-2">{project.city}</p>
        {project.area > 0 && (
          <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
            <span className="flex items-center gap-1">
              <Maximize2 className="w-3.5 h-3.5" /> {project.area} m²
            </span>
            <span className="flex items-center gap-1">
              <BedDouble className="w-3.5 h-3.5" /> {project.bedrooms}
            </span>
            <span className="flex items-center gap-1">
              <Bath className="w-3.5 h-3.5" /> {project.bathrooms}
            </span>
          </div>
        )}
        <div className="text-xl font-bold text-accent">
          €{project.price.toLocaleString()}
        </div>
      </div>
    </motion.div>
  );

  if (project.slug) {
    return <Link to={`/proyecto/${project.slug}`}>{content}</Link>;
  }

  return content;
};

export default ProjectCatalog;
