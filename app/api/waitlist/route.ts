import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/waitlist-storage";

// Mark this route as dynamic to prevent static optimization
export const dynamic = 'force-dynamic';

export async function POST(request: Request) {
  console.log('Waitlist API called');
  try {
    const { email } = await request.json();
    console.log('Received email:', email);
    
    if (!email) {
      console.log('No email provided');
      return NextResponse.json(
        { success: false, message: "Email is required" },
        { status: 400 }
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
      { success: false, message: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
