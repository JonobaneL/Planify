import axios from 'axios';
import { redirect } from 'next/navigation';

export const secureInstance = axios.create({
  baseURL: process.env.BACKEND_URL,
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: true,
});

secureInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    console.error(error);
    const originalRequest = error.config;

    if (error.response?.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        await secureInstance.post('/auth/refresh');
        return secureInstance(originalRequest); // retry original request
      } catch (refreshErr) {
        // TODO: add logout in client
        // window.dispatchEvent(new Event('auth:logout'));
        await secureInstance.post('/auth/logout');
        if (typeof window === 'undefined') redirect('/log-in');
        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(error);
  },
);
