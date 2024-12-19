import { supabase } from './supabase'

export async function addToWaitlist(email: string) {
  try {
    // Check if Supabase is properly configured
    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Supabase environment variables are not configured')
      return { success: false, message: 'Service temporarily unavailable' }
    }

    // Check if email already exists
    const { data: existingEmail } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single()

    if (existingEmail) {
      return { success: true, message: 'Email already registered' }
    }

    // Add new entry
    const { error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email,
          created_at: new Date().toISOString()
        }
      ])

    if (error) throw error

    return { success: true }
  } catch (error) {
    console.error('Error adding to waitlist:', error)
    return { success: false, message: 'Failed to add to waitlist' }
  }
}
