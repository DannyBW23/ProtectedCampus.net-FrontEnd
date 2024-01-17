import { NextRequest, NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
  const isHttps = request.headers.get('x-forwarded-proto')?.startsWith('https');
  const isLocalhost = request.headers.get('host')?.includes('localhost');

  // Check if the environment is production, the connection is not HTTPS, and the host is not localhost
  if (process.env.NODE_ENV === 'production' && !isHttps && !isLocalhost) {
    // Construct the new URL with HTTPS
    const url = new URL(request.url);
    url.protocol = 'https:';
    return NextResponse.redirect(url.href, 301);
  }

  return NextResponse.next();
}
