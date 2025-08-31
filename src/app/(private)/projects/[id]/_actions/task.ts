'use server';
import { revalidatePath } from 'next/cache';

import serverAxios from '@/lib/axiosServer';
import { TaskParams } from '@/types/task';

export const updateTask = async (
  taskId: string,
  projectId: string,
  data: Partial<TaskParams>,
) => {
  try {
    await serverAxios.patch(`/tasks/${taskId}`, data);
    //update method to revalidate tag instead of path

    revalidatePath(`/projects/${projectId}`);
  } catch (e) {
    console.error(e);
  }
};
