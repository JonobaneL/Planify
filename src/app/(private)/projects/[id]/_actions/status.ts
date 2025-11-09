'use server';

import { revalidatePath } from 'next/cache';

import serverAxios from '@/lib/axiosServer';

export const updateStatus = async (
  statusId: string | null,
  column: string,
  taskId: string,
  projectId: string,
) => {
  try {
    await serverAxios.patch(`/tasks/${taskId}`, {
      [column]: statusId,
    });
    //update method to revalidate tag instead of path

    revalidatePath(`/projects/${projectId}`);
  } catch (e) {
    console.error(e);
  }
};
