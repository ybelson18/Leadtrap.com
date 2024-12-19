import { createClient } from '@supabase/supabase-js'

// Create a function to get the Supabase client
export function getSupabase() {
  const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL
  const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY

  if (!supabaseUrl || !supabaseKey) {
    console.error('Missing Supabase credentials:', {
      url: !!supabaseUrl,
      key: !!supabaseKey
    });
    throw new Error('Missing Supabase credentials')
  }

  console.log('Creating Supabase client with URL:', supabaseUrl);
  return createClient(supabaseUrl, supabaseKey)
}
