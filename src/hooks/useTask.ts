import { useEffect, useState } from 'react';

import { secureInstance } from '@/lib/axios';
import { TaskParams } from '@/types/task';

type HookResponse = {
  isLoading: boolean;
  task: TaskParams | null;
};

export const useTask = (taskId: string | null): HookResponse => {
  const [isLoading, setIsLoading] = useState(false);
  const [task, setTask] = useState<TaskParams | null>(null);
  //temporary
  const getTask = async () => {
    try {
      const res = await secureInstance.get(`/tasks/${taskId}`);
      setTask(res.data);
      setIsLoading(false);
    } catch (err) {
      console.error(err);
    }
  };
  useEffect(() => {
    setIsLoading(true);
    if (!taskId) {
      setIsLoading(false);
      return;
    }
    getTask();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [taskId]);

  return { isLoading, task };
};
