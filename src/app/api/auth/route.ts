// /app/api/auth/refresh/route.ts
import axios from 'axios';
import { cookies } from 'next/headers';
import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    // Forw
    // ard the request to the Node.js backend
    const cookiesStore = await cookies();
    const response = await axios.post(
      `${process.env.BACKEND_URL}/auth/refresh`,
      {},
      {
        headers: {
          Cookie: request.headers.get('cookie') || '',
        },
        responseType: 'json',
      },
    );

    const res = NextResponse.json({
      message: 'Access token refreshed',
      accessToken: response.data.accessToken,
    });
    console.log('check');
    // Forward the Set-Cookie header from the Node.js backend
    const setCookieHeaders = response.headers['set-cookie'];
    if (setCookieHeaders) {
      cookiesStore.set('access_token', response.data.accessToken, {
        httpOnly: true,
      });
    }
    console.log(res.cookies.set('access_token', response.data.accessToken));
    return res;
  } catch (error) {
    console.error('Refresh failed:', error);
    return NextResponse.redirect('/log-in');
  }
}
