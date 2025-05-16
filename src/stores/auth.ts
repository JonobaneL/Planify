import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { SignUserProps, User } from '@/types/user';

type StoreParams = {
  id: string | null;
  email: string | null;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  isLoggedIn: boolean;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (newUser: SignUserProps) => Promise<void>;
  logout: () => Promise<void>;
};

const initialUser = {
  id: null,
  email: null,
  username: null,
  first_name: null,
  last_name: null,
  isLoggedIn: false,
};

export const useAuthStore = create<StoreParams>()(
  persist(
    (set) => ({
      ...initialUser,
      setUser: (user) => set({ ...user }),
      login: async (email, password) => {
        try {
          const res = await axios.post('/auth/login', { email, password });

          set({
            ...res.data,
            isLoggedIn: true,
          });
        } catch (e) {
          console.error(e);
        }
      },
      signup: async (newUser) => {
        try {
          const response = await fetch('/auth/signup', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify(newUser),
          });
          const json = await response.json();
          set({ ...json, isLoggedIn: true });
        } catch (err) {
          console.error(err);
        }
      },
      logout: async () => {
        try {
          await fetch('/auth/logout', {
            method: 'POST',
          });
          set({ ...initialUser });
        } catch (e) {
          console.error(e);
        }
      },
    }),
    { name: 'user' },
  ),
);
