'use server';

import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export async function refreshTokenAction() {
  try {
    const cookiesStore = await cookies();
    const response = await axios.post(
      `${process.env.BACKEND_URL}/auth/refresh`,
      {},
      {
        headers: {
          Cookie: cookiesStore
            .getAll()
            .map((cookie) => `${cookie.name}=${cookie.value}`)
            .join('; '),
        },
      },
    );

    const accessToken = response.data.accessToken;
    cookiesStore.set('access_token', accessToken, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      maxAge: 15 * 60, // 15 minutes
      path: '/',
    });

    return { success: true, accessToken };
  } catch (error) {
    console.error('Refresh failed:', error);
    redirect('/log-in');
  }
}
