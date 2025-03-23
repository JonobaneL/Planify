import { create } from 'zustand';

import { mockTasks } from '@/data/mock/mockTasks';
import { TaskParams } from '@/types/task';

type StoreParams = {
  tasks: TaskParams[];
};
type StoreActions = {
  addTask: (task: TaskParams) => void;
};

export const useTasksStore = create<StoreParams & StoreActions>((set) => ({
  tasks: mockTasks,
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
}));
