import axios from 'axios';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export const serverInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

serverInstance.interceptors.request.use(
  async (config) => {
    const cookieStore = await cookies();

    const cookieString = cookieStore
      .getAll()
      .map((cookie) => `${cookie.name}=${cookie.value}`)
      .join('; ');

    if (cookieString) {
      config.headers['Cookie'] = cookieString;
    }
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
