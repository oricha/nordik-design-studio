import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import contactImage from "@/assets/contact-house.jpg";

const projectTypes = ["Casa Llave en Mano", "Cabaña", "Paneles SIP", "Renovación", "Otro"];

const ContactSection = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    types: [] as string[],
    message: "",
  });

  const toggleType = (type: string) => {
    setForm((prev) => ({
      ...prev,
      types: prev.types.includes(type)
        ? prev.types.filter((t) => t !== type)
        : [...prev.types, type],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // placeholder
    alert("¡Gracias! Su solicitud ha sido enviada.");
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
          <p className="text-muted-foreground">Cuéntanos sobre tu proyecto y te responderemos en 24 horas.</p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="rounded-2xl overflow-hidden hidden lg:block"
          >
            <img
              src={contactImage}
              alt="NordiK house exterior"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-background rounded-2xl p-8 flex flex-col gap-5"
          >
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
                  maxLength={20}
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
                    className={`px-3 py-1.5 rounded-full text-sm transition-all ${form.types.includes(type)
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

            <button
              type="submit"
              className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-semibold hover:opacity-90 transition-opacity flex items-center justify-center gap-2 mt-auto"
            >
              <Send className="w-4 h-4" />
              Enviar Solicitud
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
