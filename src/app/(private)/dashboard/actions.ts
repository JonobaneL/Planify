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

export const archiveProject = async (id: string) => {
  try {
    await serverAxios.patch(`/projects/${id}`, { archived: true });
    revalidatePath('/dashboard');
  } catch (e) {
    console.error(e);
  }
};

export const addProjectToFavorite = async (id: string, favorite: boolean) => {
  try {
    const res = await serverAxios.patch(`/projects/${id}`, { favorite });
    revalidatePath('/dashboard');
    return res.data;
  } catch (e) {
    console.error('Server Log:', e);
    throw e;
  }
};
