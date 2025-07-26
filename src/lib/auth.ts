import axios from 'axios';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';

import { NEXT_PUBLIC_BACKEND_URL, NEXT_PUBLIC_AUTH_SECRET } from '@/config/env';

const credentialsConfig = {
  email: { label: 'Email', type: 'text', placeholder: 'email' },
  password: { label: 'Password', type: 'password' },
};

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: credentialsConfig,
      async authorize(credentials) {
        try {
          const userResponse = await axios.post(
            `${NEXT_PUBLIC_BACKEND_URL}/auth/verify-user`,
            {
              email: credentials?.email,
              password: credentials?.password,
            },
            {
              headers: {
                'Content-Type': 'application/json',
              },
            },
          );

          const user = userResponse.data;
          if (userResponse.status === 200 && user) {
            return user;
          }
          return null;
        } catch (err) {
          console.error('Authentication error:', err);
          return null;
        }
      },
    }),
  ],
  secret: NEXT_PUBLIC_AUTH_SECRET,
  session: {
    strategy: 'jwt',
    maxAge: 24 * 60 * 60, // 24 hours
  },
  pages: {
    signIn: '/log-in',
  },
  jwt: {
    encode: async ({ secret, token }) => {
      const { SignJWT } = await import('jose');
      return new SignJWT(token)
        .setProtectedHeader({ alg: 'HS256' })
        .setIssuedAt()
        .setExpirationTime('1d')
        .sign(new TextEncoder().encode(secret as string));
    },
    decode: async ({ secret, token }) => {
      const { jwtVerify } = await import('jose');
      try {
        const { payload } = await jwtVerify(
          token!,
          new TextEncoder().encode(secret as string),
          {
            algorithms: ['HS256'],
          },
        );
        return payload;
      } catch (error) {
        console.error('JWT decode error:', error);
        return null;
      }
    },
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return { ...token, ...user };
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        session.user = {
          ...session.user,
          id: token.id as string,
          first_name: token.first_name as string,
          last_name: token.last_name as string,
          username: token.username as string,
          role: token.role as string,
        };
      }
      return session;
    },
    async redirect({ url, baseUrl }) {
      // Allows relative callback URLs
      if (url.startsWith('/')) return `${baseUrl}${url}`;
      // Allows callback URLs on the same origin
      else if (new URL(url).origin === baseUrl) return `${baseUrl}/dashboard`;
      return baseUrl;
    },
  },
});
