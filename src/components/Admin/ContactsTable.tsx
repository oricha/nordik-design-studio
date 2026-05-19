import { Eye } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { ContactSubmission, ContactStatus } from "@/lib/adminContacts";

const statusLabels: Record<ContactStatus, string> = {
  new: "Nuevo",
  viewed: "Visto",
  responded: "Respondido",
};

const statusVariants: Record<ContactStatus, "default" | "secondary" | "outline"> = {
  new: "default",
  viewed: "secondary",
  responded: "outline",
};

const formatDate = (value: string) => {
  return new Intl.DateTimeFormat("es-ES", {
    dateStyle: "medium",
    timeStyle: "short",
  }).format(new Date(value));
};

export const ContactsTable = ({
  contacts,
  onView,
}: {
  contacts: ContactSubmission[];
  onView: (contact: ContactSubmission) => void;
}) => {
  if (contacts.length === 0) {
    return (
      <div className="rounded-lg border border-dashed border-border bg-background px-6 py-12 text-center">
        <p className="font-medium text-foreground">No hay contactos con estos filtros.</p>
        <p className="mt-2 text-sm text-muted-foreground">Ajusta búsqueda o estado para revisar otros leads.</p>
      </div>
    );
  }

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>ID</TableHead>
          <TableHead>Nombre</TableHead>
          <TableHead>Email</TableHead>
          <TableHead>Fecha</TableHead>
          <TableHead>Estado</TableHead>
          <TableHead className="text-right">Detalle</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {contacts.map((contact) => (
          <TableRow key={contact.id}>
            <TableCell className="font-mono text-xs text-muted-foreground">{contact.id.slice(0, 8)}</TableCell>
            <TableCell className="font-medium">{contact.name}</TableCell>
            <TableCell>{contact.email}</TableCell>
            <TableCell>{formatDate(contact.created_at)}</TableCell>
            <TableCell>
              <Badge variant={statusVariants[contact.status]}>{statusLabels[contact.status]}</Badge>
            </TableCell>
            <TableCell className="text-right">
              <Button type="button" variant="outline" size="sm" onClick={() => onView(contact)}>
                <Eye className="mr-2 h-4 w-4" aria-hidden />
                Ver
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};
