import { mockTasks } from '@/data/mock/tasks';

export const useTask = (taskId: string | null) => {
  if (!taskId) return { isLoading: false, task: null };
  const task = mockTasks.find((task) => task.id === taskId) ?? null;
  return { isLoading: false, task };
};
