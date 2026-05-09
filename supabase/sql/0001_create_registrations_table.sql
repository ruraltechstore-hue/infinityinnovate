-- Migration: create registrations table
-- Apply this in your Supabase SQL editor (or via Supabase CLI) after creating your project.

create table if not exists public.registrations (
  id uuid primary key default gen_random_uuid(),
  name text not null,
  phone text not null,
  email text not null,
  requirements text not null,
  created_at timestamptz not null default now()
);

comment on table public.registrations is 'Stores enquiry/contact form submissions.';

alter table public.registrations enable row level security;

create policy "Anyone can submit an enquiry"
  on public.registrations
  for insert
  to anon, authenticated
  with check (true);
