import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { AlertCircle, Clock, FileText, Mail, MessageCircle, Phone, Send, Trash2 } from "lucide-react";
import contactImage from "@/assets/contact-house.jpg";
import { siteContact, whatsappConversationHref } from "@/data/siteContact";
import { projects } from "@/data/projects";
import { CONTACT_PROJECT_PREFILL_QUERY } from "@/constants/contactForm";
import SupportPresencePanel from "@/components/SupportPresencePanel";
import { FaqBrowse } from "@/components/FaqBrowse";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import {
  ATTACH_ACCEPT,
  ATTACH_MAX_FILES,
  mergeAttachmentFiles,
  revokeAttachmentPreview,
  type QuotationAttachment,
} from "@/lib/attachments";
import { generateQuotationTicketId } from "@/utils/quotationTicket";

const projectTypes = ["Casa Llave en Mano", "Cabaña", "Paneles SIP", "Renovación", "Otro"];
const budgetOptions = [
  { value: "lt50", label: "Menos de €50,000" },
  { value: "50-100", label: "€50,000 – €100,000" },
  { value: "100-200", label: "€100,000 – €200,000" },
  { value: "gt200", label: "Más de €200,000" },
] as const;

const renderFieldError = (message?: string) =>
  message ? (
    <p className="mt-1.5 inline-flex items-center gap-1.5 text-xs font-medium text-red-600">
      <AlertCircle className="h-3.5 w-3.5" aria-hidden />
      {message}
    </p>
  ) : null;

const ContactSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [faqOpen, setFaqOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    types: [] as string[],
    budget: "",
    location: "",
    financing: false,
    acceptedTerms: false,
    message: "",
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitAttempted, setSubmitAttempted] = useState(false);
  const [attachments, setAttachments] = useState<QuotationAttachment[]>([]);
  const [attachErr, setAttachErr] = useState("");
  const [thanksTicket, setThanksTicket] = useState<string | null>(null);
  const [thanksEmail, setThanksEmail] = useState<string>("");

  const prefillSlug = searchParams.get(CONTACT_PROJECT_PREFILL_QUERY);

  useEffect(() => {
    if (!prefillSlug) return;
    const proj = projects.find((p) => p.slug === prefillSlug);
    const label = proj?.name ?? prefillSlug;
    setForm((prev) => ({
      ...prev,
      message:
        prev.message.trim().length > 0
          ? prev.message
          : `Hola, solicito información y presupuesto orientativo sobre el proyecto «${label}».\n\n`,
    }));
    setSearchParams(
      (prev) => {
        const next = new URLSearchParams(prev);
        next.delete(CONTACT_PROJECT_PREFILL_QUERY);
        return next;
      },
      { replace: true },
    );
  }, [prefillSlug, setSearchParams]);

  const toggleType = (type: string) => {
    setForm((prev) => ({
      ...prev,
      types: prev.types.includes(type) ? prev.types.filter((t) => t !== type) : [...prev.types, type],
    }));
    setErrors((prev) => ({ ...prev, types: "" }));
  };

  const updateFormField = <K extends keyof typeof form>(field: K, value: (typeof form)[K]) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (field === "acceptedTerms" && value) {
      setErrors((prev) => ({ ...prev, terms: "" }));
      return;
    }
    if (field === "budget" && value) {
      setErrors((prev) => ({ ...prev, budget: "" }));
      return;
    }
    if (field === "name" || field === "email" || field === "phone") {
      const nextValue = String(value);
      const nextError = validateField(field, nextValue);
      if (!nextError) {
        setErrors((prev) => ({ ...prev, [field]: "" }));
      }
    }
  };

  const validateField = (name: "name" | "email" | "phone", value: string): string => {
    if (name === "name") {
      return value.trim().length >= 2 ? "" : "Introduce al menos 2 caracteres.";
    }
    if (name === "email") {
      return /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(value.trim()) ? "" : "Introduce un email válido.";
    }
    return value.replace(/\D/g, "").length >= 8 ? "" : "Introduce al menos 8 dígitos.";
  };

  const handleFieldBlur = (field: "name" | "email" | "phone") => {
    const nextError = validateField(field, form[field]);
    setErrors((prev) => ({ ...prev, [field]: nextError }));
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
    setSubmitAttempted(true);

    const nextErrors: Record<string, string> = {
      name: validateField("name", form.name),
      email: validateField("email", form.email),
      phone: validateField("phone", form.phone),
    };

    if (form.types.length === 0) {
      nextErrors.types = "Selecciona al menos un tipo de proyecto.";
    }
    if (!form.budget) {
      nextErrors.budget = "Selecciona un rango de presupuesto.";
    }
    if (!form.acceptedTerms) {
      nextErrors.terms = "Debes aceptar los términos para enviar la solicitud.";
    }

    setErrors(nextErrors);

    if (Object.values(nextErrors).some(Boolean)) {
      return;
    }

    const ticket = generateQuotationTicketId();
    const emailPayload = {
      ...form,
      ticket,
      timestamp: new Date().toISOString(),
      attachments: attachments.map((a) => ({ name: a.file.name, size: a.file.size })),
    };
    // TODO E1.4: conectar este payload a Resend/SendGrid o la edge function del formulario.
    console.log("Contacto landing:", emailPayload);
    attachments.forEach(revokeAttachmentPreview);
    setAttachments([]);
    setAttachErr("");
    setThanksTicket(ticket);
    setThanksEmail(form.email.trim());
    setForm({
      name: "",
      email: "",
      phone: "",
      types: [],
      budget: "",
      location: "",
      financing: false,
      acceptedTerms: false,
      message: "",
    });
    setErrors({});
    setSubmitAttempted(false);
  };

  return (
    <section id="contact" className="section-padding bg-warm-gray">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Contáctanos</h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Cuéntanos sobre tu proyecto: te responderemos en 24–48 h laborables.
          </p>
          <div className="mt-6 flex flex-col flex-wrap items-center justify-center gap-3 text-sm text-foreground sm:flex-row sm:gap-6">
            <a href={`tel:${siteContact.phoneHref}`} className="inline-flex items-center gap-2 hover:text-accent">
              <Phone className="h-4 w-4 text-muted-foreground" aria-hidden />
              {siteContact.phoneDisplay}
            </a>
            <a href={`mailto:${siteContact.emailHref}`} className="inline-flex items-center gap-2 hover:text-accent">
              <Mail className="h-4 w-4 text-muted-foreground" aria-hidden />
              {siteContact.emailDisplay}
            </a>
            <a href={whatsappConversationHref()} className="inline-flex items-center gap-2 hover:text-accent">
              <MessageCircle className="h-4 w-4 text-muted-foreground" aria-hidden />
              {siteContact.whatsapp.label}
            </a>
            <a href="#regional-contact" className="inline-flex items-center gap-2 hover:text-accent">
              Otros teléfonos
            </a>
            <span className="inline-flex items-center gap-2 text-muted-foreground">
              <Clock className="h-4 w-4" aria-hidden />
              {siteContact.hoursLong}
            </span>
          </div>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden hidden lg:block lg:sticky lg:top-28"
          >
            <img src={contactImage} alt="NordiK house exterior" className="w-full h-full object-cover max-h-[52rem]" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex flex-col gap-5"
          >
            {thanksTicket ? (
              <div className="rounded-2xl border border-emerald-200 bg-emerald-50 px-6 py-5 text-left text-emerald-950">
                <p className="text-sm font-semibold text-emerald-900">Solicitud registrada</p>
                <p className="mt-1 font-mono text-xl font-bold text-emerald-950">{thanksTicket}</p>
                <p className="mt-3 text-sm leading-relaxed text-emerald-900/90">
                  Confirmaremos tu solicitud por email en <strong>{thanksEmail}</strong> próximamente.
                </p>
                <p className="mt-2 text-sm">
                  <Link to={siteContact.resources.faqHref} className="font-semibold text-accent underline underline-offset-2 hover:opacity-80">
                    {siteContact.resources.faqLabel}
                  </Link>
                </p>
                <button
                  type="button"
                  onClick={() => {
                    setThanksTicket(null);
                    setThanksEmail("");
                  }}
                  className="mt-4 text-sm font-semibold text-accent underline underline-offset-2 hover:opacity-80"
                >
                  Ocultar aviso y enviar otra solicitud
                </button>
              </div>
            ) : null}

            <Dialog open={faqOpen} onOpenChange={setFaqOpen}>
              <DialogContent className="max-h-[calc(100dvh-2rem)] gap-6 overflow-y-auto sm:max-w-2xl">
                <DialogHeader>
                  <DialogTitle>Preguntas frecuentes</DialogTitle>
                  <DialogDescription>
                    Puedes seguir cumplimentando el formulario después de revisar estas respuestas.
                  </DialogDescription>
                </DialogHeader>
                <FaqBrowse intro="Selecciona categoría o busca palabras clave (planes, garantía SIP, zonas UE…)." />
              </DialogContent>
            </Dialog>

            <motion.form onSubmit={handleSubmit} className="bg-background rounded-2xl p-8 flex flex-col gap-5 shadow-sm">
              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Nombre</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => updateFormField("name", e.target.value)}
                  onBlur={() => handleFieldBlur("name")}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
                  placeholder="Tu nombre completo"
                />
                {renderFieldError(errors.name)}
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => updateFormField("email", e.target.value)}
                    onBlur={() => handleFieldBlur("email")}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
                    placeholder="correo@ejemplo.com"
                  />
                  {renderFieldError(errors.email)}
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Teléfono</label>
                  <input
                    type="tel"
                    required
                    maxLength={24}
                    value={form.phone}
                    onChange={(e) => updateFormField("phone", e.target.value)}
                    onBlur={() => handleFieldBlur("phone")}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
                    placeholder="+34 600 123 456"
                  />
                  {renderFieldError(errors.phone)}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Tipo de Proyecto <span className="text-red-500">*</span>
                </label>
                <div className="flex flex-wrap gap-2">
                  {projectTypes.map((type) => (
                    <button
                      key={type}
                      type="button"
                      onClick={() => toggleType(type)}
                      className={`px-3 py-1.5 rounded-full text-sm transition-all ${
                        form.types.includes(type)
                          ? "bg-primary text-primary-foreground"
                          : "bg-secondary text-muted-foreground hover:bg-border"
                      }`}
                    >
                      {type}
                    </button>
                  ))}
                </div>
                {renderFieldError(errors.types)}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Presupuesto aproximado <span className="text-red-500">*</span>
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {budgetOptions.map((option) => (
                    <button
                      key={option.value}
                      type="button"
                      onClick={() => updateFormField("budget", option.value)}
                      className={`rounded-xl border px-3 py-2.5 text-left text-sm transition-all ${
                        form.budget === option.value
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border hover:border-accent/50"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
                {submitAttempted ? renderFieldError(errors.budget) : null}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">
                  ¿Dónde quieres construir?
                  <span className="ml-1 text-xs text-muted-foreground">(opcional)</span>
                </label>
                <select
                  value={form.location}
                  onChange={(e) => updateFormField("location", e.target.value)}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
                >
                  <option value="">Selecciona país</option>
                  <option value="es">España</option>
                  <option value="pt">Portugal</option>
                  <option value="fr">Francia</option>
                  <option value="other">Otro</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.financing}
                    onChange={(e) => updateFormField("financing", e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-border accent-accent cursor-pointer"
                  />
                  <span className="text-sm text-foreground">
                    Estoy interesado/a en opciones de financiamiento
                  </span>
                </label>
                {form.financing && (
                  <p className="ml-7 rounded-lg bg-muted/50 p-3 text-xs leading-relaxed text-muted-foreground">
                    Te informaremos sobre opciones disponibles según tu proyecto y ubicación.
                  </p>
                )}
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Mensaje</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none resize-none"
                  placeholder="Háblanos sobre tu proyecto..."
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-1.5">Planos o referencias (opcional)</label>
                <input
                  type="file"
                  accept={ATTACH_ACCEPT}
                  multiple
                  onChange={handlePickAttachments}
                  className="w-full cursor-pointer rounded-lg border border-border bg-background px-3 py-2 text-sm file:mr-3 file:rounded-md file:border-0 file:bg-muted file:px-3 file:py-1.5 file:text-xs file:font-medium"
                />
                <p className="mt-1 text-xs text-muted-foreground">
                  PDF, JPG o PNG. Hasta {ATTACH_MAX_FILES} archivos · 10 MB c/u · subida servidor pendiente (F1.4.9).
                </p>
                {attachErr ? <p className="mt-2 text-sm text-red-600">{attachErr}</p> : null}
                {attachments.length > 0 ? (
                  <ul className="mt-3 space-y-2">
                    {attachments.map((row) => (
                      <li
                        key={row.id}
                        className="flex items-center gap-3 rounded-lg border border-border px-3 py-2 text-sm"
                      >
                        {row.previewUrl ? (
                          <img
                            src={row.previewUrl}
                            alt=""
                            role="presentation"
                            className="h-10 w-10 shrink-0 rounded object-cover"
                          />
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

              <p className="flex flex-wrap items-center gap-x-2 gap-y-1 text-sm leading-relaxed text-muted-foreground">
                <span>¿Plazos SIP, garantía o coberturas antes de llamarnos?</span>
                <button
                  type="button"
                  onClick={() => setFaqOpen(true)}
                  className="font-semibold text-accent underline underline-offset-2 hover:opacity-90"
                >
                  Ver FAQ primero (modal)
                </button>
                <span aria-hidden>/</span>
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  to="/faq"
                  className="font-semibold text-accent underline underline-offset-2 hover:opacity-90"
                >
                  FAQ en nueva pestaña
                </Link>
              </p>

              <div className="space-y-2">
                <label className="flex cursor-pointer items-start gap-3">
                  <input
                    type="checkbox"
                    checked={form.acceptedTerms}
                    onChange={(e) => updateFormField("acceptedTerms", e.target.checked)}
                    className="mt-0.5 h-4 w-4 rounded border-border accent-accent cursor-pointer"
                  />
                  <span className="text-sm leading-relaxed text-muted-foreground">
                    He leído y acepto la{" "}
                    <Link
                      to="/privacidad"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-2 hover:opacity-80"
                    >
                      política de privacidad
                    </Link>{" "}
                    y los{" "}
                    <Link
                      to="/terminos"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent underline underline-offset-2 hover:opacity-80"
                    >
                      términos de uso
                    </Link>
                    . <span className="text-red-500">*</span>
                  </span>
                </label>
                {submitAttempted ? renderFieldError(errors.terms) : null}
              </div>

              <button
                type="submit"
                disabled={!form.acceptedTerms}
                className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90 disabled:cursor-not-allowed disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                Solicitar presupuesto gratis
              </button>
            </motion.form>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 rounded-2xl border border-border bg-background p-8 shadow-sm"
        >
          <SupportPresencePanel />
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
