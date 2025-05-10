import { mockTasks } from '@/data/mock/tasks';
import { TaskParams } from '@/types/task';

type HookResponse = {
  isLoading: boolean;
  task: TaskParams | null;
};

export const useTask = (taskId: string | null): HookResponse => {
  if (!taskId) return { isLoading: false, task: null };
  const task = mockTasks.find((task) => task.id === taskId) ?? null;
  return { isLoading: false, task };
};
