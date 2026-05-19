export type ContactEmailPayload = Pick<
  {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    project_types: string[] | null;
    budget: string | null;
    location: string | null;
    financing: boolean | null;
    message: string;
    created_at: string;
  },
  "id" | "name" | "email" | "phone" | "project_types" | "budget" | "location" | "financing" | "message" | "created_at"
>;

const escapeHtml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");

const formatList = (items: string[] | null) => {
  if (!items || items.length === 0) {
    return "No indicado";
  }

  return items.join(", ");
};

const fieldRows = (submission: ContactEmailPayload) => [
  ["Ticket", submission.id],
  ["Nombre", submission.name],
  ["Email", submission.email],
  ["Teléfono", submission.phone || "No indicado"],
  ["Proyecto", formatList(submission.project_types)],
  ["Presupuesto", submission.budget || "No indicado"],
  ["Ubicación", submission.location || "No indicada"],
  ["Financiación", submission.financing ? "Interesado" : "No indicada"],
];

const renderRows = (submission: ContactEmailPayload) =>
  fieldRows(submission)
    .map(
      ([label, value]) => `
        <tr>
          <td style="padding:8px 0;color:#64748b;font-size:13px;">${escapeHtml(label)}</td>
          <td style="padding:8px 0;color:#0f172a;font-size:13px;font-weight:600;">${escapeHtml(value)}</td>
        </tr>
      `,
    )
    .join("");

const baseShell = ({ title, intro, body }: { title: string; intro: string; body: string }) => `
  <!doctype html>
  <html lang="es">
    <body style="margin:0;background:#f8fafc;font-family:Arial,Helvetica,sans-serif;color:#0f172a;">
      <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f8fafc;padding:32px 16px;">
        <tr>
          <td align="center">
            <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="max-width:640px;background:#ffffff;border:1px solid #e2e8f0;border-radius:16px;overflow:hidden;">
              <tr>
                <td style="padding:28px 32px;border-bottom:1px solid #e2e8f0;">
                  <p style="margin:0 0 8px;color:#b7791f;font-size:12px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;">NordiK Studio</p>
                  <h1 style="margin:0;color:#0f172a;font-size:24px;line-height:1.25;">${escapeHtml(title)}</h1>
                  <p style="margin:12px 0 0;color:#475569;font-size:15px;line-height:1.6;">${escapeHtml(intro)}</p>
                </td>
              </tr>
              <tr>
                <td style="padding:28px 32px;">
                  ${body}
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </body>
  </html>
`;

export const buildRequesterConfirmationEmail = ({
  submission,
  siteUrl,
}: {
  submission: ContactEmailPayload;
  siteUrl: string;
}) => {
  const faqUrl = `${siteUrl.replace(/\/$/, "")}/faq`;

  return {
    subject: `Hemos recibido tu solicitud NordiK (${submission.id.slice(0, 8)})`,
    html: baseShell({
      title: "Gracias por contactar con NordiK",
      intro: "Hemos recibido tu solicitud. Nuestro equipo revisará los detalles y te responderá en 24-48 horas laborables.",
      body: `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-bottom:24px;">
          ${renderRows(submission)}
        </table>
        <div style="padding:16px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0;">
          <p style="margin:0;color:#0f172a;font-size:14px;font-weight:700;">Mensaje recibido</p>
          <p style="margin:8px 0 0;color:#475569;font-size:14px;line-height:1.6;">${escapeHtml(submission.message)}</p>
        </div>
        <p style="margin:24px 0 0;color:#475569;font-size:14px;line-height:1.6;">
          Mientras tanto, puedes revisar preguntas frecuentes sobre proceso, tiempos y garantías:
          <a href="${escapeHtml(faqUrl)}" style="color:#b7791f;font-weight:700;">ver FAQ NordiK</a>.
        </p>
      `,
    }),
  };
};

export const buildAdminLeadEmail = ({
  submission,
  siteUrl,
}: {
  submission: ContactEmailPayload;
  siteUrl: string;
}) => {
  const dashboardUrl = `${siteUrl.replace(/\/$/, "")}/admin/dashboard`;

  return {
    subject: `Nuevo contacto NordiK: ${submission.name}`,
    html: baseShell({
      title: "Nuevo contacto recibido",
      intro: "Hay una nueva solicitud guardada en el sistema. Revisa los datos y actualiza el estado desde el panel admin.",
      body: `
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse:collapse;margin-bottom:24px;">
          ${renderRows(submission)}
        </table>
        <div style="padding:16px;border-radius:12px;background:#f8fafc;border:1px solid #e2e8f0;">
          <p style="margin:0;color:#0f172a;font-size:14px;font-weight:700;">Mensaje del lead</p>
          <p style="margin:8px 0 0;color:#475569;font-size:14px;line-height:1.6;">${escapeHtml(submission.message)}</p>
        </div>
        <p style="margin:24px 0 0;">
          <a href="${escapeHtml(dashboardUrl)}" style="display:inline-block;border-radius:10px;background:#0f172a;color:#ffffff;padding:12px 18px;text-decoration:none;font-size:14px;font-weight:700;">Abrir dashboard</a>
        </p>
      `,
    }),
  };
};
