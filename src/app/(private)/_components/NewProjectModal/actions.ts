'use server';
import { revalidatePath } from 'next/cache';

import { serverAxios } from '@/lib/axiosServer';
import { Project } from '@/types/projects';

export const createProject = async (
  newProject: Partial<Project>,
  userId: string | null,
) => {
  try {
    if (!userId) return;
    const res = await serverAxios.post('/projects', {
      ...newProject,
      createdById: userId,
    });
    revalidatePath('/dashboard');
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
