import { NextResponse } from 'next/server';

import { auth } from '@/lib/auth';

import { isAuthRoute, isPublicRoute } from './utils/routes';

export default auth((req) => {
  // If user is authenticated and trying to access auth routes, redirect to dashboard
  if (req.auth && isAuthRoute(req.nextUrl.pathname)) {
    const newUrl = new URL('/dashboard', req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }

  // If user is not authenticated and trying to access private routes, redirect to login
  if (!req.auth && !isPublicRoute(req.nextUrl.pathname)) {
    const newUrl = new URL('/log-in', req.nextUrl.origin);
    return NextResponse.redirect(newUrl);
  }

  return NextResponse.next();
});

export const config = {
  matcher: ['/((?!api|_next/static|_next/image|favicon.ico).*)', '/'],
};
