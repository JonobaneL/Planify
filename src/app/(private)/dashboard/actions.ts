'use server';

import { revalidatePath } from 'next/cache';

import serverAxios from '@/lib/axiosServer';

export const deleteProject = async (id: string) => {
  try {
    await serverAxios.delete(`/projects/${id}`);
    revalidatePath('/dashboard');
  } catch (e) {
    console.error(e);
  }
};
