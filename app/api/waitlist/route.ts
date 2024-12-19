import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/waitlist-storage";

// Mark this route as dynamic to prevent static optimization
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  console.log('Waitlist API called - v2');  
  try {
    // Log environment variables (but not their values for security)
    console.log('Environment variables present:', {
      hasSupabaseUrl: !!process.env.NEXT_PUBLIC_SUPABASE_URL,
      hasSupabaseKey: !!process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
    });

    const { email } = await request.json();
    console.log('Received email:', email);
    
    if (!email) {
      console.log('No email provided');
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
      );
    }

    if (!process.env.NEXT_PUBLIC_SUPABASE_URL || !process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY) {
      console.error('Missing Supabase credentials');
      return NextResponse.json(
        { success: false, message: "Server configuration error" },
        { status: 500 }
      );
    }

    const result = await addToWaitlist(email);
    console.log('Waitlist result:', result);
    
    if (!result.success) {
      return NextResponse.json(
        { success: false, message: result.message || "Failed to join waitlist" },
        { status: 500 }
      );
    }

    return NextResponse.json(result);
  } catch (error) {
    console.error('Error in waitlist API:', error);
    return NextResponse.json(
      { success: false, message: error instanceof Error ? error.message : "Failed to add to waitlist" },
      { status: 500 }
    );
  }
}
