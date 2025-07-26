// Client-side environment variables (NEXT_PUBLIC_)
export const NEXT_PUBLIC_BACKEND_URL = process.env.NEXT_PUBLIC_BACKEND_URL;

export const NEXT_PUBLIC_AUTH_SECRET = process.env.NEXT_PUBLIC_AUTH_SECRET;

export const BACKEND_URL = process.env.BACKEND_URL;

export const NODE_ENV = process.env.NODE_ENV ?? 'development';

export const IS_PRODUCTION = NODE_ENV === 'production';
export const IS_DEVELOPMENT = NODE_ENV === 'development';

export type EnvironmentVariables = {
  // Client-side variables
  NEXT_PUBLIC_BACKEND_URL: string;
  NEXT_PUBLIC_AUTH_SECRET: string | undefined;

  // Server-side variables
  BACKEND_URL: string | undefined;
  NODE_ENV: 'development' | 'production' | 'test';

  // Computed values
  IS_PRODUCTION: boolean;
  IS_DEVELOPMENT: boolean;
};
