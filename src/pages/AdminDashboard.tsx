import { useCallback, useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AlertCircle, LogOut, RefreshCcw } from "lucide-react";
import { ContactsTable } from "@/components/Admin/ContactsTable";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  listContactSubmissions,
  updateContactSubmissionStatus,
  type ContactStatus,
  type ContactSubmission,
} from "@/lib/adminContacts";
import { useAdminAuth } from "@/hooks/useAdminAuth";

const statusOptions: Array<{ value: ContactStatus | "all"; label: string }> = [
  { value: "all", label: "Todos" },
  { value: "new", label: "Nuevos" },
  { value: "viewed", label: "Vistos" },
  { value: "responded", label: "Respondidos" },
];

const detailRows = (contact: ContactSubmission) => [
  ["Nombre", contact.name],
  ["Email", contact.email],
  ["Teléfono", contact.phone || "No indicado"],
  ["Tipo de proyecto", contact.project_types?.join(", ") || "No indicado"],
  ["Presupuesto", contact.budget || "No indicado"],
  ["Ubicación", contact.location || "No indicada"],
  ["Financiación", contact.financing ? "Interesado" : "No indicada"],
  ["Adjuntos", contact.attachments?.length ? `${contact.attachments.length} adjunto(s)` : "Sin adjuntos"],
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const { signOut, user } = useAdminAuth();
  const [contacts, setContacts] = useState<ContactSubmission[]>([]);
  const [statusFilter, setStatusFilter] = useState<ContactStatus | "all">("all");
  const [query, setQuery] = useState("");
  const [selectedContact, setSelectedContact] = useState<ContactSubmission | null>(null);
  const [loading, setLoading] = useState(true);
  const [updating, setUpdating] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const loadContacts = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const nextContacts = await listContactSubmissions({ status: statusFilter, query });
      setContacts(nextContacts);
    } catch (loadError) {
      setError(loadError instanceof Error ? loadError.message : "No se pudieron cargar los contactos.");
    } finally {
      setLoading(false);
    }
  }, [query, statusFilter]);

  useEffect(() => {
    loadContacts();
  }, [loadContacts]);

  const counts = useMemo(() => {
    return contacts.reduce(
      (acc, contact) => {
        acc[contact.status] += 1;
        return acc;
      },
      { new: 0, viewed: 0, responded: 0 } satisfies Record<ContactStatus, number>,
    );
  }, [contacts]);

  const onStatusChange = async (contact: ContactSubmission, status: ContactStatus) => {
    setUpdating(true);
    setError(null);
    try {
      const updated = await updateContactSubmissionStatus(contact.id, status);
      setContacts((current) => current.map((item) => (item.id === updated.id ? updated : item)));
      setSelectedContact(updated);
    } catch (updateError) {
      setError(updateError instanceof Error ? updateError.message : "No se pudo actualizar el estado.");
    } finally {
      setUpdating(false);
    }
  };

  const logout = async () => {
    await signOut();
    navigate("/admin/login", { replace: true });
  };

  return (
    <main className="min-h-screen bg-muted/30 px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <header className="mb-8 flex flex-col gap-4 rounded-2xl border border-border bg-background p-6 shadow-sm md:flex-row md:items-center md:justify-between">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-accent">Admin Panel</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight text-foreground">NordiK Contactos</h1>
            <p className="mt-2 text-sm text-muted-foreground">
              Sesión: {user?.email ?? "administrador"}
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <Button type="button" variant="outline" onClick={loadContacts} disabled={loading}>
              <RefreshCcw className="mr-2 h-4 w-4" aria-hidden />
              Actualizar
            </Button>
            <Button type="button" variant="outline" onClick={logout}>
              <LogOut className="mr-2 h-4 w-4" aria-hidden />
              Salir
            </Button>
          </div>
        </header>

        <section className="mb-6 grid gap-4 md:grid-cols-3">
          <div className="rounded-xl border border-border bg-background p-5">
            <p className="text-sm text-muted-foreground">Nuevos</p>
            <p className="mt-2 text-3xl font-bold text-foreground">{counts.new}</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <p className="text-sm text-muted-foreground">Vistos</p>
            <p className="mt-2 text-3xl font-bold text-foreground">{counts.viewed}</p>
          </div>
          <div className="rounded-xl border border-border bg-background p-5">
            <p className="text-sm text-muted-foreground">Respondidos</p>
            <p className="mt-2 text-3xl font-bold text-foreground">{counts.responded}</p>
          </div>
        </section>

        <section className="rounded-2xl border border-border bg-background p-6 shadow-sm">
          <div className="mb-6 grid gap-4 md:grid-cols-[1fr_14rem]">
            <div className="space-y-2">
              <Label htmlFor="contact-search">Buscar por nombre o email</Label>
              <Input
                id="contact-search"
                type="search"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                placeholder="Ej. maria@nordik..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="contact-status">Estado</Label>
              <select
                id="contact-status"
                value={statusFilter}
                onChange={(event) => setStatusFilter(event.target.value as ContactStatus | "all")}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                {statusOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {error ? (
            <Alert variant="destructive" className="mb-6">
              <AlertCircle className="h-4 w-4" aria-hidden />
              <AlertTitle>Error de administración</AlertTitle>
              <AlertDescription>{error}</AlertDescription>
            </Alert>
          ) : null}

          {loading ? (
            <div className="rounded-lg border border-dashed border-border px-6 py-12 text-center text-sm text-muted-foreground">
              Cargando contactos...
            </div>
          ) : (
            <ContactsTable contacts={contacts} onView={setSelectedContact} />
          )}
        </section>
      </div>

      <Dialog open={Boolean(selectedContact)} onOpenChange={(open) => !open && setSelectedContact(null)}>
        {selectedContact ? (
          <DialogContent className="max-h-[90vh] overflow-y-auto sm:max-w-2xl">
            <DialogHeader>
              <DialogTitle>{selectedContact.name}</DialogTitle>
              <DialogDescription>{selectedContact.email}</DialogDescription>
            </DialogHeader>

            <div className="grid gap-3 sm:grid-cols-2">
              {detailRows(selectedContact).map(([label, value]) => (
                <div key={label} className="rounded-lg border border-border p-3">
                  <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">{label}</p>
                  <p className="mt-1 text-sm text-foreground">{value}</p>
                </div>
              ))}
            </div>

            <div className="space-y-2">
              <Label htmlFor="detail-status">Estado</Label>
              <select
                id="detail-status"
                value={selectedContact.status}
                disabled={updating}
                onChange={(event) => onStatusChange(selectedContact, event.target.value as ContactStatus)}
                className="flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
              >
                <option value="new">Nuevo</option>
                <option value="viewed">Visto</option>
                <option value="responded">Respondido</option>
              </select>
            </div>

            <div className="rounded-lg border border-border bg-muted/40 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-muted-foreground">Mensaje</p>
              <p className="mt-2 whitespace-pre-wrap text-sm leading-relaxed text-foreground">
                {selectedContact.message}
              </p>
            </div>
          </DialogContent>
        ) : null}
      </Dialog>
    </main>
  );
};

export default AdminDashboard;
