/**
 * Supabase project config reference.
 *
 * To connect this app to Supabase:
 *  1. Create a project at https://supabase.com
 *  2. Create a `registrations` table with the SQL below.
 *  3. Add these env vars to a `.env.local` at the project root:
 *
 *     VITE_SUPABASE_URL=https://ragdziqoxhqaqdcabhyt.supabase.co
 *     VITE_SUPABASE_ANON_KEY=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJhZ2R6aXFveGhxYXFkY2FiaHl0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzgzMDQ5MDAsImV4cCI6MjA5Mzg4MDkwMH0.l-PawL11iGLw1lW4b2NF0wN6OQj4OTb1RirGRLE883g

 *
 * SQL:
 *   create table public.registrations (
 *     id uuid primary key default gen_random_uuid(),
 *     name text not null,
 *     phone text not null,
 *     email text not null,
 *     requirements text,
 *     created_at timestamptz not null default now()
 *   );
 *   alter table public.registrations enable row level security;
 *   create policy "anon can insert" on public.registrations
 *     for insert to anon with check (true);
 */
export const SUPABASE_TABLES = {
  registrations: "registrations",
} as const;
