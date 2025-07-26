import { LOG_IN_PAGE, SIGN_UP_PAGE } from './constants';

const PUBLIC_ROUTES = ['/'];
const AUTH_ROUTES = [LOG_IN_PAGE, SIGN_UP_PAGE];

export const isPublicRoute = (path: string) =>
  PUBLIC_ROUTES.includes(path) || AUTH_ROUTES.includes(path);
export const isAuthRoute = (path: string) => AUTH_ROUTES.includes(path);
