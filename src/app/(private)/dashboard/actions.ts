'use server';

import { revalidatePath } from 'next/cache';

import { serverInstance } from '@/lib/serverAxios';

export const deleteProject = async (id: string) => {
  try {
    await serverInstance.delete(`/projects/${id}`);
    revalidatePath('/dashboard');
  } catch (e) {
    console.error(e);
  }
};
