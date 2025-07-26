import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { signOut } from 'next-auth/react';

import { auth } from './auth';

const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

export const serverAxios: AxiosInstance = axios.create(baseConfig);

serverAxios.interceptors.request.use(
  async (config: InternalAxiosRequestConfig) => {
    try {
      const session = await auth();
      if (session?.user) {
        try {
          const { cookies } = await import('next/headers');
          const cookieStore = await cookies();
          const sessionCookie = cookieStore.get('authjs.session-token');

          if (sessionCookie) {
            config.headers.Authorization = `Bearer ${sessionCookie.value}`;
          }
        } catch {
          console.log('Server: Could not access cookies');
        }
      }
    } catch (error) {
      console.error('Server: Error getting Auth.js session token:', error);
    }

    return config;
  },
  (error) => Promise.reject(error),
);

// Server-side response interceptor
serverAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      console.log(
        'Server: Authentication error detected, logging out user:',
        error.response.status,
      );

      try {
        await signOut({
          callbackUrl: '/login',
          redirect: true,
        });
      } catch (signOutError) {
        console.error('Server: Error during sign out:', signOutError);
        if (typeof window !== 'undefined') {
          window.location.href = '/login';
        }
      }
    }

    return Promise.reject(error);
  },
);

export default serverAxios;
