# Contact Supabase Persistence

The contact form posts to `/api/contact`. The API validates the payload, inserts a row into `contact_submissions`, then triggers email notifications when configured.

## Environment

For frontend admin/auth and public Supabase client:

```ini
VITE_SUPABASE_URL=https://your-project.supabase.co
VITE_SUPABASE_ANON_KEY=sb_publishable_...
```

For the serverless contact API, prefer a server-only service role key:

```ini
SUPABASE_URL=https://your-project.supabase.co
SUPABASE_SERVICE_ROLE_KEY=your-service-role-key
```

If `SUPABASE_SERVICE_ROLE_KEY` is not present, the API falls back to `VITE_SUPABASE_ANON_KEY`. In that fallback mode, Supabase RLS must allow anonymous inserts into `contact_submissions`.

Never expose `SUPABASE_SERVICE_ROLE_KEY` through `VITE_` variables.

## Required Table

Run the migration in `supabase/migrations/20260519_create_contact_submissions.sql`.

Recommended RLS split:

- Allow anonymous insert for contact form submissions if using the anon/publishable key.
- Allow authenticated admin select/update for dashboard use.
- Do not allow anonymous select/update.
