import type { VercelRequest, VercelResponse } from "@vercel/node";
import { getSupabaseServerClient } from "../src/lib/supabaseServer.js";
import { contactSubmissionSchema, toContactSubmissionRow } from "../src/lib/contactSubmissionSchema.js";
import { sendContactEmailNotifications } from "../src/lib/contactEmailNotifications.server.js";

const contactTable = "contact_submissions";

const parseBody = (body: unknown) => {
  if (typeof body === "string") {
    return JSON.parse(body);
  }

  return body;
};

const fieldErrorsFromZod = (error: { flatten: () => { fieldErrors: Record<string, string[]> } }) => {
  const { fieldErrors } = error.flatten();
  return Object.fromEntries(Object.entries(fieldErrors).map(([key, value]) => [key, value[0] ?? "Campo inválido."]));
};

export default async function handler(request: VercelRequest, response: VercelResponse) {
  if (request.method !== "POST") {
    response.setHeader("Allow", "POST");
    return response.status(405).json({ ok: false, error: "Method not allowed" });
  }

  let parsedBody: unknown;
  try {
    parsedBody = parseBody(request.body);
  } catch {
    return response.status(400).json({ ok: false, error: "Invalid JSON body" });
  }

  const validation = contactSubmissionSchema.safeParse(parsedBody);

  if (!validation.success) {
    return response.status(400).json({
      ok: false,
      error: "Validation failed",
      fieldErrors: fieldErrorsFromZod(validation.error),
    });
  }

  try {
    const supabase = getSupabaseServerClient();
    const { data, error } = await supabase
      .from(contactTable)
      .insert(toContactSubmissionRow(validation.data))
      .select("*")
      .single();

    if (error) {
      return response.status(500).json({ ok: false, error: "Could not save contact submission" });
    }

    const emailResult = await sendContactEmailNotifications({
      id: data.id,
      name: data.name,
      email: data.email,
      phone: data.phone,
      project_types: data.project_types,
      budget: data.budget,
      location: data.location,
      financing: data.financing,
      message: data.message,
      created_at: data.created_at,
    });

    return response.status(201).json({
      ok: true,
      id: data.id,
      ticket: data.id.slice(0, 8).toUpperCase(),
      status: data.status,
      emailError: emailResult.error,
    });
  } catch (error) {
    console.error("Contact submission failed", error);
    return response.status(500).json({ ok: false, error: "Unexpected contact submission error" });
  }
}
