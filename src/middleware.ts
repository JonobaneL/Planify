import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

const PUBLIC_ROUTES = new Set<string>(['/log-in', '/sign-up', '/']);
const isPublicRoute = (path: string) => PUBLIC_ROUTES.has(path);

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  const token = request.cookies.get('access_token')?.value;

  if (token && isPublicRoute(pathname))
    return NextResponse.redirect(new URL('/dashboard', origin));

  if (isPublicRoute(pathname)) return NextResponse.next();

  if (!token) return NextResponse.redirect(new URL('/log-in', origin));

  try {
    const secret = new TextEncoder().encode(process.env.ACCESS_SECRET);
    await jwtVerify(token, secret);
    return NextResponse.next();
  } catch (err) {
    console.error(err);
    return NextResponse.redirect(new URL('/log-in', origin));
  }
}

export const config = {
  // Apply to all routes except static assets and Next.js internals
  matcher: [
    '/((?!api|auth|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
