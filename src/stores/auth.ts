import axios from 'axios';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

import { User } from '@/types/user';

type StoreParams = {
  id: string | null;
  email: string | null;
  username: string | null;
  first_name: string | null;
  last_name: string | null;
  setUser: (user: User | null) => void;
  logout: () => Promise<void>;
};

const initialUser = {
  id: null,
  email: null,
  username: null,
  first_name: null,
  last_name: null,
};

export const useAuthStore = create<StoreParams>()(
  persist(
    (set) => ({
      ...initialUser,
      setUser: (user) => set({ ...user }),

      logout: async () => {
        try {
          await axios.post('/auth/logout');
          set({ ...initialUser });
        } catch (e) {
          console.error(e);
        }
      },
    }),
    { name: 'user' },
  ),
);
