create table if not exists public.contact_submissions (
  id uuid primary key default gen_random_uuid(),
  name varchar(255) not null,
  email varchar(255) not null,
  phone varchar(20),
  project_types text[] default '{}',
  budget varchar(50),
  location varchar(255),
  financing boolean default false,
  message text not null,
  attachments jsonb default '[]'::jsonb,
  created_at timestamp default now(),
  status varchar(20) default 'new' check (status in ('new', 'viewed', 'responded'))
);

alter table public.contact_submissions enable row level security;

create policy "Anonymous users can create contact submissions"
on public.contact_submissions
for insert
to anon
with check (true);

create policy "Authenticated admins can read contact submissions"
on public.contact_submissions
for select
to authenticated
using (true);

create policy "Authenticated admins can update contact submissions"
on public.contact_submissions
for update
to authenticated
using (true)
with check (true);
