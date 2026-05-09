import { createClient, type SupabaseClient } from "@supabase/supabase-js";

/**
 * Supabase client (safe init).
 *
 * Paste your credentials into a `.env.local` file at the project root:
 *
 *   VITE_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
 *   VITE_SUPABASE_ANON_KEY=YOUR-PUBLIC-ANON-KEY
 *
 * The app will not crash if these are missing — `supabase` will simply be `null`
 * and any insert calls will return a friendly error. See `src/pages/Contact.tsx`
 * and `src/components/luxury/EnquiryForm.tsx` for usage.
 */
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL as string | undefined;
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY as string | undefined;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase: SupabaseClient | null = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

export type RegistrationPayload = {
  name: string;
  phone: string;
  email: string;
  requirements: string;
};

/**
 * Inserts a registration into the `registrations` table.
 * Expected schema:
 *   id (uuid, default gen_random_uuid()), name text, phone text,
 *   email text, requirements text, created_at timestamptz default now()
 */
export async function submitRegistration(payload: RegistrationPayload) {
  if (!supabase) {
    return {
      ok: false,
      error: "Backend is not yet connected. Please try again later.",
    } as const;
  }
  const { error } = await supabase.from("registrations").insert([payload]);
  if (error) {
    return { ok: false, error: error.message } as const;
  }
  return { ok: true } as const;
}
