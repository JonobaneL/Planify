'use server';
import { revalidatePath } from 'next/cache';

import { serverInstance } from '@/lib/serverAxios';
import { Project } from '@/types/projects';

export const createProject = async (
  newProject: Partial<Project>,
  userId: string | null,
) => {
  try {
    if (!userId) return;
    const res = await serverInstance.post('/projects', {
      ...newProject,
      createdById: userId,
    });
    revalidatePath('/dashboard');
    return res.data;
  } catch (e) {
    console.error(e);
  }
};
