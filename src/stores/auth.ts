import { create } from 'zustand';

import { SignUserProps, User } from '@/types/user';

type StoreParams = {
  id: string | null;
  email: string | null;
  username: string | null;
  firstName: string | null;
  lastName: string | null;
  accessToken: string | null;
  setUser: (user: User | null) => void;
  login: (email: string, password: string) => Promise<void>;
  signup: (newUser: SignUserProps) => Promise<void>;
  logout: () => Promise<void>;
};

const initialUser = {
  id: null,
  email: null,
  username: null,
  firstName: null,
  lastName: null,
  accessToken: null,
};

export const useAuthStore = create<StoreParams>((set) => ({
  ...initialUser,
  setUser: (user) => set({ ...user }),
  login: async (email, password) => {
    try {
      const response = await fetch('/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
      const json = await response.json();
      set({ ...json });
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
      set({ ...json });
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
}));
