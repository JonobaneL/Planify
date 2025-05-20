import axios from 'axios';

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

    if (
      error.response?.status === 401 &&
      !originalRequest._retry &&
      originalRequest.url !== '/auth/refresh'
    ) {
      originalRequest._retry = true;

      try {
        await secureInstance.post('/auth/refresh');
        return secureInstance(originalRequest); // retry original request
      } catch (refreshErr) {
        if (typeof window !== 'undefined')
          window.dispatchEvent(new Event('auth:logout'));

        return Promise.reject(refreshErr);
      }
    }
    return Promise.reject(error);
  },
);
