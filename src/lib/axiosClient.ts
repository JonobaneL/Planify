import axios, { AxiosInstance, AxiosResponse, AxiosError } from "axios";
import { signOut } from "next-auth/react";

// Base configuration for client instance
const baseConfig = {
  baseURL: process.env.NEXT_PUBLIC_BACKEND_URL || "http://localhost:3000/api",
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
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
          callbackUrl: "/login",
          redirect: true,
        });
      } catch (signOutError) {
        console.error("Client: Error during sign out:", signOutError);
        if (typeof window !== "undefined") {
          window.location.href = "/login";
        }
      }
    }

    return Promise.reject(error);
  }
);

export default clientAxios;
