import { Resend } from "resend";
import {
  buildAdminLeadEmail,
  buildRequesterConfirmationEmail,
  type ContactEmailPayload,
} from "./contactEmailTemplates.js";

export type ContactEmailResult = {
  requesterEmailId?: string;
  adminEmailId?: string;
  error?: string;
};

const requiredEnv = () => {
  const apiKey = process.env.RESEND_API_KEY;
  const from = process.env.CONTACT_EMAIL_FROM;
  const adminEmail = process.env.CONTACT_ADMIN_EMAIL;
  const siteUrl = process.env.PUBLIC_SITE_URL ?? process.env.VERCEL_URL;

  if (!apiKey || !from || !adminEmail || !siteUrl) {
    throw new Error(
      "Email notifications are not configured. Set RESEND_API_KEY, CONTACT_EMAIL_FROM, CONTACT_ADMIN_EMAIL, and PUBLIC_SITE_URL.",
    );
  }

  const normalizedSiteUrl = siteUrl.startsWith("http") ? siteUrl : `https://${siteUrl}`;

  return { apiKey, from, adminEmail, siteUrl: normalizedSiteUrl };
};

export const sendContactEmailNotifications = async (
  submission: ContactEmailPayload,
): Promise<ContactEmailResult> => {
  try {
    const { apiKey, from, adminEmail, siteUrl } = requiredEnv();
    const resend = new Resend(apiKey);
    const requesterEmail = buildRequesterConfirmationEmail({ submission, siteUrl });
    const adminLeadEmail = buildAdminLeadEmail({ submission, siteUrl });

    const [requesterResult, adminResult] = await Promise.all([
      resend.emails.send({
        from,
        to: submission.email,
        subject: requesterEmail.subject,
        html: requesterEmail.html,
      }),
      resend.emails.send({
        from,
        to: adminEmail,
        subject: adminLeadEmail.subject,
        html: adminLeadEmail.html,
      }),
    ]);

    const requesterError = requesterResult.error?.message;
    const adminError = adminResult.error?.message;

    if (requesterError || adminError) {
      const error = [requesterError, adminError].filter(Boolean).join(" | ");
      console.error("Contact email notification failed", {
        submissionId: submission.id,
        error,
      });
      return {
        requesterEmailId: requesterResult.data?.id,
        adminEmailId: adminResult.data?.id,
        error,
      };
    }

    return {
      requesterEmailId: requesterResult.data?.id,
      adminEmailId: adminResult.data?.id,
    };
  } catch (error) {
    const message = error instanceof Error ? error.message : "Unknown email notification error.";
    console.error("Contact email notification failed", {
      submissionId: submission.id,
      error: message,
    });
    return { error: message };
  }
};
