import type { SupabaseClient } from "@supabase/supabase-js";
import { getSupabaseBrowserClient } from "@/lib/supabaseClient";

export type ContactStatus = "new" | "viewed" | "responded";

export type ContactSubmission = {
  id: string;
  name: string;
  email: string;
  phone: string | null;
  project_types: string[] | null;
  budget: string | null;
  location: string | null;
  financing: boolean | null;
  message: string;
  attachments: unknown[] | null;
  created_at: string;
  status: ContactStatus;
};

const tableName = "contact_submissions";

const requireClient = (): SupabaseClient => {
  const client = getSupabaseBrowserClient();
  if (!client) {
    throw new Error("Supabase is not configured. Set VITE_SUPABASE_URL and VITE_SUPABASE_ANON_KEY.");
  }
  return client;
};

export const listContactSubmissions = async ({
  status,
  query,
}: {
  status: ContactStatus | "all";
  query: string;
}) => {
  const client = requireClient();
  let request = client.from(tableName).select("*").order("created_at", { ascending: false });

  if (status !== "all") {
    request = request.eq("status", status);
  }

  const { data, error } = await request;

  if (error) {
    throw error;
  }

  const normalizedQuery = query.trim().toLowerCase();
  const contacts = (data ?? []) as ContactSubmission[];

  if (!normalizedQuery) {
    return contacts;
  }

  return contacts.filter((contact) => {
    return (
      contact.name.toLowerCase().includes(normalizedQuery) ||
      contact.email.toLowerCase().includes(normalizedQuery)
    );
  });
};

export const updateContactSubmissionStatus = async (id: string, status: ContactStatus) => {
  const client = requireClient();
  const { data, error } = await client
    .from(tableName)
    .update({ status })
    .eq("id", id)
    .select("*")
    .single();

  if (error) {
    throw error;
  }

  return data as ContactSubmission;
};
