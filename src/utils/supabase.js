import { createClient } from '@supabase/supabase-js';

// Check if environment variables are available
if (!import.meta.env.VITE_SUPABASE_URL || !import.meta.env.VITE_SUPABASE_ANON_KEY) {
  console.warn(
    'Supabase credentials not found. Please click the "Connect to Supabase" button in the top right corner.'
  );
}

export const supabase = createClient(
  import.meta.env.VITE_SUPABASE_URL || 'http://placeholder-url.com',
  import.meta.env.VITE_SUPABASE_ANON_KEY || 'placeholder-key'
);

export const isSupabaseConfigured = () => {
  return Boolean(import.meta.env.VITE_SUPABASE_URL && import.meta.env.VITE_SUPABASE_ANON_KEY);
};