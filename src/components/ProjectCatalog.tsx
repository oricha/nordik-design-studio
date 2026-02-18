import { useState, useMemo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Maximize2, BedDouble, Bath, ArrowUpDown } from "lucide-react";
import { Link } from "react-router-dom";
import { projects, type Project } from "@/data/projects";

const categories = [
  { key: "all", label: "All" },
  { key: "houses", label: "Houses" },
  { key: "cabins", label: "Cabins" },
  { key: "materials", label: "Materials" },
  { key: "reforms", label: "Reforms" },
] as const;

const sortOptions = [
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "area-desc", label: "Largest First" },
  { value: "name-asc", label: "Name: A-Z" },
];

const ProjectCatalog = () => {
  const [activeCategory, setActiveCategory] = useState<string>("all");
  const [sortBy, setSortBy] = useState("price-asc");
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 400000]);

  const filtered = useMemo(() => {
    let result = projects.filter(
      (p) =>
        (activeCategory === "all" || p.category === activeCategory) &&
        p.price >= priceRange[0] &&
        p.price <= priceRange[1]
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
  }, [activeCategory, sortBy, priceRange]);

  return (
    <section id="projects" className="section-padding bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Our Projects</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Explore our collection of Scandinavian-designed homes, cabins, and construction solutions.
          </p>
        </motion.div>

        {/* Filters */}
        <div className="flex flex-wrap items-center gap-3 mb-6">
          {categories.map((cat) => (
            <button
              key={cat.key}
              onClick={() => setActiveCategory(cat.key)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeCategory === cat.key
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

          <div className="flex items-center gap-3 flex-1 min-w-[200px] max-w-sm">
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              €{priceRange[0].toLocaleString()}
            </span>
            <input
              type="range"
              min={0}
              max={400000}
              step={5000}
              value={priceRange[1]}
              onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
              className="flex-1 accent-accent"
            />
            <span className="text-sm text-muted-foreground whitespace-nowrap">
              €{priceRange[1].toLocaleString()}
            </span>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </AnimatePresence>
        </div>

        {filtered.length === 0 && (
          <p className="text-center text-muted-foreground py-12">
            No projects match your criteria. Try adjusting the filters.
          </p>
        )}
      </div>
    </section>
  );
};

const ProjectCard = ({ project }: { project: Project }) => {
  const content = (
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
            className={`absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold ${
              project.badge === "New"
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
    return <Link to={`/project/${project.slug}`}>{content}</Link>;
  }

  return content;
};

export default ProjectCatalog;
