# Contact Email Notifications

This feature sends email notifications after a contact submission has already been saved.

## Environment

Configure these variables in the server environment, such as Vercel Environment Variables:

```ini
RESEND_API_KEY=re_...
CONTACT_EMAIL_FROM=NordiK <contacto@your-domain.com>
CONTACT_ADMIN_EMAIL=ventas@your-domain.com
PUBLIC_SITE_URL=https://your-production-domain.com
```

`RESEND_API_KEY` must remain server-side. Do not prefix it with `VITE_`, and do not expose it in browser code.

## Delivery Order

1. Validate and persist the contact submission.
2. Call the email notification sender with the saved submission, including the generated submission ID.
3. If email delivery fails, keep the saved submission and log or surface the delivery error for operational follow-up.

This feature does not delete or reject a saved lead because of an email provider failure.
