const PUBLIC_ROUTES = new Set<string>(['/']);
const AUTH_ROUTES = new Set<string>(['/log-in', '/sign-up']);
export const isPublicRoute = (path: string) =>
  PUBLIC_ROUTES.has(path) || AUTH_ROUTES.has(path);
export const isAuthRoute = (path: string) =>
  PUBLIC_ROUTES.has(path) || AUTH_ROUTES.has(path);
