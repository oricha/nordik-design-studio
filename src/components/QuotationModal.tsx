import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
  serviceOption?: string;
}

type ProjectType = "houses" | "cabins" | "materials" | "reforms";
type BudgetRange = "under-50k" | "50k-100k" | "100k-200k" | "over-200k";

const PROJECT_TYPES: { value: ProjectType; label: string }[] = [
  { value: "houses", label: "Casas" },
  { value: "cabins", label: "Cabañas" },
  { value: "materials", label: "Materiales" },
  { value: "reforms", label: "Reformas" },
];

const BUDGET_RANGES: { value: BudgetRange; label: string }[] = [
  { value: "under-50k", label: "Menos de €50,000" },
  { value: "50k-100k", label: "€50,000 - €100,000" },
  { value: "100k-200k", label: "€100,000 - €200,000" },
  { value: "over-200k", label: "Más de €200,000" },
];

const QuotationModal = ({ isOpen, onClose, projectName = "", serviceOption = "" }: QuotationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectTypes: [] as ProjectType[],
    specificProject: projectName,
    service: serviceOption,
    budget: "" as BudgetRange | "",
    location: "",
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim()) newErrors.email = "El email es requerido";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Email no válido";
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es requerido";
    if (formData.projectTypes.length === 0) newErrors.projectTypes = "Selecciona al menos un tipo de proyecto";
    if (!formData.budget) newErrors.budget = "Selecciona un rango de presupuesto";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      console.log("Formulario enviado:", formData);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectTypes: [],
        specificProject: projectName,
        service: serviceOption,
        budget: "",
        location: "",
        message: "",
      });
      setErrors({});
      onClose();
      alert("¡Gracias! Tu solicitud ha sido enviada. Te contactaremos en 24-48 horas.");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleProjectTypeChange = (type: ProjectType) => {
    setFormData((prev) => ({
      ...prev,
      projectTypes: prev.projectTypes.includes(type)
        ? prev.projectTypes.filter((t) => t !== type)
        : [...prev.projectTypes, type],
    }));
    if (errors.projectTypes) {
      setErrors((prev) => ({ ...prev, projectTypes: "" }));
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Overlay */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-40"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-4 bg-background rounded-xl shadow-2xl z-50 max-h-[90vh] overflow-y-auto"
          >
            {/* Header */}
            <div className="sticky top-0 bg-background border-b border-border p-6 flex items-center justify-between">
              <h2 className="text-2xl font-bold text-foreground">Solicitar Cotización</h2>
              <button
                onClick={onClose}
                className="text-muted-foreground hover:text-foreground transition-colors p-1"
                aria-label="Cerrar"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="p-6 space-y-4">
              {/* Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Nombre Completo *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.name ? "border-red-500 bg-red-50" : "border-border bg-background"
                  } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Email *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.email ? "border-red-500 bg-red-50" : "border-border bg-background"
                  } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent`}
                  placeholder="tu@email.com"
                />
                {errors.email && <p className="text-sm text-red-500 mt-1">{errors.email}</p>}
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Teléfono *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.phone ? "border-red-500 bg-red-50" : "border-border bg-background"
                  } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent`}
                  placeholder="+34 123 456 789"
                />
                {errors.phone && <p className="text-sm text-red-500 mt-1">{errors.phone}</p>}
              </div>

              {/* Project Types */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  Tipos de Proyecto de Interés *
                </label>
                <div className="space-y-2">
                  {PROJECT_TYPES.map((type) => (
                    <label
                      key={type.value}
                      className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/5 cursor-pointer transition-colors"
                    >
                      <input
                        type="checkbox"
                        checked={formData.projectTypes.includes(type.value)}
                        onChange={() => handleProjectTypeChange(type.value)}
                        className="w-4 h-4 rounded border-border accent-primary cursor-pointer"
                      />
                      <span className="ml-3 text-sm font-medium text-foreground">{type.label}</span>
                    </label>
                  ))}
                </div>
                {errors.projectTypes && <p className="text-sm text-red-500 mt-2">{errors.projectTypes}</p>}
              </div>

              {/* Budget Range */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Presupuesto Aproximado *
                </label>
                <select
                  name="budget"
                  value={formData.budget}
                  onChange={handleChange}
                  className={`w-full px-4 py-2 rounded-lg border ${
                    errors.budget ? "border-red-500 bg-red-50" : "border-border bg-background"
                  } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent`}
                >
                  <option value="">Selecciona un rango de presupuesto</option>
                  {BUDGET_RANGES.map((range) => (
                    <option key={range.value} value={range.value}>
                      {range.label}
                    </option>
                  ))}
                </select>
                {errors.budget && <p className="text-sm text-red-500 mt-1">{errors.budget}</p>}
              </div>

              {/* Project Location */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Ubicación del Proyecto
                </label>
                <input
                  type="text"
                  name="location"
                  value={formData.location}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                  placeholder="Ej: Madrid, Barcelona, región..."
                />
              </div>

              {/* Specific Project (Optional) */}
              {projectName && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1">
                    Proyecto Específico
                  </label>
                  <input
                    type="text"
                    value={formData.specificProject}
                    className="w-full px-4 py-2 rounded-lg border border-border bg-muted text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                    readOnly
                  />
                </div>
              )}

              {/* Service Option */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Opción de Servicio
                </label>
                <select
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
                >
                  <option value="">Selecciona una opción</option>
                  <option value="solo-paneles">Solo Paneles SIP</option>
                  <option value="semi-llave-en-mano">Semi-Llave en Mano</option>
                  <option value="reforma-completa">Reforma Completa</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Mensaje Adicional
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
                  className="w-full px-4 py-2 rounded-lg border border-border bg-background text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                  placeholder="Cuéntanos más sobre tu proyecto..."
                />
              </div>

              {/* Submit Button */}
              <div className="flex gap-3 pt-4">
                <button
                  type="submit"
                  className="flex-1 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                >
                  Solicitar Cotización
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="flex-1 bg-border text-foreground px-6 py-3 rounded-lg font-semibold hover:bg-border/80 transition-colors"
                >
                  Cancelar
                </button>
              </div>

              {/* Privacy Note */}
              <p className="text-xs text-muted-foreground text-center">
                Tu información está protegida. No compartimos datos con terceros.
              </p>
            </form>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default QuotationModal;
