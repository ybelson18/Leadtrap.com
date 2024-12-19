import { NextResponse } from "next/server";
import { addToWaitlist } from "@/lib/waitlist-storage";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    
    if (!email) {
      return NextResponse.json(
        { error: "Email is required" },
        { status: 400 }
      );
    }

    console.log('Attempting to add email to waitlist:', email);
    await addToWaitlist(email);
    console.log('Successfully added to waitlist');
    return NextResponse.json({ success: true });
  } catch (error: any) {
    console.error('Detailed waitlist error:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });
    return NextResponse.json(
      { error: error.message || "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
