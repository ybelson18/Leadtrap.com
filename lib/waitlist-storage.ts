import { getSupabase } from './supabase'

export async function addToWaitlist(email: string) {
  console.log('Starting addToWaitlist with email:', email);
  try {
    const supabase = getSupabase();
    console.log('Supabase client initialized');

    // Check if email already exists
    console.log('Checking for existing email...');
    const { data: existingEmail, error: existingError } = await supabase
      .from('waitlist')
      .select('email')
      .eq('email', email)
      .single();

    if (existingError && existingError.code !== 'PGRST116') {
      console.error('Error checking existing email:', existingError);
      throw existingError;
    }

    if (existingEmail) {
      console.log('Email already exists:', email);
      return { success: true, message: "Email already registered" };
    }

    // Add new entry
    console.log('Adding new email entry...');
    const { error } = await supabase
      .from('waitlist')
      .insert([
        { 
          email,
          created_at: new Date().toISOString()
        }
      ]);

    if (error) {
      console.error('Error inserting email:', error);
      throw error;
    }

    console.log('Successfully added email to waitlist');
    return { success: true };
  } catch (error) {
    console.error('Error in addToWaitlist:', error);
    return { success: false, message: 'Failed to add to waitlist' };
  }
}
