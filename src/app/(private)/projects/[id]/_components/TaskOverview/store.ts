'use client';
import { create } from 'zustand';

type StoreParams = {
  taskOverview: boolean;
};
type StoreActions = {
  showOverview: () => void;
  onChange: (value: boolean) => void;
};

export const useTaskOverviewStore = create<StoreParams & StoreActions>(
  (set) => ({
    taskOverview: false,
    showOverview: () => set((state) => ({ taskOverview: !state.taskOverview })),
    onChange: (value) => set({ taskOverview: value }),
  }),
);
