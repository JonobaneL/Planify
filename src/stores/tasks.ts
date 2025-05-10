import { create } from 'zustand';

import { mockTasks } from '@/data/mock/tasks';
import { TaskParams } from '@/types/task';

type StoreParams = {
  tasks: TaskParams[];
};
type StoreActions = {
  addTask: (task: Partial<TaskParams>) => void;
  removeTask: (taskId: string) => void;
  updateTask: (taskId: string, updatedTask: Partial<TaskParams>) => void;
  getTaskById: (taskId: string) => TaskParams | undefined;
  getTasksByProjectId: (projectId: string) => TaskParams[];
};

export const useTasksStore = create<StoreParams & StoreActions>((set, get) => ({
  tasks: mockTasks,
  addTask: (task) =>
    set((state) => ({ tasks: [...state.tasks, task as TaskParams] })),
  removeTask: (taskId) =>
    set((state) => ({
      tasks: state.tasks.filter((task) => task.id !== taskId),
    })),
  updateTask: (taskId, updatedTask) =>
    set((state) => ({
      tasks: state.tasks.map((task) =>
        task.id === taskId ? { ...task, ...updatedTask } : task,
      ),
    })),
  getTaskById: (taskId) => get().tasks.find((task) => task.id === taskId),
  getTasksByProjectId: (projectId) =>
    get().tasks.filter((task) => task.projectId === projectId),
}));
