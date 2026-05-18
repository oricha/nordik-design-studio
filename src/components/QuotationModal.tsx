import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { X, CheckCircle, FileText, Trash2 } from "lucide-react";
import {
  ATTACH_ACCEPT,
  ATTACH_MAX_FILES,
  mergeAttachmentFiles,
  revokeAttachmentPreview,
  type QuotationAttachment,
} from "@/lib/attachments";
import { generateQuotationTicketId } from "@/utils/quotationTicket";
import { siteContact } from "@/data/siteContact";

interface QuotationModalProps {
  isOpen: boolean;
  onClose: () => void;
  projectName?: string;
  serviceOption?: string;
  quotationContext?: string;
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

const QuotationModal = ({
  isOpen,
  onClose,
  projectName = "",
  serviceOption = "",
  quotationContext = "",
}: QuotationModalProps) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectTypes: [] as ProjectType[],
    specificProject: projectName,
    service: serviceOption,
    budget: "" as BudgetRange | "",
    location: "",
    financing: "" as "yes" | "no" | "",
    termsAccepted: false,
    message: "",
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedData, setSubmittedData] = useState<typeof formData | null>(null);
  const [attachments, setAttachments] = useState<QuotationAttachment[]>([]);
  const [attachErr, setAttachErr] = useState("");
  const [submissionTicket, setSubmissionTicket] = useState<string | null>(null);

  useEffect(() => {
    if (!isOpen) return;
    setFormData((prev) => ({
      ...prev,
      specificProject: projectName,
      service: serviceOption ?? "",
      message: quotationContext ?? "",
    }));
    setErrors({});
  }, [isOpen, projectName, serviceOption, quotationContext]);

  useEffect(() => {
    if (isOpen) return;
    setAttachments((prev) => {
      prev.forEach(revokeAttachmentPreview);
      return [];
    });
    setAttachErr("");
    setSubmissionTicket(null);
    setShowSuccess(false);
  }, [isOpen]);

  const validateForm = () => {
    const newErrors: Record<string, string> = {};

    if (!formData.name.trim()) newErrors.name = "El nombre es requerido";
    if (!formData.email.trim()) newErrors.email = "El correo electrónico es obligatorio";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      newErrors.email = "Introduce un correo electrónico válido";
    if (!formData.phone.trim()) newErrors.phone = "El teléfono es requerido";
    if (formData.projectTypes.length === 0) newErrors.projectTypes = "Selecciona al menos un tipo de proyecto";
    if (!formData.budget) newErrors.budget = "Selecciona un rango de presupuesto";
    if (!formData.termsAccepted) newErrors.termsAccepted = "Debes aceptar los términos y privacidad para continuar";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handlePickAttachments = (e: React.ChangeEvent<HTMLInputElement>) => {
    const list = e.target.files;
    if (!list?.length) return;
    const { next, error } = mergeAttachmentFiles(attachments, list);
    setAttachments(next);
    setAttachErr(error ?? "");
    e.target.value = "";
  };

  const removeAttachmentRow = (id: string) => {
    setAttachments((prev) => {
      const row = prev.find((r) => r.id === id);
      if (row) revokeAttachmentPreview(row);
      return prev.filter((r) => r.id !== id);
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validateForm()) {
      const ticket = generateQuotationTicketId();
      console.log("Formulario enviado:", {
        formData,
        ticket,
        attachments: attachments.map((a) => ({ name: a.file.name, size: a.file.size })),
      });
      attachments.forEach(revokeAttachmentPreview);
      setAttachments([]);
      setSubmittedData(formData);
      setSubmissionTicket(ticket);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        projectTypes: [],
        specificProject: projectName,
        service: serviceOption,
        budget: "",
        location: "",
        financing: "",
        termsAccepted: false,
        message: quotationContext ?? "",
      });
      setErrors({});
    } else {
      // Scroll to the first error
      const firstErrorField = Object.keys(errors)[0];
      if (firstErrorField) {
        const element = document.querySelector(`[name="${firstErrorField}"]`);
        if (element) {
          element.scrollIntoView({ behavior: "smooth", block: "center" });
          (element as HTMLElement).focus();
        }
      }
    }
  };

  useEffect(() => {
    if (showSuccess) {
      const timer = setTimeout(() => {
        setShowSuccess(false);
        onClose();
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [showSuccess, onClose]);

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

  const handleTermsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, termsAccepted: e.target.checked }));
    if (errors.termsAccepted) {
      setErrors((prev) => ({ ...prev, termsAccepted: "" }));
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
              {/* Error Summary */}
              {Object.keys(errors).length > 0 && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="rounded-lg border border-red-200 bg-red-50 p-4"
                >
                  <div className="flex gap-3">
                    <div className="text-red-600 font-semibold flex-shrink-0">⚠</div>
                    <div>
                      <p className="text-sm font-semibold text-red-900 mb-2">
                        Por favor corrige {Object.keys(errors).length} error{Object.keys(errors).length > 1 ? "es" : ""}:
                      </p>
                      <ul className="text-sm text-red-800 space-y-1">
                        {Object.entries(errors).map(([field, message]) => (
                          <li key={field} className="flex gap-2">
                            <span>•</span>
                            <span>{message}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              )}

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
                  className={`w-full px-4 py-2 rounded-lg border-2 transition-colors ${
                    errors.name ? "border-red-500 bg-red-50 focus:ring-red-500" : "border-border bg-background focus:ring-accent"
                  } text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2`}
                  placeholder="Tu nombre"
                />
                {errors.name && <p className="text-sm text-red-500 mt-1">{errors.name}</p>}
              </div>

              {/* Correo electrónico */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Correo electrónico *
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

              {/* Financing */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-3">
                  ¿Necesita financiación?
                </label>
                <div className="space-y-2">
                  <label className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/5 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="financing"
                      value="yes"
                      checked={formData.financing === "yes"}
                      onChange={handleChange}
                      className="w-4 h-4 cursor-pointer accent-primary"
                    />
                    <span className="ml-3 text-sm font-medium text-foreground">Sí, me interesan opciones de financiación</span>
                  </label>
                  <label className="flex items-center p-3 rounded-lg border border-border hover:bg-accent/5 cursor-pointer transition-colors">
                    <input
                      type="radio"
                      name="financing"
                      value="no"
                      checked={formData.financing === "no"}
                      onChange={handleChange}
                      className="w-4 h-4 cursor-pointer accent-primary"
                    />
                    <span className="ml-3 text-sm font-medium text-foreground">No, no necesito financiación</span>
                  </label>
                </div>
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

              {/* Adjuntos — F1.4.9 (subida API en backend pendiente) */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-1">
                  Planos o referencias (opcional)
                </label>
                <input
                  type="file"
                  accept={ATTACH_ACCEPT}
                  multiple
                  onChange={handlePickAttachments}
                  className="w-full cursor-pointer rounded-lg border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-sm file:font-medium"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  PDF, JPG o PNG. Hasta {ATTACH_MAX_FILES} archivos, 10 MB cada uno. Previsualización local; la subida
                  segura al servidor se configurará después.
                </p>
                {attachErr ? <p className="mt-2 text-sm text-red-600">{attachErr}</p> : null}
                {attachments.length > 0 ? (
                  <ul className="mt-3 space-y-2">
                    {attachments.map((row) => (
                      <li
                        key={row.id}
                        className="flex items-center gap-3 rounded-lg border border-border px-3 py-2 text-sm text-foreground"
                      >
                        {row.previewUrl ? (
                          <img src={row.previewUrl} alt="" role="presentation" className="h-10 w-10 shrink-0 rounded object-cover" />
                        ) : (
                          <FileText className="h-8 w-8 shrink-0 text-muted-foreground" aria-hidden />
                        )}
                        <span className="min-w-0 flex-1 truncate">{row.file.name}</span>
                        <button
                          type="button"
                          aria-label={`Quitar ${row.file.name}`}
                          onClick={() => removeAttachmentRow(row.id)}
                          className="shrink-0 rounded-lg p-1.5 text-muted-foreground hover:bg-muted hover:text-foreground"
                        >
                          <Trash2 className="h-4 w-4" />
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </div>

              {/* Terms and Privacy */}
              <div>
                <label className="flex items-start gap-3 p-3 rounded-lg border border-border hover:bg-accent/5 cursor-pointer transition-colors">
                  <input
                    type="checkbox"
                    checked={formData.termsAccepted}
                    onChange={handleTermsChange}
                    className="w-4 h-4 mt-1 rounded accent-primary cursor-pointer flex-shrink-0"
                  />
                  <span className="text-sm text-foreground">
                    Acepto los{" "}
                    <a href="#" className="text-accent hover:underline font-medium">
                      términos y condiciones
                    </a>
                    {" "}y la{" "}
                    <a href="#" className="text-accent hover:underline font-medium">
                      política de privacidad
                    </a>
                    {" "}*
                  </span>
                </label>
                {errors.termsAccepted && <p className="text-sm text-red-500 mt-2">{errors.termsAccepted}</p>}
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

          {/* Success Modal */}
          {showSuccess && (
            <>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={() => setShowSuccess(false)}
                className="fixed inset-0 bg-black/50 z-40"
              />
              <motion.div
                initial={{ opacity: 0, scale: 0.95, y: 20 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95, y: 20 }}
                transition={{ duration: 0.2 }}
                className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-lg mx-4 bg-background rounded-xl shadow-2xl z-50 p-8"
              >
                {/* Success Content */}
                <div className="flex flex-col items-center text-center">
                  {/* Success Icon */}
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100, damping: 15 }}
                    className="mb-4"
                  >
                    <CheckCircle className="w-16 h-16 text-green-500" />
                  </motion.div>

                  {/* Success Title */}
                  <h2 className="text-2xl font-bold text-foreground mb-2">
                    ¡Solicitud Enviada!
                  </h2>

                  {/* Success Message */}
                  <p className="text-muted-foreground mb-4">
                    Gracias por tu interés en nuestros servicios. Hemos recibido tu solicitud de cotización.
                  </p>

                  {submissionTicket ? (
                    <div className="mb-4 w-full rounded-lg border border-border bg-muted/50 p-4 text-left">
                      <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Referencia</p>
                      <p className="mt-1 font-mono text-lg font-bold text-foreground">{submissionTicket}</p>
                      <p className="mt-3 text-xs text-muted-foreground">
                        Guárdala para cualquier gestión con comercial.
                      </p>
                    </div>
                  ) : null}

                  {/* Submitted Info */}
                  {submittedData && (
                    <div className="w-full bg-accent/5 rounded-lg p-4 mb-6 text-left">
                      <p className="text-sm text-muted-foreground mb-2">Información registrada:</p>
                      <div className="space-y-1">
                        <p className="text-sm font-medium text-foreground">
                          <span className="text-muted-foreground">Nombre:</span> {submittedData.name}
                        </p>
                        <p className="text-sm font-medium text-foreground">
                          <span className="text-muted-foreground">Correo:</span> {submittedData.email}
                        </p>
                      </div>
                    </div>
                  )}

                  <p className="mb-3 text-left text-xs leading-relaxed text-muted-foreground">
                    <strong className="text-foreground">Autorespuesta (F1.4.8):</strong> al conectar el formulario al
                    correo automático recibirás en <strong className="text-foreground">{submittedData?.email}</strong>{" "}
                    un resumen con esta referencia, el SLA laborable 24–48 h y enlaces útiles. Mientras tanto, puedes
                    revisar{" "}
                    <Link to={siteContact.resources.faqHref} className="font-semibold text-accent underline-offset-2 hover:underline">
                      {siteContact.resources.faqLabel}
                    </Link>
                    .
                  </p>

                  {/* Follow-up Message */}
                  <p className="text-sm text-muted-foreground mb-6">
                    Te contactaremos en 24-48 horas laborables para concretar los detalles de tu proyecto.
                  </p>

                  {/* Close Button */}
                  <button
                    onClick={() => setShowSuccess(false)}
                    className="w-full bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:bg-primary/90 transition-colors"
                  >
                    Entendido
                  </button>

                  {/* Auto-close hint */}
                  <p className="text-xs text-muted-foreground mt-4">
                    Esta ventana se cerrará automáticamente en unos segundos
                  </p>
                </div>
              </motion.div>
            </>
          )}
        </>
      )}
    </AnimatePresence>
  );
};

export default QuotationModal;
