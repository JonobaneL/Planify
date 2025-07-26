import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios';
import { signOut } from 'next-auth/react';

import { NEXT_PUBLIC_BACKEND_URL } from '@/config/env';
import { LOG_IN_PAGE } from '@/utils/constants';

// Base configuration for client instance
const baseConfig = {
  baseURL: NEXT_PUBLIC_BACKEND_URL,
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
};

// CLIENT-SIDE Axios instance for client components and browser
export const clientAxios: AxiosInstance = axios.create({
  ...baseConfig,
  withCredentials: true, // Important: This ensures cookies are sent with requests
});

// Client-side response interceptor
clientAxios.interceptors.response.use(
  (response: AxiosResponse) => response,
  async (error: AxiosError) => {
    if (
      error.response &&
      (error.response.status === 401 || error.response.status === 403)
    ) {
      try {
        await signOut({
          callbackUrl: LOG_IN_PAGE,
          redirect: true,
        });
      } catch (signOutError) {
        console.error('Client: Error during sign out:', signOutError);
        if (typeof window !== 'undefined') {
          window.location.href = LOG_IN_PAGE;
        }
      }
    }

    return Promise.reject(error);
  },
);

export default clientAxios;
