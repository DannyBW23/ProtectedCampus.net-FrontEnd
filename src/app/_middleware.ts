// pages/_middleware.js

import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  // Check if the `x-forwarded-proto` header is set to 'http'
  if (request.headers.get('x-forwarded-proto') === 'http') {
    // If so, construct the URL with the 'https' protocol and redirect to it
    const url = new URL(request.url);
    url.protocol = 'https:';
    url.hostname = 'protectedcampus.com'; // Set your custom domain here
    return NextResponse.redirect(url.toString(), 301);
  }

  // If the request uses HTTPS, no action is needed, just return the response
  return NextResponse.next();
}
