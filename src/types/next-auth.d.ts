import 'next-auth';
import { User } from './user';

declare module 'next-auth' {
  interface Session {
    user: User;
  }
}

declare module 'next-auth/jwt' {
  interface JWT {
    id: string;
    first_name: string;
    last_name: string;
    username: string;
    role: string;
  }
}
