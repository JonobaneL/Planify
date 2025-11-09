import axios, {
  AxiosInstance,
  InternalAxiosRequestConfig,
  AxiosResponse,
  AxiosError,
} from 'axios';
import { redirect } from 'next/navigation';

import { BACKEND_URL } from '@/config/env';

import { auth } from './auth';

const baseConfig = {
  baseURL: BACKEND_URL,
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
      // TODO: fix redirect
      redirect('/log-in');
    }

    return Promise.reject(error);
  },
);

export default serverAxios;
