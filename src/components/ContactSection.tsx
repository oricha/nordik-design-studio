import { useState, useEffect } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { motion } from "framer-motion";
import { Clock, FileText, Mail, MessageCircle, Phone, Send, Trash2 } from "lucide-react";
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

const ContactSection = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [faqOpen, setFaqOpen] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    types: [] as string[],
    message: "",
  });
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
    const ticket = generateQuotationTicketId();
    console.log("Contacto landing:", {
      form,
      ticket,
      attachments: attachments.map((a) => ({ name: a.file.name, size: a.file.size })),
    });
    attachments.forEach(revokeAttachmentPreview);
    setAttachments([]);
    setAttachErr("");
    setThanksTicket(ticket);
    setThanksEmail(form.email.trim());
    setForm({ name: "", email: "", phone: "", types: [], message: "" });
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
                  <strong className="text-emerald-950">Confirmación por email (F1.4.8):</strong> en producción podrás
                  recibir en <strong>{thanksEmail}</strong> un mensaje automático con este código, el resumen enviado y
                  enlaces útiles ({siteContact.resources.faqLabel}). Mientras conectamos el envío SMTP, usa la
                  referencia si nos escribes.
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
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
                  placeholder="Tu nombre completo"
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Correo electrónico</label>
                  <input
                    type="email"
                    required
                    maxLength={255}
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
                    placeholder="correo@ejemplo.com"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-1.5">Teléfono</label>
                  <input
                    type="tel"
                    required
                    maxLength={24}
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    className="w-full border border-border rounded-lg px-4 py-2.5 text-sm bg-background text-foreground focus:ring-2 focus:ring-accent focus:outline-none"
                    placeholder="+34 600 123 456"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">Tipo de Proyecto</label>
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

              <button
                type="submit"
                className="mt-auto flex items-center justify-center gap-2 rounded-lg bg-primary px-6 py-3 font-bold text-primary-foreground transition-opacity hover:opacity-90"
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
