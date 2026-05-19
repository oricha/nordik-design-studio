import { z } from "zod";

export const contactAttachmentSchema = z.object({
  name: z.string().min(1).max(255),
  size: z.number().int().nonnegative().max(10 * 1024 * 1024),
  type: z.string().max(120).optional(),
});

export const contactSubmissionSchema = z.object({
  name: z.string().trim().min(2, "Introduce al menos 2 caracteres.").max(255),
  email: z.string().trim().email("Introduce un correo electrónico válido.").max(255),
  phone: z.string().trim().max(24).optional().or(z.literal("")),
  projectTypes: z.array(z.string().trim().min(1)).min(1, "Selecciona al menos un tipo de proyecto."),
  budget: z.string().trim().min(1, "Selecciona un rango de presupuesto.").max(50),
  location: z.string().trim().max(255).optional().or(z.literal("")),
  financing: z.boolean().default(false),
  message: z.string().trim().min(10, "Cuéntanos un poco más sobre tu proyecto.").max(1000),
  acceptedTerms: z.literal(true, {
    errorMap: () => ({ message: "Debes aceptar los términos para enviar la solicitud." }),
  }),
  attachments: z.array(contactAttachmentSchema).max(5).default([]),
});

export type ContactSubmissionInput = z.infer<typeof contactSubmissionSchema>;

export const toContactSubmissionRow = (input: ContactSubmissionInput) => ({
  name: input.name,
  email: input.email,
  phone: input.phone || null,
  project_types: input.projectTypes,
  budget: input.budget,
  location: input.location || null,
  financing: input.financing,
  message: input.message,
  attachments: input.attachments,
  status: "new" as const,
});
