import { useState, useMemo, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, BedDouble, Bath, ArrowUpDown, Search, X, Grid2X2, List } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type Project } from "@/data/projects";

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

const calculateAvailableRange = (category: string, search: string): [number, number] => {
  const searchLower = search.toLowerCase();
  let filtered = projects.filter(
    (p) =>
      (category === "all" || p.category === category) &&
      (search === "" || p.name.toLowerCase().includes(searchLower))
  );

  if (filtered.length === 0) return [0, 400000];

  const prices = filtered.map((p) => p.price);
  const minPrice = Math.floor(Math.min(...prices) / 1000) * 1000;
  const maxPrice = Math.ceil(Math.max(...prices) / 1000) * 1000;

  return [minPrice, maxPrice];
};

const ProjectCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState("price-asc");
  const [searchQuery, setSearchQuery] = useState("");
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

  // Update priceRange when availableRange changes
  useMemo(() => {
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
    const searchLower = searchQuery.toLowerCase();

    let result = projects.filter(
      (p) =>
        (activeCategory === "all" || p.category === activeCategory) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1] &&
        (searchQuery === "" || p.name.toLowerCase().includes(searchLower))
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
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Nuestros Proyectos</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore nuestra colección de casas de diseño escandinavo, cabañas y soluciones de construcción.
          </p>
        </motion.div>

        {/* Search Input */}
        <div className="mb-6 flex items-center gap-2 bg-background border border-border rounded-lg px-3 py-2 w-full max-w-sm">
          <Search className="w-4 h-4 text-muted-foreground" />
          <input
            type="text"
            placeholder="Buscar proyectos..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 bg-transparent text-foreground outline-none text-sm"
          />
          {searchQuery && (
            <button
              onClick={() => setSearchQuery("")}
              className="p-1 hover:bg-border rounded transition-colors"
            >
              <X className="w-4 h-4 text-muted-foreground" />
            </button>
          )}
        </div>

        {/* View Mode Toggle */}
        <div className="mb-6 flex items-center gap-2">
          <button
            onClick={() => handleViewModeChange("grid")}
            className={`p-2 rounded-lg transition-all ${viewMode === "grid"
              ? "bg-primary text-primary-foreground"
              : "bg-background text-muted-foreground hover:bg-border"
              }`}
            title="Vista Grid"
          >
            <Grid2X2 className="w-5 h-5" />
          </button>
          <button
            onClick={() => handleViewModeChange("list")}
            className={`p-2 rounded-lg transition-all ${viewMode === "list"
              ? "bg-primary text-primary-foreground"
              : "bg-background text-muted-foreground hover:bg-border"
              }`}
            title="Vista Lista"
          >
            <List className="w-5 h-5" />
          </button>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${activeCategory === cat.key
                ? "bg-primary text-primary-foreground"
                : "bg-background text-muted-foreground hover:bg-border"
                }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-4 mb-8">
          <div className="flex items-center gap-2">
            <ArrowUpDown className="w-4 h-4 text-muted-foreground" />
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
              className="bg-background border border-border rounded-lg px-3 py-2 text-sm text-foreground"
            >
              {sortOptions.map((opt) => (
                <option key={opt.value} value={opt.value}>
                  {opt.label}
                </option>
              ))}
            </select>
          </div>

          <div className="flex flex-col gap-3 flex-1 min-w-[250px]">
            <div className="flex items-center gap-3">
              <span className="text-sm font-medium text-foreground whitespace-nowrap">Precio:</span>
              <div className="flex items-center gap-2 flex-1">
                <input
                  type="number"
                  min={availableRange[0]}
                  max={availableRange[1]}
                  value={priceRange[0]}
                  onChange={(e) => {
                    const newMin = Number(e.target.value);
                    if (newMin <= priceRange[1]) {
                      setPriceRange([newMin, priceRange[1]]);
                    }
                  }}
                  className="w-24 bg-background border border-border rounded px-2 py-1 text-sm text-foreground"
                />
                <span className="text-sm text-muted-foreground">-</span>
                <input
                  type="number"
                  min={availableRange[0]}
                  max={availableRange[1]}
                  value={priceRange[1]}
                  onChange={(e) => {
                    const newMax = Number(e.target.value);
                    if (newMax >= priceRange[0]) {
                      setPriceRange([priceRange[0], newMax]);
                    }
                  }}
                  className="w-24 bg-background border border-border rounded px-2 py-1 text-sm text-foreground"
                />
              </div>
              <span className="text-sm text-muted-foreground whitespace-nowrap">
                (€{availableRange[0].toLocaleString()} - €{availableRange[1].toLocaleString()})
              </span>
            </div>
            <div className="flex items-center gap-3">
              <input
                type="range"
                min={availableRange[0]}
                max={availableRange[1]}
                step={5000}
                value={priceRange[0]}
                onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                className="flex-1 accent-accent"
              />
              <input
                type="range"
                min={availableRange[0]}
                max={availableRange[1]}
                step={5000}
                value={priceRange[1]}
                onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                className="flex-1 accent-accent"
              />
            </div>
          </div>
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
          <p className="text-center text-muted-foreground py-12">
            No hay proyectos que coincidan con sus criterios. Intente ajustar los filtros.
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
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h3 className="font-semibold text-foreground text-lg mb-2">{project.name}</h3>
          {project.area > 0 && (
            <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3 flex-wrap">
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
        <div className="text-xl font-bold text-accent">
          €{project.price.toLocaleString()}
        </div>
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
