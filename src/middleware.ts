import axios from 'axios';
import { jwtVerify } from 'jose';
import { NextRequest, NextResponse } from 'next/server';

import { isAuthRoute, isPublicRoute } from './utils/routes';

export async function middleware(request: NextRequest) {
  const { pathname, origin } = request.nextUrl;

  const access_token = request.cookies.get('access_token')?.value;
  const refresh_token = request.cookies.get('refresh_token')?.value;

  if (isAuthRoute(pathname) && (access_token || refresh_token))
    return NextResponse.redirect(new URL('/dashboard', origin));

  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }

  if (!refresh_token) {
    return NextResponse.redirect(new URL('/log-in', origin));
  }
  const secret = new TextEncoder().encode(process.env.ACCESS_SECRET);

  //temporary approach
  if (!access_token) {
    try {
      const res = await axios.post(
        `${process.env.BACKEND_URL}/auth/refresh`,
        {},
        {
          headers: {
            cookie: `refresh_token=${refresh_token}`,
          },
        },
      );
      const newAccessToken = res.data.accessToken;
      await jwtVerify(newAccessToken, secret, {
        maxTokenAge: `15m`,
      });
      const middleware_res = NextResponse.next();

      middleware_res.cookies.set('access_token', newAccessToken, {
        httpOnly: true,
        sameSite: 'strict',
        path: '/',
        maxAge: 15 * 60 * 1000,
      });
      return middleware_res;
    } catch (err) {
      console.error(err);
      return NextResponse.redirect(new URL('/log-in', origin));
    }
  }
  try {
    await jwtVerify(access_token, secret, {
      maxTokenAge: `15m`,
    });
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
