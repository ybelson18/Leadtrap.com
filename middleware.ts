import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
export function middleware(request: NextRequest) {
  // Check if the request is for the pricing page
  if (request.nextUrl.pathname === '/pricing') {
    // Redirect to home page
    return NextResponse.redirect(new URL('/', request.url))
  }
 
  return NextResponse.next()
}
 
export const config = {
  matcher: '/pricing',
}
