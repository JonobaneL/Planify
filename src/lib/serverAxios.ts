import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

import { BACKEND_URL } from '@/config/env';

export const serverInstance = axios.create({
  baseURL: BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

serverInstance.interceptors.request.use(
  async (config) => {
    const cookieStore = await cookies();

    const token = cookieStore.get('access_token')?.value;
    if (token) config.headers['Authorization'] = `Bearer ${token}`;

    return config;
  },
  (error) => Promise.reject(error),
);

serverInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== '/auth/refresh'
    ) {
      originalRequest._retry = true;

      try {
        const res = await serverInstance.post('/auth/refresh');
        const accessToken = res.data.accessToken;
        originalRequest.headers['Authorization'] = `Bearer ${accessToken}`;
        return serverInstance(originalRequest);
      } catch (refreshErr) {
        console.error('Refresh failed:', refreshErr);
        redirect('/log-in');
      }
    }
    return Promise.reject(error);
  },
);
