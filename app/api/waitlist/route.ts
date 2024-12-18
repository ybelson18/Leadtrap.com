import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    // TODO: Add your email storage logic here
    // This could be:
    // 1. Sending to an email service (e.g., Mailchimp, ConvertKit)
    // 2. Storing in a database
    // 3. Sending yourself an email notification
    
    // For now, we'll just return success
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to join waitlist" },
      { status: 500 }
    );
  }
}
